(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{264:function(e,t,r){"use strict";r.r(t);r(31),r(38),r(60),r(28),r(61);var n=r(26);r(12),r(32),r(39),r(190);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=r(2).a.extend({data:function(){return{keys:[],values:[]}},props:{item:{type:Object,default:function(){return{}}}},watch:{item:function(){var e=o({},this.item);delete e.id,this.keys=Object.keys(e),this.values=Object.values(e)}},mounted:function(){if(Object.keys(this.item).length){var e=o({},this.item);delete e.id,this.keys=Object.keys(e),this.values=Object.values(e)}}}),O=r(57),component=Object(O.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-full p-4 border border-black"},e._l(e.keys,(function(t,i){return r("div",{key:t,staticClass:"text-black py-1"},[e._v("\n\t\t"+e._s(t)+": "),r("span",[e._v(e._s(e.values[i]))])])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);