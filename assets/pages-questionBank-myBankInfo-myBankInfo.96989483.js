import{e as a,v as t,s,n as e,o as n,f as o,w as l,i,g as d,j as c,t as r,m as u,y as f,F as m,r as h,l as p,p as k}from"./index-03a9edbf.js";import{_}from"./uni-icons.605a44a3.js";import{r as B}from"./uni-app.es.d35c5a99.js";import{_ as g}from"./uni-nav-bar.d4137c9f.js";import{M as v}from"./myNav.2499e92c.js";import{c as b}from"./code.487141bb.js";import{m as I}from"./index.0708a0a5.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const w=y({components:{myNav:v},data:()=>({avatar:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",Bankid:"",title:"",showBottom:!1,firstName:"",secondName:"",options:[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}],BankInfo:{id:1,name:"计算机科学导论期末专练",type:1,subjectId:1,createUserId:1,detail:"计算机科学导论期末专练",createTime:"2023-12-18T16:09:48.000+00:00",lastEditTime:null,status:0},avatar:"",points:[]}),methods:{shall(){this.showBottom=!this.showBottom},goBack(){a({url:"/pages/questionBank/questionBank"})},async getBankInfo(){const a=await I({url:"/bank/getBankInfo",data:{bankId:this.Bankid}});if(a.data.code==b.GET_OK)return a.data.data[0]},async getPointsByBankId(){const a=await I({url:"/question/getPointsByBankId",data:{bankId:this.Bankid}});if(a.data.code==b.GET_OK)return a.data.data},async select(){(await I({url:"/user/selectBank",data:{userId:t("userId"),bankId:this.Bankid}})).data.code==b.GET_OK&&(s({title:"选择成功"}),a({url:"/pages/index/index"}))},instert(){e({url:`../../upLoadBank/upLoadQuest/upLoadQuest?BankId=${this.Bankid}`})}},async onLoad(a){this.title=a.name,this.Bankid=a.bankId,this.BankInfo=await this.getBankInfo(),this.firstName=a.firstName,this.secondName=a.secondName,this.points=await this.getPointsByBankId()}},[["render",function(a,t,s,e,v,b){const I=h("my-nav"),y=p,w=i,j=h("van-image"),N=B(k("uni-icons"),_),x=h("van-button"),C=B(k("uni-nav-bar"),g),L=h("van-share-sheet");return n(),o(w,{class:"root"},{default:l((()=>[d(I,{title:v.title,icon:"back",iconRight:"more-filled",onRightClick:b.instert,onLeftClick:b.goBack},null,8,["title","onRightClick","onLeftClick"]),d(w,{class:"from"},{default:l((()=>[d(y,{class:"lef-text"},{default:l((()=>[c(" 隶属: ")])),_:1}),d(y,{class:"detil"},{default:l((()=>[c(r(v.firstName)+">"+r(v.secondName),1)])),_:1}),d(w,{class:"right"})])),_:1}),d(w,{class:"author"},{default:l((()=>[d(y,{class:"lef-text"},{default:l((()=>[c(" 作者： ")])),_:1}),d(w,{class:"right"},{default:l((()=>[d(j,{round:"",width:"6vh",height:"6vh",src:v.avatar},null,8,["src"]),d(y,null,{default:l((()=>[c(" fdsjklaf ")])),_:1})])),_:1})])),_:1}),d(w,{class:"describle"},{default:l((()=>[d(y,{class:"top"},{default:l((()=>[c(" 描述 ")])),_:1}),d(w,{class:"line"}),d(y,{class:"bottom"},{default:l((()=>[c(r(v.BankInfo.detail),1)])),_:1})])),_:1}),d(w,{class:"choice"},{default:l((()=>[d(x,{class:"begin"},{default:l((()=>[d(w,{class:"col"},{default:l((()=>[d(N,{type:"folder-add",size:"90"}),d(y,null,{default:l((()=>[c("开始练习")])),_:1})])),_:1})])),_:1}),d(x,{class:"collect"},{default:l((()=>[d(w,{class:"col"},{default:l((()=>[d(N,{type:"heart",size:"90"}),d(y,null,{default:l((()=>[c("加入收藏")])),_:1})])),_:1})])),_:1})])),_:1}),d(w,{class:"pars"},{default:l((()=>[d(y,null,{default:l((()=>[c("知识点")])),_:1})])),_:1}),d(w,{class:"practices"},{default:l((()=>[(n(!0),u(m,null,f(v.points,((a,t)=>(n(),o(w,{class:"practice"},{default:l((()=>[c(r(a.name),1)])),_:2},1024)))),256))])),_:1}),d(C,{"right-icon":"paperplane-filled",class:"bottom-nav",height:"8vh",onClickRight:b.shall},{default:l((()=>[d(x,{onClick:b.select,type:"primary",round:"",class:"bot",style:{color:"black","font-size":"40upx","background-color":"#f2f2f2"}},{default:l((()=>[c("选择")])),_:1},8,["onClick"])])),_:1},8,["onClickRight"]),d(L,{show:v.showBottom,"onUpdate:show":t[0]||(t[0]=a=>v.showBottom=a),title:"立即分享给好友",options:v.options,onSelect:b.shall},null,8,["show","options","onSelect"])])),_:1})}],["__scopeId","data-v-b2a20f2a"]]);export{w as default};
