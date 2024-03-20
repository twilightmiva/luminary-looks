"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[22297],{84928:e=>{var l,o={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:l,storageKey:null}],type:"Pin",abstractKey:null};o.hash="cabaa35ed7d59dee006897bf3ef32e3d",e.exports=o},780679:(e,l,o)=>{o.d(l,{g:()=>i,t:()=>n});var t=o(667294);let a=(0,t.createContext)(null),n=a.Provider,i=()=>(0,t.useContext)(a)},458882:(e,l,o)=>{o.d(l,{l:()=>n,r:()=>i});var t=o(667294);let a=(0,t.createContext)(null),n=()=>(0,t.useContext)(a),i=a.Provider},667679:(e,l,o)=>{o.d(l,{Z:()=>n});var t=o(780679),a=o(458882);let n=()=>{let e=(0,t.g)(),l=(0,a.l)();return o=>{let{mobileOptions:t,desktopOptions:a,reason:n,attributionLabel:i,pinId:s}=o;e?e.showDesktopSignupModal({signupFlow:a?.modalType==="login"?{type:"login"}:{type:"signup"},reason:n,attributionLabel:i,...a?.modalOptions}):l&&l.showMobileSignupModal({reason:n,attributionLabel:i,headingType:t?.headingType,pinId:s})}}},815613:(e,l,o)=>{o.d(l,{Z:()=>j}),o(167912);var t,a=o(883119),n=o(112690),i=o(916117),s=o(898781),r=o(773285),d=o(667679),u=o(867820),_=o(52022),c=o(343341),h=o(50286),m=o(829407),p=o(19121),f=o(945698),g=o(927383),w=o(698330),b=o(201155),x=o(640064),y=o(785893);let P=({children:e,pulsar:l,testId:o})=>l.show?(0,y.jsx)(a.xu,{"data-test-id":o,position:"relative",children:(0,y.jsxs)(a.iP,{onTap:l.onClick,tapStyle:"none",children:[(0,y.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:e}),(0,y.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,y.jsx)(a.o3,{})})]})}):(0,y.jsx)(a.xu,{"data-test-id":o,children:e}),v=void 0!==t?t:t=o(84928);function j({auxData:e,disabled:l,disableLog:o,followEventType:t,id:j,inline:A,invertColors:k,isFollowed:z,isIdeaPin:C,isLegoEnabled:F,isSecondaryButton:L,isUserFollowButton:T,isUserMe:U,onFollow:S,onUnfollow:Z,pinKey:I,shouldUseLegoColors:D,showPulsar:E,size:H,textType:O="FollowFollowing",unfollowEventType:R,viewParameter:N,viewType:M,clientTrackingParams:B}){let W;let K=(0,s.ZP)(),G=(0,h.HG)(),{showToast:$}=(0,c.F9)(),V=(0,_.Z)(),X=(0,n.Z)(),Y=(0,d.Z)(),{checkExperiment:Q}=(0,r.F)(),q=(0,g.Z)(),J=(0,p.Z)(),ee=J&&J.isAuth,{unauthFollowUserId:el,setUnauthFollowUserId:eo}=(0,x.f)(),et=(0,w.mN)()(j),ea=et&&{imageMediumUrl:et.image_medium_url,username:et.username},en=(0,i.Z)(v,I),ei=en?.linkDomain,es=en?.nativeCreator,er=en?.originPinner,ed=en?.pinner;W=es||(ei?ei.officialUser:er||ed);let eu=ea??W;(0,m.Z)(()=>{!G&&ee&&el&&j&&el===j&&S(j)});let e_=q({fn:()=>{ee?z?(Z(j),o||X({event_type:R,view_type:M,view_parameter:N,object_id_str:j,aux_data:e,clientTrackingParams:B})):(S(j),T&&$(({hideToast:e})=>{let l=eu?.username?`/${eu.username}/`:"";return(0,y.jsx)(b.Z,{handleHide:e,href:l,imageUrl:eu?.imageMediumUrl||"",text:K.bt("Following! Their created Pins will show up in your home feed!", "Following! Their created Pins will show up in your home feed!", "followButton.follow.informationalToastText", undefined, true),userId:j})}),o||X({event_type:t,view_type:M,view_parameter:N,object_id_str:j,aux_data:e,clientTrackingParams:B})):((0,u.My)(`mweb_unauth_follow_button.tap.${String(M)}`),5===M&&26===t&&(0,u.My)("mweb_unauth_board_page_follow_button.tap"),(0,u.NC)(z?"press_profile_unfollow":"press_profile_follow"),V({action:"click",item:"board-follow-button"}),Y({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:C?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:G&&Q("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!G&&Q("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),G||eo(j??""),(0,u.NC)("clickthrough"))},modalHeader:(0,f.N4)({i18n:K,toFollow:!z})}),ec=!z&&!!E,eh=()=>{if(U)return K.bt("That's you!", "That's you!", "Follow button is disabled because this is you", undefined, true);if("AddRemove"===O)return z?K.bt("Remove", "Remove", "unfollowButton.removeText", undefined, true):K.bt("Add", "Add", "followButton.addText", undefined, true);let e="FollowUnfollow"===O?K.bt("Unfollow", "Unfollow", "unfollowButton.unfollowText", undefined, true):K.bt("Following", "Following", "Follow button label - followed state", undefined, true);return z?e:K.bt("Follow", "Follow", "Follow button label - unfollowed state", undefined, true)};return(0,y.jsx)(P,{pulsar:ec?{show:!0,onClick:e_}:{show:!1},testId:U||z?"board-unfollow-button":"board-follow-button",children:(0,y.jsx)(a.zx,{accessibilityLabel:eh(),color:D||"AddRemove"===O||!F&&L||z?"gray":"red",disabled:U||l,fullWidth:A,onClick:ec?void 0:({event:l})=>{l.preventDefault(),l.stopPropagation(),o||X({event_type:101,component:13672,element:11951,object_id_str:j,view_type:M,view_parameter:N,aux_data:e,clientTrackingParams:B}),e_()},selected:k?!z:D&&z||!!z&&L,size:H,text:eh()})})}},640064:(e,l,o)=>{o.d(l,{f:()=>s,w:()=>r});var t=o(667294),a=o(425288),n=o(785893);let{Provider:i,useHook:s}=(0,a.Z)("Session");function r({children:e}){let[l,o]=(0,t.useState)(void 0),a=(0,t.useCallback)(()=>o(void 0),[]),s=(0,t.useMemo)(()=>({unauthFollowUserId:l,setUnauthFollowUserId:o,removeUnauthFollowUserId:a}),[l,a]);return(0,n.jsx)(i,{value:s,children:e})}},987318:(e,l,o)=>{o.d(l,{H:()=>n,o:()=>a});var t=o(425288);let{Provider:a,useHook:n}=(0,t.Z)("LimitedLogin")},945698:(e,l,o)=>{o.d(l,{N4:()=>n,Wh:()=>t,hr:()=>a});let t=e=>e.bt("Log in to continue", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),a=e=>e.bt("You're almost there! Log in to access all of Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),n=({i18n:e,toFollow:l})=>l?e.bt("Log in to follow", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Log in to unfollow", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true)},927383:(e,l,o)=>{o.d(l,{Z:()=>s});var t=o(898781),a=o(50286),n=o(987318),i=o(945698);let s=()=>{let e=(0,t.ZP)(),l=(0,a.HG)(),{viewer:o,loginForMore:s,limitedLoginModalSubheader:r,limitedLoginModalNextLocation:d}=(0,n.H)(),u="LIMITED_LOGIN"===o.type;return u?({modalHeader:o,nextLocation:t})=>a=>{let n=null;a&&(a.nativeEvent&&a.nativeEvent instanceof Event?n=a:a.event&&(n=a.event)),n&&(n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation()),s?.setVisible(!0),r?.setText(o||(l?i.hr(e):i.Wh(e))),t&&d?.setRoute(t)}:({fn:e})=>e}},230903:(e,l,o)=>{o.d(l,{Z:()=>d});var t=o(883119),a=o(121151),n=o(898781),i=o(349700),s=o(50286),r=o(785893);function d({onDismiss:e,firstName:l,handleUnfollowUser:o}){let d=(0,n.ZP)(),u=(0,s.HG)(),_=(0,i.nk)(d.bt("Unfollow {{ firstName }}?", "Unfollow {{ firstName }}?", "unfollowUser.modal.header", undefined, true),{firstName:l}).join(""),c=d.bt("You will no longer be able to view their profile, Pins, boards, followers or following lists. They will not be notified.", "You will no longer be able to view their profile, Pins, boards, followers or following lists. They will not be notified.", "unFollowUser.modal.description", undefined, true),h=d.bt("Cancel", "Cancel", "unfollowUser.modal.cancel", undefined, true),m=d.bt("Unfollow", "Unfollow", "unfollowUser.modal.button.unfollow", undefined, true);return u?(0,r.jsx)(a.ZP,{accessibilityModalLabel:_,footer:(0,r.jsxs)(t.xu,{alignItems:"center",display:"flex",justifyContent:"end",marginEnd:-1,marginStart:-1,children:[(0,r.jsx)(t.xu,{padding:1,children:(0,r.jsx)(t.zx,{fullWidth:!0,onClick:e,size:"lg",text:h})}),(0,r.jsx)(t.xu,{padding:1,children:(0,r.jsx)(t.zx,{color:"red",fullWidth:!0,onClick:o,size:"lg",text:m})})]}),heading:_,onDismiss:e,role:"alertdialog",size:"md",children:(0,r.jsx)(t.xu,{"data-test-id":"unfollow-text",marginEnd:6,marginStart:6,children:(0,r.jsx)(t.xv,{children:c})})}):(0,r.jsxs)(a.ZP,{accessibilityModalLabel:_,mobileHideCloseIcon:!0,onDismiss:e,type:"unFollow_button",children:[(0,r.jsx)(t.xu,{alignItems:"center",display:"flex",paddingX:3,paddingY:5,children:(0,r.jsx)(t.X6,{accessibilityLevel:1,size:"500",children:_})}),(0,r.jsx)(t.xu,{marginBottom:4,marginEnd:4,marginStart:4,children:(0,r.jsx)(t.xv,{children:c})}),(0,r.jsxs)(t.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginBottom:8,children:[(0,r.jsx)(t.xu,{padding:1,children:(0,r.jsx)(t.zx,{fullWidth:!0,onClick:e,size:"md",text:h})}),(0,r.jsx)(t.xu,{padding:1,children:(0,r.jsx)(t.zx,{color:"red",fullWidth:!0,onClick:o,size:"md",text:m})})]})]})}},90326:(e,l,o)=>{o.d(l,{Ge:()=>d,JS:()=>i,OF:()=>x,P_:()=>s,Q_:()=>c,b8:()=>h,eR:()=>b,h2:()=>u,h6:()=>_});var t=o(214494),a=o(186656),n=o(735422);function i(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}let s=(e,l)=>({type:"USER_FOLLOW",payload:{id:e,value:l}}),r=(e,l)=>({type:"USER_BLOCK",payload:{id:e,value:l}}),d=({id:e,orbacSubjectId:l,blockSource:o,blockContext:a,logContextEvent:n})=>async i=>{i(r(e,!0));let s=await t.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:l,block_source:o,block_context:a}).callCreate().catch(()=>i(r(e,!1)));return n({event_type:54,object_id_str:e}),s},u=(e,l)=>async o=>{o(r(e,!1));let a=await t.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch(()=>o(r(e,!0)));return l({event_type:55,object_id_str:e}),a};function _(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}let c=(e,l)=>()=>{let o=t.Z.create("UserStateResource",{state:e,value:l});return o.callCreate()},h=(e,l,o)=>(t,i)=>{(0,a.Z)({url:"/v3/users/me/",method:"POST"}).then(()=>{o({event_type:48,object_id_str:i().session.userId}),e(),(0,n.Dm)()},l)},m=e=>e>=200&&e<400,p=(e,l="150x150")=>e&&`https://i.pinimg.com/${l}/${e.substring(0,2)}/${e.substring(2,4)}/${e.substring(4,6)}/${e}.jpg`||"",f=async(e,l,o)=>{let a=await t.Z.create("VIPResource",{upload_ids:[e]}).callGet();if(a.resource_response.data[e]){let t=a.resource_response.data[e],{status:n,signature:i}=t;if("processing"===n||"registered"===n)setTimeout(async()=>{f(e,l,o)},5e3);else if("succeeded"===n){let e=p(i);l(e)}else o()}else o()},g=(e,l,o,a,n)=>{let i=new FormData;return i.append("img",e),t.Z.create("VIPResource",{type:l}).callCreate().then(l=>{if(l.resource_response.data){let{upload_id:t,upload_url:i,upload_parameters:s}=l.resource_response.data,r=new XMLHttpRequest;r.open("POST",i,!0),r.onload=()=>{m(r.status)?(o(100),f(t,a,n)):n()},r.upload.onprogress=e=>{let l=Math.round(100*e.loaded/e.total);o(l)};let d=new FormData;for(let e in s)d.append(e,s[e]);d.append("file",e),r.send(d)}},()=>{n()})},w=e=>new Promise((l,o)=>{g(e,"pinimage",()=>{},e=>{l(e)},e=>{o(e)})}),b=e=>new Promise((l,o)=>{"string"==typeof e?e.startsWith("data")&&w(function(e,l=512){let o=e.split(";"),t=o[0].split(":")[1],a=o[1].split(",")[1],n=atob(a),i=[];for(let e=0;e<n.length;e+=l){let o=n.slice(e,e+l),t=Array(o.length);for(let e=0;e<o.length;e+=1)t[e]=o.charCodeAt(e);let a=new Uint8Array(t);i.push(a)}let s=new Blob(i,{type:t});return s}(e)).then(e=>l(e)):o("Invalid Image")}),x=e=>()=>(0,a.Z)({url:"/v3/register/exists/",data:{email:e}})},201155:(e,l,o)=>{o.d(l,{Z:()=>u});var t=o(883119),a=o(499128),n=o(898781),i=o(784590),s=o(50286),r=o(785893);function d({ideaPinImages:e}){let l=e.map((e,l)=>(0,r.jsx)(t.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:l}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,r.jsx)(t.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:e?.height??1,naturalWidth:e?.width??1,src:e?.url??""})},l));return(0,r.jsx)(t.kC,{justifyContent:"center",children:(0,r.jsx)(t.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[e.length],children:l})})}function u({handleHide:e,text:l,userId:o,href:u,imageUrl:_}){let c=(0,n.ZP)(),h=(0,s.HG)(),m=(0,i.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:o}}),p=Array.isArray(l)?l.join(" "):l;if(0===(m.data||[]).length)return(0,r.jsx)(a.ZP,{duration:5e3,href:u,onHide:e,text:p,thumbnail:_?{image:(0,r.jsx)(t.Ee,{alt:c.bt("Image of who you followed", "Image of who you followed", "userFollowingToast.thumbnail.userImage", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:_})}:void 0});let f=(m.data||[]).slice(0,3).map(e=>e.images?.[h?"236x":"170x"]),g=(0,r.jsx)(d,{ideaPinImages:f});return(0,r.jsx)(a.ZP,{_dangerouslySetThumbnail:g,duration:5e3,href:u,onHide:e,text:p})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/22297.en_GB-e3764ad5a38016de.mjs.map