"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[966],{8470:function(e,n,t){var a=t(1413),i=t(4236).Z.div((function(e){var n=e.justifyContent,t=e.alignItems,i=e.flexDirection,l=e.gap,c=e.padding,r=e.margin,s={display:"flex",justifyContent:n,alignItems:t,gap:"number"===typeof l?"".concat(l,"px"):l};return i&&(s.flexDirection=i),c&&(s.padding=c),r&&(s.margin=r),(0,a.Z)({},s)}));n.Z=i},7966:function(e,n,t){t.r(n),t.d(n,{IdleReport:function(){return g}});var a=t(4165),i=t(5861),l=t(9439),c=t(2791),r=t(2999),s=t(1717),d=t(9797),o=t(7354),u=t(5900),h=t(8470),m=t(1730),x=t(3685),f=t(364),p=t(6570),v=t(184),j=r.Z.Option,Z=s.Z.RangePicker,g=function(){var e=(0,c.useState)({}),n=(0,l.Z)(e,2),t=(n[0],n[1],(0,c.useState)({})),s=(0,l.Z)(t,2),g=(s[0],s[1]),y=(0,f.v9)((function(e){return e.auth}));console.log(y);var N=function(e){console.log(e),b(e)};(0,c.useEffect)((function(){b()}),[]);var b=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={start_day:"2023-08-07 00:00:00",end_day:"2023-08-18 00:00:00",vehicle_id:"1"},e.next=3,p.ZP.get("get_idle_report/",t).then((function(e){return e})).catch((function(e){return e}));case 3:i=e.sent,console.log(i),g(i);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(d.Z,{title:"Idle Report",children:[(0,v.jsx)(h.Z,{alignItems:"center",justifyContent:"space-between",mobileFlex:!1,children:(0,v.jsxs)(h.Z,{className:"mb-1",mobileFlex:!1,children:[(0,v.jsx)("div",{className:"mr-md-6 mr-3",children:(0,v.jsxs)(r.Z,{showSearch:!0,defaultValue:"Today",className:"w-100",style:{minWidth:180},children:[(0,v.jsx)("option",{value:"1",children:"Today"}),(0,v.jsx)("option",{value:"2",children:"Last 7 Days"}),(0,v.jsx)("option",{value:"3",children:"Last Month"}),(0,v.jsx)("option",{value:"4",children:"Custom"})]})}),(0,v.jsx)("div",{className:"mr-md-3 mr-3",children:(0,v.jsx)(Z,{showTime:!0,name:"range_picker",format:"YYYY-MM-DD",onChange:N})}),(0,v.jsx)("div",{className:"mr-md-3 mb-3",children:(0,v.jsxs)(r.Z,{defaultValue:"All",className:"w-100",style:{minWidth:180},name:"vehicle_id",placeholder:"Vehicle",onChange:N,children:[(0,v.jsx)(j,{value:"All",children:"All"}),(0,v.jsx)(j,{value:"1",children:"TN01AB1234"}),(0,v.jsx)(j,{value:"2",children:"TN02AB9874"})]})}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)(o.ZP,{type:"primary",success:!0,icon:(0,v.jsx)(m.Z,{}),children:"Search"})}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)(o.ZP,{type:"primary",success:!0,icon:(0,v.jsx)(x.Z,{}),ghost:!0,children:"Export"})})]})}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsx)(u.Z,{bordered:!0,columns:[{title:"S.No",dataIndex:"s_no"},{title:"Vehicle Name",dataIndex:"vehicle_name"},{title:"Start Date",dataIndex:"start_date"},{title:"End Date",dataIndex:"end_date"},{title:"Location",dataIndex:"location"},{title:"Map View",dataIndex:"map_view"}]})})]})})};n.default=g},3685:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(1413),i=t(2791),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0010.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 00-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"}}]},name:"file-excel",theme:"outlined"},c=t(8711),r=function(e,n){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:l}))};r.displayName="FileExcelOutlined";var s=i.forwardRef(r)}}]);
//# sourceMappingURL=966.1f816975.chunk.js.map