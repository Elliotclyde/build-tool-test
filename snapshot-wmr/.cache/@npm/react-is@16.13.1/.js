"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function createCommonjsModule(e,t,o){return e(o={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&o.path)}},o.exports),o.exports}var e=createCommonjsModule((function(e,t){(function(){var e="function"==typeof Symbol&&Symbol.for,o=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,f=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,i=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,l=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,S=e?Symbol.for("react.fundamental"):60117,$=e?Symbol.for("react.responder"):60118,M=e?Symbol.for("react.scope"):60119;function typeOf(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:var p=e.type;switch(p){case u:case i:case n:case c:case f:case l:return p;default:var b=p&&p.$$typeof;switch(b){case s:case y:case d:case m:case a:return b;default:return t}}case r:return t}}}var C=u,O=i,w=s,h=a,x=o,v=y,g=n,j=d,P=m,R=r,_=c,A=f,E=l,F=!1;function isConcurrentMode(e){return typeOf(e)===i}t.AsyncMode=C,t.ConcurrentMode=O,t.ContextConsumer=w,t.ContextProvider=h,t.Element=x,t.ForwardRef=v,t.Fragment=g,t.Lazy=j,t.Memo=P,t.Portal=R,t.Profiler=_,t.StrictMode=A,t.Suspense=E,t.isAsyncMode=function(e){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),isConcurrentMode(e)||typeOf(e)===u},t.isConcurrentMode=isConcurrentMode,t.isContextConsumer=function(e){return typeOf(e)===s},t.isContextProvider=function(e){return typeOf(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return typeOf(e)===y},t.isFragment=function(e){return typeOf(e)===n},t.isLazy=function(e){return typeOf(e)===d},t.isMemo=function(e){return typeOf(e)===m},t.isPortal=function(e){return typeOf(e)===r},t.isProfiler=function(e){return typeOf(e)===c},t.isStrictMode=function(e){return typeOf(e)===f},t.isSuspense=function(e){return typeOf(e)===l},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===i||e===c||e===f||e===l||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===m||e.$$typeof===a||e.$$typeof===s||e.$$typeof===y||e.$$typeof===S||e.$$typeof===$||e.$$typeof===M||e.$$typeof===b)},t.typeOf=typeOf})()})),t=createCommonjsModule((function(t){t.exports=e}));export default t;