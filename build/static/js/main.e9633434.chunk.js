(this.webpackJsonpitmanagement=this.webpackJsonpitmanagement||[]).push([[0],{453:function(e){e.exports=JSON.parse('{"name":"itmanagement","version":"1.1.8.2","private":true,"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/free-brands-svg-icons":"^5.15.1","@fortawesome/free-regular-svg-icons":"^5.15.1","@fortawesome/free-solid-svg-icons":"^5.15.1","@fortawesome/react-fontawesome":"^0.1.14","@material-ui/core":"^4.11.3","@material-ui/data-grid":"^4.0.0-alpha.21","@material-ui/icons":"^4.11.2","@material-ui/lab":"^4.0.0-alpha.57","@testing-library/jest-dom":"^5.11.6","@testing-library/react":"^11.2.2","@testing-library/user-event":"^12.5.0","@types/jest":"^26.0.16","@types/node":"^12.19.8","@types/react":"^16.14.2","@types/react-dom":"^16.9.10","axios":"^0.21.1","axios-hooks":"^2.2.0","bootstrap":"^4.6.0","bootswatch":"^4.5.3","date-fns":"^2.17.0","downloadjs":"^1.4.7","json2csv":"^5.0.6","material-table":"^1.67.0","moment":"^2.29.1","moment-timezone":"^0.5.33","react":"^17.0.1","react-bootstrap":"^1.4.3","react-csv":"^2.0.3","react-dom":"^17.0.1","react-moment":"^1.1.1","react-router-dom":"^5.2.0","react-scripts":"4.0.1","react-select-material-ui":"^6.7.0","typescript":"^4.1.2","web-vitals":"^0.2.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@types/downloadjs":"^1.4.2","@types/json2csv":"^5.0.1","@types/react-bootstrap-table-next":"^4.0.10","@types/react-bootstrap-table2-paginator":"^2.1.1","@types/react-bootstrap-table2-toolkit":"^2.1.4","@types/react-csv":"^1.1.1","@types/react-router-dom":"^5.1.7","@types/react-virtualized":"^9.21.10","react-virtualized":"^9.22.2"}}')},544:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(0),o=a.n(i),r=a(16),c=a.n(r),d=a(21),l=a(61),s=a.n(l),m=a(90),u=a(581),b=a(332),j=a(566),p=a(331),f=a(564),O=a(568),h=a(244),x=a(375),y=a.n(x),g=a(92),v=a(329),C=a(565),N=a(121),w=a(417),k=a(330),S=a(23),I=a.n(S),P="http://192.168.1.80:5002",D="/itmanagement",K="itmanagement_login_token";function E(){var e=a(453);return Object(n.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:[Object(n.jsxs)("div",{children:["Copyright \xa9 ",Object(n.jsx)(f.a,{color:"inherit",href:"#",children:"KIZUNA.inc"})," ",(new Date).getFullYear(),"."]}),Object(n.jsxs)("div",{children:["Ver.",e.version]})]})}var T=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},error:{color:N.a[500]},backdrop:{zIndex:e.zIndex.drawer+1}}})),_=function(e){var t=e.setToken,a=T(),r=Object(i.useState)(!1),c=Object(d.a)(r,2),l=c[0],f=c[1],x=Object(i.useState)(),v=Object(d.a)(x,2),N=v[0],S=v[1],D=Object(i.useState)(),_=Object(d.a)(D,2),A=_[0],M=_[1],z=Object(i.useState)(""),F=Object(d.a)(z,2),W=F[0],R=F[1],L=function(){var e=Object(m.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),void 0===a.mailAddress&&(a.mailAddress=""),void 0===a.pw&&(a.pw=""),n={id:0,mailAddress:a.mailAddress,pw:a.pw,privilegeCode:0},e.next=6,I.a.post("".concat(P,"/api/itmanagement/GetLoginUser"),n).then((function(e){sessionStorage.setItem(K,JSON.stringify(e.data)),f(!1),t(e.data)})).catch((function(e){e.response&&(f(!1),R("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u307e\u305f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9055\u3044\u307e\u3059"))})).finally((function(){}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={mailAddress:N,pw:A},e.next=4,L(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){S(""),M("")}),[]),Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(w.a,{className:a.backdrop,open:l,children:Object(n.jsx)(k.a,{color:"primary",size:80})}),Object(n.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(j.a,{}),Object(n.jsxs)("div",{className:a.paper,children:[Object(n.jsx)(u.a,{className:a.avatar,children:Object(n.jsx)(y.a,{})}),Object(n.jsx)(g.a,{component:"h1",variant:"h5",children:"IT\u8cc7\u7523\u7ba1\u7406\u53f0\u5e33"}),Object(n.jsxs)("form",{className:a.form,onSubmit:H,noValidate:!0,children:[Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return S(e.target.value)}}),Object(n.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return M(e.target.value)}}),Object(n.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:H,children:"\u30ed\u30b0\u30a4\u30f3"}),Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)(g.a,{className:a.error,children:W})}),Object(n.jsx)(O.a,{item:!0})]})]})]}),Object(n.jsx)(h.a,{mt:8,children:Object(n.jsx)(E,{})})]})]})},A=a(211),M=a(35),z=a(360),F=a(410),W=a.n(F),R=a(411),L=a.n(R),H=a(412),V=a.n(H),B=a(413),G=a.n(B),U=a(414),q=a.n(U),J=a(576),Y=a(336),Z=a(33),Q=a(11),X=a(76),$=a.n(X),ee=a(393),te=a.n(ee),ae=a(403),ne=a.n(ae),ie=a(394),oe=a.n(ie),re=a(401),ce=a.n(re),de=a(267),le=a.n(de),se=a(266),me=a.n(se),ue=a(395),be=a.n(ue),je=a(396),pe=a.n(je),fe=a(398),Oe=a.n(fe),he=a(399),xe=a.n(he),ye=a(400),ge=a.n(ye),ve=a(404),Ce=a.n(ve),Ne=a(397),we=a.n(Ne),ke=a(402),Se=a.n(ke),Ie=a(405),Pe=a.n(Ie),De={Add:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(te.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t,color:"primary",fontSize:"large"}))})),Check:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(oe.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),Clear:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(me.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),Delete:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(be.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),DetailPanel:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(le.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),Edit:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(pe.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),Export:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(we.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),Filter:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(Oe.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),FirstPage:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(xe.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),LastPage:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(ge.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),NextPage:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(le.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),PreviousPage:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(ce.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),ResetSearch:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(me.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),Search:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(Se.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),SortArrow:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(ne.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(Ce.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))})),ViewColumn:Object(i.forwardRef)((function(e,t){return Object(n.jsx)(Pe.a,Object(Q.a)(Object(Q.a)({},e),{},{ref:t}))}))},Ke=a(580),Ee=a(415),Te=a(579),_e=a(575),Ae=a(406),Me=a.n(Ae),ze=a(210),Fe=a.n(ze),We=function(e){var t=[{title:"\u30e1\u30fc\u30ab\u30fc",field:"makerCode",lookup:{1:"DELL",2:"HP",3:"Apple",4:"Microsoft",5:"acer"}},{title:"\u578b\u756a",field:"pcTypeNumber"},{title:"\u30b7\u30ea\u30a2\u30eb\u756a\u53f7",field:"serialNo"},{title:"\u30b5\u30fc\u30d3\u30b9\u30bf\u30b0",field:"pcServiceTag"},{title:"\u7a2e\u5225",field:"pcKindCode",lookup:{1:"\u30c7\u30b9\u30af\u30c8\u30c3\u30d7",2:"\u30ce\u30fc\u30c8"}},{title:"\u4fdd\u8a3c\u671f\u9593",field:"warrantyPeriod",type:"date",render:function(e){return Object(n.jsx)(Me.a,{format:"YYYY-MM-DD",children:e.warrantyPeriod})}},{title:"\u4fdd\u8a3c",field:"warranty",editable:"never",render:function(e){return Date.parse(e.warrantyPeriod)>=Date.now()?Object(n.jsx)("p",{children:"\u6709\u52b9"}):Object(n.jsx)("p",{children:"\u7121\u52b9"})}},{title:"\u5099\u8003",field:"pcMemo"}],a=Object(i.useState)([]),o=Object(d.a)(a,2),r=o[0],c=o[1];Object(i.useEffect)((function(){c([{makerCode:e.data.makerCode,pcTypeNumber:e.data.pcTypeNumber,pcServiceTag:e.data.pcServiceTag,assetKindCode:e.data.assetKindCode,warrantyPeriod:e.data.warrantyPeriod,pcMemo:e.data.pcMemo,pcItemCode:e.data.pcItemCode,itemNumber:e.data.itemNumber,pcKindCode:e.data.pcKindCode,monitorNumber1:0,monitorNumber2:0,monitorNumber3:0,monitorMemo:e.data.pcMemo,mouseNumber:e.data.mouseNumber,mouseMemo:e.data.mouseMemo,keyboardNumber:e.data.keyboardNumber,keyboardMemo:e.data.keyboardMemo,vpnSettingFlag:!1,currentOwnerCompanyCode:e.data.companyCode,currentOwnerEmployeeCode:e.data.temporaryEmployeeCode}])}),[e]);return Object(n.jsx)($.a,{title:"\u5099\u54c1\u756a\u53f7:"+e.data.itemNumber,localization:{header:{actions:""},body:{dateTimePickerLocalization:Fe.a}},columns:t,data:Object(Z.a)(r),icons:De,editable:{onRowUpdate:e.editable?function(t,a){return new Promise((function(n,i){var o=Object(Z.a)(r);o[a.tableData.id]=t,c(Object(Z.a)(o)),function(t){var a;void 0!==t.makerCode&&(t.makerCode=parseInt(null===(a=t.makerCode)||void 0===a?void 0:a.toString())),void 0!==t.pcKindCode&&(t.pcKindCode=parseInt(t.pcKindCode.toString()));var n={makerCode:t.makerCode,pcTypeNumber:t.pcTypeNumber,pcServiceTag:t.pcServiceTag,serialNo:t.serialNo,warrantyPeriod:t.warrantyPeriod,pcMemo:t.pcMemo,pcItemCode:e.data.pcItemCode,itemNumber:t.itemNumber,pcKindCode:t.pcKindCode,monitorNumber1:e.data.monitorNumber1,monitorNumber2:e.data.monitorNumber2,monitorNumber3:e.data.monitorNumber3,monitorMemo:e.data.pcMemo,mouseNumber:e.data.mouseNumber,mouseMemo:e.data.mouseMemo,keyboardNumber:e.data.keyboardNumber,keyboardMemo:e.data.keyboardMemo,vpnSettingFlag:!1,currentOwnerCompanyCode:e.data.companyCode,currentOwnerEmployeeCode:e.data.temporaryEmployeeCode,assetKindCode:e.data.assetKindCode};I.a.post("".concat(P,"/api/itmanagement/PostPCItem"),n).then((function(e){}))}(t),n()}))}:void 0},options:{filtering:!1,search:!1}})},Re=Object(v.a)((function(e){return Object(z.a)({backdrop:{zIndex:e.zIndex.drawer+1}})})),Le=function(e){var t=e.data,a=e.editable,r=Re(),c=Object(i.useState)(!1),l=Object(d.a)(c,2),u=l[0],b=l[1],j=Object(i.useState)([]),f=Object(d.a)(j,2),O=f[0],h=f[1],x=Object(i.useState)([]),y=Object(d.a)(x,2),g=y[0],v=y[1],C=Object(i.useState)([]),N=Object(d.a)(C,2),S=N[0],D=N[1],K=Object(i.useState)([]),E=Object(d.a)(K,2),T=E[0],_=E[1],A={getOptionLabel:function(e){return e.assetNo},getOptionSelected:function(e,t){return e.assetNo===t.assetNo},autoComplete:!0,autoSelect:!0,autoHighlight:!0};Object(i.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(P,"/api/itmanagement/GetVPCItemById/").concat(t.pcItemCode)).then((function(e){var t=[{monitorNumber1Name:e.data.monitorNumber1Name,monitorNumber2Name:e.data.monitorNumber2Name,monitorNumber3Name:e.data.monitorNumber3Name,monitorMemo:e.data.monitorMemo,mouseNumberName:e.data.mouseNumberName,mouseMemo:e.data.mouseMemo,keyboardNumberName:e.data.keyboardNumberName,keyboardMemo:e.data.keyboardMemo}];h(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(i.useEffect)((function(){I.a.get(P+"/api/itmanagement/GetOtherAssetAutoCompleteList").then((function(e){var t=e.data;v(t.filter((function(e,t){return 1===e.itemKindNo}))),D(t.filter((function(e,t){return 2===e.itemKindNo}))),_(t.filter((function(e,t){return 3===e.itemKindNo})))}))}),[]);var M=[{title:"\u30e2\u30cb\u30bf\u30fc1",field:"monitorNumber1Name",editComponent:function(e){return Object(n.jsx)(Ke.a,Object(Q.a)(Object(Q.a)({},A),{},{options:g,defaultValue:{assetNo:e.value},renderInput:function(e){return Object(n.jsx)(p.a,Object(Q.a)(Object(Q.a)({},e),{},{label:"\u30e2\u30cb\u30bf\u30fc1",variant:"outlined",margin:"normal"}))},onChange:function(t){return e.onChange(t.target.innerText)}}))}},{title:"\u30e2\u30cb\u30bf\u30fc2",field:"monitorNumber2Name",editComponent:function(e){return Object(n.jsx)(Ke.a,Object(Q.a)(Object(Q.a)({},A),{},{options:g,defaultValue:{assetNo:e.value},renderInput:function(e){return Object(n.jsx)(p.a,Object(Q.a)(Object(Q.a)({},e),{},{label:"\u30e2\u30cb\u30bf\u30fc2",variant:"outlined",margin:"normal"}))},onChange:function(t){return e.onChange(t.target.innerText)}}))}},{title:"\u30e2\u30cb\u30bf\u30fc3",field:"monitorNumber3Name",editComponent:function(e){return Object(n.jsx)(Ke.a,Object(Q.a)(Object(Q.a)({},A),{},{options:g,defaultValue:{assetNo:e.value},renderInput:function(e){return Object(n.jsx)(p.a,Object(Q.a)(Object(Q.a)({},e),{},{label:"\u30e2\u30cb\u30bf\u30fc2",variant:"outlined",margin:"normal"}))},onChange:function(t){return e.onChange(t.target.innerText)}}))}},{title:"\u30e2\u30cb\u30bf\u30fc\u5099\u8003",field:"monitorMemo"},{title:"\u30de\u30a6\u30b9\u756a\u53f7",field:"mouseNumberName",editComponent:function(e){return Object(n.jsx)(Ke.a,Object(Q.a)(Object(Q.a)({},A),{},{options:T,defaultValue:{assetNo:e.value},renderInput:function(e){return Object(n.jsx)(p.a,Object(Q.a)(Object(Q.a)({},e),{},{label:"\u30de\u30a6\u30b9\u756a\u53f7",variant:"outlined",margin:"normal"}))},onChange:function(t){return e.onChange(t.target.innerText)}}))}},{title:"\u30de\u30a6\u30b9\u5099\u8003",field:"mouseMemo"},{title:"\u30ad\u30fc\u30dc\u30fc\u30c9\u756a\u53f7",field:"keyboardNumberName",editComponent:function(e){return Object(n.jsx)(Ke.a,Object(Q.a)(Object(Q.a)({},A),{},{options:S,defaultValue:{assetNo:e.value},renderInput:function(e){return Object(n.jsx)(p.a,Object(Q.a)(Object(Q.a)({},e),{},{label:"\u30ad\u30fc\u30dc\u30fc\u30c9\u756a\u53f7",variant:"outlined",margin:"normal"}))},onChange:function(t){return e.onChange(t.target.innerText)}}))}},{title:"\u30ad\u30fc\u30dc\u30fc\u30c9\u5099\u8003",field:"keyboardMemo"}];return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(w.a,{className:r.backdrop,open:u,children:Object(n.jsx)(k.a,{color:"primary",size:80})}),Object(n.jsx)($.a,{columns:M,data:Object(Z.a)(O),icons:De,editable:{onRowUpdate:a?function(e,a){return new Promise((function(n,i){var o=Object(Z.a)(O);o[a.tableData.id]=e,h(Object(Z.a)(o)),function(e){var a=Object(Q.a)(Object(Q.a)({},t),e);b(!0),I.a.post(P+"/api/itmanagement/PostVPCItems",a).then((function(e){b(!1)}))}(e),n()}))}:void 0},localization:{header:{actions:""}},options:{filtering:!1,search:!1,showTitle:!1}})]})},He=Object(v.a)((function(e){return Object(z.a)({root:{"& *:not(svg)":{"font-size":"calc(8px + 1vmin)"}},backdrop:{zIndex:e.zIndex.drawer+1}})})),Ve=[{systemCode:1,systemName:"mail"},{systemCode:2,systemName:"chatwork"},{systemCode:3,systemName:"office365"},{systemCode:4,systemName:"cybouzu"},{systemCode:5,systemName:"nas"}],Be=function(e){var t=He(),a=Object(i.useState)([]),r=Object(d.a)(a,2),c=r[0],l=r[1],u=Object(i.useState)(!1),b=Object(d.a)(u,2),j=b[0],p=b[1],f=Object(i.useState)(0),O=Object(d.a)(f,2),h=O[0],x=O[1],y=[{title:"companycode",field:"companyCode",hidden:!0},{title:"temporaryEmployeeCode",field:"temporaryEmployeeCode",hidden:!0},{title:"systemCode",field:"systemCode",hidden:!0},{title:"No",field:"seqNo",editable:"never",hidden:!0},{title:e.id_title,field:"idNumber"},{title:"\u30d1\u30b9\u30ef\u30fc\u30c9",field:"passWord"},{title:"\u5099\u8003",field:"memo"}];Object(i.useEffect)((function(){var t;if(null!==e.data.employeecode){p(!0);var a=null===(t=Ve.find((function(t){return t.systemName===e.data_kindname})))||void 0===t?void 0:t.systemCode;void 0!==a&&x(parseInt(a.toString())),function(){var t=Object(m.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(P,"/api/itmanagement/GetAccountInfoBySystem/\n      ").concat(e.data.companycode,"/").concat(e.data.employeecode,"/").concat(a)).then((function(e){l(e.data),p(!1)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}}),[e]);var g=function(t){p(!0);var a={companyCode:e.data.companycode,temporaryEmployeeCode:e.data.employeecode,systemCode:h,seqNo:void 0===t.seqNo?-1:t.seqNo,idNumber:t.idNumber,passWord:t.passWord,memo:t.memo};console.log(a),I.a.post("".concat(P,"/api/itmanagement/PostAccountInfo"),a).then((function(e){I.a.get("".concat(P,"/api/itmanagement/GetAccountInfoBySystem/\n          ").concat(a.companyCode,"/").concat(a.temporaryEmployeeCode,"/").concat(h)).then((function(e){p(!1)}))}))};return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(w.a,{className:t.backdrop,open:j,children:Object(n.jsx)(k.a,{color:"primary",size:80})}),Object(n.jsx)($.a,{columns:y,localization:{header:{actions:""}},data:Object(Z.a)(c),icons:De,editable:{onRowUpdate:e.editable?function(e,t){return new Promise((function(a,n){var i=Object(Z.a)(c);i[t.tableData.id]=e,l(Object(Z.a)(i)),g(e),a()}))}:void 0,onRowAdd:e.editable?function(e){return new Promise((function(t,a){l([e].concat(Object(Z.a)(c))),g(e),t()}))}:void 0},options:{filtering:!1,search:!1,showTitle:!1}})]})},Ge=function(e){var t=e.children,a=e.value,i=e.index,o=Object(Ee.a)(e,["children","value","index"]);return Object(n.jsx)("div",Object(Q.a)(Object(Q.a)({role:"tabpanel",hidden:a!==i,id:"simple-tabpanel-".concat(i),"araia-labelledby":"simple-tab-".concat(i)},o),{},{children:a===i&&Object(n.jsx)(h.a,{p:2,children:t})}))},Ue=Object(v.a)((function(e){return{root:{flexGrow:1},AppBar:{backgroundColor:"#6163FF"}}})),qe=function(e){var t=e.data,a=e.editable,r=Ue(),c=Object(i.useState)(0),l=Object(d.a)(c,2),s=l[0],m=l[1],u=Object(i.useState)(!0),b=Object(d.a)(u,2),j=b[0],p=b[1],f=t,O={companycode:f.companyCode,employeecode:f.temporaryEmployeeCode,seqno:1,id:"",pw:"",memo:""},h=[j?{data_kindname:"pc",title:"PC\u672c\u4f53"}:{data_kindname:"",title:""},j?{data_kindname:"pc_other",title:"PC\u5099\u54c1"}:{data_kindname:"",title:""},{data_kindname:"mail",title:"\u30e1\u30fc\u30eb"},{data_kindname:"chatwork",title:"\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af"},{data_kindname:"cybouzu",title:"\u30b5\u30a4\u30dc\u30a6\u30ba"},{data_kindname:"nas",title:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0"}];Object(i.useEffect)((function(){void 0===t.pcItemCode&&p(!1)}),[t]);return Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsx)(J.a,{position:"static",className:r.AppBar,children:Object(n.jsx)(Te.a,{value:s,onChange:function(e,t){m(t)},"aria-label":"simpla tabs example",children:h.map((function(e,t){return""!==e.title?Object(n.jsx)(_e.a,Object(Q.a)({label:e.title},function(e){return{id:"simple-tab-".concat(e),key:"".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(t))):void 0}))})}),j?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(Ge,{value:s,index:0,children:Object(n.jsx)(We,{data:t,editable:a})}),Object(n.jsx)(Ge,{value:s,index:1,children:Object(n.jsx)(Le,{data:t,editable:a})}),Object(n.jsx)(Ge,{value:s,index:2,children:Object(n.jsx)(Be,{data_kindname:h[2].data_kindname,data:O,id_title:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",editable:a})}),Object(n.jsx)(Ge,{value:s,index:3,children:Object(n.jsx)(Be,{data_kindname:h[3].data_kindname,data:O,id_title:"ID",editable:a})}),Object(n.jsx)(Ge,{value:s,index:4,children:Object(n.jsx)(Be,{data_kindname:h[4].data_kindname,data:O,id_title:"ID",editable:a})}),Object(n.jsx)(Ge,{value:s,index:5,children:Object(n.jsx)(Be,{data_kindname:h[5].data_kindname,data:O,id_title:"ID",editable:a})})]}):Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(Ge,{value:s,index:0,children:Object(n.jsx)(Be,{data_kindname:h[2].data_kindname,data:O,id_title:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",editable:a})}),Object(n.jsx)(Ge,{value:s,index:1,children:Object(n.jsx)(Be,{data_kindname:h[3].data_kindname,data:O,id_title:"ID",editable:a})}),Object(n.jsx)(Ge,{value:s,index:2,children:Object(n.jsx)(Be,{data_kindname:h[4].data_kindname,data:O,id_title:"ID",editable:a})}),Object(n.jsx)(Ge,{value:s,index:3,children:Object(n.jsx)(Be,{data_kindname:h[5].data_kindname,data:O,id_title:"ID",editable:a})})]})]})},Je=Object(v.a)((function(e){return Object(z.a)({root:{"& *:not(svg)":{"font-size":"calc(9px + 1vmin)"}},backdrop:{zIndex:e.zIndex.drawer+1}})})),Ye=function(e){var t=Je(),a=Object(i.useState)(!1),r=Object(d.a)(a,2),c=r[0],l=r[1],u=Object(i.useState)([]),b=Object(d.a)(u,2),j=b[0],f=b[1],O=Object(i.useState)([]),h=Object(d.a)(O,2),x=h[0],y=h[1],g=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,I.a.get("".concat(P,"/api/itmanagement/getvpcitems")).then((function(e){f(e.data),l(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){g()}),[]),Object(i.useEffect)((function(){l(!0),I.a.get("".concat(P,"/api/itmanagement/GetEmployeeNameList")).then((function(e){y(e.data),l(!1)}))}),[]);var v=[{field:"pcItemCode",title:"No.",hidden:!0,filtering:!1,cellStyle:{width:20,mixWidth:30},headerStyle:{width:20,mixWidth:30}},{field:"assetKindName",title:"\u8cc7\u7523\u7a2e\u5225",editable:"never"},{field:"itemNumber",title:"\u5099\u54c1\u756a\u53f7",editable:"never",cellStyle:{maxWidth:20}},{field:"employeeName",title:"\u5f93\u696d\u54e1\u540d",editComponent:function(e){return Object(n.jsx)(Ke.a,{options:x,getOptionLabel:function(e){return e.employeeName},defaultValue:{employeeName:e.value,pcItemCode:0,assetKindCode:"",itemNumber:"",pcLoginPW:"",departmentName:""},getOptionSelected:function(e,t){return e.employeeName===t.employeeName},autoComplete:!0,autoSelect:!0,autoHighlight:!0,renderInput:function(e){return Object(n.jsx)(p.a,Object(Q.a)(Object(Q.a)({},e),{},{label:"\u5f93\u696d\u54e1\u540d",variant:"outlined",margin:"normal"}))},onChange:function(t){return e.onChange(t.target.innerText)}})}},{field:"pcLoginPW",title:"PC\u30ed\u30b0\u30a4\u30f3PW"},{field:"departmentName",title:"\u90e8\u7f72",editable:"never"}];return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(w.a,{className:t.backdrop,open:c,children:Object(n.jsx)(k.a,{color:"primary",size:80})}),Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)($.a,{columns:v,data:j,localization:{header:{actions:""},toolbar:{searchPlaceholder:"\u691c\u7d22"}},icons:De,editable:{onRowUpdate:e.editable?function(e,t){return new Promise((function(a,n){var i,o=Object(Z.a)(j);o[t.tableData.id]=e,f(Object(Z.a)(o)),i=e,I.a.post("".concat(P,"/api/itmanagement/PostVPCItems"),i).then((function(e){g()})),a(e)})).then((function(e){}))}:void 0},options:{filtering:!0,pageSize:10,showTitle:!1},detailPanel:function(t){return Object(n.jsx)(qe,{data:t,editable:e.editable})}})})]})},Ze=a(116),Qe=a(570),Xe=Object(v.a)((function(e){return Object(z.a)({root:{"& *:not(svg)":{"font-size":"calc(6px + 1vmin)"}},backdrop:{zIndex:e.zIndex.drawer+1}})})),$e=Object(Ze.a)({palette:{secondary:{main:"#FF1A40"}}}),et=function(e){var t=e.title,a=e.columns,r=e.getParam,c=e.editable_mode,l=e.updateDataHandler,s=e.deleteDataHandler,m=e.detailPanel,u=Xe(),b=Object(i.useState)(!1),j=Object(d.a)(b,2),p=j[0],f=j[1],O=Object(i.useState)([]),h=Object(d.a)(O,2),x=h[0],y=h[1];return Object(i.useEffect)((function(){f(!0),I.a.get("".concat(P,"/api/itmanagement/").concat(r)).then((function(e){y(e.data),f(!1)}))}),[r]),Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(w.a,{className:u.backdrop,open:p,children:Object(n.jsx)(k.a,{color:"primary",size:80})}),Object(n.jsx)("div",{className:u.root,children:Object(n.jsx)(Qe.a,{theme:$e,children:Object(n.jsx)($.a,{title:void 0===t?"":t,columns:a,data:x,localization:{header:{actions:""},toolbar:{searchPlaceholder:"\u691c\u7d22"},body:{dateTimePickerLocalization:Fe.a}},icons:De,editable:{onRowUpdate:c?function(e,t){return new Promise((function(a,n){var i=Object(Z.a)(x);i[t.tableData.id]=e,y(Object(Z.a)(i)),l(e),a()}))}:void 0,onRowAdd:c?function(e){return new Promise((function(t,a){y([e].concat(Object(Z.a)(x))),l(e),t()}))}:void 0,onRowDelete:c?function(e){return new Promise((function(t,a){var n=Object(Z.a)(x),i=e.tableData.id;n.splice(i,1),y(Object(Z.a)(n)),s(e),t()}))}:void 0},options:{filtering:!0,pageSize:10,showTitle:!1,addRowPosition:"first"},detailPanel:m})})})]})},tt=function(e){return Object(n.jsx)(et,{columns:[{title:"No",field:"pcItemCode",hidden:!0},{title:"\u5099\u54c1\u756a\u53f7",field:"itemNumber",align:"center",headerStyle:{minWidth:20}},{title:"\u30e1\u30fc\u30ab\u30fc",field:"makerCode",lookup:{1:"DELL",2:"HP",3:"Apple",4:"Microsoft",5:"acer"},headerStyle:{width:120},cellStyle:{minWidth:120}},{title:"\u578b\u756a",field:"pcTypeNumber"},{title:"\u30b5\u30fc\u30d3\u30b9\u30bf\u30b0",field:"pcServiceTag"},{title:"\u30b7\u30ea\u30a2\u30eb\u756a\u53f7",field:"serialNo"},{title:"\u7a2e\u5225",field:"pcKindCode",lookup:{1:"\u30c7\u30b9\u30af\u30c8\u30c3\u30d7",2:"\u30ce\u30fc\u30c8",999:"\u672a\u6307\u5b9a"},headerStyle:{width:120},cellStyle:{minWidth:120}},{title:"\u4fdd\u8a3c\u671f\u9593",field:"warrantyPeriod",type:"date",headerStyle:{width:100,minWidth:100},cellStyle:{minWidth:80}},{title:"\u8cc7\u7523\u7a2e\u5225",field:"assetKindCode",type:"number",lookup:{1:"\u672c\u793e",2:"\u4e45\u7559\u7c73",3:"\u30ea\u30fc\u30b9",999:"\u672a\u6307\u5b9a"}},{title:"\u5099\u8003",field:"pcMemo"}],getParam:"getpcitems",editable_mode:e.editable,updateDataHandler:function(e){console.log("PCAssetList:"),void 0===e.pcItemCode&&(e.pcItemCode=-1);var t=e;void 0!==t.makerCode&&(t.makerCode=parseInt(t.makerCode.toString())),void 0!==t.pcKindCode&&(t.pcKindCode=parseInt(t.pcKindCode.toString())),void 0!==t.assetKindCode&&(t.assetKindCode=parseInt(t.assetKindCode.toString())),console.log(t),I.a.post("".concat(P,"/api/itmanagement/PostPCItem"),t)},deleteDataHandler:function(e){I.a.post("".concat(P,"/api/itmanagement/DeletePCItem"),e)}})},at=function(e){return Object(n.jsx)(et,{columns:[{title:"\u533a\u5206",field:"itemKindNo",lookup:{1:"\u30e2\u30cb\u30bf\u30fc",2:"\u30ad\u30fc\u30dc\u30fc\u30c9",3:"\u30de\u30a6\u30b9"},headerStyle:{width:120},cellStyle:{minWidth:120}},{title:"No",field:"itemNo",hidden:!0},{title:"\u8cc7\u7523\u756a\u53f7",field:"assetNo"},{title:"\u30e1\u30fc\u30ab\u30fc",field:"makerCode",lookup:{1:"DELL",2:"HP",3:"Apple",4:"Microsoft",5:"acer",6:"AOC",7:"ASUS",8:"BENQ",9:"BLENCK",10:"BUFFALO",11:"Easterntimes Tech",12:"ELECOM",13:"GREEN HOUSE",14:"I\u30fbO DATA",15:"Logicool",16:"NEC",17:"Qtuo",18:"SANWA"},headerStyle:{width:120},cellStyle:{minWidth:120}},{title:"\u578b\u756a",field:"typeNumber"},{title:"S/N",field:"serialNumber"},{title:"\u5099\u8003",field:"memo"}],getParam:"GetOtherAssetItem",editable_mode:e.editable,updateDataHandler:function(e){var t=Object(Q.a)({},e);t.makerCode=parseInt(t.makerCode),t.itemKindNo=parseInt(t.itemKindNo),I.a.post("".concat(P,"/api/itmanagement/PostOtherAssetItem"),t)},deleteDataHandler:function(e){I.a.post("".concat(P,"/api/itmanagement/DeleteOtherAssetItem"),e)}})},nt=function(e){return Object(n.jsx)(et,{columns:[{title:"\u4f1a\u793e\u540d",field:"companyCode",type:"numeric",lookup:{1:"KIZUNA",2:"DreamBox",3:"\u30de\u30ad\u30b3\u30df",4:"\u30d7\u30e9\u30f3\u30c4",5:"KIZUNA\u5927\u5206"}},{title:"temporaryEmployeeCode",field:"temporaryEmployeeCode",type:"numeric",hidden:!0},{title:"\u5f93\u696d\u54e1\u756a\u53f7",field:"formalEmployeeCode",align:"center",filtering:!1,headerStyle:{minWidth:70},cellStyle:{minWidth:20}},{title:"\u59d3",field:"lastName"},{title:"\u540d",field:"firstName"},{title:"\u96c7\u7528\u533a\u5206",field:"employmentCode",type:"numeric",lookup:{1:"\u76f4\u96c7\u7528",2:"\u6d3e\u9063",3:"\u696d\u52d9\u59d4\u8a17"},headerStyle:{width:120},cellStyle:{minWidth:120}},{title:"\u6240\u5c5e\u90e8\u7f72",field:"departmentCode",type:"numeric",lookup:{1:"Dreambox",2:"MO\u5927\u6a4b",3:"\u30a2\u30e9\u30a4\u30a2\u30f3\u30b9",4:"\u30ab\u30b9\u30bf\u30de\u30fc\u5927\u6a4b",5:"\u30d7\u30e9\u30f3\u30c4",6:"\u30d7\u30e9\u30f3\u30cb\u30f3\u30b0",8:"\u30e1\u30c7\u30a3\u30a2\u652f\u63f4 ",9:"\u308f\u304f\u308f\u304f",10:"\u7d4c\u7406\u8ca1\u52d9\u5ba4",11:"\u5e83\u544aPR ",12:"\u4e8b\u696d\u63a8\u9032",13:"\u793e\u9577\u5ba4",14:"\u60c5\u5831\u30b7\u30b9\u30c6\u30e0\u7ba1\u7406\u5ba4",15:"\u5236\u4f5c",16:"\u30ab\u30b9\u30bf\u30de\u30fc\u4e45\u7559\u7c73",17:"\u30de\u30ad\u30b3\u30df",18:"KIZUNA\u5927\u5206"},headerStyle:{width:120},cellStyle:{minWidth:120}},{title:"pCLoginPW",field:"pCLoginPW",hidden:!0},{title:"emailAddress",field:"emailAddress",hidden:!0},{title:"joinedDate",field:"joinedDate",type:"date",hidden:!0},{title:"retiermentDate",field:"retiermentDate",type:"date",hidden:!0},{title:"\u5728\u7c4d",field:"existsFlag",type:"boolean",defaultFilter:"checked"},{title:"lastNameKana",field:"lastNameKana",hidden:!0},{title:"firstNameKana",field:"firstNameKana",hidden:!0},{title:"existsFlag",field:"pCLogiexistsFlagnPW",hidden:!0}],getParam:"GetEmployees",editable_mode:e.editable,updateDataHandler:function(e){!function(e){void 0===e.companyCode&&(e.companyCode=1),void 0===e.temporaryEmployeeCode&&I.a.get("".concat(P,"/api/itmanagement/GetLastTemporaryEmployeeCode/").concat(e.companyCode)).then((function(t){e.temporaryEmployeeCode=t.data})),void 0===e.employmentCode&&(e.employmentCode=0),void 0===e.departmentCode&&(e.departmentCode=0),void 0===e.existsFlag&&(e.existsFlag=!0);var t={companyCode:parseInt(e.companyCode.toString()),temporaryEmployeeCode:e.temporaryEmployeeCode,formalEmployeeCode:e.formalEmployeeCode,lastName:e.lastName,firstName:e.firstName,employmentCode:parseInt(e.employmentCode.toString()),departmentCode:parseInt(e.departmentCode.toString()),firstNameKana:"",lastNameKana:"",pCLoginPW:"",emailAddress:"",joinedDate:void 0,retiermentDate:void 0,existsFlag:e.existsFlag};I.a.post("".concat(P,"/api/itmanagement/PostEmployee"),t).then((function(e){}))}(e)},deleteDataHandler:function(e){I.a.post("".concat(P,"/api/itmanagement/DeleteEmployee"),e).then((function(e){}))},detailPanel:function(t){return Object(n.jsx)(qe,{data:t,editable:e.editable})}})},it=function(e){var t=[{codeKindID:0,codeKindName:"\u4f1a\u793e\u540d"},{codeKindID:1,codeKindName:"\u90e8\u7f72\u540d"},{codeKindID:2,codeKindName:"\u96c7\u7528\u533a\u5206"},{codeKindID:3,codeKindName:"\u30e1\u30fc\u30ab\u30fc\u540d"},{codeKindID:4,codeKindName:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u7a2e\u5225"},{codeKindID:5,codeKindName:"\u30b7\u30b9\u30c6\u30e0\u540d"},{codeKindID:6,codeKindName:"\u8cc7\u7523\u7a2e\u5225"}],a=[{title:"\u30b3\u30fc\u30c9\u7a2e\u5225",field:"codeKindID",lookup:t.reduce((function(e,t,a){return e[t.codeKindID]=t.codeKindName,e}),{}),align:"left",headerStyle:{minWidth:70},cellStyle:{minWidth:20}},{title:"\u30b3\u30fc\u30c9No",field:"codeID"},{title:"\u30b3\u30fc\u30c9\u540d\u79f0",field:"codeName",align:"left",headerStyle:{minWidth:70},cellStyle:{minWidth:20}}];return Object(n.jsx)(et,{columns:a,getParam:"GetMstCodeTable",editable_mode:e.editable,updateDataHandler:function(e){!function(e){e.codeKindName=t[e.codeKindID].codeKindName,e.orderNumber=0;var a={codeKindID:parseInt(e.codeKindID.toString()),codeKindName:e.codeKindName,codeID:parseInt(e.codeID.toString()),codeName:e.codeName,orderNumber:e.orderNumber};I.a.post("".concat(P,"/api/itmanagement/PostMstCodeTable"),a).then((function(e){}))}(e)},deleteDataHandler:function(e){}})},ot=a(71),rt=a(552),ct=a(554),dt=a(577),lt=a(363),st=a(123),mt=Object(v.a)((function(e){return Object(z.a)({list:{width:240,paddingTop:e.spacing(4)},icon:{color:"#757ce8"}})})),ut=function(e){var t=e.icon,a=e.iconColor,i=e.primary,r=e.to,c=e.selected,d=e.style,l=e.onClick,s=o.a.useMemo((function(){return o.a.forwardRef((function(e,t){return Object(n.jsx)(A.b,Object(Q.a)({to:r,ref:t},e))}))}),[r]);return Object(n.jsx)("li",{children:Object(n.jsxs)(ct.a,{button:!0,component:s,selected:c,onClick:l,style:d,children:[t?Object(n.jsx)(dt.a,{style:a,children:t}):null,Object(n.jsx)(lt.a,{primary:i})]})})},bt=function(e){var t=mt(),a=Object(i.useState)(0),r=Object(d.a)(a,2),c=r[0],l=r[1];return Object(n.jsx)(o.a.Fragment,{children:Object(n.jsx)(ot.a,{className:t.list,anchor:"left",open:!0,variant:"permanent",classes:{paper:t.list},children:Object(n.jsx)("div",{className:t.list,children:Object(n.jsx)(rt.a,{children:e.menu.map((function(t,a){return Object(n.jsx)(ut,{icon:t.icon,iconColor:c===a?{color:N.a[500]}:void 0,primary:t.title,to:t.path,selected:c===a,style:c===a?{backgroundColor:st.a[50],color:st.a[900]}:void 0,onClick:function(t){return function(t,a){l(a),e.setSelectedIndex(a)}(0,a)}},a)}))})})})})},jt=a(255),pt=a(193),ft=a(335),Ot=a(409),ht=a.n(Ot),xt=a(407),yt=a.n(xt),gt=a(408),vt=Object(v.a)((function(e){return Object(z.a)({root:{color:"white"}})})),Ct=function(e){var t=vt(),a=Object(i.useState)(null),r=Object(d.a)(a,2),c=r[0],l=r[1],s=Boolean(c),m=function(t){switch(t.stopPropagation(),l(null),t.currentTarget.innerText){case"CSV\u51fa\u529b":switch(e.selectedIndex){case 0:a="IT\u8cc7\u7523\u30c7\u30fc\u30bf.csv",n="GetVPCitemsCSV",I.a.get("".concat(P,"/api/itmanagement2/").concat(n)).then((function(e){var t=(new gt.Parser).parse(e.data);yt()(t,a,"text/csv")}))}}var a,n};return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(jt.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(t){0===e.selectedIndex&&(t.stopPropagation(),l(t.currentTarget))},className:t.root,children:Object(n.jsx)(ht.a,{})}),Object(n.jsx)(pt.a,{id:"long-menu",anchorEl:c,keepMounted:!0,open:s,onClose:m,PaperProps:{style:{maxHeight:216,width:"20ch"}},children:[{title:"CSV\u51fa\u529b"}].map((function(e){return Object(n.jsx)(ft.a,{onClick:m,children:e.title},e.title)}))})]})},Nt=Object(v.a)((function(e){return Object(z.a)({root:{"& *:not(svg)":{"font-size":"calc(6px + 1vmin)"},display:"flex",marginTop:e.spacing(4)},appBar:{zIndex:e.zIndex.drawer+1,marginBottom:e.spacing(4)},main:{marginTop:e.spacing(4)},title:{flexGrow:1},list:{width:240},content:{padding:e.spacing(1)}})})),wt=function(e){var t=Nt(),a=Object(i.useState)(0),r=Object(d.a)(a,2),c=r[0],l=r[1],s=[{key:"home",title:"Home",icon:Object(n.jsx)(W.a,{}),path:"".concat(D,"/home"),main:function(){return Object(n.jsx)(Ye,{editable:e.editable})}},{key:"assets",title:"\u6a5f\u5668\u4e00\u89a7(PC)",icon:Object(n.jsx)(L.a,{}),path:"".concat(D,"/assets"),main:function(){return Object(n.jsx)(tt,{editable:e.editable})}},{key:"otherassets",title:"\u6a5f\u5668\u4e00\u89a7(PC\u4ee5\u5916)",icon:Object(n.jsx)(V.a,{}),path:"".concat(D,"/otherassets"),main:function(){return Object(n.jsx)(at,{editable:e.editable})}},{key:"employee",title:"\u5f93\u696d\u54e1\u4e00\u89a7",icon:Object(n.jsx)(G.a,{}),path:"".concat(D,"/employee"),main:function(){return Object(n.jsx)(nt,{editable:e.editable})}},{key:"master",title:"\u30de\u30b9\u30bf\u7ba1\u7406",icon:Object(n.jsx)(q.a,{}),path:"".concat(D,"/master"),main:function(){return Object(n.jsx)(it,{editable:e.editable})}}];return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(J.a,{position:"fixed",className:t.appBar,children:Object(n.jsxs)(Y.a,{variant:"regular",children:[Object(n.jsx)(g.a,{variant:"h6",className:t.title,children:"IT\u8cc7\u7523\u7ba1\u7406\u53f0\u5e33"}),Object(n.jsx)(Ct,{selectedIndex:c})]})}),Object(n.jsx)(A.a,{children:Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(bt,{menu:s,setSelectedIndex:l}),Object(n.jsx)("main",{className:t.main,children:Object(n.jsx)("div",{children:Object(n.jsxs)(M.d,{children:[Object(n.jsx)(M.b,{exact:!0,path:"".concat(D,"/"),render:function(){return Object(n.jsx)(M.a,{to:"".concat(D,"/home")})}}),s.map((function(e,t){return Object(n.jsx)(M.b,{exact:!0,path:e.path,children:Object(n.jsx)(e.main,{})},t)}))]})})})]})})]})};var kt=function(){var e=Object(i.useState)(),t=Object(d.a)(e,2),a=t[0],o=t[1];return a||sessionStorage.getItem(K)?Object(n.jsx)(wt,{editable:1===JSON.parse(sessionStorage.getItem(K)).privilegeCode}):Object(n.jsx)(_,{setToken:o})},St=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,583)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),o(e),r(e)}))};c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(kt,{})}),document.getElementById("root")),St()}},[[544,1,2]]]);
//# sourceMappingURL=main.e9633434.chunk.js.map