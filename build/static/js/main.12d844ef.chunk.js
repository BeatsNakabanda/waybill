(this.webpackJsonpwaybill=this.webpackJsonpwaybill||[]).push([[0],{227:function(e,t,i){},228:function(e,t,i){},237:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),n=i(23),c=i.n(n),o=(i(227),i(228),i(8)),l=i(339),s=i(255),d=i(32),p=i(352),x=i(340),b=i(358),j=i(357),h=i(359),u=i(348),f=i(133),g=i(349),m=i(341),O=i(184),y=i.n(O),S=i(183),v=i.n(S),w=i.p+"static/media/baby.ee96a61f.jpg",N=i(174),k=i(350),C=i(347),F=i(353),R=i(89),D=i.n(R),z=i(2),H=Object(s.a)({root:{display:"flex",backgroundColor:"#FFF",marginRight:"10px",marginTop:"20px",cursor:"pointer","& .MuiCardContent-root:last-child":{padding:"0px"},"& .makeStyles-media-22":{padding:"20px"}},mainContent:{paddingRight:"30px",display:"flex",flexDirection:"column",alignSelf:"center"},media:{padding:"30px",alignSelf:"center"},icon1:{color:"blue"},icon2:{color:"#e68a00"},icon3:{color:"#006622"},icon4:{color:"#b30000"}}),L=[{id:1,title:"Total Shipments",total:456},{id:2,title:"Being Delivered",total:300},{id:3,title:"Delivered",total:100},{id:4,title:"Failed",total:50}],T=function(){var e=H(),t=function(t){switch(t){case 1:return Object(z.jsx)(C.a,{sx:{bgcolor:"#e6f0ff"},"aria-label":"recipe",children:Object(z.jsx)(D.a,{className:e.icon1})});case 2:return Object(z.jsx)(C.a,{sx:{bgcolor:"#fff5e6"},"aria-label":"recipe",children:Object(z.jsx)(D.a,{className:e.icon2})});case 3:return Object(z.jsx)(C.a,{sx:{bgcolor:"#ecf8f2"},"aria-label":"recipe",children:Object(z.jsx)(D.a,{className:e.icon3})});case 4:return Object(z.jsx)(C.a,{sx:{bgcolor:"#ffe6e6"},"aria-label":"recipe",children:Object(z.jsx)(D.a,{className:e.icon4})});default:return Object(z.jsx)(C.a,{sx:{bgcolor:"#cce0ff"},"aria-label":"recipe",children:Object(z.jsx)(D.a,{className:e.icon1})})}};return Object(z.jsx)(z.Fragment,{children:L.map((function(i){return Object(z.jsxs)(k.a,{className:e.root,sx:{width:"22%",borderRadius:"10px"},elevation:0,children:[Object(z.jsx)(p.a,{className:e.media,children:t(i.id)}),Object(z.jsx)(p.a,{className:e.mainContent,children:Object(z.jsxs)(F.a,{children:[Object(z.jsx)(f.a,{variant:"subtitle2",children:i.title}),Object(z.jsx)(f.a,{variant:"h4",children:i.total})]})})]})}))})},M=i(354),I=i(342),W=i(356),P=Object(s.a)({root:{borderRadius:"5px",minWidth:120,backgroundColor:"#fff",alignSelf:"center"}}),E=function(){var e=P(),t=Object(a.useState)(""),i=Object(o.a)(t,2),r=i[0],n=i[1];return Object(z.jsx)(M.a,{sx:{ml:3,p:1},variant:"standard",className:e.root,children:Object(z.jsxs)(I.a,{value:r,onChange:function(e){n(e.target.value)},displayEmpty:!0,disableUnderline:!0,inputProps:{"aria-label":"Without label"},children:[Object(z.jsx)(W.a,{value:"",children:"None"}),Object(z.jsx)(W.a,{value:10,children:"This week"}),Object(z.jsx)(W.a,{value:20,children:"Last week"}),Object(z.jsx)(W.a,{value:30,children:"Next week"}),Object(z.jsx)(W.a,{value:40,children:"This month"}),Object(z.jsx)(W.a,{value:50,children:"Last month"}),Object(z.jsx)(W.a,{value:260,children:"Next month"})]})})},B=function(e){var t=Object(a.useState)(null),i=Object(o.a)(t,2),r=i[0],n=i[1],c=Object(a.useState)(!0),l=Object(o.a)(c,2),s=l[0],d=l[1],p=Object(a.useState)(null),x=Object(o.a)(p,2),b=x[0],j=x[1];return Object(a.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){return e.json()})).then((function(e){n(e),d(!1),j(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(d(!1),j(e.message))})),function(){return t.abort()}}),[]),{shipmentData:r,isLoading:s,isError:b}},G=i(173),A=i.n(G),J=Object(s.a)({cards:{display:"flex",flexDirection:"row",justifyContent:"space-between"},title:{color:"#293370",marginTop:"20px"},section:{display:"flex",marginTop:"20px"},dataGrid:{"& .MuiDataGrid-columnHeaderWrapper":{"& .MuiDataGrid-iconSeparator":{height:"0px"}}}}),U=function(e){switch(e){case"Delivered":return Object(z.jsx)("p",{style:{backgroundColor:"#ecf8f2",color:"#006622",borderRadius:"10px",lineHeight:"30px",paddingLeft:"5px",paddingRight:"5px"},children:"Delivered"});case"In progress":return Object(z.jsx)("p",{style:{backgroundColor:"#fff5e6",color:"#e68a00",borderRadius:"10px",lineHeight:"30px",paddingLeft:"5px",paddingRight:"5px"},children:"In progress"});case"Failed":return Object(z.jsx)("p",{style:{backgroundColor:"#ffe6e6",color:"#b30000",borderRadius:"10px",lineHeight:"30px",paddingLeft:"5px",paddingRight:"5px"},children:"Failed"});default:return Object(z.jsx)("p",{style:{backgroundColor:"#fff5e6",color:"orange",borderRadius:"10px",lineHeight:"30px",paddingLeft:"5px",paddingRight:"5px"},children:"Pending"})}},V=[{field:"trackingId",headerName:"Tracking ID",width:150,editable:!1,sortable:!1},{field:"date",headerName:"Date",width:110,editable:!1,sortable:!1},{field:"sender",headerName:"Sender",width:130,editable:!1,sortable:!1},{field:"origin",headerName:"Origin",width:190,editable:!1,sortable:!1},{field:"destination",headerName:"Destination",sortable:!1,width:190},{field:"driver",headerName:"Driver",sortable:!1,width:160},{field:"status",headerName:"Status",sortable:!1,width:150,renderCell:function(e){return Object(z.jsx)(z.Fragment,{children:U(e.getValue(e.id,"status"))})}},{field:"action",headerName:"Action",sortable:!1,width:100,renderCell:function(){return Object(z.jsx)(A.a,{sx:{color:"#d9d9d9",cursor:"pointer"}})}}],q=function(){var e=J(),t=B("/shipments"),i=t.shipmentData;t.isLoading,t.isError;return Object(z.jsxs)("div",{children:[Object(z.jsx)(j.a,{}),Object(z.jsxs)(p.a,{className:e.section,children:[Object(z.jsx)("h2",{className:e.title,children:"Overview"}),Object(z.jsx)(E,{})]}),Object(z.jsx)(p.a,{className:e.cards,children:Object(z.jsx)(T,{})}),Object(z.jsxs)(p.a,{className:e.section,children:[Object(z.jsx)("h2",{className:e.title,children:"Recent Shipments"}),Object(z.jsx)(E,{})]}),Object(z.jsx)("div",{style:{height:400,width:"100%",paddingTop:"10px"},children:i&&Object(z.jsx)(N.a,{className:e.dataGrid,style:{backgroundColor:"#fff",height:500,border:0,borderRadius:"10px",padding:"30px",fontStyle:"bold"},rowHeight:70,rows:i,columns:V,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,disableColumnMenu:!0})})]})},K=i(355),Q=i(345),X=i(337),Y=i(338),Z=i(336),$=i(176),_=i.n($),ee=i(177),te=i.n(ee),ie=i(178),ae=i.n(ie),re=i(179),ne=i.n(re),ce=i(180),oe=i.n(ce),le=i(144),se=i.n(le),de=i(181),pe=i.n(de),xe=i(182),be=i.n(xe),je=Object(s.a)({header:{fontSize:"30px",fontStyle:"italic"},icon:{minWidth:"10%"}}),he=function(){var e=je(),t=function(e){switch(e){case 0:return Object(z.jsx)(_.a,{});case 1:return Object(z.jsx)(te.a,{});case 2:return Object(z.jsx)(ae.a,{});case 3:return Object(z.jsx)(ne.a,{});case 4:return Object(z.jsx)(oe.a,{});case 5:default:return Object(z.jsx)(se.a,{})}};return Object(z.jsxs)("div",{children:[Object(z.jsx)(j.a,{children:Object(z.jsx)("h1",{className:e.header,children:"waybill"})}),Object(z.jsx)(K.a,{children:["Overview","Shipments","Tracking","Drivers","Statistics","Wallet"].map((function(i,a){return Object(z.jsxs)(Q.a,{button:!0,children:[Object(z.jsx)(Z.a,{className:e.icon,children:t(a)}),Object(z.jsx)(X.a,{primary:i})]},i)}))}),Object(z.jsx)(Y.a,{}),Object(z.jsx)(K.a,{children:["Help & Support","Logout"].map((function(e,t){return Object(z.jsxs)(Q.a,{button:!0,children:[Object(z.jsx)(Z.a,{children:t%2===0?Object(z.jsx)(pe.a,{}):Object(z.jsx)(be.a,{})}),Object(z.jsx)(X.a,{primary:e})]},e)}))})]})},ue=Object(l.a)("div")((function(){return{position:"relative",borderRadius:"5px",marginTop:"5px",backgroundColor:"#f4f5fb","&:hover":{},marginLeft:0,width:"100%"}})),fe=Object(l.a)("div")((function(e){e.theme;return{padding:"8px",height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"#999999"}})),ge=Object(l.a)(d.c)((function(e){e.theme;return{color:"inherit","& .MuiInputBase-input":{paddingLeft:"32px",width:"100%"}}})),me=Object(s.a)({root:{display:"flex","& .MuiListItem-root":{marginTop:"10px","&:hover":{color:"#0044FF",backgroundColor:"#f4f5fb",borderRight:"5px solid #0044FF","& .MuiSvgIcon-root":{color:"#0044FF"},"& .MuiTypography-root":{color:"#0044FF"}}},"& .MuiDrawer-paper":{borderRight:"none"}},profile:{float:"right",display:"flex",alignItems:"center"},profileImage:{paddingLeft:"0px",borderRadius:"50%"},link:{paddingRight:"20px",color:"#3a5f79",fontSize:"larger"},icon:{marginRight:"20px"},name:{fontStyle:"bold"},role:{fontSize:"12px",color:"#878792"},drawerDiv:{borderRight:"0px"},logo:{}}),Oe=240,ye=Object(z.jsx)(he,{});var Se=function(e){var t=me(),i=e.window,a=r.a.useState(!1),n=Object(o.a)(a,2),c=n[0],l=n[1],s=function(){l(!c)},d=void 0!==i?function(){return i().document.body}:void 0;return Object(z.jsxs)(p.a,{className:t.root,children:[Object(z.jsx)(x.a,{}),Object(z.jsx)(b.a,{position:"fixed",sx:{backgroundColor:"#fff",width:{sm:"calc(100% - ".concat(Oe,"px)")},ml:{sm:"".concat(Oe,"px")}},elevation:0,children:Object(z.jsxs)(j.a,{children:[Object(z.jsx)(h.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,sx:{mr:2,display:{sm:"none"}},children:Object(z.jsx)(m.a,{})}),Object(z.jsxs)(u.a,{container:!0,children:[Object(z.jsx)(u.a,{item:!0,children:Object(z.jsxs)(ue,{children:[Object(z.jsx)(fe,{children:Object(z.jsx)(v.a,{})}),Object(z.jsx)(ge,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}),Object(z.jsx)(u.a,{item:!0,sm:!0}),Object(z.jsxs)(u.a,{item:!0,className:t.profile,children:[Object(z.jsx)(y.a,{className:t.icon}),Object(z.jsx)("img",{src:w,alt:"logo",width:"40dp",height:"40dp",className:t.profileImage}),Object(z.jsxs)("div",{style:{paddingLeft:"20px",display:"block"},children:[Object(z.jsx)(f.a,{className:t.name,children:"Beatrice Nakabanda"}),Object(z.jsx)(f.a,{variant:"body2",children:"Admin"})]})]})]})]})}),Object(z.jsxs)(p.a,{component:"nav",sx:{width:{sm:Oe},flexShrink:{sm:0},backgroundColor:""},"aria-label":"mailbox folders",children:[Object(z.jsx)(g.a,{container:d,variant:"temporary",open:c,onClose:s,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Oe}},children:ye}),Object(z.jsx)(g.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Oe}},open:!0,elevation:0,children:ye})]}),Object(z.jsx)(p.a,{component:"main",sx:{flexGrow:1,pt:0,pl:3,pr:3,width:{sm:"calc(100% - ".concat(Oe,"px)")},ml:{sm:"".concat(Oe,"px")}},children:Object(z.jsx)(q,{})})]})};var ve=function(){return Object(z.jsx)(Se,{})},we=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,364)).then((function(t){var i=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),a(e),r(e),n(e),c(e)}))},Ne=i(362),ke={primary:{main:"#f4f5fb"},secondary:{main:"#0044FF"},text:{primary:"#293370",secondary:"#878792"},background:{default:"#f4f5fb"}},Ce={h1:{color:ke.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:ke.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:ke.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:ke.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:ke.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:ke.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:ke.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:ke.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:ke.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:ke.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:ke.text.primary,fontSize:"14px"},caption:{color:ke.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:ke.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},Fe=i(126),Re=Object(Fe.a)({palette:ke,typography:Ce});c.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(Ne.a,{theme:Re,children:Object(z.jsx)(ve,{})})}),document.getElementById("root")),we()}},[[237,1,2]]]);
//# sourceMappingURL=main.12d844ef.chunk.js.map