/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1545:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@babel/polyfill/lib/index.js
var lib = __webpack_require__(6981);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify = __webpack_require__(5464);
var vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify);
// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.min.css
var vuetify_min = __webpack_require__(6469);
;// CONCATENATED MODULE: ./src/plugins/vuetify.js



vue_runtime_esm["default"].use((vuetify_default()), {});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=66ce4828
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"app"}},[_c('v-navigation-drawer',{attrs:{"app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',[_c('v-list-tile',[_c('v-list-tile-title',{staticClass:"title"},[_vm._v(" Playback settings ")])],1),(_vm.pbEngineReady)?_c('PlaybackSidebar',{attrs:{"playbackEngine":_vm.pbEngine}}):_vm._e()],1)],1),_c('v-toolbar',{attrs:{"app":""}},[_c('v-toolbar-side-icon',{on:{"click":function($event){_vm.drawer = !_vm.drawer}}})],1),_c('v-content',[_c('v-container',{attrs:{"fluid":""}},[_c('v-select',{attrs:{"items":_vm.scores,"label":"Select Score"},on:{"change":_vm.scoreChanged}}),(_vm.mounted)?_c('Score',{attrs:{"score":_vm.selectedScore,"ready":_vm.pbEngineReady},on:{"osmdInit":_vm.osmdInit,"scoreLoaded":_vm.scoreLoaded}}):_vm._e()],1),_c('PlaybackControls',{attrs:{"playbackEngine":_vm.pbEngine,"scoreTitle":_vm.scoreTitle}})],1)],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PlaybackSidebar.vue?vue&type=template&id=7d302320
var PlaybackSidebarvue_type_template_id_7d302320_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"playback-sidebar"},[_c('div',{staticClass:"sidebar-content"},[(_vm.playbackEngine.ready)?_c('div',[_c('h2',[_vm._v(" BPM "+_vm._s(_vm.playbackEngine.denominator ? ("(1/" + (_vm.playbackEngine.denominator) + ")") : "")+" ")]),_c('BpmSlider',{attrs:{"bpm":_vm.playbackEngine.playbackSettings.bpm,"disabled":_vm.bpmDisabled},on:{"update:bpm":function (val) { return _vm.playbackEngine.setBpm(val); }}}),_c('h2',[_vm._v("Levels")]),_vm._l((_vm.scoreInstruments),function(instrument){return _c('InstrumentControl',{key:instrument.Id,attrs:{"playbackEngine":_vm.playbackEngine,"instrument":instrument}})})],2):_c('div',[_vm._v(" Loading... ")])])])}
var PlaybackSidebarvue_type_template_id_7d302320_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/InstrumentControl.vue?vue&type=template&id=f7693074
var InstrumentControlvue_type_template_id_f7693074_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v(_vm._s(_vm.instrument.Name))]),_vm._l((_vm.instrument.Voices),function(voice,index){return _c('div',{key:index},[_c('h4',[_vm._v(_vm._s(voice.Name))]),_c('v-select',{staticClass:"mb-4",attrs:{"value":_vm.playbackEngine.getPlaybackInstrument(voice.VoiceId).midiId,"items":_vm.instruments},on:{"change":function (midiInstrumentId) { return _vm.setPlaybackInstrument(voice, midiInstrumentId); }}}),_c('VolumeSlider',{attrs:{"volume":voice.Volume},on:{"update:volume":function($event){return _vm.$set(voice, "Volume", $event)}}})],1)})],2)}
var InstrumentControlvue_type_template_id_f7693074_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VolumeSlider.vue?vue&type=template&id=10e50301
var VolumeSlidervue_type_template_id_10e50301_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"xs12":""}},[_c('v-slider',{attrs:{"value":_vm.volume,"min":0,"max":2,"step":0.05,"append-icon":"volume_up","prepend-icon":"volume_down"},on:{"input":function (val) { return this$1.$emit('update:volume', Number(val)); }}})],1)}
var VolumeSlidervue_type_template_id_10e50301_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VolumeSlider.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VolumeSlidervue_type_script_lang_js = ({
  props: ["volume"]
});
;// CONCATENATED MODULE: ./src/components/VolumeSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var components_VolumeSlidervue_type_script_lang_js = (VolumeSlidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3736);
;// CONCATENATED MODULE: ./src/components/VolumeSlider.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  components_VolumeSlidervue_type_script_lang_js,
  VolumeSlidervue_type_template_id_10e50301_render,
  VolumeSlidervue_type_template_id_10e50301_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VolumeSlider = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/InstrumentControl.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var InstrumentControlvue_type_script_lang_js = ({
  components: {
    VolumeSlider: VolumeSlider
  },
  props: ["instrument", "playbackEngine"],
  computed: {
    instruments() {
      if (!this.playbackEngine.availableInstruments) return [];
      return this.playbackEngine.availableInstruments.map(i => ({
        text: i.name,
        value: i.midiId
      }));
    }
  },
  methods: {
    setPlaybackInstrument(voiceId, midiInstrumentId) {
      this.playbackEngine.setInstrument(voiceId, midiInstrumentId);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/InstrumentControl.vue?vue&type=script&lang=js
 /* harmony default export */ var components_InstrumentControlvue_type_script_lang_js = (InstrumentControlvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/InstrumentControl.vue





/* normalize component */
;
var InstrumentControl_component = (0,componentNormalizer/* default */.Z)(
  components_InstrumentControlvue_type_script_lang_js,
  InstrumentControlvue_type_template_id_f7693074_render,
  InstrumentControlvue_type_template_id_f7693074_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InstrumentControl = (InstrumentControl_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BpmSlider.vue?vue&type=template&id=c76d1a9c
var BpmSlidervue_type_template_id_c76d1a9c_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"xs12":""}},[_c('v-slider',{attrs:{"value":_vm.bpm,"min":0,"max":200,"step":1,"disabled":_vm.disabled,"thumb-label":""},on:{"input":function (val) { return this$1.$emit('update:bpm', Number(val)); }}})],1)}
var BpmSlidervue_type_template_id_c76d1a9c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BpmSlider.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BpmSlidervue_type_script_lang_js = ({
  props: ["bpm", "disabled"]
});
;// CONCATENATED MODULE: ./src/components/BpmSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var components_BpmSlidervue_type_script_lang_js = (BpmSlidervue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/BpmSlider.vue





/* normalize component */
;
var BpmSlider_component = (0,componentNormalizer/* default */.Z)(
  components_BpmSlidervue_type_script_lang_js,
  BpmSlidervue_type_template_id_c76d1a9c_render,
  BpmSlidervue_type_template_id_c76d1a9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BpmSlider = (BpmSlider_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PlaybackSidebar.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PlaybackSidebarvue_type_script_lang_js = ({
  components: {
    InstrumentControl: InstrumentControl,
    BpmSlider: BpmSlider
  },
  props: {
    playbackEngine: Object
  },
  data() {
    return {};
  },
  computed: {
    scoreInstruments() {
      return this.playbackEngine.scoreInstruments;
    },
    bpmDisabled() {
      return this.playbackEngine.state === "PLAYING";
    }
  }
});
;// CONCATENATED MODULE: ./src/components/PlaybackSidebar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PlaybackSidebarvue_type_script_lang_js = (PlaybackSidebarvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PlaybackSidebar.vue?vue&type=style&index=0&id=7d302320&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/PlaybackSidebar.vue?vue&type=style&index=0&id=7d302320&prod&lang=scss

;// CONCATENATED MODULE: ./src/components/PlaybackSidebar.vue



;


/* normalize component */

var PlaybackSidebar_component = (0,componentNormalizer/* default */.Z)(
  components_PlaybackSidebarvue_type_script_lang_js,
  PlaybackSidebarvue_type_template_id_7d302320_render,
  PlaybackSidebarvue_type_template_id_7d302320_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PlaybackSidebar = (PlaybackSidebar_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PlaybackControls.vue?vue&type=template&id=7627abab
var PlaybackControlsvue_type_template_id_7627abab_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-xs-center"},[_c('v-bottom-sheet',{staticStyle:{"max-width":"500px"},attrs:{"inset":"","persistent":true,"hide-overlay":true,"value":true}},[_c('v-card',{attrs:{"tile":""}},[_c('v-list',{staticClass:"blue lighten-5"},[(this.playbackEngine && this.playbackEngine.iterationSteps > 0)?_c('v-slider',{staticClass:"progress-slider",attrs:{"value":this.playbackEngine.currentIterationStep,"min":0,"max":this.playbackEngine.iterationSteps,"step":1},on:{"input":function (val) { return this$1.playbackEngine.jumpToStep(val); }}}):_vm._e(),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v(_vm._s(_vm.scoreTitle))]),_c('v-list-tile-sub-title')],1),_c('v-list-tile-action',{class:{ 'mr-2': _vm.$vuetify.breakpoint.mdAndUp }},[(_vm.playbackEngine.state !== 'PLAYING')?_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.playbackEngine.play()}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("play_arrow")])],1):_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.playbackEngine.pause()}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("pause")])],1)],1),_c('v-list-tile-action',[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.playbackEngine.stop()}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("stop")])],1)],1)],1)],1)],1)],1)],1)}
var PlaybackControlsvue_type_template_id_7627abab_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PlaybackControls.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PlaybackControlsvue_type_script_lang_js = ({
  props: {
    playbackEngine: Object,
    scoreTitle: String
  }
});
;// CONCATENATED MODULE: ./src/components/PlaybackControls.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PlaybackControlsvue_type_script_lang_js = (PlaybackControlsvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PlaybackControls.vue?vue&type=style&index=0&id=7627abab&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/PlaybackControls.vue?vue&type=style&index=0&id=7627abab&prod&lang=scss

;// CONCATENATED MODULE: ./src/components/PlaybackControls.vue



;


/* normalize component */

var PlaybackControls_component = (0,componentNormalizer/* default */.Z)(
  components_PlaybackControlsvue_type_script_lang_js,
  PlaybackControlsvue_type_template_id_7627abab_render,
  PlaybackControlsvue_type_template_id_7627abab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PlaybackControls = (PlaybackControls_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=template&id=1dc2239e&scoped=true
var Scorevue_type_template_id_1dc2239e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.scoreLoading || !_vm.ready)?_c('div',{staticClass:"score-progress"},[_c('v-progress-circular',{attrs:{"size":60,"color":"primary","indeterminate":""}})],1):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.scoreLoading),expression:"!scoreLoading"}],ref:"scorediv",staticClass:"score",style:({opacity: _vm.ready ? 100 : 0})})])}
var Scorevue_type_template_id_1dc2239e_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/opensheetmusicdisplay/build/opensheetmusicdisplay.min.js
var opensheetmusicdisplay_min = __webpack_require__(6022);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Scorevue_type_script_lang_js = ({
  props: ["score", "ready"],
  data() {
    return {
      osmd: null,
      scoreLoading: false
    };
  },
  watch: {
    score(val, oldVal) {
      if (!val || val === oldVal) return;
      this.loadScore(val);
    }
  },
  async mounted() {
    this.osmd = new opensheetmusicdisplay_min.OpenSheetMusicDisplay(this.$refs.scorediv, {
      followCursor: true,
      autoResize: false
      // backend: "canvas"
    });
    this.$emit("osmdInit", this.osmd);
    if (this.score) this.loadScore(this.score);
  },
  methods: {
    async loadScore(scoreUrl) {
      this.scoreLoading = true;
      let scoreXml = await axios_default().get(scoreUrl);
      await this.osmd.load(scoreXml.data);
      this.scoreLoading = false;
      await this.$nextTick();
      await this.osmd.render();
      this.$emit("scoreLoaded");
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Score.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Scorevue_type_script_lang_js = (Scorevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=style&index=0&id=1dc2239e&prod&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Score.vue?vue&type=style&index=0&id=1dc2239e&prod&scoped=true&lang=scss

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=style&index=1&id=1dc2239e&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Score.vue?vue&type=style&index=1&id=1dc2239e&prod&lang=scss

;// CONCATENATED MODULE: ./src/components/Score.vue



;



/* normalize component */

var Score_component = (0,componentNormalizer/* default */.Z)(
  components_Scorevue_type_script_lang_js,
  Scorevue_type_template_id_1dc2239e_scoped_true_render,
  Scorevue_type_template_id_1dc2239e_scoped_true_staticRenderFns,
  false,
  null,
  "1dc2239e",
  null
  
)

/* harmony default export */ var Score = (Score_component.exports);
;// CONCATENATED MODULE: ./src/scores.js
/* harmony default export */ var scores = ([{
  value: "https://opensheetmusicdisplay.github.io/demo/Beethoven_AnDieFerneGeliebte.xml",
  text: "Beethoven, L.v. - An die ferne Geliebte"
}, {
  value: "score.xml",
  text: "Herren är min herde god"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/MuzioClementi_SonatinaOpus36No3_Part1.xml",
  text: "Clementi, M. - Sonatina Op.36 No.3 Pt.1"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/MuzioClementi_SonatinaOpus36No3_Part2.xml",
  text: "Clementi, M. - Sonatina Op.36 No.3 Pt.2"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/JohannSebastianBach_PraeludiumInCDur_BWV846_1.xml",
  text: "Bach, J.S. - Praeludium in C-Dur BWV846 1"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/ScottJoplin_EliteSyncopations.xml",
  text: "Joplin, S. - Elite Syncopations"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/ScottJoplin_The_Entertainer.xml",
  text: "Joplin, S. - The Entertainer"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/Land_der_Berge.musicxml",
  text: "Mozart/Holzer - Land der Berge (national anthem of Austria)"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/Schubert_An_die_Musik.xml",
  text: "Schubert, F. - An Die Musik"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/Dichterliebe01.xml",
  text: "Schumann, R. - Dichterliebe"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/TelemannWV40.102_Sonate-Nr.1.1-Dolce.xml",
  text: "Telemann, G.P. - Sonate-Nr.1.1-Dolce"
}, {
  value: "https://opensheetmusicdisplay.github.io/demo/TelemannWV40.102_Sonate-Nr.1.2-Allegro-F-Dur.xml",
  text: "Telemann, G.P. - Sonate-Nr.1.2-Allegro"
}]);
// EXTERNAL MODULE: ./node_modules/osmd-audio-player/dist/index.js + 223 modules
var dist = __webpack_require__(5072);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: "app",
  components: {
    osmd: null,
    Score: Score,
    PlaybackSidebar: PlaybackSidebar,
    PlaybackControls: PlaybackControls
  },
  data() {
    return {
      pbEngine: new dist/* default */.Z(),
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
      this.selectedScore = "https://opensheetmusicdisplay.github.io/demo/MuzioClementi_SonatinaOpus36No3_Part1.xml";
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
    }, 200);
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=66ce4828&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=66ce4828&prod&lang=scss

;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var App_component = (0,componentNormalizer/* default */.Z)(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
;// CONCATENATED MODULE: ./src/main.js






vue_runtime_esm["default"].use((vuetify_default()));
vue_runtime_esm["default"].config.productionTip = false;
new vue_runtime_esm["default"]({
  render: h => h(App)
}).$mount('#app');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpartitures"] = self["webpackChunkpartitures"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(1545); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;