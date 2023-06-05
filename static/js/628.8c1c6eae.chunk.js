"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[628],{628:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var o,i,r,a,s,p,l,c,f,x,d=e(433),u=e(439),g=e(791),h=e(168),m=e(444),A=e(291),b=m.ZP.div(o||(o=(0,h.Z)(["\n  margin: 0 auto;\n"]))),Z=m.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  height: 460px;\n  background-image: url(","),\n    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);\n  background-repeat: no-repeat;\n  background-position: top 28px right 36px, top 0 right 0;\n\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"])),A),w=m.ZP.div(r||(r=(0,h.Z)(["\n  display: block;\n  margin: 20px;\n  padding: 0;\n"]))),y=m.ZP.img(a||(a=(0,h.Z)(["\n  display: block;\n"]))),j=m.ZP.div(s||(s=(0,h.Z)(["\n  position: relative;\n  margin-top: 116px;\n  margin-bottom: 20px;\n  /* top: 110px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),k=m.ZP.img(p||(p=(0,h.Z)(["\n  display: block;\n  width: 80px;\n  height: 80px;\n  z-index: 100;\n\n  border: 8px solid #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50%;\n"]))),v=m.ZP.div(l||(l=(0,h.Z)(["\n  position: absolute;\n  top: 40%;\n  width: 380px;\n  height: 8px;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),E=m.ZP.p(c||(c=(0,h.Z)(["\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n"]))),S=m.ZP.p(f||(f=(0,h.Z)(["\n  margin-bottom: 26px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n"]))),Y=m.ZP.button(x||(x=(0,h.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 196px;\n  height: 50px;\n  border: none;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  /* identical to box height */\n\n  text-transform: uppercase;\n"]))),P=e(338),Q=e(184);var C,B,I,N=function(n){var t=n.user,e=(0,g.useState)(!1),o=(0,u.Z)(e,2),i=o[0],r=o[1],a=(0,g.useState)(t.followers),s=(0,u.Z)(a,2),p=s[0],l=s[1];(0,g.useEffect)((function(){fetch("https://647a0c79a455e257fa643dfd.mockapi.io/users").then((function(n){return n.json()})).then((function(n){console.log(n),l(t.followers)})).catch((function(n){console.error(n)}))}),[t.followers]);var c={backgroundColor:i?"#5CD3A8":""};return(0,Q.jsx)(b,{children:(0,Q.jsxs)(Z,{children:[(0,Q.jsx)(w,{children:(0,Q.jsx)(y,{src:P,alt:"logo"})}),(0,Q.jsxs)(j,{children:[(0,Q.jsx)(k,{src:t&&t.avatar,alt:t&&t.name}),(0,Q.jsx)(v,{})]}),(0,Q.jsxs)(E,{children:[parseInt(t.tweets.match(/\d+/))," tweets"]}),(0,Q.jsxs)(S,{children:[parseInt(p.toLocaleString().match(/\d+/))," followers"]}),(0,Q.jsx)(Y,{type:"button",onClick:function(){l(i?function(n){return"string"===typeof n?parseInt(n.match(/\d+/))-1:"number"===typeof n?n-1:n}:function(n){return"string"===typeof n?parseInt(n.match(/\d+/))+1:"number"===typeof n?n+1:n}),r((function(n){return!n}))},className:i?"following":"",style:c,children:i?"Following":"Follow"})]})})},q=m.ZP.div(C||(C=(0,h.Z)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),R=m.ZP.ul(B||(B=(0,h.Z)(["\n  overflow: auto;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n"]))),T=m.ZP.button(I||(I=(0,h.Z)(["\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: #ff6c00;\n  border-radius: 20px;\n  color: white;\n  padding: 15px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n"])));var z=function(){var n=(0,g.useState)([]),t=(0,u.Z)(n,2),e=t[0],o=t[1],i=(0,g.useState)(1),r=(0,u.Z)(i,2),a=r[0],s=r[1];return(0,g.useEffect)((function(){fetch("https://647a0c79a455e257fa643dfd.mockapi.io/users?page=".concat(a,"&limit=3")).then((function(n){if(!n.ok)throw new Error("Rate limit exceeded");return n.json()})).then((function(n){o(1===a?(0,d.Z)(n):function(t){return[].concat((0,d.Z)(t),(0,d.Z)(n))})})).catch((function(n){console.error(n)}))}),[a]),(0,Q.jsxs)(q,{children:[(0,Q.jsx)(R,{children:e.map((function(n){return(0,Q.jsx)("li",{children:(0,Q.jsx)(N,{user:n})},n.id)}))}),(0,Q.jsx)(T,{type:"button",onClick:function(){s((function(n){return n+1}))},children:"Load More"})]})}},338:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg=="},291:function(n,t,e){n.exports=e.p+"static/media/popup.032662a2a907475127d7.png"}}]);
//# sourceMappingURL=628.8c1c6eae.chunk.js.map