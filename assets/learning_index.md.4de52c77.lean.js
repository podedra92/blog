import{_,o as a,c as d,b as e,t as c,n as g,u as p,F as b,r as h,e as l,f as u,p as m,g as f,d as v}from"./app.88f89a2e.js";const k="/blog/assets/alone.3d7777dd.gif",y="/blog/assets/awesome-sauce.b7af5431.gif",x="/blog/assets/cover-my-docs.40e57e37.png",w="/blog/assets/cover-this-blog.9b5fb2eb.png",D="/blog/assets/go-live.8ce466f0.gif",I="/blog/assets/hate.5a163641.gif",S="/blog/assets/hypo.abdc9ce8.gif",A="/blog/assets/logo-picasso1.7b3604cb.png";const B={props:{post:{type:Object},isDark:{type:Boolean}},methods:{clickMethod(s){window.location.assign(s)},getImgUrl(s){return s.includes("http")?s:new URL(Object.assign({"/learning/assets/docs/alone.gif":k,"/learning/assets/docs/awesome-sauce.gif":y,"/learning/assets/docs/cover-my-docs.png":x,"/learning/assets/docs/cover-this-blog.png":w,"/learning/assets/docs/go-live.gif":D,"/learning/assets/docs/hate.gif":I,"/learning/assets/docs/hypo.gif":S,"/learning/assets/logo-picasso1.png":A})[`/learning/assets/${s}`],self.location).href}},computed:{cssVars(){return{"--box-shadow":this.isDark?"#525252":"#cee1ce","--hover-background":this.isDark?"#525252":"#f1f3f3"}}}},L={class:"card__header"},O=["src"],V={class:"card__body"};function j(s,o,t,r,i,n){return a(),d("div",{class:"card",style:g(n.cssVars),onClick:o[0]||(o[0]=q=>n.clickMethod(t.post.link))},[e("div",L,[e("img",{src:n.getImgUrl(t.post.image),alt:"card__image"},null,8,O)]),e("div",V,[e("h3",null,c(t.post.title),1),e("p",null,c(t.post.description),1),e("small",null,c(t.post.date),1)])],4)}const C=_(B,[["render",j],["__scopeId","data-v-228bc304"]]),N=[{image:"docs/cover-my-docs.png",title:"Documentation Tips",description:"A quick page on writing tips, as well as tools used.",date:"03/01/2023",link:"./docs/my-docs"},{image:"docs/cover-this-blog.png",title:"How I created this awesome blog!",description:"A step by step of how this blog was made and published.",date:"28/12/2022",link:"./docs/this-blog"},{image:"logo-picasso1.png",title:"What is this??",description:"A random card to make it look like I did something!",date:"28/12/2022",link:"./index"}];const P=s=>(m("data-v-a9148d2b"),s=s(),f(),s),U=P(()=>e("h1",{id:"latest-additions",tabindex:"-1"},[v("Latest Additions "),e("a",{class:"header-anchor",href:"#latest-additions","aria-hidden":"true"},"#")],-1)),F={class:"container"},E=JSON.parse('{"title":"Latest Additions","description":"","frontmatter":{},"headers":[],"relativePath":"learning/index.md"}'),M={name:"learning/index.md"},T=Object.assign(M,{setup(s){const{isDark:o}=p();return(t,r)=>(a(),d("div",null,[U,e("div",F,[(a(!0),d(b,null,h(l(N),i=>(a(),u(C,{key:i.name,post:i,isDark:l(o)},null,8,["post","isDark"]))),128))])]))}}),H=_(T,[["__scopeId","data-v-a9148d2b"]]);export{E as __pageData,H as default};
