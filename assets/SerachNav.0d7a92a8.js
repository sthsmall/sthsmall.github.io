import{o as e,f as a,w as c,g as t,j as l,t as s,i as r,r as n,ax as o,h as i,p as h,ao as u,ap as d,k as p,I as f,l as m}from"./index-03a9edbf.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as y}from"./uni-icons.605a44a3.js";import{r as _}from"./uni-app.es.d35c5a99.js";const k=b({props:{title:String},data:()=>({})},[["render",function(o,i,h,u,d,p){const f=r,m=n("van-icon");return e(),a(f,{class:"bank-select-item"},{default:c((()=>[t(f,{class:"title"},{default:c((()=>[l(s(h.title),1)])),_:1}),t(f,{class:"icon"},{default:c((()=>[t(m,{name:"arrow",color:"#333333"})])),_:1})])),_:1})}],["__scopeId","data-v-2874b61d"]]),x={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:g}=o(x);const V=b({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||g("uni-search-bar.cancel")},placeholderText(){return this.placeholder||g("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,a){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,i())},confirm(){i(),this.$emit("confirm",{value:this.searchVal})},blur(){i(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(n,o,i,b,k,x){const g=_(h("uni-icons"),y),V=r,w=f,C=m;return e(),a(V,{class:"uni-searchbar"},{default:c((()=>[t(V,{style:u({borderRadius:i.radius+"px",backgroundColor:i.bgColor}),class:"uni-searchbar__box",onClick:x.searchClick},{default:c((()=>[t(V,{class:"uni-searchbar__box-icon-search"},{default:c((()=>[d(n.$slots,"searchIcon",{},(()=>[t(g,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),k.show||k.searchVal?(e(),a(w,{key:0,focus:k.showSync,disabled:i.readonly,placeholder:x.placeholderText,maxlength:i.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:k.searchVal,"onUpdate:modelValue":o[0]||(o[0]=e=>k.searchVal=e),onConfirm:x.confirm,onBlur:x.blur,onFocus:x.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(e(),a(C,{key:1,class:"uni-searchbar__text-placeholder"},{default:c((()=>[l(s(i.placeholder),1)])),_:1})),k.show&&("always"===i.clearButton||"auto"===i.clearButton&&""!==k.searchVal)&&!i.readonly?(e(),a(V,{key:2,class:"uni-searchbar__box-icon-clear",onClick:x.clear},{default:c((()=>[d(n.$slots,"clearIcon",{},(()=>[t(g,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):p("v-if",!0)])),_:3},8,["style","onClick"]),"always"===i.cancelButton||k.show&&"auto"===i.cancelButton?(e(),a(C,{key:0,onClick:x.cancel,class:"uni-searchbar__cancel"},{default:c((()=>[l(s(x.cancelTextI18n),1)])),_:1},8,["onClick"])):p("v-if",!0)])),_:3})}],["__scopeId","data-v-16f3c4b5"]]);const w=b({name:"SerachNav",props:{isHaveBack:Boolean},data:()=>({}),methods:{childeClick(){this.$emit("click")}}},[["render",function(l,s,o,i,u,d){const f=_(h("uni-icons"),y),m=_(h("uni-search-bar"),V),b=n("van-button"),k=r;return e(),a(k,{id:"kk"},{default:c((()=>[o.isHaveBack?(e(),a(f,{key:0,size:"52upx",type:"left",onClick:d.childeClick},null,8,["onClick"])):p("v-if",!0),t(m,{placeholder:"search",cancelButton:"none","cancel-text":"cancel",bgColor:"#ffffff",radius:"20",id:"search_bar"}),t(b,{type:"default",id:"side",size:"small"},{default:c((()=>[t(f,{type:"search",size:"20"})])),_:1})])),_:1})}],["__scopeId","data-v-d3bf96c7"]]);export{k as B,w as s};
