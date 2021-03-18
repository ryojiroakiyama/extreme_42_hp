(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{273:function(e,a,t){"use strict";t.r(a);t(8);var n=t(3),r=t.n(n),i=t(0),o=t.n(i),s=t(1),c=t.n(s),l=t(278),d=t.n(l),u=t(5),m=t(23),p=t(276),g=t(7),h=t(9),f=(t(68),t(146),t(6)),y=t.n(f),b=t(4),k=t.n(b),v=t(2),w=t(22),j=t(275),x=t(26),E=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.enter=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.enter;t.deploy&&t.deploy.play(),Object(v.a)({targets:this.lineTopEl,duration:n,easing:"easeOutCubic",width:["0%","100%"],complete:function(){return t.deploy&&t.deploy.stop()}})},t.exit=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.exit;t.deploy&&t.deploy.play(),Object(v.a)({targets:this.lineTopEl,duration:n,easing:"easeOutCubic",width:["100%","0%"],complete:function(){return t.deploy&&t.deploy.stop()}})},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=a.energy,r=a.audio,i=a.sounds,s=a.className,c=(a.children,a.data),l=y()(a,["theme","classes","energy","audio","sounds","className","children","data"]);c.message.split("\n").map(function(e,a){return o.a.createElement(o.a.Fragment,{key:a},0!==a&&o.a.createElement("br",null),o.a.createElement(w.a,{audio:r},e))});return o.a.createElement("article",Object.assign({className:k()(t.root,s)},l),o.a.createElement("div",{className:t.lineTop,ref:function(a){return e.lineTopEl=a}}),o.a.createElement(x.a,{stagger:!0},o.a.createElement(m.a,{className:t.link,href:c.link,target:"_blank",onMouseEnter:function(){return i.hover&&n.entered&&i.hover.play()}},o.a.createElement(j.a,{node:"div",className:t.media,audio:r},o.a.createElement("div",{className:t.image,style:{backgroundImage:c.image&&"url("+c.image+")"}})),o.a.createElement("div",{className:t.info},o.a.createElement("h1",{className:t.text},o.a.createElement(w.a,{audio:r},c.intra_name)),o.a.createElement("p",{className:t.message},c.message)))))},a}(o.a.Component);E.displayName="Post",E.propTypes={theme:c.a.object.isRequired,classes:c.a.object.isRequired,energy:c.a.object.isRequired,audio:c.a.object.isRequired,sounds:c.a.object.isRequired,className:c.a.any,children:c.a.any,data:c.a.shape({title:c.a.string.isRequired,message:c.a.string.isRequired,link:c.a.string,image:c.a.string})};var N=t(13),O=t(277),R=t.n(O),q=Object(g.a)()(Object(u.a)(function(e){return{root:{position:"relative",display:"block",margin:0},lineTop:{position:"absolute",left:"50%",transform:"translateX(-50%)",borderTop:"1px solid "+Object(N.b)(e.color.primary.dark,.25),width:function(e){return e.energy.animate?"0%":"100%"}},link:{display:"flex",flexDirection:"column",padding:[40,20],transition:["background 200ms ease-out","color 200ms ease-out"].join(","),"&:hover, &:focus":{backgroundColor:function(a){return a.energy.entered&&Object(N.b)(e.color.secondary.main,.05)}}},media:{display:"flex",margin:[0,"auto"],padding:[0,0,20,0],width:"100%",height:200},image:{flex:1,border:"1px solid "+Object(N.b)(e.color.secondary.dark,.125),backgroundColor:"#000",backgroundImage:"url("+R.a+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},info:{flex:1,color:e.color.text.main,wordBreak:"break-word"},title:{fontSize:20},message:{margin:0},"@media screen and (min-width: 480px)":{link:{flexDirection:"row",padding:20},media:{padding:[0,20,0,0],width:180,height:180}},"@media screen and (min-width: 768px)":{link:{padding:40}}}})(Object(h.a)()(E))),C=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.classes;return o.a.createElement(p.a,{className:e.root},o.a.createElement(x.a,{stagger:!0},o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(w.a,null,"Member"))),d.a.map(function(e,a){return o.a.createElement(q,{key:a,audio:{silent:a>4},data:Object.assign({},e,{id:"post"+a})})})))},a}(o.a.Component);C.propTypes={classes:c.a.object};a.default=Object(u.a)(function(e){return{root:{},seeMore:{marginTop:20}}})(C)},275:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(9),o=t(6),s=t.n(o),c=(t(8),t(3)),l=t.n(c),d=t(0),u=t.n(d),m=t(1),p=t.n(m),g=t(4),h=t.n(g),f=t(2),y=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},t.enter=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},t.exit=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},t.animate=function(e){this.unanimate(),Object(f.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},t.unanimate=function(){f.a.remove(this.element)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=(a.energy,a.audio,a.sounds,a.className),r=a.children,i=a.node,o=s()(a,["theme","classes","energy","audio","sounds","className","children","node"]);return u.a.createElement(i,Object.assign({ref:function(a){return e.element=a},className:h()(t.root,n)},o),r)},a}(u.a.PureComponent);y.displayName="Fader",y.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},y.defaultProps={node:"span"};t.d(a,"a",function(){return b});var b=Object(r.a)()(Object(n.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(i.a)()(y)))},276:function(e,a,t){"use strict";var n=t(5),r=(t(8),t(6)),i=t.n(r),o=t(3),s=t.n(o),c=t(0),l=t.n(c),d=t(1),u=t.n(d),m=t(4),p=t.n(m),g=t(275),h=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&a.element.exit()},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},t.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=a.className,r=a.children,o=i()(a,["theme","classes","className","children"]);return l.a.createElement(g.a,Object.assign({className:p()(t.root,n),node:"main",ref:function(a){return e.element=a}},o),l.a.createElement("div",{className:t.frame}),l.a.createElement("div",{className:t.content},r))},a}(l.a.Component);h.displayName="Main",h.propTypes={theme:u.a.object.isRequired,classes:u.a.object.isRequired,className:u.a.any,children:u.a.any};var f=t(13);t.d(a,"a",function(){return y});var y=Object(n.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(f.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(h)},277:function(e,a,t){e.exports=t.p+"static/favicon-95ea5cff012f971ed864a05d4505500e.png"},278:function(e,a){e.exports=[{name:"kagawa yuya",intra_name:"ykagawa",message:"extreme leader",image:"https://pbs.twimg.com/profile_images/1283055935087349766/NakVKBWW.jpg",link:"https://twitter.com/yuuya08110"},{name:"kurosu sho",intra_name:"skurosu",message:"kusoru dayo",image:"https://pbs.twimg.com/profile_images/1320210198036762624/bJuKGt3H.jpg",link:"https://twitter.com/skurosu42"}]}}]);
//# sourceMappingURL=component---src-pages-member-js-9bf40d77e76e6098b5fa.js.map