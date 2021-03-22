(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=l.a.createContext({}),p=function(e){var t=l.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return l.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(r,".").concat(u)]||b[u]||s[u]||i;return a?l.a.createElement(d,o(o({ref:t},m),{},{components:a})):l.a.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(7),i=(a(0),a(103)),r={id:"templated-tiles",title:"Templated Tiles Layer",slug:"/layers/templated-tiles"},o={unversionedId:"layers/templated-tiles",id:"layers/templated-tiles",isDocsHomePage:!1,title:"Templated Tiles Layer",description:"In this section, we will learn how to create a templated tile layer. A templated layer is a layer that makes HTTP requests for it's data. In this case requests are made to fill in the grid of tiles available on the map's viewport.",source:"@site/docs/layers/templated-tiles.md",slug:"/layers/templated-tiles",permalink:"/web-map-doc/docs/layers/templated-tiles",editUrl:"https://github.com/Maps4HTML/web-map-doc/docs/layers/templated-tiles.md",version:"current",sidebar:"someSidebar",previous:{title:"Static Images Layer",permalink:"/web-map-doc/docs/layers/static-images"},next:{title:"Static Features Layer",permalink:"/web-map-doc/docs/layers/static-features"}},c=[{value:"Adding a templated layer",id:"adding-a-templated-layer",children:[]},{value:"Associated Elements",id:"associated-elements",children:[{value:"<code>&lt;extent&gt;</code>",id:"extent",children:[]},{value:"<code>&lt;input&gt;</code>",id:"input",children:[]},{value:"<code>&lt;link&gt;</code>",id:"link",children:[]}]},{value:"Additional Context",id:"additional-context",children:[]},{value:"Full Examples",id:"full-examples",children:[]}],m={toc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section, we will learn how to create a templated tile layer. A templated layer is a layer that makes HTTP requests for it's data. In this case requests are made to fill in the grid of tiles available on the map's viewport."),Object(i.b)("h2",{id:"adding-a-templated-layer"},"Adding a templated layer"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<layer- label="Templated Tile Layer" checked>\n  <extent units="my-projection">\n    <input name="zoomLevel" type="zoom" min="1" max="1" value="0" />\n    <input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" />\n    <input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" />\n    <link rel=\'tile\' type=\'text/mapml\' title=\'Templated Tiles\' tref=\'tiles/{zoomLevel}/r{row}_c{col}.mapml\' />\n  </extent>\n</layer->\n')),Object(i.b)("h2",{id:"associated-elements"},"Associated Elements"),Object(i.b)("h3",{id:"extent"},Object(i.b)("inlineCode",{parentName:"h3"},"<extent>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"units"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This allows you to define what the ",Object(i.b)("a",{parentName:"li",href:"http://example.org/"},"projection")," of the templated tiles are.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"input"},Object(i.b)("inlineCode",{parentName:"h3"},"<input>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"axis")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This attribute is only useful on inputs of type ",Object(i.b)("strong",null,"location"),", it sets the axis the following input defines. This value also defines what the ",Object(i.b)("strong",null,"min")," and ",Object(i.b)("strong",null,"max")," value's units."),Object(i.b)("li",{parentName:"ul"},"Options are, row | column | easting | northing | latitude | longitude"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This allows you to name the input, this name is then used in the url template used in the ",Object(i.b)("inlineCode",{parentName:"li"},"<link>")," href attribute."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the ",Object(i.b)("strong",null,"type")," of the input."),Object(i.b)("li",{parentName:"ul"},"Options are, zoom | location"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"max")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the maximum of the bounds of the layer on the given ",Object(i.b)("strong",null,"axis"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"min")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the minimum of the bounds of the layer on the given ",Object(i.b)("strong",null,"axis"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"value")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the zoom level the inputs of type ",Object(i.b)("strong",null,"location"),"'s ",Object(i.b)("strong",null,"min")," and ",Object(i.b)("strong",null,"max")," are defined at.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"link"},Object(i.b)("inlineCode",{parentName:"h3"},"<link>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rel")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Set this to tile in the case of a templated tile layer."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"title")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the title of the layer, this is the title shown in the layer controls."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the type of the returned data."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"tref")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"additional-context"},"Additional Context"),Object(i.b)("p",null,"You can also provide a set of elements to further define the templated tile layer. This is the list of available additions with examples."),Object(i.b)("h4",{id:"meta-namezoom"},Object(i.b)("inlineCode",{parentName:"h4"},'<meta name="zoom">')),Object(i.b)("p",null,"Sets the native minimum and maximum ",Object(i.b)("a",{parentName:"p",href:"http://example.org/"},"native zoom"),". It also allows you to set a value, this is the default zoom of all features in the case the ",Object(i.b)("inlineCode",{parentName:"p"},"<feature>")," is missing a zoom attribute."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<meta name="zoom" content="min=1,max=5,value=0" />\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"full-examples"},"Full Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="WGS84" zoom="1" lat="59.87304909" lon="-53.22587225" width="900" height="400" controls>\n  <layer- label="Inline Templated Tile" checked>\n    <meta name="zoom" content="min=1,max=2" />\n    <extent units="WGS84">\n      <input name="zoomLevel" type="zoom" min="1" max="1" value="0" />\n      <input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" />\n      <input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" />\n      <link rel=\'tile\' type=\'text/mapml\' title=\'Templated Tile Layer\' tref=\'data/wgs84/{zoomLevel}/r{row}_c{col}.mapml\' />\n    </extent>\n  </layer->\n</mapml-viewer>\n')),Object(i.b)("p",null,"[ADD MAP HERE]"))}p.isMDXComponent=!0}}]);