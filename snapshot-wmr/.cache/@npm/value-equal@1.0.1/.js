function valueOf(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}export default function valueEqual(e,r){if(e===r)return!0;if(null==e||null==r)return!1;if(Array.isArray(e))return Array.isArray(r)&&e.length===r.length&&e.every((function(e,u){return valueEqual(e,r[u])}));if("object"==typeof e||"object"==typeof r){var u=valueOf(e),t=valueOf(r);return u!==e||t!==r?valueEqual(u,t):Object.keys(Object.assign({},e,r)).every((function(u){return valueEqual(e[u],r[u])}))}return!1}