(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{757:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-031-protobuf-msg-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-031-protobuf-msg-services"}},[e._v("#")]),e._v(" ADR 031: Protobuf Msg Services")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2020-10-05: Initial Draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Accepted")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("We want to leverage protobuf "),o("code",[e._v("service")]),e._v(" definitions for defining "),o("code",[e._v("Msg")]),e._v("s which will give us significant developer UX\nimprovements in terms of the code that is generated and the fact that return types will now be well defined.")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Currently "),o("code",[e._v("Msg")]),e._v(" handlers in the Cosmos SDK do have return values that are placed in the "),o("code",[e._v("data")]),e._v(" field of the response.\nThese return values, however, are not specified anywhere except in the golang handler code.")]),e._v(" "),o("p",[e._v("In early conversations "),o("a",{attrs:{href:"https://docs.google.com/document/d/1eEgYgvgZqLE45vETjhwIw4VOqK-5hwQtZtjVbiXnIGc/edit",target:"_blank",rel:"noopener noreferrer"}},[e._v("it was proposed"),o("OutboundLink")],1),e._v("\nthat "),o("code",[e._v("Msg")]),e._v(" return types be captured using a protobuf extension field, ex:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"cGFja2FnZSBjb3Ntb3MuZ292OwoKbWVzc2FnZSBNc2dTdWJtaXRQcm9wb3NhbAoJb3B0aW9uIChjb3Ntb3NfcHJvdG8ubXNnX3JldHVybikgPSDigJx1aW50NjTigJ07CglzdHJpbmcgZGVsZWdhdG9yX2FkZHJlc3MgPSAxOwoJc3RyaW5nIHZhbGlkYXRvcl9hZGRyZXNzID0gMjsKCXJlcGVhdGVkIHNkay5Db2luIGFtb3VudCA9IDM7Cn0K"}}),e._v(" "),o("p",[e._v("This was never adopted, however.")]),e._v(" "),o("p",[e._v("Having a well-specified return value for "),o("code",[e._v("Msg")]),e._v("s would improve client UX. For instance,\nin "),o("code",[e._v("x/gov")]),e._v(",  "),o("code",[e._v("MsgSubmitProposal")]),e._v(" returns the proposal ID as a big-endian "),o("code",[e._v("uint64")]),e._v(".\nThis isn’t really documented anywhere and clients would need to know the internals\nof the SDK to parse that value and return it to users.")]),e._v(" "),o("p",[e._v("Also, there may be cases where we want to use these return values programatically.\nFor instance, https://github.com/cosmos/cosmos-sdk/issues/7093 proposes a method for\ndoing inter-module Ocaps using the "),o("code",[e._v("Msg")]),e._v(" router. A well-defined return type would\nimprove the developer UX for this approach.")]),e._v(" "),o("p",[e._v("In addition, handler registration of "),o("code",[e._v("Msg")]),e._v(" types tends to add a bit of\nboilerplate on top of keepers and is usually done through manual type switches.\nThis isn't necessarily bad, but it does add overhead to creating modules.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("We decide to use protobuf "),o("code",[e._v("service")]),e._v(" definitions for defining "),o("code",[e._v("Msg")]),e._v("s as well as\nthe code generated by them as a replacement for "),o("code",[e._v("Msg")]),e._v(" handlers.")]),e._v(" "),o("p",[e._v("Below we define how this will look for the "),o("code",[e._v("SubmitProposal")]),e._v(" message from "),o("code",[e._v("x/gov")]),e._v(" module.\nWe start with a "),o("code",[e._v("Msg")]),e._v(" "),o("code",[e._v("service")]),e._v(" definition:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"cGFja2FnZSBjb3Ntb3MuZ292OwoKc2VydmljZSBNc2cgewogIHJwYyBTdWJtaXRQcm9wb3NhbChNc2dTdWJtaXRQcm9wb3NhbCkgcmV0dXJucyAoTXNnU3VibWl0UHJvcG9zYWxSZXNwb25zZSk7Cn0KCi8vIE5vdGUgdGhhdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgdGhpcyB1c2VzIE1zZ1N1Ym1pdFByb3Bvc2FsIGFzIHRoZSByZXF1ZXN0Ci8vIHR5cGUgaW5zdGVhZCBvZiB0aGUgbW9yZSBjYW5vbmljYWwgTXNnU3VibWl0UHJvcG9zYWxSZXF1ZXN0Cm1lc3NhZ2UgTXNnU3VibWl0UHJvcG9zYWwgewogIGdvb2dsZS5wcm90b2J1Zi5BbnkgY29udGVudCA9IDE7CiAgc3RyaW5nIHByb3Bvc2VyID0gMjsKfQoKbWVzc2FnZSBNc2dTdWJtaXRQcm9wb3NhbFJlc3BvbnNlIHsKICB1aW50NjQgcHJvcG9zYWxfaWQ7Cn0K"}}),e._v(" "),o("p",[e._v("While this is most commonly used for gRPC, overloading protobuf "),o("code",[e._v("service")]),e._v(" definitions like this does not violate\nthe intent of the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf spec"),o("OutboundLink")],1),e._v(" which says:")]),e._v(" "),o("blockquote",[o("p",[e._v("If you don’t want to use gRPC, it’s also possible to use protocol buffers with your own RPC implementation.\nWith this approach, we would get an auto-generated "),o("code",[e._v("MsgServer")]),e._v(" interface:")])]),e._v(" "),o("p",[e._v("In addition to clearly specifying return types, this has the benefit of generating client and server code. On the server\nside, this is almost like an automatically generated keeper method and could maybe be used intead of keepers eventually\n(see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7093",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7093"),o("OutboundLink")],1),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBnb3YKCnR5cGUgTXNnU2VydmVyIGludGVyZmFjZSB7CiAgU3VibWl0UHJvcG9zYWwoY29udGV4dC5Db250ZXh0LCAqTXNnU3VibWl0UHJvcG9zYWwpICgqTXNnU3VibWl0UHJvcG9zYWxSZXNwb25zZSwgZXJyb3IpCn0K"}}),e._v(" "),o("p",[e._v("On the client side, developers could take advantage of this by creating RPC implementations that encapsulate transaction\nlogic. Protobuf libraries that use asynchronous callbacks, like "),o("a",{attrs:{href:"https://github.com/protobufjs/protobuf.js#using-services",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf.js"),o("OutboundLink")],1),e._v("\ncould use this to register callbacks for specific messages even for transactions that include multiple "),o("code",[e._v("Msg")]),e._v("s.")]),e._v(" "),o("p",[e._v("For backwards compatibility, existing "),o("code",[e._v("Msg")]),e._v(" types should be used as the request parameter\nfor "),o("code",[e._v("service")]),e._v(" definitions. Newer "),o("code",[e._v("Msg")]),e._v(" types which only support "),o("code",[e._v("service")]),e._v(" definitions\nshould use the more canonical "),o("code",[e._v("Msg...Request")]),e._v(" names.")]),e._v(" "),o("h3",{attrs:{id:"encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),o("p",[e._v("Currently, we are encoding "),o("code",[e._v("Msg")]),e._v("s as "),o("code",[e._v("Any")]),e._v(" in "),o("code",[e._v("Tx")]),e._v("s which involves packing the\nbinary-encoded "),o("code",[e._v("Msg")]),e._v(" with its type URL.")]),e._v(" "),o("p",[e._v("The type URL for "),o("code",[e._v("MsgSubmitProposal")]),e._v(" based on the proto3 spec is "),o("code",[e._v("/cosmos.gov.MsgSubmitProposal")]),e._v(".")]),e._v(" "),o("p",[e._v("The fully-qualified name for the "),o("code",[e._v("SubmitProposal")]),e._v(" service method above (also\nbased on the proto3 and gRPC specs) is "),o("code",[e._v("/cosmos.gov.Msg/SubmitProposal")]),e._v(" which varies\nby a single "),o("code",[e._v("/")]),e._v(" character. The generated "),o("code",[e._v(".pb.go")]),e._v(" files for protobuf "),o("code",[e._v("service")]),e._v("s\ninclude names of this form and any compliant protobuf/gRPC code generator will\ngenerate the same name.")]),e._v(" "),o("p",[e._v("In order to encode service methods in transactions, we encode them as "),o("code",[e._v("Any")]),e._v("s in\nthe same "),o("code",[e._v("TxBody.messages")]),e._v(" field as other "),o("code",[e._v("Msg")]),e._v("s. We simply set "),o("code",[e._v("Any.type_url")]),e._v("\nto the full-qualified method name (ex. "),o("code",[e._v("/cosmos.gov.Msg/SubmitProposal")]),e._v(") and\nset "),o("code",[e._v("Any.value")]),e._v(" to the protobuf encoding of the request message\n("),o("code",[e._v("MsgSubmitProposal")]),e._v(" in this case).")]),e._v(" "),o("h3",{attrs:{id:"decoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decoding"}},[e._v("#")]),e._v(" Decoding")]),e._v(" "),o("p",[e._v("When decoding, "),o("code",[e._v("TxBody.UnpackInterfaces")]),e._v(" will need a special case\nto detect if "),o("code",[e._v("Any")]),e._v(" type URLs match the service method format (ex. "),o("code",[e._v("/cosmos.gov.Msg/SubmitProposal")]),e._v(")\nby checking for two "),o("code",[e._v("/")]),e._v(" characters. Messages that are method names plus request parameters\ninstead of a normal "),o("code",[e._v("Any")]),e._v(" messages will get unpacked into the "),o("code",[e._v("ServiceMsg")]),e._v(" struct:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTZXJ2aWNlTXNnIHN0cnVjdCB7CiAgLy8gTWV0aG9kTmFtZSBpcyB0aGUgZnVsbHktcXVhbGlmaWVkIHNlcnZpY2UgbmFtZQogIE1ldGhvZE5hbWUgc3RyaW5nCiAgLy8gUmVxdWVzdCBpcyB0aGUgcmVxdWVzdCBwYXlsb2FkCiAgUmVxdWVzdCBNc2dSZXF1ZXN0Cn0K"}}),e._v(" "),o("h3",{attrs:{id:"routing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),o("p",[e._v("In the future, "),o("code",[e._v("service")]),e._v(" definitions may become the primary method for defining\n"),o("code",[e._v("Msg")]),e._v("s. As a starting point, we need to integrate with the SDK's existing routing\nand "),o("code",[e._v("Msg")]),e._v(" interface.")]),e._v(" "),o("p",[e._v("To do this, "),o("code",[e._v("ServiceMsg")]),e._v(" implements the "),o("code",[e._v("sdk.Msg")]),e._v(" interface and its handler does the\nactual method routing, allowing this feature to be added incrementally on top of\nexisting functionality.")]),e._v(" "),o("h3",{attrs:{id:"msgrequest-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#msgrequest-interface"}},[e._v("#")]),e._v(" "),o("code",[e._v("MsgRequest")]),e._v(" interface")]),e._v(" "),o("p",[e._v("All request messages will need to implement the "),o("code",[e._v("MsgRequest")]),e._v(" interface which is a\nsimplified version of "),o("code",[e._v("Msg")]),e._v(", without "),o("code",[e._v("Route()")]),e._v(", "),o("code",[e._v("Type()")]),e._v(" and "),o("code",[e._v("GetSignBytes()")]),e._v(" which\nare no longer needed:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dSZXF1ZXN0IGludGVyZmFjZSB7CiAgcHJvdG8uTWVzc2FnZQogIFZhbGlkYXRlQmFzaWMoKSBlcnJvcgogIEdldFNpZ25lcnMoKSBbXUFjY0FkZHJlc3MKfQo="}}),e._v(" "),o("p",[o("code",[e._v("ServiceMsg")]),e._v(" will forward its "),o("code",[e._v("ValidateBasic")]),e._v(" and "),o("code",[e._v("GetSigners")]),e._v(" methods to the "),o("code",[e._v("MsgRequest")]),e._v("\nmethods.")]),e._v(" "),o("h3",{attrs:{id:"module-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-configuration"}},[e._v("#")]),e._v(" Module Configuration")]),e._v(" "),o("p",[e._v("In "),o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")]),e._v(", we introduced a method "),o("code",[e._v("RegisterQueryService")]),e._v("\nto "),o("code",[e._v("AppModule")]),e._v(" which allows for modules to register gRPC queriers.")],1),e._v(" "),o("p",[e._v("To register "),o("code",[e._v("Msg")]),e._v(" services, we attempt a more extensible approach by converting "),o("code",[e._v("RegisterQueryService")]),e._v("\nto a more generic "),o("code",[e._v("RegisterServices")]),e._v(" method:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGUgaW50ZXJmYWNlIHsKICBSZWdpc3RlclNlcnZpY2VzKENvbmZpZ3VyYXRvcikKICAuLi4KfQoKdHlwZSBDb25maWd1cmF0b3IgaW50ZXJmYWNlIHsKICBRdWVyeVNlcnZlcigpIGdycGMuU2VydmVyCiAgTXNnU2VydmVyKCkgZ3JwYy5TZXJ2ZXIKfQoKLy8gZXhhbXBsZSBtb2R1bGU6CmZ1bmMgKGFtIEFwcE1vZHVsZSkgUmVnaXN0ZXJTZXJ2aWNlcyhjZmcgQ29uZmlndXJhdG9yKSB7Cgl0eXBlcy5SZWdpc3RlclF1ZXJ5U2VydmVyKGNmZy5RdWVyeVNlcnZlcigpLCBrZWVwZXIpCgl0eXBlcy5SZWdpc3Rlck1zZ1NlcnZlcihjZmcuTXNnU2VydmVyKCksIGtlZXBlcikKfQo="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RegisterServices")]),e._v(" method and the "),o("code",[e._v("Configurator")]),e._v(" interface are intended to\nevolve to satisfy the use cases discussed in "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7093",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7093"),o("OutboundLink")],1),e._v("\nand "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7421",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7122"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("Msg")]),e._v(" services are registered, the framework "),o("em",[e._v("should")]),e._v(" verify that all "),o("code",[e._v("Msg...Request")]),e._v(" types\nimplement the "),o("code",[e._v("MsgRequest")]),e._v(" interface described above and throw an error during initialization rather\nthan later when transactions are processed.")]),e._v(" "),o("h3",{attrs:{id:"msg-service-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#msg-service-implementation"}},[e._v("#")]),e._v(" "),o("code",[e._v("Msg")]),e._v(" Service Implementation")]),e._v(" "),o("p",[e._v("Just like query services, "),o("code",[e._v("Msg")]),e._v(" service methods can retrieve the "),o("code",[e._v("sdk.Context")]),e._v("\nfrom the "),o("code",[e._v("context.Context")]),e._v(" parameter method using the "),o("code",[e._v("sdk.UnwrapSDKContext")]),e._v("\nmethod:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBnb3YKCmZ1bmMgKGsgS2VlcGVyKSBTdWJtaXRQcm9wb3NhbChnb0N0eCBjb250ZXh0LkNvbnRleHQsIHBhcmFtcyAqdHlwZXMuTXNnU3VibWl0UHJvcG9zYWwpICgqTXNnU3VibWl0UHJvcG9zYWxSZXNwb25zZSwgZXJyb3IpIHsKCWN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCkKICAgIC4uLgp9Cg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("sdk.Context")]),e._v(" should have an "),o("code",[e._v("EventManager")]),e._v(" already attached by the "),o("code",[e._v("ServiceMsg")]),e._v("\nrouter.")]),e._v(" "),o("p",[e._v("Separate handler definition is no longer needed with this approach.")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("p",[e._v("This design changes how a module functionality is exposed and accessed. It deprecates the existing "),o("code",[e._v("Handler")]),e._v(" interface and "),o("code",[e._v("AppModule.Route")]),e._v(" in favor of "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffer Services"),o("OutboundLink")],1),e._v(" and Service Routing described above. This dramatically simplifies the code. We don't need to create handlers and keepers any more. Use of Protocol Buffer auto-generated clients clearly separates the communication interfaces between the module and a modules user. The control logic (aka handlers and keepers) is not exposed any more. A module interface can be seen as a black box accessible through a client API. It's worth to note that the client interfaces are also generated by Protocol Buffers.")]),e._v(" "),o("p",[e._v("This also allows us to change how we perform functional tests. Instead of mocking AppModules and Router, we will mock a client (server will stay hidden). More specifically: we will never mock "),o("code",[e._v("moduleA.MsgServer")]),e._v(" in "),o("code",[e._v("moduleB")]),e._v(", but rather "),o("code",[e._v("moduleA.MsgClient")]),e._v(". One can think about it as working with external services (eg DBs, or online servers...). We assume that the transmission between clients and servers is correctly handled by generated Protocol Buffers.")]),e._v(" "),o("p",[e._v('Finally, closing a module to client API opens desirable OCAP patterns discussed in ADR-033. Since server implementation and interface is hidden, nobody can hold "keepers"/servers and will be forced to relay on the client interface, which will drive developers for correct encapsulation and software engineering patterns.')]),e._v(" "),o("h3",{attrs:{id:"pros"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pros"}},[e._v("#")]),e._v(" Pros")]),e._v(" "),o("ul",[o("li",[e._v("communicates return type clearly")]),e._v(" "),o("li",[e._v("manual handler registration and return type marshaling is no longer needed, just implement the interface and register it")]),e._v(" "),o("li",[e._v("communication interface is automatically generated, the developer can now focus only on the state transition methods - this would improve the UX of "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7093",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7093"),o("OutboundLink")],1),e._v(" approach (1) if we chose to adopt that")]),e._v(" "),o("li",[e._v("generated client code could be useful for clients and tests")]),e._v(" "),o("li",[e._v("dramatically reduces and simplifies the code")])]),e._v(" "),o("h3",{attrs:{id:"cons"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cons"}},[e._v("#")]),e._v(" Cons")]),e._v(" "),o("ul",[o("li",[e._v("supporting both this and the current concrete "),o("code",[e._v("Msg")]),e._v(" type approach simultaneously could be confusing\n(we could choose to deprecate the current approach)")]),e._v(" "),o("li",[e._v("using "),o("code",[e._v("service")]),e._v(" definitions outside the context of gRPC could be confusing (but doesn’t violate the proto3 spec)")])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7122",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial Github Issue #7122"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("proto 3 Language Guide: Defining Services"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.google.com/document/d/1eEgYgvgZqLE45vETjhwIw4VOqK-5hwQtZtjVbiXnIGc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial pre-"),o("code",[e._v("Any")]),e._v(" "),o("code",[e._v("Msg")]),e._v(" designs"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR 020")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")])],1)])],1)}),[],!1,null,null,null);t.default=a.exports}}]);