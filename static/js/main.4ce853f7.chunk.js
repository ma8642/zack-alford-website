(this["webpackJsonpzack-alford-website"]=this["webpackJsonpzack-alford-website"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"alt":"Zack playing drums. The shot points up from a low angle through drum kit, framing Zach between cymbals and bass drum.","src":"/images/carousel/bg-1.jpg"},{"id":2,"alt":"Black and white action shot of Zack smiling while he plays drums.","src":"/images/carousel/bg-2.jpg"},{"id":3,"alt":"Red-tinted photo of Zack playing drums.","src":"/images/the-next-day.png"}]')},36:function(e){e.exports=JSON.parse('[{"id":1,"alt":"Zildjian Symbols Logo","src":"zildjian.jpg","href":"https://zildjian.com/"},{"id":2,"alt":"Vater Drumsticks Logo","src":"vater.png","href":"https://www.vater.com/"},{"id":3,"alt":"Yamaha Drums Logo","src":"yamaha.jpg","href":"https://usa.yamaha.com/products/musical_instruments/drums/index.html"}]')},43:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var i=t(1),c=t.n(i),s=t(12),r=t.n(s),n=(t(43),t(69)),l=t(7),d=t(0),o=function(e){var a=e.pages.map((function(e){var a="connect"===e?"inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-black hover:bg-green-400  lg:mt-0":"block lg:inline-block lg:mt-0 hover:text-green-400 mr-4";return Object(d.jsx)("div",{className:"text-white mt-4 ".concat(a),children:Object(d.jsx)("button",{className:"uppercase",children:Object(d.jsx)(l.Link,{activeClass:"active",to:e,spy:!0,smooth:!0,duration:250,containerId:"main-container",children:e})})},e)}));return Object(d.jsx)("nav",{className:"flex items-center justify-between flex-wrap p-6 bg-black z-50 w-xl",children:Object(d.jsx)("div",{className:"w-full block",children:Object(d.jsx)("div",{className:"text-sm flex flex-row justify-end items-center font-body",children:a})})})},g=t(14),p=(t(55),t(32)),b=function(e){var a=e.siteTitle?e.siteTitle:e.title,t=g.map((function(e,a){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:g[a].src,alt:g[a].alt})})}));return Object(d.jsx)(l.Element,{name:e.id,className:"element",children:Object(d.jsxs)("section",{id:e.id,className:"mb-20 h-xl bg-black text-white",children:[Object(d.jsx)("h1",{className:"text-left font-display text-8xl md:text-9xl w-1/2 z-10 absolute bottom-0 left-0",children:a}),Object(d.jsx)(p.Carousel,{className:"flex justify-end content-end h-xl",autoPlay:!0,infiniteLoop:!0,showArrows:!1,showStatus:!1,showThumbs:!1,children:t})]})})},m=function(e){return Object(d.jsx)(l.Element,{name:e.id,className:"element min-h-screen",children:Object(d.jsxs)("section",{id:e.id,className:"section h-full flex flex-col justify-center items-center",children:[Object(d.jsx)("h1",{className:"title text-center font-display text-3xl md:text-5xl",children:e.title}),Object(d.jsx)("div",{className:"p-10 h-full",children:e.children})]})})},h=function(){for(var e=Object(n.a)().t,a=[],t=0,i=0;i<5;i++)i%2===1?a.push(Object(d.jsx)("br",{})):(a.push(Object(d.jsx)("p",{className:"mb-10 sm:text-base md:text-lg",children:e("biography-para-".concat(t+1))},i)),t+=1);return Object(d.jsx)("div",{className:"font-body text-left",children:a})},f=t(5),j=t.p+"static/media/231-pacific.358bdc18.png",u=t.p+"static/media/aliveandwell.3f34a62e.png",x=[{id:1,title:"The Next Day",artist:"David Bowie",src:"/images/the-next-day.png"},{id:2,title:"Good Fortune, Bad Weather",artist:"Lettie",src:"/images/lettie.png"},{id:3,title:"je sais que la terre est plate",artist:"raphael",src:"/images/je-sais.png"},{id:4,title:"pacific 231",artist:"raphael",src:j},{id:5,title:"Bruce Springsteen in Concert",artist:"Bruce Springsteen",src:"/images/bruce-springsteen.png"},{id:6,title:"Earthling",artist:"David Bowie",src:"/images/earthling.png"},{id:7,title:"Rumble Doll",artist:"Patty Scialfa",src:"/images/rumble-doll.png"},{id:8,title:"River of Dreams",artist:"Billy Joel",src:t.p+"static/media/billy-joel.26f7dfcb.png"},{id:9,title:"Funplex",artist:"B52's",src:"/images/funplex.png"},{id:10,title:"Generation Terrorists",artist:"Main Street Preachers",src:"/images/main-street-preachers.png"},{id:11,title:"Shake",artist:"Zucchero",src:"/images/shake.png"},{id:12,title:"Supersonic Generation",artist:"Hotei",src:"/images/supersonic.png"},{id:13,title:"Media",artist:"Media",src:"/images/media.png"},{id:14,title:"Good Stuff",artist:"B52's",src:"/images/goodstuff.png"},{id:15,title:"(bod'e-bag)",artist:"Bodybag",src:t.p+"static/media/bodybag.5090e404.png"},{id:16,title:"Kenza",artist:"Khaled",src:"/images/kenza.png"},{id:17,title:"Monter Amoureuse",artist:"Maya Barsony",src:"/images/maya.png"},{id:18,title:"I Used to Be",artist:"Gail Ann Dorsey",src:"/images/gail.png"},{id:19,title:"Alive and Well",artist:"David Bowie",src:u},{id:20,title:"Change for the Better",artist:"Maggies Dream",src:"/images/maggiesdream.png"}],w=function(e){return Object(d.jsx)("button",{className:"p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105",onClick:e.onClick,children:e.children})},y=function(){var e=Object(i.useState)(8),a=Object(f.a)(e,2),t=a[0],c=a[1],s=x.map((function(e,a){return Object(d.jsx)("img",{src:e.src,alt:"Album cover for ".concat(e.title," by ").concat(e.artist),maxWidth:"50%"},e.id)})),r=t<s.length?"More":"Less";return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"grid grid-cols-3 lg:grid-cols-5 gap-4",children:s.slice(0,t)}),Object(d.jsx)("div",{className:"flex justify-center mt-4",children:Object(d.jsx)(w,{onClick:function(){t<s.length?c(t+8):c(8)},children:r})})]})},O=t(70),v=t.p+"static/media/gwn_main.a2a2c0a5.png",k=t.p+"static/media/bowie_main.65c3595b.png",B=t.p+"static/media/zucchero_main.e4f90fbd.png",N=t.p+"static/media/b52s_main.88087bbe.png",z=t.p+"static/media/bspring_main.059040a0.png",_=t.p+"static/media/gwn01.984e33ad.png",S=t.p+"static/media/gwn02.bb922661.png",C=t.p+"static/media/gwn03.16ad9b0b.png",D=t.p+"static/media/gwn04.abe133b9.png",M=t.p+"static/media/gwn05.cb292162.png",Z=t.p+"static/media/gwn06.e92b8f65.png",T=t.p+"static/media/gwn07.4aae2e45.png",A=t.p+"static/media/gwn08.25230790.png",P=t.p+"static/media/gwn09.99035268.png",G=t.p+"static/media/gwn10.fb7f4b0b.png",L=t.p+"static/media/gwn11.0ed267e3.png",J=t.p+"static/media/gwn12.0053f6df.png",R=t.p+"static/media/gwn13.7312f9a6.png",W=t.p+"static/media/gwn15.0916d757.png",H=t.p+"static/media/gwn16.78198729.png",K=t.p+"static/media/gwn17.8544de90.png",V=t.p+"static/media/gwn18.c4c1dd28.png",E=t.p+"static/media/gwn19.b42f7869.png",I=t.p+"static/media/gwn20.0c6166ed.png",F=t.p+"static/media/gwn21.69da0c34.png",Y=t.p+"static/media/gwn22.f848d3f1.png",q=t.p+"static/media/gwn23.ee336df2.png",U=t.p+"static/media/gwn24.137d4e29.png",Q=t.p+"static/media/gwn25.0f29ad23.png",X=t.p+"static/media/gwn26.106b4ffe.png",$=t.p+"static/media/gwn27.4de36b04.png",ee=t.p+"static/media/gwn29.ebc27832.png",ae=t.p+"static/media/gwn30.a33e960e.png",te=t.p+"static/media/gwn31.2ede0ed4.png",ie=t.p+"static/media/gwn32.131e29f2.png",ce=t.p+"static/media/gwn33.10652f1a.png",se=t.p+"static/media/gwn34.93669290.png",re=t.p+"static/media/gwn35.06fb190e.png",ne=t.p+"static/media/gwn36.52f7c389.png",le=t.p+"static/media/gwn37.a393ef81.png",de=t.p+"static/media/gwn38.38e72c81.png",oe=t.p+"static/media/gwn39.1243677f.png",ge=t.p+"static/media/gwn40.d35cedd7.png",pe=t.p+"static/media/gwn41.8ebb9ba2.png",be=t.p+"static/media/gwn42.5bbc302d.png",me=t.p+"static/media/gwn43.f4f118cd.png",he=t.p+"static/media/gwn44.175494a0.png",fe=t.p+"static/media/gwn45.99625cca.png",je=t.p+"static/media/gwn46.3dfa7ab5.png",ue=t.p+"static/media/gwn47.185eb976.png",xe=t.p+"static/media/gwn48.3b500e56.png",we=t.p+"static/media/bowie50.3bd40d2e.png",ye=t.p+"static/media/bowie51.ed2287f1.png",Oe=t.p+"static/media/bowie52.3ac26b30.png",ve=t.p+"static/media/bowie53.5de25c25.png",ke=t.p+"static/media/bowie54.33cdcb70.png",Be=t.p+"static/media/bowie55.f6c15097.png",Ne=t.p+"static/media/bowie56.ec576041.png",ze=t.p+"static/media/bowie57.687af660.png",_e=t.p+"static/media/bowie58.393ad668.png",Se=t.p+"static/media/bowie59.bb148318.png",Ce=t.p+"static/media/bowie60.b188529b.png",De=t.p+"static/media/bowie61.5078d10d.png",Me=t.p+"static/media/bowie62.3bcd5bf2.png",Ze=t.p+"static/media/bowie63.8f6f5291.png",Te=t.p+"static/media/bowie64.7206c7fa.png",Ae=t.p+"static/media/bowie65.6888f2c1.png",Pe=t.p+"static/media/bowie66.bac92ee7.png",Ge=t.p+"static/media/bowie67.0d8b7de8.png",Le=t.p+"static/media/bowie68.cb7983c3.png",Je=t.p+"static/media/zucchero1.b8b9660f.png",Re=t.p+"static/media/zucchero2.08cd8801.png",We=t.p+"static/media/zucchero3.3d6a955c.png",He=t.p+"static/media/zucchero4.16aecb7d.png",Ke=t.p+"static/media/zucchero5.341a0143.png",Ve=t.p+"static/media/zucchero6.3387192a.png",Ee=t.p+"static/media/zucchero7.de20a43f.png",Ie=t.p+"static/media/zucchero8.69812c34.png",Fe=t.p+"static/media/zucchero9.b9e21a91.png",Ye=t.p+"static/media/zucchero10.abb766a6.png",qe=t.p+"static/media/B52_1.94049d74.jpg",Ue=t.p+"static/media/B52_2.058f66d6.jpg",Qe=t.p+"static/media/B52_3.07cdfa41.jpg",Xe=t.p+"static/media/B52_4.77eb7e37.jpg",$e=t.p+"static/media/B52_5.183084a4.jpg",ea=t.p+"static/media/B52_6.0c499244.jpg",aa=t.p+"static/media/B52_7.65ca5c18.jpg",ta=t.p+"static/media/B52_8.e37b7c00.jpg",ia=t.p+"static/media/B52_9.c6bd7251.jpg",ca=t.p+"static/media/B52_10.2c533990.jpg",sa=t.p+"static/media/B52_11.ff8ebcb8.jpg",ra=t.p+"static/media/B52_12.ca8464c1.jpg",na=t.p+"static/media/B52_13.d7e2c679.jpg",la=t.p+"static/media/B52_14.aba887be.jpg",da=t.p+"static/media/B52_15.f5478c4e.jpg",oa=t.p+"static/media/B52_16.5654e17a.jpg",ga=t.p+"static/media/B52_17.d8e18124.jpg",pa=t.p+"static/media/B52_18.030e6385.jpg",ba=t.p+"static/media/B52_20.d3817491.jpg",ma=t.p+"static/media/B52_21.e00fc5d1.jpg",ha=t.p+"static/media/B52_22.c1537d00.jpg",fa=t.p+"static/media/B52_23.840e5517.jpg",ja=t.p+"static/media/B52_24.8f633d0e.jpg",ua=[{id:0,title:"Gwen Stefani",year:"2011",src:v,href:"#"},{id:1,title:"David Bowie",year:"2011",src:k,href:"#"},{id:2,title:"Zucchero",year:"2011",src:B,href:"#"},{id:3,title:"Bruce Springsteen",year:"2011",src:z,href:"#"},{id:4,title:"B52's",year:"2011",src:N,href:"#"},{id:5,title:"Hotei",year:"2011",src:"https://github.com/ma8642/zack-alford-website/blob/main/public/images/galleries/hotei/hotei_main.png?raw=true",href:"#"},{id:6,title:"Other",year:"2011",src:"https://github.com/ma8642/zack-alford-website/blob/main/public/images/galleries/other/other_main.png?raw=true",href:"#"}],xa={0:[{src:_,alt:"foo"},{src:S,alt:"bar"},{src:C,alt:"foo"},{src:D,alt:"bar"},{src:M,alt:"bar"},{src:Z,alt:"bar"},{src:T,alt:"bar"},{src:A,alt:"bar"},{src:P,alt:"bar"},{src:G,alt:"bar"},{src:L,alt:"bar"},{src:J,alt:"foo"},{src:R,alt:"bar"},{src:W,alt:"bar"},{src:H,alt:"bar"},{src:K,alt:"bar"},{src:V,alt:"bar"},{src:E,alt:"bar"},{src:I,alt:"bar"},{src:F,alt:"bar"},{src:Y,alt:"bar"},{src:q,alt:"bar"},{src:U,alt:"bar"},{src:Q,alt:"bar"},{src:X,alt:"bar"},{src:$,alt:"bar"},{src:ee,alt:"bar"},{src:ae,alt:"bar"},{src:te,alt:"bar"},{src:ie,alt:"bar"},{src:ce,alt:"bar"},{src:se,alt:"bar"},{src:re,alt:"bar"},{src:ne,alt:"bar"},{src:le,alt:"bar"},{src:de,alt:"bar"},{src:oe,alt:"bar"},{src:ge,alt:"bar"},{src:pe,alt:"bar"},{src:be,alt:"bar"},{src:me,alt:"bar"},{src:he,alt:"bar"},{src:fe,alt:"bar"},{src:je,alt:"bar"},{src:ue,alt:"bar"},{src:xe,alt:"bar"}],1:[{src:we,alt:"foo"},{src:ye,alt:"foo"},{src:Oe,alt:"foo"},{src:ve,alt:"foo"},{src:ke,alt:"foo"},{src:Be,alt:"foo"},{src:Ne,alt:"foo"},{src:ze,alt:"foo"},{src:_e,alt:"foo"},{src:Se,alt:"foo"},{src:Ce,alt:"foo"},{src:De,alt:"foo"},{src:Me,alt:"foo"},{src:Ze,alt:"foo"},{src:Te,alt:"foo"},{src:Ae,alt:"foo"},{src:Pe,alt:"foo"},{src:Ge,alt:"foo"},{src:Le,alt:"foo"}],2:[{src:Je,alt:"foo"},{src:Re,alt:"foo"},{src:We,alt:"foo"},{src:He,alt:"foo"},{src:Ke,alt:"foo"},{src:Ve,alt:"foo"},{src:Ee,alt:"foo"},{src:Ie,alt:"foo"},{src:Fe,alt:"foo"},{src:Ye,alt:"foo"}],3:[{src:"/images/the-next-day.png",alt:"foo"},{src:"images/lettie.png",alt:"bar"},{src:"images/je-sais.png",alt:"bar"},{src:"images/231-pacific.png",alt:"bar"},{src:"images/bruce-springsteen.png",alt:"bar"},{src:"images/earthling.png",alt:"bar"},{src:"images/funplex.png",alt:"bar"}],4:[{src:qe,alt:"we"},{src:Ue,alt:"are"},{src:Qe,alt:"the"},{src:Xe,alt:"b"},{src:$e,alt:"52s"},{src:ea,alt:"bar"},{src:aa,alt:"bar"},{src:ta,alt:"bar"},{src:ia,alt:"we"},{src:ca,alt:"are"},{src:sa,alt:"the"},{src:ra,alt:"b"},{src:na,alt:"52s"},{src:la,alt:"bar"},{src:da,alt:"bar"},{src:oa,alt:"bar"},{src:ga,alt:"we"},{src:pa,alt:"are"},{src:ba,alt:"the"},{src:ma,alt:"b"},{src:ha,alt:"52s"},{src:fa,alt:"bar"},{src:ja,alt:"bar"}],5:[{src:"/images/the-next-day.png",alt:"foo"},{src:"/images/rumble-doll.png",alt:"bar"},{src:"/images/billy-joel.png",alt:"bar"},{src:"/images/funplex.png",alt:"bar"}],6:[{src:"/images/the-next-day.png",alt:"foo"},{src:"/images/lettie.png",alt:"bar"},{src:"/images/je-sais.png",alt:"bar"},{src:"/images/231-pacific.png",alt:"bar"},{src:"/images/bruce-springsteen.png",alt:"bar"},{src:"/images/earthling.png",alt:"bar"},{src:"/images/rumble-doll.png",alt:"bar"},{src:"/images/billy-joel.png",alt:"bar"},{src:"/images/the-next-day.png",alt:"foo"},{src:"/images/lettie.png",alt:"bar"},{src:"/images/je-sais.png",alt:"bar"},{src:"/images/231-pacific.png",alt:"bar"},{src:"/images/bruce-springsteen.png",alt:"bar"},{src:"/images/earthling.png",alt:"bar"},{src:"/images/rumble-doll.png",alt:"bar"},{src:"/images/billy-joel.png",alt:"bar"},{src:"/images/funplex.png",alt:"bar"}],7:[{src:"/images/the-next-day.png",alt:"foo"},{src:"/images/lettie.png",alt:"bar"},{src:"/images/je-sais.png",alt:"bar"},{src:"/images/231-pacific.png",alt:"bar"},{src:"/images/bruce-springsteen.png",alt:"bar"},{src:"/images/earthling.png",alt:"bar"},{src:"/images/rumble-doll.png",alt:"bar"},{src:"/images/billy-joel.png",alt:"bar"},{src:"/images/the-next-day.png",alt:"foo"},{src:"/images/lettie.png",alt:"bar"},{src:"/images/je-sais.png",alt:"bar"},{src:"/images/231-pacific.png",alt:"bar"},{src:"/images/bruce-springsteen.png",alt:"bar"},{src:"/images/earthling.png",alt:"bar"},{src:"/images/rumble-doll.png",alt:"bar"},{src:"/images/billy-joel.png",alt:"bar"},{src:"/images/funplex.png",alt:"bar"}]},wa=function(e){var a=e.gallery,t=e.handleCloseClick,c=xa[a.id];console.log(a.id);var s=Object(i.useState)(c[0]),r=Object(f.a)(s,2),n=r[0],l=r[1];return Object(d.jsxs)("div",{className:"collection-container",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsxs)("div",{className:"gallery-info flex font-body",children:[Object(d.jsx)("h2",{className:"mr-2",children:a.title.toUpperCase()})," ",Object(d.jsx)("h3",{children:a.year})]}),Object(d.jsx)(O.a,{className:"flex justify-end mb-2 text-xl",onClick:t})]}),Object(d.jsxs)("div",{className:"flex flex-col justify-center content-center",children:[Object(d.jsx)("div",{className:"focused-image flex justify-center",children:Object(d.jsx)("img",{src:n.src,height:"100vh",alt:n.alt})}),Object(d.jsx)("div",{className:"thumbnail-row grid gap-1 grid-cols-6 grid-rows-1 overflow-x-auto",children:c.map((function(e,a){return Object(d.jsx)("div",{onClick:function(){return l(e)},className:"cursor-pointer",children:Object(d.jsx)("img",{src:e.src,height:"70px",width:"70px",alt:e.alt},a)},a)}))})]})]})},ya=function(){var e=Object(i.useState)(null),a=Object(f.a)(e,2),t=a[0],c=a[1],s="bg-green-300 bg-opacity-90",r="lg:bg-transparent",n=ua.map((function(e){return Object(d.jsxs)("div",{className:"relative",onClick:function(){return c(e)},children:[Object(d.jsxs)("div",{className:"absolute inset-0 z-10 flex flex-col justify-between ".concat("lg:hover:bg-green-300 lg:hover:bg-opacity-90 lg:hover:text-black"," duration-300 cursor-pointer"),children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"tracking-wider text-3xl font-black -mt-2 ".concat(s," ").concat(r),children:"Testing"}),Object(d.jsx)("p",{className:"mx-auto tracking-wider ".concat(s," ").concat(r),children:e.year})]}),Object(d.jsx)("div",{className:"p-6"})]}),Object(d.jsx)("a",{href:e.href,className:"relative",children:Object(d.jsx)("div",{className:"h-48 flex flex-wrap content-center",children:Object(d.jsx)("img",{src:e.src,alt:"".concat(e.title," gallery"),maxWidth:"10%"},e.id)})})]})}));return t?Object(d.jsx)(wa,{gallery:t,handleCloseClick:function(){return c(null)}}):Object(d.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:n})},Oa=t(36),va=t.p+"static/media/gear-bg.ab51926b.png",ka=function(){var e=Oa.map((function(e){return Object(d.jsx)("div",{className:"transform hover:scale-105",children:Object(d.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:e.src,alt:e.alt,maxWidth:"100%"},e.id)})})}));return Object(d.jsxs)("div",{className:"grid grid-cols-gear",children:[Object(d.jsx)("div",{"data-testid":"gear-photo",children:Object(d.jsx)("img",{src:va,alt:"Zack playing drums in dim, red lighting.",maxWidth:"30%"})}),Object(d.jsx)("div",{className:"flex flex-col justify-center",children:e})]})},Ba=t(71),Na=t(72),za=t(73),_a=function(){return Object(d.jsx)("a",{href:"mailto:".concat("zacharyalford","@").concat("example.com"),className:"hover:text-white",children:"".concat("zacharyalford","@").concat("example.com")})},Sa="p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105",Ca=function(e){var a=Object(i.useState)(!1),t=Object(f.a)(a,2),c=t[0],s=t[1];return Object(d.jsxs)("div",{className:"flex flex-col items-center text-3xl h-full",children:[Object(d.jsx)("a",{href:"https://www.instagram.com/zacharyalfordofficial/?hl=en",target:"_blank",rel:"noreferrer",className:"pb-8",children:Object(d.jsx)("div",{className:Sa,children:Object(d.jsx)(Ba.a,{alt:"instagram",onClick:function(){return s(!1)}})})}),Object(d.jsx)("a",{href:"https://www.facebook.com/zachary.alford.3",target:"_blank",rel:"noreferrer",className:"pb-8",children:Object(d.jsx)("div",{className:Sa,children:Object(d.jsx)(Na.a,{alt:"facebook",onClick:function(){return s(!1)}})})}),Object(d.jsx)("div",{className:"flex items-center pb-8",children:Object(d.jsx)(w,{onClick:function(){return s(!c)},children:c?Object(d.jsx)(_a,{}):Object(d.jsx)(za.a,{alt:"email"})})})]})},Da=function(){var e=Object(n.a)().t;return Object(d.jsxs)("div",{className:"App px-12 bg-black text-white",children:[Object(d.jsx)(o,{pages:["main","bio","discography","gallery","gear","connect"]}),Object(d.jsxs)("main",{id:"main-container",className:"bg-black fixed top-20 left-0 bottom-0 overflow-y-scroll p-5",children:[Object(d.jsx)(b,{id:"main",siteTitle:"Zachary Alford"}),Object(d.jsx)(m,{id:"bio",title:e("bio"),children:Object(d.jsx)(h,{})}),Object(d.jsx)(m,{id:"discography",title:e("discography"),expandable:!0,children:Object(d.jsx)(y,{})}),Object(d.jsx)(m,{id:"gallery",title:e("gallery"),children:Object(d.jsx)(ya,{})}),Object(d.jsx)(m,{id:"gear",title:e("gear"),children:Object(d.jsx)(ka,{})}),Object(d.jsx)(m,{id:"connect",title:e("connect"),children:Object(d.jsx)(Ca,{})}),Object(d.jsx)("p",{children:e("zack-alford-copywrite")}),Object(d.jsx)("small",{children:e("marley-alford-site")})]})]})},Ma=t(22),Za=t(9);Ma.a.use(Za.e).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{bio:"Bio","biography-para-1":'Born in Manhattan, NYC, Zachary Alford began his musical journey being influenced by musician friends of his older siblings.  "My neighborhood was full of drummers."  Peter "Phoenix" Rivera, Sterling Campbell, Ben Perowsky and Poogie Bell (Zack\'s 1st instructor) all lived within a 10 block radius. At age 15 Zack met Charley Drayton at the 7th Avenue South night club and that would galvanize his commitment and direction as a drummer.',"biography-para-2":"Primarily self taught, Zachary played in night clubs throughout his high school years, interacting with scores of New York musicians at the Peppermint Lounge, Danceteria, The Ritz, CBGB's, A7, The Pyramid Club, and the infamous Music Building on 38th st and 8th ave, rubbing shoulders with such future stars as Madonna, Vernon Ried and Jean Michel Basquiat.  This provided him with a rich and diverse atmosphere for playing different styles and gaining professional experience. He also managed to find the time to study with master drummer Kenwood Denard and Tommy Campbell.","biography-para-3":"In 1987 he went to Switzerland with Melvin Gibbs and Vernon Ried and again in 1988 with Kelvynator to play on jazz/funk festival tours. 1989 saw him matched up with the B52's and in the '90s such names as Bruce Springsteen('92-'94) and David Bowie ('95-'98). Zachary 's recording credits include other luminaries such as Billy Joel, Suzanna Hoffs, The Manic Street Preachers, Jeffery Gains, David Torn, Patti Scialfa and international superstars Zucchero Fornaciari, Khaled and Tomoyasu Hotei.",discography:"Discography",gallery:"Gallery","view-album":"View",gear:"Gear",connect:"Connect","zack-alford-copywrite":"(c) Zachary Alford 2021","marley-alford-site":"Site by Marley Alford"}}}});Ma.a;r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Da,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.4ce853f7.chunk.js.map