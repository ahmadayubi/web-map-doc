(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,s=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return a?r.a.createElement(s,o(o({ref:t},b),{},{components:a})):r.a.createElement(s,o({ref:t},b))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),l=(a(0),a(111)),i={id:"map-a",title:"<map-a>",slug:"/other-elements/map-a"},o={unversionedId:"other-elements/map-a",id:"other-elements/map-a",isDocsHomePage:!1,title:"<map-a>",description:"In this section we'll learn about the `` element. This element allows you to wrap parts of",source:"@site/docs/other-elements/map-a.md",slug:"/other-elements/map-a",permalink:"/web-map-doc/docs/other-elements/map-a",version:"current",sidebar:"someSidebar",previous:{title:"Templated Images Layer",permalink:"/web-map-doc/docs/layers/templated-images"},next:{title:"Custom Projections API",permalink:"/web-map-doc/docs/api/custom-projections"}},p=[{value:"Attributes",id:"attributes",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this section we'll learn about the ",Object(l.b)("inlineCode",{parentName:"p"},"<map-a>")," element. This element allows you to wrap parts of\ncoordinates and feature types entirely, changing the interaction of whatever is wrapped."),Object(l.b)("h2",{id:"attributes"},"Attributes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"href")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The URL that the wrapped location points to. Note - If the ",Object(l.b)("inlineCode",{parentName:"li"},"type")," of the ",Object(l.b)("inlineCode",{parentName:"li"},"<map-a>")," is text/mapml\nyou can provide fragments, more on fragments below."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"target")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This is where the linked URL will be displayed. See table below for more details."),Object(l.b)("li",{parentName:"ul"},"Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"_self"),", in the absence of a valid value."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This is the mime type of the linked URL's format. Options are ",Object(l.b)("inlineCode",{parentName:"li"},"text/html")," & ",Object(l.b)("inlineCode",{parentName:"li"},"text/mapml"),"."),Object(l.b)("li",{parentName:"ul"},"Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"text/mapml"),", in the absence of a valid type value.")))),Object(l.b)("h4",{id:"target-behavior-for-textmapml"},"Target Behavior for ",Object(l.b)("inlineCode",{parentName:"h4"},"text/mapml")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target Value"),Object(l.b)("th",{parentName:"tr",align:null},"Behavior"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_self"),Object(l.b)("td",{parentName:"tr",align:null},"Replaces the current layer with the linked URL layer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_blank"),Object(l.b)("td",{parentName:"tr",align:null},"Adds the linked URL layer to the map.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_parent"),Object(l.b)("td",{parentName:"tr",align:null},"Replace all the layers with the linked URL layer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_top"),Object(l.b)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")))),Object(l.b)("h4",{id:"target-behavior-for-texthtml"},"Target Behavior for ",Object(l.b)("inlineCode",{parentName:"h4"},"text/html")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target Value"),Object(l.b)("th",{parentName:"tr",align:null},"Behavior"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_self"),Object(l.b)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_blank"),Object(l.b)("td",{parentName:"tr",align:null},"Open the linked URL in a new tab.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_parent"),Object(l.b)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_top"),Object(l.b)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")))),Object(l.b)("h4",{id:"location-fragments"},"Location fragments"),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"type")," attribute's value is ",Object(l.b)("inlineCode",{parentName:"p"},"text/mapml"),", you have the ability add a location fragment\nto the URL. This will pan & zoom the map to the given location."),Object(l.b)("p",null,"Fragments are in the following format ",Object(l.b)("inlineCode",{parentName:"p"},"#zoom, longitude, latitude"),"."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h4",{id:"wrapping-a-feature-type--location-fragment"},"Wrapping a Feature Type + Location Fragment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<feature>\n  <properties>\n    <h1>Basic</h1>\n  </properties>\n  <geometry>\n    <map-a href="../externalMapML.mapml#2,-98,37">\n      <polygon>\n        <coordinates>2771 3106 2946 3113 2954 3210 2815 3192 2771 3106</coordinates>\n      </polygon>\n    </map-a>\n  </geometry>\n</feature>\n')),Object(l.b)("p",null,"This will replace the current layer with the layer within externalMapML.mapml, once it's added the map will then goto\nzoomlevel: 2, longitude: -98, latitude: 37."),Object(l.b)("h4",{id:"wrapping-a-point-coordinate-with-target_blank"},"Wrapping a point coordinate with ",Object(l.b)("inlineCode",{parentName:"h4"},'target="_blank"')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<feature>\n  <properties>\n    <h1>_blank target</h1>\n  </properties>\n  <geometry>\n    <polygon>\n      <coordinates>2771 3106 2946 3113 <map-a href="file.mapml" target="_blank"> 2954 3210 </map-a> 2815 3192 2771 3106</coordinates>\n    </polygon>\n  </geometry>\n</feature>\n')),Object(l.b)("p",null,"In this example, a point will be created at (2954, 3210) which, once clicked, adds a new layer to the map."),Object(l.b)("h4",{id:"nested-map-a-definition-and-behavior"},"Nested ",Object(l.b)("inlineCode",{parentName:"h4"},"<map-a>")," definition and behavior"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<feature>\n  <properties>\n    <h1>Advanced Example</h1>\n  </properties>\n  <geometry>\n    <map-a href="parent.mapml" target="_blank">\n      <multipolygon>\n        <polygon>\n          <coordinates>2771 3106 2946 3113 <map-a href="webpage.html" target="_blank" type="text/mapml"> 2954 3210 </map-a> 2815 3192 2771 3106</coordinates>\n        </polygon>\n        <map-a href="nested.mapml" target="_top">\n          <polygon>\n            <coordinates>11 11 12 11 12 12 11 12</coordinates>\n          </polygon>\n        </map-a>\n      </multipolygon>\n    </map-a>\n  </geometry>\n</feature>\n')),Object(l.b)("p",null,"In this advanced example there are multiple nested ",Object(l.b)("inlineCode",{parentName:"p"},"<map-a>"),". The simple behavior is, the closest ",Object(l.b)("inlineCode",{parentName:"p"},"<map-a>")," is the link\nbehavior that the given location/area will adopt."))}c.isMDXComponent=!0}}]);