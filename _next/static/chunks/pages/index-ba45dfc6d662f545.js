(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2317)}])},2317:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ey}});var i=r(5893),n=r(9236),o=r(5117),s=r(5459),a=r.n(s),l=r(7294),c=r(2629),d=r(8861),m=r(6862),x=r(8393),h=r(2708);let u=[{id:"hero",text:"Home"},{id:"about",text:"About"},{id:"resume",text:"Resume"},{id:"project",text:"Projects"}];var g=r(6803),p=r(9752),f=r(9876),j=r(9814),y=r(2445),b=r(3865),k=r(6361),v=r(6817),Z=(0,v.k)(e=>({root:{position:"relative",display:"inline-block",fontSize:"2rem",fontWeight:700,textTransform:"uppercase",marginBottom:"1.25rem",paddingBottom:"1.25rem",color:e.colors.gray[7],":before":{content:'""',position:"absolute",width:"100%",height:"1px",bottom:"1px",background:e.colors.gray[3]},":after":{content:'""',position:"absolute",width:"40%",height:"3px",bottom:0,background:e.fn.darken(e.fn.primaryColor(),.1),left:"50%",transform:"translateX(-50%)"}}}));function S(e){let{text:t}=e,{classes:r}=Z();return(0,i.jsx)(n.D,{order:2,className:r.root,"data-cy":"title",children:t})}var z=r(9626);let N=[{title:"City",text:z.Z.about.city},{title:"Email",text:z.Z.about.email},{title:"Github",text:z.Z.about.github}];function w(){let e=(0,g.rZ)(),t=(0,i.jsx)(o.x,{pb:"2rem",children:z.Z.about.introduction}),r=(0,i.jsx)(b.Z,{color:e.fn.primaryColor()}),n=e=>(0,i.jsx)(p.a.Item,{children:(0,i.jsxs)(f.k,{children:[(0,i.jsxs)(o.x,{mr:"sm",weight:700,children:[e.title,":"]}),(0,i.jsx)(o.x,{children:e.text})]})},e.text),s=(0,i.jsx)(f.k,{sx:{textAlign:"start",justifyContent:"center"},children:(0,i.jsxs)(j.M,{cols:2,breakpoints:[{maxWidth:"sm",cols:1}],children:[(0,i.jsx)(p.a,{spacing:"xs",icon:r,children:N.filter((e,t)=>t<N.length/2).map(n)}),(0,i.jsx)(p.a,{spacing:"xs",icon:r,children:N.filter((e,t)=>t>=N.length/2).map(n)})]})}),a=(0,i.jsx)(k.Z,{color:e.fn.primaryColor()}),l=e=>(0,i.jsx)(p.a.Item,{children:(0,i.jsx)(o.x,{children:e})},e),c=(0,i.jsxs)(y.W,{px:"1rem",pt:"3.75rem",children:[(0,i.jsx)(S,{text:"Skills"}),(0,i.jsx)(f.k,{sx:{textAlign:"start",justifyContent:"center"},children:(0,i.jsxs)(j.M,{cols:2,children:[(0,i.jsx)(p.a,{spacing:"xs",icon:a,children:z.Z.about.skills.filter((e,t)=>t<z.Z.about.skills.length/2).map(l)}),(0,i.jsx)(p.a,{spacing:"xs",icon:a,children:z.Z.about.skills.filter((e,t)=>t>=z.Z.about.skills.length/2).map(l)})]})})]});return(0,i.jsxs)(i.Fragment,{children:[t,s,c]})}var C=r(5504),T=r(7789),I=(0,v.k)(e=>({root:{width:"100%",padding:"0rem"},title:{fontSize:"1.6rem",fontWeight:700,margin:"1.25rem 0rem",color:e.colors.gray[7]},subTitle:{fontSize:"1.125rem",fontWeight:600,color:e.fn.darken(e.fn.primaryColor(),.1),textTransform:"uppercase",marginBottom:e.spacing.sm},year:{background:e.colors.gray[1],color:e.colors.gray[7],marginBottom:e.spacing.sm,borderRadius:e.radius.sm},organization:{fontSize:e.fontSizes.md,fontStyle:"italic",marginBottom:e.spacing.sm},last:{display:"none"}}));function A(e){let{title:t,data:r}=e,{classes:s}=I();return(0,i.jsxs)(y.W,{className:s.root,children:[(0,i.jsx)(n.D,{order:3,className:s.title,"data-cy":"title",children:t}),(0,i.jsxs)(C.T,{active:r.length,lineWidth:2,children:[r&&r.map(e=>(0,i.jsxs)(C.T.Item,{title:(0,i.jsx)(n.D,{order:4,className:s.subTitle,"data-cy":"subTitle".concat(e.organization).concat(e.subTitle),children:e.subTitle}),children:[(0,i.jsx)(T.C,{size:"lg",variant:"light",className:s.year,"data-cy":"year".concat(e.organization).concat(e.subTitle),children:e.year}),(0,i.jsx)(o.x,{className:s.organization,children:e.organization}),e.children&&e.children]},e.organization)),(0,i.jsx)(C.T.Item,{className:s.last})]})]})}var D=(0,v.k)(e=>({gridRoot:{textAlign:"start"},listItem:{listStyle:"disc",paddingBottom:"0.625rem"}}));function W(){let{classes:e}=D(),t=z.Z.resume.educationExp.map(e=>({...e,children:null})),r=t=>(0,i.jsx)(p.a.Item,{className:e.listItem,children:(0,i.jsx)(o.x,{children:t})},t),n=z.Z.resume.professionalExp.map(e=>({...e,children:(0,i.jsx)(p.a,{children:e.duties.map(r)})}));return(0,i.jsxs)(j.M,{className:e.gridRoot,breakpoints:[{minWidth:"xs",cols:1},{minWidth:"sm",cols:2}],children:[(0,i.jsx)(A,{title:"Education",data:t}),(0,i.jsx)(A,{title:"Professional Experience",data:n})]})}r(8481);var E=r(4964),B=r(5926),R=r(1017),_=r(1759),L=r(4065),Y=r(7283),P=r(4577),F=r(6982),M=r.n(F),X=r(1209),O=(0,v.k)(e=>({slideImg:{cursor:"pointer",objectFit:"contain !important"},leftNav:{position:"absolute",zIndex:4,opacity:.4,top:"50%",left:0,transform:"translate(30%,-50%) !important"},rightNav:{position:"absolute",zIndex:4,opacity:.4,top:"50%",right:0,transform:"translate(-30%,-50%) !important"}}));function q(e){let{imgs:t,onClickImg:r}=e,n=(0,L.a)("(max-width: 768px)"),{classes:o}=O(),s=e=>(0,i.jsx)(P.o,{ratio:1920/1080,children:(0,i.jsx)("img",{loading:"lazy",className:o.slideImg,src:e.original,onClick:r})}),a={size:n?"md":"lg",radius:"xl",variant:"filled"};return(0,i.jsx)(M(),{autoPlay:!0,infinite:!0,showBullets:!0,slideInterval:5e3,showThumbnails:!0,showFullscreenButton:!1,showPlayButton:!1,items:t.map(e=>({original:e,thumbnail:e,renderItem:s})),renderLeftNav:(e,t)=>(0,i.jsx)(B.A,{...a,onClick:e,disabled:t,className:o.leftNav,children:(0,i.jsx)(X.Z,{size:"1.5rem"})}),renderRightNav:(e,t)=>(0,i.jsx)(B.A,{...a,onClick:e,disabled:t,className:o.rightNav,children:(0,i.jsx)(b.Z,{size:"1.5rem"})})})}var H=(0,v.k)(e=>({root:{transition:"transform 150ms ease, box-shadow 150ms ease",padding:e.spacing.md,borderRadius:e.radius.md,"&:hover":{transform:"scale(1.01)",boxShadow:e.shadows.md}},title:{color:e.colors.gray[7],marginTop:e.spacing.md},text:{textAlign:"start",marginTop:e.spacing.sm,color:e.colors.gray[9]}}));function G(e){let{imgs:t,title:r,text:s}=e,a=(0,g.rZ)(),[l,c]=(0,_.q)(!1),d=(0,L.a)("(max-width: 768px)"),{classes:m}=H(),x=(0,i.jsx)(q,{imgs:t,onClickImg:c.open}),h=(0,i.jsxs)(E.u.Root,{opened:l,onClose:c.close,size:"auto",yOffset:"10vh",fullScreen:d,children:[(0,i.jsx)(E.u.Overlay,{}),(0,i.jsxs)(E.u.Content,{children:[(0,i.jsxs)(E.u.Header,{children:[(0,i.jsx)(E.u.Title,{}),(0,i.jsx)(B.A,{color:a.primaryColor,size:"xl",radius:"xl",variant:"filled",onClick:c.close,children:(0,i.jsx)(Y.Z,{size:"1.5rem"})})]}),(0,i.jsxs)(E.u.Body,{children:[x," "]})]})]});return(0,i.jsxs)(i.Fragment,{children:[h,(0,i.jsxs)(R.Z,{withBorder:!0,className:m.root,children:[(0,i.jsx)(R.Z.Section,{children:x}),(0,i.jsx)(n.D,{order:3,className:m.title,children:r}),(0,i.jsx)(o.x,{className:m.text,children:s})]})]})}function V(){return(0,i.jsx)(y.W,{children:(0,i.jsx)(j.M,{cols:3,spacing:"xl",breakpoints:[{maxWidth:"sm",cols:1},{maxWidth:"md",cols:2}],children:z.Z.projects.map(e=>(0,i.jsx)(G,{title:e.title,text:e.text,imgs:[...e.images]},e.title))})})}var J=r(6768),K=r(2846),Q=r(445),U=(0,v.k)((e,t)=>{let{opened:r}=t;return{icon:{background:r?e.fn.primaryColor():"transparent",color:r?e.white:e.colors.gray[9],transition:"all 0.3s",">svg":{width:"1.5rem",height:"1.5rem"},"@media (hover: hover)":{":hover":{background:e.fn.primaryColor(),color:e.white}}}}});let $={top:(0,J.h)(20),right:(0,J.h)(20)};function ee(e){let{opened:t,handlers:{toggle:r}}=e,{classes:n}=U({opened:t});return(0,i.jsx)(K.D,{position:$,children:(0,i.jsx)(B.A,{size:"xl",radius:"xl",variant:"filled",onClick:r,className:n.icon,children:t?(0,i.jsx)(Y.Z,{}):(0,i.jsx)(Q.Z,{})})})}var et=(0,v.k)((e,t)=>{let{isActive:r,isExpand:i}=t;return{navLink:{display:"flex",alignItems:"center",overflow:"hidden",cursor:"pointer",padding:"0.625rem 1.125rem",marginBottom:"0.5rem",height:"3.5rem",transition:"all 0.3s",width:i?"100%":"3.5rem",background:r?e.fn.primaryColor():e.colors.gray[1],color:r?e.white:e.colors.gray[7],borderRadius:e.radius.xl,":hover":{width:"100%",background:e.fn.primaryColor(),color:e.white,">span":{display:"block"}},">svg":{flex:"0 0 auto",width:"1.25rem",height:"1.25rem"},">span":{display:i?"block":"none",paddingLeft:"0.5rem"}}}});function er(e){let{id:t,icon:r,text:n,isActive:s,isExpand:a,onClick:l}=e,{classes:c}=et({isActive:s,isExpand:a});return(0,i.jsxs)("a",{className:c.navLink,href:"#".concat(t),onClick:l,children:[r,(0,i.jsx)(o.x,{span:!0,children:n})]})}var ei=(0,v.k)((e,t)=>{let{isExpand:r}=t;return{root:{position:"fixed",top:0,left:0,bottom:0,zIndex:9997,display:"flex",flexDirection:"column",justifyContent:"center",padding:"1rem",overflowY:"auto",transition:"all 0.3s",ul:{listStyle:"none",margin:0,padding:0},[e.fn.smallerThan("sm")]:{background:e.white,borderRight:"1px solid ".concat(e.colors.gray[2]),transform:r?"translateX(0)":"translateX(-100%)"}}}});function en(e){let{data:t,activeSection:r}=e,[n,o]=(0,_.q)(!1),{classes:s}=ei({isExpand:n}),a=e=>{o.close()},l=(0,i.jsx)("header",{className:s.root,children:(0,i.jsx)("nav",{children:(0,i.jsx)("ul",{children:t&&t.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(er,{id:e.id,icon:e.icon,text:e.text,isActive:r===e.id,isExpand:n,onClick:a})},e.id))})})});return(0,i.jsxs)("div",{"data-cy":"header",children:[(0,i.jsx)(ee,{opened:n,handlers:o}),l]})}var eo=r(6137),es=r(2971),ea=r(3742),el=(0,v.k)(e=>({root:{padding:"2rem 1rem",background:e.colors.gray[2],textAlign:"center",width:"100%",maxWidth:"100%"},title:{fontSize:"2rem",fontWeight:700,color:e.colors.gray[7],marginBottom:"1rem"},copyright:{color:e.colors.gray[7],fontSize:"0.9rem"}}));let ec=[{icon:(0,i.jsx)(es.Z,{size:"1.3rem"}),link:z.Z.about.linkedin},{icon:(0,i.jsx)(ea.Z,{size:"1.3rem"}),link:z.Z.about.github}];function ed(){let e=(0,g.rZ)(),{classes:t}=el();return(0,i.jsxs)(y.W,{className:t.root,"data-cy":"footer",children:[(0,i.jsx)(n.D,{order:3,className:t.title,children:z.Z.about.name}),(0,i.jsx)(eo.Z,{position:"center",pb:"1rem",children:ec.map(t=>(0,i.jsx)("a",{href:t.link,target:"_blank",children:(0,i.jsx)(B.A,{color:e.primaryColor,size:"lg",radius:"xl",variant:"filled",children:t.icon})},t.link))}),(0,i.jsxs)(o.x,{className:t.copyright,children:[z.Z.about.copyrightTexts[0],(0,i.jsx)("strong",{children:z.Z.about.copyrightTexts[1]}),z.Z.about.copyrightTexts[2]]})]})}var em=r(8036),ex=r(2128),eh=r(5403);function eu(){let e=(0,g.rZ)(),[t,r]=(0,ex.b)(),n=e=>{r({y:0})};return(0,i.jsx)(K.D,{position:{bottom:(0,J.h)(20),right:(0,J.h)(20)},zIndex:199,children:(0,i.jsx)(em.u,{transition:"slide-up",mounted:t.y>0,children:t=>(0,i.jsx)(B.A,{color:e.primaryColor,size:"xl",radius:"xl",variant:"filled",style:t,onClick:n,children:(0,i.jsx)(eh.Z,{size:"1.5rem"})})})})}var eg=r(89);let ep={initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1}};function ef(e){let{children:t}=e;return(0,i.jsx)(eg.E.div,{...ep,children:t})}var ej=(0,v.k)(e=>({heroSectionRoot:{position:"relative",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",letterSpacing:2,paddingLeft:"10rem",paddingRight:"1rem",transition:"all 0.3s","&::before":{position:"absolute",content:'""',bottom:0,top:0,left:0,right:0,zIndex:-1,background:"url('imgs/heroBg.jpg') top right no-repeat",backgroundSize:"cover",opacity:.3},[e.fn.smallerThan("sm")]:{paddingLeft:"1rem"}},heroSectionTitle:{fontSize:"4rem",fontWeight:700,color:e.colors.gray[7],[e.fn.smallerThan("sm")]:{fontSize:"2rem",textAlign:"center",transform:"translateY(-40px)"}},heroSectionDescription:{fontSize:"1.625rem",color:e.colors.gray[7],[e.fn.smallerThan("sm")]:{fontSize:"1.25rem",textAlign:"center",transform:"translateY(-40px)"}},heroSectionTypingText:{color:e.fn.primaryColor()},sectionContainerRoot:{padding:"3.75rem 3rem 3.75rem 1.5rem",textAlign:"center",marginLeft:"100px",[e.fn.smallerThan("sm")]:{marginLeft:"0rem",padding:"3.75rem 3rem"}}}));function ey(){let{classes:e}=ej(),{headerLists:t,activeSection:r}=function(){let[e,t]=(0,l.useState)({activeSection:"hero"}),r={rootMargin:"-70% 0px 0%",threshold:0},[n,o,s]=(0,h.YD)({...r}),[a,g,p]=(0,h.YD)({...r}),[f,j,y]=(0,h.YD)({...r}),[b,k,v]=(0,h.YD)({...r}),Z=u.map(e=>{switch(e.id,e.id){case"hero":return{...e,ref:n,icon:(0,i.jsx)(c.Z,{})};case"about":return{...e,ref:a,icon:(0,i.jsx)(d.Z,{}),children:(0,i.jsx)(w,{})};case"resume":return{...e,ref:f,icon:(0,i.jsx)(m.Z,{}),children:(0,i.jsx)(W,{})};case"project":return{...e,ref:b,icon:(0,i.jsx)(x.Z,{}),children:(0,i.jsx)(V,{})};default:throw Error("some headerlist not handled")}});return(0,l.useEffect)(()=>{if(s&&p&&y&&v){if(o){t(e=>({...e,activeSection:s.target.id}));return}if(g){t(e=>({...e,activeSection:p.target.id}));return}if(j){t(e=>({...e,activeSection:y.target.id}));return}if(k){t(e=>({...e,activeSection:v.target.id}));return}}},[o,s,g,p,j,y,k,v]),{headerLists:Z,activeSection:e.activeSection}}(),s=(t,r)=>(0,i.jsx)("section",{id:t.id,className:e.heroSectionRoot,ref:t.ref,"data-cy":"section".concat(t.id),children:(0,i.jsxs)(ef,{children:[(0,i.jsx)(n.D,{order:1,className:e.heroSectionTitle,children:z.Z.about.name}),(0,i.jsxs)(o.x,{className:e.heroSectionDescription,children:[z.Z.about.description,(0,i.jsx)(o.x,{span:!0,className:e.heroSectionTypingText,children:(0,i.jsx)(a(),{component:"span",options:{strings:[...z.Z.about.descriptionTypingText],autoStart:!0,loop:!0}})})]})]})},t.id),g=(t,r)=>(0,i.jsx)("section",{id:t.id,className:e.sectionContainerRoot,ref:t.ref,"data-cy":"section".concat(t.id),children:(0,i.jsxs)(ef,{children:[(0,i.jsx)(S,{text:t.text}),t.children]})},t.id);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(en,{data:t,activeSection:r}),(0,i.jsx)("main",{children:t&&t.map((e,t)=>"hero"===e.id?s(e,t):g(e,t))}),(0,i.jsx)(ed,{}),(0,i.jsx)(eu,{})]})}}},function(e){e.O(0,[561,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);