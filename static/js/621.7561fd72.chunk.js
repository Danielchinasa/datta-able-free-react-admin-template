"use strict";(self.webpackChunkdatta_able_free_react_admin_template=self.webpackChunkdatta_able_free_react_admin_template||[]).push([[621],{18010:function(e,n,t){var a=t(47313),i=t(56542),r=t(46417);n.Z=function(e){return(0,r.jsx)(a.Fragment,{children:(0,r.jsxs)(i.Z,{variant:"warning",children:[e.message,(0,r.jsx)(i.Z.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},35621:function(e,n,t){t.r(n),t.d(n,{default:function(){return le}});var a=t(47313),i=t(63849),r=t(31616),o=t(45987),s=t(1413),l=t(79859),c=t(29439),u=t(9969),d=t(56),m=t(25891),h=t(9982),f=t(92627),v=t(46417),b=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],p=["activeKey","getControlledId","getControllerId"],y=["as"];function x(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}function g(e){var n=e.active,t=e.eventKey,i=e.mountOnEnter,r=e.transition,o=e.unmountOnExit,s=e.role,l=void 0===s?"tabpanel":s,c=e.onEnter,u=e.onEntering,d=e.onEntered,f=e.onExit,v=e.onExiting,y=e.onExited,g=x(e,b),E=(0,a.useContext)(m.Z);if(!E)return[Object.assign({},g,{role:l}),{eventKey:t,isActive:n,mountOnEnter:i,transition:r,unmountOnExit:o,onEnter:c,onEntering:u,onEntered:d,onExit:f,onExiting:v,onExited:y}];var j=E.activeKey,Z=E.getControlledId,k=E.getControllerId,w=x(E,p),O=(0,h.h)(t);return[Object.assign({},g,{role:l,id:Z(t),"aria-labelledby":k(t)}),{eventKey:t,isActive:null==n&&null!=O?(0,h.h)(j)===O:n,transition:r||w.transition,mountOnEnter:null!=i?i:w.mountOnEnter,unmountOnExit:null!=o?o:w.unmountOnExit,onEnter:c,onEntering:u,onEntered:d,onExit:f,onExiting:v,onExited:y}]}var E=a.forwardRef((function(e,n){var t=e.as,a=void 0===t?"div":t,i=g(x(e,y)),r=(0,c.Z)(i,2),o=r[0],s=r[1],l=s.isActive,u=s.onEnter,d=s.onEntering,b=s.onEntered,p=s.onExit,E=s.onExiting,j=s.onExited,Z=s.mountOnEnter,k=s.unmountOnExit,w=s.transition,O=void 0===w?f.Z:w;return(0,v.jsx)(m.Z.Provider,{value:null,children:(0,v.jsx)(h.Z.Provider,{value:null,children:(0,v.jsx)(O,{in:l,onEnter:u,onEntering:d,onEntered:b,onExit:p,onExiting:E,onExited:j,mountOnEnter:Z,unmountOnExit:k,children:(0,v.jsx)(a,Object.assign({},o,{ref:n,hidden:!l,"aria-hidden":!l}))})})})}));E.displayName="TabPanel";var j=function(e){var n=e.id,t=e.generateChildId,i=e.onSelect,r=e.activeKey,o=e.defaultActiveKey,s=e.transition,l=e.mountOnEnter,f=e.unmountOnExit,b=e.children,p=(0,u.$c)(r,o,i),y=(0,c.Z)(p,2),x=y[0],g=y[1],E=(0,d.gP)(n),j=(0,a.useMemo)((function(){return t||function(e,n){return E?"".concat(E,"-").concat(n,"-").concat(e):null}}),[E,t]),Z=(0,a.useMemo)((function(){return{onSelect:g,activeKey:x,transition:s,mountOnEnter:l||!1,unmountOnExit:f||!1,getControlledId:function(e){return j(e,"tabpane")},getControllerId:function(e){return j(e,"tab")}}}),[g,x,s,l,f,j]);return(0,v.jsx)(m.Z.Provider,{value:Z,children:(0,v.jsx)(h.Z.Provider,{value:g||null,children:b})})};j.Panel=E;var Z=j,k=t(4942),w=t(46123),O=t.n(w),C=(t(60576),t(31438)),N=t(68524),P=t(9971),K=t(15614),q=t(28864),R=(0,q.Z)("nav-item"),A=t(48091),I=t(20917),S=["bsPrefix","className","as","active","eventKey","disabled"],T=a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.as,r=void 0===i?A.Z:i,l=e.active,u=e.eventKey,d=e.disabled,m=void 0!==d&&d,f=(0,o.Z)(e,S);t=(0,N.vE)(t,"nav-link");var b=(0,I.v)((0,s.Z)({key:(0,h.h)(u,f.href),active:l,disabled:m},f)),p=(0,c.Z)(b,2),y=p[0],x=p[1];return(0,v.jsx)(r,(0,s.Z)((0,s.Z)((0,s.Z)({},f),y),{},{ref:n,disabled:m,className:O()(a,t,m&&"disabled",x.isActive&&"active")}))}));T.displayName="NavLink";var L=T,_=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],B=a.forwardRef((function(e,n){var t,i,r,c=(0,l.Ch)(e,{activeKey:"onSelect"}),u=c.as,d=void 0===u?"div":u,m=c.bsPrefix,h=c.variant,f=c.fill,b=void 0!==f&&f,p=c.justify,y=void 0!==p&&p,x=c.navbar,g=c.navbarScroll,E=c.className,j=c.activeKey,Z=(0,o.Z)(c,_),w=(0,N.vE)(m,"nav"),q=!1,R=(0,a.useContext)(P.Z),A=(0,a.useContext)(K.Z);return R?(i=R.bsPrefix,q=null==x||x):A&&(r=A.cardHeaderBsPrefix),(0,v.jsx)(C.Z,(0,s.Z)({as:d,ref:n,activeKey:j,className:O()(E,(t={},(0,k.Z)(t,w,!q),(0,k.Z)(t,"".concat(i,"-nav"),q),(0,k.Z)(t,"".concat(i,"-nav-scroll"),q&&g),(0,k.Z)(t,"".concat(r,"-").concat(h),!!r),(0,k.Z)(t,"".concat(w,"-").concat(h),!!h),(0,k.Z)(t,"".concat(w,"-fill"),b),(0,k.Z)(t,"".concat(w,"-justified"),y),t))},Z))}));B.displayName="Nav";var M=Object.assign(B,{Item:R,Link:L}),V=(0,q.Z)("tab-content"),H=t(22868);function F(e){return"boolean"===typeof e?e?H.Z:f.Z:e}var D=["bsPrefix","transition"],Y=["className","as"],W=a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.transition,i=(0,o.Z)(e,D),r=g((0,s.Z)((0,s.Z)({},i),{},{transition:F(a)})),l=(0,c.Z)(r,2),u=l[0],d=u.className,f=u.as,b=void 0===f?"div":f,p=(0,o.Z)(u,Y),y=l[1],x=y.isActive,E=y.onEnter,j=y.onEntering,Z=y.onEntered,k=y.onExit,w=y.onExiting,C=y.onExited,P=y.mountOnEnter,K=y.unmountOnExit,q=y.transition,R=void 0===q?H.Z:q,A=(0,N.vE)(t,"tab-pane");return(0,v.jsx)(m.Z.Provider,{value:null,children:(0,v.jsx)(h.Z.Provider,{value:null,children:(0,v.jsx)(R,{in:x,onEnter:E,onEntering:j,onEntered:Z,onExit:k,onExiting:w,onExited:C,mountOnEnter:P,unmountOnExit:K,children:(0,v.jsx)(b,(0,s.Z)((0,s.Z)({},p),{},{ref:n,className:O()(d,A,x&&"active")}))})})})}));W.displayName="TabPane";var Q=W,U=t(46682),G=["id","onSelect","transition","mountOnEnter","unmountOnExit","variant","children","activeKey"];function X(e){var n=e.props,t=n.title,a=n.eventKey,i=n.disabled,r=n.tabClassName,o=n.tabAttrs,l=n.id;return null==t?null:(0,v.jsx)(R,{as:"li",role:"presentation",children:(0,v.jsx)(L,(0,s.Z)((0,s.Z)({as:"button",type:"button",eventKey:a,disabled:i,id:l,className:r},o),{},{children:t}))})}var $=function(e){var n=(0,l.Ch)(e,{activeKey:"onSelect"}),t=n.id,a=n.onSelect,i=n.transition,r=n.mountOnEnter,c=void 0!==r&&r,u=n.unmountOnExit,d=void 0!==u&&u,m=n.variant,h=void 0===m?"tabs":m,f=n.children,b=n.activeKey,p=void 0===b?function(e){var n;return(0,U.Ed)(e,(function(e){null==n&&(n=e.props.eventKey)})),n}(f):b,y=(0,o.Z)(n,G);return(0,v.jsxs)(Z,{id:t,activeKey:p,onSelect:a,transition:F(i),mountOnEnter:c,unmountOnExit:d,children:[(0,v.jsx)(M,(0,s.Z)((0,s.Z)({},y),{},{role:"tablist",as:"ul",variant:h,children:(0,U.UI)(f,X)})),(0,v.jsx)(V,{children:(0,U.UI)(f,(function(e){var n=(0,s.Z)({},e.props);return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,v.jsx)(Q,(0,s.Z)({},n))}))})]})};$.displayName="Tabs";var z=$,J=t(75192),ee=t.n(J),ne=["transition"],te=function(e){var n=e.transition,t=(0,o.Z)(e,ne);return(0,v.jsx)(Z,(0,s.Z)((0,s.Z)({},t),{},{transition:F(n)}))};te.displayName="TabContainer";var ae=te,ie={eventKey:ee().oneOfType([ee().string,ee().number]),title:ee().node.isRequired,disabled:ee().bool,tabClassName:ee().string,tabAttrs:ee().object},re=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};re.propTypes=ie;var oe=Object.assign(re,{Container:ae,Content:V,Pane:Q}),se=t(18010),le=function(){return(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)(i.Z,{children:(0,v.jsx)(r.Z,{sm:12,children:(0,v.jsx)(se.Z,{message:"For more info please check the components's official documentation",link:"https://react-bootstrap.netlify.app/components/tabs/"})})}),(0,v.jsx)(i.Z,{children:(0,v.jsxs)(r.Z,{children:[(0,v.jsx)("h5",{children:"Basic Tabs"}),(0,v.jsx)("hr",{}),(0,v.jsxs)(z,{defaultActiveKey:"home",children:[(0,v.jsx)(oe,{eventKey:"home",title:"HOME",children:(0,v.jsx)("p",{children:"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."})}),(0,v.jsx)(oe,{eventKey:"profile",title:"PROFILE",children:(0,v.jsx)("p",{children:"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."})}),(0,v.jsx)(oe,{eventKey:"contact",title:"CONTACT",children:(0,v.jsx)("p",{children:"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."})})]}),(0,v.jsx)("h5",{className:"mt-4",children:"Basic Pills"}),(0,v.jsx)("hr",{}),(0,v.jsxs)(z,{variant:"pills",defaultActiveKey:"home",className:"mb-3",children:[(0,v.jsx)(oe,{eventKey:"home",title:"HOME",children:(0,v.jsx)("p",{children:"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."})}),(0,v.jsx)(oe,{eventKey:"profile",title:"PROFILE",children:(0,v.jsx)("p",{children:"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."})}),(0,v.jsx)(oe,{eventKey:"contact",title:"CONTACT",children:(0,v.jsx)("p",{children:"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."})})]}),(0,v.jsx)("h5",{className:"mt-4",children:"Vertical Pills"}),(0,v.jsx)("hr",{}),(0,v.jsx)(oe.Container,{defaultActiveKey:"home",children:(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(r.Z,{sm:3,children:(0,v.jsxs)(M,{variant:"pills",className:"flex-column",children:[(0,v.jsx)(M.Item,{children:(0,v.jsx)(M.Link,{eventKey:"home",children:"HOME"})}),(0,v.jsx)(M.Item,{children:(0,v.jsx)(M.Link,{eventKey:"profile",children:"PROFILE"})}),(0,v.jsx)(M.Item,{children:(0,v.jsx)(M.Link,{eventKey:"contact",children:"CONTACT"})}),(0,v.jsx)(M.Item,{children:(0,v.jsx)(M.Link,{eventKey:"settings",children:"SETTINGS"})})]})}),(0,v.jsx)(r.Z,{sm:9,children:(0,v.jsxs)(oe.Content,{children:[(0,v.jsx)(oe.Pane,{eventKey:"home",children:(0,v.jsx)("p",{children:"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."})}),(0,v.jsx)(oe.Pane,{eventKey:"profile",children:(0,v.jsx)("p",{children:"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."})}),(0,v.jsx)(oe.Pane,{eventKey:"contact",children:(0,v.jsx)("p",{children:"Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."})}),(0,v.jsx)(oe.Pane,{eventKey:"settings",children:(0,v.jsx)("p",{children:"Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod."})})]})})]})})]})})]})}},92627:function(e,n,t){var a=t(29650),i=t(21369),r=t(47313);n.Z=function(e){var n=e.children,t=e.in,o=e.onExited,s=e.mountOnEnter,l=e.unmountOnExit,c=(0,r.useRef)(null),u=(0,r.useRef)(t),d=(0,a.Z)(o);(0,r.useEffect)((function(){t?u.current=!0:d(c.current)}),[t,d]);var m=(0,i.Z)(c,n.ref),h=(0,r.cloneElement)(n,{ref:m});return t?h:l||!u.current&&s?null:h}},60576:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.default)((function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=null;return n.forEach((function(e){if(null==i){var n=e.apply(void 0,t);null!=n&&(i=n)}})),i}))};var a,i=t(62865),r=(a=i)&&a.__esModule?a:{default:a};e.exports=n.default},62865:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,t,a,i,r,o){var s=i||"<<anonymous>>",l=o||a;if(null==t[a])return n?new Error("Required "+r+" `"+l+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,a,s,r,l].concat(u))}var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t},e.exports=n.default},56542:function(e,n,t){t.d(n,{Z:function(){return C}});var a=t(1413),i=t(45987),r=t(46123),o=t.n(r),s=t(47313),l=t(79859),c=t(29650),u=t(48091),d=t(68524),m=t(22868),h=t(75192),f=t.n(h),v=t(46417),b=["className","variant","aria-label"],p={"aria-label":f().string,onClick:f().func,variant:f().oneOf(["white"])},y=s.forwardRef((function(e,n){var t=e.className,r=e.variant,s=e["aria-label"],l=void 0===s?"Close":s,c=(0,i.Z)(e,b);return(0,v.jsx)("button",(0,a.Z)({ref:n,type:"button",className:o()("btn-close",r&&"btn-close-".concat(r),t),"aria-label":l},c))}));y.displayName="CloseButton",y.propTypes=p;var x=y,g=t(96205),E=t(28864),j=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Z=(0,g.Z)("h4");Z.displayName="DivStyledAsH4";var k=(0,E.Z)("alert-heading",{Component:Z}),w=(0,E.Z)("alert-link",{Component:u.Z}),O=s.forwardRef((function(e,n){var t=(0,l.Ch)(e,{show:"onClose"}),r=t.bsPrefix,s=t.show,u=void 0===s||s,h=t.closeLabel,f=void 0===h?"Close alert":h,b=t.closeVariant,p=t.className,y=t.children,g=t.variant,E=void 0===g?"primary":g,Z=t.onClose,k=t.dismissible,w=t.transition,O=void 0===w?m.Z:w,C=(0,i.Z)(t,j),N=(0,d.vE)(r,"alert"),P=(0,c.Z)((function(e){Z&&Z(!1,e)})),K=!0===O?m.Z:O,q=(0,v.jsxs)("div",(0,a.Z)((0,a.Z)({role:"alert"},K?void 0:C),{},{ref:n,className:o()(p,N,E&&"".concat(N,"-").concat(E),k&&"".concat(N,"-dismissible")),children:[k&&(0,v.jsx)(x,{onClick:P,"aria-label":f,variant:b}),y]}));return K?(0,v.jsx)(K,(0,a.Z)((0,a.Z)({unmountOnExit:!0},C),{},{ref:void 0,in:u,children:q})):u?q:null}));O.displayName="Alert";var C=Object.assign(O,{Link:w,Heading:k})},46682:function(e,n,t){t.d(n,{Ed:function(){return r},UI:function(){return i},XW:function(){return o}});var a=t(47313);function i(e,n){var t=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?n(e,t++):e}))}function r(e,n){var t=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&n(e,t++)}))}function o(e,n){return a.Children.toArray(e).some((function(e){return a.isValidElement(e)&&e.type===n}))}},22868:function(e,n,t){var a,i=t(1413),r=t(45987),o=t(4942),s=t(46123),l=t.n(s),c=t(47313),u=t(38588),d=t(7155),m=t(6280),h=t(75879),f=t(46417),v=["className","children","transitionClasses","onEnter"],b=(a={},(0,o.Z)(a,u.d0,"show"),(0,o.Z)(a,u.cn,"show"),a),p=c.forwardRef((function(e,n){var t=e.className,a=e.children,o=e.transitionClasses,s=void 0===o?{}:o,u=e.onEnter,p=(0,r.Z)(e,v),y=(0,i.Z)({in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p),x=(0,c.useCallback)((function(e,n){(0,m.Z)(e),null==u||u(e,n)}),[u]);return(0,f.jsx)(h.Z,(0,i.Z)((0,i.Z)({ref:n,addEndListener:d.Z},y),{},{onEnter:x,childRef:a.ref,children:function(e,n){return c.cloneElement(a,(0,i.Z)((0,i.Z)({},n),{},{className:l()("fade",t,a.props.className,b[e],s[e])}))}}))}));p.displayName="Fade",n.Z=p}}]);