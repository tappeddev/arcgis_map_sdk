"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7994],{18486:(e,t,n)=>{n.d(t,{Hq:()=>Z,Mk:()=>m,P_:()=>F,Qp:()=>j,VO:()=>M,_D:()=>R,kZ:()=>A,kr:()=>B,nF:()=>C,tB:()=>N,ut:()=>L,vF:()=>D,zD:()=>v});n(91957);var i,r,s=n(70375),a=n(61681),o=n(17321),l=n(96926),c=n(90472),u=n(91772),h=n(67666),p=n(89542),f=n(14685);function m(e,t,n){return!(0,c.Up)(e,t,n)}function d(e,t,n){const i=m(e,t,n);if(i&&!(0,c.kR)())throw new s.Z("rasterprojectionhelper-project","projection engine is not loaded");return i}(r=i||(i={}))[r.None=0]="None",r[r.North=1]="North",r[r.South=2]="South",r[r.Both=3]="Both";const y=(e,t,n,i=0)=>{if(1===n[0])return[0,0];let r=1,s=-1,a=1,o=-1;for(let t=0;t<e.length;t+=2)isNaN(e[t])||(r=r>e[t]?e[t]:r,s=s>e[t]?s:e[t],a=a>e[t+1]?e[t+1]:a,o=o>e[t+1]?o:e[t+1]);const{cols:l,rows:c}=t,u=(s-r)/l/n[0],h=(o-a)/c/n[1],p=2*i;let f=0,m=!1,d=[0,0];for(let t=0;t<l-3;t++){for(let n=0;n<c-3;n++){const i=t*c*2+2*n,r=(e[i]+e[i+4]+e[i+4*c]+e[i+4*c+4])/4,s=(e[i+1]+e[i+5]+e[i+4*c+1]+e[i+4*c+5])/4,a=Math.abs((r-e[i+2*c+2])/u),o=Math.abs((s-e[i+2*c+3])/h);if(a+o>f&&(f=a+o,d=[a,o]),p&&f>p){m=!0;break}}if(m)break}return d},g={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},x=new Map,b=new Map,w=500;async function v(){(0,c.kR)()||await(0,c.zD)()}function R(e,t,n){return d(e.spatialReference,t)?n?(0,c.rS)(t,e.spatialReference,e):(0,c.rS)(e.spatialReference,t,e):null}function M(e,t,n,i=null){const r=e.spatialReference;if(r.equals(t))return e;d(r,t,i);const s=n.center,l=new u.Z({xmin:s.x-e.x/2,xmax:s.x+e.x/2,ymin:s.y-e.y/2,ymax:s.y+e.y/2,spatialReference:r}),h=(0,c.iV)(l,t,i),p=L(t);let f;if((0,a.Wi)(h)||(0,a.pC)(p)&&h.width>=p){const n=(0,o.c9)(r)/(0,o.c9)(t);f={x:e.x*n,y:e.y*n}}else f={x:h.width,y:h.height};return f}function S(e,t=.01){return(0,o.c9)(e)?t/(0,o.c9)(e):0}function C(e,t,n=null,i=!0){const r=e.spatialReference;if(r.equals(t))return e;d(r,t,n);const s=(0,c.iV)(e,t,n);return i&&s?(_([e],[s],r,t),s):s}function _(e,t,n,i){const r=z(n,!0),s=z(i,!0),o=S(n,w),l=S(i,w);if(o&&(0,a.pC)(r)&&(0,a.pC)(s))for(let n=0;n<e.length;n++){const i=t[n];if(!i)continue;const{x:a}=e[n],{x:c}=i;c>=s[1]-l&&Math.abs(a-r[0])<o?i.x-=s[1]-s[0]:c<=s[0]+l&&Math.abs(a-r[1])<o&&(i.x+=s[1]-s[0])}}function T(e){const{inSR:t,outSR:n,datumTransformation:i,preferPE:r}=e;if(t.equals(n)){const{points:t}=k(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return function(e){const{cols:t,rows:n,xres:i,yres:r,usePixelCenter:s,inSR:a,outSR:o}=e;let{xmin:l,ymax:u}=e;s&&(l+=i/2,u-=r/2);const p=[],f=[],m=Math.max(t,n);for(let e=0;e<m;e++){const s=l+i*Math.min(t,e),m=u-r*Math.min(n,e),d=(0,c.iV)(new h.Z({x:s,y:m,spatialReference:a}),o);e<=t&&p.push(d.x),e<=n&&f.push(d.y)}const d=[];for(let e=0;e<t;e++)for(let t=0;t<n;t++)d.push([p[e],f[t]]);return d}(e);if(d(t,n,i)&&r){if(t.isGeographic)return E(e);const n=P(t);if((0,a.pC)(n))return E(e)}return function(e){const{points:t}=k(e,null),{inSR:n,outSR:i,datumTransformation:r}=e,s=t.map((e=>new h.Z(e[0],e[1],n))),a=(0,c.iV)(s,i,r);return r&&_(s,a,n,i),a.map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}function E(e){const{inSR:t,outSR:n,datumTransformation:i}=e,r=P(t),{points:s,mask:o}=k(e,r);if(!t.isGeographic){const e=t.wkid?l.e.coordsys(t.wkid):l.e.fromString(t.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,t.wkt);l.g.projToGeog(e,s.length,s)}if((0,a.pC)(i)&&i.steps.length){let e;const t=179.9955;if(n.isGeographic&&(e=s.map((([e])=>e>t?1:e<-t?-1:0))),i.steps.forEach((e=>{const t=e.wkid?l.e.geogtran(e.wkid):l.e.fromString(l.f.PE_TYPE_GEOGTRAN,e.wkt);l.h.geogToGeog(t,s.length,s,null,e.isInverse?l.f.PE_TRANSFORM_2_TO_1:l.f.PE_TRANSFORM_1_TO_2)})),e)for(let n=0;n<s.length;n++){const i=e[n],r=s[n][0],a=r>t?1:r<-t?-1:0;i&&a&&i!==a&&(s[n][0]=i>0?r+360:r-360)}}if(!n.isGeographic){const e=P(n,!0),t=(0,a.pC)(e)&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,t){const[n,i]=t;for(let t=0;t<e.length;t++){const r=e[t][1];(r<n||r>i)&&(e[t]=[NaN,NaN])}}(s,t);const i=n.wkid?l.e.coordsys(n.wkid):l.e.fromString(n.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,n.wkt);l.g.geogToProj(i,s.length,s)}let c=s;if(o&&s.length!==o.length){c=[];for(let e=0,t=0;e<o.length;e++)o[e]?c.push(s[t++]):c.push([NaN,NaN])}return c}function P(e,t=!1){let n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),x.has(n)){const e=x.get(n);return t?e?.gcs:e?.pcs}const i=e.wkid?l.e.coordsys(e.wkid):l.e.fromString(e.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,e.wkt),r=I(i,S(e,1e-4)),s=I(i,0,!0);return x.set(n,{pcs:r,gcs:s}),t?s:r}function I(e,t=0,n=!1){const i=l.j.generate(e),r=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||!r?.length)return null;let s=!1,a=r.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!a){if(a=r.find((e=>1===e.getInclusive()&&0===e.getKind())),!a)return null;s=!0}const o=n?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),c=i.isPannableRectangle(),u=a.getCoord();if(s)return{isEnvelope:s,isPannable:c,vertices:u,coef:null,bbox:[u[0][0]-t,u[0][1]-t,u[1][0]+t,u[1][1]+t],poleLocation:o};let h=0;const p=[];let[f,m]=u[0],[d,y]=u[0];for(let e=0,t=u.length;e<t;e++){h++,h===t&&(h=0);const[n,i]=u[e],[r,s]=u[h];if(s===i)p.push([n,r,i,s,2]);else{const e=(r-n)/(s-i||1e-4),t=n-e*i;i<s?p.push([e,t,i,s,0]):p.push([e,t,s,i,1])}f=f<n?f:n,m=m<i?m:i,d=d>n?d:n,y=y>i?y:i}return{isEnvelope:!1,isPannable:c,vertices:u,coef:p,bbox:[f,m,d,y],poleLocation:o}}function k(e,t){const n=[],{cols:i,rows:r,xres:s,yres:o,usePixelCenter:l}=e;let{xmin:c,ymax:u}=e;if(l&&(c+=s/2,u-=o/2),(0,a.Wi)(t)){for(let e=0;e<i;e++)for(let t=0;t<r;t++)n.push([c+s*e,u-o*t]);return{points:n}}const h=new Uint8Array(i*r);if(t.isEnvelope){const{bbox:[e,a,l,p]}=t;for(let f=0,m=0;f<i;f++){const i=c+s*f,d=t.isPannable||i>=e&&i<=l;for(let e=0;e<r;e++,m++){const t=u-o*e;d&&t>=a&&t<=p&&(n.push([i,t]),h[m]=1)}}return{points:n,mask:h}}const p=t.coef,f=[];for(let e=0;e<r;e++){const t=u-o*e,n=[],i=[];for(let e=0;e<p.length;e++){const[r,s,a,o,l]=p[e];if(t===a&&a===o)n.push(r),n.push(s),i.push(2),i.push(2);else if(t>=a&&t<=o){const e=r*t+s;n.push(e),i.push(l)}}let r=n;if(n.length>2){let e=2===i[0]?0:i[0],t=n[0];r=[];for(let s=1;s<i.length;s++)2===i[s]&&s!==i.length-1||(i[s]!==e&&(r.push(0===e?Math.min(t,n[s-1]):Math.max(t,n[s-1])),e=i[s],t=n[s]),s===i.length-1&&r.push(0===i[s]?Math.min(t,n[s]):Math.max(t,n[s])));r.sort(((e,t)=>e-t))}else n[0]>n[1]&&(r=[n[1],n[0]]);f.push(r)}for(let e=0,t=0;e<i;e++){const i=c+s*e;for(let e=0;e<r;e++,t++){const r=u-o*e,s=f[e];if(2===s.length)i>=s[0]&&i<=s[1]&&(n.push([i,r]),h[t]=1);else if(s.length>2){let e=!1;for(let t=0;t<s.length;t+=2)if(i>=s[t]&&i<=s[t+1]){e=!0;break}e&&(n.push([i,r]),h[t]=1)}}}return{points:n,mask:h}}function G(e){const t=L(e[0].spatialReference);if(e.length<2||(0,a.Wi)(t))return e[0];let{xmin:n,xmax:i,ymin:r,ymax:s}=e[0];for(let n=1;n<e.length;n++){const a=e[n];i=a.xmax+t*n,r=Math.min(r,a.ymin),s=Math.max(s,a.ymax)}return new u.Z({xmin:n,xmax:i,ymin:r,ymax:s,spatialReference:e[0].spatialReference})}function N(e,t,n=null,r=!0){const s=e.spatialReference;if(s.equals(t))return e;const o=Z(e),l=L(s,!0),h=L(t);if(0===o||(0,a.Wi)(l)||(0,a.Wi)(h)){const o=O(e,t,n,r);if((0,a.Wi)(l)&&(0,a.pC)(h)&&Math.abs(o.width-h)<S(t)&&(0,c.kR)()){const n=P(s);if((0,a.pC)(n)&&n.poleLocation===i.None&&e.width<(n.bbox[2]-n.bbox[0])/2)return function(e,t){const n=L(t);if((0,a.Wi)(n))return null;let{xmin:i,ymin:r,xmax:s,ymax:o}=e;const l=e.spatialReference,h=new p.Z({spatialReference:l,rings:[[[i,r],[s,r],[s,o],[i,o],[i,r]]]}),f=(0,c.iV)(h,t);if(2!==f.rings.length||!f.rings[0].length||!f.rings[1].length)return null;const{rings:m}=f,d=S(l),y=new u.Z({spatialReference:t});for(let e=0;e<2;e++){i=s=m[e][0][0],r=o=m[e][0][1];for(let t=0;t<m[e].length;t++)i=i>m[e][t][0]?m[e][t][0]:i,s=s<m[e][t][0]?m[e][t][0]:s,r=r>m[e][t][1]?m[e][t][1]:r,o=o<m[e][t][1]?m[e][t][1]:o;if(0===e)y.ymin=r,y.ymax=o,y.xmin=i,y.xmax=s;else if(y.ymin=Math.min(y.ymin,r),y.ymax=Math.max(y.ymax,o),Math.abs(s-n/2)<d)y.xmin=i,y.xmax=y.xmax+n;else{if(!(Math.abs(i+n/2)<d))return null;y.xmax=s+n}}return y}(e,t)||o}return o}const f=e.clone().normalize();if(1===f.length&&e.xmax<l&&e.xmax-l/2>S(s)){const{xmin:t,xmax:n}=e;for(let i=0;i<=o;i++){const r=0===i?t:-l/2,a=i===o?n-l*i:l/2;f[i]=new u.Z({xmin:r,xmax:a,ymin:e.ymin,ymax:e.ymax,spatialReference:s})}}return G(f.map((e=>O(e,t,n,r))).filter(a.pC))}function O(e,t,n=null,i=!0,r=!0){const s=e.spatialReference;if(s.equals(t)||!t)return e;d(s,t,n);const o=(0,c.iV)(e,t,n);if(r&&t.isWebMercator&&o&&(o.ymax=Math.min(20037508.342787,o.ymax),o.ymin=Math.max(-20037508.342787,o.ymin),o.ymin>=o.ymax))return null;if(!i||!o)return o;const l=z(s,!0),u=z(t,!0);if((0,a.Wi)(l)||(0,a.Wi)(u))return o;const p=S(s,.001),f=S(s,w),m=S(t,.001);if(Math.abs(o.xmin-u[0])<m&&Math.abs(o.xmax-u[1])<m){const i=Math.abs(e.xmin-l[0]),r=Math.abs(l[1]-e.xmax);if(i<p&&r>f){o.xmin=u[0];const i=[];i.push(new h.Z(e.xmax,e.ymin,s)),i.push(new h.Z(e.xmax,(e.ymin+e.ymax)/2,s)),i.push(new h.Z(e.xmax,e.ymax,s));const r=i.map((e=>C(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));o.xmax=Math.max.apply(null,r)}if(r<p&&i>f){o.xmax=u[1];const i=[];i.push(new h.Z(e.xmin,e.ymin,s)),i.push(new h.Z(e.xmin,(e.ymin+e.ymax)/2,s)),i.push(new h.Z(e.xmin,e.ymax,s));const r=i.map((e=>C(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));o.xmin=Math.min.apply(null,r)}}else{const e=S(t,.001);Math.abs(o.xmin-u[0])<e&&(o.xmin=u[0]),Math.abs(o.xmax-u[1])<e&&(o.xmax=u[1])}return o}function L(e,t=!1){if(!e)return null;const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*g[e.wkid]||null}function z(e,t=!1){if(e.isGeographic)return[-180,180];const n=L(e,t);return(0,a.pC)(n)?[-n/2,n/2]:null}function W(e,t,n,i){let r=(e-t)/n;return r-Math.floor(r)!=0?r=Math.floor(r):i&&(r-=1),r}function Z(e,t=!1){const n=L(e.spatialReference);if((0,a.Wi)(n))return 0;const i=t?0:-n/2,r=S(e.spatialReference),s=!t&&Math.abs(e.xmax-n/2)<r?n/2:e.xmax,o=!t&&Math.abs(e.xmin+n/2)<r?-n/2:e.xmin;return W(s,i,n,!0)-W(o,i,n,!1)}function F(e){const t=e.storageInfo.origin.x,n=L(e.spatialReference,!0);if((0,a.Wi)(n))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const i=n/2,{nativePixelSize:r,storageInfo:s,extent:o}=e,{maximumPyramidLevel:l,blockWidth:c,pyramidScalingFactor:u}=s;let h=r.x;const p=[],f=(0,a.pC)(e.transform)&&"gcs-shift"===e.transform.type,m=t+(f?0:i),d=f?n-t:i-t;for(let e=0;e<=l;e++){const e=(o.xmax-t)/h/c,n=e-Math.floor(e)==0?e:Math.ceil(e),i=d/h/c,r=i-Math.floor(i)==0?i:Math.ceil(i),s=Math.floor(m/h/c),a=Math.round(m/h)%c,l=(c-Math.round(d/h)%c)%c;p.push({resolutionX:h,blockWidth:c,datsetColumnCount:n,worldColumnCountFromOrigin:r,leftMargin:a,rightPadding:l,originColumnOffset:s}),h*=u}return{originX:t,halfWorldWidth:i,pyramidsInfo:p,hasGCSSShiftTransform:f}}function j(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[32,32],i=V(e),r={cols:i.size[0]+1,rows:i.size[1]+1};const s=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let o=i.outofBoundPointCount===i.offsets.length/2||t&&s?[0,0]:y(i.offsets,r,n,4);const c=(o[0]+o[1])/2,u=e.projectedExtent.spatialReference,h=e.srcBufferExtent.spatialReference;if(t&&(s||c>4)&&(m(u,h,e.datumTransformation)&&(u.isGeographic||(0,a.pC)(P(u))),n=[4,4],i=V({...e,spacing:n}),r={cols:i.size[0]+1,rows:i.size[1]+1},o=y(i.offsets,r,n,4)),i.error=o,n[0]>1&&(i.coefficients=q(i.offsets,r,s)),e.includeGCSGrid&&!u.isGeographic&&!u.isWebMercator)if(h.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else{const t=P(u);if((0,a.pC)(t)&&!t.isEnvelope){const t=function(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt);let n;return b.has(t)?n=b.get(t):(n=(e.wkid?l.e.coordsys(e.wkid):l.e.fromString(l.f.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),b.set(t,n)),new f.Z({wkid:n})}(u),a=N(e.projectedExtent,t),{offsets:o}=V({...e,srcBufferExtent:a,spacing:n}),c=q(o,r,s);i.gcsGrid={offsets:o,coefficients:c,spacing:n}}}return i}function V(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:i,datumTransformation:r,rasterTransform:s}=e,o=t.spatialReference,l=n.spatialReference,c=d(o,l),{xmin:u,ymin:p,xmax:f,ymax:m}=t,y=L(l),g=(0,a.pC)(y)&&(e.hasWrapAround||"gcs-shift"===s?.type),x=e.spacing||[32,32],b=x[0]*i.x,v=x[1]*i.y,R=1===x[0],M=Math.ceil((f-u)/b-.1/x[0])+(R?0:1),C=Math.ceil((m-p)/v-.1/x[1])+(R?0:1),_=T({cols:M,rows:C,xmin:u,ymax:m,xres:b,yres:v,inSR:o,outSR:l,datumTransformation:r,preferPE:x[0]<=4,usePixelCenter:R}),E=[];let I,k=0;const G=R?-1:NaN,{xmin:N,xmax:O,ymax:z,width:W,height:Z}=n,F=S(l,w),j=(0,a.pC)(y)&&N>0&&O>y/2;let V=!1;if(c){const e=P(o);V=(0,a.pC)(e)&&e.poleLocation>0}for(let e=0;e<M;e++){const t=[];for(let n=0;n<C;n++){let i=_[e*C+n];if(g&&i[0]>O&&i[0]>y/2-F?i[0]-=y:g&&0===e&&i[0]<0&&j&&!s&&(i[0]+=y),!i||isNaN(i[0])||isNaN(i[1]))E.push(G),E.push(G),t.push(null),k++;else{if(s){const e=s.inverseTransform(new h.Z({x:i[0],y:i[1],spatialReference:l}));i=[e.x,e.y]}t.push(i),e>0&&g&&I[n]&&i[0]<I[n][0]&&(i[0]+=y,V&&i[0]>O&&i[0]>y&&(i[0]-=y)),E.push((i[0]-N)/W),E.push((z-i[1])/Z)}}I=t}return{offsets:E,error:null,coefficients:null,outofBoundPointCount:k,spacing:x,size:R?[M,C]:[M-1,C-1]}}function q(e,t,n){const{cols:i,rows:r}=t,s=new Float32Array((i-1)*(r-1)*2*6),a=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),o=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let t=0;t<i-1;t++){for(let n=0;n<r-1;n++){let l=t*r*2+2*n;const c=e[l],u=e[l+1],h=e[l+2],p=e[l+3];l+=2*r;const f=e[l],m=e[l+1],d=e[l+2],y=e[l+3];let g=0,x=12*(n*(i-1)+t);for(let e=0;e<3;e++)s[x++]=a[g++]*c+a[g++]*h+a[g++]*d;g=0;for(let e=0;e<3;e++)s[x++]=a[g++]*u+a[g++]*p+a[g++]*y;g=0;for(let e=0;e<3;e++)s[x++]=o[g++]*c+o[g++]*f+o[g++]*d;g=0;for(let e=0;e<3;e++)s[x++]=o[g++]*u+o[g++]*m+o[g++]*y}if(n)for(let e=0;e<s.length;e++)isNaN(s[e])&&(s[e]=-1)}return s}function A(e){const t=e.clone().normalize();return 1===t.length?t[0]:G(t)}function B(e,t,n){const{storageInfo:i,pixelSize:r}=t;let s=0,l=!1;const{pyramidResolutions:c}=i;if((0,a.pC)(c)&&c.length){const i=(e.x+e.y)/2,a=c[c.length-1],u=(a.x+a.y)/2,p=(r.x+r.y)/2;if(i<=p)s=0;else if(i>=u)s=c.length,l=i/u>8;else{let e,t=p;for(let r=1;r<=c.length;r++){if(e=(c[r-1].x+c[r-1].y)/2,i<=e){i===e?s=r:"down"===n?(s=r-1,l=i/t>8):s="up"===n||i-t>e-i||i/t>2?r:r-1;break}t=e}}const f=0===s?r:c[s-1];return l&&Math.min(f.x,f.y)*(0,o.c9)(t.spatialReference)>19567&&(l=!1),{pyramidLevel:s,pyramidResolution:new h.Z({x:f.x,y:f.y,spatialReference:t.spatialReference}),excessiveReading:l}}const u=Math.log(e.x/r.x)/Math.LN2,p=Math.log(e.y/r.y)/Math.LN2,f=t.storageInfo.maximumPyramidLevel||0;s="down"===n?Math.floor(Math.min(u,p)):"up"===n?Math.ceil(Math.max(u,p)):Math.round((u+p)/2),s<0?s=0:s>f&&(l=s>f+3,s=f);const m=2**s;return{pyramidLevel:s,pyramidResolution:new h.Z({x:m*t.nativePixelSize.x,y:m*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:l}}function D(e,t,n=512,i=!0){const{extent:r,spatialReference:s,pixelSize:l}=e,c=M(new h.Z({x:l.x,y:l.y,spatialReference:s}),t,r);if(null==c)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(c.x+c.y)/2,p=(0,o.c9)(t),f=u*p*96*39.37,m=t.isGeographic?256/n*295828763.7958547:256/n*591657527.591555;let d="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const y=N(r,t),g=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(m/2/f)/Math.LN2));if(!d&&i&&(t.isGeographic||t.isWebMercator)&&(d=y.xmin*y.xmax<0,!d&&g<3)){const e=L(t);if((0,a.pC)(e)){const t=2**g*u*n,i=Math.ceil(e/t);d=1===i||2===i&&e/2-y.xmax<t}}let x,b=f;const w=1.001,v=Math.min(2,Math.max(1.414,e.storageInfo?.pyramidScalingFactor||2));if(d){b=m;const e=t.isGeographic?1341104507446289e-21:.29858214164761665,n=e*(96*p*39.37),i=t.isGeographic?4326:3857;x=M(new h.Z({x:e,y:e,spatialReference:{wkid:i}}),s,y),x.x*=b/n,x.y*=b/n}else{x={x:l.x,y:l.y};let e=0;for(;b<m*(w/2)&&e<g;)e++,b*=v,x.x*=v,x.y*=v;Math.max(b,m)/Math.min(b,m)<=w&&(b=m)}const R=[b],S=[{x:x.x,y:x.y}],C=Math.min(70.5310735,f)/w;for(;b>=C;)b/=v,x.x/=v,x.y/=v,R.push(b),S.push({x:x.x,y:x.y});return{projectedPixelSize:c,scales:R,srcResolutions:S,isCustomTilingScheme:!d}}},59468:(e,t,n)=>{function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,n=0;for(let i=0;i<e.length;i++){const r=e[i].size;"number"==typeof r&&(t+=r,n++)}return t/n}(e.stops):t}function s(e,t){if(!t)return e;const n=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:n,minSize:i}=t;return(r(n,e)+r(i,e))/2}));let i=0;const s=n.length;if(0===s)return e;for(let e=0;e<s;e++)i+=n[e];const a=Math.floor(i/s);return Math.max(a,e)}function a(e){const t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;const r="visualVariables"in t?s(n,t.visualVariables):n;if("simple"===t.type)return i(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos?.forEach((t=>{e=i(e,t.symbol)})),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach((t=>{e=i(e,t.symbol)})),e}return"dot-density"===t.type||t.type,r}n.d(t,{k:()=>a})},7994:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var i=n(36663),r=n(70375),s=n(61681),a=n(76868),o=n(81977),l=(n(7283),n(7753),n(40266)),c=n(19654),u=n(8712),h=n(52003),p=n(45345),f=n(26216),m=n(55068),d=n(99621),y=n(35119);let g=class extends((0,p.Z)((0,m.Z)((0,u.r)((0,c.A)(f.Z))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new r.Z("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const e=(0,a.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this.layer.tileInfo,n=["png","png24","png32","jpg","mixed"].includes(t.format)&&e.compatibleWith(t);this.isAlignedMapTile=n;const i=n?t:e.toTileInfo();this.tileInfo=i,this.updatingHandles.add((()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent]),(()=>this.refresh()))}));this.addResolvingPromise(e)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[n,i]=this.tileInfo.size;return e.width=n,e.height=i,t.clearRect(0,0,n,i),t.getImageData(0,0,n,i)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const e=this.tileInfo.lods,t=this.layer.tileInfo.lods,n=e[0].scale,i=t[t.length-1].scale;return this.levelRangeFromScaleRange(n,i)}_getfullExtent(){return this.projectFullExtent(this.view.basemapTerrain&&(0,s.pC)(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(e,t,n,i){const r=this.tileInfo,a=this._canSymbolizeInWebGL(),o={tileInfo:r,requestRawData:a,signal:(0,s.Wg)(i.signal),timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},l=await this.layer.fetchTile(e,t,n,o);if(l instanceof HTMLImageElement)return l;let c=l&&l.pixelBlock;if((0,s.Wi)(c))return this._blankTile;if(!a&&(c=await this.layer.applyRenderer(l),(0,s.Wi)(c)))return this._blankTile;const u=new h.H([e,t,n],c,r.size[0],r.size[1]);return a?(u.symbolizerRenderer=this.layer.symbolizer.rendererJSON,u.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),u.transformGrid=l.transformGrid):u.isRendereredSource=!0,u.interpolation=this.layer.interpolation,u.bandIds=this.layer.bandIds,u}_getSymbolizerOptions(e){const t=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain&&(0,s.pC)(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:t,y:t},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return(0,d.K)(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return(0,y.hc)("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};(0,i._)([(0,o.Cb)({readOnly:!0})],g.prototype,"_blankTile",null),(0,i._)([(0,o.Cb)({readOnly:!0})],g.prototype,"imageFormatIsOpaque",null),(0,i._)([(0,o.Cb)({readOnly:!0})],g.prototype,"hasMixedImageFormats",null),(0,i._)([(0,o.Cb)({readOnly:!0})],g.prototype,"dataLevelRange",null),g=(0,i._)([(0,l.j)("esri.views.3d.layers.ImageryTileLayerView3D")],g);const x=g},19654:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(36663),r=n(23148),s=n(78668),a=n(76868),o=n(81977),l=(n(7283),n(7753),n(40266)),c=n(64862);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,c.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.handles.add((0,r.kB)((()=>e.abort()))),await(0,a.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,s.k_)(t);const n=(0,c.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(n)throw n}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,i._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,i._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],t),t}},8712:(e,t,n)=>{n.d(t,{r:()=>h});var i=n(36663),r=n(70375),s=n(61681),a=n(76868),o=n(81977),l=(n(7283),n(7753),n(40266)),c=n(57686),u=n(13809);const h=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,n=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,n)}get displayLevelRange(){const e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,n=this.layer.maxScale||e[e.length-1].scale,i=this.levelRangeFromScaleRange(t,n);return this.layer.maxScale&&i.maxLevel++,i}getTileUrl(e,t,n){return this.layer.getTileUrl(e,t,n)}_addTilingSchemeMatchPromise(){if((0,s.Wi)(this.fullExtent))return this.addResolvingPromise(Promise.reject(new r.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if((0,s.pC)(e))return this.addResolvingPromise(Promise.reject(e));const t=(0,a.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const n=(0,u.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(n){const e={layer:this.layer,error:n};let t;switch(n.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new r.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new r.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return(0,s.Wi)(e)||!t.compatibleWith(e)?new r.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface"):null}levelRangeFromScaleRange(e,t){const n={minLevel:0,maxLevel:1/0},i=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!i)return n;const r=i.levels[0],s=e=>{const t=Math.log(r.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(n.minLevel=Math.max(0,s(e))),null!=t&&t>0&&(n.maxLevel=Math.max(0,s(t))),n}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,i._)([(0,o.Cb)(c.q)],t.prototype,"updatingProgress",void 0),(0,i._)([(0,o.Cb)(c.V)],t.prototype,"updatingProgressValue",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"fullExtent",null),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,i._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"tileInfo",void 0),t=(0,i._)([(0,l.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},45345:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(36663),r=n(80085),s=n(70375),a=n(61681),o=n(81977),l=(n(7283),n(7753),n(40266)),c=n(51599),u=n(18486),h=n(59439);const p=e=>{let t=class extends e{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return(0,u._D)((0,a.Wg)(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(e){return!!this.projectFullExtent(e)}projectFullExtent(e){const t=(0,a.Wg)(this.layer.fullExtent),n=(0,u._D)(t,e,!1);return(0,u.tB)(t,e,n)}async fetchPopupFeatures(e,t){const{layer:n}=this;if(!e)throw new s.Z("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:i}=n,o=(0,h.V)(n,t);if(!i||(0,a.Wi)(o))throw new s.Z("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:o});const l=[],{value:c,magdirValue:u}=await n.identify(e,{timeExtent:this.timeExtent});let p="";if(c&&c.length){p="imagery-tile"===n.type&&n.hasStandardTime()&&null!=c[0]?c.map((e=>n.getStandardTimeValue(e))).join(", "):c.join(", ");const e={ObjectId:0};e["Raster.ServicePixelValue"]=p;const t=n.rasterInfo.attributeTable;if((0,a.pC)(t)){const{fields:n,features:i}=t,r=n.find((({name:e})=>"value"===e.toLowerCase())),s=r?i.find((e=>String(e.attributes[r.name])===p)):null;if(s)for(const t in s.attributes)s.attributes.hasOwnProperty(t)&&(e[this._rasterFieldPrefix+t]=s.attributes[t])}const i=n.rasterInfo.dataType;"vector-magdir"!==i&&"vector-uv"!==i||(e["Raster.Magnitude"]=u?.[0],e["Raster.Direction"]=u?.[1]);const s=new r.Z(this.fullExtent.clone(),null,e);s.layer=n,s.sourceLayer=s.layer,l.push(s)}return l}};return(0,i._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,o.Cb)(c.qG)],t.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"fullExtent",null),(0,i._)([(0,o.Cb)()],t.prototype,"tileInfo",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"hasTilingEffects",null),(0,i._)([(0,o.Cb)()],t.prototype,"datumTransformation",null),t=(0,i._)([(0,l.j)("esri.views.layers.ImageryTileLayerView")],t),t}},26216:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(36663),r=n(53443),s=n(31355),a=n(53280),o=n(86618),l=n(13802),c=n(61681),u=n(64189),h=n(81977),p=(n(7283),n(7753),n(40266));let f=class extends((0,a.p)((0,o.IG)((0,u.v)(s.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",n=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${n}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,c.Pt)(this.get("layer.opacity"),1)*(0,c.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,i._)([(0,h.Cb)()],f.prototype,"fullOpacity",null),(0,i._)([(0,h.Cb)()],f.prototype,"layer",void 0),(0,i._)([(0,h.Cb)()],f.prototype,"parent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],f.prototype,"suspended",null),(0,i._)([(0,h.Cb)({readOnly:!0})],f.prototype,"suspendInfo",null),(0,i._)([(0,h.Cb)({readOnly:!0})],f.prototype,"legendEnabled",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),(0,i._)([(0,h.Cb)({readOnly:!0})],f.prototype,"updatingProgress",null),(0,i._)([(0,h.Cb)()],f.prototype,"visible",null),(0,i._)([(0,h.Cb)()],f.prototype,"view",void 0),f=(0,i._)([(0,p.j)("esri.views.layers.LayerView")],f);const m=f},55068:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(36663),r=n(13802),s=n(78668),a=n(76868),o=n(81977),l=(n(7283),n(7753),n(40266));const c=e=>{let t=class extends e{initialize(){this.handles.add((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,s.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,i._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},99621:(e,t,n)=>{n.d(t,{D:()=>l,K:()=>o});n(91957);var i=n(61681),r=n(17321),s=n(59468),a=n(91772);function o(e,t,n,s=new a.Z){let o=0;if("2d"===n.type)o=t*(n.resolution??0);else if("3d"===n.type){const s=n.overlayPixelSizeInMapUnits(e),a=n.basemapSpatialReference;o=(0,i.pC)(a)&&!a.equals(n.spatialReference)?(0,r.c9)(a)/(0,r.c9)(n.spatialReference):t*s}const l=e.x-o,c=e.y-o,u=e.x+o,h=e.y+o,{spatialReference:p}=n;return s.xmin=Math.min(l,u),s.ymin=Math.min(c,h),s.xmax=Math.max(l,u),s.ymax=Math.max(c,h),s.spatialReference=p,s}function l(e,t,n){const r=n.toMap(e);return!(0,i.Wi)(r)&&o(r,(0,s.k)(),n,c).intersects(t)}const c=new a.Z}}]);