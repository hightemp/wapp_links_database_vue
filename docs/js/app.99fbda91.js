(function(){"use strict";var e={763:function(e,t,o){var a=o(963),l=o(252),s=o(577);const n={class:"wrapper"},i={class:"left-panel"},r=["onClick","title"],d={key:0,class:"badge"},m={class:"btn btn-import",title:"Импортировать"},c=(0,l._)("i",{class:"bi bi-box-arrow-in-up"},null,-1),p={class:"table-panel"},u={class:"table"},f=["onInput","value"],b=["onClick","onDblclick"],h=["href"];function w(e,t,o,a,w,v){const y=(0,l.up)("edit_window"),_=(0,l.up)("repo_window"),g=(0,l.up)("saved_toast"),I=(0,l.up)("loader");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",n,[(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(w.aMenu,((t,o)=>((0,l.wg)(),(0,l.iD)("button",{key:o,class:"btn btn-menu",onClick:e=>v.fnClickLeftMenu(t),title:t.title},[(0,l._)("i",{class:(0,s.C_)("bi "+t.icon)},null,2),"save"==t.id&&e.iUnsavedChanges?((0,l.wg)(),(0,l.iD)("span",d,(0,s.zw)(e.iUnsavedChanges),1)):(0,l.kq)("",!0)],8,r)))),128)),(0,l._)("button",m,[c,(0,l._)("label",null,[(0,l._)("input",{type:"file",ref:"file_selector",onChange:t[0]||(t[0]=(...e)=>v.fnFileImportChange&&v.fnFileImportChange(...e))},null,544)])])]),(0,l._)("div",p,[(0,l._)("div",u,[(0,l._)("div",{class:"table-row header",style:(0,s.j5)(v.sHeaderStyles)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.oStruct,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"cell header"},[(0,l.Uk)((0,s.zw)(e.label)+" ",1),(0,l._)("input",{type:"text",class:"form-control",onInput:e=>v.fnFilterInput(e,t),value:v.oTable.filter[t]},null,40,f)])))),128))],4),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.aRows,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:(0,s.C_)("table-row "+(w.oSelectedItem&&w.oSelectedItem.id==e.id?"active":"")),style:(0,s.j5)(v.sHeaderStyles),onClick:t=>v.fnItemClick(e),onDblclick:t=>v.fnDblItemClick(e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.oStruct,((t,o)=>((0,l.wg)(),(0,l.iD)("div",{key:o,class:"cell"},[e[o]&&"url"==o?((0,l.wg)(),(0,l.iD)("a",{key:0,href:e[o]},(0,s.zw)(e[o]),9,h)):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l.Uk)((0,s.zw)(e[o]),1)],64))])))),128))],46,b)))),128))])])]),(0,l.Wm)(y,{title:"Редактирование",form_name:w.sTableName,table_name:w.sTableName},null,8,["form_name","table_name"]),(0,l.Wm)(_),(0,l.Wm)(g),(0,l.Wm)(I)],64)}var v=o(907);function y(e){return e[0].split(" ")}function _(e){return{[e]:{get(){return this.$store.state[e]},set(t){this.$store.commit("fnUpdateVar",{sName:e,sV:t})}}}}function g(e){var t={},o=e.split(" ");for(var a of o)t=Object.assign(t,_(a));return t}function I(e,t){var o="data:text/json;charset=utf-8,"+encodeURIComponent(t),a=document.createElement("A");a.setAttribute("href",o),a.setAttribute("download",`${e}_${(new Date).getTime()}.json`),a.click(),a.remove()}const k={key:0},R=(0,l._)("div",{class:"overlay"},null,-1),S={class:"modal show"},F={class:"modal-dialog"},D={class:"modal-content"},C={class:"modal-header"},V={class:"modal-title"},x={class:"modal-body"},U={class:"modal-footer"};function L(e,t,o,a,n,i){const r=(0,l.up)("forms");return i.bShow?((0,l.wg)(),(0,l.iD)("div",k,[R,(0,l._)("div",S,[(0,l._)("div",F,[(0,l._)("div",D,[(0,l._)("div",C,[(0,l._)("h5",V,(0,s.zw)(o.title),1),(0,l._)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...e)=>i.fnClose&&i.fnClose(...e))})]),(0,l._)("div",x,[(0,l.Wm)(r,{form_name:o.form_name},null,8,["form_name"])]),(0,l._)("div",U,[(0,l._)("button",{type:"button",class:"btn btn-secondary",onClick:t[1]||(t[1]=(...e)=>i.fnClose&&i.fnClose(...e))},"Отмена"),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>i.fnSave&&i.fnSave(...e))},"Сохранить")])])])])])):(0,l.kq)("",!0)}function N(e,t,o,a,s,n){const i=(0,l.up)("form_component");return(0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.oItems,((e,t)=>((0,l.wg)(),(0,l.j4)(i,{key:e,item:e,onInput:e=>n.fnInput(e,t),value:n.fnGetFieldValue(this.form_name,t)},null,8,["item","onInput","value"])))),128)}const W={key:0,class:"mb-3"},T={class:"form-label"},E=["placeholder"],H={key:1,class:"mb-3"},O={class:"form-label"},z=["placeholder"],P={key:2,class:"mb-3"},q={class:"form-label"},A=["placeholder"],Y={key:3,class:"mb-3"},J={class:"form-label"},j=["placeholder"],G={key:4,class:"mb-3"},K={class:"form-label"},M=["placeholder"],$={key:5,class:"mb-3"},Z={class:"form-label"},B=["placeholder"],Q={key:6,class:"mb-3"},X={class:"form-label"},ee=(0,l._)("input",{type:"file",class:"form-control"},null,-1),te={key:7,class:"mb-3"},oe={class:"form-label"},ae=["placeholder"],le={key:8,class:"mb-3"},se={class:"form-label"},ne=["placeholder"],ie={key:9,class:"mb-3"},re={class:"form-label"},de=["placeholder"],me={key:10,class:"mb-3"},ce={class:"form-label"},pe=["placeholder","min","max"],ue={key:11,class:"mb-3"},fe={class:"form-label"},be=["placeholder"],he={key:12,class:"mb-3"},we={class:"form-label"},ve=["placeholder"],ye={key:13,class:"mb-3"},_e={class:"form-label"},ge=["placeholder"],Ie={key:14,class:"mb-3"},ke={class:"form-label"},Re=["placeholder"],Se={key:15,class:"mb-3"},Fe={class:"form-label"},De=["placeholder"],Ce={key:16,class:"mb-3"},Ve={class:"form-label"},xe=["value"],Ue={key:17,class:"mb-3"},Le={class:"form-label"},Ne=["value"],We={key:18,class:"mb-3"},Te={class:"form-label"},Ee=["value"];function He(e,t,o,n,i,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,["text"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",W,[(0,l._)("label",T,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[0]||(t[0]=e=>r.mValue=e)},null,8,E),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"textarea"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",H,[(0,l._)("label",O,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("textarea",{class:"form-control",rows:"10",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[1]||(t[1]=e=>r.mValue=e)},null,8,z),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"email"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("label",q,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"email",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[2]||(t[2]=e=>r.mValue=e)},null,8,A),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"color"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",Y,[(0,l._)("label",J,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"color",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[3]||(t[3]=e=>r.mValue=e)},null,8,j),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"date"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",G,[(0,l._)("label",K,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"date",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[4]||(t[4]=e=>r.mValue=e)},null,8,M),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"datetime-local"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",$,[(0,l._)("label",Z,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"datetime-local",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[5]||(t[5]=e=>r.mValue=e)},null,8,B),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"file"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",Q,[(0,l._)("label",X,(0,s.zw)(r.oItem.label),1),ee])):(0,l.kq)("",!0),"month"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",te,[(0,l._)("label",oe,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"month",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[6]||(t[6]=e=>r.mValue=e)},null,8,ae),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"number"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",le,[(0,l._)("label",se,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[7]||(t[7]=e=>r.mValue=e)},null,8,ne),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"password"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",ie,[(0,l._)("label",re,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"password",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[8]||(t[8]=e=>r.mValue=e)},null,8,de),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"range"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",me,[(0,l._)("label",ce,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"range",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[9]||(t[9]=e=>r.mValue=e),min:r.oItem.min,max:r.oItem.max},null,8,pe),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"search"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",ue,[(0,l._)("label",fe,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"search",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[10]||(t[10]=e=>r.mValue=e)},null,8,be),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"tel"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",he,[(0,l._)("label",we,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"tel",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[11]||(t[11]=e=>r.mValue=e)},null,8,ve),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"time"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",ye,[(0,l._)("label",_e,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"time",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[12]||(t[12]=e=>r.mValue=e)},null,8,ge),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"url"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",Ie,[(0,l._)("label",ke,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"url",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[13]||(t[13]=e=>r.mValue=e)},null,8,Re),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"week"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",Se,[(0,l._)("label",Fe,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("input",{type:"week",class:"form-control",placeholder:r.oItem.placeholder,"onUpdate:modelValue":t[14]||(t[14]=e=>r.mValue=e)},null,8,De),[[a.nr,r.mValue]])])):(0,l.kq)("",!0),"checkbox_list"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",Ce,[(0,l._)("label",Ve,(0,s.zw)(r.oItem.label),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.oItem.items,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":t[15]||(t[15]=e=>r.mValue=e),value:e.value},null,8,xe),[[a.e8,r.mValue]]),(0,l.Uk)((0,s.zw)(e.label),1)])])))),128))])):(0,l.kq)("",!0),"radio_list"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",Ue,[(0,l._)("label",Le,(0,s.zw)(r.oItem.label),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.oItem.items,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"radio","onUpdate:modelValue":t[16]||(t[16]=e=>r.mValue=e),value:e.value},null,8,Ne),[[a.G2,r.mValue]]),(0,l.Uk)((0,s.zw)(e.label),1)])])))),128))])):(0,l.kq)("",!0),"select"==r.oItem.type?((0,l.wg)(),(0,l.iD)("div",We,[(0,l._)("label",Te,(0,s.zw)(r.oItem.label),1),(0,l.wy)((0,l._)("select",{class:"form-control","onUpdate:modelValue":t[17]||(t[17]=e=>r.mValue=e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.oItem.items,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e.value},(0,s.zw)(e.label),9,Ee)))),128))],512),[[a.bM,r.mValue]])])):(0,l.kq)("",!0)],64)}var Oe={props:["item","value"],emits:["input"],computed:{oItem(){return this.item},mValue:{get(){return this.value},set(e){this.$emit("input",e)}}}},ze=o(744);const Pe=(0,ze.Z)(Oe,[["render",He]]);var qe=Pe,Ae={props:["form_name"],components:{form_component:qe},computed:{oItems(){return this.$store.state.oStructure[this.form_name]}},methods:{fnGetFieldValue(e,t){return this.$store.getters.fnGetFieldValue(e,t)},fnInput(e,t){this.$store.commit("fnUpdateFormVar",{sFormName:this.form_name,sFieldName:t,mV:e})}}};const Ye=(0,ze.Z)(Ae,[["render",N]]);var Je=Ye,je={props:["title","form_name","table_name"],components:{forms:Je},computed:{bShow(){return this.$store.state.oEditWindow[this.form_name].window_show}},methods:{...(0,v.OI)(y`fnHideEditWindow fnEditWindowSave`),fnClose(){this.fnHideEditWindow(this.form_name)},fnSave(){this.fnEditWindowSave({sTableName:this.table_name,sFormName:this.form_name}),this.fnHideEditWindow(this.form_name)}}};const Ge=(0,ze.Z)(je,[["render",L]]);var Ke=Ge;const Me=(0,l._)("div",{class:"block-overlay"},null,-1),$e={id:"modal-ask-api-key",class:"modal show",tabindex:"-1"},Ze={class:"modal-dialog"},Be={class:"modal-content"},Qe=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title"},"Данные репозитория")],-1),Xe={class:"modal-body",style:{height:"500px","overflow-y":"scroll"}},et={class:"modal-ask-api_list_buttons"},tt=(0,l._)("div",null,null,-1),ot={class:"mb-3"},at=(0,l._)("label",{for:"",class:"form-label"},"Логин",-1),lt=(0,l._)("option",{value:"github"},"github",-1),st=(0,l._)("option",{value:"webdav"},"webdav",-1),nt=[lt,st],it={class:"mb-3"},rt=(0,l._)("label",{for:"",class:"form-label"},"Название",-1),dt={class:"mb-3"},mt=(0,l._)("label",{for:"",class:"form-label"},"Логин",-1),ct={class:"mb-3"},pt=(0,l._)("label",{for:"",class:"form-label"},"Репозиторий",-1),ut={class:"mb-3"},ft=(0,l._)("label",{for:"",class:"form-label"},"API Ключ",-1),bt={class:"mb-3"},ht=(0,l._)("label",{for:"",class:"form-label"},"URL",-1),wt={class:"mb-3"},vt=(0,l._)("label",{for:"",class:"form-label"},"Пользователь",-1),yt={class:"mb-3"},_t=(0,l._)("label",{for:"",class:"form-label"},"Пароль",-1),gt={class:"modal-ask-api_list_buttons"},It=(0,l._)("div",null,null,-1),kt=(0,l._)("i",{class:"bi bi-box-arrow-down"},null,-1),Rt=[kt],St=(0,l._)("i",{class:"bi bi-box-arrow-in-up"},null,-1),Ft=(0,l._)("i",{class:"bi bi-trash"},null,-1),Dt=[Ft],Ct=(0,l._)("i",{class:"bi bi-plus-lg"},null,-1),Vt=[Ct],xt={class:"list-repo-item_desc"},Ut={class:"list-repo-item_title"},Lt={class:"list-repo-item_type"},Nt={class:"list-repo-item_name"},Wt=(0,l._)("b",null,"login:",-1),Tt=(0,l._)("b",null,"repo:",-1),Et=(0,l._)("b",null,"key:",-1),Ht=(0,l._)("b",null,"url:",-1),Ot=(0,l._)("b",null,"username:",-1),zt=(0,l._)("b",null,"password:",-1),Pt={style:{display:"flex","align-items":"start"}},qt=["onClick"],At=(0,l._)("i",{class:"bi bi-pencil"},null,-1),Yt=[At],Jt=["onClick"],jt=(0,l._)("i",{class:"bi bi-trash"},null,-1),Gt=[jt],Kt=(0,l._)("div",{style:{width:"32px",height:"29px"}},null,-1),Mt=(0,l._)("div",{style:{width:"32px",height:"29px"}},null,-1),$t=["onClick"],Zt=(0,l._)("i",{class:"bi bi-star-fill"},null,-1),Bt=[Zt],Qt={class:"modal-footer"};function Xt(e,t,o,n,i,r){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",null,[Me,(0,l._)("div",$e,[(0,l._)("div",Ze,[(0,l._)("div",Be,[Qe,(0,l._)("div",Xe,[null!==i.iEditIndex?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",et,[tt,(0,l._)("div",null,[(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>r.fnCancelRepo&&r.fnCancelRepo(...e))},"Отмена"),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>r.fnSaveRepo&&r.fnSaveRepo(...e))},"Сохранить")])]),(0,l._)("div",ot,[at,(0,l.wy)((0,l._)("select",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>i.sFromType=e)},nt,512),[[a.bM,i.sFromType]])]),(0,l._)("div",it,[rt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=t=>e.sFormName=t)},null,512),[[a.nr,e.sFormName]])]),"github"==i.sFromType?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",dt,[mt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>i.sFormLogin=e)},null,512),[[a.nr,i.sFormLogin]])]),(0,l._)("div",ct,[pt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=e=>i.sFormRepo=e)},null,512),[[a.nr,i.sFormRepo]])]),(0,l._)("div",ut,[ft,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=e=>i.sFormKey=e)},null,512),[[a.nr,i.sFormKey]])])],64)):(0,l.kq)("",!0),"webdav"==i.sFromType?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",bt,[ht,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[7]||(t[7]=e=>i.sFormURL=e)},null,512),[[a.nr,i.sFormURL]])]),(0,l._)("div",wt,[vt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[8]||(t[8]=t=>e.sFormUsername=t)},null,512),[[a.nr,e.sFormUsername]])]),(0,l._)("div",yt,[_t,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[9]||(t[9]=t=>e.sFormPassword=t)},null,512),[[a.nr,e.sFormPassword]])])],64)):(0,l.kq)("",!0)],64)):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",gt,[It,(0,l._)("div",null,[(0,l._)("button",{class:"btn btn-secondary",title:"Экспортировать",onClick:t[10]||(t[10]=(...e)=>r.fnExport&&r.fnExport(...e))},Rt),(0,l._)("button",{class:"btn btn-import btn-secondary",title:"Импортировать",onClick:t[12]||(t[12]=(...e)=>r.fnImport&&r.fnImport(...e))},[St,(0,l._)("label",null,[(0,l._)("input",{type:"file",ref:"file_selector",onChange:t[11]||(t[11]=(...e)=>r.fnFileImportChange&&r.fnFileImportChange(...e))},null,544)])]),(0,l._)("button",{class:"btn btn-danger",title:"Очистить все",onClick:t[13]||(t[13]=(...e)=>r.fnCleanRepo&&r.fnCleanRepo(...e))},Dt),(0,l._)("button",{class:"btn btn-success",title:"Добавить",onClick:t[14]||(t[14]=(...e)=>r.fnNewRepo&&r.fnNewRepo(...e))},Vt)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.aReposList,((t,o)=>((0,l.wg)(),(0,l.iD)("div",{key:o,class:(0,s.C_)("list-repo-item "+(e.iSelectedRepoIndex==o?"active":""))},[t?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",xt,[(0,l._)("div",Ut,[(0,l._)("div",Lt,(0,s.zw)(t.type),1),(0,l._)("div",Nt,(0,s.zw)(t.name),1)]),"github"==t.type?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",null,[Wt,(0,l.Uk)(" "+(0,s.zw)(t.login),1)]),(0,l._)("div",null,[Tt,(0,l.Uk)(" "+(0,s.zw)(t.repo),1)]),(0,l._)("div",null,[Et,(0,l.Uk)(" "+(0,s.zw)(t.key),1)])],64)):(0,l.kq)("",!0),"webdav"==t.type?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",null,[Ht,(0,l.Uk)(" "+(0,s.zw)(t.url),1)]),(0,l._)("div",null,[Ot,(0,l.Uk)(" "+(0,s.zw)(t.username),1)]),(0,l._)("div",null,[zt,(0,l.Uk)(" "+(0,s.zw)(t.password),1)])],64)):(0,l.kq)("",!0)]),(0,l._)("div",Pt,["localstorage"!=t.type?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("button",{class:"btn btn-success",onClick:e=>r.fnEditRepo(o),title:"Редактировать"},Yt,8,qt),(0,l._)("button",{class:"btn btn-danger",onClick:e=>r.fnRemoveRepo(o),title:"Удалить"},Gt,8,Jt)],64)):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[Kt,Mt],64)),(0,l._)("button",{class:"btn btn-info",onClick:e=>r.fnSelectRepo(o),title:"Выбрать"},Bt,8,$t)])],64)):(0,l.kq)("",!0)],2)))),128))],64))]),(0,l._)("div",Qt,[(0,l._)("button",{class:"btn btn-success",onClick:t[15]||(t[15]=e=>r.fnAcceptRepo())},"Выбрать")])])])])],512)),[[a.F8,e.bShowRepoWindow]])}var eo={name:"AskAPIWindow",components:{},computed:{...(0,v.rn)(y`iSelectedRepoIndex bShowRepoWindow`),...(0,v.Se)(y`aReposList`)},data(){return{iEditIndex:null,sFormLogin:"",sFormRepo:"",sFormKey:"",sFormURL:"",sFromType:"github"}},methods:{...(0,v.OI)(y`fnReposRemove fnReposSelect fnReposClean fnReposUpdate`),...(0,v.nv)(y`fnPrepareRepo fnExportRepos fnImportRepos`),fnSaveRepo(){if(this.sFormName){var e={name:this.sFormName,login:this.sFormLogin,repo:this.sFormRepo,key:this.sFormKey,type:this.sFromType,url:this.sFormURL,username:this.sFormUsername,password:this.sFormPassword};this.fnReposUpdate({iIndex:this.iEditIndex,oObj:e}),this.iEditIndex=null}else alert("Надо заполнить поле - Название")},fnNewRepo(){this.iEditIndex=-1,this.sFormName="",this.sFormLogin="",this.sFormRepo="",this.sFormKey="",this.sFormType="github",this.sFormURL="",this.sFormUsername="",this.sFormPassword=""},fnEditRepo(e){this.iEditIndex=e;var t=this.aReposList[this.iEditIndex];this.sFormName=t.name,this.sFormLogin=t.login,this.sFormRepo=t.repo,this.sFormKey=t.key,this.sFormType=t.type,this.sFormURL=t.url,this.sFormUsername=t.username,this.sFormPassword=t.password},fnRemoveRepo(e){this.fnReposRemove(e)},fnSelectRepo(e){this.fnReposSelect(e)},fnCleanRepo(){this.fnReposClean()},fnCancelRepo(){this.iEditIndex=null},fnAcceptRepo(){if(!this.aReposList[this.iSelectedRepoIndex])return alert("Нужно выбрать репозиторий");this.fnPrepareRepo()},fnExport(){this.fnExportRepos()},fnImport(){let e=this.$refs.file_selector.files[0],t=new FileReader;var o=this;t.readAsText(e),t.onload=function(){o.fnImportDatabase(t.result)},t.onerror=function(){console.error(t.error)}},fnFileImportChange(){this.fnImport()}},created(){}};const to=(0,ze.Z)(eo,[["render",Xt]]);var oo=to;const ao={class:"toast-container position-fixed top-0 end-0 p-3"},lo={key:0,class:"toast fade show",role:"alert","aria-live":"assertive","aria-atomic":"true"},so=(0,l._)("div",{class:"toast-header"},[(0,l._)("strong",{class:"me-auto"},"Сохранено"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),no=(0,l._)("div",{class:"toast-body"}," Данные были сохранены ",-1),io=[so,no];function ro(e,t,o,a,s,n){return(0,l.wg)(),(0,l.iD)("div",ao,[e.bShowSaveToast?((0,l.wg)(),(0,l.iD)("div",lo,io)):(0,l.kq)("",!0)])}var mo={name:"SavedToast",components:{},computed:{...g("bShowSaveToast")},data(){return{}},watch:{bShowSaveToast(e,t){e&&setTimeout((()=>{this.bShowSaveToast=!1}),2e3)}}};const co=(0,ze.Z)(mo,[["render",ro]]);var po=co;const uo={class:"loader"},fo=(0,l._)("div",{class:"center"},[(0,l._)("div",{class:"lds-dual-ring"})],-1),bo=[fo];function ho(e,t,o,s,n,i){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",uo,bo,512)),[[a.F8,e.bShowLoader]])}var wo={computed:{...(0,v.rn)(y`bShowLoader`)}};const vo=(0,ze.Z)(wo,[["render",ho]]);var yo=vo,_o={name:"App",components:{edit_window:Ke,repo_window:oo,saved_toast:po,loader:yo},computed:{...g("bShowRepoWindow bShowSaveToast sPassword"),...(0,v.rn)(y`iUnsavedChanges`),sHeaderStyles(){return{display:"grid","grid-template-columns":"1fr ".repeat(this.iStructLength)}},iStructLength(){return Object.keys(this.oStruct).length},oStruct(){return this.$store.state.oStructure["table"]},oTable(){return this.$store.state.oDatabase["table"]},iMaxPages(){return Math.ceil(this.aRows.length/this.iPageCount)},aRows(){var e=this.oTable.data.filter((e=>{var t=!0;for(var o in this.oTable.filter)console.log(this.oTable.filter[o]),this.oTable.filter[o]&&(console.log(this.oTable.filter[o]),t=t&&~e[o].indexOf(this.oTable.filter[o]));return t}));return e},aSlicedRows(){var e=this.aRows.slice((this.sPage-1)*this.iPageCount,this.sPage*this.iPageCount);return e}},data(){return{aMenu:[{id:"repo-window",title:"Выбрать репозиторий",icon:"bi-person-fill"},{id:"save",title:"Сохранить",icon:"bi-arrow-up-square"},{id:"add",title:"Добавить",icon:"bi-plus-lg"},{id:"edit",title:"Редактировать",icon:"bi-pencil"},{id:"remove",title:"Удалить",icon:"bi-trash"},{id:"export",title:"Экспортировать",icon:"bi-box-arrow-down"}],oSelectedItem:null,sTableName:"table"}},methods:{...(0,v.OI)(y`fnLoadRepos fnShowEditWindow fnRemoveFromTable`),...(0,v.nv)(y`fnSaveDatabase fnExportDatabase fnImportDatabase`),fnCopyToClipboard(e){navigator.clipboard.writeText(e)},fnFilterInput(e,t){this.$store.commit("fnUpdateFilter",{sTableName:this.sTableName,sName:t,sV:e.target.value})},fnClickLeftMenu(e){"repo-window"==e.id&&(this.bShowRepoWindow=!0),"save"==e.id&&this.fnSaveAll(),"add"==e.id&&this.fnAddClick(),"edit"==e.id&&this.fnEditClick(),"remove"==e.id&&this.fnRemoveClick(),"export"==e.id&&this.fnExport()},fnItemClick(e){this.oSelectedItem=e},fnDblItemClick(e){this.fnShowEditWindow({sFormName:this.sTableName,oItem:this.oSelectedItem})},fnAddClick(){this.fnShowEditWindow({sFormName:this.sTableName,oItem:{}})},fnEditClick(){this.oSelectedItem?this.fnShowEditWindow({sFormName:this.sTableName,oItem:this.oSelectedItem}):alert("Нужно выбрать")},fnRemoveClick(){this.oSelectedItem?this.fnRemoveFromTable({sTableName:this.sTableName,oItem:this.oSelectedItem}):alert("Нужно выбрать")},fnSaveAll(){this.fnSaveDatabase(),this.bShowSaveToast=!0},fnExport(){this.fnExportDatabase()},fnImport(){let e=this.$refs.file_selector.files[0],t=new FileReader;var o=this;t.readAsText(e),t.onload=function(){o.fnImportDatabase(t.result)},t.onerror=function(){console.error(t.error)}},fnFileImportChange(){this.fnImport()}},created(){var e=this;this.fnLoadRepos(),document.addEventListener("keydown",(t=>{t.ctrlKey&&83===t.keyCode&&(t.preventDefault(),e.fnSaveAll())}));const t=new URL(window.location),{searchParams:o}=t;o.get("title")&&this.fnShowEditWindow({sFormName:this.sTableName,oItem:{name:o.get("title"),url:o.get("text")?o.get("text"):o.get("url")}})}};const go=(0,ze.Z)(_o,[["render",w]]);var Io=go,ko=o(473),Ro=o(478),So=o(207);class Fo{static octokit=null;static oSHA={};static webdav=null;static oRepoItem=null;static fnInit(e){Fo.oRepoItem=e,"github"==e.type&&Fo.fnInitGit(),"webdav"==e.type&&Fo.fnInitWebdav(),e.type}static fnInitGit(){Fo.octokit=new ko.v({auth:Fo.oRepoItem.key})}static fnInitWebdav(){Fo.webdav=(0,Ro.createClient)(Fo.oRepoItem.url,{username:Fo.oRepoItem.username,password:Fo.oRepoItem.password})}static fnReadFileJSON(e){return new Promise(((t,o)=>{this.fnReadFile(e).then((({sData:e})=>{t(JSON.parse(e))})).catch((e=>{o(e)}))}))}static fnReadFile(e){return"localstorage"==Fo.oRepoItem.type?Fo.fnReadFileLocalStorage(e):"github"==Fo.oRepoItem.type?Fo.fnReadFileGithub(e):"webdav"==Fo.oRepoItem.type?Fo.fnReadFileWebdav(e):void 0}static fnWriteFileJSON(e,t){return this.fnWriteFile(e,JSON.stringify(t,null,4))}static fnWriteFile(e,t){return"localstorage"==Fo.oRepoItem.type?Fo.fnWriteFileLocalStorage(e,t):"github"==Fo.oRepoItem.type?Fo.fnWriteFileGithub(e,t):"webdav"==Fo.oRepoItem.type?Fo.fnWriteFileWebdav(e,t):void 0}static fnCreateDir(e){if("webdav"==Fo.oRepoItem.type)return Fo.fnCreateDirWebdav(e)}static fnCreateDirWebdav(e){return new Promise(((t,o)=>{_l(">>>",e),Fo.webdav.createDirectory(e),t()}))}static fnReadFileLocalStorage(e){return new Promise((async(t,o)=>{var a=localStorage.getItem(e);t({sData:a,sSHA:""})}))}static fnReadFileWebdav(e){Fo.oRepoItem;return new Promise((async(t,o)=>{try{var a=await Fo.webdav.getFileContents(e),l=new TextDecoder("utf-8"),s=l.decode(a);Fo.oSHA[e]="",t({sData:s,sSHA:""})}catch(n){console.error(n),o(n)}}))}static fnReadFileGithub(e){return new Promise((async(t,o)=>{var a=Fo.oRepoItem;return console.log("read",a),e=e.replace(/^\/+/,""),Fo.octokit.rest.repos.getContent({owner:a.login,repo:a.repo,path:e}).then((({data:o})=>{var a=(0,So.Jx)(o.content);Fo.oSHA[e]=o.sha,console.log(Fo.oSHA),t({sData:a,sSHA:o.sha})})).catch((e=>{console.error(e),o(e)}))}))}static fnWriteFileLocalStorage(e,t){return new Promise((async(o,a)=>{localStorage.setItem(e,t),o()}))}static fnWriteFileGithub(e,t,o=null){return new Promise((async(a,l)=>{var s=Fo.oRepoItem;return console.log("write",s),e=e.replace(/^\/+/,""),Fo.octokit.rest.repos.createOrUpdateFileContents({owner:s.login,repo:s.repo,path:e,sha:o||Fo.oSHA[e],message:Fo.fnGetUpdateMessage(),content:(0,So.cv)(t)}).then((()=>{a()})).catch((e=>{console.error(e),l(e)}))}))}static fnWriteFileWebdav(e,t){return new Promise((async(o,a)=>{Fo.oRepoItem;return new Promise((async(o,a)=>{try{var l=new TextEncoder,s=l.encode(t);await Fo.webdav.putFileContents(e,s,{contentLength:!1,overwrite:!0}),o()}catch(n){a(n)}}))}))}static fnGetUpdateMessage(){return"update: "+new Date}}const Do="links-database";var Co=(0,v.MT)({state(){return{bShowRepoWindow:!0,aDefaultRepoList:[{type:"localstorage",name:"Локальное хранилище"}],aReposList:[],iSelectedRepoIndex:null,bShowLoader:!1,bShowSaveToast:!1,sPassword:"",oStructure:{table:{category:{label:"Категория",type:"text"},name:{label:"Название",type:"text"},url:{label:"URL",type:"text"},description:{label:"Описание",type:"textarea"}}},oDatabase:{table:{last_index:100,data:[],selection_id:null,filter:{category:"",name:"",url:"",description:""}}},oEditWindow:{table:{window_show:!1,edit_item:{}}},oForms:{table:{category:"",name:"",url:"",description:""}},iUnsavedChanges:0,sMode:""}},mutations:{fnUpdateFormVar(e,{sFormName:t,sFieldName:o,mV:a}){e.oForms[t][o]=a},fnUpdateDatabaseVar(e,{sTableName:t,sVarName:o,mV:a}){e.oDatabase[t][o]=a},fnUpdateVar(e,{sName:t,sV:o}){e[t]=o},fnUpdateFilter(e,{sTableName:t,sName:o,sV:a}){e.oDatabase[t].filter[o]=a},fnReposRemove(e,t){e.aReposList.splice(t-e.aDefaultRepoList.length,1),localStorage.setItem("aReposList",JSON.stringify(e.aReposList))},fnReposSelect(e,t){e.iSelectedRepoIndex=t},fnReposClean(e){e.aReposList=[],localStorage.setItem("aReposList",JSON.stringify(e.aReposList))},fnReposUpdate(e,{iIndex:t,oObj:o}){-1==t?e.aReposList.push(o):e.aReposList.splice(t-e.aDefaultRepoList.length,1,o),localStorage.setItem("aReposList",JSON.stringify(e.aReposList))},fnLoadRepos(e){try{e.aReposList=JSON.parse(localStorage.getItem("aReposList")||"[]")}catch(t){}},fnUpdateDatabase(e,t){e.oDatabase=t},fnHideRepoWindow(e){e.bShowRepoWindow=!1},fnShowRepoWindow(e){e.bShowRepoWindow=!0},fnShowLoader(e){e.bShowLoader=!0},fnHideLoader(e){e.bShowLoader=!1},fnHideEditWindow(e,t){e.oEditWindow[t].window_show=!1},fnShowEditWindow(e,{sFormName:t,oItem:o}){for(var a in e.oEditWindow[t].window_show=!0,e.oEditWindow[t].edit_item=o,e.oForms[t])e.oForms[t][a]=a in o?o[a]:""},fnEditWindowSave(e,{sTableName:t,sFormName:o}){for(var a in e.oForms[o])e.oEditWindow[o].edit_item[a]=e.oForms[o][a];e.oEditWindow[o].edit_item.id||(e.oEditWindow[o].edit_item.id=++e.oDatabase[t]["last_index"],e.oDatabase[t]["data"].push(e.oEditWindow[o].edit_item)),e.iUnsavedChanges++},fnRemoveFromTable(e,{sTableName:t,oItem:o}){e.oDatabase[t]["data"]=e.oDatabase[t]["data"].filter((e=>e.id!=o.id)),e.iUnsavedChanges++}},actions:{fnExportDatabase({commit:e,state:t,dispatch:o,getters:a}){I("links-database",JSON.stringify(t.oDatabase,null,4))},fnImportDatabase({commit:e,state:t,dispatch:o,getters:a},l){e("fnUpdateDatabase",JSON.parse(l))},fnExportRepos({commit:e,state:t,dispatch:o,getters:a}){I("links-repos",JSON.stringify(t.aReposList,null,4))},fnImportRepos({commit:e,state:t,dispatch:o,getters:a},l){e("fnUpdateRepos",JSON.parse(l))},fnPrepareRepo({commit:e,state:t,dispatch:o,getters:a}){e("fnHideRepoWindow"),Fo.fnInit(a.oCurrentRepo),o("fnLoadDatabase")},fnSaveDatabase({commit:e,state:t}){return Fo.fnWriteFileJSON(Do,t.oDatabase,t.sPassword).then((()=>{t.iUnsavedChanges=0})).catch((()=>{Fo.fnReadFile(Do).then((()=>Fo.fnWriteFileJSON(Do,t.oDatabase,t.sPassword).then((()=>{t.iUnsavedChanges=0}))))}))},fnLoadDatabase({commit:e,state:t}){e("fnShowLoader"),Fo.fnReadFileJSON(Do,t.sPassword).then((t=>{if(!t)throw"Cannot destructure property";e("fnUpdateDatabase",t),e("fnHideLoader")})).catch((o=>{if(console.error(o),(o+"").match(/Malformed UTF-8 data/))return alert("Не правильный пароль"),void e("fnShowRepoWindow");(o+"").match(/Cannot destructure property/)||(o+"").match(/Not Found/)?Fo.fnWriteFileJSON(Do,t.oDatabase,t.sPassword).then((()=>{Fo.fnReadFileJSON(Do,t.sPassword).then((t=>{e("fnUpdateDatabase",t),e("fnHideLoader")}))})):e("fnShowRepoWindow")}))},fnDropDatabase({commit:e,state:t}){localStorage.setItem(Do,null)},fnGetFieldValue:({state:e,getters:t})=>(e,o)=>t.fnGetFieldValue(e,o)},getters:{fnGetFieldValue:e=>(t,o)=>e.oForms[t][o],aReposList(e){return e.aDefaultRepoList.concat(e.aReposList)},oCurrentRepo(e,t){return t.aReposList[e.iSelectedRepoIndex]},fnFilterGroups:e=>t=>e.oDatabase.tasks_groups.filter((e=>~e.name.indexOf(t)))}}),Vo=o(205);(0,Vo.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,a.ri)(Io).use(Co).mount("#app")}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,a,l,s){if(!a){var n=1/0;for(m=0;m<e.length;m++){a=e[m][0],l=e[m][1],s=e[m][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||n>=s)&&Object.keys(o.O).every((function(e){return o.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<n&&(n=s));if(i){e.splice(m--,1);var d=l();void 0!==d&&(t=d)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,l,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,s,n=a[0],i=a[1],r=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(r)var m=r(o)}for(t&&t(a);d<n.length;d++)s=n[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(m)},a=self["webpackChunkwapp_links_database_vue"]=self["webpackChunkwapp_links_database_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(763)}));a=o.O(a)})();
//# sourceMappingURL=app.99fbda91.js.map