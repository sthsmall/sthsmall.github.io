import{n as t,v as o,e,o as a,m as s,g as i,x as n,F as r,y as c,r as p,f as d}from"./index-03a9edbf.js";import{M as l}from"./myNav.2499e92c.js";import{k as m}from"./knowledge-item.0a6830e6.js";import{m as u}from"./index.0708a0a5.js";import{c as g}from"./code.487141bb.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-nav-bar.d4137c9f.js";import"./uni-icons.605a44a3.js";import"./uni-app.es.d35c5a99.js";import"./index.b48f3735.js";const I=k({components:{knowledgeItem:m,myNav:l},data:()=>({pointProgress:[]}),methods:{goToPractice(){t({url:`/pages/index/practice/practice?bankId=${o("selectBankId")}`})},goBack(){e({url:"/pages/index/index"})},async getPointProgress(){var t=await u({url:"/question/getPointProgress",data:{userId:o("userId"),bankId:o("selectBankId")}});t.data.code==g.GET_OK&&(this.pointProgress=t.data.data)},gotoCatePractice(e){t({url:`/pages/index/practice/practice?bankId=${o("selectBankId")}&pointId=${e}&classify=point`})}},async onLoad(){await this.getPointProgress()}},[["render",function(t,o,e,l,m,u){const g=p("my-nav"),k=p("knowledgeItem");return a(),s(r,null,[i(g,{title:"分类刷题",icon:"back",onClick:u.goBack},null,8,["onClick"]),n("div",{class:"container"},[(a(!0),s(r,null,c(m.pointProgress,((t,o)=>(a(),d(k,{key:o,pointId:t.pointId,pointName:t.pointName,totalQuestion:t.totalQuestion,practiceQuestion:t.practiceQuestion,onClick:o=>u.gotoCatePractice(t.pointId),class:"foot-item"},null,8,["pointId","pointName","totalQuestion","practiceQuestion","onClick"])))),128))])],64)}],["__scopeId","data-v-9eebfbcf"]]);export{I as default};
