import e from"/@npm/debug";var t,r={},o={},debug_1=function(){if(!t)try{t=e("follow-redirects")}catch(r){t=function(){}}t.apply(null,arguments)},s=r.URL,i={}.Writable,n=Object.create(null);["abort","aborted","connect","error","socket","timeout"].forEach((function(e){n[e]=function(t,r,o){this._redirectable.emit(e,t,r,o)}}));var a=createErrorType("ERR_FR_REDIRECTION_FAILURE",""),h=createErrorType("ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded"),u=createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED","Request body larger than maxBodyLength limit"),c=createErrorType("ERR_STREAM_WRITE_AFTER_END","write after end");function RedirectableRequest(e,t){i.call(this),this._sanitizeOptions(e),this._options=e,this._ended=!1,this._ending=!1,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],t&&this.on("response",t);var r=this;this._onNativeResponse=function(e){r._processResponse(e)},this._performRequest()}function wrap(e){var t={maxRedirects:21,maxBodyLength:10485760},i={};return Object.keys(e).forEach((function(n){var a=n+":",h=i[a]=e[n],u=t[n]=Object.create(h);Object.defineProperties(u,{request:{value:function(e,n,h){if("string"==typeof e){var u=e;try{e=urlToOptions(new s(u))}catch(c){e=r.parse(u)}}else s&&e instanceof s?e=urlToOptions(e):(h=n,n=e,e={protocol:a});return"function"==typeof n&&(h=n,n=null),(n=Object.assign({maxRedirects:t.maxRedirects,maxBodyLength:t.maxBodyLength},e,n)).nativeProtocols=i,o.equal(n.protocol,a,"protocol mismatch"),debug_1("options",n),new RedirectableRequest(n,h)},configurable:!0,enumerable:!0,writable:!0},get:{value:function(e,t,r){var o=u.request(e,t,r);return o.end(),o},configurable:!0,enumerable:!0,writable:!0}})})),t}function noop(){}function urlToOptions(e){var t={protocol:e.protocol,hostname:e.hostname.startsWith("[")?e.hostname.slice(1,-1):e.hostname,hash:e.hash,search:e.search,pathname:e.pathname,path:e.pathname+e.search,href:e.href};return""!==e.port&&(t.port=Number(e.port)),t}function removeMatchingHeaders(e,t){var r;for(var o in t)e.test(o)&&(r=t[o],delete t[o]);return r}function createErrorType(e,t){function CustomError(e){Error.captureStackTrace(this,this.constructor),this.message=e||t}return CustomError.prototype=new Error,CustomError.prototype.constructor=CustomError,CustomError.prototype.name="Error ["+e+"]",CustomError.prototype.code=e,CustomError}RedirectableRequest.prototype=Object.create(i.prototype),RedirectableRequest.prototype.abort=function(){this._currentRequest.removeAllListeners(),this._currentRequest.on("error",noop),this._currentRequest.abort(),this.emit("abort"),this.removeAllListeners()},RedirectableRequest.prototype.write=function(e,t,r){if(this._ending)throw new c;if(!("string"==typeof e||"object"==typeof e&&"length"in e))throw new TypeError("data should be a string, Buffer or Uint8Array");"function"==typeof t&&(r=t,t=null),0!==e.length?this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:t}),this._currentRequest.write(e,t,r)):(this.emit("error",new u),this.abort()):r&&r()},RedirectableRequest.prototype.end=function(e,t,r){if("function"==typeof e?(r=e,e=t=null):"function"==typeof t&&(r=t,t=null),e){var o=this,s=this._currentRequest;this.write(e,t,(function(){o._ended=!0,s.end(null,null,r)})),this._ending=!0}else this._ended=this._ending=!0,this._currentRequest.end(null,null,r)},RedirectableRequest.prototype.setHeader=function(e,t){this._options.headers[e]=t,this._currentRequest.setHeader(e,t)},RedirectableRequest.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},RedirectableRequest.prototype.setTimeout=function(e,t){var r=this;function startTimer(){r._timeout&&clearTimeout(r._timeout),r._timeout=setTimeout((function(){r.emit("timeout"),clearTimer()}),e)}function clearTimer(){clearTimeout(this._timeout),t&&r.removeListener("timeout",t),this.socket||r._currentRequest.removeListener("socket",startTimer)}return t&&this.on("timeout",t),this.socket?startTimer():this._currentRequest.once("socket",startTimer),this.once("response",clearTimer),this.once("error",clearTimer),this},["flushHeaders","getHeader","setNoDelay","setSocketKeepAlive"].forEach((function(e){RedirectableRequest.prototype[e]=function(t,r){return this._currentRequest[e](t,r)}})),["aborted","connection","socket"].forEach((function(e){Object.defineProperty(RedirectableRequest.prototype,e,{get:function(){return this._currentRequest[e]}})})),RedirectableRequest.prototype._sanitizeOptions=function(e){if(e.headers||(e.headers={}),e.host&&(e.hostname||(e.hostname=e.host),delete e.host),!e.pathname&&e.path){var t=e.path.indexOf("?");t<0?e.pathname=e.path:(e.pathname=e.path.substring(0,t),e.search=e.path.substring(t))}},RedirectableRequest.prototype._performRequest=function(){var e=this._options.protocol,t=this._options.nativeProtocols[e];if(t){if(this._options.agents){var o=e.substr(0,e.length-1);this._options.agent=this._options.agents[o]}var s=this._currentRequest=t.request(this._options,this._onNativeResponse);for(var i in this._currentUrl=r.format(this._options),s._redirectable=this,n)i&&s.on(i,n[i]);if(this._isRedirect){var a=0,h=this,u=this._requestBodyBuffers;!function writeNext(e){if(s===h._currentRequest)if(e)h.emit("error",e);else if(a<u.length){var t=u[a++];s.finished||s.write(t.data,t.encoding,writeNext)}else h._ended&&s.end()}()}}else this.emit("error",new TypeError("Unsupported protocol "+e))},RedirectableRequest.prototype._processResponse=function(e){var t=e.statusCode;this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:t});var o=e.headers.location;if(o&&!1!==this._options.followRedirects&&t>=300&&t<400){if(this._currentRequest.removeAllListeners(),this._currentRequest.on("error",noop),this._currentRequest.abort(),e.destroy(),++this._redirectCount>this._options.maxRedirects)return void this.emit("error",new h);((301===t||302===t)&&"POST"===this._options.method||303===t&&!/^(?:GET|HEAD)$/.test(this._options.method))&&(this._options.method="GET",this._requestBodyBuffers=[],removeMatchingHeaders(/^content-/i,this._options.headers));var s=removeMatchingHeaders(/^host$/i,this._options.headers)||r.parse(this._currentUrl).hostname,i=r.resolve(this._currentUrl,o);debug_1("redirecting to",i),this._isRedirect=!0;var n=r.parse(i);if(Object.assign(this._options,n),n.hostname!==s&&removeMatchingHeaders(/^authorization$/i,this._options.headers),"function"==typeof this._options.beforeRedirect){var u={headers:e.headers};try{this._options.beforeRedirect.call(null,this._options,u)}catch(p){return void this.emit("error",p)}this._sanitizeOptions(this._options)}try{this._performRequest()}catch(d){var c=new a("Redirected request failed: "+d.message);c.cause=d,this.emit("error",c)}}else e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),this._requestBodyBuffers=[]};var p=wrap({http:{},https:{}}),d=wrap;p.wrap=d;export default p;export{d as wrap};