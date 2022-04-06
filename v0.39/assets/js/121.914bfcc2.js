(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{816:function(e,t,r){"use strict";r.r(t);var o=r(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rest-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-interface"}},[e._v("#")]),e._v(" REST Interface")]),e._v(" "),r("h2",{attrs:{hide:"",id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("ul",[r("li",{attrs:{prereq:""}},[r("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html"}},[e._v("Query Lifecycle")])],1),e._v(" "),r("li",{attrs:{prereq:""}},[r("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("Application CLI")])],1)]),e._v(" "),r("h2",{attrs:{id:"application-rest-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-rest-interface"}},[e._v("#")]),e._v(" Application REST Interface")]),e._v(" "),r("p",[e._v("Building the REST Interface for an application is done by "),r("a",{attrs:{href:"#registering-routes"}},[e._v("aggregating REST Routes")]),e._v(" defined in the application's modules. This interface is served by a REST Server "),r("a",{attrs:{href:"#rest-server"}},[e._v("REST server")]),e._v(", which route requests and output responses in the application itself. The SDK comes with its own REST Server by default. To enable it, the "),r("code",[e._v("rest.ServeCommand")]),e._v(" command needs to be added as a subcommand of the "),r("code",[e._v("rootCmd")]),e._v(" in the "),r("code",[e._v("main()")]),e._v(" function of the "),r("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("CLI interface")]),e._v(":")],1),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cm9vdENtZC5BZGRDb21tYW5kKHJlc3QuU2VydmVDb21tYW5kKGNkYywgcmVnaXN0ZXJSb3V0ZXMpKQo="}}),e._v(" "),r("p",[e._v("Users will then be able to use the application CLI to start a new REST server, a local server through which they can securely interact with the application without downloading the entire state. The command entered by users would look something like this:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXBwY2xpIHJlc3Qtc2VydmVyIC0tY2hhaW4taWQgJmx0O2NoYWluSUQmZ3Q7IC0tdHJ1c3Qtbm9kZQo="}}),e._v(" "),r("p",[e._v("Note that if "),r("code",[e._v("trust-node")]),e._v(" is set to "),r("code",[e._v("false")]),e._v(", the REST server will verify the query proof against the merkle root (contained in the block header).")]),e._v(" "),r("h2",{attrs:{id:"rest-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-server"}},[e._v("#")]),e._v(" REST Server")]),e._v(" "),r("p",[e._v("A REST Server is used to receive and route HTTP Requests, obtain the results from the application, and return a response to the user. The REST Server defined by the SDK "),r("code",[e._v("rest")]),e._v(" package contains the following:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Router:")]),e._v(" A router for HTTP requests. A new router can be instantiated for an application and used to match routes based on path, request method, headers, etc. The SDK uses the "),r("a",{attrs:{href:"https://github.com/gorilla/mux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gorilla Mux Router"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("CLIContext:")]),e._v(" A "),r("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html#clicontext"}},[r("code",[e._v("CLIContext")])]),e._v(" created for a user interaction.")],1),e._v(" "),r("li",[r("strong",[e._v("Keybase:")]),e._v(" A "),r("RouterLink",{attrs:{to:"/basics/accounts.html#keybase"}},[e._v("Keybase")]),e._v(" is a key manager.")],1),e._v(" "),r("li",[r("strong",[e._v("Logger:")]),e._v(" A logger from Tendermint "),r("code",[e._v("Log")]),e._v(", a log package structured around key-value pairs that allows logging level to be set differently for different keys. The logger takes "),r("code",[e._v("Debug()")]),e._v(", "),r("code",[e._v("Info()")]),e._v(", and "),r("code",[e._v("Error()")]),e._v("s.")]),e._v(" "),r("li",[r("strong",[e._v("Listener:")]),e._v(" A "),r("a",{attrs:{href:"https://golang.org/pkg/net/#Listener",target:"_blank",rel:"noopener noreferrer"}},[e._v("listener"),r("OutboundLink")],1),e._v(" from the net package.")])]),e._v(" "),r("p",[e._v("Of the five, the only attribute that application developers need interact with is the "),r("code",[e._v("router")]),e._v(": they need to add routes to it so that the REST server can properly handle queries. See the next section for more information on registering routes.")]),e._v(" "),r("p",[e._v("In order to enable the REST Server in an SDK application, the "),r("code",[e._v("rest.ServeCommand")]),e._v(" needs to be added to the application's command-line interface. See the "),r("a",{attrs:{href:"#application-rest-interface"}},[e._v("above section")]),e._v(" for more information.")]),e._v(" "),r("h2",{attrs:{id:"registering-routes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#registering-routes"}},[e._v("#")]),e._v(" Registering Routes")]),e._v(" "),r("p",[e._v("To include routes for each module in an application, the CLI must have some kind of function to register routes in its REST Server. This function is called "),r("code",[e._v("RegisterRoutes()")]),e._v(", and is utilized by the "),r("code",[e._v("ServeCommand")]),e._v(" and must include routes for each of the application's modules. Since each module used by an SDK application implements a "),r("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#rest"}},[r("code",[e._v("RegisterRESTRoutes")])]),e._v(" function, application developers simply use the "),r("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")]),e._v(" to call this function for each module (this is done in the "),r("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("application's constructor")]),e._v(").")],1),e._v(" "),r("p",[e._v("At the bare minimum, a "),r("code",[e._v("RegisterRoutes()")]),e._v(" function should use the SDK client package "),r("code",[e._v("RegisterRoutes()")]),e._v(" function to be able to route RPC calls, and instruct the application Module Manager to call "),r("code",[e._v("RegisterRESTRoutes()")]),e._v(" for all of its modules. This is done in the "),r("code",[e._v("main.go")]),e._v(" file of the CLI (typically located in "),r("code",[e._v("./cmd/appcli/main.go")]),e._v(").")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyByZWdpc3RlclJvdXRlcyhycyAqcmVzdC5SZXN0U2VydmVyKSB7CgljbGllbnQuUmVnaXN0ZXJSb3V0ZXMocnMuQ2xpQ3R4LCBycy5NdXgpCglhcHAuTW9kdWxlQmFzaWNzLlJlZ2lzdGVyUkVTVFJvdXRlcyhycy5DbGlDdHgsIHJzLk11eCkKfQo="}}),e._v(" "),r("p",[e._v("This function is specific to the application and passed in to the "),r("code",[e._v("ServeCommand")]),e._v(", which should be added to the "),r("code",[e._v("rootCmd")]),e._v(" as such:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cm9vdENtZC5BZGRDb21tYW5kKHJlc3QuU2VydmVDb21tYW5kKGNkYywgcmVnaXN0ZXJSb3V0ZXMpKQo="}}),e._v(" "),r("h2",{attrs:{id:"cross-origin-resource-sharing-cors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cross-origin-resource-sharing-cors"}},[e._v("#")]),e._v(" Cross-Origin Resource Sharing (CORS)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS policies"),r("OutboundLink")],1),e._v(" are not enabled by default to help with security. If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy, this can be done with "),r("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx"),r("OutboundLink")],1),e._v(". For testing and development purposes there is an "),r("code",[e._v("unsafe_cors")]),e._v(" flag that can be passed to the cmd to enable accepting cors from everyone.")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2FpYWNsaSByZXN0LXNlcnZlciAtLWNoYWluLWlkPXRlc3QgXAogICAgLS1sYWRkcj10Y3A6Ly9sb2NhbGhvc3Q6MTMxNyBcCiAgICAtLW5vZGUgdGNwOi8vbG9jYWxob3N0OjI2NjU3IFwKICAgIC0tdHJ1c3Qtbm9kZT10cnVlIC0tdW5zYWZlLWNvcnMK"}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);