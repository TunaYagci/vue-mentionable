(function(e){function t(t){for(var r,i,o=t[0],l=t[1],u=t[2],c=0,f=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={app:0},a={app:0},s=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a01fae00"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"7f9adb41"}[e]+".css",a=l.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===a))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],c=u.getAttribute("data-href");if(c===r||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],d.parentNode.removeChild(d),n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(e);var f=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0887":function(e,t,n){"use strict";var r=n("4b12"),i=n.n(r);i.a},"0c36":function(e,t,n){},"2aa6":function(e,t,n){},"4b12":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("Docs")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),o={},l=Object(s["a"])(o,i,a,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"col-md-6 center"},[n("tv-series")],1)])},d=[],m=(n("ab8b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mentionable-textarea",{ref:"mentionableTextarea",attrs:{rows:5,classes:e.classes,placeholder:"Write a comment or drag your files here to upload.",modeIdentifiers:e.modeIdentifiers,isLoading:e.isLoading},on:{input:e.onInput,onMention:function(t){return e.onMention(e.instance,t)}}})}),h=[],p=(n("a4d3"),n("4de4"),n("4160"),n("4e82"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("2ca0"),n("159b"),n("2fa7")),g=[{name:"mario",fullName:"Mario Speedwagon"},{name:"petey",fullName:"Petey Cruiser"},{name:"anna",fullName:"Anna Sthesia"},{name:"paul",fullName:"Paul Molive"},{name:"annaMull",fullName:"Anna Mull"},{name:"gail",fullName:"Gail Forcewind"},{name:"paige",fullName:"Paige Turner"},{name:"bob",fullName:"Bob Frapples"},{name:"walter",fullName:"Walter Melon"},{name:"nick",fullName:"Nick R. Bocker"},{name:"barb",fullName:"Barb Ackue"},{name:"buck",fullName:"Buck Kinnear"},{name:"greta",fullName:"Greta Life"},{name:"ira",fullName:"Ira Membrit"},{name:"shonda",fullName:"Shonda Leer"},{name:"brock",fullName:"Brock Lee"},{name:"maya",fullName:"Maya Didas"},{name:"rick",fullName:"Rick O'Shea"},{name:"pete",fullName:"Pete Sariya"},{name:"monty",fullName:"Monty Carlo"},{name:"sal",fullName:"Sal Monella"},{name:"sue",fullName:"Sue Vaneer"},{name:"cliff",fullName:"Cliff Hanger"},{name:"barb",fullName:"Barb Dwyer"}],b=(n("0d03"),n("25f0"),[{serial:101,subject:"Homecoming: Season 1"},{serial:102,subject:"Barry: Season 1"},{serial:105,subject:"Killing Eve: Season 1"},{serial:203,subject:"Atlanta: Robbin' Season"},{serial:208,subject:"Cobra Kai"},{serial:234,subject:"GLOW: Season 2"},{serial:239,subject:"The Good Place: Season 3"},{serial:301,subject:"Vida: Season 1"},{serial:302,subject:"Better Call Saul: Season 4"},{serial:303,subject:"Sharp Objects: Miniseries"},{serial:404,subject:"Stranger Things"},{serial:505,subject:"Peaky Blinders"},{serial:606,subject:"Black Mirror"},{serial:707,subject:"Riverdale"},{serial:708,subject:"Unbelievable"},{serial:1002,subject:"Game of Thrones: Shitty final season"},{serial:802,subject:"Sherlock"},{serial:943,subject:"Queer Eye"},{serial:2101,subject:"Doctor Who"},{serial:3101,subject:"When They See Us"},{serial:1401,subject:"Brooklyn Nine-Nie"}]),v=function(e){return Promise.resolve(b.filter((function(t){return t.serial.toString().startsWith(e)||t.subject.startsWith(e)})))},y=n("b012"),S=n.n(y),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row",staticStyle:{padding:"5px"}},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"container-fluid"},[n("span",[n("strong",[e._v(e._s(e.mention.serial)+" ")]),e._v(" - "+e._s(e.mention.subject))])])])])},w=[],O={name:"mentionable-incident",props:{mention:{type:Object,required:!0}}},j=O,k=Object(s["a"])(j,x,w,!1,null,"55e2e14e",null),P=k.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row",staticStyle:{padding:"5px"}},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"container-fluid"},[r("span",[r("img",{staticClass:"user default-user-size",style:e.sizeStyle,attrs:{src:n("cf05"),alt:"avatar"}})]),r("span",{staticClass:"left-space text-center"},[r("strong",[e._v(e._s(e.username))])]),r("span",{staticClass:"left-space text-align-right"},[e._v(e._s(e.user&&e.user.fullName))])])])])},I=[],_=(n("7db0"),n("a9e3"),n("e25e"),{name:"mentionable-user",props:{size:{type:[Number,String],required:!1},mention:{type:Object,required:!1},showDefaultAvatar:{type:Boolean,required:!1,default:!0}},computed:{username:function(){return this.mention.name},user:function(){var e=this;return g&&g.length>0?g.find((function(t){return t.name===e.mention.name})):[]},sizeStyle:function(){var e=parseInt(this.size);return e?{"min-width":"".concat(e,"px"),width:"".concat(e,"px"),"min-height":"".concat(e,"px"),height:"".concat(e,"px"),"line-height":"".concat(e,"px")}:null}}}),N=_,M=(n("0887"),Object(s["a"])(N,C,I,!1,null,"63111f4e",null)),L=M.exports,E=0,T=1,A={mode:E,key:"@",comp:L,valueKey:"name"},D={mode:T,key:"#",comp:P,valueKey:"serial"},$=n("b5c5");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(p["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={name:"tv-series",components:{MentionableTextarea:$["a"]},data:function(){return{isLoading:!1,currentMode:0,searchParam:"",tvSeries:[]}},computed:{classes:function(){return["form-control","margin-bottom-6"]},filteredUserList:function(){var e=this;return this.searchParam&&""!==this.searchParam?g.filter((function(t){return t.name.toLowerCase().startsWith(e.searchParam.toLowerCase())})):g&&g.length>0?g:[]},tvList:function(){return this.tvSeries},instance:function(){return this},modeIdentifiers:function(){return[R({},A,{suggestions:this.filteredUserList}),R({},D,{suggestions:this.tvList})]}},methods:{onInput:function(e){this.$emit("input",e)},onMention:S()((function(e,t){e.currentMode=t.mode,e.searchParam=t.searchParam,e.currentMode===T&&e.searchTvSeries()}),150),searchTvSeries:function(){var e=this;this.searchParam&&""!==this.searchParam&&(this.isLoading=!0,v(this.searchParam).then((function(e){return e.sort((function(e,t){return e.serial-t.serial}))})).then((function(t){return e.tvSeries=t})).finally((function(){return e.isLoading=!1})))},onDummyEvent:function(e){this.$refs.mentionableTextarea.clearSelection(),this.$refs.mentionableTextarea.setSelection(e.text)}}},q=K,F=Object(s["a"])(q,m,h,!1,null,"22710e08",null),U=F.exports,W={name:"home",components:{TvSeries:U}},z=W,G=(n("9a26"),Object(s["a"])(z,f,d,!1,null,"7b586d35",null)),H=G.exports;r["a"].use(c["a"]);var V=[{path:"/",name:"home",component:H},{path:"/docs",name:"docs",component:function(){return n.e("about").then(n.bind(null,"eba1"))}}],J=new c["a"]({routes:V}),Q=J,X=n("25fe"),Y=n.n(X);r["a"].config.productionTip=!1,r["a"].use(Y.a),new r["a"]({router:Q,render:function(e){return e(u)}}).$mount("#app")},5712:function(e,t,n){"use strict";var r=n("0c36"),i=n.n(r);i.a},"85ec":function(e,t,n){},"9a26":function(e,t,n){"use strict";var r=n("2aa6"),i=n.n(r);i.a},b5c5:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"}},[n("textarea",{directives:[{name:"autosize",rawName:"v-autosize",value:e.selection,expression:"selection"}],ref:"textarea",staticClass:"form-control margin-bottom-6",class:e.classes,attrs:{autocomplete:"off",title:e.title,rows:e.rows,placeholder:e.placeholder,maxlength:e.maxlength,id:e.elementId("TEXTAREA")},domProps:{value:e.selection},on:{input:function(t){return e.onInput(t)},click:e.onFocusIn,blur:e.onFocusOut,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.down(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.up(t)}],keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:"button"in t&&0!==t.button?null:e.leftRightArrow(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])?null:"button"in t&&2!==t.button?null:e.leftRightArrow(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDeleteKeyPressed(t)}]}}),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],ref:"list",staticClass:"auto-complete dropdown-menu un-focus",attrs:{tabindex:"-1",id:e.elementId("UL")},on:{blur:e.onFocusOut}},[e.isLoading?n("i",{staticClass:"fa fa-refresh fa-spin auto-complete-spinner"}):e._e(),e._l(e.suggestions,(function(t,r){return n("li",{key:r,staticClass:"auto-complete",class:e.bindClass(r,t),on:{click:function(t){return e.selectSuggestion(r)}}},[n(e.modeIdentifiers[e.getMode].comp,{tag:"component",attrs:{mention:t}})],1)})),0===e.suggestions.length?n("li",{staticClass:"auto-complete disabled"},[e.isLoading?n("a",[n("small",[e._v("Searching...")])]):n("a",[n("small",[e._v("Type to search...")])])]):e._e()],2)])},i=[],a=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("caad"),n("baa5"),n("d81d"),n("fb6a"),n("4e82"),n("4ec9"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("2532"),n("3ca3"),n("159b"),n("ddb0"),n("2fa7")),s=n("a0ec"),o=n.n(s),l=n("9a22"),u=n.n(l),c=n("2b0e");n("ab8b");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={components:{},introduction:"A textarea where you can mention with custom identifiers",description:"This docs are made with `propdoc`",token:'\n        <mentionable-textarea\n            :rows="5"\n            :classes=""\n            @input=""\n            @onMention=""\n            :modeIdentifiers=""\n            :isLoading=""/>',name:"mentionable-textarea",props:{title:{type:String,note:"Title of textarea element"},rows:{type:Number,default:5,note:"Row count of textarea element"},placeholder:{type:String,note:"Placeholder of textarea element"},maxlength:{type:Number,default:5,note:"Maximum length of textarea element"},classes:{type:Array,note:"Custom css classes on textarea element"},isLoading:{type:Boolean,required:!1,default:!1,note:"In case some backend loading mechanism is working, show icon"},modeIdentifiers:{type:Array,required:!0,note:"Hard to explain right here. Please see examples."},initialSelection:{type:String,default:"",note:"Please use this to set initial value of textarea"}},data:function(){return{open:!1,current:0,selection:"",mode:this.modeIdentifiers[0].mode,elementIdMap:new Map}},created:function(){this.selection=this.initialSelection},computed:{getMode:function(){return this.mode},suggestions:function(){return this.modeIdentifiers[this.getMode].suggestions}},methods:{clearSelection:function(){this.selection=""},setSelection:function(e){this.selection=e},elementId:function(e){var t=u()(),n="".concat(e,"-").concat(t);return this.elementIdMap.set(e,n),n},getSelectionStart:function(){return this.$refs.textarea.selectionStart},setListPosition:function(e){if(this.$refs&&this.$refs.textarea&&null!=this.getSelectionStart()){var t=o()(this.$refs.textarea,e);this.$refs.list.style.top=t.top+16+"px",this.$refs.list.style.left=t.left+8+"px"}},onFocusOut:function(e){e.relatedTarget&&e.relatedTarget.id&&this.elementIdMap.get(e.relatedTarget.nodeName)===e.relatedTarget.id?e.preventDefault():this.closeSuggestions()},onFocusIn:function(){this.identifierControl()},identifierControl:function(){var e=this.getSelectionStart();if(e>=0&&this.selection.length>=e-1){var t=this.getLastIndexedIdentifier(e),n=this.getLastValidSection(e,t);if(null!=n){this.mode=t.mode;var r=t.lastIndex;return this.openSuggestions(r),this.searchParamChanged(n),!0}}return this.closeSuggestions(),!1},getLastIndexedIdentifier:function(e){var t=this,n=this.modeIdentifiers.map((function(n){return d({},n,{lastIndex:t.selection.lastIndexOf(n.key,e)})})).sort((function(e,t){return t.lastIndex-e.lastIndex}));return n[0]},getLastValidSection:function(e,t){if(-1!==t.lastIndex){if(t.lastIndex===e)return null;var n=this.selection.substring(t.lastIndex+1,e);return n.includes(" ")?null:n}return null},openSuggestions:function(e){this.setListPosition(e),this.open=!0,this.current=0},closeSuggestions:function(){this.open&&(this.open=!1,this.current=0)},onInput:function(e){this.updateSelectionAndPublishEvent(e.target.value)," "===e.data?this.closeSuggestions():this.identifierControl()},updateSelectionAndPublishEvent:function(e){this.selection=e,this.$emit("input",this.selection)},searchParamChanged:function(e){e?this.$emit("onMention",{searchParam:e,mode:this.getMode}):this.$emit("onMention",{searchParam:null,mode:this.getMode}),this.current=0},onDeleteKeyPressed:function(){this.identifierControl()||this.closeSuggestions()},enter:function(e){this.open&&(this.selectSuggestion(this.current),e.preventDefault())},up:function(e){this.open&&(this.current>0&&this.current--,e.preventDefault())},down:function(e){this.open&&(this.current>=0&&this.current++,e.preventDefault())},leftRightArrow:function(){this.identifierControl()},bindClass:function(e,t){var n="";if(t)return e===this.current&&"-1"!==t.id&&-1!==t.id&&(n="active "),"-1"!==t.id&&-1!==t.id||(n="disabled"),n},isIndexExistsOnSuggestions:function(e){return this.suggestions[e]&&this.suggestions[e][this.modeIdentifiers[this.getMode].valueKey]&&!0},setCursorPosition:function(e){var t=this;c["a"].nextTick((function(){return t.$refs.textarea.selectionEnd=e}))},selectSuggestion:function(e){if(this.open){if(!this.isIndexExistsOnSuggestions(e))throw new Error("Suggestion is not found in index= ".concat(e));var t=this.getSelectionStart(),n=this.getLastIndexedIdentifier(t),r=n.lastIndex+1,i=this.suggestions[e][this.modeIdentifiers[this.getMode].valueKey]+" ";this.updateSelectionAndPublishEvent(this.replaceAt(this.selection,this.getLastValidSection(t,n),i,r)),this.setCursorPosition(r+i.length),this.closeSuggestions(),this.$refs.textarea.focus()}},replaceAt:function(e,t,n,r){return e.slice(0,r)+n+e.slice(r+t.length,e.length)}}},h=m,p=(n("5712"),n("2877")),g=Object(p["a"])(h,r,i,!1,null,"dac4654a",null);t["a"]=g.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.758ec5bf.js.map