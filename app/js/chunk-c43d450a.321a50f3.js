(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c43d450a"],{a434:function(e,t,n){"use strict";var a=n("23e7"),i=n("23cb"),o=n("a691"),r=n("50c4"),c=n("7b0b"),l=n("65f0"),u=n("8418"),s=n("1dde"),b=s("splice"),d=Math.max,p=Math.min,h=9007199254740991,f="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var n,a,s,b,m,O,j=c(this),g=r(j.length),y=i(e,g),v=arguments.length;if(0===v?n=a=0:1===v?(n=0,a=g-y):(n=v-2,a=p(d(o(t),0),g-y)),g+n-a>h)throw TypeError(f);for(s=l(j,a),b=0;b<a;b++)m=y+b,m in j&&u(s,b,j[m]);if(s.length=a,n<a){for(b=y;b<g-a;b++)m=b+a,O=b+n,m in j?j[O]=j[m]:delete j[O];for(b=g;b>g-a+n;b--)delete j[b-1]}else if(n>a)for(b=g-a;b>y;b--)m=b+a-1,O=b+n-1,m in j?j[O]=j[m]:delete j[O];for(b=0;b<n;b++)j[b+y]=arguments[b+2];return j.length=g-a+n,s}})},b0c0:function(e,t,n){var a=n("83ab"),i=n("9bf2").f,o=Function.prototype,r=o.toString,c=/^\s*function ([^ (]*)/,l="name";a&&!(l in o)&&i(o,l,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(e){return""}}})},d6f0:function(e,t,n){"use strict";n.r(t);n("fb6a");var a=n("7a23"),i={class:"app-container"},o={key:0,style:{"margin-bottom":"5px"}},r=Object(a["p"])("查询"),c=Object(a["p"])("编辑"),l=Object(a["p"])("详情"),u=Object(a["p"])("删除"),s={style:{margin:"0 auto",width:"800px"}},b={key:1,class:"centerButton"},d=Object(a["p"])("添加");function p(e,t,n,p,h,f){var m=Object(a["Q"])("Navi"),O=Object(a["Q"])("el-input"),j=Object(a["Q"])("el-option"),g=Object(a["Q"])("el-select"),y=Object(a["Q"])("el-button"),v=Object(a["Q"])("el-table-column"),w=Object(a["Q"])("el-table"),k=Object(a["Q"])("el-pagination");return Object(a["H"])(),Object(a["m"])(a["b"],null,[Object(a["q"])(m,{onTitle:f.getT},null,8,["onTitle"]),Object(a["n"])("div",i,[1==h.showQuery?(Object(a["H"])(),Object(a["m"])("div",o,[(Object(a["H"])(!0),Object(a["m"])(a["b"],null,Object(a["O"])(h.querList,(function(e,t){return Object(a["H"])(),Object(a["m"])("div",{key:t,style:{display:"inline-block"}},[Object(a["p"])(Object(a["U"])(e.label)+" ",1),1==e.showInput?(Object(a["H"])(),Object(a["k"])(O,{key:0,modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t},modelModifiers:{number:!0},style:{width:"60%"}},null,8,["modelValue","onUpdate:modelValue"])):Object(a["l"])("",!0),1==e.showSelect?(Object(a["H"])(),Object(a["k"])(g,{key:1,modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t},placeholder:"请选择",style:{width:"60%"}},{default:Object(a["fb"])((function(){return[(Object(a["H"])(!0),Object(a["m"])(a["b"],null,Object(a["O"])(e.itemList,(function(e){return Object(a["H"])(),Object(a["k"])(j,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])):Object(a["l"])("",!0)])})),128)),Object(a["q"])(y,{size:"mini",class:"commButton",onClick:f.query},{default:Object(a["fb"])((function(){return[r]})),_:1},8,["onClick"])])):Object(a["l"])("",!0),Object(a["q"])(w,{class:"table-content",style:{width:"100%"},size:"mini",data:h.tableList.slice((h.currentPage-1)*h.pageSize,h.currentPage*h.pageSize),border:""},{default:Object(a["fb"])((function(){return[Object(a["q"])(v,{label:"序号",fixed:"left",width:"50",align:"center",color:"black"},{default:Object(a["fb"])((function(e){return[Object(a["p"])(Object(a["U"])(e.$index+1),1)]})),_:1}),(Object(a["H"])(!0),Object(a["m"])(a["b"],null,Object(a["O"])(h.colsList,(function(e){return Object(a["H"])(),Object(a["k"])(v,{key:e.prop,label:e.label,prop:e.prop,align:"center",color:"black"},Object(a["o"])({_:2},["操作"===e.label?{name:"default",fn:Object(a["fb"])((function(t){return[1==e.edit?(Object(a["H"])(),Object(a["k"])(y,{key:0,type:"primary",onClick:function(e){return f.editRow(t.row.id)},size:"mini"},{default:Object(a["fb"])((function(){return[c]})),_:2},1032,["onClick"])):Object(a["l"])("",!0),1==e.detail?(Object(a["H"])(),Object(a["k"])(y,{key:1,type:"success",onClick:function(e){return f.detailRow(t.row.id)},size:"mini"},{default:Object(a["fb"])((function(){return[l]})),_:2},1032,["onClick"])):Object(a["l"])("",!0),1==e.detail?(Object(a["H"])(),Object(a["k"])(y,{key:2,type:"danger",onClick:function(e){return f.deleteRow(t.row.id)},size:"mini"},{default:Object(a["fb"])((function(){return[u]})),_:2},1032,["onClick"])):Object(a["l"])("",!0)]}))}:void 0]),1032,["label","prop"])})),128))]})),_:1},8,["data"]),Object(a["gb"])(Object(a["n"])("div",s,[Object(a["q"])(k,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"page-sizes":[20,30,50,100,200],"page-size":h.pageSize,total:h.tableList.length,style:{"margin-top":"15px"},background:"",layout:"total, sizes, prev, pager, next, jumper"},null,8,["onSizeChange","onCurrentChange","page-size","total"])],512),[[a["cb"],h.tableList.length>0&&1==h.showPagination]]),1==h.showAdd?(Object(a["H"])(),Object(a["m"])("div",b,[Object(a["q"])(y,{size:"mini",class:"rowButton",onClick:t[0]||(t[0]=function(e){return f.addItem()})},{default:Object(a["fb"])((function(){return[d]})),_:1})])):Object(a["l"])("",!0)])],64)}n("b0c0"),n("a434");var h=n("1a0d"),f=n("1ca0"),m={name:"BaseTable",components:{Navi:h["a"]},data:function(){return{index:0,currentPage:1,pageSize:20,showQuery:"",showAdd:"",tableList:[],colsList:[],querList:[],rootUrl:"teach",showPagination:"",name:"",page:[]}},created:function(){var e=this.$store.state.routerName,t=this;Object(f["d"])().then((function(n){var a=JSON.parse(n.data.data);void 0!==a.ums.rootUrl&&""!==a.ums.rootUrl&&(t.rootUrl=a.ums.rootUrl),t.page=a.ums.page;for(var i=0;i<t.page.length;i++)e===t.page[i].title&&(t.name=t.page[i].name,t.colsList=t.page[i].colsList,t.showQuery=t.page[i].showQuery,t.querList=t.page[i].querList,t.showAdd=t.page[i].showAdd,t.showPagination=t.page[i].showPagination);var o={},r="/api/"+t.rootUrl+"/"+t.name;Object(f["b"])(r,o).then((function(e){t.tableList=e.data.data.tableList}))}))},methods:{getT:function(e){this.getXml(e)},getXml:function(e){var t=this;Object(f["d"])().then((function(n){var a=JSON.parse(n.data.data);void 0!==a.ums.rootUrl&&""!==a.ums.rootUrl&&(t.rootUrl=a.ums.rootUrl),t.page=a.ums.page;for(var i=0;i<t.page.length;i++)e===t.page[i].title&&(t.name=t.page[i].name,t.colsList=t.page[i].colsList,t.showQuery=t.page[i].showQuery,t.querList=t.page[i].querList,t.showAdd=t.page[i].showAdd,t.showPagination=t.page[i].showPagination);var o={},r="/api/"+t.rootUrl+"/"+t.name;Object(f["b"])(r,o).then((function(e){t.tableList=e.data.data.tableList}))}))},editRow:function(e){this.$router.push({path:"JumpForm",query:{id:e,name:this.name,method:"edit"}})},detailRow:function(e){this.$router.push({path:"JumpForm",query:{id:e,name:this.name,method:"detail"}})},deleteRow:function(e){for(var t=this,n="/api/"+this.rootUrl+"/deleteItem"+this.name,a=0;a<this.tableList;a++)this.tableList[a].id==e&&(this.index=a);var i={id:e};this.tableList.splice(this.index,1),Object(f["b"])(n,i).then((function(e){0==e.code?t.$message({message:"删除成功",type:"success"}):t.$message.error("删除失败")}))},query:function(){for(var e=this,t="/api/"+this.rootUrl+"/query"+this.name,n={},a=0;a<this.querList.length;a++){var i={},o=this.querList[a].name,r=this.querList[a].value;i[o]=r,Object.assign(n,i)}Object(f["b"])(t,n).then((function(t){e.tableList=t.data.tableList}))},addItem:function(){this.$router.push({path:"JumpForm",query:{id:"",name:this.name,method:"addItem"}})}}},O=n("d959"),j=n.n(O);const g=j()(m,[["render",p]]);t["default"]=g},fb6a:function(e,t,n){"use strict";var a=n("23e7"),i=n("861d"),o=n("e8b5"),r=n("23cb"),c=n("50c4"),l=n("fc6a"),u=n("8418"),s=n("b622"),b=n("1dde"),d=b("slice"),p=s("species"),h=[].slice,f=Math.max;a({target:"Array",proto:!0,forced:!d},{slice:function(e,t){var n,a,s,b=l(this),d=c(b.length),m=r(e,d),O=r(void 0===t?d:t,d);if(o(b)&&(n=b.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(b,m,O);for(a=new(void 0===n?Array:n)(f(O-m,0)),s=0;m<O;m++,s++)m in b&&u(a,s,b[m]);return a.length=s,a}})}}]);
//# sourceMappingURL=chunk-c43d450a.321a50f3.js.map