import e from"/@npm/react-is";import r from"/@npm/object-assign";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",printWarning=function(){},t=n,o={},a=Function.call.bind(Object.prototype.hasOwnProperty);function checkPropTypes(e,r,n,i,p){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var l=Error((i||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw l.name="Invariant Violation",l}u=e[c](r,c,i,n,null,t)}catch(s){u=s}if(!u||u instanceof Error||printWarning((i||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var f=p?p():"";printWarning("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}printWarning=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(n){}},checkPropTypes.resetWarningCache=function(){o={}};var i=checkPropTypes,p=Function.call.bind(Object.prototype.hasOwnProperty),printWarning$1=function(){};function emptyFunctionThatReturnsNull(){return null}printWarning$1=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(n){}};var factoryWithTypeCheckers=function(t,o){var a="function"==typeof Symbol&&Symbol.iterator;var c={array:createPrimitiveTypeChecker("array"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),symbol:createPrimitiveTypeChecker("symbol"),any:createChainableTypeChecker(emptyFunctionThatReturnsNull),arrayOf:function(e){return createChainableTypeChecker((function(r,t,o,a,i){if("function"!=typeof e)return new PropTypeError("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var p=r[t];if(!Array.isArray(p))return new PropTypeError("Invalid "+a+" `"+i+"` of type `"+getPropType(p)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<p.length;c++){var u=e(p,c,o,a,i+"["+c+"]",n);if(u instanceof Error)return u}return null}))},element:createChainableTypeChecker((function(e,r,n,o,a){var i=e[r];return t(i)?null:new PropTypeError("Invalid "+o+" `"+a+"` of type `"+getPropType(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:createChainableTypeChecker((function(r,n,t,o,a){var i=r[n];return e.isValidElementType(i)?null:new PropTypeError("Invalid "+o+" `"+a+"` of type `"+getPropType(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return createChainableTypeChecker((function(r,n,t,o,a){if(!(r[n]instanceof e)){var i=e.name||"<<anonymous>>";return new PropTypeError("Invalid "+o+" `"+a+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(r[n])+"` supplied to `"+t+"`, expected instance of `"+i+"`.")}return null}))},node:createChainableTypeChecker((function(e,r,n,t,o){return isNode(e[r])?null:new PropTypeError("Invalid "+t+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return createChainableTypeChecker((function(r,t,o,a,i){if("function"!=typeof e)return new PropTypeError("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var c=r[t],u=getPropType(c);if("object"!==u)return new PropTypeError("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected an object.");for(var l in c)if(p(c,l)){var f=e(c,l,o,a,i+"."+l,n);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return printWarning$1(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),emptyFunctionThatReturnsNull;function validate(r,n,t,o,a){for(var i=r[n],p=0;p<e.length;p++)if(is(i,e[p]))return null;var c=JSON.stringify(e,(function(e,r){return"symbol"===getPreciseType(r)?String(r):r}));return new PropTypeError("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+t+"`, expected one of "+c+".")}return createChainableTypeChecker(validate)},oneOfType:function(e){if(!Array.isArray(e))return printWarning$1("Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunctionThatReturnsNull;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+getPostfixForTypeWarning(t)+" at index "+r+"."),emptyFunctionThatReturnsNull}return createChainableTypeChecker((function(r,t,o,a,i){for(var p=0;p<e.length;p++){if(null==(0,e[p])(r,t,o,a,i,n))return null}return new PropTypeError("Invalid "+a+" `"+i+"` supplied to `"+o+"`.")}))},shape:function(e){return createChainableTypeChecker((function(r,t,o,a,i){var p=r[t],c=getPropType(p);if("object"!==c)return new PropTypeError("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var f=l(p,u,o,a,i+"."+u,n);if(f)return f}}return null}))},exact:function(e){return createChainableTypeChecker((function(t,o,a,i,p){var c=t[o],u=getPropType(c);if("object"!==u)return new PropTypeError("Invalid "+i+" `"+p+"` of type `"+u+"` supplied to `"+a+"`, expected `object`.");var l=r({},t[o],e);for(var f in l){var s=e[f];if(!s)return new PropTypeError("Invalid "+i+" `"+p+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(t[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=s(c,f,a,i,p+"."+f,n);if(y)return y}return null}))}};function is(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function PropTypeError(e){this.message=e,this.stack=""}function createChainableTypeChecker(e){var r={},t=0;function checkType(a,i,p,c,u,l,f){if(c=c||"<<anonymous>>",l=l||p,f!==n){if(o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}if("undefined"!=typeof console){var y=c+":"+p;!r[y]&&t<3&&(printWarning$1("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,t++)}}return null==i[p]?a?null===i[p]?new PropTypeError("The "+u+" `"+l+"` is marked as required in `"+c+"`, but its value is `null`."):new PropTypeError("The "+u+" `"+l+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(i,p,c,u,l)}var a=checkType.bind(null,!1);return a.isRequired=checkType.bind(null,!0),a}function createPrimitiveTypeChecker(e){return createChainableTypeChecker((function(r,n,t,o,a,i){var p=r[n];return getPropType(p)!==e?new PropTypeError("Invalid "+o+" `"+a+"` of type `"+getPreciseType(p)+"` supplied to `"+t+"`, expected `"+e+"`."):null}))}function isNode(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(isNode);if(null===e||t(e))return!0;var r=function(e){var r=e&&(a&&e[a]||e["@@iterator"]);if("function"==typeof r)return r}(e);if(!r)return!1;var n,o=r.call(e);if(r!==e.entries){for(;!(n=o.next()).done;)if(!isNode(n.value))return!1}else for(;!(n=o.next()).done;){var i=n.value;if(i&&!isNode(i[1]))return!1}return!0;default:return!1}}function getPropType(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function getPreciseType(e){if(null==e)return""+e;var r=getPropType(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function getPostfixForTypeWarning(e){var r=getPreciseType(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return PropTypeError.prototype=Error.prototype,c.checkPropTypes=i,c.resetWarningCache=i.resetWarningCache,c.PropTypes=c,c},c=function(e,r,n){return e(n={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&n.path)}},n.exports),n.exports}((function(r){var n=e;r.exports=factoryWithTypeCheckers(n.isElement,!0)}));export default c;