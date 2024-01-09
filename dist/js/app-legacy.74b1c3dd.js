/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4819:
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
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=153b7fd7
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"app"}},[_c('v-navigation-drawer',{attrs:{"app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',[_c('v-list-tile',[_c('v-list-tile-title',{staticClass:"title"},[_vm._v(" Playback settings ")])],1),(_vm.pbEngineReady)?_c('PlaybackSidebar',{attrs:{"playbackEngine":_vm.pbEngine}}):_vm._e()],1)],1),_c('v-toolbar',{attrs:{"app":""}},[_c('v-toolbar-side-icon',{on:{"click":function($event){_vm.drawer = !_vm.drawer}}})],1),_c('v-content',[_c('v-container',[_c('v-select',{attrs:{"items":_vm.scores,"label":"Selecciona partitura"},on:{"change":_vm.scoreChanged}}),(_vm.mounted)?_c('Score',{attrs:{"score":_vm.selectedScore,"ready":_vm.pbEngineReady},on:{"osmdInit":_vm.osmdInit,"scoreLoaded":_vm.scoreLoaded}}):_vm._e()],1),_c('PlaybackControls',{attrs:{"playbackEngine":_vm.pbEngine,"scoreTitle":_vm.scoreTitle}})],1)],1)}
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
    instruments: function instruments() {
      if (!this.playbackEngine.availableInstruments) return [];
      return this.playbackEngine.availableInstruments.map(function (i) {
        return {
          text: i.name,
          value: i.midiId
        };
      });
    }
  },
  methods: {
    setPlaybackInstrument: function setPlaybackInstrument(voiceId, midiInstrumentId) {
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
  data: function data() {
    return {};
  },
  computed: {
    scoreInstruments: function scoreInstruments() {
      return this.playbackEngine.scoreInstruments;
    },
    bpmDisabled: function bpmDisabled() {
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
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=template&id=6a30f40b&scoped=true
var Scorevue_type_template_id_6a30f40b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.scoreLoading || !_vm.ready)?_c('div',{staticClass:"score-progress"},[_c('v-progress-circular',{attrs:{"size":60,"color":"primary","indeterminate":""}})],1):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.scoreLoading),expression:"!scoreLoading"}],ref:"scorediv",staticClass:"score",style:({opacity: _vm.ready ? 100 : 0})})])}
var Scorevue_type_template_id_6a30f40b_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/opensheetmusicdisplay/build/opensheetmusicdisplay.min.js
var opensheetmusicdisplay_min = __webpack_require__(6022);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//
//
//
//
//
//
//
//
//



function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(path) {
    var xmlData, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          if (!path.startsWith('http')) {
            _context3.next = 8;
            break;
          }
          _context3.next = 4;
          return axios_default().get(path);
        case 4:
          response = _context3.sent;
          xmlData = response.data;
          _context3.next = 11;
          break;
        case 8:
          _context3.next = 10;
          return readLocalFile(path);
        case 10:
          xmlData = _context3.sent;
        case 11:
          return _context3.abrupt("return", xmlData);
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.error('Error fetching XML data:', _context3.t0);
          throw _context3.t0;
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return _fetchData.apply(this, arguments);
}
function readLocalFile(filePath) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();
    fileReader.onload = function (event) {
      resolve(event.target.result);
    };
    fileReader.onerror = function (error) {
      reject(error);
    };

    // Read the local file
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', function () {
      var file = fileInput.files[0];
      fileReader.readAsText(file);
    });
    fileInput.click();
  });
}
/* harmony default export */ var Scorevue_type_script_lang_js = ({
  props: ["score", "ready"],
  data: function data() {
    return {
      osmd: null,
      scoreLoading: false,
      zoom: 1
    };
  },
  watch: {
    score: function score(val, oldVal) {
      if (!val || val === oldVal) return;
      this.loadScore(val);
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.osmd = new opensheetmusicdisplay_min.OpenSheetMusicDisplay(_this.$refs.scorediv, {
              followCursor: true,
              autoResize: false
              // backend: "canvas"
            });
            _this.$emit("osmdInit", _this.osmd);
            if (_this.score) _this.loadScore(_this.score);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    computedZoom: function computedZoom() {
      // Adjust the conditions and calculations based on your specific requirements
      if (window.innerWidth < 768) {
        // For screens narrower than 768px
        return this.zoom * 0.25; // Adjust the scale factor as needed
      } else {
        // For larger screens
        return this.zoom;
      }
    }
  },
  methods: {
    loadScore: function loadScore(scoreUrl) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var scoreXml;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.scoreLoading = true;
              _context2.next = 3;
              return fetchData(scoreUrl);
            case 3:
              scoreXml = _context2.sent;
              _context2.next = 6;
              return _this2.osmd.load(scoreXml);
            case 6:
              _this2.scoreLoading = false;
              _context2.next = 9;
              return _this2.$nextTick();
            case 9:
              if (window.innerWidth < 768) {
                _this2.zoom = 0.5;
              }
              ;
              _this2.osmd.Zoom = _this2.zoom;
              _context2.next = 14;
              return _this2.osmd.render();
            case 14:
              _this2.$emit("scoreLoaded");
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Score.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Scorevue_type_script_lang_js = (Scorevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=style&index=0&id=6a30f40b&prod&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Score.vue?vue&type=style&index=0&id=6a30f40b&prod&scoped=true&lang=scss

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Score.vue?vue&type=style&index=1&id=6a30f40b&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Score.vue?vue&type=style&index=1&id=6a30f40b&prod&lang=scss

;// CONCATENATED MODULE: ./src/components/Score.vue



;



/* normalize component */

var Score_component = (0,componentNormalizer/* default */.Z)(
  components_Scorevue_type_script_lang_js,
  Scorevue_type_template_id_6a30f40b_scoped_true_render,
  Scorevue_type_template_id_6a30f40b_scoped_true_staticRenderFns,
  false,
  null,
  "6a30f40b",
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
function Appvue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return Appvue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Appvue_type_script_lang_js_typeof(o); }
function Appvue_type_script_lang_js_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Appvue_type_script_lang_js_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == Appvue_type_script_lang_js_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(Appvue_type_script_lang_js_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function Appvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Appvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Appvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Appvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
  data: function data() {
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
    osmdInit: function osmdInit(osmd) {
      console.log("OSMD init");
      this.osmd = osmd;
      this.selectedScore = "https://opensheetmusicdisplay.github.io/demo/MuzioClementi_SonatinaOpus36No3_Part1.xml";
    },
    scoreLoaded: function scoreLoaded() {
      var _this = this;
      return Appvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/Appvue_type_script_lang_js_regeneratorRuntime().mark(function _callee() {
        return Appvue_type_script_lang_js_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("Score loaded");
              if (_this.osmd.sheet.title) _this.scoreTitle = _this.osmd.sheet.title.text;
              _context.next = 4;
              return _this.pbEngine.loadScore(_this.osmd);
            case 4:
              console.log("pbEngine ready");
              _this.pbEngineReady = true;
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    scoreChanged: function scoreChanged(scoreUrl) {
      if (this.pbEngine.state === "PLAYING") this.pbEngine.stop();
      this.selectedScore = scoreUrl;
      this.pbEngineReady = false;
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    setTimeout(function () {
      // This extra delay before rendering the score component seems to help occasional issues where the 
      // OSMD cursor img element gets detached from the DOM and doesn't show unless 
      // you refresh the page. A less pretty workaround until root cause is determined
      _this2.mounted = true;
    }, 10);
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=153b7fd7&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=153b7fd7&prod&lang=scss

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
  render: function render(h) {
    return h(App);
  }
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(4819); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;