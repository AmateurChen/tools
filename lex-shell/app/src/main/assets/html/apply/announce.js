!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={orderId:common.param("orderId")},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"componentDidMount",value:function(){MF.setTitle("客户声明及授权")}},{key:"next",value:function(){MF.navi("apply/pay?orderId="+this.state.orderId)}},{key:"render",value:function(){return React.createElement("div",{className:"bg-white"},React.createElement("div",{className:"text19 pl-2 pr-2 pt-2"},"一、贵公司已向本人提供保险条款，说明保险合同内容，特别提示并明确说明了免除或者减轻保险人责任的条款（包括责任免除条款、免赔额、免赔率、比例赔付或给付等）。",React.createElement("br",null),"二、本人已认真阅读并充分理解保险责任、责任免除、犹豫期、合同生效、合同解除、未成年人身故保险金限额、保险事故通知、保险金受益人的指定与变更等保险条款的各项概念、内容及其法律后果，以及投资连结保险、分红保险、万能保险等新型产品的产品说明书，本人自愿承担保单利益不确定的风险。",React.createElement("br",null),"三、本人及被保险人在投保书中的所有陈述和告知均完整、真实，已知悉各项投保资料如非本人亲笔签名，将对本保险合同效力产生影响。",React.createElement("br",null),"四、本人已知晓应真实、准确、完整填写投保各项内容，尤其是投被保险人的姓名、性别、生日、证件类型、证件号码、职业、联系电话及地址、投被保险人关系等，以上信息主要用于计算保费、核保、寄送保单和客户回访等，以便提供更优质的服务。如信息缺失、不实将会对本人利益产生不利影响，同时贵公司承诺未经本人同意，不会将本人信息用于公司和第三方机构的销售活动。",React.createElement("br",null),"五、本人及被保险人授权贵公司在必要时可随时向有关机构核实本人及被保险人、保险金受益人的基本信息或向被保险人就诊的医院或医师及社保、农合、健康管理中心等有关机构查询有关记录、诊断证明。本人和被保险人对此均无异议。",React.createElement("br",null),"六、本人授权贵公司委托本人开户银行对指定账户按照保险合同约定的方式、金额，划转首期、续期保险费及以转账方式将保险金、退保金、退费等给付转入指定账户，若本人指定账户或联系电话、联系地址等信息发生变更，及时至贵公司办理变更手续，如未及时通知贵公司变更，因此产生的相应不利后果由本人承担。",React.createElement("br",null),"七、本人已知悉电子投保申请确认书等投保资料不得作为收取现金的凭证，公司未授权保险营销员、保险中介机构（银行除外）收取1000元以上的现金保险费。公司在承保之前所收保费为预收保费，不作为是否同意承保的依据，如不符合承保条件，将如数退还。",React.createElement("br",null)),React.createElement("div",{style:{height:"120px"}}),React.createElement("div",{className:"bottom text18 tc-primary"},React.createElement("div",{className:"ml-0 mr-0",style:{width:"690px",textAlign:"right"},onClick:this.next.bind(this)},"支付信息"),React.createElement("div",{className:"ml-1 mr-2",style:{width:"30px"}},React.createElement("img",{className:"mt-3",style:{width:"27px",height:"39px"},src:"../images/blueright.png"}))))}}]),t}();$(document).ready(function(){ReactDOM.render(React.createElement(o,null),document.getElementById("root"))})}});