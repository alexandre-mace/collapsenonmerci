(this.webpackJsonpcollapsenonmerci=this.webpackJsonpcollapsenonmerci||[]).push([[0],{206:function(e,a,l){"use strict";l.r(a);var r=l(0),t=l.n(r),n=l(39),o=l.n(n),i=(l(93),l(13)),c=(l(94),l(2)),s=function(){return Object(c.jsx)("div",{className:"slider-wrapper",children:Object(c.jsx)("div",{className:"slider",children:Array.from(Array(100).keys()).map((function(e,a){return Object(c.jsx)("div",{className:"slider-item",children:" Collapse non merci ! "},a)}))})})},u=l(4),b=l(18),m=l(224),g=l(222),d=l(225),p="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",v=Object(g.a)({root:{color:function(e){return e.color},height:2,padding:"15px 0",width:200},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:p,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:p}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-18,"& *":{background:"rgba(255,255,255, 0)",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}}),h=Object(g.a)({input:{marginLeft:10,transform:"translateY(-10px)"}});function x(e){var a=e.handleActionValueChange,l=e.action,t=Object(r.useState)(0),n=Object(i.a)(t,2),o=n[0],s=n[1],u=v(l),b=h();return Object(c.jsxs)("div",{style:{marginBottom:"2rem"},children:[Object(c.jsx)("div",{style:{marginBottom:"1.5rem"},children:l.label}),Object(c.jsx)(m.a,{classes:u,value:o,onChange:function(e,r){s(r),a(l,r)},"aria-label":"ios slider",marks:[{value:0},{value:l.max/4*1},{value:l.max/4*2},{value:l.max/4*3},{value:l.max/4*4}],min:l.min,max:l.max,valueLabelDisplay:"on"}),Object(c.jsx)(d.a,{className:b.input,style:{width:42+4*l.value.toString().length},value:o,margin:"dense",onBlur:function(){o<0?s(0):o>100&&s(100)},onChange:function(e){s(""===e.target.value?"":Number(e.target.value)),a(l,""===e.target.value?"":Number(e.target.value))},inputProps:{type:"number","aria-labelledby":"ios slider"}})]})}var f=function(e){var a=e.actions,l=e.handleActionValueChange;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"input-sliders-wrapper",children:a.map((function(e,a){return Object(c.jsxs)("div",{style:{marginBottom:"0.5rem"},children:[Object(c.jsxs)("div",{className:"d-flex",style:{marginBottom:"1rem"},children:[Object(c.jsx)("img",{height:40,src:e.img,alt:""}),Object(c.jsx)("div",{className:"category-label",style:{marginLeft:"15px"},children:e.label})]}),Object(c.jsx)("div",{className:"d-flex flex-wrap",children:e.actions.map((function(e,a){return Object(c.jsx)("div",{style:{marginRight:"1.5rem"},children:Object(c.jsx)(x,{action:e,handleActionValueChange:l})},a)}))})]},a)}))})})},j=l(19);var O=function(){var e=Object(r.useState)({width:void 0,height:void 0}),a=Object(i.a)(e,2),l=a[0],t=a[1];return Object(r.useEffect)((function(){function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),l};j.b.font.family="mattoneregular",j.b.font.size=18;var w={plugins:{legend:{display:!1,position:"bottom",labels:{font:{size:40}}}},maintainAspectRatio:!1,responsive:!0},y=function(e){var a=e.datasets,l=e.chartRef,r=e.playRef,t=O();return t.width<992&&(j.b.font.size=12),t.width<492&&(j.b.font.size=8),Object(c.jsxs)("div",{className:"main-chart-wrapper",children:[0===a.length&&Object(c.jsxs)("div",{ref:function(e){null!==e&&(r.current=e)},className:"play",children:["Jouez avec les options ",Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"text-center arrow-wrapper",children:Object(c.jsx)("span",{className:"arrow arrow-bar is-bottom"})})]}),Object(c.jsx)(j.a,{ref:function(e){null!==e&&(l.current=e)},data:{labels:["Empreinte carbone"],datasets:a},options:w})]})},k=function(e,a){var l=e.datasets.map((function(e){return e.label[0]}));l.length!==a.length&&a.length>l.length?a.filter((function(e){return!l.includes(e.label)})).forEach((function(a){l.push(a.label),e.datasets.push({barThickness:50,label:[a.label],backgroundColor:[a.color],borderColor:"transparent",borderWidth:3,hoverBackgroundColor:[a.color],hoverBorderColor:[a.color],data:[a.value]})})):l.length===a.length&&e.datasets.find((function(e){return a.forEach((function(a){return a.value!==e.data[0]&&a.label===e.label[0]&&(e.data[0]=a.value,!0)}))}))},C=function(e){var a=e.actions,l=Object(r.useRef)(null),t=Object(r.useRef)(null),n=[];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{playRef:t,chartRef:l,datasets:[]}),Object(c.jsx)(f,{actions:a,handleActionValueChange:function(e,a){var r=n.filter((function(a){return a.label===e.label}));(r=0===r.length?Object(b.a)({},e):r[0]).value=e.value*a,n=[].concat(Object(u.a)(n.filter((function(a){return a.label!==e.label}))),[r]),k(l.current.config.data,n),l.current.config.data.datasets=l.current.config.data.datasets.sort((function(e,a){return a.data[0]-e.data[0]})),"none"!==t.current.style.display&&(t.current.style.display="none"),l.current.update()}})]})},N=function(){return Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("div",{className:"slider-wrapper",children:Object(c.jsx)("div",{className:"slider",children:Array.from(Array(100).keys()).map((function(e,a){return Object(c.jsx)("div",{className:"slider-item",children:":)"},a)}))})})})},z=[{label:"Transport",img:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/woman-biking_1f6b4-200d-2640-fe0f.png",actions:[{label:"1km en voiture",value:.19,color:"rgb(127,127,127)",min:0,max:1e3},{label:"1km en TGV",value:.00173,color:"rgb(156,255,198)",min:0,max:5e3},{label:"1km en avion",value:.23,color:"rgb(142,68,16)",min:0,max:1e4}]},{label:"Num\xe9rique",img:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/laptop_1f4bb.png",actions:[{label:"Envoyer un email",value:.004,color:"rgb(255,103,0)",min:0,max:1e3},{label:"Un tweet",value:2e-5,color:"rgb(54,185,255)",min:0,max:1e3},{label:"Smartphone",value:32,color:"rgb(83,83,83)",min:0,max:70},{label:"Streaming vid\xe9o (1H)",value:.004,color:"rgb(151,151,151)",min:0,max:7e3},{label:"Ordinateur portable (15 pouces)",value:392,color:"rgb(154,154,154)",min:0,max:25}]},{label:"Multim\xe9dia",img:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/television_1f4fa.png",actions:[{label:"Appareil photo",value:28,color:"rgb(149,0,255)",min:0,max:30},{label:"\xc9cran LCD (24 pouces)",value:431,color:"rgb(255,250,0)",min:0,max:10},{label:"Lave-vaisselle",value:271,color:"rgb(255,250,0)",min:0,max:10},{label:"Ordinateur fixe",value:865,color:"rgb(90,90,90)",min:0,max:20},{label:"T\xe9l\xe9vision 45 pouces",value:371,color:"rgb(33,33,33)",min:0,max:10}]},{label:"Alimentation",img:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/curry-rice_1f35b.png",actions:[{label:"Alcool fort (10cl)",value:.12,color:"rgb(243,243,243)",min:0,max:1e3},{label:"Blanc de poulet (120g)",value:.576,color:"rgb(205,204,78)",min:0,max:1e3},{label:"Boeuf (120g)",value:40,color:"rgb(255,0,38)",min:0,max:1e3},{label:"Canard (120g)",value:.78,color:"rgb(149,255,0)",min:0,max:1e3},{label:"Brioche (100g)",value:.491,color:"rgb(255,191,0)",min:0,max:1e3},{label:"Brocoli (100g)",value:.06,color:"rgb(98,255,0)",min:0,max:1e3},{label:"Chocolat noir (100g)",value:1.8,color:"rgb(0,0,0)",min:0,max:1e3},{label:"Compote (100g)",value:.08,color:"rgb(255,0,51)",min:0,max:1e3},{label:"Cr\xeape (100g)",value:.17,color:"rgb(255,250,0)",min:0,max:1e3},{label:"Croque-monsieur (160g)",value:.76,color:"rgb(255,250,0)",min:0,max:1e3},{label:"Fromage (150g)",value:.675,color:"rgb(255,250,0)",min:0,max:1e3},{label:"Fondant au chocolat (125g)",value:1.21,color:"rgb(82,32,0)",min:0,max:1e3},{label:"Glace (60g)",value:.1422,color:"rgb(255,222,0)",min:0,max:1e3},{label:"Jambon cru (130g)",value:1.638,color:"rgb(248,130,245)",min:0,max:1e3},{label:"Bi\xe8re (pinte)",value:1.33,color:"rgb(198,155,27)",min:0,max:1e3},{label:"L\xe9gumes/fruits local, de saison (100g)",value:.026,color:"rgb(85,213,101)",min:0,max:1e3},{label:"L\xe9gumes/fruits import\xe9 par avion, saison ou hors saison (100g)",value:2.7,color:"rgb(54,80,45)",min:0,max:1e3},{label:"Petits pois conserve (100g)",value:.04,color:"rgb(20,219,14)",min:0,max:1e3},{label:"Eau du robinet (1L)",value:13e-5,color:"rgb(0,50,118)",min:0,max:1e3},{label:"Eau de source (1L)",value:.45,color:"rgb(4,84,203)",min:0,max:1e3},{label:"Repas avec du boeuf",value:7.26,color:"rgb(172,16,40)",min:0,max:1e3},{label:"1 repas avec du poulet",value:1.58,color:"rgb(255,250,133)",min:0,max:1e3},{label:"Repas v\xe9g\xe9tarien",value:.51,color:"rgb(47,219,65)",min:0,max:1e3}]},{label:"V\xe9tements",img:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/t-shirt_1f455.png",actions:[{label:"Chaussures",value:15,color:"rgb(0,0,0)",min:0,max:100},{label:"Chemise",value:11,color:"rgb(245,242,129)",min:0,max:200},{label:"T-shirt coton",value:5.2,color:"rgb(144,121,182)",min:0,max:300},{label:"1 jean en coton",value:23.2,color:"rgb(4,0,121)",min:0,max:300}]},{label:"\xc9nergie",img:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/high-voltage_26a1.png",actions:[{label:"Jour de chauffage (gaz)",value:18.63,color:"rgb(255,250,0)",min:0,max:1e4}]},{label:"Maison",img:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/house_1f3e0.png",actions:[{label:"1 livre de poche",value:1.18,color:"rgb(114,201,35)",min:0,max:100},{label:"1 canap\xe9 convertible",value:197,color:"rgb(39,53,121)",min:0,max:20},{label:"Feuille de papier A4",value:.0046,color:"rgb(246,246,246)",min:0,max:1e3}]}];var A=function(){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),l=a[0],t=a[1];return Object(r.useEffect)((function(){setInterval((function(){t(!0)}),1e3)}),[]),Object(c.jsxs)("div",{className:"App",children:[!l&&Object(c.jsx)(N,{}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s,{}),Object(c.jsx)(C,{actions:z})]})]})},L=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,227)).then((function(a){var l=a.getCLS,r=a.getFID,t=a.getFCP,n=a.getLCP,o=a.getTTFB;l(e),r(e),t(e),n(e),o(e)}))};o.a.render(Object(c.jsx)(t.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),L()},93:function(e,a,l){},94:function(e,a,l){}},[[206,1,2]]]);
//# sourceMappingURL=main.faed4e58.chunk.js.map