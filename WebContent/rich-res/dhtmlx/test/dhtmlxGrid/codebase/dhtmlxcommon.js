dhtmlx=function(a){for(var b in a)dhtmlx[b]=a[b];return dhtmlx};dhtmlx.extend_api=function(a,b,c){var d=window[a];if(d)window[a]=function(a){if(a&&typeof a=="object"&& !a.tagName){var c=d.apply(this,b.ahY?b.ahY(a):arguments),f;for(f in dhtmlx)if(b[f])this[b[f]](dhtmlx[f]);for(f in a)if(b[f])this[b[f]](a[f]);else f.indexOf("on")==0&&this.attachEvent(f,a[f])}else c=d.apply(this,arguments);b._patch&&b._patch(this);return c||this},window[a].prototype=d.prototype,c&&dhtmlXHeir(window[a].prototype,c)};dhtmlxAjax={get:function(a,b){var c=new ag(!0);c.async=arguments.length<3;c.aA=b;c.loadXML(a);return c},post:function(a,b,c){var d=new ag(!0);d.async=arguments.length<4;d.aA=c;d.loadXML(a,!0,b);return d},getSync:function(a){return this.get(a,null,!0)},postSync:function(a,b){return this.post(a,b,null,!0)}};function ag(a,b,c,d){this.ai="";this.async=typeof c!="undefined"?c: !0;this.UR=a||null;this.cT=b||null;this.aA=null;this.hN=d|| !1;return this}ag.count=0;ag.prototype.af=function(a){var b= !0;return this.check=function(){if(a&&a.UR!=null&&(!a.ai.readyState||a.ai.readyState==4)&&b){b= !1;ag.count++;if(typeof a.UR=="function")a.UR(a.cT,null,null,null,a);if(a.aA)a.aA.call(this,a),a.aA=null}}};ag.prototype.cR=function(a,b){if(this.ai.responseXML){var c=this.ai.responseXML.getElementsByTagName(a);c.length==0&&a.indexOf(":")!= -1&&(c=this.ai.responseXML.getElementsByTagName(a.split(":")[1]));var d=c[0]}else d=this.ai.documentElement;if(d)return this.jV= !1,d;if(!this.jV)return this.jV= !0,b=this.ai,this.loadXMLString(this.ai.responseText.replace(/^[\s]+/,""),!0),this.cR(a,b);dhtmlxError.gn("LoadXML","Incorrect XML",[b||this.ai,this.cT]);return document.createElement("DIV")};ag.prototype.loadXMLString=function(a,b){if(_isIE)this.ai=new ActiveXObject("Microsoft.XMLDOM"),this.ai.async=this.async,this.ai.onreadystatechange=function(){},this.ai.loadXML(a);else{var c=new DOMParser;this.ai=c.parseFromString(a,"text/xml")}if(!b){if(this.UR)this.UR(this.cT,null,null,null,this);if(this.aA)this.aA(),this.aA=null}};ag.prototype.loadXML=function(a,b,c,d){this.hN&&(a+=(a.indexOf("?")!= -1?"&":"?")+"a_dhx_rSeed="+(new Date).valueOf());this.bU=a;this.ai= !_isIE&&window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(this.async)this.ai.onreadystatechange=new this.af(this);this.ai.open(b?"POST":"GET",a,this.async);d?(this.ai.setRequestHeader("User-Agent","dhtmlxRPC v0.1 ("+navigator.userAgent+")"),this.ai.setRequestHeader("Content-type","text/xml")):b&&this.ai.setRequestHeader("Content-type","application/x-www-form-urlencoded");this.ai.setRequestHeader("X-Requested-With","XMLHttpRequest");this.ai.send(c);this.async||(new this.af(this))()};ag.prototype.fA=function(){return this.setXSLParamValue=this.cR=this.xmlNodeToJSON=this.doSerialization=this.loadXMLString=this.loadXML=this.doXSLTransToString=this.doXSLTransToObject=this.an=this.et=this.ai=this.cT=this.UR=this.bU=this.hN=this.async=this.jV=this.eo=this.hj=null};ag.prototype.xmlNodeToJSON=function(a){for(var b={},c=0;c<a.attributes.length;c++)b[a.attributes[c].name]=a.attributes[c].value;b._tagvalue=a.firstChild?a.firstChild.nodeValue:"";for(c=0;c<a.childNodes.length;c++){var d=a.childNodes[c].tagName;d&&(b[d]||(b[d]=[]),b[d].push(this.xmlNodeToJSON(a.childNodes[c])))}return b};function jP(a,b){return this.handler=function(c){if(!c)c=window.event;a(c,b);return!0}}function ej(a){return getOffset(a).left};function dg(a){return getOffset(a).top}function getOffsetSum(a){for(var b=0,c=0;a;)b+=parseInt(a.offsetTop),c+=parseInt(a.offsetLeft),a=a.offsetParent;return{top:b,left:c}};function getOffsetRect(a){var b=a.getBoundingClientRect(),c=document.body,d=document.documentElement,e=window.pageYOffset||d.scrollTop||c.scrollTop,g=window.pageXOffset||d.scrollLeft||c.scrollLeft,f=d.clientTop||c.clientTop||0,h=d.clientLeft||c.clientLeft||0,i=b.top+e-f,k=b.left+g-h;return{top:Math.round(i),left:Math.round(k)}}function getOffset(a){return a.getBoundingClientRect?getOffsetRect(a):getOffsetSum(a)};function ap(a){typeof a=="string"&&(a=a.toLowerCase());switch(a){case "1":case "true":case "yes":case "y":case 1:case!0:return!0;default:return!1}}function jv(a){return a.indexOf("?")!= -1?"&":"?"}function dhtmlDragAndDropObject(){if(window.aj)return window.aj;this.aM=this.bh=this.al=this.aG=0;this.dH=this.dG=null;this.PF=0;window.aj=this;return this};dhtmlDragAndDropObject.prototype.fG=function(a){a.onmousedown=null;a.eO=null;a.aK=null};dhtmlDragAndDropObject.prototype.dS=function(a,b){a.onmousedown=this.bR;a.eO=b;this.eH(a,b)};dhtmlDragAndDropObject.prototype.eH=function(a,b){a.aK=b};dhtmlDragAndDropObject.prototype.bR=function(a){if(!((a||window.event)&&(a||event).button==2)){if(window.aj.PF)return window.aj.PF=0,document.body.onmouseup=window.aj.dG,document.body.onmousemove=window.aj.dH,!1;window.aj.al&&window.aj.dc(a);window.aj.PF=1;window.aj.dG=document.body.onmouseup;window.aj.dH=document.body.onmousemove;window.aj.bh=this;window.aj.aM=this.eO;document.body.onmouseup=window.aj.bR;document.body.onmousemove=window.aj.kU;window.aj.downtime=(new Date).valueOf();a&&a.preventDefault&&a.preventDefault();return!1}};dhtmlDragAndDropObject.prototype.kU=function(a){if(!a)a=window.event;ae=window.aj;if(!((new Date).valueOf()-ae.downtime<100)){if(!ae.al)if(ae.PF){ae.al=ae.aM.gL(ae.bh,a);if(!ae.al)return ae.dc();ae.al.onselectstart=function(){return!1};ae.bN=ae.al;document.body.appendChild(ae.al);document.body.onmouseup=ae.dc;ae.PF=0;ae.al.aR=window;ae.bm()}else return ae.dc(a,!0);if(ae.al.parentNode!=window.document.body&&ae.bN){var b=ae.bN;if(ae.bN.old)b=ae.bN.old;b.parentNode.removeChild(b);var c=ae.al.aR;b.aR&&b.aR.aj.aG&&b.aR.aj.aG.aK.iX(b.aR.aj.aG);if(_isIE){var d=document.createElement("Div");d.innerHTML=ae.al.outerHTML;ae.al=d.childNodes[0]}else ae.al=ae.al.cloneNode(!0);ae.al.aR=window;ae.bN.old=ae.al;document.body.appendChild(ae.al);c.aj.al=ae.al}ae.al.style.left=a.clientX+15+(ae.fx?ae.fx* -1:0)+(document.body.scrollLeft||document.documentElement.scrollLeft)+"px";ae.al.style.top=a.clientY+3+(ae.fy?ae.fy* -1:0)+(document.body.scrollTop||document.documentElement.scrollTop)+"px";var e=a.srcElement?a.srcElement:a.target;ae.eq(e,a)}};dhtmlDragAndDropObject.prototype.bS=function(a){if(window.name){for(var b=parent.frames[window.name].frameElement.offsetParent,c=0,d=0;b;)c+=b.offsetLeft,d+=b.offsetTop,b=b.offsetParent;if(parent.aj){var e=parent.aj.bS(1);c+=e.split("_")[0]*1;d+=e.split("_")[1]*1}if(a)return c+"_"+d;else this.fx=c;this.fy=d}return "0_0"};dhtmlDragAndDropObject.prototype.eq=function(a,b){a&&a.aK?(this.aG&&this.aG.aK.iX(this.aG),this.aG=a,this.aG=this.aG.aK.tY(this.aG,this.bh,b.clientX,b.clientY,b),this.wS=_isIE?b.srcElement:b.target):a&&a.tagName!="BODY"?this.eq(a.parentNode,b):(this.aG&&this.aG.aK.iX(this.aG,b.clientX,b.clientY,b),this.aG=0,this.hq&&this.hq())};dhtmlDragAndDropObject.prototype.dc=function(a,b){ae=window.aj;if(!b){ae.PE();var c=ae.aG;ae.aG=null;c&&c.aK.BK(ae.bh,ae.aM,c,_isIE?event.srcElement:a.target)}ae.aG=null;ae.al&&ae.al.parentNode==document.body&&ae.al.parentNode.removeChild(ae.al);ae.al=0;ae.bN=0;ae.fx=0;ae.fy=0;ae.bh=0;ae.aM=0;document.body.onmouseup=ae.dG;document.body.onmousemove=ae.dH;ae.dG=null;ae.dH=null;ae.PF=0};dhtmlDragAndDropObject.prototype.PE=function(a){a&&window.aj.dc(1,1);for(var b=0;b<window.frames.length;b++)try{window.frames[b]!=a&&window.frames[b].aj&&window.frames[b].aj.PE(window)}catch(c){}try{parent.aj&&parent!=window&&parent!=a&&parent.aj.PE(window)}catch(d){}};dhtmlDragAndDropObject.prototype.bm=function(a,b){if(a)window.aj.bR(),window.aj.bh=a.aj.bh,window.aj.aM=a.aj.aM,window.aj.al=a.aj.al,window.aj.bN=a.aj.al,window.document.body.onmouseup=window.aj.dc,window.PF=0,!_isIE&&b&&(!aq||qG<1.8)&&window.aj.bS();try{parent.aj&&parent!=window&&parent!=a&&parent.aj.bm(window)}catch(c){}for(var d=0;d<window.frames.length;d++)try{window.frames[d]!=a&&window.frames[d].aj&&window.frames[d].aj.bm(window,!a||b?1:0)}catch(e){}};pe=_KHTMLrv=qG=_isChrome=gP=cn=cU=_isIE=aq= !1;navigator.userAgent.indexOf("Macintosh")!= -1&&(gP= !0);navigator.userAgent.toLowerCase().indexOf("chrome")> -1&&(_isChrome= !0);if(navigator.userAgent.indexOf("Safari")!= -1||navigator.userAgent.indexOf("Konqueror")!= -1)_KHTMLrv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari")+7,5)),_KHTMLrv>525?(aq= !0,qG=1.9):cn= !0;else if(navigator.userAgent.indexOf("Opera")!= -1)cU= !0,pe=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera")+6,3));else if(navigator.appName.indexOf("Microsoft")!= -1){if(_isIE= !0,(navigator.appVersion.indexOf("MSIE 8.0")!= -1||navigator.appVersion.indexOf("MSIE 9.0")!= -1||navigator.appVersion.indexOf("MSIE 10.0")!= -1)&&document.compatMode!="BackCompat")_isIE=8}else aq= !0,qG=parseFloat(navigator.userAgent.split("rv:")[1]);ag.prototype.et=function(a,b,c,d){if(cn|| !_isIE&& !window.XPathResult)return this.an(a,b);if(_isIE)return b||(b=this.ai.nodeName?this.ai:this.ai.responseXML),b||dhtmlxError.gn("LoadXML","Incorrect XML",[b||this.ai,this.cT]),c!=null&&b.setProperty("SelectionNamespaces","xmlns:xsl='"+c+"'"),d=="single"?b.selectSingleNode(a):b.selectNodes(a)||[];else{var e=b;b||(b=this.ai.nodeName?this.ai:this.ai.responseXML);b||dhtmlxError.gn("LoadXML","Incorrect XML",[b||this.ai,this.cT]);b.nodeName.indexOf("document")!= -1?e=b:(e=b,b=b.ownerDocument);var g=XPathResult.ANY_TYPE;if(d=="single")g=XPathResult.FIRST_ORDERED_NODE_TYPE;var f=[],h=b.evaluate(a,e,function(){return c},g,null);if(g==XPathResult.FIRST_ORDERED_NODE_TYPE)return h.singleNodeValue;for(var i=h.iterateNext();i;)f[f.length]=i,i=h.iterateNext();return f}};function j(){if(!this.cW)this.cW=[];return this}j.prototype.mP=function(a,b){this.cW[a]=b};j.prototype.gn=function(a,b,c){if(this.cW[a])return this.cW[a](a,b,c);if(this.cW.ALL)return this.cW.ALL(a,b,c);alert("Error type: "+a+"\nDescription: "+b);return null};window.dhtmlxError=new j;ag.prototype.an=function(a,b){var c=a.replace(/[\/]+/gi,"/").split("/"),d=null,e=1;if(!c.length)return[];if(c[0]==".")d=[b];else if(c[0]=="")d=(this.ai.responseXML||this.ai).getElementsByTagName(c[e].replace(/\[[^\]]*\]/g,"")),e++;else return[];for(;e<c.length;e++)d=this.eo(d,c[e]);c[e-1].indexOf("[")!= -1&&(d=this.hj(d,c[e-1]));return d};ag.prototype.hj=function(a,b){for(var c=[],b=b.replace(/[^\[]*\[\@/g,"").replace(/[\[\]\@]*/g,""),d=0;d<a.length;d++)a[d].getAttribute(b)&&(c[c.length]=a[d]);return c};ag.prototype.eo=function(a,b){var c=[];cn&&(b=b.toUpperCase());for(var d=0;d<a.length;d++)for(var e=0;e<a[d].childNodes.length;e++)cn?a[d].childNodes[e].tagName&&a[d].childNodes[e].tagName.toUpperCase()==b&&(c[c.length]=a[d].childNodes[e]):a[d].childNodes[e].tagName==b&&(c[c.length]=a[d].childNodes[e]);return c};function dhtmlXHeir(a,b){for(var c in b)typeof b[c]=="function"&&(a[c]=b[c]);return a};function dhtmlxEvent(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}ag.prototype.xslDoc=null;ag.prototype.setXSLParamValue=function(a,b,c){if(!c)c=this.xslDoc;if(c.responseXML)c=c.responseXML;var d=this.et("/xsl:stylesheet/xsl:variable[@name='"+a+"']",c,"http://www.w3.org/1999/XSL/Transform","single");if(d!=null)d.firstChild.nodeValue=b};ag.prototype.doXSLTransToObject=function(a,b){if(!a)a=this.xslDoc;if(a.responseXML)a=a.responseXML;if(!b)b=this.ai;if(b.responseXML)b=b.responseXML;if(_isIE){d=new ActiveXObject("Msxml2.DOMDocument.3.0");try{b.transformNodeToObject(a,d)}catch(c){d=b.transformNode(a)}}else{if(!this.XSLProcessor)this.XSLProcessor=new XSLTProcessor,this.XSLProcessor.importStylesheet(a);var d=this.XSLProcessor.transformToDocument(b)}return d};ag.prototype.doXSLTransToString=function(a,b){var c=this.doXSLTransToObject(a,b);return typeof c=="string"?c:this.doSerialization(c)};ag.prototype.doSerialization=function(a){if(!a)a=this.ai;if(a.responseXML)a=a.responseXML;if(_isIE)return a.xml;else{var b=new XMLSerializer;return b.serializeToString(a)}};dhtmlxEventable=function(a){a.attachEvent=function(a,c,d){a="ev_"+a.toLowerCase();this[a]||(this[a]=new this.eventCatcher(d||this));return a+":"+this[a].oe(c)};a.callEvent=function(a,c){a="ev_"+a.toLowerCase();return this[a]?this[a].apply(this,c): !0};a.mR=function(a){return! !this["ev_"+a.toLowerCase()]};a.eventCatcher=function(a){var c=[],d=function(){for(var d= !0,g=0;g<c.length;g++)if(c[g]!=null)var f=c[g].apply(a,arguments),d=d&&f;return d};d.oe=function(a){typeof a!="function"&&(a=eval(a));return a?c.push(a)-1: !1};d.uI=function(a){c[a]=null};return d};a.detachEvent=function(a){if(a!= !1){var c=a.split(":");this[c[0]].uI(c[1])}};a.detachAllEvents=function(){for(var a in this)a.indexOf("ev_")==0&&delete this[a]};a=null};