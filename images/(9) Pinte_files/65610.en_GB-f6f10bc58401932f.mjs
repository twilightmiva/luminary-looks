"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[65610],{411938:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e,t,n=28){let r;if(!(e||{}).resurrection_info&&!(t||{}).resurrectionInfo)return!1;r=t?((t||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;let i=new Date,o=r?new Date(r):i;return o.setDate(o.getDate()+n),new Date().getTime()<o.getTime()}},88307:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(186656),i=n(867820),o=n(529195);async function a(e){let t=(0,o.i$)(),n=(0,o.nR)(),a=(0,o.di)(),s=t?t.map(({pageType:e,...t})=>t):null,l={is_register:e??!1};if(s&&(l.unauth_visited_pages=JSON.stringify(s)),n&&(l.invite_redemption=JSON.stringify(n)),a&&(l.paid_landing=JSON.stringify(a)),s||n||a){let e=await (0,r.Z)({url:"/v3/orientation/user_landing_signals/",method:"POST",data:l});(0,i.My)(`landing_signals.flush.${e.status}`),(0,o.z$)()}}},524172:(e,t,n)=>{n.d(t,{M:()=>m,Z:()=>v});var r=n(667294),i=n(366284),o=n(425288),a=n(83969),s=n(914772),l=n(773285),u=n(780280),_=n(867820),c=n(50286),d=n(785893);let g=["dweb_google_chrome_fedcm_eap_button_gesture","dweb_google_chrome_fedcm_eap_exempt_idp"],p=["mweb_google_chrome_fedcm_eap_button_gesture","mweb_google_chrome_fedcm_eap_exempt_idp"],f={dweb_google_chrome_fedcm_eap_exempt_idp:121,mweb_google_chrome_fedcm_eap_exempt_idp:121},{Provider:h,useMaybeHook:m}=(0,o.Z)("GoogleSignInApi"),b=()=>{let e=(0,c.HG)(),{checkExperiment:t}=(0,l.F)();return t(e?"web_google_disabled":"mweb_google_disabled").anyEnabled},y=()=>{let{userAgent:e}=(0,u.B)(),{browserName:t,platform:n}=e,r=t??"";return(0,i.G6)(r)||"ios"===n},w=(e,t,n)=>e.some(e=>{let r=f[e]||116;return n>=r&&t(e).anyEnabled}),P=()=>{let e=(0,c.HG)(),{checkExperiment:t}=(0,l.F)(),{userAgent:n}=(0,u.B)(),r=n.browserVersion?parseInt(n.browserVersion.split(".")[0],10):0,o=(0,i.i7)(n.browserName??"");return o&&(e&&w(g,t,r)||!e&&"android"===n.platform&&w(p,t,r))};function v({children:e}){let t=b(),n=y(),i=P(),o=(0,r.useRef)(null),l=(0,r.useRef)(new Set),g=(0,r.useRef)(new Set),p=(0,r.useRef)(null),{language:f}=(0,u.B)(),m=(0,c.HG)(),w=m?"dweb":"mweb",v=(0,r.useRef)(!1),S=(0,r.useCallback)(()=>{if(v.current)return;v.current=!0;let e=!1,t=()=>{let t=(0,a.Fm)();t&&!e&&(e=!0,(0,s.Z)({type:"loadScript",status:"success"}),(0,s.Z)({type:"apiClient",valid:!!t}),p.current=t,(0,a.OY)({autoSelect:!0,itpSupport:n,isFedCMEnabled:i},e=>{if((0,s.Z)({type:"response",valid:!!e}),!e)return;(0,_.My)(`${w}.google_sign_in.select_by.${e.select_by}`);let t=(0,a.PL)(e.select_by);if("SIGN_IN_WITH_GOOGLE_BUTTON"===t){let t=Array.from(l.current),n=t[t.length-1],r=o.current;n?n(e):r&&r(e)}else o.current?.(e)}),g.current.forEach(e=>{e()}),g.current.clear())};window.onGoogleLibraryLoad=()=>t(),(0,s.Z)({type:"loadScript",status:"start"}),(0,a.Px)(void 0,f).then(()=>{t()}).catch(()=>{})},[n,f,i,w]);(0,r.useEffect)(()=>{t?(l.current.clear(),g.current.clear()):S()},[t,S]);let N=(0,r.useRef)({ensureInit:(e,t)=>(S(),"button"===e?l.current.add(t):o.current=t,new Promise(e=>{let t=!!p.current;t?e():g.current.add(e)})),removeButtonCallback:e=>{l.current.delete(e)}});return(0,d.jsx)(h,{value:N.current,children:e})}},83969:(e,t,n)=>{n.d(t,{Fm:()=>a,OY:()=>l,PL:()=>_,Px:()=>s,mK:()=>c,ru:()=>u});var r=n(713930),i=n(966113),o=n(867820);let a=()=>window?.google?.accounts?.id,s=(e,t)=>(0,r.Z)("https://accounts.google.com/gsi/client"+(t?`?hl=${t}`:""),e?.unsafe?null:"GSI"),l=({autoSelect:e,itpSupport:t,isFedCMEnabled:n},r)=>{a()?.initialize({auto_select:e??!1,client_id:i.v3o,callback:r,cancel_on_tap_outside:!1,context:"use",itp_support:t,use_fedcm_for_prompt:n})},u=({buttonRef:e,isDesktop:t,locale:n,logo_alignment:r})=>{let i=a();if(i&&e.current){let t=e.current.offsetWidth;i.renderButton(e.current,{locale:n,size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px",logo_alignment:r,click_listener:()=>(0,o.EX)({event:"start",provider:"google"})})}else(0,o.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},_=e=>["auto","fedcm_auto"].includes(e)?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT",c=e=>{switch(e){case"SIGN_IN_WITH_GOOGLE_BUTTON":return"gsi_btn";case"ONE_TAP_PROMPT":return"onetap_btn";default:return"other"}}},45169:(e,t,n)=>{n.d(t,{E_:()=>u,Eh:()=>o,du:()=>l,yV:()=>a});var r=n(109322),i=n(116485);let o=(e,t)=>{if("DEPRECATED_CHECK_EXISTS"===t)return"facebook_id"in e&&"facebook"||"google_open_id_token"in e&&"google"||"line_id_token"in e&&"line"||"sso_id_token"in e&&"sso"||"email";if("DEPRECATED_CHECK_TRUTHY"===t)return e.facebook_id?"facebook":e.google_open_id_token?"google":e.line_id_token?"line":e.sso_id_token?"sso":"email";return e.type},a=e=>{let t=o(e,"DEPRECATED_CHECK_TRUTHY");return"google"===t?"google_one_tap":t},s=(e="")=>e in r.i5,l=e=>i.rT.includes(e)||i.ZR.has(e)||s(e),u={GOOGLE:"g",FACEBOOK:"fb",PINTEREST:"p",APPLE:"apl",LINE:"ln",UNKNOWN:"unk",SSO:"sso"}},914772:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(701563),i=n(867820);let o=e=>(0,i.dy)({event:e,provider:"google"}),a=e=>(0,r.RP)("google_autologin",e),s=e=>(0,r.M3)("google_autologin",e),l=e=>{switch(e.type){case"loadScript":"start"===e.status?(o("start"),o("load_script_start"),s("autoLoginGoogleStart")):"success"===e.status?o("load_script_success"):o("load_script_failure");break;case"apiClient":e.valid?(o("initialize_library"),s("autoLoginGoogleInitEnd")):(a("noAccountFound"),o("global_object_not_found"));break;case"response":e.valid?(o("receive_credential_response_from_provider"),(0,i.EX)({event:"receive_credential_response_from_provider",provider:"google"})):(a("noResponse"),(0,i.EX)({event:"receive_no_credential_response_from_provider",provider:"google"}));break;case"autologin":"start"===e.status?(o("pinterest_login_start"),(0,i.NC)("press_google_one_tap_other"),(0,r.M3)("google_autologin","autoLoginGoogleEnd"),(0,r.PA)("google_autologin")):("success"===e.status?o("pinterest_login_success"):o("pinterest_login_failure"),o("end"));break;case"manualLoginAttempt":(0,i.NC)(e.fromConnectButton?"press_google_one_tap_button":"press_google_one_tap"),(0,r.PA)("google_autologin")}}},383690:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(667294),i=n(773285);let o=()=>{let e=(0,i.F)();return(0,r.useCallback)(()=>{e.flush()},[e])}},701563:(e,t,n)=>{n.d(t,{M3:()=>h,PA:()=>m,RP:()=>f,gq:()=>g});var r=n(991067),i=n(790348),o=n(543059),a=n(638089),s=n(558775),l=n(729524),u=n(358864),_=n(985271);let c=({name:e,pwtStaticContext:t})=>{if(!_.Z||!(0,r.Z)())return null;let n={type:"stopwatch",name:e},i=[],o=!0;return{abort:e=>{o&&(o=!1,(0,s.Z)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{o&&i.push({label:e,timestamp:_.Z.now()})},stop:()=>{if(!o)return;o=!1;let e={type:"COMPLETE",traceId:(0,u.Z)(),startTime:0,endTime:_.Z.now(),spans:[],annotationMap:(0,l.Z)(i),binaryAnnotationMap:(0,a.ng)({metricId:n,pwtStaticContext:t})};(0,s.Z)({metricId:n,pwtStaticContext:t,result:e})}}},d={},g=(e,t)=>{t.forEach(t=>{d[t]=c({name:t,pwtStaticContext:e})})},p=e=>d[e],f=(e,t)=>{let n=p(e);if(n)try{n.abort(t)}catch(t){(0,i.H)("app_load_stopwatch_error",{name:e,result:"abort"})}},h=(e,t)=>{let n=p(e);n&&(n.annotate(t),(0,o.ZP)(`stopwatch_${e}_${t}`))},m=e=>{let t=p(e);if(t)try{t.stop()}catch(t){(0,i.H)("app_load_stopwatch_error",{name:e,result:"complete"})}}},729524:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{let t={};e.forEach(({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}});let n=Object.freeze({});return Object.keys(t).forEach(e=>{(t[e]||[]).forEach((t,r)=>{let i=r?`${e}_${r+1}`:e;n={...n,[i]:t}})}),n}},69642:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(667294),i=n(932046),o=n(867820);function a(){return(0,r.useCallback)(e=>{e.action&&e.event?(0,o.My)("pinner_conversion",{...e,type:e.type||"none",trigger:e.trigger||"other",referrer:(0,i.Z)()}):(0,o.My)("pinner_conversion.missing_tags")},[])}},348584:(e,t,n)=>{n.d(t,{D:()=>u,Z:()=>_});var r=n(667294),i=n(616550),o=n(826067),a=n(785893);let s=(0,r.createContext)(!1),l=()=>{let e=(0,i.TH)(),t=(0,i.k6)();return t.location.state?.isAppFactoryOAuth||((0,o.mB)(e.search).next??"").startsWith("/app-factory-oauth/")};function u({children:e}){let t=l(),[n,i]=(0,r.useState)(t);return(0,r.useEffect)(()=>{t&&i(!0)},[t]),(0,a.jsx)(s.Provider,{value:n,children:e})}function _(){return(0,r.useContext)(s)}},529195:(e,t,n)=>{n.d(t,{Cb:()=>U,Ff:()=>er,K7:()=>H,Lp:()=>R,MM:()=>Q,O0:()=>eo,OJ:()=>Z,PW:()=>ea,Rh:()=>j,S2:()=>B,Vd:()=>z,Yi:()=>X,Yy:()=>et,Z4:()=>L,ZN:()=>y,dc:()=>I,di:()=>D,i$:()=>S,iU:()=>G,nR:()=>T,oQ:()=>ei,t_:()=>P,z$:()=>$});var r=n(667294),i=n(214494),o=n(464232),a=n(911691),s=n(231486),l=n(226198),u=n(425288),_=n(844974),c=n(339363),d=n(867820),g=n(826067),p=n(829407),f=n(116485),h=n(332215),m=n(785893);let b=new Set([...a.Z,"UK"]),y=["utm_pai","utm_source","invite_code"],w=function(e){return{...e,ts:Date.now()}},P=()=>(0,_.qn)(f.tz,"");function v(e,t){let n;try{n=JSON.parse(e)}catch(e){n=t}return n}let S=()=>v(P(),[]),N=()=>v((0,_.qn)(o.s1,""),[]),O=()=>v((0,_.qn)(o.Vb,""),[]),E=({pinId:e,link:t,imageSignature:n,domain:r})=>{let i=[...O()],a=i.length,s=a?i[0].pinId:"";if(a>=f.eA&&i.pop(),!a||e!==s){let a=w({pinId:e,link:t,imageSignature:n,domain:r});(0,_.Nh)(o.Vb,JSON.stringify([a].concat(i)))}},L=(e,t)=>{let n=[...S()],r=n.length,i=r?n[0].path:"";if(!(r>=f.eA)&&(!r||e!==i)){let r=w({path:e,pageType:t});(0,_.Nh)(f.tz,JSON.stringify([r].concat(n)))}},A=()=>{let e=(0,_.qn)(o.ny,"");return v(e,[])},k=()=>parseInt((0,_.qn)(o.rN,0),10),C=()=>{let e=(0,_.qn)(f.dx,"");return v(e,[])},T=()=>{let e=(0,_.qn)(f.Lg,"");return v(e,null)},R=e=>{if(!e)return;let t=[...C()],n=w({inviteCode:e});(0,_.Nh)(f.Lg,JSON.stringify(n)),t.length>=f.eA||(0,_.Nh)(f.dx,JSON.stringify([n].concat(t)))},D=()=>{let e=(0,_.qn)(f.eV,"");return v(e,null)},B=(e,t)=>{if(!e)return;let n=w({...!!t&&{adImageUrl:t},campaignId:e});(0,_.Nh)(f.eV,JSON.stringify(n))},Z=()=>(0,_.qn)(f.fo,""),U=e=>{(0,_.Nh)(f.fo,e)},$=()=>{P()&&(0,_.L_)(f.tz),(0,_.qn)(o.ny)&&(0,_.L_)(o.ny),(0,_.qn)(o.Vb)&&(0,_.L_)(o.Vb),T()&&((0,_.L_)(f.Lg),(0,_.L_)(f.dx)),D()&&(0,_.L_)(f.eV),Z()&&(0,_.L_)(f.fo)},x=()=>{let e=S();return e.filter(e=>"closeup"===e.pageType)};function I(){return x().length}let M=({query:e,rs:t,scope:n,rg:r})=>{let i=[...A()],a=i.length,s=a?i[0].query:"";if(a>=f.eA&&i.pop(),!a||e!==s){let a=w({query:e,rs:t,scope:n,rg:r});(0,_.Nh)(o.ny,JSON.stringify([a].concat(i)))}},H=()=>({count:1,time:0}),G=()=>{try{let e=JSON.parse((0,_.qn)(o.SI)),{count:t,time:n}=e;if("number"==typeof t&&"number"==typeof n)return{count:t,time:n};throw Error("Invalid revisitation data")}catch(e){return H()}},z=e=>{(0,_.Nh)(o.SI,JSON.stringify(e))},F=(e,t,n)=>{if(e>=n)return`${n}+`;let r=e.toString();return e>t&&(r=`${Math.floor(e/t)*t}+`),r},q=e=>F(e,5,20),J=(e,t,n)=>t.reduce((t,n)=>(Array.isArray(e[n])&&(t[n+"Count"]=q(e[n].length)),t),n),W=e=>({...e,_updateUnauthUserAggregateDefinitions:function(){let{completedSearches:t,closeupPins:n,clickthroughPins:r,downloadedPinsCount:i}=e;e.isQUS=Number(t.length>=1||n.length>=3||r.length>=1||i>=1)},_getDaysSinceLastRevisitation:function(){let{revisitationState:t}=e,{time:n}=t,r=new Date,i=new Date(n||new Date),o=Number(((r.getTime()-i.getTime())/864e5).toFixed(2)),a=F(Math.floor(o),7,84);return[o,a]},getStatslogData:function(){let t=J(e,[],{isQUS:e.isQUS.toString(),isAllowedCountry:e.isAllowedCountry.toString(),daysSinceLastRevisitationBucket:e.daysSinceLastRevisitationBucket}),n=J(e,["closeupPins","completedSearches","clickthroughPins","savedPins","invitesRedeemed"],{revisitationCount:q(e.revisitationState.count||1),downloadedPinsCount:q(e.downloadedPinsCount)});return{base:t,counts:n}}}),K=({isAuthenticated:e,countryFromIp:t,countryFromHostName:n})=>{let r={isAuthenticated:Number(e),countryFromIp:t||"",countryFromHostName:n||"",closeupPins:[],completedSearches:[],clickthroughPins:[],downloadedPinsCount:0,savedPins:[],invitesRedeemed:[],isQUS:0,revisitationState:H(),daysSinceLastRevisitation:0,daysSinceLastRevisitationBucket:"0",isAllowedCountry:Number(!(b.has(t||"")||b.has(n||"")))};if(e||!r.isAllowedCountry)return Object.freeze(W(r));r.closeupPins=x(),r.completedSearches=A(),r.clickthroughPins=O(),r.downloadedPinsCount=k(),r.savedPins=N(),r.invitesRedeemed=C(),r.revisitationState=G();let i=W(r),[o,a]=i._getDaysSinceLastRevisitation();return r.daysSinceLastRevisitation=o,r.daysSinceLastRevisitationBucket=a,i._updateUnauthUserAggregateDefinitions(),Object.freeze(i)},{Provider:V,useHook:j}=(0,u.Z)("UnauthUserStateContext");function Y(e,t){let{isAuthenticated:n,countryFromIp:r,countryFromHostName:i,isAllowedCountry:o}=e;if(n||!o)return e;switch(t.type){case"UPDATE":break;case"ADD_UNAUTH_COMPLETED_SEARCH":M(t.payload);break;case"ADD_UNAUTH_CLICKTHROUGH_PIN":E(t.payload);break;default:return e}return K({isAuthenticated:n,countryFromIp:r,countryFromHostName:i})}function Q({children:e,initialState:t}){let[n,i]=(0,r.useReducer)(Y,t,K);(0,p.Z)(()=>{i({type:"UPDATE"})});let o=(0,r.useMemo)(()=>({unauthUserState:n,unauthUserStateDispatch:i}),[n,i]);return(0,m.jsx)(V,{value:o,children:e})}function X(){let e=i.Z.create("UnauthUserDataResource");return new Promise((t,n)=>{e.callGet().then(e=>{let r=e.resource_response.data,i=!!s.U2(l.x3);return r?((0,h.Wn)(r.medium_image_url)&&(r.medium_image_url=""),(0,d.My)(`mweb.unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_${i?"true":"false"}`),t(r)):((0,d.My)(`mweb.unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_${i?"true":"false"}`),n({}))}).catch(e=>{if(e&&e.message){let t=e.message.replace(/\s/g,"_").toLowerCase();(0,d.My)(`mweb.unauth.personalized_login.fetch_user_info.error.${t}`)}else(0,d.My)("mweb.unauth.personalized_login.fetch_user_info.error.unknown");return n(e)})})}function ee({i18n:e,location:t}){let n;let r=t.pathname.startsWith("/signup"),i=t.pathname.startsWith("/login");if(!r&&!i)return{showPLPBanner:!1,pinForBanner:null};try{n=JSON.parse((0,c.qn)(f.KH))}catch(e){n=[]}if(n&&n.length>0){let t=n[0];if(t)return t.bannerCopy=e.bt("More ideas like this are waiting", "More ideas like this await", "page banner with pin image that was signed up from", undefined, true),{showPLPBanner:!!t.image,pinForBanner:t}}return{showPLPBanner:!1,pinForBanner:null}}let et=e=>e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null;function en({i18n:e,location:t}){let n=t.state?.next||et(t);if(n){let t=n.indexOf("?"),r=(0,g.mB)(n.substring(t));if(r.url&&r.media)return{showPLPBanner:!0,pinForBanner:{image:{url:(0,g.Jx)(r.media),height:1,width:1},pinDescription:r.description,bannerCopy:e.bt("Save this idea and discover more inspiration like it.", "Save this idea and discover more inspiration like it.", "page banner with pin image that was signed up from", undefined, true)}}}return{showPLPBanner:!1,pinForBanner:null}}function er({i18n:e,location:t}){return en({i18n:e,location:t}).showPLPBanner?en({i18n:e,location:t}):ee({i18n:e,location:t}).showPLPBanner?ee({i18n:e,location:t}):{showPLPBanner:!1,pinForBanner:null}}let ei=(e,t)=>e?`https://i.pinimg.com/${t||"474x"}/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",eo=e=>e?`https://i.pinimg.com/75x75/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",ea=e=>e?`https://i.pinimg.com/236x/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:""},332215:(e,t,n)=>{function r(e){return!!e?.is_matured_new_user}n.d(t,{IR:()=>a,V0:()=>r,Wn:()=>o,xT:()=>i});let i=e=>!!e&&2===e.login_state,o=e=>!!(e&&e.match(/\/static\/images\/user\/default_\d+\.png$/));function a(e){return!e||void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/65610.en_GB-f6f10bc58401932f.mjs.map