(this["webpackJsonpfind-me"]=this["webpackJsonpfind-me"]||[]).push([[0],{172:function(e,t,n){},256:function(e,t){},257:function(e,t){},258:function(e,t){},262:function(e,t,n){"use strict";n.r(t);var c,a,r,i,s=n(0),l=n.n(s),o=n(26),d=n.n(o),u=(n(172),n(24)),j=n(62),b=n(63),m=n(8),f=b.a.iframe(c||(c=Object(j.a)(["\n    max-width: 100%;\n    width: 560px;\n    height: 315px;\n\n    @media (max-width: 640px) {\n        height: 200px;\n    }\n"]))),x=function(e){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsxs)("div",{className:"container mx-auto px-6 sm:px-12 flex flex-col-reverse lg:flex-row items-center",children:[Object(m.jsxs)("div",{className:"sm:w-2/5 flex flex-col items-start mt-16 lg:mt-0 mb-5 sm:mb-0",children:[Object(m.jsxs)("h1",{className:"text-4xl lg:text-6xl leading-none mb-4 mx-auto lg:ml-0",children:[Object(m.jsx)("strong",{className:"font-black",children:"Find"})," Me"]}),Object(m.jsx)("p",{className:"lg:text-lg mb-4 sm:mb-12 text-center lg:text-left text-gray-400 font-semibold mx-auto lg:ml-0",children:"Server less face recognition app"}),Object(m.jsx)("a",{href:"/#",onClick:function(t){t.preventDefault(),e.setDisplayLanding(!1)},className:"font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-700 py-3 px-10 rounded-full mx-auto lg:ml-0",children:"Get Started"})]}),Object(m.jsx)("div",{className:"lg:flex lg:h-screen mx-auto my-auto mt-16 lg:mt-0",children:Object(m.jsx)("div",{className:"flex justify-center items-center",children:Object(m.jsx)("div",{className:"bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg",children:Object(m.jsx)(f,{src:"https://www.youtube-nocookie.com/embed/j1D9GyQrPa4?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1",frameborder:"0",allowFullScreen:!0})})})})]})})},h=n(98),p=n(36),g=n.n(p),O=n(51),v=n(276),w=n(265),y=n(48),F=n(267),N=function(e){var t=e.children,n=e.className,c=void 0===n?"":n,a=e.loading,r=void 0!==a&&a,i=e.noPadding,s=void 0!==i&&i;return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(F.a,{bordered:!1,bodyStyle:{padding:s?0:null},hoverable:!0,className:"".concat(c," z-shadow"),style:{cursor:"default"},loading:r,children:t})})},k=n(137),C=n(81),S=n(46),L=n(275),B=n(269),z=n(271),M=n(268),P=n(272),T=n(164),A=n(163),D=n(160),R={showNotification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];A.a[t]({message:n||t[0].toUpperCase()+t.slice(1),description:e,placement:"bottomRight",duration:c?0:4.5})},showTinyNotification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";D.b[t](e)},textEllipsis:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return null==t&&(t=100),e.length>t?e.substring(0,t-n.length)+n:e},randomHexColor:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},getAppName:function(){return"Find Me"},urlToBlob:function(){var e=Object(O.a)(g.a.mark((function e(t){var n,c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return c=e.sent,a=new File([c],"image.jpg",{type:c.type}),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=Object(b.a)(L.a)(a||(a=Object(j.a)(["\n    .ant-drawer-content-wrapper {\n        width: 520px !important;\n        @media (max-width: 768px) {\n            max-width: calc(100vw - 16px) !important;\n        }\n    }\n"]))),E=Object(m.jsxs)("div",{children:[Object(m.jsx)(T.a,{}),Object(m.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),I=function(e){var t=Object(s.useState)(!1),n=Object(u.a)(t,2),c=n[0],a=n[1],r=B.a.useForm(),i=Object(u.a)(r,1)[0],l=Object(s.useState)("undefined"!==typeof e.loading&&e.loading),o=Object(u.a)(l,2),d=o[0],j=o[1],b=Object(s.useState)("undefined"!==typeof e.componentLoading&&e.componentLoading),f=Object(u.a)(b,2),x=f[0],p=f[1],v=Object(s.useState)([]),F=Object(u.a)(v,2),N=F[0],k=F[1],C=Object(s.useState)(""),S=Object(u.a)(C,2),L=S[0],T=S[1],A=Object(s.useState)(!1),D=Object(u.a)(A,2),I=D[0],V=D[1];Object(s.useEffect)((function(){setTimeout((function(){a(e.visible)}),100)}),[e.visible]),Object(s.useEffect)((function(){"undefined"!==typeof e.loading&&j(e.loading)}),[e.loading]),Object(s.useEffect)((function(){"undefined"!==typeof e.componentLoading&&p(e.componentLoading)}),[e.componentLoading]);var H=function(){a(!1),setTimeout((function(){e.handleCancel()}),400)},G=function(){var e=Object(O.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),t.url||t.preview){e.next=5;break}return e.next=4,J(t.originFileObj);case 4:t.preview=e.sent;case 5:T(t.url||t.preview),V(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return n(e)}}))};return Object(m.jsx)(U,{title:e.title,onClose:H,visible:c,destroyOnClose:!0,maskClosable:!1,forceRender:!0,footer:Object(m.jsxs)("div",{style:{textAlign:"right"},children:[Object(m.jsx)(y.a,{disabled:x,onClick:H,style:{marginRight:8},children:"Cancel"}),Object(m.jsx)(y.a,{disabled:x,onClick:function(){i.validateFields().then(function(){var t=Object(O.a)(g.a.mark((function t(n){var c,a,r,i,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=[],a=Object(h.a)(n.images),t.prev=2,a.s();case 4:if((r=a.n()).done){t.next=17;break}if(i=r.value,s=null,i.url||i.preview){t.next=11;break}s=i.originFileObj,t.next=14;break;case 11:return t.next=13,R.urlToBlob(i.url||i.preview);case 13:s=t.sent;case 14:c.push(s);case 15:t.next=4;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),a.e(t.t0);case 22:return t.prev=22,a.f(),t.finish(22);case 25:e.submitCallback({name:n.name,images:c});case 26:case"end":return t.stop()}}),t,null,[[2,19,22,25]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("Validate Failed:",e)}))},type:"primary",loading:d,children:"Save"})]}),children:Object(m.jsxs)(w.a,{spinning:x,size:"large",delay:500,children:[Object(m.jsxs)(B.a,{preserve:!1,form:i,layout:"vertical",name:"face-form",children:[Object(m.jsx)(B.a.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please enter the face's name"}],children:Object(m.jsx)(z.a,{placeholder:"Enter the face's name"})}),Object(m.jsx)(B.a.Item,{name:"images",label:"Images",getValueFromEvent:function(e){return Array.isArray(e)?e:e&&e.fileList},rules:[{required:!0,message:"Please upload minimum 1 image of the face"}],children:Object(m.jsx)(M.a,{accept:["image/png","image/jpeg","image/jpg"],listType:"picture-card",fileList:N,beforeUpload:function(){return!1},onPreview:G,onChange:function(e){k(e.fileList.filter((function(e){return function(e){if(!e.url&&!e.preview){var t="image/jpeg"===e.type||"image/jpg"===e.type||"image/png"===e.type;t||R.showTinyNotification("You can only upload image file!","error");var n=e.size/1024/1024<5;return n||R.showTinyNotification("Image must smaller than 5MB!","error"),t&&n}return!0}(e)})))},children:N.length>=8?null:E})})]}),Object(m.jsx)(P.a,{visible:I,title:"Preview",footer:null,centered:!0,onCancel:function(){return V(!1)},children:Object(m.jsx)("img",{alt:"example",style:{width:"100%"},src:L})})]})})},V=n(165),H=function(e){var t=Object(s.useState)(!1),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(m.jsxs)("div",{className:"rounded sm:w-full py-16 text-center opacity-50 z-hover cursor-pointer my-6",onClick:function(){return a(!0)},children:[Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-user-plus  mx-auto",children:[Object(m.jsx)("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),Object(m.jsx)("circle",{cx:"8.5",cy:"7",r:"4"}),Object(m.jsx)("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),Object(m.jsx)("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),Object(m.jsxs)("div",{className:"py-4",children:["Add ",Object(m.jsx)("span",{className:"font-medium",children:"Face"})," to Search"]})]});return Object(m.jsxs)(l.a.Fragment,{children:[Object(m.jsxs)(C.a,{gutter:24,align:"middle",style:{margin:"24px 12px 0 12px"},children:[e.faces.map((function(t,n){return Object(m.jsx)(S.a,{xl:6,lg:6,md:12,sm:24,xs:24,style:{marginBottom:24},children:Object(m.jsxs)("div",{className:"bg-white px-4 py-6 rounded-lg shadow-lg",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:URL.createObjectURL(t.images[0]),alt:"thumbnail",className:"mx-auto h-40 rounded-md object-cover"})}),Object(m.jsx)("div",{className:"mt-2 text-center",children:Object(m.jsx)("h5",{className:"font-bold font-mono text-gray-400",children:t.name})}),Object(m.jsx)("div",{className:"flex justify-center mt-2",children:Object(m.jsx)(y.a,{danger:!0,type:"primary",shape:"circle",icon:Object(m.jsx)(V.a,{}),onClick:function(){return function(t){var n=Object(k.a)(e.faces),c=n.findIndex((function(e){return e===t}));-1!==c&&n.splice(c,1),e.setFaces(n)}(t)}})})]})},n)})),Object(m.jsx)(S.a,{xl:6,lg:6,md:12,sm:24,xs:24,style:{marginBottom:24},children:r})]}),c&&Object(m.jsx)(I,{title:"Add Face",visible:c,handleCancel:function(){a(!1)},submitCallback:function(t){var n=Object(k.a)(e.faces);n.push(t),e.setFaces(n),a(!1)}})]})},G=n(34),J=Object(m.jsxs)("div",{children:[Object(m.jsx)(T.a,{}),Object(m.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),q=function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(!1),i=Object(u.a)(r,2),o=i[0],d=i[1],j=function(){var e=Object(O.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),t.url||t.preview){e.next=5;break}return e.next=4,b(t.originFileObj);case 4:t.preview=e.sent;case 5:a(t.url||t.preview),d(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return n(e)}}))};return Object(m.jsxs)(l.a.Fragment,{children:[Object(m.jsx)("div",{style:{margin:24},children:Object(m.jsx)(M.a,{accept:["image/png","image/jpeg","image/jpg"],listType:"picture-card",fileList:e.image?[e.image]:[],beforeUpload:function(){return!1},onPreview:j,onChange:function(t){var n=t.fileList.filter((function(e){return function(e){if(!e.url&&!e.preview){var t="image/jpeg"===e.type||"image/jpg"===e.type||"image/png"===e.type;t||R.showTinyNotification("You can only upload image file!","error");var n=e.size/1024/1024<5;return n||R.showTinyNotification("Image must smaller than 5MB!","error"),t&&n}return!0}(e)}));e.setImage(n.length?n[0]:null)},children:e.image?null:J})}),Object(m.jsx)(P.a,{visible:o,title:"Preview",footer:null,centered:!0,onCancel:function(){return d(!1)},children:Object(m.jsx)("img",{alt:"example",style:{width:"100%"},src:c})})]})},Y=n(270),_=function(e){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(C.a,{style:{padding:12},children:Object(m.jsx)(S.a,{span:24,children:e.result?Object(m.jsxs)("div",{children:[Object(m.jsx)(Y.a,{src:"undefined"!==typeof e.result.image?e.result.image:null,preview:!1,placeholder:!0,className:"rounded-lg z-shadow",style:{transition:"0.3s ease"},alt:"result"}),Object(m.jsx)("img",{alt:"canvas",className:"absolute top-0 left-0",src:"undefined"!==typeof e.result.canvas?e.result.canvas.toDataURL():null})]}):Object(m.jsx)("div",{className:"my-16 text-center",children:Object(m.jsx)(w.a,{size:"large"})})})})})},Q=n(159),W=n.n(Q),K=v.a.Step,X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;return new Promise((function(c){W.a.imageFileResizer(e,t,n,"JPEG",100,0,(function(e){c(e)}),"blob")}))},Z=b.a.div(r||(r=Object(j.a)(["\n    background-color: #fafafa;\n    border: 1px dashed #e9e9e9;\n    border-radius: 2px;\n"]))),$=b.a.div(i||(i=Object(j.a)(["\n    margin-top: 24px;\n    float: right;\n"]))),ee=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),r=Object(u.a)(a,2),i=r[0],l=r[1],o=Object(s.useState)(null),d=Object(u.a)(o,2),j=d[0],b=d[1],f=Object(s.useState)(0),x=Object(u.a)(f,2),p=x[0],F=x[1],k=Object(s.useState)(!1),C=Object(u.a)(k,2),S=C[0],L=C[1],B=Object(s.useState)(!1),z=Object(u.a)(B,2),M=z[0],P=z[1],T=Object(s.useState)(!1),A=Object(u.a)(T,2),D=A[0],U=A[1],E=Object(s.useState)(null),I=Object(u.a)(E,2),V=I[0],J=I[1],Y=[{title:"Add Faces",description:Object(m.jsx)("span",{className:"text-gray-400",children:"Provide faces to be searched. All images will be deleted after processing."}),content:Object(m.jsx)(H,{faces:n,setFaces:c})},{title:"Search Faces",description:Object(m.jsx)("span",{className:"text-gray-400",children:"Search the faces in an image."}),content:Object(m.jsx)(q,{image:i,setImage:l})},{title:"Result",description:"",content:Object(m.jsx)(_,{result:j})}];Object(s.useEffect)((function(){Promise.all([G.i.faceRecognitionNet.loadFromUri("".concat("/find-me","/assets/models")),G.i.faceLandmark68Net.loadFromUri("".concat("/find-me","/assets/models")),G.i.ssdMobilenetv1.loadFromUri("".concat("/find-me","/assets/models"))]).then((function(){L(!0)}))}),[]),Object(s.useEffect)((function(){0===p&&J(null),1===p&&W(),2===p&&(b(null),Q())}),[p]);var Q=function(){var e=Object(O.a)(g.a.mark((function e(){var t,n,c,a,r,s,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!V||!i){e.next=32;break}if(P(!0),t=null,i.url||i.preview){e.next=7;break}t=i.originFileObj,e.next=10;break;case 7:return e.next=9,R.urlToBlob(i.url||i.preview);case 9:t=e.sent;case 10:return e.next=12,G.c(t);case 12:if(!((n=e.sent).width>1e3||n.height>1e3)){e.next=20;break}return e.next=16,X(t,1e3,1e3);case 16:return t=e.sent,e.next=19,G.c(t);case 19:n=e.sent;case 20:return c=new G.a(V,.6),a=G.d(n),r={width:n.width,height:n.height},G.h(a,r),e.next=26,G.e(n).withFaceLandmarks().withFaceDescriptors();case 26:s=e.sent,l=G.j(s,r),l.map((function(e){return c.findBestMatch(e.descriptor)})).forEach((function(e,t){var n=l[t].detection.box;new G.g.DrawBox(n,{label:e.toString(),boxColor:"#096dd9"}).draw(a)})),b({image:URL.createObjectURL(t),canvas:a}),P(!1);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){U(!0),Promise.all(n.map((function(e){var t,n=[],c=Object(h.a)(e.images);try{for(c.s();!(t=c.n()).done;){var a=t.value;try{G.c(a).then((function(e){G.f(e).withFaceLandmarks().withFaceDescriptor().then((function(e){e&&n.push(e.descriptor)}))}))}catch(r){console.error(r)}}}catch(i){c.e(i)}finally{c.f()}return new G.b(e.name,n)}))).then((function(e){U(!1),J(e)}))};return Object(m.jsx)(N,{className:"m-10",children:Object(m.jsxs)(w.a,{spinning:D,children:[Object(m.jsx)(v.a,{current:p,direction:"vertical",children:Y.map((function(e){return Object(m.jsx)(K,{title:e.title,description:e.description},e.title)}))}),Object(m.jsx)(Z,{children:Y[p].content}),Object(m.jsxs)($,{children:[p>0&&Object(m.jsx)(y.a,{style:{margin:"0 8px"},onClick:function(){F(p-1)},loading:M,children:"Previous"}),p<Y.length-1&&Object(m.jsx)(y.a,{type:"primary",onClick:function(){F(p+1)},disabled:!(0!==p||S&&n.length)||!(1!==p||V&&i),loading:M,children:"Next"}),p===Y.length-1&&Object(m.jsx)(y.a,{type:"primary",onClick:function(){c([]),l(null),b(null),F(0),J(null)},loading:M,children:"Done"})]})]})})},te=n(278),ne=n(279),ce=n(273),ae=n(274),re=n(266),ie=n(277),se=function(e){var t=e.children,n=e.state;return Object(m.jsx)(re.a,{mode:"out-in",children:Object(m.jsx)(ie.a,{addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:"fade",children:t},n?"if":"else")})},le=Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 512 512",version:"1.1",viewBox:"0 0 512 512",xmlSpace:"preserve",className:"w-10 h-10 text-purple-600",children:[Object(m.jsx)("path",{fill:"#B9BBC1",d:"M192 92c-13.531 0-25.664 8.574-30.172 21.332a7.994 7.994 0 004.875 10.211c2.733.982 5.594.241 7.695-1.501L208 162.393V172c0 4.418 3.578 8 8 8s8-3.582 8-8v-48c0-17.645-14.352-32-32-32z"}),Object(m.jsx)("path",{fill:"#8B8996",d:"M168 108c-14.664 0-28.523 5.629-39.328 16.176L26.102 236.152l11.797 10.805 2.771-3.027L208 289.806V292c0 4.418 3.578 8 8 8s8-3.582 8-8V164c0-30.879-25.125-56-56-56z"}),Object(m.jsx)("path",{fill:"#B9BBC1",d:"M320 92c13.531 0 25.664 8.574 30.172 21.332a7.994 7.994 0 01-4.875 10.211c-2.733.982-5.594.241-7.695-1.501L304 162.393V172c0 4.418-3.578 8-8 8s-8-3.582-8-8v-48c0-17.645 14.351-32 32-32z"}),Object(m.jsx)("path",{fill:"#8B8996",d:"M344 108c14.664 0 28.523 5.629 39.328 16.176l102.57 111.977-11.797 10.805-2.771-3.027L304 289.806V292c0 4.418-3.578 8-8 8s-8-3.582-8-8V164c0-30.879 25.125-56 56-56z"}),Object(m.jsx)("circle",{cx:"112",cy:"308",r:"88",fill:"#53DCFF"}),Object(m.jsx)("path",{fill:"#5C546A",d:"M112 196C50.242 196 0 246.242 0 308s50.242 112 112 112 112-50.242 112-112-50.242-112-112-112zm0 192c-44.111 0-80-35.889-80-80s35.889-80 80-80 80 35.889 80 80-35.889 80-80 80z"}),Object(m.jsx)("path",{fill:"#5C546A",d:"M192 204h128l1.23-.017C305.661 219.23 296 240.487 296 264v28h-80v-28c0-23.513-9.661-44.77-25.23-60.017"}),Object(m.jsx)("circle",{cx:"128",cy:"292",r:"32",fill:"#FFF"}),Object(m.jsx)("circle",{cx:"400",cy:"308",r:"88",fill:"#53DCFF"}),Object(m.jsx)("path",{fill:"#5C546A",d:"M400 196c-61.758 0-112 50.242-112 112s50.242 112 112 112 112-50.242 112-112-50.242-112-112-112zm0 192c-44.111 0-80-35.889-80-80s35.889-80 80-80 80 35.889 80 80-35.889 80-80 80z"}),Object(m.jsx)("circle",{cx:"416",cy:"292",r:"32",fill:"#FFF"}),Object(m.jsx)("path",{fill:"#8B8996",d:"M192 188H320V204H192z"})]}),oe=function(){var e=Object(s.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(ce.a,{children:Object(m.jsx)("div",{className:"bg-indigo-50 min-h-screen",children:Object(m.jsxs)("main",{children:[Object(m.jsx)("nav",{className:"bg-white shadow",role:"navigation",children:Object(m.jsxs)("div",{className:"container mx-auto p-3 flex items-center flex-no-wrap",children:[Object(m.jsx)("div",{className:"mr-8",children:Object(m.jsx)("a",{href:"/#",rel:"home",onClick:function(e){e.preventDefault(),c(!0)},children:le})}),Object(m.jsx)("div",{className:"flex-grow flex items-center",children:Object(m.jsxs)("ul",{className:"flex ml-auto",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"block px-4 py-1 p-2 lg:px-4 text-purple-600",href:"http://arifszn.github.io",title:"Author",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(ae.a,{className:"bg-blue-300",icon:Object(m.jsx)(te.a,{}),alt:"Author"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"block px-4 py-1 p-2 lg:px-4 text-purple-600",href:"https://github.com/arifszn/find-me",title:"Source",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(ae.a,{className:"bg-blue-300",icon:Object(m.jsx)(ne.a,{}),alt:"Source"})})})]})})]})}),Object(m.jsx)("div",{children:Object(m.jsx)(se,{state:n,children:n?Object(m.jsx)(x,{setDisplayLanding:c},"if"):Object(m.jsx)(ee,{},"else")})})]})})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,280)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};d.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(oe,{})}),document.getElementById("root")),de()}},[[262,1,2]]]);
//# sourceMappingURL=main.e30a638b.chunk.js.map