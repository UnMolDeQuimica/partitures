<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Playback settings
          </v-list-tile-title>
        </v-list-tile>
        <PlaybackSidebar :playbackEngine="pbEngine" v-if="pbEngineReady" />
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-select :items="scores" label="Selecciona partitura" @change="scoreChanged" />
        <Score 
          v-if="mounted"
          @osmdInit="osmdInit"
          @scoreLoaded="scoreLoaded"
          :score="selectedScore"
          :ready="pbEngineReady"
        />
      </v-container>
      <PlaybackControls :playbackEngine="pbEngine" :scoreTitle="scoreTitle" />
    </v-content>
  </v-app>
</template>

<script>
import PlaybackSidebar from "./components/PlaybackSidebar";
import PlaybackControls from "./components/PlaybackControls.vue";
import Score from "./components/Score";

import scores from "./scores";

import PlaybackEngine from "osmd-audio-player";

export default {
  name: "app",
  components: {
    osmd: null,
    Score,
    PlaybackSidebar,
    PlaybackControls
  },
  data() {
    return {
      pbEngine: new PlaybackEngine(),
      pbEngineReady: false,
      scores: scores,
      selectedScore: null,
      osmd: null,
      scoreTitle: "",
      drawer: false,
      mounted: false
    };
  },
  computed: {},
  methods: {
    osmdInit(osmd) {
      console.log("OSMD init");
      this.osmd = osmd;
      this.selectedScore =
        "https://raw.githubusercontent.com/UnMolDeQuimica/partitures-source/main/assets/ay-linda-amiga.musicxml";
    },
    async scoreLoaded() {
      console.log("Score loaded");
      if (this.osmd.sheet.title) this.scoreTitle = this.osmd.sheet.title.text;
      await this.pbEngine.loadScore(this.osmd);
      console.log("pbEngine ready");
      this.pbEngineReady = true;
    },
    scoreChanged(scoreUrl) {
      if (this.pbEngine.state === "PLAYING") this.pbEngine.stop();
      this.selectedScore = scoreUrl;
      this.pbEngineReady = false;
    }
  },
  mounted() {
    setTimeout(() => {
      // This extra delay before rendering the score component seems to help occasional issues where the 
      // OSMD cursor img element gets detached from the DOM and doesn't show unless 
      // you refresh the page. A less pretty workaround until root cause is determined
      this.mounted = true;
    }, 10)
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
