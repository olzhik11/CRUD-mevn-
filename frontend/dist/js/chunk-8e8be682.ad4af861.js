(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e8be682"],{"02b8":function(e,t,n){},"0f85":function(e,t,n){"use strict";n("02b8")},"61e9":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["cb"])("data-v-1a02a239");Object(r["D"])("data-v-1a02a239");var c={class:"registerPage"},o={class:"window"},s={class:"register"},u=Object(r["k"])("Sign Up");Object(r["B"])();var l=a((function(e,t,n,l,i,d){var b=Object(r["K"])("TheNavbar"),p=Object(r["K"])("BaseInput"),f=Object(r["K"])("BaseWorkButton"),j=Object(r["K"])("TheFooter");return Object(r["A"])(),Object(r["i"])(r["a"],null,[Object(r["l"])(b),Object(r["l"])("div",c,[Object(r["l"])("div",o,[Object(r["l"])("form",s,[Object(r["l"])(p,{class:"input",modelValue:i.user.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.user.username=e}),type:"text",placeholder:"Username"},null,8,["modelValue"]),Object(r["l"])(p,{class:"input",modelValue:i.user.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.user.password=e}),type:"text",placeholder:"Password"},null,8,["modelValue"]),Object(r["l"])(f,{color:e.three,class:"signUpButton",onClick:d.sendUser},{default:a((function(){return[u]})),_:1},8,["color","onClick"])])])]),Object(r["l"])(j)],64)})),i=n("1da1"),d=n("5530"),b=(n("96cf"),n("5502")),p=n("3ff8"),f=n("d669"),j=n("bc3a"),m=n.n(j),O={name:"RegisterPage",components:{TheFooter:f["a"],TheNavbar:p["a"]},data:function(){return{user:{username:"",password:""}}},computed:Object(d["a"])({},Object(b["c"])({one:function(e){return e.miscellaneous.style.BSweet},two:function(e){return e.miscellaneous.style.LSBrown},three:function(e){return e.miscellaneous.style.CBlue}})),methods:{sendUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("http://localhost:5000/user/register",e.user).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()}}};n("0f85");O.render=l,O.__scopeId="data-v-1a02a239";t["default"]=O}}]);
//# sourceMappingURL=chunk-8e8be682.ad4af861.js.map