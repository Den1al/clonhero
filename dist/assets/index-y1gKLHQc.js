(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pr="160",Zo=0,Nr=1,$o=2,ao=1,oo=2,an=3,Mn=0,wt=1,on=2,xn=0,si=1,Or=2,Fr=3,Br=4,Jo=5,Dn=100,Qo=101,el=102,zr=103,kr=104,tl=200,nl=201,il=202,sl=203,ir=204,sr=205,rl=206,al=207,ol=208,ll=209,cl=210,hl=211,ul=212,dl=213,fl=214,pl=0,ml=1,gl=2,is=3,_l=4,vl=5,xl=6,yl=7,lo=0,Sl=1,Ml=2,yn=0,El=1,Tl=2,Al=3,bl=4,wl=5,Rl=6,co=300,ai=301,oi=302,rr=303,ar=304,cs=306,or=1e3,Xt=1001,lr=1002,bt=1003,Hr=1004,Ss=1005,Ft=1006,Cl=1007,Ti=1008,Sn=1009,Pl=1010,Ll=1011,mr=1012,ho=1013,_n=1014,vn=1015,Ai=1016,uo=1017,fo=1018,Un=1020,Dl=1021,qt=1023,Il=1024,Ul=1025,Nn=1026,li=1027,Nl=1028,po=1029,Ol=1030,mo=1031,go=1033,Ms=33776,Es=33777,Ts=33778,As=33779,Gr=35840,Vr=35841,Wr=35842,Xr=35843,_o=36196,qr=37492,Yr=37496,Kr=37808,jr=37809,Zr=37810,$r=37811,Jr=37812,Qr=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,bs=36492,la=36494,ca=36495,Fl=36283,ha=36284,ua=36285,da=36286,vo=3e3,On=3001,Bl=3200,zl=3201,xo=0,kl=1,zt="",gt="srgb",cn="srgb-linear",gr="display-p3",hs="display-p3-linear",ss="linear",Qe="srgb",rs="rec709",as="p3",kn=7680,fa=519,Hl=512,Gl=513,Vl=514,yo=515,Wl=516,Xl=517,ql=518,Yl=519,pa=35044,ma="300 es",cr=1035,ln=2e3,os=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,hr=180/Math.PI;function bi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Kl(s,e){return(s%e+e)%e}function Rs(s,e,t){return(1-t)*s+t*e}function ga(s){return(s&s-1)===0&&s!==0}function ur(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,r,o,l,h,d){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,h,d)}set(e,t,n,i,r,o,l,h,d){const p=this.elements;return p[0]=e,p[1]=i,p[2]=l,p[3]=t,p[4]=r,p[5]=h,p[6]=n,p[7]=o,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],h=n[6],d=n[1],p=n[4],a=n[7],c=n[2],u=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],x=i[4],M=i[7],P=i[2],b=i[5],w=i[8];return r[0]=o*_+l*v+h*P,r[3]=o*m+l*x+h*b,r[6]=o*f+l*M+h*w,r[1]=d*_+p*v+a*P,r[4]=d*m+p*x+a*b,r[7]=d*f+p*M+a*w,r[2]=c*_+u*v+g*P,r[5]=c*m+u*x+g*b,r[8]=c*f+u*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],h=e[6],d=e[7],p=e[8];return t*o*p-t*l*d-n*r*p+n*l*h+i*r*d-i*o*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],h=e[6],d=e[7],p=e[8],a=p*o-l*d,c=l*h-p*r,u=d*r-o*h,g=t*a+n*c+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=a*_,e[1]=(i*d-p*n)*_,e[2]=(l*n-i*o)*_,e[3]=c*_,e[4]=(p*t-i*h)*_,e[5]=(i*r-l*t)*_,e[6]=u*_,e[7]=(n*h-d*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const h=Math.cos(r),d=Math.sin(r);return this.set(n*h,n*d,-n*(h*o+d*l)+o+e,-i*d,i*h,-i*(-d*o+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new Be;function So(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jl(){const s=ls("canvas");return s.style.display="block",s}const _a={};function Si(s){s in _a||(_a[s]=!0,console.warn(s))}const va=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xa=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[cn]:{transfer:ss,primaries:rs,toReference:s=>s,fromReference:s=>s},[gt]:{transfer:Qe,primaries:rs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[hs]:{transfer:ss,primaries:as,toReference:s=>s.applyMatrix3(xa),fromReference:s=>s.applyMatrix3(va)},[gr]:{transfer:Qe,primaries:as,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xa),fromReference:s=>s.applyMatrix3(va).convertLinearToSRGB()}},Zl=new Set([cn,hs]),je={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Zl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Di[e].toReference,i=Di[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Di[s].primaries},getTransfer:function(s){return s===zt?ss:Di[s].transfer}};function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hn;class Mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=ls("canvas")),Hn.width=e.width,Hn.height=e.height;const n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $l=0;class Eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(Ls(i[o].image)):r.push(Ls(i[o]))}else r=Ls(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ls(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jl=0;class It extends hi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Xt,i=Xt,r=Ft,o=Ti,l=qt,h=Sn,d=It.DEFAULT_ANISOTROPY,p=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=bi(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===On?gt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?On:vo}set encoding(e){Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===On?gt:zt}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=co;It.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const h=e.elements,d=h[0],p=h[4],a=h[8],c=h[1],u=h[5],g=h[9],_=h[2],m=h[6],f=h[10];if(Math.abs(p-c)<.01&&Math.abs(a-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(p+c)<.1&&Math.abs(a+_)<.1&&Math.abs(g+m)<.1&&Math.abs(d+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(d+1)/2,M=(u+1)/2,P=(f+1)/2,b=(p+c)/4,w=(a+_)/4,B=(g+m)/4;return x>M&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=w/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=B/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=w/r,i=B/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(a-_)*(a-_)+(c-p)*(c-p));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(a-_)/v,this.z=(c-p)/v,this.w=Math.acos((d+u+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ql extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===On?gt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class To extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let h=n[i+0],d=n[i+1],p=n[i+2],a=n[i+3];const c=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(l===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=a;return}if(l===1){e[t+0]=c,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(a!==_||h!==c||d!==u||p!==g){let m=1-l;const f=h*c+d*u+p*g+a*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),b=Math.atan2(P,f*v);m=Math.sin(m*b)/P,l=Math.sin(l*b)/P}const M=l*v;if(h=h*m+c*M,d=d*m+u*M,p=p*m+g*M,a=a*m+_*M,m===1-l){const P=1/Math.sqrt(h*h+d*d+p*p+a*a);h*=P,d*=P,p*=P,a*=P}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],h=n[i+1],d=n[i+2],p=n[i+3],a=r[o],c=r[o+1],u=r[o+2],g=r[o+3];return e[t]=l*g+p*a+h*u-d*c,e[t+1]=h*g+p*c+d*a-l*u,e[t+2]=d*g+p*u+l*c-h*a,e[t+3]=p*g-l*a-h*c-d*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,h=Math.sin,d=l(n/2),p=l(i/2),a=l(r/2),c=h(n/2),u=h(i/2),g=h(r/2);switch(o){case"XYZ":this._x=c*p*a+d*u*g,this._y=d*u*a-c*p*g,this._z=d*p*g+c*u*a,this._w=d*p*a-c*u*g;break;case"YXZ":this._x=c*p*a+d*u*g,this._y=d*u*a-c*p*g,this._z=d*p*g-c*u*a,this._w=d*p*a+c*u*g;break;case"ZXY":this._x=c*p*a-d*u*g,this._y=d*u*a+c*p*g,this._z=d*p*g+c*u*a,this._w=d*p*a-c*u*g;break;case"ZYX":this._x=c*p*a-d*u*g,this._y=d*u*a+c*p*g,this._z=d*p*g-c*u*a,this._w=d*p*a+c*u*g;break;case"YZX":this._x=c*p*a+d*u*g,this._y=d*u*a+c*p*g,this._z=d*p*g-c*u*a,this._w=d*p*a-c*u*g;break;case"XZY":this._x=c*p*a-d*u*g,this._y=d*u*a-c*p*g,this._z=d*p*g+c*u*a,this._w=d*p*a+c*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],h=t[9],d=t[2],p=t[6],a=t[10],c=n+l+a;if(c>0){const u=.5/Math.sqrt(c+1);this._w=.25/u,this._x=(p-h)*u,this._y=(r-d)*u,this._z=(o-i)*u}else if(n>l&&n>a){const u=2*Math.sqrt(1+n-l-a);this._w=(p-h)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+d)/u}else if(l>a){const u=2*Math.sqrt(1+l-n-a);this._w=(r-d)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(h+p)/u}else{const u=2*Math.sqrt(1+a-n-l);this._w=(o-i)/u,this._x=(r+d)/u,this._y=(h+p)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+o*l+i*d-r*h,this._y=i*p+o*h+r*l-n*d,this._z=r*p+o*d+n*h-i*l,this._w=o*p-n*l-i*h-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-l*l;if(h<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,l),a=Math.sin((1-t)*p)/d,c=Math.sin(t*p)/d;return this._w=o*a+this._w*c,this._x=n*a+this._x*c,this._y=i*a+this._y*c,this._z=r*a+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,h=e.w,d=2*(o*i-l*n),p=2*(l*t-r*i),a=2*(r*n-o*t);return this.x=t+h*d+o*a-l*p,this.y=n+h*p+l*d-r*a,this.z=i+h*a+r*p-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,h=t.z;return this.x=i*h-r*l,this.y=r*o-n*h,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new R,ya=new wi;class Ri{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(r,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ii.copy(n.boundingBox)),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Ui.subVectors(this.max,pi),Gn.subVectors(e.a,pi),Vn.subVectors(e.b,pi),Wn.subVectors(e.c,pi),un.subVectors(Vn,Gn),dn.subVectors(Wn,Vn),bn.subVectors(Gn,Wn);let t=[0,-un.z,un.y,0,-dn.z,dn.y,0,-bn.z,bn.y,un.z,0,-un.x,dn.z,0,-dn.x,bn.z,0,-bn.x,-un.y,un.x,0,-dn.y,dn.x,0,-bn.y,bn.x,0];return!Is(t,Gn,Vn,Wn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Is(t,Gn,Vn,Wn,Ui))?!1:(Ni.crossVectors(un,dn),t=[Ni.x,Ni.y,Ni.z],Is(t,Gn,Vn,Wn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new R,new R,new R,new R,new R,new R,new R,new R],Ht=new R,Ii=new Ri,Gn=new R,Vn=new R,Wn=new R,un=new R,dn=new R,bn=new R,pi=new R,Ui=new R,Ni=new R,wn=new R;function Is(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wn.fromArray(s,r);const l=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),h=e.dot(wn),d=t.dot(wn),p=n.dot(wn);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>l)return!1}return!0}const tc=new Ri,mi=new R,Us=new R;class _r{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);const t=mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(Us)),this.expandByPoint(mi.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new R,Ns=new R,Oi=new R,fn=new R,Os=new R,Fi=new R,Fs=new R;class nc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ns.copy(e).add(t).multiplyScalar(.5),Oi.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(Ns);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Oi),l=fn.dot(this.direction),h=-fn.dot(Oi),d=fn.lengthSq(),p=Math.abs(1-o*o);let a,c,u,g;if(p>0)if(a=o*h-l,c=o*l-h,g=r*p,a>=0)if(c>=-g)if(c<=g){const _=1/p;a*=_,c*=_,u=a*(a+o*c+2*l)+c*(o*a+c+2*h)+d}else c=r,a=Math.max(0,-(o*c+l)),u=-a*a+c*(c+2*h)+d;else c=-r,a=Math.max(0,-(o*c+l)),u=-a*a+c*(c+2*h)+d;else c<=-g?(a=Math.max(0,-(-o*r+l)),c=a>0?-r:Math.min(Math.max(-r,-h),r),u=-a*a+c*(c+2*h)+d):c<=g?(a=0,c=Math.min(Math.max(-r,-h),r),u=c*(c+2*h)+d):(a=Math.max(0,-(o*r+l)),c=a>0?r:Math.min(Math.max(-r,-h),r),u=-a*a+c*(c+2*h)+d);else c=o>0?-r:r,a=Math.max(0,-(o*c+l)),u=-a*a+c*(c+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(Ns).addScaledVector(Oi,c),u}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,h;const d=1/this.direction.x,p=1/this.direction.y,a=1/this.direction.z,c=this.origin;return d>=0?(n=(e.min.x-c.x)*d,i=(e.max.x-c.x)*d):(n=(e.max.x-c.x)*d,i=(e.min.x-c.x)*d),p>=0?(r=(e.min.y-c.y)*p,o=(e.max.y-c.y)*p):(r=(e.max.y-c.y)*p,o=(e.min.y-c.y)*p),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),a>=0?(l=(e.min.z-c.z)*a,h=(e.max.z-c.z)*a):(l=(e.max.z-c.z)*a,h=(e.min.z-c.z)*a),n>h||l>i)||((l>n||n!==n)&&(n=l),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,n,i,r){Os.subVectors(t,e),Fi.subVectors(n,e),Fs.crossVectors(Os,Fi);let o=this.direction.dot(Fs),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;fn.subVectors(this.origin,e);const h=l*this.direction.dot(Fi.crossVectors(fn,Fi));if(h<0)return null;const d=l*this.direction.dot(Os.cross(fn));if(d<0||h+d>o)return null;const p=-l*fn.dot(Fs);return p<0?null:this.at(p/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,o,l,h,d,p,a,c,u,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,h,d,p,a,c,u,g,_,m)}set(e,t,n,i,r,o,l,h,d,p,a,c,u,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=l,f[13]=h,f[2]=d,f[6]=p,f[10]=a,f[14]=c,f[3]=u,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xn.setFromMatrixColumn(e,0).length(),r=1/Xn.setFromMatrixColumn(e,1).length(),o=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(i),d=Math.sin(i),p=Math.cos(r),a=Math.sin(r);if(e.order==="XYZ"){const c=o*p,u=o*a,g=l*p,_=l*a;t[0]=h*p,t[4]=-h*a,t[8]=d,t[1]=u+g*d,t[5]=c-_*d,t[9]=-l*h,t[2]=_-c*d,t[6]=g+u*d,t[10]=o*h}else if(e.order==="YXZ"){const c=h*p,u=h*a,g=d*p,_=d*a;t[0]=c+_*l,t[4]=g*l-u,t[8]=o*d,t[1]=o*a,t[5]=o*p,t[9]=-l,t[2]=u*l-g,t[6]=_+c*l,t[10]=o*h}else if(e.order==="ZXY"){const c=h*p,u=h*a,g=d*p,_=d*a;t[0]=c-_*l,t[4]=-o*a,t[8]=g+u*l,t[1]=u+g*l,t[5]=o*p,t[9]=_-c*l,t[2]=-o*d,t[6]=l,t[10]=o*h}else if(e.order==="ZYX"){const c=o*p,u=o*a,g=l*p,_=l*a;t[0]=h*p,t[4]=g*d-u,t[8]=c*d+_,t[1]=h*a,t[5]=_*d+c,t[9]=u*d-g,t[2]=-d,t[6]=l*h,t[10]=o*h}else if(e.order==="YZX"){const c=o*h,u=o*d,g=l*h,_=l*d;t[0]=h*p,t[4]=_-c*a,t[8]=g*a+u,t[1]=a,t[5]=o*p,t[9]=-l*p,t[2]=-d*p,t[6]=u*a+g,t[10]=c-_*a}else if(e.order==="XZY"){const c=o*h,u=o*d,g=l*h,_=l*d;t[0]=h*p,t[4]=-a,t[8]=d*p,t[1]=c*a+_,t[5]=o*p,t[9]=u*a-g,t[2]=g*a-u,t[6]=l*p,t[10]=_*a+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ic,e,sc)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),pn.crossVectors(n,Pt),pn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),pn.crossVectors(n,Pt)),pn.normalize(),Bi.crossVectors(Pt,pn),i[0]=pn.x,i[4]=Bi.x,i[8]=Pt.x,i[1]=pn.y,i[5]=Bi.y,i[9]=Pt.y,i[2]=pn.z,i[6]=Bi.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],h=n[8],d=n[12],p=n[1],a=n[5],c=n[9],u=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],x=n[7],M=n[11],P=n[15],b=i[0],w=i[4],B=i[8],y=i[12],T=i[1],k=i[5],H=i[9],$=i[13],L=i[2],N=i[6],V=i[10],q=i[14],W=i[3],X=i[7],Y=i[11],ee=i[15];return r[0]=o*b+l*T+h*L+d*W,r[4]=o*w+l*k+h*N+d*X,r[8]=o*B+l*H+h*V+d*Y,r[12]=o*y+l*$+h*q+d*ee,r[1]=p*b+a*T+c*L+u*W,r[5]=p*w+a*k+c*N+u*X,r[9]=p*B+a*H+c*V+u*Y,r[13]=p*y+a*$+c*q+u*ee,r[2]=g*b+_*T+m*L+f*W,r[6]=g*w+_*k+m*N+f*X,r[10]=g*B+_*H+m*V+f*Y,r[14]=g*y+_*$+m*q+f*ee,r[3]=v*b+x*T+M*L+P*W,r[7]=v*w+x*k+M*N+P*X,r[11]=v*B+x*H+M*V+P*Y,r[15]=v*y+x*$+M*q+P*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],h=e[9],d=e[13],p=e[2],a=e[6],c=e[10],u=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*h*a-i*d*a-r*l*c+n*d*c+i*l*u-n*h*u)+_*(+t*h*u-t*d*c+r*o*c-i*o*u+i*d*p-r*h*p)+m*(+t*d*a-t*l*u-r*o*a+n*o*u+r*l*p-n*d*p)+f*(-i*l*p-t*h*a+t*l*c+i*o*a-n*o*c+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],h=e[6],d=e[7],p=e[8],a=e[9],c=e[10],u=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=a*m*d-_*c*d+_*h*u-l*m*u-a*h*f+l*c*f,x=g*c*d-p*m*d-g*h*u+o*m*u+p*h*f-o*c*f,M=p*_*d-g*a*d+g*l*u-o*_*u-p*l*f+o*a*f,P=g*a*h-p*_*h-g*l*c+o*_*c+p*l*m-o*a*m,b=t*v+n*x+i*M+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(_*c*r-a*m*r-_*i*u+n*m*u+a*i*f-n*c*f)*w,e[2]=(l*m*r-_*h*r+_*i*d-n*m*d-l*i*f+n*h*f)*w,e[3]=(a*h*r-l*c*r-a*i*d+n*c*d+l*i*u-n*h*u)*w,e[4]=x*w,e[5]=(p*m*r-g*c*r+g*i*u-t*m*u-p*i*f+t*c*f)*w,e[6]=(g*h*r-o*m*r-g*i*d+t*m*d+o*i*f-t*h*f)*w,e[7]=(o*c*r-p*h*r+p*i*d-t*c*d-o*i*u+t*h*u)*w,e[8]=M*w,e[9]=(g*a*r-p*_*r-g*n*u+t*_*u+p*n*f-t*a*f)*w,e[10]=(o*_*r-g*l*r+g*n*d-t*_*d-o*n*f+t*l*f)*w,e[11]=(p*l*r-o*a*r-p*n*d+t*a*d+o*n*u-t*l*u)*w,e[12]=P*w,e[13]=(p*_*i-g*a*i+g*n*c-t*_*c-p*n*m+t*a*m)*w,e[14]=(g*l*i-o*_*i-g*n*h+t*_*h+o*n*m-t*l*m)*w,e[15]=(o*a*i-p*l*i+p*n*h-t*a*h-o*n*c+t*l*c)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,h=e.z,d=r*o,p=r*l;return this.set(d*o+n,d*l-i*h,d*h+i*l,0,d*l+i*h,p*l+n,p*h-i*o,0,d*h-i*l,p*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,h=t._w,d=r+r,p=o+o,a=l+l,c=r*d,u=r*p,g=r*a,_=o*p,m=o*a,f=l*a,v=h*d,x=h*p,M=h*a,P=n.x,b=n.y,w=n.z;return i[0]=(1-(_+f))*P,i[1]=(u+M)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(u-M)*b,i[5]=(1-(c+f))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+x)*w,i[9]=(m-v)*w,i[10]=(1-(c+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Xn.set(i[0],i[1],i[2]).length();const o=Xn.set(i[4],i[5],i[6]).length(),l=Xn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);const d=1/r,p=1/o,a=1/l;return Gt.elements[0]*=d,Gt.elements[1]*=d,Gt.elements[2]*=d,Gt.elements[4]*=p,Gt.elements[5]*=p,Gt.elements[6]*=p,Gt.elements[8]*=a,Gt.elements[9]*=a,Gt.elements[10]*=a,t.setFromRotationMatrix(Gt),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,o,l=ln){const h=this.elements,d=2*r/(t-e),p=2*r/(n-i),a=(t+e)/(t-e),c=(n+i)/(n-i);let u,g;if(l===ln)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(l===os)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=a,h[12]=0,h[1]=0,h[5]=p,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=u,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=ln){const h=this.elements,d=1/(t-e),p=1/(n-i),a=1/(o-r),c=(t+e)*d,u=(n+i)*p;let g,_;if(l===ln)g=(o+r)*a,_=-2*a;else if(l===os)g=r*a,_=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-c,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-u,h[2]=0,h[6]=0,h[10]=_,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xn=new R,Gt=new ot,ic=new R(0,0,0),sc=new R(1,1,1),pn=new R,Bi=new R,Pt=new R,Sa=new ot,Ma=new wi;class us{constructor(e=0,t=0,n=0,i=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],h=i[1],d=i[5],p=i[9],a=i[2],c=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(c,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-a,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-a,u),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-a,r)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,d),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-p,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rc=0;const Ea=new R,qn=new wi,nn=new ot,zi=new R,gi=new R,ac=new R,oc=new wi,Ta=new R(1,0,0),Aa=new R(0,1,0),ba=new R(0,0,1),lc={type:"added"},cc={type:"removed"};class St extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new R,t=new us,n=new wi,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Ta,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(ba,e)}translateOnAxis(e,t){return Ea.copy(e).applyQuaternion(this.quaternion),this.position.add(Ea.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ta,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zi.copy(e):zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(gi,zi,this.up):nn.lookAt(zi,gi,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(nn),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,ac),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const l=i[r];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const a=h[d];r(e.shapes,a)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,d=this.material.length;h<d;h++)l.push(r(e.materials,this.material[h]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];i.animations.push(r(e.animations,h))}}if(t){const l=o(e.geometries),h=o(e.materials),d=o(e.textures),p=o(e.images),a=o(e.shapes),c=o(e.skeletons),u=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),a.length>0&&(n.shapes=a),c.length>0&&(n.skeletons=c),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DEFAULT_UP=new R(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new R,sn=new R,Bs=new R,rn=new R,Yn=new R,Kn=new R,wa=new R,zs=new R,ks=new R,Hs=new R;let ki=!1;class Wt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vt.subVectors(i,t),sn.subVectors(n,t),Bs.subVectors(e,t);const o=Vt.dot(Vt),l=Vt.dot(sn),h=Vt.dot(Bs),d=sn.dot(sn),p=sn.dot(Bs),a=o*d-l*l;if(a===0)return r.set(0,0,0),null;const c=1/a,u=(d*h-l*p)*c,g=(o*p-l*h)*c;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,i,r,o,l,h){return ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ki=!0),this.getInterpolation(e,t,n,i,r,o,l,h)}static getInterpolation(e,t,n,i,r,o,l,h){return this.getBarycoord(e,t,n,i,rn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,rn.x),h.addScaledVector(o,rn.y),h.addScaledVector(l,rn.z),h)}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),sn.subVectors(e,t),Vt.cross(sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Vt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ki=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;Yn.subVectors(i,n),Kn.subVectors(r,n),zs.subVectors(e,n);const h=Yn.dot(zs),d=Kn.dot(zs);if(h<=0&&d<=0)return t.copy(n);ks.subVectors(e,i);const p=Yn.dot(ks),a=Kn.dot(ks);if(p>=0&&a<=p)return t.copy(i);const c=h*a-p*d;if(c<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(n).addScaledVector(Yn,o);Hs.subVectors(e,r);const u=Yn.dot(Hs),g=Kn.dot(Hs);if(g>=0&&u<=g)return t.copy(r);const _=u*d-h*g;if(_<=0&&d>=0&&g<=0)return l=d/(d-g),t.copy(n).addScaledVector(Kn,l);const m=p*g-u*a;if(m<=0&&a-p>=0&&u-g>=0)return wa.subVectors(r,i),l=(a-p)/(a-p+(u-g)),t.copy(i).addScaledVector(wa,l);const f=1/(m+_+c);return o=_*f,l=c*f,t.copy(n).addScaledVector(Yn,o).addScaledVector(Kn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Gs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Kl(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gs(o,r,e+1/3),this.g=Gs(o,r,e),this.b=Gs(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=bo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return je.fromWorkingColorSpace(yt.copy(this),e),Math.round(_t(yt.r*255,0,255))*65536+Math.round(_t(yt.g*255,0,255))*256+Math.round(_t(yt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,o=Math.max(n,i,r),l=Math.min(n,i,r);let h,d;const p=(l+o)/2;if(l===o)h=0,d=0;else{const a=o-l;switch(d=p<=.5?a/(o+l):a/(2-o-l),o){case n:h=(i-r)/a+(i<r?6:0);break;case i:h=(r-n)/a+2;break;case r:h=(n-i)/a+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=gt){je.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(Hi);const n=Rs(mn.h,Hi.h,t),i=Rs(mn.s,Hi.s,t),r=Rs(mn.l,Hi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ge;Ge.NAMES=bo;let hc=0;class Ci extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=si,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ir,this.blendDst=sr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ir&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const h=r[l];delete h.metadata,o.push(h)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mt extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new R,Gi=new ce;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),e}}class wo extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ro extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uc=0;const Nt=new ot,Vs=new St,jn=new R,Lt=new Ri,_i=new Ri,pt=new R;class kt extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(So(e)?Ro:wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];_i.setFromBufferAttribute(l),this.morphTargetsRelative?(pt.addVectors(Lt.min,_i.min),Lt.expandByPoint(pt),pt.addVectors(Lt.max,_i.max),Lt.expandByPoint(pt)):(Lt.expandByPoint(_i.min),Lt.expandByPoint(_i.max))}Lt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],h=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)pt.fromBufferAttribute(l,d),h&&(jn.fromBufferAttribute(e,d),pt.add(jn)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let T=0;T<l;T++)d[T]=new R,p[T]=new R;const a=new R,c=new R,u=new R,g=new ce,_=new ce,m=new ce,f=new R,v=new R;function x(T,k,H){a.fromArray(i,T*3),c.fromArray(i,k*3),u.fromArray(i,H*3),g.fromArray(o,T*2),_.fromArray(o,k*2),m.fromArray(o,H*2),c.sub(a),u.sub(a),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(f.copy(c).multiplyScalar(m.y).addScaledVector(u,-_.y).multiplyScalar($),v.copy(u).multiplyScalar(_.x).addScaledVector(c,-m.x).multiplyScalar($),d[T].add(f),d[k].add(f),d[H].add(f),p[T].add(v),p[k].add(v),p[H].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,k=M.length;T<k;++T){const H=M[T],$=H.start,L=H.count;for(let N=$,V=$+L;N<V;N+=3)x(n[N+0],n[N+1],n[N+2])}const P=new R,b=new R,w=new R,B=new R;function y(T){w.fromArray(r,T*3),B.copy(w);const k=d[T];P.copy(k),P.sub(w.multiplyScalar(w.dot(k))).normalize(),b.crossVectors(B,k);const $=b.dot(p[T])<0?-1:1;h[T*4]=P.x,h[T*4+1]=P.y,h[T*4+2]=P.z,h[T*4+3]=$}for(let T=0,k=M.length;T<k;++T){const H=M[T],$=H.start,L=H.count;for(let N=$,V=$+L;N<V;N+=3)y(n[N+0]),y(n[N+1]),y(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,u=n.count;c<u;c++)n.setXYZ(c,0,0,0);const i=new R,r=new R,o=new R,l=new R,h=new R,d=new R,p=new R,a=new R;if(e)for(let c=0,u=e.count;c<u;c+=3){const g=e.getX(c+0),_=e.getX(c+1),m=e.getX(c+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),p.subVectors(o,r),a.subVectors(i,r),p.cross(a),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,m),l.add(p),h.add(p),d.add(p),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let c=0,u=t.count;c<u;c+=3)i.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),p.subVectors(o,r),a.subVectors(i,r),p.cross(a),n.setXYZ(c+0,p.x,p.y,p.z),n.setXYZ(c+1,p.x,p.y,p.z),n.setXYZ(c+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(l,h){const d=l.array,p=l.itemSize,a=l.normalized,c=new d.constructor(h.length*p);let u=0,g=0;for(let _=0,m=h.length;_<m;_++){l.isInterleavedBufferAttribute?u=h[_]*l.data.stride+l.offset:u=h[_]*p;for(let f=0;f<p;f++)c[g++]=d[u++]}return new Zt(c,p,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const l in i){const h=i[l],d=e(h,n);t.setAttribute(l,d)}const r=this.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,a=d.length;p<a;p++){const c=d[p],u=e(c,n);h.push(u)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const i={};let r=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let a=0,c=d.length;a<c;a++){const u=d[a];p.push(u.toJSON(e.data))}p.length>0&&(i[h]=p,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const d in i){const p=i[d];this.setAttribute(d,p.clone(t))}const r=e.morphAttributes;for(const d in r){const p=[],a=r[d];for(let c=0,u=a.length;c<u;c++)p.push(a[c].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,p=o.length;d<p;d++){const a=o[d];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new ot,Rn=new nc,Vi=new _r,Ca=new R,Zn=new R,$n=new R,Jn=new R,Ws=new R,Wi=new R,Xi=new ce,qi=new ce,Yi=new ce,Pa=new R,La=new R,Da=new R,Ki=new R,ji=new R;class ke extends St{constructor(e=new kt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){Wi.set(0,0,0);for(let h=0,d=r.length;h<d;h++){const p=l[h],a=r[h];p!==0&&(Ws.fromBufferAttribute(a,e),o?Wi.addScaledVector(Ws,p):Wi.addScaledVector(Ws.sub(t),p))}t.add(Wi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(Vi.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Vi,Ca)===null||Rn.origin.distanceToSquared(Ca)>(e.far-e.near)**2))&&(Ra.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(Ra),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,l=r.index,h=r.attributes.position,d=r.attributes.uv,p=r.attributes.uv1,a=r.attributes.normal,c=r.groups,u=r.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=o[m.materialIndex],v=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,P=x;M<P;M+=3){const b=l.getX(M),w=l.getX(M+1),B=l.getX(M+2);i=Zi(this,f,e,n,d,p,a,b,w,B),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){const v=l.getX(m),x=l.getX(m+1),M=l.getX(m+2);i=Zi(this,o,e,n,d,p,a,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=o[m.materialIndex],v=Math.max(m.start,u.start),x=Math.min(h.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,P=x;M<P;M+=3){const b=M,w=M+1,B=M+2;i=Zi(this,f,e,n,d,p,a,b,w,B),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(h.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){const v=m,x=m+1,M=m+2;i=Zi(this,o,e,n,d,p,a,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function dc(s,e,t,n,i,r,o,l){let h;if(e.side===wt?h=n.intersectTriangle(o,r,i,!0,l):h=n.intersectTriangle(i,r,o,e.side===Mn,l),h===null)return null;ji.copy(l),ji.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(ji);return d<t.near||d>t.far?null:{distance:d,point:ji.clone(),object:s}}function Zi(s,e,t,n,i,r,o,l,h,d){s.getVertexPosition(l,Zn),s.getVertexPosition(h,$n),s.getVertexPosition(d,Jn);const p=dc(s,e,t,n,Zn,$n,Jn,Ki);if(p){i&&(Xi.fromBufferAttribute(i,l),qi.fromBufferAttribute(i,h),Yi.fromBufferAttribute(i,d),p.uv=Wt.getInterpolation(Ki,Zn,$n,Jn,Xi,qi,Yi,new ce)),r&&(Xi.fromBufferAttribute(r,l),qi.fromBufferAttribute(r,h),Yi.fromBufferAttribute(r,d),p.uv1=Wt.getInterpolation(Ki,Zn,$n,Jn,Xi,qi,Yi,new ce),p.uv2=p.uv1),o&&(Pa.fromBufferAttribute(o,l),La.fromBufferAttribute(o,h),Da.fromBufferAttribute(o,d),p.normal=Wt.getInterpolation(Ki,Zn,$n,Jn,Pa,La,Da,new R),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const a={a:l,b:h,c:d,normal:new R,materialIndex:0};Wt.getNormal(Zn,$n,Jn,a.normal),p.face=a}return p}class En extends kt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const h=[],d=[],p=[],a=[];let c=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(a,2));function g(_,m,f,v,x,M,P,b,w,B,y){const T=M/w,k=P/B,H=M/2,$=P/2,L=b/2,N=w+1,V=B+1;let q=0,W=0;const X=new R;for(let Y=0;Y<V;Y++){const ee=Y*k-$;for(let te=0;te<N;te++){const G=te*T-H;X[_]=G*v,X[m]=ee*x,X[f]=L,d.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[f]=b>0?1:-1,p.push(X.x,X.y,X.z),a.push(te/w),a.push(1-Y/B),q+=1}}for(let Y=0;Y<B;Y++)for(let ee=0;ee<w;ee++){const te=c+ee+N*Y,G=c+ee+N*(Y+1),K=c+(ee+1)+N*(Y+1),oe=c+(ee+1)+N*Y;h.push(te,G,oe),h.push(G,K,oe),W+=6}l.addGroup(u,W,y),u+=W,c+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ci(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=ci(s[t]);for(const i in n)e[i]=n[i]}return e}function fc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Co(s){return s.getRenderTarget()===null?s.outputColorSpace:je.workingColorSpace}const pc={clone:ci,merge:At};var mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mc,this.fragmentShader=gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Po extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Po{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,d=o.fullHeight;r+=o.offsetX*i/h,t-=o.offsetY*n/d,i*=o.width/h,n*=o.height/d}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=-90,ei=1;class _c extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(Qn,ei,e,t);i.layers=this.layers,this.add(i);const r=new Bt(Qn,ei,e,t);r.layers=this.layers,this.add(r);const o=new Bt(Qn,ei,e,t);o.layers=this.layers,this.add(o);const l=new Bt(Qn,ei,e,t);l.layers=this.layers,this.add(l);const h=new Bt(Qn,ei,e,t);h.layers=this.layers,this.add(h);const d=new Bt(Qn,ei,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,l,h]=t;for(const d of t)this.remove(d);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,h,d,p]=this.children,a=e.getRenderTarget(),c=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,h),e.setRenderTarget(n,4,i),e.render(t,d),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(a,c,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lo extends It{constructor(e,t,n,i,r,o,l,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:ai,super(e,t,n,i,r,o,l,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vc extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===On?gt:zt),this.texture=new Lo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new En(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:xn});r.uniforms.tEquirect.value=t;const o=new ke(i,r),l=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Ft),new _c(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Xs=new R,xc=new R,yc=new Be;class Pn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xs.subVectors(n,t).cross(xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yc.getNormalMatrix(e),i=this.coplanarPoint(Xs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new _r,$i=new R;class vr{constructor(e=new Pn,t=new Pn,n=new Pn,i=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln){const n=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],h=i[3],d=i[4],p=i[5],a=i[6],c=i[7],u=i[8],g=i[9],_=i[10],m=i[11],f=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(h-r,c-d,m-u,M-f).normalize(),n[1].setComponents(h+r,c+d,m+u,M+f).normalize(),n[2].setComponents(h+o,c+p,m+g,M+v).normalize(),n[3].setComponents(h-o,c-p,m-g,M-v).normalize(),n[4].setComponents(h-l,c-a,m-_,M-x).normalize(),t===ln)n[5].setComponents(h+l,c+a,m+_,M+x).normalize();else if(t===os)n[5].setComponents(l,a,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(e){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($i.x=i.normal.x>0?e.max.x:e.min.x,$i.y=i.normal.y>0?e.max.y:e.min.y,$i.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Do(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sc(s,e){const t=e.isWebGL2,n=new WeakMap;function i(d,p){const a=d.array,c=d.usage,u=a.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,a,c),d.onUploadCallback();let _;if(a instanceof Float32Array)_=s.FLOAT;else if(a instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(a instanceof Int16Array)_=s.SHORT;else if(a instanceof Uint32Array)_=s.UNSIGNED_INT;else if(a instanceof Int32Array)_=s.INT;else if(a instanceof Int8Array)_=s.BYTE;else if(a instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:g,type:_,bytesPerElement:a.BYTES_PER_ELEMENT,version:d.version,size:u}}function r(d,p,a){const c=p.array,u=p._updateRange,g=p.updateRanges;if(s.bindBuffer(a,d),u.count===-1&&g.length===0&&s.bufferSubData(a,0,c),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?s.bufferSubData(a,f.start*c.BYTES_PER_ELEMENT,c,f.start,f.count):s.bufferSubData(a,f.start*c.BYTES_PER_ELEMENT,c.subarray(f.start,f.start+f.count))}p.clearUpdateRanges()}u.count!==-1&&(t?s.bufferSubData(a,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):s.bufferSubData(a,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1),p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=n.get(d);p&&(s.deleteBuffer(p.buffer),n.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const c=n.get(d);(!c||c.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const a=n.get(d);if(a===void 0)n.set(d,i(d,p));else if(a.version<d.version){if(a.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(a.buffer,d,p),a.version=d.version}}return{get:o,remove:l,update:h}}class hn extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),h=Math.floor(i),d=l+1,p=h+1,a=e/l,c=t/h,u=[],g=[],_=[],m=[];for(let f=0;f<p;f++){const v=f*c-o;for(let x=0;x<d;x++){const M=x*a-r;g.push(M,-v,0),_.push(0,0,1),m.push(x/l),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let v=0;v<l;v++){const x=v+d*f,M=v+d*(f+1),P=v+1+d*(f+1),b=v+1+d*f;u.push(x,M,b),u.push(M,P,b)}this.setIndex(u),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ec=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$c=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ph=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_h=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ch=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,au=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ou=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ru=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Du=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ku=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ku=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$u=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Mc,alphahash_pars_fragment:Ec,alphamap_fragment:Tc,alphamap_pars_fragment:Ac,alphatest_fragment:bc,alphatest_pars_fragment:wc,aomap_fragment:Rc,aomap_pars_fragment:Cc,batching_pars_vertex:Pc,batching_vertex:Lc,begin_vertex:Dc,beginnormal_vertex:Ic,bsdfs:Uc,iridescence_fragment:Nc,bumpmap_pars_fragment:Oc,clipping_planes_fragment:Fc,clipping_planes_pars_fragment:Bc,clipping_planes_pars_vertex:zc,clipping_planes_vertex:kc,color_fragment:Hc,color_pars_fragment:Gc,color_pars_vertex:Vc,color_vertex:Wc,common:Xc,cube_uv_reflection_fragment:qc,defaultnormal_vertex:Yc,displacementmap_pars_vertex:Kc,displacementmap_vertex:jc,emissivemap_fragment:Zc,emissivemap_pars_fragment:$c,colorspace_fragment:Jc,colorspace_pars_fragment:Qc,envmap_fragment:eh,envmap_common_pars_fragment:th,envmap_pars_fragment:nh,envmap_pars_vertex:ih,envmap_physical_pars_fragment:mh,envmap_vertex:sh,fog_vertex:rh,fog_pars_vertex:ah,fog_fragment:oh,fog_pars_fragment:lh,gradientmap_pars_fragment:ch,lightmap_fragment:hh,lightmap_pars_fragment:uh,lights_lambert_fragment:dh,lights_lambert_pars_fragment:fh,lights_pars_begin:ph,lights_toon_fragment:gh,lights_toon_pars_fragment:_h,lights_phong_fragment:vh,lights_phong_pars_fragment:xh,lights_physical_fragment:yh,lights_physical_pars_fragment:Sh,lights_fragment_begin:Mh,lights_fragment_maps:Eh,lights_fragment_end:Th,logdepthbuf_fragment:Ah,logdepthbuf_pars_fragment:bh,logdepthbuf_pars_vertex:wh,logdepthbuf_vertex:Rh,map_fragment:Ch,map_pars_fragment:Ph,map_particle_fragment:Lh,map_particle_pars_fragment:Dh,metalnessmap_fragment:Ih,metalnessmap_pars_fragment:Uh,morphcolor_vertex:Nh,morphnormal_vertex:Oh,morphtarget_pars_vertex:Fh,morphtarget_vertex:Bh,normal_fragment_begin:zh,normal_fragment_maps:kh,normal_pars_fragment:Hh,normal_pars_vertex:Gh,normal_vertex:Vh,normalmap_pars_fragment:Wh,clearcoat_normal_fragment_begin:Xh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:Kh,opaque_fragment:jh,packing:Zh,premultiplied_alpha_fragment:$h,project_vertex:Jh,dithering_fragment:Qh,dithering_pars_fragment:eu,roughnessmap_fragment:tu,roughnessmap_pars_fragment:nu,shadowmap_pars_fragment:iu,shadowmap_pars_vertex:su,shadowmap_vertex:ru,shadowmask_pars_fragment:au,skinbase_vertex:ou,skinning_pars_vertex:lu,skinning_vertex:cu,skinnormal_vertex:hu,specularmap_fragment:uu,specularmap_pars_fragment:du,tonemapping_fragment:fu,tonemapping_pars_fragment:pu,transmission_fragment:mu,transmission_pars_fragment:gu,uv_pars_fragment:_u,uv_pars_vertex:vu,uv_vertex:xu,worldpos_vertex:yu,background_vert:Su,background_frag:Mu,backgroundCube_vert:Eu,backgroundCube_frag:Tu,cube_vert:Au,cube_frag:bu,depth_vert:wu,depth_frag:Ru,distanceRGBA_vert:Cu,distanceRGBA_frag:Pu,equirect_vert:Lu,equirect_frag:Du,linedashed_vert:Iu,linedashed_frag:Uu,meshbasic_vert:Nu,meshbasic_frag:Ou,meshlambert_vert:Fu,meshlambert_frag:Bu,meshmatcap_vert:zu,meshmatcap_frag:ku,meshnormal_vert:Hu,meshnormal_frag:Gu,meshphong_vert:Vu,meshphong_frag:Wu,meshphysical_vert:Xu,meshphysical_frag:qu,meshtoon_vert:Yu,meshtoon_frag:Ku,points_vert:ju,points_frag:Zu,shadow_vert:$u,shadow_frag:Ju,sprite_vert:Qu,sprite_frag:ed},ie={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Kt={basic:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:At([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:At([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:At([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:At([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:At([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:At([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:At([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:At([ie.lights,ie.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Kt.physical={uniforms:At([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ji={r:0,b:0,g:0};function td(s,e,t,n,i,r,o){const l=new Ge(0);let h=r===!0?0:1,d,p,a=null,c=0,u=null;function g(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(l,h):x&&x.isColor&&(_(x,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===cs)?(p===void 0&&(p=new ke(new En(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ci(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=x,p.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,p.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,(a!==x||c!==x.version||u!==s.toneMapping)&&(p.material.needsUpdate=!0,a=x,c=x.version,u=s.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):x&&x.isTexture&&(d===void 0&&(d=new ke(new hn(2,2),new Bn({name:"BackgroundMaterial",uniforms:ci(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=x,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),d.material.uniforms.uvTransform.value.copy(x.matrix),(a!==x||c!==x.version||u!==s.toneMapping)&&(d.material.needsUpdate=!0,a=x,c=x.version,u=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function _(m,f){m.getRGB(Ji,Co(s)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,f,o)}return{getClearColor:function(){return l},setClearColor:function(m,f=1){l.set(m),h=f,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(l,h)},render:g}}function nd(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,l={},h=m(null);let d=h,p=!1;function a(L,N,V,q,W){let X=!1;if(o){const Y=_(q,V,N);d!==Y&&(d=Y,u(d.object)),X=f(L,q,V,W),X&&v(L,q,V,W)}else{const Y=N.wireframe===!0;(d.geometry!==q.id||d.program!==V.id||d.wireframe!==Y)&&(d.geometry=q.id,d.program=V.id,d.wireframe=Y,X=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||p)&&(p=!1,B(L,N,V,q),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function u(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,V){const q=V.wireframe===!0;let W=l[L.id];W===void 0&&(W={},l[L.id]=W);let X=W[N.id];X===void 0&&(X={},W[N.id]=X);let Y=X[q];return Y===void 0&&(Y=m(c()),X[q]=Y),Y}function m(L){const N=[],V=[],q=[];for(let W=0;W<i;W++)N[W]=0,V[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:q,object:L,attributes:{},index:null}}function f(L,N,V,q){const W=d.attributes,X=N.attributes;let Y=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){const K=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;Y++}return d.attributesNum!==Y||d.index!==q}function v(L,N,V,q){const W={},X=N.attributes;let Y=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){let K=X[te];K===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),W[te]=oe,Y++}d.attributes=W,d.attributesNum=Y,d.index=q}function x(){const L=d.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function M(L){P(L,0)}function P(L,N){const V=d.newAttributes,q=d.enabledAttributes,W=d.attributeDivisors;V[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),W[L]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),W[L]=N)}function b(){const L=d.newAttributes,N=d.enabledAttributes;for(let V=0,q=N.length;V<q;V++)N[V]!==L[V]&&(s.disableVertexAttribArray(V),N[V]=0)}function w(L,N,V,q,W,X,Y){Y===!0?s.vertexAttribIPointer(L,N,V,W,X):s.vertexAttribPointer(L,N,V,q,W,X)}function B(L,N,V,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=q.attributes,X=V.getAttributes(),Y=N.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let G=W[ee];if(G===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const K=G.normalized,oe=G.itemSize,ge=t.get(G);if(ge===void 0)continue;const me=ge.buffer,Re=ge.type,Pe=ge.bytesPerElement,Me=n.isWebGL2===!0&&(Re===s.INT||Re===s.UNSIGNED_INT||G.gpuType===ho);if(G.isInterleavedBufferAttribute){const We=G.data,I=We.stride,Mt=G.offset;if(We.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)P(te.location+ve,We.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ve=0;ve<te.locationSize;ve++)M(te.location+ve);s.bindBuffer(s.ARRAY_BUFFER,me);for(let ve=0;ve<te.locationSize;ve++)w(te.location+ve,oe/te.locationSize,Re,K,I*Pe,(Mt+oe/te.locationSize*ve)*Pe,Me)}else{if(G.isInstancedBufferAttribute){for(let We=0;We<te.locationSize;We++)P(te.location+We,G.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let We=0;We<te.locationSize;We++)M(te.location+We);s.bindBuffer(s.ARRAY_BUFFER,me);for(let We=0;We<te.locationSize;We++)w(te.location+We,oe/te.locationSize,Re,K,oe*Pe,oe/te.locationSize*We*Pe,Me)}}else if(Y!==void 0){const K=Y[ee];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(te.location,K);break;case 3:s.vertexAttrib3fv(te.location,K);break;case 4:s.vertexAttrib4fv(te.location,K);break;default:s.vertexAttrib1fv(te.location,K)}}}}b()}function y(){H();for(const L in l){const N=l[L];for(const V in N){const q=N[V];for(const W in q)g(q[W].object),delete q[W];delete N[V]}delete l[L]}}function T(L){if(l[L.id]===void 0)return;const N=l[L.id];for(const V in N){const q=N[V];for(const W in q)g(q[W].object),delete q[W];delete N[V]}delete l[L.id]}function k(L){for(const N in l){const V=l[N];if(V[L.id]===void 0)continue;const q=V[L.id];for(const W in q)g(q[W].object),delete q[W];delete V[L.id]}}function H(){$(),p=!0,d!==h&&(d=h,u(d.object))}function $(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:a,reset:H,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function id(s,e,t,n){const i=n.isWebGL2;let r;function o(p){r=p}function l(p,a){s.drawArrays(r,p,a),t.update(a,r,1)}function h(p,a,c){if(c===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,p,a,c),t.update(a,r,c)}function d(p,a,c){if(c===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c;g++)this.render(p[g],a[g]);else{u.multiDrawArraysWEBGL(r,p,0,a,0,c);let g=0;for(let _=0;_<c;_++)g+=a[_];t.update(g,r,1)}}this.setMode=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d}function sd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const h=r(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=o||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,a=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),c=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=c>0,M=o||e.has("OES_texture_float"),P=x&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:d,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:p,maxTextures:a,maxVertexTextures:c,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:b}}function rd(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Pn,l=new Be,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c){const u=a.length!==0||c||n!==0||i;return i=c,n=a.length,u},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(a,c){t=p(a,c,0)},this.setState=function(a,c,u){const g=a.clippingPlanes,_=a.clipIntersection,m=a.clipShadows,f=s.get(a);if(!i||g===null||g.length===0||r&&!m)r?p(null):d();else{const v=r?0:n,x=v*4;let M=f.clippingState||null;h.value=M,M=p(g,c,x,u);for(let P=0;P!==x;++P)M[P]=t[P];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(a,c,u,g){const _=a!==null?a.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const f=u+_*4,v=c.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=u;x!==_;++x,M+=4)o.copy(a[x]).applyMatrix4(v,l),o.normal.toArray(m,M),m[M+3]=o.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ad(s){let e=new WeakMap;function t(o,l){return l===rr?o.mapping=ai:l===ar&&(o.mapping=oi),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===rr||l===ar)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const d=new vc(h.height/2);return d.fromEquirectangularTexture(s,o),e.set(o,d),o.addEventListener("dispose",i),t(d.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xr extends Po{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Ia=[.125,.215,.35,.446,.526,.582],In=20,qs=new xr,Ua=new Ge;let Ys=null,Ks=0,js=0;const Ln=(1+Math.sqrt(5))/2,ti=1/Ln,Na=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ln,ti),new R(0,Ln,-ti),new R(ti,0,Ln),new R(-ti,0,Ln),new R(Ln,ti,0),new R(-Ln,ti,0)];class Oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ys=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys,Ks,js),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ai||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ai,format:qt,colorSpace:cn,depthBuffer:!1},i=Fa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=od(r)),this._blurMaterial=ld(r,e,t)}return i}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,n,i){const l=new Bt(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,a=p.autoClear,c=p.toneMapping;p.getClearColor(Ua),p.toneMapping=yn,p.autoClear=!1;const u=new mt({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new ke(new En,u);let _=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,_=!0):(u.color.copy(Ua),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(l.up.set(0,h[f],0),l.lookAt(d[f],0,0)):v===1?(l.up.set(0,0,h[f]),l.lookAt(0,d[f],0)):(l.up.set(0,h[f],0),l.lookAt(0,0,d[f]));const x=this._cubeSize;Qi(i,v*x,f>2?x:0,x,x),p.setRenderTarget(i),_&&p.render(g,l),p.render(e,l)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=c,p.autoClear=a,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ai||e.mapping===oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const h=this._cubeSize;Qi(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Na[(i-1)%Na.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,l){const h=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,a=new ke(this._lodPlanes[i],d),c=d.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*In-1),_=r/g,m=isFinite(r)?1+Math.floor(p*_):In;m>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);const f=[];let v=0;for(let w=0;w<In;++w){const B=w/_,y=Math.exp(-B*B/2);f.push(y),w===0?v+=y:w<m&&(v+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value=o==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:x}=this;c.dTheta.value=g,c.mipInt.value=x-n;const M=this._sizeLods[i],P=3*M*(i>x-ni?i-x+ni:0),b=4*(this._cubeSize-M);Qi(t,P,b,3*M,2*M),h.setRenderTarget(t),h.render(a,qs)}}function od(s){const e=[],t=[],n=[];let i=s;const r=s-ni+1+Ia.length;for(let o=0;o<r;o++){const l=Math.pow(2,i);t.push(l);let h=1/l;o>s-ni?h=Ia[o-s+ni-1]:o===0&&(h=0),n.push(h);const d=1/(l-2),p=-d,a=1+d,c=[p,p,a,p,a,a,p,p,a,a,p,a],u=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*u),x=new Float32Array(m*g*u),M=new Float32Array(f*g*u);for(let b=0;b<u;b++){const w=b%3*2/3-1,B=b>2?0:-1,y=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];v.set(y,_*g*b),x.set(c,m*g*b);const T=[b,b,b,b,b,b];M.set(T,f*g*b)}const P=new kt;P.setAttribute("position",new Zt(v,_)),P.setAttribute("uv",new Zt(x,m)),P.setAttribute("faceIndex",new Zt(M,f)),e.push(P),i>ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fa(s,e,t){const n=new Fn(s,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ld(s,e,t){const n=new Float32Array(In),i=new R(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ba(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function za(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function yr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cd(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,d=h===rr||h===ar,p=h===ai||h===oi;if(d||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let a=e.get(l);return t===null&&(t=new Oa(s)),a=d?t.fromEquirectangular(l,a):t.fromCubemap(l,a),e.set(l,a),a.texture}else{if(e.has(l))return e.get(l).texture;{const a=l.image;if(d&&a&&a.height>0||p&&a&&i(a)){t===null&&(t=new Oa(s));const c=d?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,c),l.addEventListener("dispose",r),c.texture}else return null}}}return l}function i(l){let h=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&h++;return h===d}function r(l){const h=l.target;h.removeEventListener("dispose",r);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ud(s,e,t,n){const i={},r=new WeakMap;function o(a){const c=a.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);for(const g in c.morphAttributes){const _=c.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}c.removeEventListener("dispose",o),delete i[c.id];const u=r.get(c);u&&(e.remove(u),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(a,c){return i[c.id]===!0||(c.addEventListener("dispose",o),i[c.id]=!0,t.memory.geometries++),c}function h(a){const c=a.attributes;for(const g in c)e.update(c[g],s.ARRAY_BUFFER);const u=a.morphAttributes;for(const g in u){const _=u[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function d(a){const c=[],u=a.index,g=a.attributes.position;let _=0;if(u!==null){const v=u.array;_=u.version;for(let x=0,M=v.length;x<M;x+=3){const P=v[x+0],b=v[x+1],w=v[x+2];c.push(P,b,b,w,w,P)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const P=x+0,b=x+1,w=x+2;c.push(P,b,b,w,w,P)}}else return;const m=new(So(c)?Ro:wo)(c,1);m.version=_;const f=r.get(a);f&&e.remove(f),r.set(a,m)}function p(a){const c=r.get(a);if(c){const u=a.index;u!==null&&c.version<u.version&&d(a)}else d(a);return r.get(a)}return{get:l,update:h,getWireframeAttribute:p}}function dd(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}let l,h;function d(u){l=u.type,h=u.bytesPerElement}function p(u,g){s.drawElements(r,g,l,u*h),t.update(g,r,1)}function a(u,g,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,l,u*h,_),t.update(g,r,_)}function c(u,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(u[f]/h,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,l,u,0,_);let f=0;for(let v=0;v<_;v++)f+=g[v];t.update(f,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=a,this.renderMultiDraw=c}function fd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pd(s,e){return s[0]-e[0]}function md(s,e){return Math.abs(e[1])-Math.abs(s[1])}function gd(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new et,l=[];for(let d=0;d<8;d++)l[d]=[d,0];function h(d,p,a){const c=d.morphTargetInfluences;if(e.isWebGL2===!0){const g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(p);if(m===void 0||m.count!==_){let N=function(){$.dispose(),r.delete(p),p.removeEventListener("dispose",N)};var u=N;m!==void 0&&m.texture.dispose();const x=p.morphAttributes.position!==void 0,M=p.morphAttributes.normal!==void 0,P=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),P===!0&&(y=3);let T=p.attributes.position.count*y,k=1;T>e.maxTextureSize&&(k=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*k*4*_),$=new To(H,T,k,_);$.type=vn,$.needsUpdate=!0;const L=y*4;for(let V=0;V<_;V++){const q=b[V],W=w[V],X=B[V],Y=T*k*4*V;for(let ee=0;ee<q.count;ee++){const te=ee*L;x===!0&&(o.fromBufferAttribute(q,ee),H[Y+te+0]=o.x,H[Y+te+1]=o.y,H[Y+te+2]=o.z,H[Y+te+3]=0),M===!0&&(o.fromBufferAttribute(W,ee),H[Y+te+4]=o.x,H[Y+te+5]=o.y,H[Y+te+6]=o.z,H[Y+te+7]=0),P===!0&&(o.fromBufferAttribute(X,ee),H[Y+te+8]=o.x,H[Y+te+9]=o.y,H[Y+te+10]=o.z,H[Y+te+11]=X.itemSize===4?o.w:1)}}m={count:_,texture:$,size:new ce(T,k)},r.set(p,m),p.addEventListener("dispose",N)}let f=0;for(let x=0;x<c.length;x++)f+=c[x];const v=p.morphTargetsRelative?1:1-f;a.getUniforms().setValue(s,"morphTargetBaseInfluence",v),a.getUniforms().setValue(s,"morphTargetInfluences",c),a.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=c===void 0?0:c.length;let _=n[p.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[p.id]=_}for(let M=0;M<g;M++){const P=_[M];P[0]=M,P[1]=c[M]}_.sort(md);for(let M=0;M<8;M++)M<g&&_[M][1]?(l[M][0]=_[M][0],l[M][1]=_[M][1]):(l[M][0]=Number.MAX_SAFE_INTEGER,l[M][1]=0);l.sort(pd);const m=p.morphAttributes.position,f=p.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const P=l[M],b=P[0],w=P[1];b!==Number.MAX_SAFE_INTEGER&&w?(m&&p.getAttribute("morphTarget"+M)!==m[b]&&p.setAttribute("morphTarget"+M,m[b]),f&&p.getAttribute("morphNormal"+M)!==f[b]&&p.setAttribute("morphNormal"+M,f[b]),i[M]=w,v+=w):(m&&p.hasAttribute("morphTarget"+M)===!0&&p.deleteAttribute("morphTarget"+M),f&&p.hasAttribute("morphNormal"+M)===!0&&p.deleteAttribute("morphNormal"+M),i[M]=0)}const x=p.morphTargetsRelative?1:1-v;a.getUniforms().setValue(s,"morphTargetBaseInfluence",x),a.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:h}}function _d(s,e,t,n){let i=new WeakMap;function r(h){const d=n.render.frame,p=h.geometry,a=e.get(h,p);if(i.get(a)!==d&&(e.update(a),i.set(a,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),i.get(h)!==d&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),i.set(h,d))),h.isSkinnedMesh){const c=h.skeleton;i.get(c)!==d&&(c.update(),i.set(c,d))}return a}function o(){i=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}class Io extends It{constructor(e,t,n,i,r,o,l,h,d,p){if(p=p!==void 0?p:Nn,p!==Nn&&p!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Nn&&(n=_n),n===void 0&&p===li&&(n=Un),super(null,i,r,o,l,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:bt,this.minFilter=h!==void 0?h:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Uo=new It,No=new Io(1,1);No.compareFunction=yo;const Oo=new To,Fo=new ec,Bo=new Lo,ka=[],Ha=[],Ga=new Float32Array(16),Va=new Float32Array(9),Wa=new Float32Array(4);function ui(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ka[i];if(r===void 0&&(r=new Float32Array(i),ka[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ds(s,e){let t=Ha[e];t===void 0&&(t=new Int32Array(e),Ha[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),ut(t,e)}}function yd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),ut(t,e)}}function Sd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),ut(t,e)}}function Md(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Wa.set(n),s.uniformMatrix2fv(this.addr,!1,Wa),ut(t,n)}}function Ed(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Va.set(n),s.uniformMatrix3fv(this.addr,!1,Va),ut(t,n)}}function Td(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Ga.set(n),s.uniformMatrix4fv(this.addr,!1,Ga),ut(t,n)}}function Ad(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),ut(t,e)}}function wd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),ut(t,e)}}function Rd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),ut(t,e)}}function Cd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),ut(t,e)}}function Ld(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),ut(t,e)}}function Dd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),ut(t,e)}}function Id(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?No:Uo;t.setTexture2D(e||r,i)}function Ud(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fo,i)}function Nd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bo,i)}function Od(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Oo,i)}function Fd(s){switch(s){case 5126:return vd;case 35664:return xd;case 35665:return yd;case 35666:return Sd;case 35674:return Md;case 35675:return Ed;case 35676:return Td;case 5124:case 35670:return Ad;case 35667:case 35671:return bd;case 35668:case 35672:return wd;case 35669:case 35673:return Rd;case 5125:return Cd;case 36294:return Pd;case 36295:return Ld;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Nd;case 36289:case 36303:case 36311:case 36292:return Od}}function Bd(s,e){s.uniform1fv(this.addr,e)}function zd(s,e){const t=ui(e,this.size,2);s.uniform2fv(this.addr,t)}function kd(s,e){const t=ui(e,this.size,3);s.uniform3fv(this.addr,t)}function Hd(s,e){const t=ui(e,this.size,4);s.uniform4fv(this.addr,t)}function Gd(s,e){const t=ui(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vd(s,e){const t=ui(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wd(s,e){const t=ui(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xd(s,e){s.uniform1iv(this.addr,e)}function qd(s,e){s.uniform2iv(this.addr,e)}function Yd(s,e){s.uniform3iv(this.addr,e)}function Kd(s,e){s.uniform4iv(this.addr,e)}function jd(s,e){s.uniform1uiv(this.addr,e)}function Zd(s,e){s.uniform2uiv(this.addr,e)}function $d(s,e){s.uniform3uiv(this.addr,e)}function Jd(s,e){s.uniform4uiv(this.addr,e)}function Qd(s,e,t){const n=this.cache,i=e.length,r=ds(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Uo,r[o])}function ef(s,e,t){const n=this.cache,i=e.length,r=ds(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Fo,r[o])}function tf(s,e,t){const n=this.cache,i=e.length,r=ds(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Bo,r[o])}function nf(s,e,t){const n=this.cache,i=e.length,r=ds(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Oo,r[o])}function sf(s){switch(s){case 5126:return Bd;case 35664:return zd;case 35665:return kd;case 35666:return Hd;case 35674:return Gd;case 35675:return Vd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Kd;case 5125:return jd;case 36294:return Zd;case 36295:return $d;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return nf}}class rf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fd(t.type)}}class af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sf(t.type)}}class of{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function Xa(s,e){s.seq.push(e),s.map[e.id]=e}function lf(s,e,t){const n=s.name,i=n.length;for(Zs.lastIndex=0;;){const r=Zs.exec(n),o=Zs.lastIndex;let l=r[1];const h=r[2]==="]",d=r[3];if(h&&(l=l|0),d===void 0||d==="["&&o+2===i){Xa(t,d===void 0?new rf(l,s,e):new af(l,s,e));break}else{let a=t.map[l];a===void 0&&(a=new of(l),Xa(t,a)),t=a}}}class ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);lf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const l=t[r],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qa(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const cf=37297;let hf=0;function uf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function df(s){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s);let n;switch(e===t?n="":e===as&&t===rs?n="LinearDisplayP3ToLinearSRGB":e===rs&&t===as&&(n="LinearSRGBToLinearDisplayP3"),s){case cn:case hs:return[n,"LinearTransferOETF"];case gt:case gr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ya(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+uf(s.getShaderSource(e),o)}else return i}function ff(s,e){const t=df(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pf(s,e){let t;switch(e){case El:t="Linear";break;case Tl:t="Reinhard";break;case Al:t="OptimizedCineon";break;case bl:t="ACESFilmic";break;case Rl:t="AgX";break;case wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function gf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ii).join(`
`)}function _f(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vf(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function ii(s){return s!==""}function Ka(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ja(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(s){return s.replace(xf,Sf)}const yf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sf(s,e){let t=De[e];if(t===void 0){const n=yf.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dr(t)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Za(s){return s.replace(Mf,Ef)}function Ef(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $a(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ao?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===oo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function Af(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ai:case oi:e="ENVMAP_TYPE_CUBE";break;case cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case oi:e="ENVMAP_MODE_REFRACTION";break}return e}function wf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lo:e="ENVMAP_BLENDING_MULTIPLY";break;case Sl:e="ENVMAP_BLENDING_MIX";break;case Ml:e="ENVMAP_BLENDING_ADD";break}return e}function Rf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cf(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const h=Tf(t),d=Af(t),p=bf(t),a=wf(t),c=Rf(t),u=t.isWebGL2?"":mf(t),g=gf(t),_=_f(r),m=i.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ii).join(`
`),f.length>0&&(f+=`
`),v=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ii).join(`
`),v.length>0&&(v+=`
`)):(f=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),v=[u,$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+a:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?De.tonemapping_pars_fragment:"",t.toneMapping!==yn?pf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,ff("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),o=dr(o),o=Ka(o,t),o=ja(o,t),l=dr(l),l=Ka(l,t),l=ja(l,t),o=Za(o),l=Za(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+f+o,P=x+v+l,b=qa(i,i.VERTEX_SHADER,M),w=qa(i,i.FRAGMENT_SHADER,P);i.attachShader(m,b),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(H){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(w).trim();let V=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,w);else{const W=Ya(i,b,"vertex"),X=Ya(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+W+`
`+X)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||N==="")&&(q=!1);q&&(H.diagnostics={runnable:V,programLog:$,vertexShader:{log:L,prefix:f},fragmentShader:{log:N,prefix:v}})}i.deleteShader(b),i.deleteShader(w),y=new ts(i,m),T=vf(i,m)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(m,cf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hf++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}let Pf=0;class Lf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Df(e),t.set(e,n)),n}}class Df{constructor(e){this.id=Pf++,this.code=e,this.usedTimes=0}}function If(s,e,t,n,i,r,o){const l=new Ao,h=new Lf,d=[],p=i.isWebGL2,a=i.logarithmicDepthBuffer,c=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,T,k,H,$){const L=H.fog,N=$.geometry,V=y.isMeshStandardMaterial?H.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),W=q&&q.mapping===cs?q.image.height:null,X=g[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=Y!==void 0?Y.length:0;let te=0;N.morphAttributes.position!==void 0&&(te=1),N.morphAttributes.normal!==void 0&&(te=2),N.morphAttributes.color!==void 0&&(te=3);let G,K,oe,ge;if(X){const Et=Kt[X];G=Et.vertexShader,K=Et.fragmentShader}else G=y.vertexShader,K=y.fragmentShader,h.update(y),oe=h.getVertexShaderID(y),ge=h.getFragmentShaderID(y);const me=s.getRenderTarget(),Re=$.isInstancedMesh===!0,Pe=$.isBatchedMesh===!0,Me=!!y.map,We=!!y.matcap,I=!!q,Mt=!!y.aoMap,ve=!!y.lightMap,be=!!y.bumpMap,de=!!y.normalMap,tt=!!y.displacementMap,Ie=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,O=y.anisotropy>0,J=y.clearcoat>0,Z=y.iridescence>0,Q=y.sheen>0,fe=y.transmission>0,ae=O&&!!y.anisotropyMap,he=J&&!!y.clearcoatMap,Se=J&&!!y.clearcoatNormalMap,Ue=J&&!!y.clearcoatRoughnessMap,j=Z&&!!y.iridescenceMap,Ke=Z&&!!y.iridescenceThicknessMap,ze=Q&&!!y.sheenColorMap,Ae=Q&&!!y.sheenRoughnessMap,_e=!!y.specularMap,ue=!!y.specularColorMap,Le=!!y.specularIntensityMap,Ye=fe&&!!y.transmissionMap,it=fe&&!!y.thicknessMap,Oe=!!y.gradientMap,ne=!!y.alphaMap,C=y.alphaTest>0,se=!!y.alphaHash,re=!!y.extensions,Ee=!!N.attributes.uv1,xe=!!N.attributes.uv2,Ze=!!N.attributes.uv3;let $e=yn;return y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=s.toneMapping),{isWebGL2:p,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:K,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Pe,instancing:Re,instancingColor:Re&&$.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:cn,map:Me,matcap:We,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:W,aoMap:Mt,lightMap:ve,bumpMap:be,normalMap:de,displacementMap:c&&tt,emissiveMap:Ie,normalMapObjectSpace:de&&y.normalMapType===kl,normalMapTangentSpace:de&&y.normalMapType===xo,metalnessMap:A,roughnessMap:S,anisotropy:O,anisotropyMap:ae,clearcoat:J,clearcoatMap:he,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ue,iridescence:Z,iridescenceMap:j,iridescenceThicknessMap:Ke,sheen:Q,sheenColorMap:ze,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:ue,specularIntensityMap:Le,transmission:fe,transmissionMap:Ye,thicknessMap:it,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===si,alphaMap:ne,alphaTest:C,alphaHash:se,combine:y.combine,mapUv:Me&&_(y.map.channel),aoMapUv:Mt&&_(y.aoMap.channel),lightMapUv:ve&&_(y.lightMap.channel),bumpMapUv:be&&_(y.bumpMap.channel),normalMapUv:de&&_(y.normalMap.channel),displacementMapUv:tt&&_(y.displacementMap.channel),emissiveMapUv:Ie&&_(y.emissiveMap.channel),metalnessMapUv:A&&_(y.metalnessMap.channel),roughnessMapUv:S&&_(y.roughnessMap.channel),anisotropyMapUv:ae&&_(y.anisotropyMap.channel),clearcoatMapUv:he&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:ue&&_(y.specularColorMap.channel),specularIntensityMapUv:Le&&_(y.specularIntensityMap.channel),transmissionMapUv:Ye&&_(y.transmissionMap.channel),thicknessMapUv:it&&_(y.thicknessMap.channel),alphaMapUv:ne&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(de||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:xe,vertexUv3s:Ze,pointsUvs:$.isPoints===!0&&!!N.attributes.uv&&(Me||ne),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:$.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:re&&y.extensions.derivatives===!0,extensionFragDepth:re&&y.extensions.fragDepth===!0,extensionDrawBuffers:re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)T.push(k),T.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(v(T,y),x(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){l.disableAll(),T.isWebGL2&&l.enable(0),T.supportsVertexTextures&&l.enable(1),T.instancing&&l.enable(2),T.instancingColor&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),y.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.skinning&&l.enable(4),T.morphTargets&&l.enable(5),T.morphNormals&&l.enable(6),T.morphColors&&l.enable(7),T.premultipliedAlpha&&l.enable(8),T.shadowMapEnabled&&l.enable(9),T.useLegacyLights&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),y.push(l.mask)}function M(y){const T=g[y.type];let k;if(T){const H=Kt[T];k=pc.clone(H.uniforms)}else k=y.uniforms;return k}function P(y,T){let k;for(let H=0,$=d.length;H<$;H++){const L=d[H];if(L.cacheKey===T){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Cf(s,T,y,r),d.push(k)),k}function b(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function w(y){h.remove(y)}function B(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:b,releaseShaderCache:w,programs:d,dispose:B}}function Uf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Nf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ja(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(a,c,u,g,_,m){let f=s[e];return f===void 0?(f={id:a.id,object:a,geometry:c,material:u,groupOrder:g,renderOrder:a.renderOrder,z:_,group:m},s[e]=f):(f.id=a.id,f.object=a,f.geometry=c,f.material=u,f.groupOrder=g,f.renderOrder=a.renderOrder,f.z=_,f.group=m),e++,f}function l(a,c,u,g,_,m){const f=o(a,c,u,g,_,m);u.transmission>0?n.push(f):u.transparent===!0?i.push(f):t.push(f)}function h(a,c,u,g,_,m){const f=o(a,c,u,g,_,m);u.transmission>0?n.unshift(f):u.transparent===!0?i.unshift(f):t.unshift(f)}function d(a,c){t.length>1&&t.sort(a||Nf),n.length>1&&n.sort(c||Ja),i.length>1&&i.sort(c||Ja)}function p(){for(let a=e,c=s.length;a<c;a++){const u=s[a];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:h,finish:p,sort:d}}function Of(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qa,s.set(n,[o])):i>=r.length?(o=new Qa,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ff(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ge};break;case"SpotLight":t={position:new R,direction:new R,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Bf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zf=0;function kf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Hf(s,e){const t=new Ff,n=Bf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new R);const r=new R,o=new ot,l=new ot;function h(p,a){let c=0,u=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,m=0,f=0,v=0,x=0,M=0,P=0,b=0,w=0,B=0,y=0;p.sort(kf);const T=a===!0?Math.PI:1;for(let H=0,$=p.length;H<$;H++){const L=p[H],N=L.color,V=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=N.r*V*T,u+=N.g*V*T,g+=N.b*V*T;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],V);y++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=L.shadow.matrix,M++}i.directional[_]=X,_++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(V*T),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[f]=X;const Y=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&B++),i.spotLightMatrix[f]=Y.matrix,L.castShadow){const ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=W,b++}f++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(N).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=X,v++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=L.shadow.matrix,P++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V*T),X.groundColor.copy(L.groundColor).multiplyScalar(V*T),i.hemi[x]=X,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=g;const k=i.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==f||k.rectAreaLength!==v||k.hemiLength!==x||k.numDirectionalShadows!==M||k.numPointShadows!==P||k.numSpotShadows!==b||k.numSpotMaps!==w||k.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=b+w-B,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=y,k.directionalLength=_,k.pointLength=m,k.spotLength=f,k.rectAreaLength=v,k.hemiLength=x,k.numDirectionalShadows=M,k.numPointShadows=P,k.numSpotShadows=b,k.numSpotMaps=w,k.numLightProbes=y,i.version=zf++)}function d(p,a){let c=0,u=0,g=0,_=0,m=0;const f=a.matrixWorldInverse;for(let v=0,x=p.length;v<x;v++){const M=p[v];if(M.isDirectionalLight){const P=i.directional[c];P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),c++}else if(M.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),l.identity(),o.copy(M.matrixWorld),o.premultiply(f),l.extractRotation(o),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(l),P.halfHeight.applyMatrix4(l),_++}else if(M.isPointLight){const P=i.point[u];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),u++}else if(M.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:h,setupView:d,state:i}}function eo(s,e){const t=new Hf(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(a){n.push(a)}function l(a){i.push(a)}function h(a){t.setup(n,a)}function d(a){t.setupView(n,a)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:h,setupLightsView:d,pushLight:o,pushShadow:l}}function Gf(s,e){let t=new WeakMap;function n(r,o=0){const l=t.get(r);let h;return l===void 0?(h=new eo(s,e),t.set(r,[h])):o>=l.length?(h=new eo(s,e),l.push(h)):h=l[o],h}function i(){t=new WeakMap}return{get:n,dispose:i}}class Vf extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wf extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yf(s,e,t){let n=new vr;const i=new ce,r=new ce,o=new et,l=new Vf({depthPacking:zl}),h=new Wf,d={},p=t.maxTextureSize,a={[Mn]:wt,[wt]:Mn,[on]:on},c=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Xf,fragmentShader:qf}),u=c.clone();u.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ke(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let f=this.type;this.render=function(b,w,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),T=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),H=s.state;H.setBlending(xn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const $=f!==an&&this.type===an,L=f===an&&this.type!==an;for(let N=0,V=b.length;N<V;N++){const q=b[N],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(r.x=Math.floor(p/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>p&&(r.y=Math.floor(p/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||$===!0||L===!0){const ee=this.type!==an?{minFilter:bt,magFilter:bt}:{};W.map!==null&&W.map.dispose(),W.map=new Fn(i.x,i.y,ee),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Y=W.getViewportCount();for(let ee=0;ee<Y;ee++){const te=W.getViewport(ee);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),H.viewport(o),W.updateMatrices(q,ee),n=W.getFrustum(),M(w,B,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===an&&v(W,B),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,T,k)};function v(b,w){const B=e.update(_);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fn(i.x,i.y)),c.uniforms.shadow_pass.value=b.map.texture,c.uniforms.resolution.value=b.mapSize,c.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,B,c,_,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,B,u,_,null)}function x(b,w,B,y){let T=null;const k=B.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)T=k;else if(T=B.isPointLight===!0?h:l,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=T.uuid,$=w.uuid;let L=d[H];L===void 0&&(L={},d[H]=L);let N=L[$];N===void 0&&(N=T.clone(),L[$]=N,w.addEventListener("dispose",P)),T=N}if(T.visible=w.visible,T.wireframe=w.wireframe,y===an?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:a[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=s.properties.get(T);H.light=B}return T}function M(b,w,B,y,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===an)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld);const $=e.update(b),L=b.material;if(Array.isArray(L)){const N=$.groups;for(let V=0,q=N.length;V<q;V++){const W=N[V],X=L[W.materialIndex];if(X&&X.visible){const Y=x(b,X,y,T);b.onBeforeShadow(s,b,w,B,$,Y,W),s.renderBufferDirect(B,null,$,Y,b,W),b.onAfterShadow(s,b,w,B,$,Y,W)}}}else if(L.visible){const N=x(b,L,y,T);b.onBeforeShadow(s,b,w,B,$,N,null),s.renderBufferDirect(B,null,$,N,b,null),b.onAfterShadow(s,b,w,B,$,N,null)}}const H=b.children;for(let $=0,L=H.length;$<L;$++)M(H[$],w,B,y,T)}function P(b){b.target.removeEventListener("dispose",P);for(const B in d){const y=d[B],T=b.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Kf(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const se=new et;let re=null;const Ee=new et(0,0,0,0);return{setMask:function(xe){re!==xe&&!C&&(s.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){C=xe},setClear:function(xe,Ze,$e,dt,Et){Et===!0&&(xe*=dt,Ze*=dt,$e*=dt),se.set(xe,Ze,$e,dt),Ee.equals(se)===!1&&(s.clearColor(xe,Ze,$e,dt),Ee.copy(se))},reset:function(){C=!1,re=null,Ee.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,Ee=null;return{setTest:function(xe){xe?Pe(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(xe){se!==xe&&!C&&(s.depthMask(xe),se=xe)},setFunc:function(xe){if(re!==xe){switch(xe){case pl:s.depthFunc(s.NEVER);break;case ml:s.depthFunc(s.ALWAYS);break;case gl:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case _l:s.depthFunc(s.EQUAL);break;case vl:s.depthFunc(s.GEQUAL);break;case xl:s.depthFunc(s.GREATER);break;case yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=xe}},setLocked:function(xe){C=xe},setClear:function(xe){Ee!==xe&&(s.clearDepth(xe),Ee=xe)},reset:function(){C=!1,se=null,re=null,Ee=null}}}function o(){let C=!1,se=null,re=null,Ee=null,xe=null,Ze=null,$e=null,dt=null,Et=null;return{setTest:function(Je){C||(Je?Pe(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Je){se!==Je&&!C&&(s.stencilMask(Je),se=Je)},setFunc:function(Je,Tt,Yt){(re!==Je||Ee!==Tt||xe!==Yt)&&(s.stencilFunc(Je,Tt,Yt),re=Je,Ee=Tt,xe=Yt)},setOp:function(Je,Tt,Yt){(Ze!==Je||$e!==Tt||dt!==Yt)&&(s.stencilOp(Je,Tt,Yt),Ze=Je,$e=Tt,dt=Yt)},setLocked:function(Je){C=Je},setClear:function(Je){Et!==Je&&(s.clearStencil(Je),Et=Je)},reset:function(){C=!1,se=null,re=null,Ee=null,xe=null,Ze=null,$e=null,dt=null,Et=null}}}const l=new i,h=new r,d=new o,p=new WeakMap,a=new WeakMap;let c={},u={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,M=null,P=null,b=null,w=null,B=null,y=new Ge(0,0,0),T=0,k=!1,H=null,$=null,L=null,N=null,V=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let ee=null,te={};const G=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),oe=new et().fromArray(G),ge=new et().fromArray(K);function me(C,se,re,Ee){const xe=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(C,Ze),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<re;$e++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(se+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return Ze}const Re={};Re[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Pe(s.DEPTH_TEST),h.setFunc(is),Ie(!1),A(Nr),Pe(s.CULL_FACE),de(xn);function Pe(C){c[C]!==!0&&(s.enable(C),c[C]=!0)}function Me(C){c[C]!==!1&&(s.disable(C),c[C]=!1)}function We(C,se){return u[C]!==se?(s.bindFramebuffer(C,se),u[C]=se,n&&(C===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=se),C===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function I(C,se){let re=_,Ee=!1;if(C)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),C.isWebGLMultipleRenderTargets){const xe=C.texture;if(re.length!==xe.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,$e=xe.length;Ze<$e;Ze++)re[Ze]=s.COLOR_ATTACHMENT0+Ze;re.length=xe.length,Ee=!0}}else re[0]!==s.COLOR_ATTACHMENT0&&(re[0]=s.COLOR_ATTACHMENT0,Ee=!0);else re[0]!==s.BACK&&(re[0]=s.BACK,Ee=!0);Ee&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Mt(C){return m!==C?(s.useProgram(C),m=C,!0):!1}const ve={[Dn]:s.FUNC_ADD,[Qo]:s.FUNC_SUBTRACT,[el]:s.FUNC_REVERSE_SUBTRACT};if(n)ve[zr]=s.MIN,ve[kr]=s.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ve[zr]=C.MIN_EXT,ve[kr]=C.MAX_EXT)}const be={[tl]:s.ZERO,[nl]:s.ONE,[il]:s.SRC_COLOR,[ir]:s.SRC_ALPHA,[cl]:s.SRC_ALPHA_SATURATE,[ol]:s.DST_COLOR,[rl]:s.DST_ALPHA,[sl]:s.ONE_MINUS_SRC_COLOR,[sr]:s.ONE_MINUS_SRC_ALPHA,[ll]:s.ONE_MINUS_DST_COLOR,[al]:s.ONE_MINUS_DST_ALPHA,[hl]:s.CONSTANT_COLOR,[ul]:s.ONE_MINUS_CONSTANT_COLOR,[dl]:s.CONSTANT_ALPHA,[fl]:s.ONE_MINUS_CONSTANT_ALPHA};function de(C,se,re,Ee,xe,Ze,$e,dt,Et,Je){if(C===xn){f===!0&&(Me(s.BLEND),f=!1);return}if(f===!1&&(Pe(s.BLEND),f=!0),C!==Jo){if(C!==v||Je!==k){if((x!==Dn||b!==Dn)&&(s.blendEquation(s.FUNC_ADD),x=Dn,b=Dn),Je)switch(C){case si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.ONE,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Br:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Br:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,P=null,w=null,B=null,y.set(0,0,0),T=0,v=C,k=Je}return}xe=xe||se,Ze=Ze||re,$e=$e||Ee,(se!==x||xe!==b)&&(s.blendEquationSeparate(ve[se],ve[xe]),x=se,b=xe),(re!==M||Ee!==P||Ze!==w||$e!==B)&&(s.blendFuncSeparate(be[re],be[Ee],be[Ze],be[$e]),M=re,P=Ee,w=Ze,B=$e),(dt.equals(y)===!1||Et!==T)&&(s.blendColor(dt.r,dt.g,dt.b,Et),y.copy(dt),T=Et),v=C,k=!1}function tt(C,se){C.side===on?Me(s.CULL_FACE):Pe(s.CULL_FACE);let re=C.side===wt;se&&(re=!re),Ie(re),C.blending===si&&C.transparent===!1?de(xn):de(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),h.setFunc(C.depthFunc),h.setTest(C.depthTest),h.setMask(C.depthWrite),l.setMask(C.colorWrite);const Ee=C.stencilWrite;d.setTest(Ee),Ee&&(d.setMask(C.stencilWriteMask),d.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),d.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){H!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),H=C)}function A(C){C!==Zo?(Pe(s.CULL_FACE),C!==$&&(C===Nr?s.cullFace(s.BACK):C===$o?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),$=C}function S(C){C!==L&&(W&&s.lineWidth(C),L=C)}function O(C,se,re){C?(Pe(s.POLYGON_OFFSET_FILL),(N!==se||V!==re)&&(s.polygonOffset(se,re),N=se,V=re)):Me(s.POLYGON_OFFSET_FILL)}function J(C){C?Pe(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Z(C){C===void 0&&(C=s.TEXTURE0+q-1),ee!==C&&(s.activeTexture(C),ee=C)}function Q(C,se,re){re===void 0&&(ee===null?re=s.TEXTURE0+q-1:re=ee);let Ee=te[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},te[re]=Ee),(Ee.type!==C||Ee.texture!==se)&&(ee!==re&&(s.activeTexture(re),ee=re),s.bindTexture(C,se||Re[C]),Ee.type=C,Ee.texture=se)}function fe(){const C=te[ee];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(C){oe.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function Ye(C){ge.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function it(C,se){let re=a.get(se);re===void 0&&(re=new WeakMap,a.set(se,re));let Ee=re.get(C);Ee===void 0&&(Ee=s.getUniformBlockIndex(se,C.name),re.set(C,Ee))}function Oe(C,se){const Ee=a.get(se).get(C);p.get(se)!==Ee&&(s.uniformBlockBinding(se,Ee,C.__bindingPointIndex),p.set(se,Ee))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},ee=null,te={},u={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,M=null,P=null,b=null,w=null,B=null,y=new Ge(0,0,0),T=0,k=!1,H=null,$=null,L=null,N=null,V=null,oe.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),h.reset(),d.reset()}return{buffers:{color:l,depth:h,stencil:d},enable:Pe,disable:Me,bindFramebuffer:We,drawBuffers:I,useProgram:Mt,setBlending:de,setMaterial:tt,setFlipSided:Ie,setCullFace:A,setLineWidth:S,setPolygonOffset:O,setScissorTest:J,activeTexture:Z,bindTexture:Q,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:he,texImage2D:_e,texImage3D:ue,updateUBOMapping:it,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:Ae,texSubImage2D:Se,texSubImage3D:Ue,compressedTexSubImage2D:j,compressedTexSubImage3D:Ke,scissor:Le,viewport:Ye,reset:ne}}function jf(s,e,t,n,i,r,o){const l=i.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let a;const c=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return u?new OffscreenCanvas(A,S):ls("canvas")}function _(A,S,O,J){let Z=1;if((A.width>J||A.height>J)&&(Z=J/Math.max(A.width,A.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Q=S?ur:Math.floor,fe=Q(Z*A.width),ae=Q(Z*A.height);a===void 0&&(a=g(fe,ae));const he=O?g(fe,ae):a;return he.width=fe,he.height=ae,he.getContext("2d").drawImage(A,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+fe+"x"+ae+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return ga(A.width)&&ga(A.height)}function f(A){return l?!1:A.wrapS!==Xt||A.wrapT!==Xt||A.minFilter!==bt&&A.minFilter!==Ft}function v(A,S){return A.generateMipmaps&&S&&A.minFilter!==bt&&A.minFilter!==Ft}function x(A){s.generateMipmap(A)}function M(A,S,O,J,Z=!1){if(l===!1)return S;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=S;if(S===s.RED&&(O===s.FLOAT&&(Q=s.R32F),O===s.HALF_FLOAT&&(Q=s.R16F),O===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.R8UI),O===s.UNSIGNED_SHORT&&(Q=s.R16UI),O===s.UNSIGNED_INT&&(Q=s.R32UI),O===s.BYTE&&(Q=s.R8I),O===s.SHORT&&(Q=s.R16I),O===s.INT&&(Q=s.R32I)),S===s.RG&&(O===s.FLOAT&&(Q=s.RG32F),O===s.HALF_FLOAT&&(Q=s.RG16F),O===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RGBA){const fe=Z?ss:je.getTransfer(J);O===s.FLOAT&&(Q=s.RGBA32F),O===s.HALF_FLOAT&&(Q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Q=fe===Qe?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function P(A,S,O){return v(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==Ft?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){return A===bt||A===Hr||A===Ss?s.NEAREST:s.LINEAR}function w(A){const S=A.target;S.removeEventListener("dispose",w),y(S),S.isVideoTexture&&p.delete(S)}function B(A){const S=A.target;S.removeEventListener("dispose",B),k(S)}function y(A){const S=n.get(A);if(S.__webglInit===void 0)return;const O=A.source,J=c.get(O);if(J){const Z=J[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(A),Object.keys(J).length===0&&c.delete(O)}n.remove(A)}function T(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const O=A.source,J=c.get(O);delete J[S.__cacheKey],o.memory.textures--}function k(A){const S=A.texture,O=n.get(A),J=n.get(S);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let Q=0;Q<O.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(O.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)s.deleteFramebuffer(O.__webglFramebuffer[Z]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,Q=S.length;Z<Q;Z++){const fe=n.get(S[Z]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(S[Z])}n.remove(S),n.remove(A)}let H=0;function $(){H=0}function L(){const A=H;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),H+=1,A}function N(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function V(A,S){const O=n.get(A);if(A.isVideoTexture&&tt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(O,A,S);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function q(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){oe(O,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function W(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){oe(O,A,S);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function X(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){ge(O,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const Y={[or]:s.REPEAT,[Xt]:s.CLAMP_TO_EDGE,[lr]:s.MIRRORED_REPEAT},ee={[bt]:s.NEAREST,[Hr]:s.NEAREST_MIPMAP_NEAREST,[Ss]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Cl]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},te={[Hl]:s.NEVER,[Yl]:s.ALWAYS,[Gl]:s.LESS,[yo]:s.LEQUAL,[Vl]:s.EQUAL,[ql]:s.GEQUAL,[Wl]:s.GREATER,[Xl]:s.NOTEQUAL};function G(A,S,O){if(O?(s.texParameteri(A,s.TEXTURE_WRAP_S,Y[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Y[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Y[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ee[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ee[S.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Xt||S.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,b(S.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==bt&&S.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===bt||S.minFilter!==Ss&&S.minFilter!==Ti||S.type===vn&&e.has("OES_texture_float_linear")===!1||l===!1&&S.type===Ai&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const J=S.source;let Z=c.get(J);Z===void 0&&(Z={},c.set(J,Z));const Q=N(S);if(Q!==A.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[Q].usedTimes++;const fe=Z[A.__cacheKey];fe!==void 0&&(Z[A.__cacheKey].usedTimes--,fe.usedTimes===0&&T(S)),A.__cacheKey=Q,A.__webglTexture=Z[Q].texture}return O}function oe(A,S,O){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);const Z=K(A,S),Q=S.source;t.bindTexture(J,A.__webglTexture,s.TEXTURE0+O);const fe=n.get(Q);if(Q.version!==fe.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);const ae=je.getPrimaries(je.workingColorSpace),he=S.colorSpace===zt?null:je.getPrimaries(S.colorSpace),Se=S.colorSpace===zt||ae===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ue=f(S)&&m(S.image)===!1;let j=_(S.image,Ue,!1,i.maxTextureSize);j=Ie(S,j);const Ke=m(j)||l,ze=r.convert(S.format,S.colorSpace);let Ae=r.convert(S.type),_e=M(S.internalFormat,ze,Ae,S.colorSpace,S.isVideoTexture);G(J,S,Ke);let ue;const Le=S.mipmaps,Ye=l&&S.isVideoTexture!==!0&&_e!==_o,it=fe.__version===void 0||Z===!0,Oe=P(S,j,Ke);if(S.isDepthTexture)_e=s.DEPTH_COMPONENT,l?S.type===vn?_e=s.DEPTH_COMPONENT32F:S.type===_n?_e=s.DEPTH_COMPONENT24:S.type===Un?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:S.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Nn&&_e===s.DEPTH_COMPONENT&&S.type!==mr&&S.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_n,Ae=r.convert(S.type)),S.format===li&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,S.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Un,Ae=r.convert(S.type))),it&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,_e,j.width,j.height,0,ze,Ae,null));else if(S.isDataTexture)if(Le.length>0&&Ke){Ye&&it&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],Ye?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Ae,ue.data):t.texImage2D(s.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ze,Ae,ue.data);S.generateMipmaps=!1}else Ye?(it&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,j.width,j.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,ze,Ae,j.data)):t.texImage2D(s.TEXTURE_2D,0,_e,j.width,j.height,0,ze,Ae,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,_e,Le[0].width,Le[0].height,j.depth);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],S.format!==qt?ze!==null?Ye?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,j.depth,ze,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,j.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,j.depth,ze,Ae,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,j.depth,0,ze,Ae,ue.data)}else{Ye&&it&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],S.format!==qt?ze!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Ae,ue.data):t.texImage2D(s.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ze,Ae,ue.data)}else if(S.isDataArrayTexture)Ye?(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,_e,j.width,j.height,j.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ze,Ae,j.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,ze,Ae,j.data);else if(S.isData3DTexture)Ye?(it&&t.texStorage3D(s.TEXTURE_3D,Oe,_e,j.width,j.height,j.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ze,Ae,j.data)):t.texImage3D(s.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,ze,Ae,j.data);else if(S.isFramebufferTexture){if(it)if(Ye)t.texStorage2D(s.TEXTURE_2D,Oe,_e,j.width,j.height);else{let ne=j.width,C=j.height;for(let se=0;se<Oe;se++)t.texImage2D(s.TEXTURE_2D,se,_e,ne,C,0,ze,Ae,null),ne>>=1,C>>=1}}else if(Le.length>0&&Ke){Ye&&it&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],Ye?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ze,Ae,ue):t.texImage2D(s.TEXTURE_2D,ne,_e,ze,Ae,ue);S.generateMipmaps=!1}else Ye?(it&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,j.width,j.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ae,j)):t.texImage2D(s.TEXTURE_2D,0,_e,ze,Ae,j);v(S,Ke)&&x(J),fe.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ge(A,S,O){if(S.image.length!==6)return;const J=K(A,S),Z=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const Q=n.get(Z);if(Z.version!==Q.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const fe=je.getPrimaries(je.workingColorSpace),ae=S.colorSpace===zt?null:je.getPrimaries(S.colorSpace),he=S.colorSpace===zt||fe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,j=[];for(let ne=0;ne<6;ne++)!Se&&!Ue?j[ne]=_(S.image[ne],!1,!0,i.maxCubemapSize):j[ne]=Ue?S.image[ne].image:S.image[ne],j[ne]=Ie(S,j[ne]);const Ke=j[0],ze=m(Ke)||l,Ae=r.convert(S.format,S.colorSpace),_e=r.convert(S.type),ue=M(S.internalFormat,Ae,_e,S.colorSpace),Le=l&&S.isVideoTexture!==!0,Ye=Q.__version===void 0||J===!0;let it=P(S,Ke,ze);G(s.TEXTURE_CUBE_MAP,S,ze);let Oe;if(Se){Le&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,it,ue,Ke.width,Ke.height);for(let ne=0;ne<6;ne++){Oe=j[ne].mipmaps;for(let C=0;C<Oe.length;C++){const se=Oe[C];S.format!==qt?Ae!==null?Le?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,_e,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,Ae,_e,se.data)}}}else{Oe=S.mipmaps,Le&&Ye&&(Oe.length>0&&it++,t.texStorage2D(s.TEXTURE_CUBE_MAP,it,ue,j[0].width,j[0].height));for(let ne=0;ne<6;ne++)if(Ue){Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,j[ne].width,j[ne].height,Ae,_e,j[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,j[ne].width,j[ne].height,0,Ae,_e,j[ne].data);for(let C=0;C<Oe.length;C++){const re=Oe[C].image[ne].image;Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,re.width,re.height,Ae,_e,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,re.width,re.height,0,Ae,_e,re.data)}}else{Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,_e,j[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Ae,_e,j[ne]);for(let C=0;C<Oe.length;C++){const se=Oe[C];Le?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ae,_e,se.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,Ae,_e,se.image[ne])}}}v(S,ze)&&x(s.TEXTURE_CUBE_MAP),Q.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,O,J,Z,Q){const fe=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),he=M(O.internalFormat,fe,ae,O.colorSpace);if(!n.get(S).__hasExternalTextures){const Ue=Math.max(1,S.width>>Q),j=Math.max(1,S.height>>Q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Q,he,Ue,j,S.depth,0,fe,ae,null):t.texImage2D(Z,Q,he,Ue,j,0,fe,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),de(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,n.get(O).__webglTexture,0,be(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,n.get(O).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(A,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let J=l===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||de(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===vn?J=s.DEPTH_COMPONENT32F:Z.type===_n&&(J=s.DEPTH_COMPONENT24));const Q=be(S);de(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,J,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,J,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const J=be(S);O&&de(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,S.width,S.height):de(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<J.length;Z++){const Q=J[Z],fe=r.convert(Q.format,Q.colorSpace),ae=r.convert(Q.type),he=M(Q.internalFormat,fe,ae,Q.colorSpace),Se=be(S);O&&de(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,he,S.width,S.height):de(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,he,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,he,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,Z=be(S);if(S.depthTexture.format===Nn)de(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===li)de(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Me(A){const S=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=s.createRenderbuffer(),Re(S.__webglDepthbuffer[J],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Re(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(A,S,O){const J=n.get(A);S!==void 0&&me(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Me(A)}function I(A){const S=A.texture,O=n.get(A),J=n.get(S);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,Q=A.isWebGLMultipleRenderTargets===!0,fe=m(A)||l;if(Z){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(l&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let he=0;he<S.mipmaps.length;he++)O.__webglFramebuffer[ae][he]=s.createFramebuffer()}else O.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(l&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)O.__webglFramebuffer[ae]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){const ae=A.texture;for(let he=0,Se=ae.length;he<Se;he++){const Ue=n.get(ae[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&A.samples>0&&de(A)===!1){const ae=Q?S:[S];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const Se=ae[he];O.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Ue=r.convert(Se.format,Se.colorSpace),j=r.convert(Se.type),Ke=M(Se.internalFormat,Ue,j,Se.colorSpace,A.isXRRenderTarget===!0),ze=be(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ke,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,O.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),G(s.TEXTURE_CUBE_MAP,S,fe);for(let ae=0;ae<6;ae++)if(l&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)me(O.__webglFramebuffer[ae][he],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else me(O.__webglFramebuffer[ae],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);v(S,fe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ae=A.texture;for(let he=0,Se=ae.length;he<Se;he++){const Ue=ae[he],j=n.get(Ue);t.bindTexture(s.TEXTURE_2D,j.__webglTexture),G(s.TEXTURE_2D,Ue,fe),me(O.__webglFramebuffer,A,Ue,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),v(Ue,fe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(l?ae=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,J.__webglTexture),G(ae,S,fe),l&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)me(O.__webglFramebuffer[he],A,S,s.COLOR_ATTACHMENT0,ae,he);else me(O.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ae,0);v(S,fe)&&x(ae),t.unbindTexture()}A.depthBuffer&&Me(A)}function Mt(A){const S=m(A)||l,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,Z=O.length;J<Z;J++){const Q=O[J];if(v(Q,S)){const fe=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(Q).__webglTexture;t.bindTexture(fe,ae),x(fe),t.unbindTexture()}}}function ve(A){if(l&&A.samples>0&&de(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,J=A.height;let Z=s.COLOR_BUFFER_BIT;const Q=[],fe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(A),he=A.isWebGLMultipleRenderTargets===!0;if(he)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){Q.push(s.COLOR_ATTACHMENT0+Se),A.depthBuffer&&Q.push(fe);const Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[fe])),he){const j=n.get(S[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,j,0)}s.blitFramebuffer(0,0,O,J,0,0,O,J,Z,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]);const Ue=n.get(S[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function be(A){return Math.min(i.maxSamples,A.samples)}function de(A){const S=n.get(A);return l&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(A){const S=o.render.frame;p.get(A)!==S&&(p.set(A,S),A.update())}function Ie(A,S){const O=A.colorSpace,J=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===cr||O!==cn&&O!==zt&&(je.getTransfer(O)===Qe?l===!1?e.has("EXT_sRGB")===!0&&J===qt?(A.format=cr,A.minFilter=Ft,A.generateMipmaps=!1):S=Mo.sRGBToLinear(S):(J!==qt||Z!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de}function Zf(s,e,t){const n=t.isWebGL2;function i(r,o=zt){let l;const h=je.getTransfer(o);if(r===Sn)return s.UNSIGNED_BYTE;if(r===uo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pl)return s.BYTE;if(r===Ll)return s.SHORT;if(r===mr)return s.UNSIGNED_SHORT;if(r===ho)return s.INT;if(r===_n)return s.UNSIGNED_INT;if(r===vn)return s.FLOAT;if(r===Ai)return n?s.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(r===Dl)return s.ALPHA;if(r===qt)return s.RGBA;if(r===Il)return s.LUMINANCE;if(r===Ul)return s.LUMINANCE_ALPHA;if(r===Nn)return s.DEPTH_COMPONENT;if(r===li)return s.DEPTH_STENCIL;if(r===cr)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(r===Nl)return s.RED;if(r===po)return s.RED_INTEGER;if(r===Ol)return s.RG;if(r===mo)return s.RG_INTEGER;if(r===go)return s.RGBA_INTEGER;if(r===Ms||r===Es||r===Ts||r===As)if(h===Qe)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ms)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Es)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ts)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===As)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ms)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Es)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ts)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===As)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gr||r===Vr||r===Wr||r===Xr)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Gr)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vr)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wr)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xr)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_o)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qr||r===Yr)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===qr)return h===Qe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yr)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kr||r===jr||r===Zr||r===$r||r===Jr||r===Qr||r===ea||r===ta||r===na||r===ia||r===sa||r===ra||r===aa||r===oa)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kr)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jr)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zr)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$r)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jr)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qr)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ea)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ta)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===na)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ia)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sa)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ra)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===aa)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oa)return h===Qe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bs||r===la||r===ca)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bs)return h===Qe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===la)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ca)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fl||r===ha||r===ua||r===da)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===bs)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ha)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ua)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===da)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Un?n?s.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class $f extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(d,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=d.joints["index-finger-tip"],a=d.joints["thumb-tip"],c=p.position.distanceTo(a.position),u=.02,g=.005;d.inputState.pinching&&c>u+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&c<=u-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return l!==null&&(l.visible=i!==null),h!==null&&(h.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qf extends hi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,l="local-floor",h=1,d=null,p=null,a=null,c=null,u=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const v=[],x=[],M=new ce;let P=null;const b=new Bt;b.layers.enable(1),b.viewport=new et;const w=new Bt;w.layers.enable(2),w.viewport=new et;const B=[b,w],y=new $f;y.layers.enable(1),y.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=v[G];return K===void 0&&(K=new $s,v[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=v[G];return K===void 0&&(K=new $s,v[G]=K),K.getGripSpace()},this.getHand=function(G){let K=v[G];return K===void 0&&(K=new $s,v[G]=K),K.getHandSpace()};function H(G){const K=x.indexOf(G.inputSource);if(K===-1)return;const oe=v[K];oe!==void 0&&(oe.update(G.inputSource,G.frame,d||o),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",L);for(let G=0;G<v.length;G++){const K=x[G];K!==null&&(x[G]=null,v[G].disconnect(K))}T=null,k=null,e.setRenderTarget(m),u=null,c=null,a=null,i=null,f=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(G){d=G},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return a},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",$),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),f=new Fn(u.framebufferWidth,u.framebufferHeight,{format:qt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,oe=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?li:Nn,oe=_.stencil?Un:_n);const me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};a=new XRWebGLBinding(i,t),c=a.createProjectionLayer(me),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),f=new Fn(c.textureWidth,c.textureHeight,{format:qt,type:Sn,depthTexture:new Io(c.textureWidth,c.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=c.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(h),d=null,o=await i.requestReferenceSpace(l),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(G){for(let K=0;K<G.removed.length;K++){const oe=G.removed[K],ge=x.indexOf(oe);ge>=0&&(x[ge]=null,v[ge].disconnect(oe))}for(let K=0;K<G.added.length;K++){const oe=G.added[K];let ge=x.indexOf(oe);if(ge===-1){for(let Re=0;Re<v.length;Re++)if(Re>=x.length){x.push(oe),ge=Re;break}else if(x[Re]===null){x[Re]=oe,ge=Re;break}if(ge===-1)break}const me=v[ge];me&&me.connect(oe)}}const N=new R,V=new R;function q(G,K,oe){N.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const ge=N.distanceTo(V),me=K.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Me=me[14]/(me[10]+1),We=(me[9]+1)/me[5],I=(me[9]-1)/me[5],Mt=(me[8]-1)/me[0],ve=(Re[8]+1)/Re[0],be=Pe*Mt,de=Pe*ve,tt=ge/(-Mt+ve),Ie=tt*-Mt;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ie),G.translateZ(tt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=Pe+tt,S=Me+tt,O=be-Ie,J=de+(ge-Ie),Z=We*Me/S*A,Q=I*Me/S*A;G.projectionMatrix.makePerspective(O,J,Z,Q,A,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;y.near=w.near=b.near=G.near,y.far=w.far=b.far=G.far,(T!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,k=y.far);const K=G.parent,oe=y.cameras;W(y,K);for(let ge=0;ge<oe.length;ge++)W(oe[ge],K);oe.length===2?q(y,b,w):y.projectionMatrix.copy(b.projectionMatrix),X(G,y,K)};function X(G,K,oe){oe===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=hr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(c===null&&u===null))return h},this.setFoveation=function(G){h=G,c!==null&&(c.fixedFoveation=G),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=G)};let Y=null;function ee(G,K){if(p=K.getViewerPose(d||o),g=K,p!==null){const oe=p.views;u!==null&&(e.setRenderTargetFramebuffer(f,u.framebuffer),e.setRenderTarget(f));let ge=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let me=0;me<oe.length;me++){const Re=oe[me];let Pe=null;if(u!==null)Pe=u.getViewport(Re);else{const We=a.getViewSubImage(c,Re);Pe=We.viewport,me===0&&(e.setRenderTargetTextures(f,We.colorTexture,c.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Me=B[me];Me===void 0&&(Me=new Bt,Me.layers.enable(me),Me.viewport=new et,B[me]=Me),Me.matrix.fromArray(Re.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Re.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(y.matrix.copy(Me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(Me)}}for(let oe=0;oe<v.length;oe++){const ge=x[oe],me=v[oe];ge!==null&&me!==void 0&&me.update(ge,K,d||o)}Y&&Y(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const te=new Do;te.setAnimationLoop(ee),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}function ep(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Co(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),a(m,f)):f.isMeshPhongMaterial?(r(m,f),p(m,f)):f.isMeshStandardMaterial?(r(m,f),c(m,f),f.isMeshPhysicalMaterial&&u(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?h(m,f,v,x):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function a(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tp(s,e,t,n){let i={},r={},o=[];const l=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function d(v,x){let M=i[v.id];M===void 0&&(g(v),M=p(v),i[v.id]=M,v.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(v,P);const b=e.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function p(v){const x=a();v.__bindingPointIndex=x;const M=s.createBuffer(),P=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function a(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const x=i[v.id],M=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,w=M.length;b<w;b++){const B=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,T=B.length;y<T;y++){const k=B[y];if(u(k,b,y,P)===!0){const H=k.__offset,$=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let N=0;N<$.length;N++){const V=$[N],q=_(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,H+L,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,x,M,P){const b=v.value,w=x+"_"+M;if(P[w]===void 0)return typeof b=="number"||typeof b=="boolean"?P[w]=b:P[w]=b.clone(),!0;{const B=P[w];if(typeof b=="number"||typeof b=="boolean"){if(B!==b)return P[w]=b,!0}else if(B.equals(b)===!1)return B.copy(b),!0}return!1}function g(v){const x=v.uniforms;let M=0;const P=16;for(let w=0,B=x.length;w<B;w++){const y=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,k=y.length;T<k;T++){const H=y[T],$=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=$.length;L<N;L++){const V=$[L],q=_(V),W=M%P;W!==0&&P-W<q.boundary&&(M+=P-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=q.storage}}}const b=M%P;return b>0&&(M+=P-b),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:h,update:d,dispose:f}}class zo{constructor(e={}){const{canvas:t=jl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const x=this;let M=!1,P=0,b=0,w=null,B=-1,y=null;const T=new et,k=new et;let H=null;const $=new Ge(0);let L=0,N=t.width,V=t.height,q=1,W=null,X=null;const Y=new et(0,0,N,V),ee=new et(0,0,N,V);let te=!1;const G=new vr;let K=!1,oe=!1,ge=null;const me=new ot,Re=new ce,Pe=new R,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return w===null?q:1}let I=n;function Mt(E,D){for(let F=0;F<E.length;F++){const z=E[F],U=t.getContext(z,D);if(U!==null)return U}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),I=Mt(D,E),I===null)throw Mt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,be,de,tt,Ie,A,S,O,J,Z,Q,fe,ae,he,Se,Ue,j,Ke,ze,Ae,_e,ue,Le,Ye;function it(){ve=new hd(I),be=new sd(I,ve,e),ve.init(be),ue=new Zf(I,ve,be),de=new Kf(I,ve,be),tt=new fd(I),Ie=new Uf,A=new jf(I,ve,de,Ie,be,ue,tt),S=new ad(x),O=new cd(x),J=new Sc(I,be),Le=new nd(I,ve,J,be),Z=new ud(I,J,tt,Le),Q=new _d(I,Z,J,tt),ze=new gd(I,be,A),Ue=new rd(Ie),fe=new If(x,S,O,ve,be,Le,Ue),ae=new ep(x,Ie),he=new Of,Se=new Gf(ve,be),Ke=new td(x,S,O,de,Q,c,h),j=new Yf(x,Q,be),Ye=new tp(I,tt,be,de),Ae=new id(I,ve,tt,be),_e=new dd(I,ve,tt,be),tt.programs=fe.programs,x.capabilities=be,x.extensions=ve,x.properties=Ie,x.renderLists=he,x.shadowMap=j,x.state=de,x.info=tt}it();const Oe=new Qf(x,I);this.xr=Oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(N,V,!1))},this.getSize=function(E){return E.set(N,V)},this.setSize=function(E,D,F=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,V=D,t.width=Math.floor(E*q),t.height=Math.floor(D*q),F===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(N*q,V*q).floor()},this.setDrawingBufferSize=function(E,D,F){N=E,V=D,q=F,t.width=Math.floor(E*F),t.height=Math.floor(D*F),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,D,F,z){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,D,F,z),de.viewport(T.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,D,F,z){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,D,F,z),de.scissor(k.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){de.setScissorTest(te=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(E=!0,D=!0,F=!0){let z=0;if(E){let U=!1;if(w!==null){const le=w.texture.format;U=le===go||le===mo||le===po}if(U){const le=w.texture.type,pe=le===Sn||le===_n||le===mr||le===Un||le===uo||le===fo,ye=Ke.getClearColor(),Te=Ke.getClearAlpha(),Ne=ye.r,we=ye.g,Ce=ye.b;pe?(u[0]=Ne,u[1]=we,u[2]=Ce,u[3]=Te,I.clearBufferuiv(I.COLOR,0,u)):(g[0]=Ne,g[1]=we,g[2]=Ce,g[3]=Te,I.clearBufferiv(I.COLOR,0,g))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),F&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),Se.dispose(),Ie.dispose(),S.dispose(),O.dispose(),Q.dispose(),Le.dispose(),Ye.dispose(),fe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Et),Oe.removeEventListener("sessionend",Je),ge&&(ge.dispose(),ge=null),Tt.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=tt.autoReset,D=j.enabled,F=j.autoUpdate,z=j.needsUpdate,U=j.type;it(),tt.autoReset=E,j.enabled=D,j.autoUpdate=F,j.needsUpdate=z,j.type=U}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function re(E){const D=E.target;D.removeEventListener("dispose",re),Ee(D)}function Ee(E){xe(E),Ie.remove(E)}function xe(E){const D=Ie.get(E).programs;D!==void 0&&(D.forEach(function(F){fe.releaseProgram(F)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,F,z,U,le){D===null&&(D=Me);const pe=U.isMesh&&U.matrixWorld.determinant()<0,ye=qo(E,D,F,z,U);de.setMaterial(z,pe);let Te=F.index,Ne=1;if(z.wireframe===!0){if(Te=Z.getWireframeAttribute(F),Te===void 0)return;Ne=2}const we=F.drawRange,Ce=F.attributes.position;let at=we.start*Ne,Ct=(we.start+we.count)*Ne;le!==null&&(at=Math.max(at,le.start*Ne),Ct=Math.min(Ct,(le.start+le.count)*Ne)),Te!==null?(at=Math.max(at,0),Ct=Math.min(Ct,Te.count)):Ce!=null&&(at=Math.max(at,0),Ct=Math.min(Ct,Ce.count));const ft=Ct-at;if(ft<0||ft===1/0)return;Le.setup(U,z,ye,F,Te);let Qt,nt=Ae;if(Te!==null&&(Qt=J.get(Te),nt=_e,nt.setIndex(Qt)),U.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*We()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(U.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),de.setLineWidth(Fe*We()),U.isLineSegments?nt.setMode(I.LINES):U.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else U.isPoints?nt.setMode(I.POINTS):U.isSprite&&nt.setMode(I.TRIANGLES);if(U.isBatchedMesh)nt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)nt.renderInstances(at,ft,U.count);else if(F.isInstancedBufferGeometry){const Fe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,_s=Math.min(F.instanceCount,Fe);nt.renderInstances(at,ft,_s)}else nt.render(at,ft)};function Ze(E,D,F){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=wt,E.needsUpdate=!0,Li(E,D,F),E.side=Mn,E.needsUpdate=!0,Li(E,D,F),E.side=on):Li(E,D,F)}this.compile=function(E,D,F=null){F===null&&(F=E),m=Se.get(F),m.init(),v.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==F&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(x._useLegacyLights);const z=new Set;return E.traverse(function(U){const le=U.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const ye=le[pe];Ze(ye,F,U),z.add(ye)}else Ze(le,F,U),z.add(le)}),v.pop(),m=null,z},this.compileAsync=function(E,D,F=null){const z=this.compile(E,D,F);return new Promise(U=>{function le(){if(z.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){U(E);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let $e=null;function dt(E){$e&&$e(E)}function Et(){Tt.stop()}function Je(){Tt.start()}const Tt=new Do;Tt.setAnimationLoop(dt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(E){$e=E,Oe.setAnimationLoop(E),E===null?Tt.stop():Tt.start()},Oe.addEventListener("sessionstart",Et),Oe.addEventListener("sessionend",Je),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(D),D=Oe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,w),m=Se.get(E,v.length),m.init(),v.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(me),oe=this.localClippingEnabled,K=Ue.init(this.clippingPlanes,oe),_=he.get(E,f.length),_.init(),f.push(_),Yt(E,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,K===!0&&Ue.beginShadows();const F=m.state.shadowsArray;if(j.render(F,E,D),K===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(_,E),m.setupLights(x._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let U=0,le=z.length;U<le;U++){const pe=z[U];Cr(_,E,pe,pe.viewport)}}else Cr(_,E,D);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,D),Le.resetDefaultState(),B=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Yt(E,D,F,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){z&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const pe=Q.update(E),ye=E.material;ye.visible&&_.push(E,pe,ye,F,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const pe=Q.update(E),ye=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){const Te=pe.groups;for(let Ne=0,we=Te.length;Ne<we;Ne++){const Ce=Te[Ne],at=ye[Ce.materialIndex];at&&at.visible&&_.push(E,pe,at,F,Pe.z,Ce)}}else ye.visible&&_.push(E,pe,ye,F,Pe.z,null)}}const le=E.children;for(let pe=0,ye=le.length;pe<ye;pe++)Yt(le[pe],D,F,z)}function Cr(E,D,F,z){const U=E.opaque,le=E.transmissive,pe=E.transparent;m.setupLightsView(F),K===!0&&Ue.setGlobalState(x.clippingPlanes,F),le.length>0&&Xo(U,le,D,F),z&&de.viewport(T.copy(z)),U.length>0&&Pi(U,D,F),le.length>0&&Pi(le,D,F),pe.length>0&&Pi(pe,D,F),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Xo(E,D,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const le=be.isWebGL2;ge===null&&(ge=new Fn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ai:Sn,minFilter:Ti,samples:le?4:0})),x.getDrawingBufferSize(Re),le?ge.setSize(Re.x,Re.y):ge.setSize(ur(Re.x),ur(Re.y));const pe=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor($),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const ye=x.toneMapping;x.toneMapping=yn,Pi(E,F,z),A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge);let Te=!1;for(let Ne=0,we=D.length;Ne<we;Ne++){const Ce=D[Ne],at=Ce.object,Ct=Ce.geometry,ft=Ce.material,Qt=Ce.group;if(ft.side===on&&at.layers.test(z.layers)){const nt=ft.side;ft.side=wt,ft.needsUpdate=!0,Pr(at,F,z,Ct,ft,Qt),ft.side=nt,ft.needsUpdate=!0,Te=!0}}Te===!0&&(A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge)),x.setRenderTarget(pe),x.setClearColor($,L),x.toneMapping=ye}function Pi(E,D,F){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,le=E.length;U<le;U++){const pe=E[U],ye=pe.object,Te=pe.geometry,Ne=z===null?pe.material:z,we=pe.group;ye.layers.test(F.layers)&&Pr(ye,D,F,Te,Ne,we)}}function Pr(E,D,F,z,U,le){E.onBeforeRender(x,D,F,z,U,le),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,D,F,z,E,le),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=wt,U.needsUpdate=!0,x.renderBufferDirect(F,D,z,U,E,le),U.side=Mn,U.needsUpdate=!0,x.renderBufferDirect(F,D,z,U,E,le),U.side=on):x.renderBufferDirect(F,D,z,U,E,le),E.onAfterRender(x,D,F,z,U,le)}function Li(E,D,F){D.isScene!==!0&&(D=Me);const z=Ie.get(E),U=m.state.lights,le=m.state.shadowsArray,pe=U.state.version,ye=fe.getParameters(E,U.state,le,D,F),Te=fe.getProgramCacheKey(ye);let Ne=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||z.environment),Ne===void 0&&(E.addEventListener("dispose",re),Ne=new Map,z.programs=Ne);let we=Ne.get(Te);if(we!==void 0){if(z.currentProgram===we&&z.lightsStateVersion===pe)return Dr(E,ye),we}else ye.uniforms=fe.getUniforms(E),E.onBuild(F,ye,x),E.onBeforeCompile(ye,x),we=fe.acquireProgram(ye,Te),Ne.set(Te,we),z.uniforms=ye.uniforms;const Ce=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Dr(E,ye),z.needsLights=Ko(E),z.lightsStateVersion=pe,z.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=we,z.uniformsList=null,we}function Lr(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=ts.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Dr(E,D){const F=Ie.get(E);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function qo(E,D,F,z,U){D.isScene!==!0&&(D=Me),A.resetTextureUnits();const le=D.fog,pe=z.isMeshStandardMaterial?D.environment:null,ye=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:cn,Te=(z.isMeshStandardMaterial?O:S).get(z.envMap||pe),Ne=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,we=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!F.morphAttributes.position,at=!!F.morphAttributes.normal,Ct=!!F.morphAttributes.color;let ft=yn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Qt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=Qt!==void 0?Qt.length:0,Fe=Ie.get(z),_s=m.state.lights;if(K===!0&&(oe===!0||E!==y)){const Ut=E===y&&z.id===B;Ue.setState(z,E,Ut)}let st=!1;z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==_s.state.version||Fe.outputColorSpace!==ye||U.isBatchedMesh&&Fe.batching===!1||!U.isBatchedMesh&&Fe.batching===!0||U.isInstancedMesh&&Fe.instancing===!1||!U.isInstancedMesh&&Fe.instancing===!0||U.isSkinnedMesh&&Fe.skinning===!1||!U.isSkinnedMesh&&Fe.skinning===!0||U.isInstancedMesh&&Fe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Fe.instancingColor===!1&&U.instanceColor!==null||Fe.envMap!==Te||z.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==we||Fe.morphTargets!==Ce||Fe.morphNormals!==at||Fe.morphColors!==Ct||Fe.toneMapping!==ft||be.isWebGL2===!0&&Fe.morphTargetsCount!==nt)&&(st=!0):(st=!0,Fe.__version=z.version);let Tn=Fe.currentProgram;st===!0&&(Tn=Li(z,D,U));let Ir=!1,di=!1,vs=!1;const vt=Tn.getUniforms(),An=Fe.uniforms;if(de.useProgram(Tn.program)&&(Ir=!0,di=!0,vs=!0),z.id!==B&&(B=z.id,di=!0),Ir||y!==E){vt.setValue(I,"projectionMatrix",E.projectionMatrix),vt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Ut=vt.map.cameraPosition;Ut!==void 0&&Ut.setValue(I,Pe.setFromMatrixPosition(E.matrixWorld)),be.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&vt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,di=!0,vs=!0)}if(U.isSkinnedMesh){vt.setOptional(I,U,"bindMatrix"),vt.setOptional(I,U,"bindMatrixInverse");const Ut=U.skeleton;Ut&&(be.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),vt.setValue(I,"boneTexture",Ut.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(vt.setOptional(I,U,"batchingTexture"),vt.setValue(I,"batchingTexture",U._matricesTexture,A));const xs=F.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0&&be.isWebGL2===!0)&&ze.update(U,F,Tn),(di||Fe.receiveShadow!==U.receiveShadow)&&(Fe.receiveShadow=U.receiveShadow,vt.setValue(I,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(An.envMap.value=Te,An.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),di&&(vt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Yo(An,vs),le&&z.fog===!0&&ae.refreshFogUniforms(An,le),ae.refreshMaterialUniforms(An,z,q,V,ge),ts.upload(I,Lr(Fe),An,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ts.upload(I,Lr(Fe),An,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&vt.setValue(I,"center",U.center),vt.setValue(I,"modelViewMatrix",U.modelViewMatrix),vt.setValue(I,"normalMatrix",U.normalMatrix),vt.setValue(I,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ut=z.uniformsGroups;for(let ys=0,jo=Ut.length;ys<jo;ys++)if(be.isWebGL2){const Ur=Ut[ys];Ye.update(Ur,Tn),Ye.bind(Ur,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function Yo(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Ko(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,D,F){Ie.get(E.texture).__webglTexture=D,Ie.get(E.depthTexture).__webglTexture=F;const z=Ie.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const F=Ie.get(E);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,F=0){w=E,P=D,b=F;let z=!0,U=null,le=!1,pe=!1;if(E){const Te=Ie.get(E);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(I.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?A.setupRenderTarget(E):Te.__hasExternalTextures&&A.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const we=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[D])?U=we[D][F]:U=we[D],le=!0):be.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?U=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[F]:U=we,T.copy(E.viewport),k.copy(E.scissor),H=E.scissorTest}else T.copy(Y).multiplyScalar(q).floor(),k.copy(ee).multiplyScalar(q).floor(),H=te;if(de.bindFramebuffer(I.FRAMEBUFFER,U)&&be.drawBuffers&&z&&de.drawBuffers(E,U),de.viewport(T),de.scissor(k),de.setScissorTest(H),le){const Te=Ie.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,F)}else if(pe){const Te=Ie.get(E.texture),Ne=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,F||0,Ne)}B=-1},this.readRenderTargetPixels=function(E,D,F,z,U,le,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){de.bindFramebuffer(I.FRAMEBUFFER,ye);try{const Te=E.texture,Ne=Te.format,we=Te.type;if(Ne!==qt&&ue.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===Ai&&(ve.has("EXT_color_buffer_half_float")||be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(we!==Sn&&ue.convert(we)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===vn&&(be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&F>=0&&F<=E.height-U&&I.readPixels(D,F,z,U,ue.convert(Ne),ue.convert(we),le)}finally{const Te=w!==null?Ie.get(w).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(E,D,F=0){const z=Math.pow(2,-F),U=Math.floor(D.image.width*z),le=Math.floor(D.image.height*z);A.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,E.x,E.y,U,le),de.unbindTexture()},this.copyTextureToTexture=function(E,D,F,z=0){const U=D.image.width,le=D.image.height,pe=ue.convert(F.format),ye=ue.convert(F.type);A.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,E.x,E.y,U,le,pe,ye,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,z,E.x,E.y,pe,ye,D.image),z===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(E,D,F,z,U=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=E.max.x-E.min.x+1,pe=E.max.y-E.min.y+1,ye=E.max.z-E.min.z+1,Te=ue.convert(z.format),Ne=ue.convert(z.type);let we;if(z.isData3DTexture)A.setTexture3D(z,0),we=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)A.setTexture2DArray(z,0),we=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ct=I.getParameter(I.UNPACK_SKIP_PIXELS),ft=I.getParameter(I.UNPACK_SKIP_ROWS),Qt=I.getParameter(I.UNPACK_SKIP_IMAGES),nt=F.isCompressedTexture?F.mipmaps[U]:F.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),F.isDataTexture||F.isData3DTexture?I.texSubImage3D(we,U,D.x,D.y,D.z,le,pe,ye,Te,Ne,nt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(we,U,D.x,D.y,D.z,le,pe,ye,Te,nt.data)):I.texSubImage3D(we,U,D.x,D.y,D.z,le,pe,ye,Te,Ne,nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt),U===0&&z.generateMipmaps&&I.generateMipmap(we),de.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),de.unbindTexture()},this.resetState=function(){P=0,b=0,w=null,de.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gr?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?On:vo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===On?gt:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class np extends zo{}np.prototype.isWebGL1Renderer=!0;class Sr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new Sr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ip extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Jt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let l=0,h=r-1,d;for(;l<=h;)if(i=Math.floor(l+(h-l)/2),d=n[i]-o,d<0)l=i+1;else if(d>0)h=i-1;else{h=i;break}if(i=h,n[i]===o)return i/(r-1);const p=n[i],c=n[i+1]-p,u=(o-p)/c;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),l=this.getPoint(r),h=t||(o.isVector2?new ce:new R);return h.copy(l).sub(o).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],o=[],l=new R,h=new ot;for(let u=0;u<=e;u++){const g=u/e;i[u]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let d=Number.MAX_VALUE;const p=Math.abs(i[0].x),a=Math.abs(i[0].y),c=Math.abs(i[0].z);p<=d&&(d=p,n.set(1,0,0)),a<=d&&(d=a,n.set(0,1,0)),c<=d&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),l.crossVectors(i[u-1],i[u]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(_t(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(h.makeRotationAxis(l,g))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(_t(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(h.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mr extends Jt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=h}getPoint(e,t){const n=t||new ce,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const l=this.aStartAngle+e*r;let h=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const p=Math.cos(this.aRotation),a=Math.sin(this.aRotation),c=h-this.aX,u=d-this.aY;h=c*p-u*a+this.aX,d=c*a+u*p+this.aY}return n.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sp extends Mr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Er(){let s=0,e=0,t=0,n=0;function i(r,o,l,h){s=r,e=l,t=-3*r+3*o-2*l-h,n=2*r-2*o+l+h}return{initCatmullRom:function(r,o,l,h,d){i(o,l,d*(l-r),d*(h-o))},initNonuniformCatmullRom:function(r,o,l,h,d,p,a){let c=(o-r)/d-(l-r)/(d+p)+(l-o)/p,u=(l-o)/p-(h-o)/(p+a)+(h-l)/a;c*=p,u*=p,i(o,l,c,u)},calc:function(r){const o=r*r,l=o*r;return s+e*r+t*o+n*l}}}const es=new R,Js=new Er,Qs=new Er,er=new Er;class rp extends Jt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let l=Math.floor(o),h=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let d,p;this.closed||l>0?d=i[(l-1)%r]:(es.subVectors(i[0],i[1]).add(i[0]),d=es);const a=i[l%r],c=i[(l+1)%r];if(this.closed||l+2<r?p=i[(l+2)%r]:(es.subVectors(i[r-1],i[r-2]).add(i[r-1]),p=es),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(d.distanceToSquared(a),u),_=Math.pow(a.distanceToSquared(c),u),m=Math.pow(c.distanceToSquared(p),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Js.initNonuniformCatmullRom(d.x,a.x,c.x,p.x,g,_,m),Qs.initNonuniformCatmullRom(d.y,a.y,c.y,p.y,g,_,m),er.initNonuniformCatmullRom(d.z,a.z,c.z,p.z,g,_,m)}else this.curveType==="catmullrom"&&(Js.initCatmullRom(d.x,a.x,c.x,p.x,this.tension),Qs.initCatmullRom(d.y,a.y,c.y,p.y,this.tension),er.initCatmullRom(d.z,a.z,c.z,p.z,this.tension));return n.set(Js.calc(h),Qs.calc(h),er.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function to(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,l=s*s,h=s*l;return(2*t-2*n+r+o)*h+(-3*t+3*n-2*r-o)*l+r*s+t}function ap(s,e){const t=1-s;return t*t*e}function op(s,e){return 2*(1-s)*s*e}function lp(s,e){return s*s*e}function Mi(s,e,t,n){return ap(s,e)+op(s,t)+lp(s,n)}function cp(s,e){const t=1-s;return t*t*t*e}function hp(s,e){const t=1-s;return 3*t*t*s*e}function up(s,e){return 3*(1-s)*s*s*e}function dp(s,e){return s*s*s*e}function Ei(s,e,t,n,i){return cp(s,e)+hp(s,t)+up(s,n)+dp(s,i)}class ko extends Jt{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ei(e,i.x,r.x,o.x,l.x),Ei(e,i.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fp extends Jt{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ei(e,i.x,r.x,o.x,l.x),Ei(e,i.y,r.y,o.y,l.y),Ei(e,i.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ho extends Jt{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends Jt{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Go extends Jt{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Mi(e,i.x,r.x,o.x),Mi(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends Jt{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Mi(e,i.x,r.x,o.x),Mi(e,i.y,r.y,o.y),Mi(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vo extends Jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),l=r-o,h=i[o===0?o:o-1],d=i[o],p=i[o>i.length-2?i.length-1:o+1],a=i[o>i.length-3?i.length-1:o+2];return n.set(to(l,h.x,d.x,p.x,a.x),to(l,h.y,d.y,p.y,a.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var no=Object.freeze({__proto__:null,ArcCurve:sp,CatmullRomCurve3:rp,CubicBezierCurve:ko,CubicBezierCurve3:fp,EllipseCurve:Mr,LineCurve:Ho,LineCurve3:pp,QuadraticBezierCurve:Go,QuadraticBezierCurve3:mp,SplineCurve:Vo});class gp extends Jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new no[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,l=this.curves[r],h=l.getLength(),d=h===0?0:1-o/h;return l.getPointAt(d,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,h=o.getPoints(l);for(let d=0;d<h.length;d++){const p=h[d];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new no[i.type]().fromJSON(i))}return this}}class _p extends gp{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ho(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Go(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const l=new ko(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,l,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,n,i,r,o,l,h),this}absellipse(e,t,n,i,r,o,l,h){const d=new Mr(e,t,n,i,r,o,l,h);if(this.curves.length>0){const a=d.getPoint(0);a.equals(this.currentPoint)||this.lineTo(a.x,a.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tr extends kt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=_t(i,0,Math.PI*2);const r=[],o=[],l=[],h=[],d=[],p=1/t,a=new R,c=new ce,u=new R,g=new R,_=new R;let m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,u.x=f*1,u.y=-m,u.z=f*0,_.copy(u),u.normalize(),h.push(u.x,u.y,u.z);break;case e.length-1:h.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,u.x=f*1,u.y=-m,u.z=f*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),h.push(u.x,u.y,u.z),_.copy(g)}for(let v=0;v<=t;v++){const x=n+v*p*i,M=Math.sin(x),P=Math.cos(x);for(let b=0;b<=e.length-1;b++){a.x=e[b].x*M,a.y=e[b].y,a.z=e[b].x*P,o.push(a.x,a.y,a.z),c.x=v/t,c.y=b/(e.length-1),l.push(c.x,c.y);const w=h[3*b+0]*M,B=h[3*b+1],y=h[3*b+0]*P;d.push(w,B,y)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const M=x+v*e.length,P=M,b=M+e.length,w=M+e.length+1,B=M+1;r.push(P,b,B),r.push(w,B,b)}this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(l,2)),this.setAttribute("normal",new rt(d,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ar extends Tr{constructor(e=1,t=1,n=4,i=8){const r=new _p;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ar(e.radius,e.length,e.capSegments,e.radialSegments)}}class zn extends kt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:h};const d=this;i=Math.floor(i),r=Math.floor(r);const p=[],a=[],c=[],u=[];let g=0;const _=[],m=n/2;let f=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(p),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(u,2));function v(){const M=new R,P=new R;let b=0;const w=(t-e)/n;for(let B=0;B<=r;B++){const y=[],T=B/r,k=T*(t-e)+e;for(let H=0;H<=i;H++){const $=H/i,L=$*h+l,N=Math.sin(L),V=Math.cos(L);P.x=k*N,P.y=-T*n+m,P.z=k*V,a.push(P.x,P.y,P.z),M.set(N,w,V).normalize(),c.push(M.x,M.y,M.z),u.push($,1-T),y.push(g++)}_.push(y)}for(let B=0;B<i;B++)for(let y=0;y<r;y++){const T=_[y][B],k=_[y+1][B],H=_[y+1][B+1],$=_[y][B+1];p.push(T,k,$),p.push(k,H,$),b+=6}d.addGroup(f,b,0),f+=b}function x(M){const P=g,b=new ce,w=new R;let B=0;const y=M===!0?e:t,T=M===!0?1:-1;for(let H=1;H<=i;H++)a.push(0,m*T,0),c.push(0,T,0),u.push(.5,.5),g++;const k=g;for(let H=0;H<=i;H++){const L=H/i*h+l,N=Math.cos(L),V=Math.sin(L);w.x=y*V,w.y=m*T,w.z=y*N,a.push(w.x,w.y,w.z),c.push(0,T,0),b.x=N*.5+.5,b.y=V*.5*T+.5,u.push(b.x,b.y),g++}for(let H=0;H<i;H++){const $=P+H,L=k+H;M===!0?p.push(L,L+1,$):p.push(L+1,L,$),B+=3}d.addGroup(f,B,M===!0?1:2),f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fs extends zn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new fs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends kt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];l(i),d(n),p(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(v){const x=new R,M=new R,P=new R;for(let b=0;b<t.length;b+=3)u(t[b+0],x),u(t[b+1],M),u(t[b+2],P),h(x,M,P,v)}function h(v,x,M,P){const b=P+1,w=[];for(let B=0;B<=b;B++){w[B]=[];const y=v.clone().lerp(M,B/b),T=x.clone().lerp(M,B/b),k=b-B;for(let H=0;H<=k;H++)H===0&&B===b?w[B][H]=y:w[B][H]=y.clone().lerp(T,H/k)}for(let B=0;B<b;B++)for(let y=0;y<2*(b-B)-1;y++){const T=Math.floor(y/2);y%2===0?(c(w[B][T+1]),c(w[B+1][T]),c(w[B][T])):(c(w[B][T+1]),c(w[B+1][T+1]),c(w[B+1][T]))}}function d(v){const x=new R;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function p(){const v=new R;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=m(v)/2/Math.PI+.5,P=f(v)/Math.PI+.5;o.push(M,1-P)}g(),a()}function a(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],P=o[v+4],b=Math.max(x,M,P),w=Math.min(x,M,P);b>.9&&w<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function c(v){r.push(v.x,v.y,v.z)}function u(v,x){const M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){const v=new R,x=new R,M=new R,P=new R,b=new ce,w=new ce,B=new ce;for(let y=0,T=0;y<r.length;y+=9,T+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),b.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),B.set(o[T+4],o[T+5]),P.copy(v).add(x).add(M).divideScalar(3);const k=m(P);_(b,T+0,v,k),_(w,T+2,x,k),_(B,T+4,M,k)}}function _(v,x,M,P){P<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.vertices,e.indices,e.radius,e.details)}}class ms extends ps{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}}class gs extends ps{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gs(e.radius,e.detail)}}class Dt extends kt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(o+l,Math.PI);let d=0;const p=[],a=new R,c=new R,u=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],x=f/n;let M=0;f===0&&o===0?M=.5/t:f===n&&h===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const b=P/t;a.x=-e*Math.cos(i+b*r)*Math.sin(o+x*l),a.y=e*Math.cos(o+x*l),a.z=e*Math.sin(i+b*r)*Math.sin(o+x*l),g.push(a.x,a.y,a.z),c.copy(a).normalize(),_.push(c.x,c.y,c.z),m.push(b+M,1-x),v.push(d++)}p.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const x=p[f][v+1],M=p[f][v],P=p[f+1][v],b=p[f+1][v+1];(f!==0||o>0)&&u.push(x,M,b),(f!==n-1||h<Math.PI)&&u.push(M,P,b)}this.setIndex(u),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class br extends kt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],h=[],d=[],p=new R,a=new R,c=new R;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){const _=g/i*r,m=u/n*Math.PI*2;a.x=(e+t*Math.cos(m))*Math.cos(_),a.y=(e+t*Math.cos(m))*Math.sin(_),a.z=t*Math.sin(m),l.push(a.x,a.y,a.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),c.subVectors(a,p).normalize(),h.push(c.x,c.y,c.z),d.push(g/i),d.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){const _=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,f=(i+1)*(u-1)+g,v=(i+1)*u+g;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $t extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wr extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const tr=new ot,io=new R,so=new R;class Wo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;io.setFromMatrixPosition(e.matrixWorld),t.position.copy(io),so.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(so),t.updateMatrixWorld(),tr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ro=new ot,vi=new R,nr=new R;class vp extends Wo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vi.setFromMatrixPosition(e.matrixWorld),n.position.copy(vi),nr.copy(n.position),nr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nr),n.updateMatrixWorld(),i.makeTranslation(-vi.x,-vi.y,-vi.z),ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro)}}class xp extends wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yp extends Wo{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new yp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mp extends wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pr);class Ep{constructor(e){this.canvas=e,this.width=window.innerWidth,this.height=window.innerHeight,this.setupRenderer(),this.setupCamera(),this.setupScene(),this.setupLighting(),this.setupResizeHandler(),this.screenShake={intensity:0,duration:0},this.originalCameraPosition=this.camera.position.clone()}setupRenderer(){this.renderer=new zo({canvas:this.canvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(1710638),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oo}setupCamera(){const e=this.width/this.height,t=20;this.camera=new xr(-t*e/2,t*e/2,t/2,-t/2,.1,1e3),this.camera.position.set(0,20,10),this.camera.lookAt(0,0,0),this.camera.zoom=1,this.camera.updateProjectionMatrix()}setupScene(){this.scene=new ip,this.scene.fog=new Sr(1710638,30,50)}setupLighting(){const e=new Mp(16777215,.6);this.scene.add(e);const t=new Sp(16777215,.8);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=50,t.shadow.camera.left=-20,t.shadow.camera.right=20,t.shadow.camera.top=20,t.shadow.camera.bottom=-20,this.scene.add(t);const n=new xp(7101671,.5,30);n.position.set(0,10,0),this.scene.add(n)}setupResizeHandler(){window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight;const e=this.width/this.height,t=20;this.camera.left=-t*e/2,this.camera.right=t*e/2,this.camera.top=t/2,this.camera.bottom=-t/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)})}shake(e=.3,t=.2){this.screenShake.intensity=e,this.screenShake.duration=t}updateScreenShake(e){if(this.screenShake.duration>0){this.screenShake.duration-=e;const t=(Math.random()-.5)*2*this.screenShake.intensity,n=(Math.random()-.5)*2*this.screenShake.intensity;this.camera.position.x=this.originalCameraPosition.x+t,this.camera.position.z=this.originalCameraPosition.z+n,this.screenShake.duration<=0&&this.camera.position.copy(this.originalCameraPosition)}}followTarget(e,t=.1){if(e&&e.mesh){const n=e.mesh.position.x,i=e.mesh.position.z;this.originalCameraPosition.x+=(n-this.originalCameraPosition.x)*t,this.originalCameraPosition.z+=(i+10-this.originalCameraPosition.z)*t,this.screenShake.duration<=0&&(this.camera.position.x=this.originalCameraPosition.x,this.camera.position.z=this.originalCameraPosition.z)}}worldToScreen(e){const t=e.clone();return t.project(this.camera),{x:(t.x*.5+.5)*this.width,y:(-t.y*.5+.5)*this.height}}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}render(){this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose()}}class Tp{constructor(){this.keys={},this.movement={x:0,y:0},this.joystickActive=!1,this.joystickPosition={x:0,y:0},this.isMobile=this.detectMobile(),this.touchId=null,this.setupKeyboardListeners(),this.setupTouchListeners(),this.isMobile||(document.getElementById("joystick-zone").style.display="none")}detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768}setupKeyboardListeners(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault()}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),window.addEventListener("blur",()=>{this.keys={}})}setupTouchListeners(){const e=document.getElementById("joystick-zone"),t=document.getElementById("joystick-stick"),r=document.getElementById("joystick-base").getBoundingClientRect().width/2-25,o=h=>{h.preventDefault();for(const d of h.changedTouches){const p=e.getBoundingClientRect(),a=p.left+p.width/2,c=p.top+p.height/2,u=d.clientX,g=d.clientY;if(h.type==="touchstart"&&u<window.innerWidth/2&&(this.touchId=d.identifier,this.joystickActive=!0),this.touchId===d.identifier){let _=u-a,m=g-c;const f=Math.sqrt(_*_+m*m);f>r&&(_=_/f*r,m=m/f*r),t.style.transform=`translate(calc(-50% + ${_}px), calc(-50% + ${m}px))`,this.joystickPosition.x=_/r,this.joystickPosition.y=m/r}}},l=h=>{for(const d of h.changedTouches)this.touchId===d.identifier&&(this.touchId=null,this.joystickActive=!1,this.joystickPosition={x:0,y:0},t.style.transform="translate(-50%, -50%)")};e.addEventListener("touchstart",o,{passive:!1}),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",l),window.addEventListener("touchcancel",l)}update(){if(this.isMobile&&this.joystickActive)this.movement.x=this.joystickPosition.x,this.movement.y=this.joystickPosition.y;else{let e=0,t=0;(this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1);const n=Math.sqrt(e*e+t*t);n>0&&(e/=n,t/=n),this.movement.x=e,this.movement.y=t}}getMovement(){return this.movement}isMoving(){return Math.abs(this.movement.x)>.1||Math.abs(this.movement.y)>.1}isKeyPressed(e){return this.keys[e]||!1}}var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fr={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(s){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var c=this||t;if(a=parseFloat(a),c.ctx||p(),typeof a<"u"&&a>=0&&a<=1){if(c._volume=a,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var u=0;u<c._howls.length;u++)if(!c._howls[u]._webAudio)for(var g=c._howls[u]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[u]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*a)}return c}return c._volume},mute:function(a){var c=this||t;c.ctx||p(),c._muted=a,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a?0:c._volume,t.ctx.currentTime);for(var u=0;u<c._howls.length;u++)if(!c._howls[u]._webAudio)for(var g=c._howls[u]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[u]._soundById(g[_]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return c},stop:function(){for(var a=this||t,c=0;c<a._howls.length;c++)a._howls[c].stop();return a},unload:function(){for(var a=this||t,c=a._howls.length-1;c>=0;c--)a._howls[c].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,p()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var c=new Audio;c.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return a}if(!c||typeof c.canPlayType!="function")return a;var u=c.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,v=g.match(/Version\/(.*?) /),x=f&&v&&parseInt(v[1],10)<15;return a._codecs={mp3:!!(!m&&(u||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!u,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var c=function(u){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var _=0;_<a._howls.length;_++)if(!a._howls[_]._webAudio)for(var m=a._howls[_]._getSoundIds(),f=0;f<m.length;f++){var v=a._howls[_]._soundById(m[f]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}a._autoResume();var x=a.ctx.createBufferSource();x.buffer=a._scratchBuffer,x.connect(a.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),x.onended=function(){x.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var M=0;M<a._howls.length;M++)a._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var c=this||t;return a._unlocked&&c._html5AudioPool.push(a),c},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<a._howls.length;c++)if(a._howls[c]._webAudio){for(var u=0;u<a._howls[c]._sounds.length;u++)if(!a._howls[c]._sounds[u]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var c=0;c<a._howls.length;c++)a._howls[c]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var c=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(a)};n.prototype={init:function(a){var c=this;return t.ctx||p(),c._autoplay=a.autoplay||!1,c._format=typeof a.format!="string"?a.format:[a.format],c._html5=a.html5||!1,c._muted=a.mute||!1,c._loop=a.loop||!1,c._pool=a.pool||5,c._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,c._rate=a.rate||1,c._sprite=a.sprite||{},c._src=typeof a.src!="string"?a.src:[a.src],c._volume=a.volume!==void 0?a.volume:1,c._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=a.onend?[{fn:a.onend}]:[],c._onfade=a.onfade?[{fn:a.onfade}]:[],c._onload=a.onload?[{fn:a.onload}]:[],c._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],c._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],c._onpause=a.onpause?[{fn:a.onpause}]:[],c._onplay=a.onplay?[{fn:a.onplay}]:[],c._onstop=a.onstop?[{fn:a.onstop}]:[],c._onmute=a.onmute?[{fn:a.onmute}]:[],c._onvolume=a.onvolume?[{fn:a.onvolume}]:[],c._onrate=a.onrate?[{fn:a.onrate}]:[],c._onseek=a.onseek?[{fn:a.onseek}]:[],c._onunlock=a.onunlock?[{fn:a.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var a=this,c=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var u=0;u<a._src.length;u++){var g,_;if(a._format&&a._format[u])g=a._format[u];else{if(_=a._src[u],typeof _!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){c=a._src[u];break}}if(!c){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=c,a._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&o(a),a},play:function(a,c){var u=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&u._state==="loaded"&&!u._sprite[a])return null;if(typeof a>"u"&&(a="__default",!u._playLock)){for(var _=0,m=0;m<u._sounds.length;m++)u._sounds[m]._paused&&!u._sounds[m]._ended&&(_++,g=u._sounds[m]._id);_===1?a=null:g=null}}var f=g?u._soundById(g):u._inactiveSound();if(!f)return null;if(g&&!a&&(a=f._sprite||"__default"),u._state!=="loaded"){f._sprite=a,f._ended=!1;var v=f._id;return u._queue.push({event:"play",action:function(){u.play(v)}}),v}if(g&&!f._paused)return c||u._loadQueue("play"),f._id;u._webAudio&&t._autoResume();var x=Math.max(0,f._seek>0?f._seek:u._sprite[a][0]/1e3),M=Math.max(0,(u._sprite[a][0]+u._sprite[a][1])/1e3-x),P=M*1e3/Math.abs(f._rate),b=u._sprite[a][0]/1e3,w=(u._sprite[a][0]+u._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var B=function(){f._paused=!1,f._seek=x,f._start=b,f._stop=w,f._loop=!!(f._loop||u._sprite[a][2])};if(x>=w){u._ended(f);return}var y=f._node;if(u._webAudio){var T=function(){u._playLock=!1,B(),u._refreshBuffer(f);var L=f._muted||u._muted?0:f._volume;y.gain.setValueAtTime(L,t.ctx.currentTime),f._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?f._loop?y.bufferSource.noteGrainOn(0,x,86400):y.bufferSource.noteGrainOn(0,x,M):f._loop?y.bufferSource.start(0,x,86400):y.bufferSource.start(0,x,M),P!==1/0&&(u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),P)),c||setTimeout(function(){u._emit("play",f._id),u._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?T():(u._playLock=!0,u.once("resume",T),u._clearTimer(f._id))}else{var k=function(){y.currentTime=x,y.muted=f._muted||u._muted||t._muted||y.muted,y.volume=f._volume*t.volume(),y.playbackRate=f._rate;try{var L=y.play();if(L&&typeof Promise<"u"&&(L instanceof Promise||typeof L.then=="function")?(u._playLock=!0,B(),L.then(function(){u._playLock=!1,y._unlocked=!0,c?u._loadQueue():u._emit("play",f._id)}).catch(function(){u._playLock=!1,u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):c||(u._playLock=!1,B(),u._emit("play",f._id)),y.playbackRate=f._rate,y.paused){u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),P):(u._endTimers[f._id]=function(){u._ended(f),y.removeEventListener("ended",u._endTimers[f._id],!1)},y.addEventListener("ended",u._endTimers[f._id],!1))}catch(N){u._emit("playerror",f._id,N)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=u._src,y.load());var H=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||H)k();else{u._playLock=!0,u._state="loading";var $=function(){u._state="loaded",k(),y.removeEventListener(t._canPlayEvent,$,!1)};y.addEventListener(t._canPlayEvent,$,!1),u._clearTimer(f._id)}}return f._id},pause:function(a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(a)}}),c;for(var u=c._getSoundIds(a),g=0;g<u.length;g++){c._clearTimer(u[g]);var _=c._soundById(u[g]);if(_&&!_._paused&&(_._seek=c.seek(u[g]),_._rateSeek=0,_._paused=!0,c._stopFade(u[g]),_._node))if(c._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||c._emit("pause",_?_._id:null)}return c},stop:function(a,c){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"stop",action:function(){u.stop(a)}}),u;for(var g=u._getSoundIds(a),_=0;_<g.length;_++){u._clearTimer(g[_]);var m=u._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,u._stopFade(g[_]),m._node&&(u._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),u._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&u._clearSound(m._node))),c||u._emit("stop",m._id))}return u},mute:function(a,c){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"mute",action:function(){u.mute(a,c)}}),u;if(typeof c>"u")if(typeof a=="boolean")u._muted=a;else return u._muted;for(var g=u._getSoundIds(c),_=0;_<g.length;_++){var m=u._soundById(g[_]);m&&(m._muted=a,m._interval&&u._stopFade(m._id),u._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),u._emit("mute",m._id))}return u},volume:function(){var a=this,c=arguments,u,g;if(c.length===0)return a._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):u=parseFloat(c[0])}else c.length>=2&&(u=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof u<"u"&&u>=0&&u<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,c)}}),a;typeof g>"u"&&(a._volume=u),g=a._getSoundIds(g);for(var v=0;v<g.length;v++)f=a._soundById(g[v]),f&&(f._volume=u,c[2]||a._stopFade(g[v]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(u,t.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=u*t.volume()),a._emit("volume",f._id))}else return f=g?a._soundById(g):a._sounds[0],f?f._volume:0;return a},fade:function(a,c,u,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(a,c,u,g)}}),_;a=Math.min(Math.max(0,parseFloat(a)),1),c=Math.min(Math.max(0,parseFloat(c)),1),u=parseFloat(u),_.volume(a,g);for(var m=_._getSoundIds(g),f=0;f<m.length;f++){var v=_._soundById(m[f]);if(v){if(g||_._stopFade(m[f]),_._webAudio&&!v._muted){var x=t.ctx.currentTime,M=x+u/1e3;v._volume=a,v._node.gain.setValueAtTime(a,x),v._node.gain.linearRampToValueAtTime(c,M)}_._startFadeInterval(v,a,c,u,m[f],typeof g>"u")}}return _},_startFadeInterval:function(a,c,u,g,_,m){var f=this,v=c,x=u-c,M=Math.abs(x/.01),P=Math.max(4,M>0?g/M:g),b=Date.now();a._fadeTo=u,a._interval=setInterval(function(){var w=(Date.now()-b)/g;b=Date.now(),v+=x*w,v=Math.round(v*100)/100,x<0?v=Math.max(u,v):v=Math.min(u,v),f._webAudio?a._volume=v:f.volume(v,a._id,!0),m&&(f._volume=v),(u<c&&v<=u||u>c&&v>=u)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(u,a._id),f._emit("fade",a._id))},P)},_stopFade:function(a){var c=this,u=c._soundById(a);return u&&u._interval&&(c._webAudio&&u._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(u._interval),u._interval=null,c.volume(u._fadeTo,a),u._fadeTo=null,c._emit("fade",a)),c},loop:function(){var a=this,c=arguments,u,g,_;if(c.length===0)return a._loop;if(c.length===1)if(typeof c[0]=="boolean")u=c[0],a._loop=u;else return _=a._soundById(parseInt(c[0],10)),_?_._loop:!1;else c.length===2&&(u=c[0],g=parseInt(c[1],10));for(var m=a._getSoundIds(g),f=0;f<m.length;f++)_=a._soundById(m[f]),_&&(_._loop=u,a._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=u,u&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,a.playing(m[f])&&(a.pause(m[f],!0),a.play(m[f],!0)))));return a},rate:function(){var a=this,c=arguments,u,g;if(c.length===0)g=a._sounds[0]._id;else if(c.length===1){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):u=parseFloat(c[0])}else c.length===2&&(u=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof u=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,c)}}),a;typeof g>"u"&&(a._rate=u),g=a._getSoundIds(g);for(var v=0;v<g.length;v++)if(f=a._soundById(g[v]),f){a.playing(g[v])&&(f._rateSeek=a.seek(g[v]),f._playStart=a._webAudio?t.ctx.currentTime:f._playStart),f._rate=u,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(u,t.ctx.currentTime):f._node&&(f._node.playbackRate=u);var x=a.seek(g[v]),M=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-x,P=M*1e3/Math.abs(f._rate);(a._endTimers[g[v]]||!f._paused)&&(a._clearTimer(g[v]),a._endTimers[g[v]]=setTimeout(a._ended.bind(a,f),P)),a._emit("rate",f._id)}}else return f=a._soundById(g),f?f._rate:a._rate;return a},seek:function(){var a=this,c=arguments,u,g;if(c.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(c.length===1){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):a._sounds.length&&(g=a._sounds[0]._id,u=parseFloat(c[0]))}else c.length===2&&(u=parseFloat(c[0]),g=parseInt(c[1],10));if(typeof g>"u")return 0;if(typeof u=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,c)}}),a;var f=a._soundById(g);if(f)if(typeof u=="number"&&u>=0){var v=a.playing(g);v&&a.pause(g,!0),f._seek=u,f._ended=!1,a._clearTimer(g),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=u);var x=function(){v&&a.play(g,!0),a._emit("seek",g)};if(v&&!a._webAudio){var M=function(){a._playLock?setTimeout(M,0):x()};setTimeout(M,0)}else x()}else if(a._webAudio){var P=a.playing(g)?t.ctx.currentTime-f._playStart:0,b=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(b+P*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var c=this;if(typeof a=="number"){var u=c._soundById(a);return u?!u._paused:!1}for(var g=0;g<c._sounds.length;g++)if(!c._sounds[g]._paused)return!0;return!1},duration:function(a){var c=this,u=c._duration,g=c._soundById(a);return g&&(u=c._sprite[g._sprite][1]/1e3),u},state:function(){return this._state},unload:function(){for(var a=this,c=a._sounds,u=0;u<c.length;u++)c[u]._paused||a.stop(c[u]._id),a._webAudio||(a._clearSound(c[u]._node),c[u]._node.removeEventListener("error",c[u]._errorFn,!1),c[u]._node.removeEventListener(t._canPlayEvent,c[u]._loadFn,!1),c[u]._node.removeEventListener("ended",c[u]._endFn,!1),t._releaseHtml5Audio(c[u]._node)),delete c[u]._node,a._clearTimer(c[u]._id);var g=t._howls.indexOf(a);g>=0&&t._howls.splice(g,1);var _=!0;for(u=0;u<t._howls.length;u++)if(t._howls[u]._src===a._src||a._src.indexOf(t._howls[u]._src)>=0){_=!1;break}return r&&_&&delete r[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,c,u,g){var _=this,m=_["_on"+a];return typeof c=="function"&&m.push(g?{id:u,fn:c,once:g}:{id:u,fn:c}),_},off:function(a,c,u){var g=this,_=g["_on"+a],m=0;if(typeof c=="number"&&(u=c,c=null),c||u)for(m=0;m<_.length;m++){var f=u===_[m].id;if(c===_[m].fn&&f||!c&&f){_.splice(m,1);break}}else if(a)g["_on"+a]=[];else{var v=Object.keys(g);for(m=0;m<v.length;m++)v[m].indexOf("_on")===0&&Array.isArray(g[v[m]])&&(g[v[m]]=[])}return g},once:function(a,c,u){var g=this;return g.on(a,c,u,1),g},_emit:function(a,c,u){for(var g=this,_=g["_on"+a],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===c||a==="load")&&(setTimeout((function(f){f.call(this,c,u)}).bind(g,_[m].fn),0),_[m].once&&g.off(a,_[m].fn,_[m].id));return g._loadQueue(a),g},_loadQueue:function(a){var c=this;if(c._queue.length>0){var u=c._queue[0];u.event===a&&(c._queue.shift(),c._loadQueue()),a||u.action()}return c},_ended:function(a){var c=this,u=a._sprite;if(!c._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(c._ended.bind(c,a),100),c;var g=!!(a._loop||c._sprite[u][2]);if(c._emit("end",a._id),!c._webAudio&&g&&c.stop(a._id,!0).play(a._id),c._webAudio&&g){c._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var _=(a._stop-a._start)*1e3/Math.abs(a._rate);c._endTimers[a._id]=setTimeout(c._ended.bind(c,a),_)}return c._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,c._clearTimer(a._id),c._cleanBuffer(a._node),t._autoSuspend()),!c._webAudio&&!g&&c.stop(a._id,!0),c},_clearTimer:function(a){var c=this;if(c._endTimers[a]){if(typeof c._endTimers[a]!="function")clearTimeout(c._endTimers[a]);else{var u=c._soundById(a);u&&u._node&&u._node.removeEventListener("ended",c._endTimers[a],!1)}delete c._endTimers[a]}return c},_soundById:function(a){for(var c=this,u=0;u<c._sounds.length;u++)if(a===c._sounds[u]._id)return c._sounds[u];return null},_inactiveSound:function(){var a=this;a._drain();for(var c=0;c<a._sounds.length;c++)if(a._sounds[c]._ended)return a._sounds[c].reset();return new i(a)},_drain:function(){var a=this,c=a._pool,u=0,g=0;if(!(a._sounds.length<c)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&u++;for(g=a._sounds.length-1;g>=0;g--){if(u<=c)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),u--)}}},_getSoundIds:function(a){var c=this;if(typeof a>"u"){for(var u=[],g=0;g<c._sounds.length;g++)u.push(c._sounds[g]._id);return u}else return[a]},_refreshBuffer:function(a){var c=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=r[c._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),c},_cleanBuffer:function(a){var c=this,u=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return c;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),u))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,c},_clearSound:function(a){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,c._sounds.push(a),a.create(),a},create:function(){var a=this,c=a._parent,u=t._muted||a._muted||a._parent._muted?0:a._volume;return c._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(u,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=c._src,a._node.preload=c._preload===!0?"auto":c._preload,a._node.volume=u*t.volume(),a._node.load()),a},reset:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,c=a._parent;c._duration=Math.ceil(a._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,c=a._parent;c._duration===1/0&&(c._duration=Math.ceil(a._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var r={},o=function(a){var c=a._src;if(r[c]){a._duration=r[c].duration,d(a);return}if(/^data:[^;]+;base64,/.test(c)){for(var u=atob(c.split(",")[1]),g=new Uint8Array(u.length),_=0;_<u.length;++_)g[_]=u.charCodeAt(_);h(g.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,c,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){m.setRequestHeader(f,a._xhr.headers[f])}),m.onload=function(){var f=(m.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}h(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete r[c],a.load())},l(m)}},l=function(a){try{a.send()}catch{a.onerror()}},h=function(a,c){var u=function(){c._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&c._sounds.length>0?(r[c._src]=_,d(c,_)):u()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(g).catch(u):t.ctx.decodeAudioData(a,g,u)},d=function(a,c){c&&!a._duration&&(a._duration=c.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=c?parseInt(c[1],10):null;if(a&&u&&u<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};s.Howler=t,s.Howl=n,typeof xi<"u"?(xi.HowlerGlobal=e,xi.Howler=t,xi.Howl=n,xi.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(n=typeof n!="number"?r._pos[1]:n,i=typeof i!="number"?r._pos[2]:i,typeof t=="number")r._pos=[t,n,i],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,n,i,r,o,l){var h=this;if(!h.ctx||!h.ctx.listener)return h;var d=h._orientation;if(n=typeof n!="number"?d[1]:n,i=typeof i!="number"?d[2]:i,r=typeof r!="number"?d[3]:r,o=typeof o!="number"?d[4]:o,l=typeof l!="number"?d[5]:l,typeof t=="number")h._orientation=[t,n,i,r,o,l],typeof h.ctx.listener.forwardX<"u"?(h.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(t,n,i,r,o,l);else return d;return h},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),l=0;l<o.length;l++){var h=i._soundById(o[l]);if(h)if(typeof t=="number")h._stereo=t,h._pos=[t,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&e(h,r),r==="spatial"?typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(t,0,0):h._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",h._id);else return h._stereo}return i},Howl.prototype.pos=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,r)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof r>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var l=o._getSoundIds(r),h=0;h<l.length;h++){var d=o._soundById(l[h]);if(d)if(typeof t=="number")d._pos=[t,n,i],d._node&&((!d._panner||d._panner.pan)&&e(d,"spatial"),typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):d._panner.setPosition(t,n,i)),o._emit("pos",d._id);else return d._pos}return o},Howl.prototype.orientation=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,r)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof r>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var l=o._getSoundIds(r),h=0;h<l.length;h++){var d=o._soundById(l[h]);if(d)if(typeof t=="number")d._orientation=[t,n,i],d._node&&(d._panner||(d._pos||(d._pos=o._pos||[0,0,-.5]),e(d,"spatial")),typeof d._panner.orientationX<"u"?(d._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),d._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),d._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):d._panner.setOrientation(t,n,i)),o._emit("orientation",d._id);else return d._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,r,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof r>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],r=parseInt(n[1],10));for(var l=t._getSoundIds(r),h=0;h<l.length;h++)if(o=t._soundById(l[h]),o){var d=o._pannerAttr;d={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:d.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:d.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:d.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:d.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:d.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:d.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:d.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:d.panningModel};var p=o._panner;p||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),p=o._panner),p.coneInnerAngle=d.coneInnerAngle,p.coneOuterAngle=d.coneOuterAngle,p.coneOuterGain=d.coneOuterGain,p.distanceModel=d.distanceModel,p.maxDistance=d.maxDistance,p.refDistance=d.refDistance,p.rolloffFactor=d.rolloffFactor,p.panningModel=d.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(fr);class Ap{constructor(){this.sounds={},this.music=null,this.soundEnabled=!0,this.musicEnabled=!0,this.soundVolume=.5,this.musicVolume=.3,this.initialized=!1}init(){this.initialized||(this.initialized=!0,this.sounds.shoot=this.createSound(this.generateShootSound(),.3),this.sounds.hit=this.createSound(this.generateHitSound(),.4),this.sounds.enemyDeath=this.createSound(this.generateEnemyDeathSound(),.4),this.sounds.playerHit=this.createSound(this.generatePlayerHitSound(),.5),this.sounds.xpPickup=this.createSound(this.generateXPPickupSound(),.3),this.sounds.levelUp=this.createSound(this.generateLevelUpSound(),.6),this.sounds.abilitySelect=this.createSound(this.generateAbilitySelectSound(),.5),this.sounds.doorOpen=this.createSound(this.generateDoorOpenSound(),.4),this.sounds.bossSpawn=this.createSound(this.generateBossSpawnSound(),.6),this.music=new fr.Howl({src:[this.generateMusicDataUrl()],loop:!0,volume:this.musicVolume,html5:!0}))}createSound(e,t=.5){return new fr.Howl({src:[e],volume:t*this.soundVolume})}generateTone(e,t,n="sine",i=.01,r=.1){const l=Math.floor(44100*t),h=new Float32Array(l);for(let d=0;d<l;d++){const p=d/44100;let a=1;p<i?a=p/i:p>t-r&&(a=(t-p)/r);let c=0;switch(n){case"sine":c=Math.sin(2*Math.PI*e*p);break;case"square":c=Math.sin(2*Math.PI*e*p)>0?1:-1;break;case"sawtooth":c=2*(p*e-Math.floor(p*e+.5));break;case"triangle":c=Math.abs(4*(p*e-Math.floor(p*e+.5)))-1;break;case"noise":c=Math.random()*2-1;break}h[d]=c*a*.5}return h}bufferToWav(e,t=44100){const r=t*1*16/8,o=1*16/8,l=e.length*1*16/8,h=44,d=new ArrayBuffer(h+l),p=new DataView(d),a=(g,_)=>{for(let m=0;m<_.length;m++)p.setUint8(g+m,_.charCodeAt(m))};a(0,"RIFF"),p.setUint32(4,36+l,!0),a(8,"WAVE"),a(12,"fmt "),p.setUint32(16,16,!0),p.setUint16(20,1,!0),p.setUint16(22,1,!0),p.setUint32(24,t,!0),p.setUint32(28,r,!0),p.setUint16(32,o,!0),p.setUint16(34,16,!0),a(36,"data"),p.setUint32(40,l,!0);let c=44;for(let g=0;g<e.length;g++){const _=Math.max(-1,Math.min(1,e[g]));p.setInt16(c,_*32767,!0),c+=2}const u=new Blob([d],{type:"audio/wav"});return URL.createObjectURL(u)}generateShootSound(){const e=new Float32Array(4410);for(let t=0;t<e.length;t++){const n=t/44100,i=800-n*4e3,r=Math.exp(-n*30);e[t]=Math.sin(2*Math.PI*i*n)*r*.3}return this.bufferToWav(e)}generateHitSound(){const e=new Float32Array(6615);for(let t=0;t<e.length;t++){const n=t/44100,i=Math.exp(-n*25),r=(Math.random()*2-1)*.3,o=Math.sin(2*Math.PI*200*n)*.5;e[t]=(r+o)*i}return this.bufferToWav(e)}generateEnemyDeathSound(){const e=new Float32Array(13230);for(let t=0;t<e.length;t++){const n=t/44100,i=300-n*600,r=Math.exp(-n*10),o=(Math.random()*2-1)*.2;e[t]=(Math.sin(2*Math.PI*i*n)*.6+o)*r}return this.bufferToWav(e)}generatePlayerHitSound(){const e=new Float32Array(8820);for(let t=0;t<e.length;t++){const n=t/44100,i=Math.exp(-n*15),r=Math.sin(2*Math.PI*150*n),o=Math.sin(2*Math.PI*100*n);e[t]=(r*.5+o*.5)*i}return this.bufferToWav(e)}generateXPPickupSound(){const e=new Float32Array(4410);for(let t=0;t<e.length;t++){const n=t/44100,i=600+n*800,r=1-n*10;r>0&&(e[t]=Math.sin(2*Math.PI*i*n)*r*.3)}return this.bufferToWav(e)}generateLevelUpSound(){const e=new Float32Array(22050);for(let t=0;t<e.length;t++){const n=t/44100;let i=0,r=400;n<.15?(r=400+n*2e3,i=n/.15):n<.3?(r=700,i=1):(r=700+(n-.3)*1e3,i=Math.exp(-(n-.3)*5)),e[t]=Math.sin(2*Math.PI*r*n)*i*.4}return this.bufferToWav(e)}generateAbilitySelectSound(){const e=new Float32Array(8820);for(let t=0;t<e.length;t++){const n=t/44100,i=500+Math.sin(n*50)*100,r=Math.exp(-n*10);e[t]=Math.sin(2*Math.PI*i*n)*r*.4}return this.bufferToWav(e)}generateDoorOpenSound(){const e=new Float32Array(17640);for(let t=0;t<e.length;t++){const n=t/44100,i=100+n*300,r=Math.exp(-n*5),o=(Math.random()*2-1)*.1;e[t]=(Math.sin(2*Math.PI*i*n)*.5+o)*r}return this.bufferToWav(e)}generateBossSpawnSound(){const e=new Float32Array(44100);for(let t=0;t<e.length;t++){const n=t/44100,i=80+Math.sin(n*5)*30;let r=0;n<.1?r=n*10:n<.5?r=1:r=Math.exp(-(n-.5)*3);const o=(Math.random()*2-1)*.1*r;e[t]=(Math.sin(2*Math.PI*i*n)*.5+o)*r}return this.bufferToWav(e)}generateMusicDataUrl(){const n=new Float32Array(352800),i=[110,110,146.83,146.83,130.81,130.81,98,98],r=[220,261.63,293.66,329.63,293.66,261.63,220,196];for(let o=0;o<n.length;o++){const l=o/44100,h=Math.floor(l*2)%8,d=i[h],p=r[h],a=Math.sin(2*Math.PI*d*l)*.15,c=Math.sin(2*Math.PI*p*l)*.08,u=l*2%1,g=u<.1?Math.sin(2*Math.PI*(150-u*1e3)*l)*Math.exp(-u*30)*.2:0,_=l*4%1,m=_<.05?(Math.random()*2-1)*Math.exp(-_*100)*.05:0;n[o]=a+c+g+m}return this.bufferToWav(n)}play(e){!this.soundEnabled||!this.sounds[e]||this.sounds[e].play()}playMusic(){!this.musicEnabled||!this.music||this.music.play()}stopMusic(){this.music&&this.music.stop()}pauseMusic(){this.music&&this.music.pause()}resumeMusic(){this.musicEnabled&&this.music&&this.music.play()}setSoundVolume(e){this.soundVolume=e,Object.values(this.sounds).forEach(t=>{t.volume(e)})}setMusicVolume(e){this.musicVolume=e,this.music&&this.music.volume(e)}toggleSound(){return this.soundEnabled=!this.soundEnabled,this.soundEnabled}toggleMusic(){return this.musicEnabled=!this.musicEnabled,this.musicEnabled?this.resumeMusic():this.pauseMusic(),this.musicEnabled}}const ct=new Ap,He={clamp(s,e,t){return Math.max(e,Math.min(t,s))},lerp(s,e,t){return s+(e-s)*t},distance(s,e,t,n){const i=t-s,r=n-e;return Math.sqrt(i*i+r*r)},distance3D(s,e){const t=e.x-s.x,n=e.y-s.y,i=e.z-s.z;return Math.sqrt(t*t+n*n+i*i)},distanceXZ(s,e){const t=e.x-s.x,n=e.z-s.z;return Math.sqrt(t*t+n*n)},normalize(s,e){const t=Math.sqrt(s*s+e*e);return t===0?{x:0,y:0}:{x:s/t,y:e/t}},randomRange(s,e){return Math.random()*(e-s)+s},randomInt(s,e){return Math.floor(Math.random()*(e-s+1))+s},randomChoice(s){return s[Math.floor(Math.random()*s.length)]},shuffleArray(s){const e=[...s];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},angleToDirection(s){return{x:Math.cos(s),y:Math.sin(s)}},directionToAngle(s,e){return Math.atan2(e,s)},easeOutQuad(s){return s*(2-s)},easeInOutQuad(s){return s<.5?2*s*s:-1+(4-2*s)*s},easeOutBack(s){return 1+2.70158*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2)},easeOutElastic(s){const e=2*Math.PI/3;return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s*10-.75)*e)+1}};class bp{constructor(e){this.scene=e,this.health=100,this.maxHealth=100,this.speed=5,this.attackSpeed=1.5,this.attackDamage=10,this.attackRange=15,this.projectileSpeed=12,this.projectileCount=1,this.projectilePierce=0,this.critChance=.05,this.critMultiplier=2,this.dodge=0,this.xp=0,this.level=1,this.xpToNextLevel=100,this.knockbackResistance=0,this.xpMagnetRange=2,this.xpMultiplier=1,this.velocity=new R,this.targetRotation=0,this.attackTimer=0,this.isAttacking=!1,this.invulnerable=!1,this.invulnerableTimer=0,this.diagonalArrows=!1,this.rearArrow=!1,this.sideArrows=!1,this.bouncyWalls=!1,this.ricochet=!1,this.homing=!1,this.shield=0,this.orbitals=[],this.fireArrows=!1,this.iceArrows=!1,this.poisonArrows=!1,this.elementalType=null,this.burnDamageMultiplier=1,this.burnDurationBonus=0,this.infernoExplosion=!1,this.freezeSlowBonus=0,this.freezeDurationBonus=0,this.shatterBonus=!1,this.poisonDamageMultiplier=1,this.poisonDurationBonus=0,this.plagueSpread=!1,this.createMesh(),this.createHealthBar()}createMesh(){const e=new jt,t=new Ar(.4,.8,8,16),n=new $t({color:3447003,metalness:.3,roughness:.7}),i=new ke(t,n);i.position.y=.6,i.castShadow=!0,i.receiveShadow=!0,e.add(i);const r=new Dt(.25,16,16),o=new $t({color:16111048,metalness:.1,roughness:.8}),l=new ke(r,o);l.position.y=1.35,l.castShadow=!0,e.add(l);const h=new br(.3,.05,8,16,Math.PI),d=new $t({color:9127187,metalness:.2,roughness:.8}),p=new ke(h,d);p.position.set(.5,.8,0),p.rotation.z=Math.PI/2,p.rotation.y=Math.PI/2,e.add(p),this.mesh=e,this.mesh.position.y=0,this.scene.add(this.mesh),this.body=i,this.originalColor=n.color.getHex()}createHealthBar(){const n=new hn(1,.1),i=new mt({color:3355443});this.healthBarBg=new ke(n,i),this.healthBarBg.position.y=1.8,this.healthBarBg.rotation.x=-Math.PI/4,this.mesh.add(this.healthBarBg);const r=new hn(1,.1),o=new mt({color:3066993});this.healthBar=new ke(r,o),this.healthBar.position.z=.01,this.healthBarBg.add(this.healthBar),this.healthBarBg.visible=!1}update(e,t,n){const i=t.getMovement();if(t.isMoving())this.velocity.x=i.x*this.speed,this.velocity.z=i.y*this.speed,this.targetRotation=Math.atan2(i.x,i.y);else{this.velocity.x*=.8,this.velocity.z*=.8;const h=this.findNearestEnemy(n);if(h){const d=h.mesh.position.x-this.mesh.position.x,p=h.mesh.position.z-this.mesh.position.z;this.targetRotation=Math.atan2(d,p)}}this.mesh.position.x+=this.velocity.x*e,this.mesh.position.z+=this.velocity.z*e;const o=this.mesh.rotation.y;let l=this.targetRotation-o;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;this.mesh.rotation.y+=l*10*e,this.invulnerable&&(this.invulnerableTimer-=e,this.body.material.opacity=Math.sin(this.invulnerableTimer*20)>0?1:.3,this.body.material.transparent=!0,this.invulnerableTimer<=0&&(this.invulnerable=!1,this.body.material.opacity=1,this.body.material.transparent=!1)),this.updateHealthBar()}findNearestEnemy(e){let t=null,n=this.attackRange;for(const i of e){if(!i.isAlive)continue;const r=He.distanceXZ(this.mesh.position,i.mesh.position);r<n&&(n=r,t=i)}return t}canAttack(e){return!e.isMoving()}updateAttackTimer(e){this.attackTimer-=e}isReadyToAttack(){return this.attackTimer<=0}resetAttackTimer(){this.attackTimer=1/this.attackSpeed}getAttackDirections(e){const t=[];if(e){const n=e.mesh.position.x-this.mesh.position.x,i=e.mesh.position.z-this.mesh.position.z,r=Math.sqrt(n*n+i*i);if(r>0){const o={x:n/r,z:i/r};if(t.push(o),this.projectileCount>1)for(let h=1;h<this.projectileCount;h++){const d=Math.atan2(o.x,o.z),p=(h%2===0?1:-1)*Math.ceil(h/2)*.2;t.push({x:Math.sin(d+p),z:Math.cos(d+p)})}if(this.diagonalArrows){const l=Math.atan2(o.x,o.z);t.push({x:Math.sin(l+Math.PI/4),z:Math.cos(l+Math.PI/4)}),t.push({x:Math.sin(l-Math.PI/4),z:Math.cos(l-Math.PI/4)})}this.rearArrow&&t.push({x:-o.x,z:-o.z}),this.sideArrows&&(t.push({x:o.z,z:-o.x}),t.push({x:-o.z,z:o.x}))}}return t}takeDamage(e,t=null){if(this.invulnerable||Math.random()<this.dodge)return!1;if(this.shield>0)return this.shield--,!1;if(this.health-=e,this.health=Math.max(0,this.health),this.invulnerable=!0,this.invulnerableTimer=1,this.flashDamage(),t){const n=2*(1-this.knockbackResistance);this.velocity.x+=t.x*n,this.velocity.z+=t.z*n}return this.healthBarBg.visible=!0,!0}flashDamage(){this.body.material.color.setHex(16711680),setTimeout(()=>{this.body.material.color.setHex(this.originalColor)},100)}heal(e){this.health=Math.min(this.maxHealth,this.health+e),this.updateHealthBar()}addXP(e){return this.xp+=e*this.xpMultiplier,this.xp>=this.xpToNextLevel}levelUp(){this.level++,this.xp-=this.xpToNextLevel,this.xpToNextLevel=Math.floor(this.xpToNextLevel*1.2)}updateHealthBar(){const e=this.health/this.maxHealth;this.healthBar.scale.x=e,this.healthBar.position.x=(e-1)*.5,e>.5?this.healthBar.material.color.setHex(3066993):e>.25?this.healthBar.material.color.setHex(15965202):this.healthBar.material.color.setHex(15158332),this.health>=this.maxHealth&&(this.healthBarBg.visible=!1)}isAlive(){return this.health>0}getPosition(){return this.mesh.position.clone()}setPosition(e,t){this.mesh.position.x=e,this.mesh.position.z=t}reset(){this.health=this.maxHealth,this.xp=0,this.level=1,this.xpToNextLevel=100,this.attackTimer=0,this.invulnerable=!1,this.invulnerableTimer=0,this.velocity.set(0,0,0),this.mesh.position.set(0,0,0),this.mesh.rotation.set(0,0,0),this.projectileCount=1,this.projectilePierce=0,this.diagonalArrows=!1,this.rearArrow=!1,this.sideArrows=!1,this.bouncyWalls=!1,this.ricochet=!1,this.homing=!1,this.shield=0,this.fireArrows=!1,this.iceArrows=!1,this.poisonArrows=!1,this.elementalType=null,this.burnDamageMultiplier=1,this.burnDurationBonus=0,this.infernoExplosion=!1,this.freezeSlowBonus=0,this.freezeDurationBonus=0,this.shatterBonus=!1,this.poisonDamageMultiplier=1,this.poisonDurationBonus=0,this.plagueSpread=!1,this.updateHealthBar(),this.healthBarBg.visible=!1}dispose(){this.scene.remove(this.mesh),this.mesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}const Xe={BURN:"burn",FREEZE:"freeze",POISON:"poison"},ns={[Xe.BURN]:{name:"Burn",color:16729344,particleColor:16737792,duration:4,tickRate:.5,baseDamage:5,stackMultiplier:1.2,maxStacks:5,visualIntensity:.4},[Xe.FREEZE]:{name:"Freeze",color:49151,particleColor:8900331,duration:3,slowPercent:.5,maxSlowPercent:.8,maxStacks:3,visualIntensity:.5},[Xe.POISON]:{name:"Poison",color:3329330,particleColor:10145074,duration:6,tickRate:1,baseDamage:3,stackMultiplier:1.15,maxStacks:5,visualIntensity:.35}};class wp{constructor(e,t=1){this.type=e,this.config=ns[e],this.stacks=Math.min(t,this.config.maxStacks),this.duration=this.config.duration,this.remainingDuration=this.duration,this.tickTimer=0}addStack(){this.stacks<this.config.maxStacks&&this.stacks++,this.remainingDuration=this.duration}update(e,t,n){return this.remainingDuration-=e,this.config.tickRate&&(this.tickTimer+=e,this.tickTimer>=this.config.tickRate)?(this.tickTimer=0,this.applyTick(t,n)):{expired:this.remainingDuration<=0}}applyTick(e,t){const n=this.calculateTickDamage();return t&&e.mesh&&this.emitTickParticles(t,e.mesh.position),{damage:n,expired:this.remainingDuration<=0}}calculateTickDamage(){const e=this.config.baseDamage||0,t=Math.pow(this.config.stackMultiplier||1,this.stacks-1);return Math.floor(e*t)}getSlowMultiplier(){if(this.type!==Xe.FREEZE)return 1;const e=this.config.slowPercent;return 1-Math.min(e*this.stacks,this.config.maxSlowPercent)}emitTickParticles(e,t){const n=3+this.stacks;for(let i=0;i<n;i++){const r=i/n*Math.PI*2,o=Math.cos(r)*.3,l=Math.sin(r)*.3;e.emit({position:new R(t.x+o,t.y+.5,t.z+l),color:this.config.particleColor,speed:this.type===Xe.BURN?2:1,lifetime:.4,startScale:.15,endScale:0,gravity:this.type===Xe.BURN?-3:2,elevation:this.type===Xe.BURN?1:.3})}}isExpired(){return this.remainingDuration<=0}}class Rp{constructor(){this.effects=new Map}applyEffect(e,t=1){if(this.effects.has(e)){const n=this.effects.get(e);for(let i=0;i<t;i++)n.addStack()}else this.effects.set(e,new wp(e,t))}update(e,t,n){let i=0;const r=[];for(const[o,l]of this.effects){const h=l.update(e,t,n);h.damage&&(i+=h.damage),h.expired&&r.push(o)}for(const o of r)this.effects.delete(o);return{totalDamage:i}}getSpeedMultiplier(){const e=this.effects.get(Xe.FREEZE);return e?e.getSlowMultiplier():1}hasEffect(e){return this.effects.has(e)}getEffect(e){return this.effects.get(e)}getActiveEffects(){return Array.from(this.effects.values())}clear(){this.effects.clear()}getVisualTint(){if(this.effects.size===0)return null;let e=0,t=0,n=0,i=0;for(const r of this.effects.values()){const o=new Ge(r.config.color),l=r.config.visualIntensity*(r.stacks/r.config.maxStacks);e+=o.r*l,t+=o.g*l,n+=o.b*l,i+=l}return i===0?null:new Ge(e/i,t/i,n/i)}}const Ve={CHASER:"chaser",SHOOTER:"shooter",BOMBER:"bomber",SPAWNER:"spawner",TANK:"tank",BOSS:"boss"},Cp={[Ve.CHASER]:{health:20,damage:10,speed:2.5,xpValue:10,color:15158332,size:.4,shape:"box"},[Ve.SHOOTER]:{health:15,damage:8,speed:1.5,xpValue:15,color:10181046,size:.35,shape:"octahedron",attackRange:8,attackCooldown:2,projectileSpeed:6},[Ve.BOMBER]:{health:25,damage:20,speed:3,xpValue:20,color:15965202,size:.45,shape:"sphere",explosionRadius:2,explosionDamage:25},[Ve.SPAWNER]:{health:40,damage:5,speed:0,xpValue:30,color:1752220,size:.6,shape:"cylinder",spawnCooldown:4,spawnType:Ve.CHASER},[Ve.TANK]:{health:80,damage:20,speed:1,xpValue:40,color:8359053,size:.7,shape:"box"},[Ve.BOSS]:{health:500,damage:30,speed:1.5,xpValue:200,color:9323693,size:1.2,shape:"dodecahedron",attackRange:10,attackCooldown:1.5,projectileSpeed:8,phases:3}};class Pp{constructor(e,t,n,i=1){this.scene=e,this.type=t,this.config={...Cp[t]},this.config.health*=i,this.config.damage*=i,this.config.xpValue=Math.floor(this.config.xpValue*i),this.health=this.config.health,this.maxHealth=this.config.health,this.damage=this.config.damage,this.speed=this.config.speed,this.xpValue=this.config.xpValue,this.isAlive=!0,this.velocity=new R,this.knockbackVelocity=new R,this.attackTimer=Math.random()*(this.config.attackCooldown||2),this.spawnTimer=Math.random()*(this.config.spawnCooldown||4),this.hitFlashTimer=0,this.deathTimer=0,this.isDying=!1,t===Ve.BOSS&&(this.phase=1,this.phaseHealthThresholds=[.66,.33,0],this.attackPattern=0),this.statusEffects=new Rp,this.baseSpeed=this.speed,this.statusVisualTimer=0,this.createMesh(n),this.createHealthBar(),this.createStatusEffectIndicators()}createMesh(e){const t=new jt;let n;switch(this.config.shape){case"box":n=new En(this.config.size*2,this.config.size*2,this.config.size*2);break;case"sphere":n=new Dt(this.config.size,16,16);break;case"octahedron":n=new gs(this.config.size);break;case"cylinder":n=new zn(this.config.size,this.config.size,this.config.size*2,8);break;case"dodecahedron":n=new ms(this.config.size);break;default:n=new En(this.config.size*2,this.config.size*2,this.config.size*2)}const i=new $t({color:this.config.color,metalness:.3,roughness:.7}),r=new ke(n,i);if(r.castShadow=!0,r.receiveShadow=!0,t.add(r),this.type===Ve.SHOOTER){const o=new Dt(.1,8,8),l=new mt({color:16777215}),h=new ke(o,l);h.position.set(-.15,.1,this.config.size);const d=new ke(o,l);d.position.set(.15,.1,this.config.size),t.add(h,d);const p=new Dt(.05,8,8),a=new mt({color:0}),c=new ke(p,a);c.position.z=.05,h.add(c);const u=new ke(p,a);u.position.z=.05,d.add(u)}if(this.type===Ve.BOMBER){const o=new zn(.03,.03,.2,8),l=new mt({color:3355443}),h=new ke(o,l);h.position.y=this.config.size+.1,t.add(h);const d=new Dt(.05,8,8),p=new mt({color:16737792,transparent:!0,opacity:.8});this.spark=new ke(d,p),this.spark.position.y=this.config.size+.25,t.add(this.spark)}if(this.type===Ve.BOSS){const o=new fs(.3,.5,5),l=new $t({color:15844367,metalness:.8,roughness:.2}),h=new ke(o,l);h.position.y=this.config.size+.3,t.add(h)}this.mesh=t,this.mesh.position.set(e.x,this.config.size,e.z),this.body=r,this.originalColor=this.config.color,this.scene.add(this.mesh)}createHealthBar(){const e=this.config.size*2,t=.1,n=new hn(e,t),i=new mt({color:3355443});this.healthBarBg=new ke(n,i),this.healthBarBg.position.y=this.config.size*2+.3,this.healthBarBg.rotation.x=-Math.PI/4,this.mesh.add(this.healthBarBg);const r=new hn(e,t),o=new mt({color:15158332});this.healthBar=new ke(r,o),this.healthBar.position.z=.01,this.healthBarBg.add(this.healthBar)}createStatusEffectIndicators(){this.statusIconContainer=new jt,this.statusIconContainer.position.y=this.config.size*2+.5,this.mesh.add(this.statusIconContainer),this.statusRings={};const e=this.createStatusRing(ns[Xe.BURN].color);e.visible=!1,this.statusRings[Xe.BURN]=e,this.mesh.add(e);const t=this.createStatusRing(ns[Xe.FREEZE].color);t.visible=!1,this.statusRings[Xe.FREEZE]=t,this.mesh.add(t);const n=this.createStatusRing(ns[Xe.POISON].color);n.visible=!1,this.statusRings[Xe.POISON]=n,this.mesh.add(n);const i=new Dt(this.config.size*1.3,16,16),r=new mt({color:16777215,transparent:!0,opacity:0,side:wt});this.statusAura=new ke(i,r),this.statusAura.position.y=this.config.size,this.mesh.add(this.statusAura)}createStatusRing(e){const t=new jt,n=6;for(let i=0;i<n;i++){const r=new Dt(.08,8,8),o=new mt({color:e,transparent:!0,opacity:.8}),l=new ke(r,o),h=i/n*Math.PI*2;l.position.x=Math.cos(h)*this.config.size*1.5,l.position.z=Math.sin(h)*this.config.size*1.5,l.position.y=this.config.size*.5,t.add(l)}return t}update(e,t,n,i=null){if(this.isDying){this.deathTimer+=e;const p=1-this.deathTimer/.3;return this.mesh.scale.setScalar(Math.max(0,p)),this.deathTimer>=.3?"dead":null}if(!this.isAlive)return null;const r=this.statusEffects.update(e,this,i);r.totalDamage>0&&this.takeDamage(r.totalDamage,null,!0);const o=this.statusEffects.getSpeedMultiplier();this.speed=this.baseSpeed*o,this.updateStatusVisuals(e),this.knockbackVelocity.multiplyScalar(.9),this.hitFlashTimer>0&&(this.hitFlashTimer-=e,this.hitFlashTimer<=0&&this.body.material.color.setHex(this.originalColor));const l=new R(t.mesh.position.x-this.mesh.position.x,0,t.mesh.position.z-this.mesh.position.z),h=l.length();l.normalize();let d=null;switch(this.type){case Ve.CHASER:this.velocity.copy(l).multiplyScalar(this.speed);break;case Ve.SHOOTER:h>this.config.attackRange?this.velocity.copy(l).multiplyScalar(this.speed):h<this.config.attackRange*.5?this.velocity.copy(l).multiplyScalar(-this.speed):this.velocity.set(0,0,0),this.attackTimer-=e,this.attackTimer<=0&&h<=this.config.attackRange&&(this.attackTimer=this.config.attackCooldown,this.fireProjectile(l,n));break;case Ve.BOMBER:this.velocity.copy(l).multiplyScalar(this.speed),this.spark&&(this.spark.material.opacity=.5+Math.sin(Date.now()*.01)*.5);break;case Ve.SPAWNER:this.velocity.set(0,0,0),this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnTimer=this.config.spawnCooldown,d={type:this.config.spawnType,position:this.mesh.position.clone()});break;case Ve.TANK:this.velocity.copy(l).multiplyScalar(this.speed);break;case Ve.BOSS:this.updateBoss(e,t,l,h,n);break}if(this.mesh.position.x+=(this.velocity.x+this.knockbackVelocity.x)*e,this.mesh.position.z+=(this.velocity.z+this.knockbackVelocity.z)*e,this.velocity.lengthSq()>.01){const p=Math.atan2(this.velocity.x,this.velocity.z);this.mesh.rotation.y=p}return this.type!==Ve.BOSS&&(this.mesh.rotation.y+=e*.5),d}updateBoss(e,t,n,i,r){const o=this.health/this.maxHealth;for(let d=0;d<this.phaseHealthThresholds.length;d++)o<=this.phaseHealthThresholds[d]&&this.phase<=d+1&&(this.phase=d+2,this.onPhaseChange());const l=1+(this.phase-1)*.2;i>3?this.velocity.copy(n).multiplyScalar(this.speed*l):this.velocity.set(0,0,0),this.attackTimer-=e;const h=1/this.phase;this.attackTimer<=0&&(this.attackTimer=this.config.attackCooldown*h,this.performBossAttack(n,r))}performBossAttack(e,t){switch(this.attackPattern=(this.attackPattern+1)%3,this.attackPattern){case 0:this.fireProjectile(e,t);break;case 1:for(let n=0;n<8;n++){const i=n/8*Math.PI*2,r={x:Math.sin(i),z:Math.cos(i)};this.fireProjectile(r,t)}break;case 2:for(let n=-2;n<=2;n++){const i=Math.atan2(e.x,e.z)+n*.2,r={x:Math.sin(i),z:Math.cos(i)};this.fireProjectile(r,t)}break}}onPhaseChange(){this.body.material.emissive=new Ge(16711680),this.body.material.emissiveIntensity=.3,setTimeout(()=>{this.body.material.emissiveIntensity=0},500)}fireProjectile(e,t){const n=this.mesh.position.clone();n.y=.5,t.fire(n,{x:e.x,z:e.z},this.damage,this.config.projectileSpeed||6,0,{isPlayerProjectile:!1})}takeDamage(e,t=null,n=!1){if(!this.isAlive||this.isDying)return!1;if(this.health-=e,this.health=Math.max(0,this.health),this.updateHealthBar(),n?this.flashStatusDamage():this.flashDamage(),t){const i=this.type===Ve.BOSS?1:3;this.knockbackVelocity.x=t.x*i,this.knockbackVelocity.z=t.z*i}return this.health<=0?(this.die(),!0):!1}applyStatusEffect(e,t=1){!this.isAlive||this.isDying||this.statusEffects.applyEffect(e,t)}hasStatusEffect(e){return this.statusEffects.hasEffect(e)}updateStatusVisuals(e){this.statusVisualTimer+=e;for(const[n,i]of Object.entries(this.statusRings)){const r=this.statusEffects.hasEffect(n);if(i.visible=r,r){const o=n===Xe.FREEZE?.5:2;i.rotation.y+=e*o;const l=this.statusEffects.getEffect(n),h=1+Math.sin(this.statusVisualTimer*4)*.1*l.stacks;i.scale.setScalar(h)}}const t=this.statusEffects.getVisualTint();if(t?(this.statusAura.material.color.copy(t),this.statusAura.material.opacity=.2+Math.sin(this.statusVisualTimer*3)*.1):this.statusAura.material.opacity=0,this.statusEffects.getActiveEffects().length>0&&this.hitFlashTimer<=0){const n=this.statusEffects.getActiveEffects()[0];this.body.material.emissive=new Ge(n.config.color),this.body.material.emissiveIntensity=.15+Math.sin(this.statusVisualTimer*5)*.05}else this.hitFlashTimer<=0&&(this.body.material.emissiveIntensity=0)}flashStatusDamage(){const e=this.statusEffects.getActiveEffects();e.length>0&&(this.body.material.color.setHex(e[0].config.color),this.hitFlashTimer=.08)}flashDamage(){this.body.material.color.setHex(16777215),this.hitFlashTimer=.1}updateHealthBar(){const e=this.health/this.maxHealth;this.healthBar.scale.x=Math.max(.01,e),this.healthBar.position.x=(e-1)*this.config.size}die(){return this.isDying=!0,this.isAlive=!1,this.type===Ve.BOMBER?{type:"explosion",position:this.mesh.position.clone(),radius:this.config.explosionRadius,damage:this.config.explosionDamage}:null}getCollisionRadius(){return this.config?this.config.size:.4}remove(){this.scene.remove(this.mesh)}dispose(){this.scene.remove(this.mesh),this.mesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class Rr{constructor(e,t,n=20){this.createFn=e,this.resetFn=t,this.pool=[],this.active=[];for(let i=0;i<n;i++)this.pool.push(this.createFn())}get(){let e;return this.pool.length>0?e=this.pool.pop():e=this.createFn(),this.active.push(e),e}release(e){const t=this.active.indexOf(e);t!==-1&&(this.active.splice(t,1),this.resetFn(e),this.pool.push(e))}releaseAll(){for(;this.active.length>0;){const e=this.active.pop();this.resetFn(e),this.pool.push(e)}}getActiveCount(){return this.active.length}getPoolSize(){return this.pool.length}}const gn={[Xe.BURN]:{core:16729344,emissive:16737792,glow:16747520,trail:16753920},[Xe.FREEZE]:{core:49151,emissive:8900331,glow:11393254,trail:14745599},[Xe.POISON]:{core:3329330,emissive:2263842,glow:9498256,trail:10145074},default:{core:15844367,emissive:15965202,glow:15844367,trail:15965202},enemy:{core:15158332,emissive:12597547,glow:15158332,trail:12597547}};class Lp{constructor(){this.mesh=null,this.velocity=new R,this.damage=0,this.speed=0,this.pierce=0,this.piercedEnemies=new Set,this.isActive=!1,this.lifetime=0,this.maxLifetime=3,this.isPlayerProjectile=!0,this.bouncyWalls=!1,this.ricochet=!1,this.homing=!1,this.homingStrength=2,this.elementalType=null,this.trailTimer=0,this.createMesh()}createMesh(){const e=new jt,t=new Dt(.15,8,8),n=new $t({color:15844367,emissive:15965202,emissiveIntensity:.5,metalness:.8,roughness:.2}),i=new ke(t,n);e.add(i);const r=new Dt(.25,8,8),o=new mt({color:15844367,transparent:!0,opacity:.3}),l=new ke(r,o);e.add(l);const h=new fs(.1,.4,8),d=new mt({color:15965202,transparent:!0,opacity:.5}),p=new ke(h,d);p.rotation.x=Math.PI/2,p.position.z=.3,e.add(p),this.mesh=e,this.mesh.visible=!1}fire(e,t,n,i,r,o={}){this.mesh.position.copy(e),this.mesh.position.y=.5,this.velocity.set(t.x*i,0,t.z*i),this.damage=n,this.speed=i,this.pierce=r,this.piercedEnemies.clear(),this.isActive=!0,this.lifetime=0,this.trailTimer=0,this.mesh.visible=!0,this.isPlayerProjectile=o.isPlayerProjectile!==!1,this.bouncyWalls=o.bouncyWalls||!1,this.ricochet=o.ricochet||!1,this.homing=o.homing||!1,this.elementalType=o.elementalType||null;let l;this.isPlayerProjectile?this.elementalType&&gn[this.elementalType]?l=gn[this.elementalType]:l=gn.default:l=gn.enemy;const h=this.mesh.children[0],d=this.mesh.children[1],p=this.mesh.children[2];h.material.color.setHex(l.core),h.material.emissive.setHex(l.emissive),d.material.color.setHex(l.glow),p.material.color.setHex(l.trail);const a=Math.atan2(this.velocity.x,this.velocity.z);this.mesh.rotation.y=a}getTrailColor(){return this.elementalType&&gn[this.elementalType]?gn[this.elementalType].trail:this.isPlayerProjectile?gn.default.trail:gn.enemy.trail}update(e,t,n,i){if(!this.isActive)return;if(this.lifetime+=e,this.lifetime>this.maxLifetime){this.deactivate();return}if(this.homing&&this.isPlayerProjectile){const o=this.findNearestTarget(t);if(o){const l=new R(o.mesh.position.x-this.mesh.position.x,0,o.mesh.position.z-this.mesh.position.z).normalize();this.velocity.x+=l.x*this.homingStrength*e,this.velocity.z+=l.z*this.homingStrength*e,this.velocity.normalize().multiplyScalar(this.speed)}}this.mesh.position.add(this.velocity.clone().multiplyScalar(e));const r=Math.atan2(this.velocity.x,this.velocity.z);if(this.mesh.rotation.y=r,this.bouncyWalls){const o=i/2-.5;Math.abs(this.mesh.position.x)>o&&(this.velocity.x*=-1,this.mesh.position.x=Math.sign(this.mesh.position.x)*o),Math.abs(this.mesh.position.z)>o&&(this.velocity.z*=-1,this.mesh.position.z=Math.sign(this.mesh.position.z)*o)}else{const o=i/2;(Math.abs(this.mesh.position.x)>o||Math.abs(this.mesh.position.z)>o)&&this.deactivate()}}findNearestTarget(e){let t=null,n=10;for(const i of e){if(!i.isAlive||this.piercedEnemies.has(i))continue;const r=He.distanceXZ(this.mesh.position,i.mesh.position);r<n&&(n=r,t=i)}return t}onHitEnemy(e,t){if(this.piercedEnemies.add(e),this.ricochet){const n=this.findNearestTarget(t);if(n){const i=new R(n.mesh.position.x-this.mesh.position.x,0,n.mesh.position.z-this.mesh.position.z).normalize();this.velocity.set(i.x*this.speed,0,i.z*this.speed)}}this.piercedEnemies.size>this.pierce&&this.deactivate()}deactivate(){this.isActive=!1,this.mesh.visible=!1}reset(){this.isActive=!1,this.mesh.visible=!1,this.piercedEnemies.clear(),this.lifetime=0,this.trailTimer=0,this.velocity.set(0,0,0),this.elementalType=null}}class Dp{constructor(e){this.scene=e,this.pool=new Rr(()=>{const t=new Lp;return this.scene.add(t.mesh),t},t=>{t.reset()},50)}fire(e,t,n,i,r,o={}){const l=this.pool.get();return l.fire(e,t,n,i,r,o),l}update(e,t,n,i){const r=[];for(const o of this.pool.active)o.update(e,t,n,i),o.isActive||r.push(o);for(const o of r)this.pool.release(o)}getActiveProjectiles(){return this.pool.active}clear(){this.pool.releaseAll()}dispose(){for(const e of this.pool.active)this.scene.remove(e.mesh),e.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()});for(const e of this.pool.pool)this.scene.remove(e.mesh),e.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class Ip{constructor(){this.mesh=null,this.value=0,this.isActive=!1,this.velocity=new R,this.magnetized=!1,this.lifetime=0,this.maxLifetime=30,this.createMesh()}createMesh(){const e=new jt,t=new gs(.15,0),n=new $t({color:3066993,emissive:2600544,emissiveIntensity:.5,metalness:.8,roughness:.2,transparent:!0,opacity:.9}),i=new ke(t,n);i.castShadow=!0,e.add(i);const r=new Dt(.25,8,8),o=new mt({color:3066993,transparent:!0,opacity:.2}),l=new ke(r,o);e.add(l),this.mesh=e,this.mesh.visible=!1,this.gem=i,this.glow=l}spawn(e,t){this.mesh.position.set(e.x+He.randomRange(-.5,.5),.3,e.z+He.randomRange(-.5,.5)),this.value=t,this.isActive=!0,this.magnetized=!1,this.lifetime=0,this.mesh.visible=!0;const n=Math.random()*Math.PI*2,i=He.randomRange(2,4);this.velocity.set(Math.cos(n)*i,5,Math.sin(n)*i);const r=.8+t/50*.4;this.mesh.scale.setScalar(r),t>=50?(this.gem.material.color.setHex(15844367),this.gem.material.emissive.setHex(15965202),this.glow.material.color.setHex(15844367)):t>=20?(this.gem.material.color.setHex(3447003),this.gem.material.emissive.setHex(2719929),this.glow.material.color.setHex(3447003)):(this.gem.material.color.setHex(3066993),this.gem.material.emissive.setHex(2600544),this.glow.material.color.setHex(3066993))}update(e,t,n){if(!this.isActive)return!1;if(this.lifetime+=e,this.lifetime>this.maxLifetime)return this.deactivate(),!1;this.lifetime>this.maxLifetime-3&&(this.mesh.visible=Math.sin(this.lifetime*10)>0),this.velocity.y-=20*e,this.mesh.position.add(this.velocity.clone().multiplyScalar(e)),this.mesh.position.y<.3&&(this.mesh.position.y=.3,this.velocity.y=0,this.velocity.x*=.8,this.velocity.z*=.8),this.mesh.rotation.y+=e*3;const i=new R(t.x-this.mesh.position.x,0,t.z-this.mesh.position.z),r=i.length();return r<n&&(this.magnetized=!0),this.magnetized&&(i.normalize(),this.velocity.x=i.x*15,this.velocity.z=i.z*15,r<.5)?(this.deactivate(),!0):!1}deactivate(){this.isActive=!1,this.mesh.visible=!1}reset(){this.isActive=!1,this.mesh.visible=!1,this.magnetized=!1,this.lifetime=0,this.velocity.set(0,0,0)}}class Up{constructor(e){this.scene=e,this.pool=new Rr(()=>{const t=new Ip;return this.scene.add(t.mesh),t},t=>{t.reset()},100)}spawn(e,t){const n=this.pool.get();return n.spawn(e,t),n}spawnMultiple(e,t){const n=this.splitValue(t);for(const i of n)this.spawn(e,i)}splitValue(e){const t=[];let n=e;for(;n>=50;)t.push(50),n-=50;for(;n>=20;)t.push(20),n-=20;for(;n>=10;)t.push(10),n-=10;return n>0&&t.push(n),t}update(e,t,n){const i=[];let r=0;for(const o of this.pool.active)o.update(e,t,n)?(r+=o.value,i.push(o)):o.isActive||i.push(o);for(const o of i)this.pool.release(o);return r}magnetizeAll(e){for(const t of this.pool.active)t.isActive&&(t.magnetized=!0)}collectAll(){const e=[];let t=0;for(const n of this.pool.active)n.isActive&&(t+=n.value,n.deactivate(),e.push(n));for(const n of e)this.pool.release(n);return t}clear(){this.pool.releaseAll()}dispose(){for(const e of this.pool.active)this.scene.remove(e.mesh),e.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()});for(const e of this.pool.pool)this.scene.remove(e.mesh),e.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class Np{constructor(){this.mesh=null,this.velocity=new R,this.lifetime=0,this.maxLifetime=1,this.isActive=!1,this.startScale=1,this.endScale=0,this.startOpacity=1,this.endOpacity=0,this.gravity=0,this.friction=0,this.createMesh()}createMesh(){const e=new Dt(.1,8,8),t=new mt({color:16777215,transparent:!0,opacity:1});this.mesh=new ke(e,t),this.mesh.visible=!1}emit(e){this.mesh.position.copy(e.position);const t=e.speed||He.randomRange(2,5),n=e.angle!==void 0?e.angle:Math.random()*Math.PI*2,i=e.elevation!==void 0?e.elevation:He.randomRange(-.5,1);this.velocity.set(Math.cos(n)*t,i*t,Math.sin(n)*t),this.lifetime=0,this.maxLifetime=e.lifetime||He.randomRange(.5,1),this.isActive=!0,this.mesh.visible=!0,this.startScale=e.startScale||1,this.endScale=e.endScale||0,this.startOpacity=e.startOpacity||1,this.endOpacity=e.endOpacity||0,this.gravity=e.gravity||10,this.friction=e.friction||0,this.mesh.material.color.setHex(e.color||16777215),this.mesh.scale.setScalar(this.startScale)}update(e){if(!this.isActive)return;if(this.lifetime+=e,this.lifetime>=this.maxLifetime){this.deactivate();return}this.velocity.y-=this.gravity*e,this.friction>0&&this.velocity.multiplyScalar(1-this.friction*e),this.mesh.position.add(this.velocity.clone().multiplyScalar(e));const t=this.lifetime/this.maxLifetime,n=He.lerp(this.startScale,this.endScale,t);this.mesh.scale.setScalar(Math.max(.01,n));const i=He.lerp(this.startOpacity,this.endOpacity,t);this.mesh.material.opacity=i}deactivate(){this.isActive=!1,this.mesh.visible=!1}reset(){this.isActive=!1,this.mesh.visible=!1,this.velocity.set(0,0,0),this.lifetime=0}}class Op{constructor(e){this.scene=e,this.pool=new Rr(()=>{const t=new Np;return this.scene.add(t.mesh),t},t=>{t.reset()},200)}emit(e){const t=this.pool.get();return t.emit(e),t}emitBurst(e,t,n={}){for(let i=0;i<t;i++){const r=i/t*Math.PI*2+Math.random()*.5;this.emit({position:e.clone(),angle:r,...n})}}emitHit(e,t=16777215){this.emitBurst(e,8,{color:t,speed:He.randomRange(3,6),lifetime:.3,startScale:.15,endScale:0,gravity:5})}emitDeath(e,t=15158332){this.emitBurst(e,15,{color:t,speed:He.randomRange(2,5),lifetime:.5,startScale:.2,endScale:0,gravity:8})}emitXPPickup(e){this.emitBurst(e,6,{color:3066993,speed:He.randomRange(1,3),lifetime:.4,startScale:.1,endScale:.2,startOpacity:1,endOpacity:0,gravity:-5,elevation:1})}emitLevelUp(e){for(let t=0;t<30;t++){const n=t/30*Math.PI*2,i=t*.02;setTimeout(()=>{this.emit({position:e.clone(),angle:n,color:15844367,speed:5,lifetime:1,startScale:.2,endScale:0,gravity:-2,elevation:.5})},i*1e3)}}emitExplosion(e,t=2){const n=Math.floor(t*15);this.emitBurst(e,n,{color:15965202,speed:He.randomRange(5,10),lifetime:.6,startScale:.3,endScale:0,gravity:3}),this.emitBurst(e,n/2,{color:15158332,speed:He.randomRange(3,7),lifetime:.8,startScale:.4,endScale:0,gravity:2})}emitTrail(e,t=15844367){this.emit({position:e.clone(),color:t,speed:.5,lifetime:.2,startScale:.1,endScale:0,gravity:0,angle:Math.random()*Math.PI*2})}emitBurnEffect(e){for(let t=0;t<4;t++)this.emit({position:e.clone().add(new R((Math.random()-.5)*.3,0,(Math.random()-.5)*.3)),color:Math.random()>.5?16729344:16737792,speed:He.randomRange(1,2),lifetime:.5,startScale:.15,endScale:.05,gravity:-4,elevation:1,startOpacity:.9,endOpacity:0})}emitFreezeEffect(e){for(let t=0;t<5;t++){const n=t/5*Math.PI*2;this.emit({position:e.clone(),color:Math.random()>.5?49151:8900331,speed:He.randomRange(.5,1.5),lifetime:.6,startScale:.12,endScale:0,gravity:3,angle:n,elevation:.2,startOpacity:.8,endOpacity:0})}}emitPoisonEffect(e){for(let t=0;t<3;t++)this.emit({position:e.clone().add(new R((Math.random()-.5)*.4,0,(Math.random()-.5)*.4)),color:Math.random()>.5?3329330:10145074,speed:He.randomRange(.8,1.5),lifetime:.7,startScale:.1,endScale:.18,gravity:-1.5,elevation:.5,startOpacity:.7,endOpacity:0})}emitStatusEffectTick(e,t){switch(t){case"burn":this.emitBurnEffect(e);break;case"freeze":this.emitFreezeEffect(e);break;case"poison":this.emitPoisonEffect(e);break}}update(e){const t=[];for(const n of this.pool.active)n.update(e),n.isActive||t.push(n);for(const n of t)this.pool.release(n)}clear(){this.pool.releaseAll()}dispose(){for(const e of this.pool.active)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();for(const e of this.pool.pool)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}}class Fp{constructor(e,t=20){this.scene=e,this.size=t,this.obstacles=[],this.createFloor(),this.createWalls()}createFloor(){const e=new hn(this.size,this.size),t=new $t({color:2972199,roughness:.9,metalness:.1});this.floor=new ke(e,t),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);const n=this.size,i=20,r=new hn(n,n,i,i),o=new mt({color:1719575,wireframe:!0,transparent:!0,opacity:.3});this.grid=new ke(r,o),this.grid.rotation.x=-Math.PI/2,this.grid.position.y=.01,this.scene.add(this.grid)}createWalls(){const n=this.size/2,i=new $t({color:1719575,roughness:.8,metalness:.2}),r=[{x:0,z:-n-.5/2,width:this.size+.5*2,depth:.5},{x:0,z:n+.5/2,width:this.size+.5*2,depth:.5},{x:-n-.5/2,z:0,width:.5,depth:this.size},{x:n+.5/2,z:0,width:.5,depth:this.size}];this.walls=[];for(const l of r){const h=new En(l.width,2,l.depth),d=new ke(h,i);d.position.set(l.x,2/2,l.z),d.castShadow=!0,d.receiveShadow=!0,this.walls.push(d),this.scene.add(d)}const o=[{x:-n,z:-n},{x:n,z:-n},{x:-n,z:n},{x:n,z:n}];for(const l of o){const h=new zn(.3,.4,2.5,8),d=new ke(h,i);d.position.set(l.x,(2+.5)/2,l.z),d.castShadow=!0,this.scene.add(d)}}setColors(e,t){this.floor.material.color.setHex(e),this.grid.material.color.setHex(t);for(const n of this.walls)n.material.color.setHex(t)}clearObstacles(){for(const e of this.obstacles)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.obstacles=[]}addObstacles(e){this.clearObstacles();for(const t of e){const n=this.createObstacle(t);this.obstacles.push(n)}}createObstacle(e){let t,n;e.type==="pillar"?(n=2,t=new zn(e.radius*.8,e.radius,n,8)):(n=e.radius*1.5,t=new ms(e.radius,0));const i=new $t({color:5592405,roughness:.9,metalness:.1}),r=new ke(t,i);return r.position.set(e.x,n/2,e.z),r.castShadow=!0,r.receiveShadow=!0,e.type!=="pillar"&&(r.rotation.x=Math.random()*.3,r.rotation.z=Math.random()*.3),this.scene.add(r),{mesh:r,x:e.x,z:e.z,radius:e.radius,type:e.type}}getObstacles(){return this.obstacles}checkObstacleCollision(e,t,n){for(const i of this.obstacles){const r=e-i.x,o=t-i.z,l=Math.sqrt(r*r+o*o);if(l<n+i.radius)return{collided:!0,obstacle:i,pushX:r/l,pushZ:o/l,overlap:n+i.radius-l}}return{collided:!1}}constrainToArena(e,t){const n=this.size/2-t,i={x:Math.max(-n,Math.min(n,e.x)),z:Math.max(-n,Math.min(n,e.z))};for(const r of this.obstacles){const o=i.x-r.x,l=i.z-r.z,h=Math.sqrt(o*o+l*l),d=t+r.radius;h<d&&h>.01&&(i.x=r.x+o/h*d,i.z=r.z+l/h*d)}return i}dispose(){this.scene.remove(this.floor),this.floor.geometry.dispose(),this.floor.material.dispose(),this.scene.remove(this.grid),this.grid.geometry.dispose(),this.grid.material.dispose();for(const e of this.walls)this.scene.remove(e),e.geometry.dispose(),e.material.dispose();this.clearObstacles()}}class Bp{constructor(){this.gridSize=2,this.grid=new Map}clear(){this.grid.clear()}getGridKey(e,t){const n=Math.floor(e/this.gridSize),i=Math.floor(t/this.gridSize);return`${n},${i}`}addToGrid(e,t){const n=this.getGridKey(e.mesh.position.x,e.mesh.position.z);this.grid.has(n)||this.grid.set(n,[]),this.grid.get(n).push({entity:e,type:t})}getNearbyEntities(e,t,n=1){const i=[],r=Math.ceil(n/this.gridSize),o=Math.floor(e/this.gridSize),l=Math.floor(t/this.gridSize);for(let h=o-r;h<=o+r;h++)for(let d=l-r;d<=l+r;d++){const p=`${h},${d}`;this.grid.has(p)&&i.push(...this.grid.get(p))}return i}checkCircleCollision(e,t,n,i,r,o){const l=i-e,h=r-t,d=l*l+h*h,p=n+o;return d<p*p}checkPlayerEnemyCollisions(e,t){const n=[],i=e.mesh.position,r=.4;for(const o of t){if(!o.isAlive||o.isDying)continue;const l=o.mesh.position,h=o.getCollisionRadius();this.checkCircleCollision(i.x,i.z,r,l.x,l.z,h)&&n.push({enemy:o,direction:{x:i.x-l.x,z:i.z-l.z}})}return n}checkProjectileEnemyCollisions(e,t){const n=[];for(const i of e){if(!i.isActive||!i.isPlayerProjectile)continue;const r=i.mesh.position,o=.2;for(const l of t){if(!l.isAlive||l.isDying||i.piercedEnemies.has(l))continue;const h=l.mesh.position,d=l.getCollisionRadius()*1.2;this.checkCircleCollision(r.x,r.z,o,h.x,h.z,d)&&n.push({projectile:i,enemy:l,position:r.clone()})}}return n}checkProjectilePlayerCollisions(e,t){const n=[],i=t.mesh.position,r=.4;for(const o of e){if(!o.isActive||o.isPlayerProjectile)continue;const l=o.mesh.position;this.checkCircleCollision(l.x,l.z,.2,i.x,i.z,r)&&n.push({projectile:o,position:l.clone()})}return n}checkExplosionCollisions(e,t,n,i){const r={hitPlayer:!1,hitEnemies:[]};He.distanceXZ(e,n.mesh.position)<t&&(r.hitPlayer=!0);for(const l of i){if(!l.isAlive||l.isDying)continue;He.distanceXZ(e,l.mesh.position)<t+l.getCollisionRadius()&&r.hitEnemies.push(l)}return r}constrainToArena(e,t,n=.4){const i=t/2-n;e.mesh.position.x=He.clamp(e.mesh.position.x,-i,i),e.mesh.position.z=He.clamp(e.mesh.position.z,-i,i)}separateEnemies(e){for(let n=0;n<e.length;n++){const i=e[n];if(i.isAlive)for(let r=n+1;r<e.length;r++){const o=e[r];if(!o.isAlive)continue;const l=o.mesh.position.x-i.mesh.position.x,h=o.mesh.position.z-i.mesh.position.z,d=Math.sqrt(l*l+h*h),p=i.getCollisionRadius()+o.getCollisionRadius();if(d<p&&d>.01){const a=p-d,c=l/d,u=h/d,g=a*.5;i.mesh.position.x-=c*g,i.mesh.position.z-=u*g,o.mesh.position.x+=c*g,o.mesh.position.z+=u*g}}}}}const qe={ATTACK:"attack",DEFENSE:"defense",UTILITY:"utility",SPECIAL:"special",ELEMENTAL:"elemental"},zp={MULTI_SHOT:{id:"multi_shot",name:"Multi-Shot",description:"+1 projectile (spread pattern)",icon:"🎯",category:qe.ATTACK,maxStacks:5,apply:s=>{s.projectileCount+=1}},ATTACK_SPEED:{id:"attack_speed",name:"Attack Speed",description:"+20% attack speed",icon:"⚡",category:qe.ATTACK,maxStacks:5,apply:s=>{s.attackSpeed*=1.2}},ATTACK_DAMAGE:{id:"attack_damage",name:"Attack Power",description:"+25% damage",icon:"💪",category:qe.ATTACK,maxStacks:5,apply:s=>{s.attackDamage*=1.25}},DIAGONAL_ARROWS:{id:"diagonal_arrows",name:"Diagonal Arrows",description:"Fire 2 extra arrows at 45 degrees",icon:"↗️",category:qe.ATTACK,maxStacks:1,apply:s=>{s.diagonalArrows=!0}},REAR_ARROW:{id:"rear_arrow",name:"Rear Arrow",description:"Fire 1 arrow backward",icon:"⬇️",category:qe.ATTACK,maxStacks:1,apply:s=>{s.rearArrow=!0}},SIDE_ARROWS:{id:"side_arrows",name:"Side Arrows",description:"Fire arrows left and right",icon:"↔️",category:qe.ATTACK,maxStacks:1,apply:s=>{s.sideArrows=!0}},BOUNCY_WALLS:{id:"bouncy_walls",name:"Bouncy Walls",description:"Projectiles bounce off walls",icon:"🔄",category:qe.ATTACK,maxStacks:1,apply:s=>{s.bouncyWalls=!0}},PIERCE:{id:"pierce",name:"Pierce",description:"+1 enemy pierce",icon:"🗡️",category:qe.ATTACK,maxStacks:5,apply:s=>{s.projectilePierce+=1}},RICOCHET:{id:"ricochet",name:"Ricochet",description:"Projectiles bounce to nearby enemies",icon:"💫",category:qe.ATTACK,maxStacks:1,apply:s=>{s.ricochet=!0}},CRIT_CHANCE:{id:"crit_chance",name:"Critical Strike",description:"+10% critical chance",icon:"🎲",category:qe.ATTACK,maxStacks:5,apply:s=>{s.critChance+=.1}},CRIT_DAMAGE:{id:"crit_damage",name:"Critical Damage",description:"+50% critical multiplier",icon:"💥",category:qe.ATTACK,maxStacks:3,apply:s=>{s.critMultiplier+=.5}},MAX_HP:{id:"max_hp",name:"Max HP Up",description:"+20% max health",icon:"❤️",category:qe.DEFENSE,maxStacks:5,apply:s=>{const e=s.maxHealth*.2;s.maxHealth+=e,s.health+=e}},HEAL:{id:"heal",name:"Heal",description:"Restore 30% max health",icon:"💚",category:qe.DEFENSE,maxStacks:99,apply:s=>{s.heal(s.maxHealth*.3)}},DODGE:{id:"dodge",name:"Dodge",description:"+10% dodge chance",icon:"🌀",category:qe.DEFENSE,maxStacks:5,apply:s=>{s.dodge+=.1}},SHIELD:{id:"shield",name:"Shield",description:"Block the next hit",icon:"🛡️",category:qe.DEFENSE,maxStacks:3,apply:s=>{s.shield+=1}},MOVE_SPEED:{id:"move_speed",name:"Move Speed",description:"+15% movement speed",icon:"👟",category:qe.UTILITY,maxStacks:5,apply:s=>{s.speed*=1.15}},MAGNET:{id:"magnet",name:"Magnet",description:"+50% XP pickup radius",icon:"🧲",category:qe.UTILITY,maxStacks:3,apply:s=>{s.xpMagnetRange*=1.5}},XP_BOOST:{id:"xp_boost",name:"XP Boost",description:"+20% XP gained",icon:"📈",category:qe.UTILITY,maxStacks:3,apply:s=>{s.xpMultiplier*=1.2}},HOMING:{id:"homing",name:"Homing Arrows",description:"Arrows curve toward enemies",icon:"🎯",category:qe.SPECIAL,maxStacks:1,apply:s=>{s.homing=!0}},PROJECTILE_SPEED:{id:"projectile_speed",name:"Projectile Speed",description:"+25% projectile speed",icon:"💨",category:qe.ATTACK,maxStacks:3,apply:s=>{s.projectileSpeed*=1.25}},ATTACK_RANGE:{id:"attack_range",name:"Attack Range",description:"+20% attack range",icon:"📏",category:qe.ATTACK,maxStacks:3,apply:s=>{s.attackRange*=1.2}},FIRE_ARROWS:{id:"fire_arrows",name:"Fire Arrows",description:"Arrows burn enemies (DoT, stacks)",icon:"🔥",category:qe.ELEMENTAL,maxStacks:1,apply:s=>{s.fireArrows=!0,s.elementalType=Xe.BURN}},SCORCH:{id:"scorch",name:"Scorch",description:"+20% burn damage, +1s duration",icon:"🌋",category:qe.ELEMENTAL,maxStacks:3,requires:"fire_arrows",apply:s=>{s.burnDamageMultiplier=(s.burnDamageMultiplier||1)*1.2,s.burnDurationBonus=(s.burnDurationBonus||0)+1}},INFERNO:{id:"inferno",name:"Inferno",description:"Burning enemies explode on death",icon:"💥",category:qe.ELEMENTAL,maxStacks:1,requires:"fire_arrows",apply:s=>{s.infernoExplosion=!0}},ICE_ARROWS:{id:"ice_arrows",name:"Ice Arrows",description:"Arrows freeze enemies (slow, stacks)",icon:"❄️",category:qe.ELEMENTAL,maxStacks:1,apply:s=>{s.iceArrows=!0,s.elementalType=Xe.FREEZE}},FROSTBITE:{id:"frostbite",name:"Frostbite",description:"+15% slow effect, +1s duration",icon:"🧊",category:qe.ELEMENTAL,maxStacks:3,requires:"ice_arrows",apply:s=>{s.freezeSlowBonus=(s.freezeSlowBonus||0)+.15,s.freezeDurationBonus=(s.freezeDurationBonus||0)+1}},SHATTER:{id:"shatter",name:"Shatter",description:"Frozen enemies take +30% damage",icon:"💎",category:qe.ELEMENTAL,maxStacks:1,requires:"ice_arrows",apply:s=>{s.shatterBonus=!0}},POISON_ARROWS:{id:"poison_arrows",name:"Poison Arrows",description:"Arrows poison enemies (DoT, stacks)",icon:"☠️",category:qe.ELEMENTAL,maxStacks:1,apply:s=>{s.poisonArrows=!0,s.elementalType=Xe.POISON}},VIRULENCE:{id:"virulence",name:"Virulence",description:"+25% poison damage, +2s duration",icon:"🦠",category:qe.ELEMENTAL,maxStacks:3,requires:"poison_arrows",apply:s=>{s.poisonDamageMultiplier=(s.poisonDamageMultiplier||1)*1.25,s.poisonDurationBonus=(s.poisonDurationBonus||0)+2}},PLAGUE:{id:"plague",name:"Plague",description:"Poison spreads to nearby enemies",icon:"🌫️",category:qe.ELEMENTAL,maxStacks:1,requires:"poison_arrows",apply:s=>{s.plagueSpread=!0}}};class kp{constructor(){this.acquiredAbilities=new Map,this.abilityList=Object.values(zp)}getRandomAbilities(e=3,t){const i=[...this.abilityList.filter(r=>!((this.acquiredAbilities.get(r.id)||0)>=r.maxStacks||r.requires&&!this.acquiredAbilities.has(r.requires)))].sort(()=>Math.random()-.5);return i.slice(0,Math.min(e,i.length))}applyAbility(e,t){e.apply(t);const n=this.acquiredAbilities.get(e.id)||0;return this.acquiredAbilities.set(e.id,n+1),{ability:e,stacks:n+1}}getAcquiredAbilities(){const e=[];for(const[t,n]of this.acquiredAbilities){const i=this.abilityList.find(r=>r.id===t);i&&e.push({...i,stacks:n})}return e}reset(){this.acquiredAbilities.clear()}}const yi=[{name:"Forest Clearing",rooms:10,enemyTypes:[Ve.CHASER,Ve.SHOOTER],bossType:Ve.BOSS,difficultyMultiplier:1,floorColor:2972199,wallColor:1719575},{name:"Dark Caves",rooms:12,enemyTypes:[Ve.CHASER,Ve.SHOOTER,Ve.BOMBER],bossType:Ve.BOSS,difficultyMultiplier:1.3,floorColor:4013373,wallColor:2763306},{name:"Ancient Ruins",rooms:15,enemyTypes:[Ve.CHASER,Ve.SHOOTER,Ve.BOMBER,Ve.SPAWNER,Ve.TANK],bossType:Ve.BOSS,difficultyMultiplier:1.6,floorColor:6048317,wallColor:4010536}];class Hp{constructor(){this.currentStage=0,this.currentRoom=0,this.currentWave=0,this.wavesInRoom=0,this.enemiesRemaining=0,this.waveInProgress=!1,this.roomCleared=!1,this.stageCleared=!1,this.spawnQueue=[],this.spawnTimer=0,this.spawnDelay=.3,this.arenaSize=20}getStageConfig(){return yi[this.currentStage]||yi[yi.length-1]}getDifficultyMultiplier(){const e=this.getStageConfig(),t=1+this.currentRoom*.05;return e.difficultyMultiplier*t}startRoom(){return this.currentWave=0,this.wavesInRoom=this.calculateWavesForRoom(),this.waveInProgress=!1,this.roomCleared=!1,this.generateRoom()}calculateWavesForRoom(){return this.getStageConfig(),(this.currentRoom+1)%5===0?1:He.randomInt(2,4)}generateRoom(){const e=this.getStageConfig(),t=this.generateObstacles();return{stage:this.currentStage+1,room:this.currentRoom+1,totalRooms:e.rooms,stageName:e.name,floorColor:e.floorColor,wallColor:e.wallColor,obstacles:t,isBossRoom:(this.currentRoom+1)%5===0}}generateObstacles(){const e=[],t=He.randomInt(3,8),n=this.arenaSize/2-2;for(let i=0;i<t;i++){let r,o,l=!1,h=0;for(;!l&&h<20;){if(r=He.randomRange(-n,n),o=He.randomRange(-n,n),Math.sqrt(r*r+o*o)>3){l=!0;for(const p of e)if(Math.sqrt((r-p.x)**2+(o-p.z)**2)<3){l=!1;break}}h++}l&&e.push({x:r,z:o,type:Math.random()>.7?"pillar":"rock",radius:He.randomRange(.5,1.2)})}return e}startWave(){if(this.currentWave>=this.wavesInRoom)return this.roomCleared=!0,null;const e=this.getStageConfig(),t=(this.currentRoom+1)%5===0;let n;return t?n=this.generateBossWave(e):n=this.generateNormalWave(e),this.spawnQueue=n,this.enemiesRemaining=n.length,this.waveInProgress=!0,this.currentWave++,{waveNumber:this.currentWave,totalWaves:this.wavesInRoom,isBossWave:t,enemyCount:n.length}}generateNormalWave(e){const t=[],n=3+this.currentRoom+this.currentWave*2,i=Math.min(n,15),r=this.arenaSize/2-1,o=["top","bottom","left","right"];for(let l=0;l<i;l++){const h=He.randomChoice(e.enemyTypes),d=He.randomChoice(o);let p,a;switch(d){case"top":p=He.randomRange(-r,r),a=-r;break;case"bottom":p=He.randomRange(-r,r),a=r;break;case"left":p=-r,a=He.randomRange(-r,r);break;case"right":p=r,a=He.randomRange(-r,r);break}t.push({type:h,position:{x:p,z:a},difficultyMultiplier:this.getDifficultyMultiplier()})}return t}generateBossWave(e){const t=[],n=this.arenaSize/2-2;t.push({type:e.bossType,position:{x:0,z:-n+2},difficultyMultiplier:this.getDifficultyMultiplier()*1.5});const i=2+this.currentStage;for(let r=0;r<i;r++){const o=r/i*Math.PI*2;t.push({type:Ve.CHASER,position:{x:Math.cos(o)*5,z:Math.sin(o)*5-n+4},difficultyMultiplier:this.getDifficultyMultiplier()})}return t}getNextSpawn(e){return this.spawnQueue.length===0?null:(this.spawnTimer+=e,this.spawnTimer>=this.spawnDelay?(this.spawnTimer=0,this.spawnQueue.shift()):null)}onEnemyKilled(){this.enemiesRemaining--,this.enemiesRemaining<=0&&this.spawnQueue.length===0&&(this.waveInProgress=!1,this.currentWave>=this.wavesInRoom&&(this.roomCleared=!0))}advanceRoom(){this.currentRoom++;const e=this.getStageConfig();return this.currentRoom>=e.rooms?this.advanceStage():(this.roomCleared=!1,{type:"room",room:this.currentRoom+1})}advanceStage(){return this.currentStage++,this.currentRoom=0,this.currentStage>=yi.length?(this.stageCleared=!0,{type:"victory"}):{type:"stage",stage:this.currentStage+1}}isRoomCleared(){return this.roomCleared}isWaveInProgress(){return this.waveInProgress}isStageCleared(){return this.stageCleared}isGameComplete(){return this.stageCleared}getProgress(){const e=this.getStageConfig();return{stage:this.currentStage+1,totalStages:yi.length,room:this.currentRoom+1,totalRooms:e.rooms,wave:this.currentWave,totalWaves:this.wavesInRoom,stageName:e.name}}reset(){this.currentStage=0,this.currentRoom=0,this.currentWave=0,this.wavesInRoom=0,this.enemiesRemaining=0,this.waveInProgress=!1,this.roomCleared=!1,this.stageCleared=!1,this.spawnQueue=[],this.spawnTimer=0}}class Gp{constructor(){this.elements={healthBar:document.getElementById("health-bar"),xpBar:document.getElementById("xp-bar"),levelDisplay:document.getElementById("level-display"),stageInfo:document.getElementById("stage-info"),abilityBar:document.getElementById("ability-bar"),pauseBtn:document.getElementById("pause-btn"),waveAnnouncement:document.getElementById("wave-announcement"),startMenu:document.getElementById("start-menu"),pauseMenu:document.getElementById("pause-menu"),levelupScreen:document.getElementById("levelup-screen"),gameoverScreen:document.getElementById("gameover-screen"),victoryScreen:document.getElementById("victory-screen"),startBtn:document.getElementById("start-btn"),resumeBtn:document.getElementById("resume-btn"),quitBtn:document.getElementById("quit-btn"),restartBtn:document.getElementById("restart-btn"),victoryRestartBtn:document.getElementById("victory-restart-btn"),abilityChoices:document.getElementById("ability-choices"),goLevel:document.getElementById("go-level"),goKills:document.getElementById("go-kills"),goTime:document.getElementById("go-time"),vicLevel:document.getElementById("vic-level"),vicKills:document.getElementById("vic-kills"),vicTime:document.getElementById("vic-time")},this.damageNumbers=[],this.callbacks={},this.setupEventListeners()}setupEventListeners(){this.elements.startBtn.addEventListener("click",()=>{this.triggerCallback("start")}),this.elements.pauseBtn.addEventListener("click",()=>{this.triggerCallback("pause")}),this.elements.resumeBtn.addEventListener("click",()=>{this.triggerCallback("resume")}),this.elements.quitBtn.addEventListener("click",()=>{this.triggerCallback("quit")}),this.elements.restartBtn.addEventListener("click",()=>{this.triggerCallback("restart")}),this.elements.victoryRestartBtn.addEventListener("click",()=>{this.triggerCallback("restart")})}on(e,t){this.callbacks[e]=t}triggerCallback(e,t){this.callbacks[e]&&this.callbacks[e](t)}updateHealth(e,t){const n=e/t*100;this.elements.healthBar.style.width=`${n}%`}updateXP(e,t){const n=e/t*100;this.elements.xpBar.style.width=`${n}%`}updateLevel(e){this.elements.levelDisplay.textContent=`Level ${e}`}updateStageInfo(e,t){this.elements.stageInfo.textContent=`Stage ${e} - Room ${t}`}updateAbilityBar(e){this.elements.abilityBar.innerHTML="";for(const t of e){const n=document.createElement("div");if(n.className="ability-icon",n.innerHTML=t.icon,n.title=`${t.name} x${t.stacks}`,t.stacks>1){const i=document.createElement("span");i.style.cssText=`
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: #e74c3c;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 10px;
        `,i.textContent=t.stacks,n.style.position="relative",n.appendChild(i)}this.elements.abilityBar.appendChild(n)}}showStartMenu(){this.hideAllMenus(),this.elements.startMenu.classList.remove("hidden")}showPauseMenu(){this.hideAllMenus(),this.elements.pauseMenu.classList.remove("hidden")}showLevelUpScreen(e,t){this.hideAllMenus(),this.elements.levelupScreen.classList.remove("hidden"),this.elements.abilityChoices.innerHTML="";for(const n of e){const i=document.createElement("div");i.className="ability-card",i.innerHTML=`
        <div class="ability-card-icon">${n.icon}</div>
        <div class="ability-card-name">${n.name}</div>
        <div class="ability-card-desc">${n.description}</div>
      `,i.addEventListener("click",()=>{t(n),this.hideLevelUpScreen()}),this.elements.abilityChoices.appendChild(i)}}hideLevelUpScreen(){this.elements.levelupScreen.classList.add("hidden")}showGameOver(e){this.hideAllMenus(),this.elements.gameoverScreen.classList.remove("hidden"),this.elements.goLevel.textContent=e.level,this.elements.goKills.textContent=e.kills,this.elements.goTime.textContent=this.formatTime(e.time)}showVictory(e){this.hideAllMenus(),this.elements.victoryScreen.classList.remove("hidden"),this.elements.vicLevel.textContent=e.level,this.elements.vicKills.textContent=e.kills,this.elements.vicTime.textContent=this.formatTime(e.time)}hideAllMenus(){this.elements.startMenu.classList.add("hidden"),this.elements.pauseMenu.classList.add("hidden"),this.elements.levelupScreen.classList.add("hidden"),this.elements.gameoverScreen.classList.add("hidden"),this.elements.victoryScreen.classList.add("hidden")}showWaveAnnouncement(e){this.elements.waveAnnouncement.textContent=e,this.elements.waveAnnouncement.classList.remove("show"),this.elements.waveAnnouncement.offsetWidth,this.elements.waveAnnouncement.classList.add("show"),setTimeout(()=>{this.elements.waveAnnouncement.classList.remove("show")},2e3)}showDamageNumber(e,t,n,i=!1){const r=document.createElement("div");r.className="damage-number"+(i?" crit":""),r.textContent=Math.round(n),r.style.left=`${e}px`,r.style.top=`${t}px`,document.getElementById("ui-overlay").appendChild(r),setTimeout(()=>{r.remove()},1e3)}showXPCollected(e){const t=document.createElement("div");t.className="xp-collected",t.textContent=`+${Math.round(e)} XP`,t.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 32px;
      font-weight: bold;
      color: #2ecc71;
      text-shadow: 0 0 10px #27ae60, 0 0 20px #27ae60;
      animation: xpCollectedAnim 1.5s ease-out forwards;
      pointer-events: none;
      z-index: 1000;
    `,document.getElementById("ui-overlay").appendChild(t),setTimeout(()=>{t.remove()},1500)}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}reset(){this.updateHealth(100,100),this.updateXP(0,100),this.updateLevel(1),this.updateStageInfo(1,1),this.elements.abilityBar.innerHTML=""}showGodModeIndicator(){if(document.getElementById("god-mode-indicator"))return;const e=document.createElement("div");e.id="god-mode-indicator",e.innerHTML=`
      <div class="god-mode-title">🔥 GOD MODE 🔥</div>
      <div class="god-mode-keys">
        <span><kbd>S</kbd> Skill</span>
        <span><kbd>E</kbd> Victory</span>
        <span><kbd>X</kbd> Die</span>
      </div>
    `,e.style.cssText=`
      position: fixed;
      top: 10px;
      right: 10px;
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.9), rgba(255, 140, 0, 0.9));
      color: #1a1a2e;
      padding: 10px 15px;
      border-radius: 8px;
      font-family: 'Segoe UI', sans-serif;
      font-size: 12px;
      font-weight: bold;
      z-index: 9999;
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 140, 0, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
      animation: godModePulse 2s ease-in-out infinite;
    `;const t=document.createElement("style");t.textContent=`
      @keyframes godModePulse {
        0%, 100% { box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 140, 0, 0.2); }
        50% { box-shadow: 0 4px 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 140, 0, 0.4); }
      }
      #god-mode-indicator .god-mode-title {
        text-align: center;
        font-size: 14px;
        margin-bottom: 8px;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      }
      #god-mode-indicator .god-mode-keys {
        display: flex;
        gap: 10px;
        font-size: 11px;
        font-weight: normal;
      }
      #god-mode-indicator kbd {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: monospace;
        font-weight: bold;
      }
    `,document.head.appendChild(t),document.body.appendChild(e)}}const Ot={MENU:"menu",PLAYING:"playing",PAUSED:"paused",LEVELUP:"levelup",GAMEOVER:"gameover",VICTORY:"victory"};class Vp{constructor(e){this.canvas=e,this.state=Ot.MENU;const t=new URLSearchParams(window.location.search);this.godMode=t.get("godmode")==="true",this.godModeKeyPressed_S=!1,this.godModeKeyPressed_E=!1,this.godModeKeyPressed_X=!1,this.scene=new Ep(e),this.input=new Tp,this.ui=new Gp,this.godMode&&(console.log("%c🔥 GOD MODE ENABLED 🔥","color: gold; font-size: 20px; font-weight: bold;"),console.log("Press S = New Skill, E = Victory, X = Die"),this.ui.showGodModeIndicator()),this.arenaSize=20,this.arena=new Fp(this.scene.scene,this.arenaSize),this.player=new bp(this.scene.scene),this.projectileSystem=new Dp(this.scene.scene),this.xpGemSystem=new Up(this.scene.scene),this.particleSystem=new Op(this.scene.scene),this.collisionSystem=new Bp,this.abilitySystem=new kp,this.waveSystem=new Hp,this.enemies=[],this.enemiesKilled=0,this.totalTime=0,this.roomTransitionTimer=0,this.waveStartDelay=0,this.lastTime=0,this.deltaTime=0,this.setupUICallbacks(),this.ui.showStartMenu(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupUICallbacks(){this.ui.on("start",()=>this.startGame()),this.ui.on("pause",()=>this.pauseGame()),this.ui.on("resume",()=>this.resumeGame()),this.ui.on("quit",()=>this.quitToMenu()),this.ui.on("restart",()=>this.restartGame())}startGame(){ct.init(),ct.playMusic(),this.resetGame(),this.state=Ot.PLAYING,this.ui.hideAllMenus(),this.startRoom()}resetGame(){this.player.reset(),this.projectileSystem.clear(),this.xpGemSystem.clear(),this.particleSystem.clear(),this.abilitySystem.reset(),this.waveSystem.reset();for(const e of this.enemies)e.dispose();this.enemies=[],this.enemiesKilled=0,this.totalTime=0,this.ui.reset()}startRoom(){for(const t of this.enemies)t.dispose();this.enemies=[],this.projectileSystem.clear(),this.xpGemSystem.clear(),this.particleSystem.clear(),this.roomTransitionTimer=0;const e=this.waveSystem.startRoom();this.arena.setColors(e.floorColor,e.wallColor),this.arena.addObstacles(e.obstacles),this.player.setPosition(0,5),this.ui.updateStageInfo(e.stage,e.room),e.isBossRoom?(this.ui.showWaveAnnouncement("BOSS BATTLE!"),ct.play("bossSpawn")):this.ui.showWaveAnnouncement(`Room ${e.room}`),this.waveStartDelay=1.5}startWave(){const e=this.waveSystem.startWave();e&&e.isBossWave&&this.scene.shake(.5,.5)}pauseGame(){this.state===Ot.PLAYING&&(this.state=Ot.PAUSED,this.ui.showPauseMenu(),ct.pauseMusic())}resumeGame(){this.state===Ot.PAUSED&&(this.state=Ot.PLAYING,this.ui.hideAllMenus(),ct.resumeMusic())}quitToMenu(){this.state=Ot.MENU,this.ui.showStartMenu(),ct.stopMusic()}restartGame(){this.startGame()}showLevelUp(){this.state=Ot.LEVELUP;const e=this.abilitySystem.getRandomAbilities(3,this.player);ct.play("levelUp"),this.particleSystem.emitLevelUp(this.player.mesh.position),this.ui.showLevelUpScreen(e,t=>{this.selectAbility(t)})}selectAbility(e){this.abilitySystem.applyAbility(e,this.player),ct.play("abilitySelect");const t=this.abilitySystem.getAcquiredAbilities();this.ui.updateAbilityBar(t),this.player.levelUp(),this.ui.updateLevel(this.player.level),this.ui.updateXP(this.player.xp,this.player.xpToNextLevel),this.state=Ot.PLAYING}gameOver(){this.state=Ot.GAMEOVER,ct.stopMusic(),this.ui.showGameOver({level:this.player.level,kills:this.enemiesKilled,time:this.totalTime})}victory(){this.state=Ot.VICTORY,ct.stopMusic(),this.ui.showVictory({level:this.player.level,kills:this.enemiesKilled,time:this.totalTime})}update(e){if(this.state!==Ot.PLAYING)return;this.godMode&&this.handleGodModeKeys(),this.totalTime+=e,this.input.update(),this.player.update(e,this.input,this.enemies);const t=this.arena.constrainToArena(this.player.mesh.position,.4);this.player.mesh.position.x=t.x,this.player.mesh.position.z=t.z,this.handlePlayerAttack(e);for(let i=this.enemies.length-1;i>=0;i--){const r=this.enemies[i],o=r.update(e,this.player,this.projectileSystem,this.particleSystem);if(o==="dead"){this.onEnemyDeath(r),r.dispose(),this.enemies.splice(i,1);continue}o&&o.type==="spawn"&&this.spawnEnemy(o);const l=this.arena.constrainToArena(r.mesh.position,r.getCollisionRadius());r.mesh.position.x=l.x,r.mesh.position.z=l.z}this.collisionSystem.separateEnemies(this.enemies),this.projectileSystem.update(e,this.enemies,this.player,this.arenaSize),this.particleSystem.update(e);const n=this.xpGemSystem.update(e,this.player.mesh.position,this.player.xpMagnetRange);if(n>0){ct.play("xpPickup");const i=this.player.addXP(n);if(this.ui.updateXP(this.player.xp,this.player.xpToNextLevel),i){this.showLevelUp();return}}this.handleCollisions(),this.handleWaveLogic(e),this.player.isAlive()||this.gameOver(),this.scene.followTarget(this.player,.1),this.scene.updateScreenShake(e),this.ui.updateHealth(this.player.health,this.player.maxHealth)}handlePlayerAttack(e){if(this.player.updateAttackTimer(e),this.player.canAttack(this.input)&&this.player.isReadyToAttack()){const t=this.player.findNearestEnemy(this.enemies);if(t){const n=this.player.getAttackDirections(t);for(const i of n){const r=Math.random()<this.player.critChance,o=r?this.player.attackDamage*this.player.critMultiplier:this.player.attackDamage;this.projectileSystem.fire(this.player.mesh.position,i,o,this.player.projectileSpeed,this.player.projectilePierce,{isPlayerProjectile:!0,bouncyWalls:this.player.bouncyWalls,ricochet:this.player.ricochet,homing:this.player.homing,isCrit:r,elementalType:this.player.elementalType})}this.player.resetAttackTimer(),ct.play("shoot")}}}handleCollisions(){const e=this.collisionSystem.checkPlayerEnemyCollisions(this.player,this.enemies);for(const i of e){const r=He.normalize(i.direction.x,i.direction.z);this.player.takeDamage(i.enemy.damage,{x:r.x,z:r.y})&&(ct.play("playerHit"),this.scene.shake(.3,.2),this.particleSystem.emitHit(this.player.mesh.position,15158332))}const t=this.collisionSystem.checkProjectileEnemyCollisions(this.projectileSystem.getActiveProjectiles(),this.enemies);for(const i of t){const{projectile:r,enemy:o,position:l}=i;if(o.isDying)continue;const h={x:o.mesh.position.x-this.player.mesh.position.x,z:o.mesh.position.z-this.player.mesh.position.z},d=Math.sqrt(h.x**2+h.z**2);d>0&&(h.x/=d,h.z/=d);const p=o.type===Ve.BOMBER,a=p?{position:o.mesh.position.clone(),radius:o.config.explosionRadius,damage:o.config.explosionDamage}:null,c=o.hasStatusEffect(Xe.BURN);let u=r.damage;this.player.shatterBonus&&o.hasStatusEffect(Xe.FREEZE)&&(u*=1.3);const g=o.takeDamage(u,h);r.elementalType&&r.isPlayerProjectile&&!g&&(o.applyStatusEffect(r.elementalType,1),this.emitElementalHitParticles(l,r.elementalType)),r.elementalType===Xe.POISON&&this.player.plagueSpread&&this.spreadPoison(o,l),r.onHitEnemy(o,this.enemies),ct.play("hit");const _=r.elementalType?this.getElementalColor(r.elementalType):16777215;this.particleSystem.emitHit(l,_);const m=this.scene.worldToScreen(l);this.ui.showDamageNumber(m.x,m.y,Math.floor(u),r.isCrit),g&&p&&a&&this.handleExplosion({type:"explosion",...a}),g&&c&&this.player.infernoExplosion&&!p&&this.handleExplosion({type:"explosion",position:o.mesh.position.clone(),radius:1.5,damage:15})}const n=this.collisionSystem.checkProjectilePlayerCollisions(this.projectileSystem.getActiveProjectiles(),this.player);for(const i of n){const{projectile:r,position:o}=i,l={x:this.player.mesh.position.x-r.mesh.position.x,z:this.player.mesh.position.z-r.mesh.position.z},h=Math.sqrt(l.x**2+l.z**2);h>0&&(l.x/=h,l.z/=h);const d=this.player.takeDamage(r.damage,l);r.deactivate(),d&&(ct.play("playerHit"),this.scene.shake(.3,.2),this.particleSystem.emitHit(o,15158332))}}handleExplosion(e){const t=this.collisionSystem.checkExplosionCollisions(e.position,e.radius,this.player,this.enemies);this.particleSystem.emitExplosion(e.position,e.radius),this.scene.shake(.5,.3),t.hitPlayer&&(this.player.takeDamage(e.damage),ct.play("playerHit"));for(const n of t.hitEnemies)n.takeDamage(e.damage)}handleWaveLogic(e){if(this.waveStartDelay>0){this.waveStartDelay-=e,this.waveStartDelay<=0&&this.startWave();return}const t=this.waveSystem.getNextSpawn(e);if(t&&this.spawnEnemy(t),this.waveSystem.isRoomCleared()){if(this.roomTransitionTimer===0){ct.play("doorOpen"),this.ui.showWaveAnnouncement("Room Cleared!");const n=this.xpGemSystem.collectAll();if(n>0){ct.play("xpPickup");const i=this.player.addXP(n);if(this.ui.updateXP(this.player.xp,this.player.xpToNextLevel),this.ui.showXPCollected(n),i){this.showLevelUp();return}}}this.roomTransitionTimer+=e,this.roomTransitionTimer>=2&&(this.roomTransitionTimer=0,this.waveSystem.advanceRoom().type==="victory"?this.victory():this.startRoom())}else!this.waveSystem.isWaveInProgress()&&this.waveSystem.currentWave<this.waveSystem.wavesInRoom&&(this.waveStartDelay=1)}spawnEnemy(e){const t=new Pp(this.scene.scene,e.type,e.position,e.difficultyMultiplier);this.enemies.push(t)}onEnemyDeath(e){this.enemiesKilled++,this.waveSystem.onEnemyKilled(),ct.play("enemyDeath");const t=e.config?e.config.color:15158332;this.particleSystem.emitDeath(e.mesh.position,t),this.xpGemSystem.spawnMultiple(e.mesh.position,e.xpValue||10)}animate(e){requestAnimationFrame(this.animate);try{this.deltaTime=Math.min((e-this.lastTime)/1e3,.1),this.lastTime=e,this.update(this.deltaTime),this.scene.render()}catch(t){console.error("Game loop error:",t)}}handleGodModeKeys(){this.input.isKeyPressed("KeyS")&&!this.godModeKeyPressed_S?(this.godModeKeyPressed_S=!0,this.showLevelUp()):this.input.isKeyPressed("KeyS")||(this.godModeKeyPressed_S=!1),this.input.isKeyPressed("KeyE")&&!this.godModeKeyPressed_E?(this.godModeKeyPressed_E=!0,this.victory()):this.input.isKeyPressed("KeyE")||(this.godModeKeyPressed_E=!1),this.input.isKeyPressed("KeyX")&&!this.godModeKeyPressed_X?(this.godModeKeyPressed_X=!0,this.player.health=0,this.gameOver()):this.input.isKeyPressed("KeyX")||(this.godModeKeyPressed_X=!1)}getElementalColor(e){switch(e){case Xe.BURN:return 16729344;case Xe.FREEZE:return 49151;case Xe.POISON:return 3329330;default:return 16777215}}emitElementalHitParticles(e,t){const n=this.getElementalColor(t),i=5;for(let r=0;r<i;r++){const o=r/i*Math.PI*2,l={position:e.clone(),color:n,speed:He.randomRange(2,4),lifetime:.4,startScale:.12,endScale:0,angle:o,elevation:t===Xe.BURN?.8:.3,gravity:t===Xe.BURN?-2:5};this.particleSystem.emit(l)}}spreadPoison(e,t){for(const r of this.enemies){if(r===e||!r.isAlive||r.isDying)continue;He.distanceXZ(t,r.mesh.position)<=3&&(r.hasStatusEffect(Xe.POISON)||(r.applyStatusEffect(Xe.POISON,1),this.particleSystem.emitBurst(r.mesh.position,6,{color:3329330,speed:1,lifetime:.3,startScale:.1,endScale:0,gravity:-2})))}}}const Wp=document.getElementById("game-canvas"),Xp=new Vp(Wp);window.game=Xp;"serviceWorker"in navigator&&window.addEventListener("load",()=>{console.log("Clonhero loaded successfully!")});
