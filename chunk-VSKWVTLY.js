import{A as Y,B as M,C as K,D as J,E as Q,F as P,G as _e,H as ve,J as ye,K as Ce,L as A,M as c,N as ee,O as Ve,T as te,a,b as l,c as ce,d as de,e as he,f as fe,g as O,h as x,i as h,j as _,k as pe,l as f,m as u,n as ge,o as me,p as D,q,r as z,s as o,t as Z,u as b,v as p,w as X,x as g,y as m}from"./chunk-ABFHQCJF.js";var Ie=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(Z),o(q))}}static{this.\u0275dir=u({type:i})}}return i})(),Xe=(()=>{class i extends Ie{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=me(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,features:[p]})}}return i})(),Se=new _("");var Ye={provide:Se,useExisting:x(()=>H),multi:!0};function Ke(){let i=ee()?ee().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Je=new _(""),H=(()=>{class i extends Ie{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ke())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(Z),o(q),o(Je,8))}}static{this.\u0275dir=u({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&Y("input",function(d){return r._handleInput(d.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(d){return r._compositionEnd(d.target.value)})},features:[P([Ye]),p]})}}return i})();var Ne=new _(""),Oe=new _("");function xe(i){return i!=null}function Pe(i){return ve(i)?de(i):i}function ke(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Re(i,e){return e.map(t=>t(i))}function Qe(i){return!i.validate}function Ge(i){return i.map(e=>Qe(e)?e:t=>e.validate(t))}function et(i){if(!i)return null;let e=i.filter(xe);return e.length==0?null:function(t){return ke(Re(t,e))}}function re(i){return i!=null?et(Ge(i)):null}function tt(i){if(!i)return null;let e=i.filter(xe);return e.length==0?null:function(t){let n=Re(t,e).map(Pe);return fe(n).pipe(he(ke))}}function se(i){return i!=null?tt(Ge(i)):null}function De(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function it(i){return i._rawValidators}function nt(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function R(i,e){return Array.isArray(i)?i.includes(e):i===e}function be(i,e){let t=ie(e);return ie(i).forEach(r=>{R(t,r)||t.push(r)}),t}function Me(i,e){return ie(e).filter(t=>!R(i,t))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},C=class extends G{get formDirective(){return null}get path(){return null}},N=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},rt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},$t=l(a({},rt),{"[class.ng-submitted]":"isSubmitted"}),Te=(()=>{class i extends T{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(N,2))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&X("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[p]})}}return i})(),je=(()=>{class i extends T{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(C,10))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&X("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[p]})}}return i})();var E="VALID",k="INVALID",v="PENDING",F="DISABLED",V=class{},j=class extends V{constructor(e,t){super(),this.value=e,this.source=t}},I=class extends V{constructor(e,t){super(),this.pristine=e,this.source=t}},S=class extends V{constructor(e,t){super(),this.touched=e,this.source=t}},y=class extends V{constructor(e,t){super(),this.status=e,this.source=t}};function Be(i){return(L(i)?i.validators:i)||null}function st(i){return Array.isArray(i)?re(i):i||null}function Ue(i,e){return(L(e)?e.asyncValidators:i)||null}function ot(i){return Array.isArray(i)?se(i):i||null}function L(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function at(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new O(1e3,"");if(!n[t])throw new O(1001,"")}function lt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new O(1002,"")})}var B=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=A(()=>this.statusReactive()),this.statusReactive=b(void 0),this._pristine=A(()=>this.pristineReactive()),this.pristineReactive=b(!0),this._touched=A(()=>this.touchedReactive()),this.touchedReactive=b(!1),this._events=new ce,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return c(this.statusReactive)}set status(e){c(()=>this.statusReactive.set(e))}get valid(){return this.status===E}get invalid(){return this.status===k}get pending(){return this.status==v}get disabled(){return this.status===F}get enabled(){return this.status!==F}get pristine(){return c(this.pristineReactive)}set pristine(e){c(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return c(this.touchedReactive)}set touched(e){c(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new S(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAsPending(e={}){this.status=v;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new j(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===v)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new j(this.value,t)),this._events.next(new y(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Pe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(k)?k:E}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=st(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ot(this._rawAsyncValidators)}},U=class extends B{constructor(e,t,n){super(Be(t),Ue(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){lt(this,!0,e),Object.keys(e).forEach(n=>{at(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var oe=new _("CallSetDisabledState",{providedIn:"root",factory:()=>ae}),ae="always";function ut(i,e){return[...e.path,i]}function He(i,e,t=ae){Le(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),dt(i,e),ft(i,e),ht(i,e),ct(i,e)}function Ae(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ct(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Le(i,e){let t=it(i);e.validator!==null?i.setValidators(De(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=nt(i);e.asyncValidator!==null?i.setAsyncValidators(De(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ae(e._rawValidators,r),Ae(e._rawAsyncValidators,r)}function dt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&We(i,e)})}function ht(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&We(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function We(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ft(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function pt(i,e){i==null,Le(i,e)}function gt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function mt(i){return Object.getPrototypeOf(i.constructor)===Xe}function _t(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function vt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===H?t=s:mt(s)?n=s:r=s}),r||n||t||null}var yt={provide:C,useExisting:x(()=>le)},w=Promise.resolve(),le=(()=>{class i extends C{get submitted(){return c(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=A(()=>this.submittedReactive()),this.submittedReactive=b(!1),this._directives=new Set,this.ngSubmit=new D,this.form=new U({},re(t),se(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){w.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),He(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){w.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){w.then(()=>{let n=this._findContainer(t.path),r=new U({});pt(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){w.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){w.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),_t(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(o(Ne,10),o(Oe,10),o(oe,8))}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&Y("submit",function(d){return r.onSubmit(d)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[P([yt]),p]})}}return i})();function Ee(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Fe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ct=class extends B{constructor(e=null,t,n){super(Be(t),Ue(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ee(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ee(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Vt={provide:N,useExisting:x(()=>ue)},we=Promise.resolve(),ue=(()=>{class i extends N{constructor(t,n,r,s,d,Ze){super(),this._changeDetectorRef=d,this.callSetDisabledState=Ze,this.control=new Ct,this._registered=!1,this.name="",this.update=new D,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=vt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),gt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){He(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){we.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Ce(n);we.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ut(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(C,9),o(Ne,10),o(Oe,10),o(Se,10),o(ye,8),o(oe,8))}}static{this.\u0275dir=u({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[P([Vt]),p,ge]})}}return i})(),$e=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Dt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=f({type:i})}static{this.\u0275inj=h({})}}return i})();var qe=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:oe,useValue:t.callSetDisabledState??ae}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=f({type:i})}static{this.\u0275inj=h({imports:[Dt]})}}return i})();var W=class i{user="";password="";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=pe({type:i,selectors:[["app-inicio"]],standalone:!0,features:[_e],decls:14,vars:2,consts:[[1,"container"],[1,"form-group"],["for","user"],["type","text","id","user","aria-describedby","userHelp","placeholder","Username",1,"form-control",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","placeholder","Contrase\xF1a",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary"]],template:function(t,n){t&1&&(g(0,"div",0)(1,"form")(2,"h2"),M(3,"Iniciar Sesion"),m(),g(4,"div",1)(5,"label",2),M(6,"Usuario"),m(),g(7,"input",3),Q("ngModelChange",function(s){return J(n.user,s)||(n.user=s),s}),m()(),g(8,"div",1)(9,"label",4),M(10,"Contrase\xF1a"),m(),g(11,"input",5),Q("ngModelChange",function(s){return J(n.password,s)||(n.password=s),s}),m()(),g(12,"button",6),M(13,"Enviar datos"),m()()()),t&2&&(z(7),K("ngModel",n.user),z(4),K("ngModel",n.password))},dependencies:[qe,$e,H,Te,je,ue,le],styles:["form[_ngcontent-%COMP%]{padding:10px}"]})};var Mt=[{path:"",component:W}],$=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=f({type:i});static \u0275inj=h({imports:[te.forChild(Mt),te]})};var ze=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=f({type:i});static \u0275inj=h({imports:[Ve,$]})};export{ze as InicioModule};