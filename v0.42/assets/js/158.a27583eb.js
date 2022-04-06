(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{816:function(g,C,I){"use strict";I.r(C);var A=I(1),t=Object(A.a)({},(function(){var g=this,C=g.$createElement,I=g._self._c||C;return I("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[I("h1",{attrs:{id:"main-components-of-the-cosmos-sdk"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#main-components-of-the-cosmos-sdk"}},[g._v("#")]),g._v(" Main Components of the Cosmos SDK")]),g._v(" "),I("p",[g._v("The Cosmos SDK is a framework that facilitates the development of secure state-machines on top of Tendermint. At its core, the SDK is a boilerplate implementation of the "),I("RouterLink",{attrs:{to:"/intro/sdk-app-architecture.html#abci"}},[g._v("ABCI")]),g._v(" in Golang. It comes with a "),I("RouterLink",{attrs:{to:"/core/store.html#multistore"}},[I("code",[g._v("multistore")])]),g._v(" to persist data and a "),I("RouterLink",{attrs:{to:"/core/baseapp.html#routing"}},[I("code",[g._v("router")])]),g._v(" to handle transactions.")],1),g._v(" "),I("p",[g._v("Here is a simplified view of how transactions are handled by an application built on top of the Cosmos SDK when transferred from Tendermint via "),I("code",[g._v("DeliverTx")]),g._v(":")]),g._v(" "),I("ol",[I("li",[g._v("Decode "),I("code",[g._v("transactions")]),g._v(" received from the Tendermint consensus engine (remember that Tendermint only deals with "),I("code",[g._v("[]bytes")]),g._v(").")]),g._v(" "),I("li",[g._v("Extract "),I("code",[g._v("messages")]),g._v(" from "),I("code",[g._v("transactions")]),g._v(" and do basic sanity checks.")]),g._v(" "),I("li",[g._v("Route each message to the appropriate module so that it can be processed.")]),g._v(" "),I("li",[g._v("Commit state changes.")])]),g._v(" "),I("h2",{attrs:{id:"baseapp"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#baseapp"}},[g._v("#")]),g._v(" "),I("code",[g._v("baseapp")])]),g._v(" "),I("p",[I("code",[g._v("baseapp")]),g._v(" is the boilerplate implementation of a Cosmos SDK application. It comes with an implementation of the ABCI to handle the connexion with the underlying consensus engine. Typically, a Cosmos SDK application extends "),I("code",[g._v("baseapp")]),g._v(" by embedding it in "),I("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[I("code",[g._v("app.go")])]),g._v(". See an example of this from the SDK application tutorial:")],1),g._v(" "),I("p",[I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBuYW1lU2VydmljZUFwcCBzdHJ1Y3QgewoJKmJhbS5CYXNlQXBwCgljZGMgKmNvZGVjLkNvZGVjCgoJLy8ga2V5cyB0byBhY2Nlc3MgdGhlIHN1YnN0b3JlcwoJa2V5cyAgbWFwW3N0cmluZ10qc2RrLktWU3RvcmVLZXkKCXRrZXlzIG1hcFtzdHJpbmddKnNkay5UcmFuc2llbnRTdG9yZUtleQoKCS8vIEtlZXBlcnMKCWFjY291bnRLZWVwZXIgIGF1dGguQWNjb3VudEtlZXBlcgoJYmFua0tlZXBlciAgICAgYmFuay5LZWVwZXIKCXN0YWtpbmdLZWVwZXIgIHN0YWtpbmcuS2VlcGVyCglzbGFzaGluZ0tlZXBlciBzbGFzaGluZy5LZWVwZXIKCWRpc3RyS2VlcGVyICAgIGRpc3RyLktlZXBlcgoJc3VwcGx5S2VlcGVyICAgc3VwcGx5LktlZXBlcgoJcGFyYW1zS2VlcGVyICAgcGFyYW1zLktlZXBlcgoJbnNLZWVwZXIgICAgICAgbmFtZXNlcnZpY2UuS2VlcGVyCgoJLy8gTW9kdWxlIE1hbmFnZXIKCW1tICptb2R1bGUuTWFuYWdlcgp9"}})],1),g._v(" "),I("p",[g._v("The goal of "),I("code",[g._v("baseapp")]),g._v(" is to provide a secure interface between the store and the extensible state machine while defining as little about the state machine as possible (staying true to the ABCI).")]),g._v(" "),I("p",[g._v("For more on "),I("code",[g._v("baseapp")]),g._v(", please click "),I("RouterLink",{attrs:{to:"/core/baseapp.html"}},[g._v("here")]),g._v(".")],1),g._v(" "),I("h2",{attrs:{id:"multistore"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#multistore"}},[g._v("#")]),g._v(" Multistore")]),g._v(" "),I("p",[g._v("The Cosmos SDK provides a "),I("RouterLink",{attrs:{to:"/core/store.html#multistore"}},[I("code",[g._v("multistore")])]),g._v(" for persisting state. The multistore allows developers to declare any number of "),I("RouterLink",{attrs:{to:"/core/store.html#base-layer-kvstores"}},[I("code",[g._v("KVStores")])]),g._v(". These "),I("code",[g._v("KVStores")]),g._v(" only accept the "),I("code",[g._v("[]byte")]),g._v(" type as value and therefore any custom structure needs to be marshalled using "),I("RouterLink",{attrs:{to:"/core/encoding.html"}},[g._v("a codec")]),g._v(" before being stored.")],1),g._v(" "),I("p",[g._v("The multistore abstraction is used to divide the state in distinct compartments, each managed by its own module. For more on the multistore, click "),I("RouterLink",{attrs:{to:"/core/store.html#multistore"}},[g._v("here")])],1),g._v(" "),I("h2",{attrs:{id:"modules"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[g._v("#")]),g._v(" Modules")]),g._v(" "),I("p",[g._v("The power of the Cosmos SDK lies in its modularity. SDK applications are built by aggregating a collection of interoperable modules. Each module defines a subset of the state and contains its own message/transaction processor, while the SDK is responsible for routing each message to its respective module.")]),g._v(" "),I("p",[g._v("Here is a simplified view of how a transaction is processed by the application of each full-node when it is received in a valid block:")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFRyYW5zYWN0aW9uIHJlbGF5ZWQgZnJvbSB0aGUgZnVsbC1ub2RlJ3MgVGVuZGVybWludCBlbmdpbmUKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0byB0aGUgbm9kZSdzIGFwcGxpY2F0aW9uIHZpYSBEZWxpdmVyVHgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS12LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICBBUFBMSUNBVElPTiAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgIHwgICAgIFVzaW5nIGJhc2VhcHAncyBtZXRob2RzOiBEZWNvZGUgdGhlIFR4LCAgICB8CiAgICAgICAgICAgICAgICB8ICAgICBleHRyYWN0IGFuZCByb3V0ZSB0aGUgbWVzc2FnZShzKSAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTWVzc2FnZSByb3V0ZWQgdG8gdGhlIGNvcnJlY3QKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbW9kdWxlIHRvIGJlIHByb2Nlc3NlZAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tdi0tLS0tLS0tLS0rCnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgfAp8ICBBVVRIIE1PRFVMRSAgIHwgIHwgIEJBTksgTU9EVUxFICB8ICB8IFNUQUtJTkcgTU9EVUxFIHwgIHwgICBHT1YgTU9EVUxFICAgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICB8CnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCBIYW5kbGVzIG1lc3NhZ2UsfAp8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgIHwgIHwgVXBkYXRlcyBzdGF0ZSAgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICB8CistLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLSsgICstLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLSstLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJldHVybiByZXN1bHQgdG8gVGVuZGVybWludAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICgwPU9rLCAxPUVycikKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdgo="}}),g._v(" "),I("p",[g._v("Each module can be seen as a little state-machine. Developers need to define the subset of the state handled by the module, as well as custom message types that modify the state ("),I("em",[g._v("Note:")]),g._v(" "),I("code",[g._v("messages")]),g._v(" are extracted from "),I("code",[g._v("transactions")]),g._v(" by "),I("code",[g._v("baseapp")]),g._v("). In general, each module declares its own "),I("code",[g._v("KVStore")]),g._v(" in the "),I("code",[g._v("multistore")]),g._v(" to persist the subset of the state it defines. Most developers will need to access other 3rd party modules when building their own modules. Given that the Cosmos-SDK is an open framework, some of the modules may be malicious, which means there is a need for security principles to reason about inter-module interactions. These principles are based on "),I("RouterLink",{attrs:{to:"/core/ocap.html"}},[g._v("object-capabilities")]),g._v(". In practice, this means that instead of having each module keep an access control list for other modules, each module implements special objects called "),I("code",[g._v("keepers")]),g._v(" that can be passed to other modules to grant a pre-defined set of capabilities.")],1),g._v(" "),I("p",[g._v("SDK modules are defined in the "),I("code",[g._v("x/")]),g._v(" folder of the SDK. Some core modules include:")]),g._v(" "),I("ul",[I("li",[I("code",[g._v("x/auth")]),g._v(": Used to manage accounts and signatures.")]),g._v(" "),I("li",[I("code",[g._v("x/bank")]),g._v(": Used to enable tokens and token transfers.")]),g._v(" "),I("li",[I("code",[g._v("x/staking")]),g._v(" + "),I("code",[g._v("x/slashing")]),g._v(": Used to build Proof-Of-Stake blockchains.")])]),g._v(" "),I("p",[g._v("In addition to the already existing modules in "),I("code",[g._v("x/")]),g._v(", that anyone can use in their app, the SDK lets you build your own custom modules. You can check an "),I("a",{attrs:{href:"https://cosmos.network/docs/tutorial/keeper.html",target:"_blank",rel:"noopener noreferrer"}},[g._v("example of that in the tutorial"),I("OutboundLink")],1),g._v(".")]),g._v(" "),I("h2",{attrs:{hide:"",id:"next"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[g._v("#")]),g._v(" Next")]),g._v(" "),I("p",{attrs:{hide:""}},[g._v("Learn more about the "),I("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[g._v("anatomy of an SDK application")])],1)],1)}),[],!1,null,null,null);C.default=t.exports}}]);