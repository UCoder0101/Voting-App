import{b as e,d as t,h as o,_ as r,p as i,c as s}from"./0148e6d4.js";import"./e636a7c2.js";import"./09fab2e1.js";let a;const n=e(a||(a=(e=>e)`paper-dialog{padding-left:8px;padding-right:8px;width:440px;background-color:#fff}paper-dialog{z-index:9999}@media (max-width:480px){paper-dialog{padding:0;margin:0;height:100%;width:100%}}paper-spinner{padding:0;margin:0}.buttons{margin-left:0;padding-left:0;color:var(--app-accent-color);font-size:18px;padding-top:8px}.checkBox{margin-top:16px}paper-input{--paper-input-container-focus-color:var(--app-accent-color)}paper-checkbox{--paper-checkbox-checked-color:var(--app-accent-color);padding-top:8px}.postcodeWrongWard{color:var(--paper-red-a400)}`));let p,d,l,h,c,m,g,u,v,y=e=>e,b=class extends t{constructor(){super(),this.userSpinner=!1,this.opened=!1,this.smsCodeSent=!1}static get styles(){return[n]}render(){return o(p||(p=y` <paper-dialog id="dialog" with-backdrop> <div class="layout horizontal center-center"> ${0} </div> ${0} <form is="iron-form" id="form"> ${0} </form> <div class="buttons layout vertical"> <paper-button dialog-dismiss>${0}</paper-button> <paper-button autofocus @tap="${0}">${0}</paper-button> </div> </paper-dialog> `),this.smsCodeSent?o(d||(d=y`<h2>${0}</h2> `),this.localize("enterSmsCode")):o(l||(l=y`<h2>${0}</h2>`),this.localize("enterYourMobileNumber")),this.smsCodeSent?o(h||(h=y`<div>${0}</div>`),this.localize("enterSmsCodeDescription")):o(c||(c=y`<div> ${0} </div>`),this.localize("enterYourMobileNumberDescription")),this.smsCodeSent?o(m||(m=y` <paper-input id="smsCode" type="text" label="${0}" .value="${0}" minlength="4" allowed-pattern="[0-9]" .error-message="${0}"> </paper-input> `),this.localize("smsCode"),this.smsCode,this.smsCodeErrorMessage):o(g||(g=y` <paper-input id="yearOfBirth" type="text" minlength="4" maxlength="4" allowed-pattern="[0-9]" label="${0}"> </paper-input> <paper-input id="smsNumber" type="text" allowed-pattern="[0-9]" label="${0}" .value="${0}" minlength="6" .error-message="${0}"> </paper-input> `),this.localize("lowSecuritySmsLoginYearOfBirth"),this.localize("mobileNumber"),this.smsNumber,this.smsErrorMessage),this.localize("cancel"),this._validateAndSend,this.smsCodeSent?o(u||(u=y`${0}`),this.localize("sendSmsCode")):o(v||(v=y`${0}`),this.localize("sendPhoneNumber")))}firstUpdated(e){super.firstUpdated(e)}_resetCorrectArea(){setTimeout((()=>{this.correctAreaId=void 0,this.correctAreaName=void 0,this.close()}),100)}_loginCompleted(){this.onLoginFunction(),this.close()}open(e,t,o){this.onLoginFunction=o,this.areaId=e,this.areaName=t,this.userSpinner=!1,this.opened=!1,this.smsNumber="",this.$$("#dialog").open()}_validateAndSend(e){if(this.smsCodeSent)return this.smsCode=this.$$("#smsCode").value,this.smsCode?(fetch("/votes/sms_login",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({smsCode:this.smsCode})}).then((e=>e.json())).then((e=>{e&&!0===e.ok?this._loginCompleted():this.fire("oav-error",this.localize("error_not_authorized"))})).catch((()=>{this.fire("oav-error",this.localize("general_error"))})),!0):(this.fire("oav-error",this.localize("completeForm")),!1);{this.smsNumber=this.$$("#smsNumber").value;const e=this.$$("#yearOfBirth").value;let t;return e&&!isNaN(e)&&(t=parseInt(e)),!t||t<this.configFromServer.client_config.lowSecuritySmsLoginMinYearOfBirth||t>this.configFromServer.client_config.lowSecuritySmsLoginMaxYearOfBirth?(this.fire("oav-error",this.localize("lowSecuritySmsLoginAgeError")),!1):this.smsNumber?this.smsNumber.length>6?(fetch("/votes/send_sms_login_code",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({smsNumber:this.smsNumber})}).then((e=>e.json())).then((e=>{e&&!0===e.ok?this.smsCodeSent=!0:this.fire("oav-error",this.localize("error_not_authorized"))})).catch((()=>{this.fire("oav-error",this.localize("general_error"))})),!0):(this.fire("oav-error",this.localize("enterValidPhoneNumber")),!1):(this.fire("oav-error",this.localize("completeForm")),!1)}}close(){var e=this.$$("#dialog");e&&e.close(),this.opened=!1,this.userSpinner=!1}};r([i({type:Object})],b.prototype,"configFromServer",void 0),r([i({type:Number})],b.prototype,"correctAreaId",void 0),r([i({type:String})],b.prototype,"areaName",void 0),r([i({type:String})],b.prototype,"correctAreaName",void 0),r([i({type:String})],b.prototype,"smsNumber",void 0),r([i({type:Boolean})],b.prototype,"userSpinner",void 0),r([i({type:String})],b.prototype,"smsErrorMessage",void 0),r([i({type:String})],b.prototype,"smsCodeErrorMessage",void 0),r([i({type:String})],b.prototype,"submitText",void 0),r([i({type:Object})],b.prototype,"onLoginFunction",void 0),r([i({type:Number})],b.prototype,"areaId",void 0),r([i({type:String})],b.prototype,"smsCode",void 0),r([i({type:Boolean})],b.prototype,"opened",void 0),r([i({type:Boolean})],b.prototype,"smsCodeSent",void 0),b=r([s("oav-low-security-sms-login")],b);export{b as OavLowSecuritySmsLogin};
