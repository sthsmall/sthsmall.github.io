import{e as t,a1 as s,v as e,o as l,m as a,g as o,w as i,F as c,i as n,j as r,f as u,y as d,k as h,t as p,r as f,p as g,l as k,S as m,a2 as y,a3 as b}from"./index-03a9edbf.js";import{_ as C}from"./uni-nav-bar.d4137c9f.js";import{r as _}from"./uni-app.es.d35c5a99.js";import{m as w}from"./index.0708a0a5.js";import{c as B}from"./code.487141bb.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.605a44a3.js";const S=I({data:()=>({scrollTop:0,loaded:!1,showBottom:!1,current:0,disables:[],practiceStatus:[],isSelected:[],whichSelected:[],BtnsColor:[],allPractice:[],showAnal:!1,BankId:0,url:""}),methods:{async getQuestions(t){const s=await w({url:this.url,data:t});s.data.code==B.GET_OK&&(this.allPractice=s.data.data)},changePage(t){this.current=t,this.showBottom=!1},backTo(){t({url:"/pages/index/index"})},btnClick(t,s){console.log(t,s),this.isCorrect(t,s)?this.BtnsColor[t][s]="success":(this.BtnsColor[t][s]="danger",this.BtnsColor[t][this.allPractice[t].correctOption.charCodeAt(0)-65]="success"),this.practiceStatus[t].showResult=!0,this.practiceStatus[t].isSelected=!0},test(t){console.log(t)},isCorrect(t,s){return this.allPractice[t].correctOption===String.fromCharCode(s+65)},rollToTop(){console.log(this.scrollTop),console.log("scoll"),s({scrollTop:0,duration:3e3})}},async onLoad(t){var s={};console.log(t),"order"===t.classify&&(this.url="/question/getQuestions",s.bankId=e("selectBankId"),s.pointId=t.pointId),"point"===t.classify&&(this.url="/question/getQuestionsByPoint",s.bankId=t.bankId,s.pointId=t.pointId),"intelligence"===t.classify&&(this.url="/question/getIntellijQuestions",s.bankId=t.bankId,s.userId=e("userId"),s.typeText=t.typeText,s.number=t.number),console.log(this.url),this.BankId=t.bankId,await this.getQuestions(s);class l{constructor(){this.showResult=!1,this.selected=0,this.isSelected=!1}}this.practiceStatus=new Array(this.allPractice.length);for(let e=0;e<this.allPractice.length;e++)this.practiceStatus[e]=new l;console.log(this.practiceStatus[0]===this.practiceStatus[1]),this.isSelected=new Array(this.allPractice.length).fill(!1),this.whichSelected=new Array(this.allPractice.length).fill(0);for(var a=[],o=0;o<this.allPractice.length;o++){for(var i=[],c=0;c<this.allPractice[o].options.length;c++)i.push("default");a.push(i)}this.BtnsColor=a,this.loaded=!0},computed:{btnsColorType(){return(t,s)=>this.BtnsColor[t][s]},showAnalyse(){return t=>this.practiceStatus[t].showResult}}},[["render",function(t,s,e,w,B,I){const S=f("van-button"),v=n,T=_(g("uni-nav-bar"),C),P=k,x=m,j=y,A=b,Q=f("van-popup");return l(),a(c,null,[o(T,{"left-icon":"left","right-icon":"cart",class:"top-nav",backgroundColor:"#5B9EEE",height:"8vh",onClickLeft:I.backTo,style:{"z-index":"1"}},{default:i((()=>[o(v,{class:"switch"},{default:i((()=>[o(S,{class:"top-button",click:""},{default:i((()=>[r("刷题")])),_:1}),o(S,{class:"top-button",click:""},{default:i((()=>[r("背题")])),_:1})])),_:1})])),_:1},8,["onClickLeft"]),o(v,{class:"root"},{default:i((()=>[B.loaded?(l(),u(A,{key:0,class:"swiper",current:B.current,onChange:I.rollToTop},{default:i((()=>[(l(!0),a(c,null,d(B.allPractice,((t,s)=>(l(),u(j,{key:"outIndex"},{default:i((()=>[h(" <swiper-item> "),o(x,{class:"scroll-view","scroll-x":"false","scroll-y":"true","scroll-top":B.scrollTop},{default:i((()=>[o(v,{class:"top"}),o(v,{class:"practice-f"},{default:i((()=>[o(P,{class:"practice"},{default:i((()=>[o(P,{class:"pra-type",key:"fds"},{default:i((()=>[r("题目类型")])),_:1}),r(p(t.itemStem),1)])),_:2},1024)])),_:2},1024),o(v,{class:"anses"},{default:i((()=>[(l(!0),a(c,null,d(t.options,((t,e)=>(l(),u(v,{class:"ans",key:"inIndex"},{default:i((()=>[I.btnsColorType(s,e)?(l(),u(S,{key:0,disabled:B.isSelected[s],onClick:t=>I.btnClick(s,e),type:I.btnsColorType(s,e),class:"ans-font"},{default:i((()=>[r(p(String.fromCharCode(e+65)),1)])),_:2},1032,["disabled","onClick","type"])):h("v-if",!0),o(P,{class:"ans-text"},{default:i((()=>[r(p(t),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024),I.showAnalyse(s)?(l(),u(v,{key:0,class:"result"},{default:i((()=>[o(v,null,{default:i((()=>[o(P,null,{default:i((()=>[r(" 解析: ")])),_:1}),o(P,null,{default:i((()=>[r(p(t.analysis),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):h("v-if",!0)])),_:2},1032,["scroll-top"])])),_:2},1024)))),128))])),_:1},8,["current","onChange"])):h("v-if",!0),o(Q,{show:B.showBottom,"onUpdate:show":s[0]||(s[0]=t=>B.showBottom=t),position:"bottom",closeable:"",style:{height:"60%"}},{default:i((()=>[o(S,{class:"btn"},{default:i((()=>[r("提交")])),_:1}),o(v,{class:"all-practice-btn"},{default:i((()=>[(l(!0),a(c,null,d(B.allPractice,((t,s)=>(l(),u(S,{class:"ans-font",size:"mini",onClick:t=>I.changePage(s),key:"index"},{default:i((()=>[r(p(s+1),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["show"]),o(T,{"left-icon":"star","right-icon":"arrow-up",class:"bottom-nav",backgroundColor:"#B1B1B1",height:"8vh",onClickRight:s[1]||(s[1]=t=>B.showBottom=!0)})])),_:1})],64)}],["__scopeId","data-v-91739351"]]);export{S as default};
