import{v as a,b as o,s,n as e,o as n,f as t,w as i,i as l,g as r,x as c,t as d,j as u,r as g}from"./index-03a9edbf.js";import{m as f,b as m}from"./index.0708a0a5.js";import{c as v}from"./code.487141bb.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const T=p({data:()=>({username:"王小明",email:"2773209553@qq.com",avatar:"https://zpss.info:10475/avatar/default.jpg"}),async onLoad(){const e=await f({url:"/user/showInfo",method:"GET",data:{userId:a("userId")}});if(200!==e.statusCode)return o(),void s({title:"网络错误",icon:"error",duration:2e3});e.data.code===v.GET_OK&&(this.username=e.data.data.nickname,this.email=e.data.data.email,this.avatar=m+e.data.data.avatarPath)},methods:{goToProfile(){e({url:"./personalProfile"})},goToSetting(){e({url:"./questionSetting"})},goToAbout(){e({url:"./about/about"})},goToMessage(){e({url:"./myMessage"})},goToPractice(){e({url:"./practiceRecord"})},goToReport(){e({url:"./myReport"})},goToStar(){e({url:"./starQuestion"})},goToMyWrongs(){e({url:"./myWrongs/myWrongs"})}}},[["render",function(a,o,s,e,f,m){const v=g("van-image"),p=l,T=g("van-icon");return n(),t(p,{class:"content"},{default:i((()=>[r(p,{class:"profile-header"},{default:i((()=>[r(p,{class:"left-section",onClick:o[0]||(o[0]=a=>m.goToProfile())},{default:i((()=>[c("div",{class:"profile-avatar"},[r(v,{round:"",width:"80",height:"80",fit:"cover",src:f.avatar},null,8,["src"])]),c("div",{class:"profile-info"},[c("h1",null,d(f.username),1),c("p",null,d(f.email),1)])])),_:1}),r(p,{class:"right-section"},{default:i((()=>[r(T,{onClick:o[1]||(o[1]=a=>m.goToSetting()),name:"setting",size:"30",color:"#fafafa"}),u("    "),r(T,{name:"bell",size:"30",color:"#fafafa"})])),_:1})])),_:1}),r(p,{class:"navigation"},{default:i((()=>[c("div",{class:"nav",onClick:o[2]||(o[2]=a=>m.goToReport())},[r(T,{name:"notes-o",size:"50"}),c("div",null,"我的报告")]),c("div",{class:"nav"},[r(T,{name:"description-o",onClick:m.goToMyWrongs,size:"50"},null,8,["onClick"]),c("div",null,"错题本")]),c("div",{class:"nav",onClick:o[3]||(o[3]=a=>m.goToPractice())},[r(T,{name:"records-o",size:"50"}),c("div",null,"练习记录")]),c("div",{class:"nav",onClick:o[4]||(o[4]=a=>m.goToStar())},[r(T,{name:"star-o",size:"50"}),c("div",null,"我的收藏")])])),_:1}),r(p,{class:"function"},{default:i((()=>[c("div",{class:"function-header"},"常用功能"),c("div",{class:"list"},[c("div",{onClick:o[5]||(o[5]=a=>m.goToProfile())},[c("span",null,"个人资料"),r(T,{name:"arrow"})]),c("div",{onClick:o[6]||(o[6]=a=>m.goToSetting())},[c("span",null,"刷题设置"),r(T,{name:"arrow"})]),c("div",{onClick:o[7]||(o[7]=a=>m.goToMessage())},[c("span",null,"我的消息"),r(T,{name:"arrow"})]),c("div",{onClick:o[8]||(o[8]=a=>m.goToAbout())},[c("span",null,"关于我们"),r(T,{name:"arrow"})])])])),_:1})])),_:1})}],["__scopeId","data-v-19f2a258"]]);export{T as default};
