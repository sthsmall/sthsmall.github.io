import{o as t,f as o,w as e,g as n,j as s,au as a,r as m,i,t as c,av as l,l as r,e as u,x as d,m as p,y as h,F as f}from"./index-03a9edbf.js";import{m as _}from"./index.0708a0a5.js";import{c as v}from"./code.487141bb.js";import{M as C}from"./myNav.2499e92c.js";import{P as b}from"./PostItem.9a24c6f5.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-nav-bar.d4137c9f.js";import"./uni-icons.605a44a3.js";import"./uni-app.es.d35c5a99.js";const I=g({components:{myNav:C,PostItem:b,commentInput:g({data:()=>({commentText:"",showBottom:!1}),methods:{submitComment(){this.showBottom&&this.$emit("submitComment",{text:this.commentText,author:"当前用户",time:(new Date).toLocaleString()}),this.showBottom=!this.showBottom,this.commentText=""}}},[["render",function(c,l,r,u,d,p){const h=a,f=m("van-popup"),_=m("van-button"),v=i;return t(),o(v,null,{default:e((()=>[n(f,{show:d.showBottom,"onUpdate:show":l[1]||(l[1]=t=>d.showBottom=t),closeable:"","close-icon":"comment-o",position:"bottom",onClickCloseIcon:p.submitComment,style:{height:"30%"}},{default:e((()=>[n(h,{style:{"margin-top":"5vh"},modelValue:d.commentText,"onUpdate:modelValue":l[0]||(l[0]=t=>d.commentText=t),placeholder:"发表评论"},null,8,["modelValue"])])),_:1},8,["show","onClickCloseIcon"]),n(_,{class:"van-button",onClick:p.submitComment},{default:e((()=>[s("发表评论")])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-8dd4d19c"]]),commentItem:g({props:{title:String,content:String,author:String,time:String,avatar:String}},[["render",function(a,m,u,d,p,h){const f=l,_=r,v=i;return t(),o(v,{class:"post-item"},{default:e((()=>[n(v,{class:"post-header"},{default:e((()=>[n(f,{class:"post-avatar",style:{overflow:"hidden"},src:u.avatar},null,8,["src"]),n(v,{class:"title-author-container"},{default:e((()=>[n(_,{class:"post-title"},{default:e((()=>[s(c(u.author),1)])),_:1})])),_:1})])),_:1}),n(v,{class:"post-content"},{default:e((()=>[s(c(u.content),1)])),_:1}),n(v,{class:"post-footer"},{default:e((()=>[n(_,{class:"post-time"},{default:e((()=>[s(c(u.time),1)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-00cee6bc"]])},data:()=>({uper:{title:"示例文章标题",content:"这是示例文章的内容。",author:"示例作者",time:"2023-12-23 10:00"},comments:[{id:0,postId:0,userId:0,content:"string",bankId:0,createTime:"string"}]}),methods:{goBack(){u({url:"/pages/community/community"})},addComment(t){this.comments.push(t)}},async onLoad(t){const o=t.postId,e=await _({url:"/community/getFloors",data:{postId:o}});e.data.code==v.GET_OK&&(this.comments=e.data.data)}},[["render",function(s,a,c,l,r,u){const _=m("my-nav"),v=m("post-item"),C=m("comment-input"),b=m("comment-item"),g=i;return t(),o(g,null,{default:e((()=>[n(_,{title:"",icon:"back",onLeftClick:u.goBack},null,8,["onLeftClick"]),n(v,{title:r.uper.title,content:r.uper.content,author:r.uper.author,time:r.uper.time},null,8,["title","content","author","time"]),d("br"),n(C,{class:"cinput",onSubmitComment:u.addComment},null,8,["onSubmitComment"]),(t(!0),p(f,null,h(r.comments,((e,n)=>(t(),o(b,{key:n,title:e.title,content:e.content,author:e.userId,time:e.time},null,8,["title","content","author","time"])))),128))])),_:1})}],["__scopeId","data-v-bfe683c5"]]);export{I as default};
