<template>
  <div>
    <div class="score-progress" v-if="scoreLoading || !ready">
      <v-progress-circular :size="60" color="primary" indeterminate></v-progress-circular>
    </div>
    <div class="score" ref="scorediv" v-show="!scoreLoading" :style="{opacity: ready ? 100 : 0}"></div>
  </div>
</template>

<script>
import axios from "axios";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

async function fetchData(path) {
  try {
    let xmlData;

    // Check if the path is a URL
    if (path.startsWith('http')) {
      // Fetch data from URL using Axios
      const response = await axios.get(path);
      xmlData = response.data;
    } else {
      // Read local file using FileReader API
      xmlData = await readLocalFile(path);
    }
    return xmlData;
  } catch (error) {
    console.error('Error fetching XML data:', error);
    throw error; // You might want to handle or log the error accordingly
  }
}

function readLocalFile(filePath) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = function (event) {
      resolve(event.target.result);
    };

    fileReader.onerror = function (error) {
      reject(error);
    };

    // Read the local file
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      fileReader.readAsText(file);
    });

    fileInput.click();
  });
}

export default {
  props: ["score", "ready"],
  data() {
    return {
      osmd: null,
      scoreLoading: false,
      zoom: 1,
    };
  },
  watch: {
    score(val, oldVal) {
      if (!val || val === oldVal) return;
      this.loadScore(val);
    }
  },
  async mounted() {
    this.osmd = new OpenSheetMusicDisplay(this.$refs.scorediv, {
      followCursor: true,
      autoResize: false
      // backend: "canvas"
    });
    this.$emit("osmdInit", this.osmd);
    if (this.score) this.loadScore(this.score);
  },
  computed: {
    computedZoom() {
      // Adjust the conditions and calculations based on your specific requirements
      if (window.innerWidth < 768) {
        // For screens narrower than 768px
        return this.zoom * 0.25; // Adjust the scale factor as needed
      } else {
        // For larger screens
        return this.zoom;
      }
    },
  },
  methods: {
    async loadScore(scoreUrl) {
      this.scoreLoading = true;
      let scoreXml = await fetchData(scoreUrl);
      await this.osmd.load(scoreXml);
      this.scoreLoading = false;
      await this.$nextTick();
      if (window.innerWidth < 768) {
        this.zoom = 0.5
      };
      this.osmd.Zoom = this.zoom;
      await this.osmd.render();
      this.$emit("scoreLoaded");
    }
  }
};
</script>

<style scoped lang="scss">
.score {
  width: 100%;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
}

.score-progress {
  text-align: center;
}
</style>

<style lang="scss">
.score {
  img {
    z-index: 1 !important;
  }
}
</style>
