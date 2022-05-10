(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{473:function(t,e,a){"use strict";a.r(e);var s=a(30),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"external"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external"}},[t._v("#")]),t._v(" External")]),t._v(" "),a("p",[t._v("Defines an external application to launch.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("apiVersion")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Optional api version for this object.")])]),t._v(" "),a("tr",[a("td",[t._v("kind")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Identifer for this configuration object.")])]),t._v(" "),a("tr",[a("td",[t._v("metadata")]),t._v(" "),a("td",[a("a",{attrs:{href:"../metadata"}},[a("code",[t._v("Metadata")])])]),t._v(" "),a("td",[t._v("Object metadata, see "),a("a",{attrs:{href:"../metadata"}},[t._v("metadata")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("spec")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/config/external/#external-specification"}},[a("code",[t._v("ExternalSpecification")])])],1),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/config/external/#external-specification"}},[t._v("External Specification")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/config/external/#external-status"}},[a("code",[t._v("ExternalStatus")])])],1),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/config/external/#external-status"}},[t._v("External Status")]),t._v(".")],1)])])]),t._v(" "),a("h2",{attrs:{id:"external-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-specification"}},[t._v("#")]),t._v(" External Specification")]),t._v(" "),a("p",[t._v("The specification for an external application.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("arguments")]),t._v(" "),a("td",[a("code",[t._v("string[]")])]),t._v(" "),a("td",[t._v("A list of arguments to apply to the executable")])]),t._v(" "),a("tr",[a("td",[t._v("env")]),t._v(" "),a("td",[a("code",[t._v("EnvironmentParameters")])]),t._v(" "),a("td",[t._v("A key value map of environment variables to apply.")])]),t._v(" "),a("tr",[a("td",[t._v("executable")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("A relative or absolute path to an executable.")])])])]),t._v(" "),a("h2",{attrs:{id:"external-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-status"}},[t._v("#")]),t._v(" External Status "),a("Badge",{attrs:{text:"READONLY",vertical:"middle",type:"error"}})],1),t._v(" "),a("p",[t._v("Populated by Desktop.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("A human readable message.")])]),t._v(" "),a("tr",[a("td",[t._v("pid")]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("The OS "),a("code",[t._v("pid")]),t._v(" of the process.")])]),t._v(" "),a("tr",[a("td",[t._v("startTime")]),t._v(" "),a("td",[a("code",[t._v("Date")])]),t._v(" "),a("td",[t._v("The start time of the external application.")])])])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" external\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" calculator\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Launches a calculator application.\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" examples\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Caclulator.exe\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);