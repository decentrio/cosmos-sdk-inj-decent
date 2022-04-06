(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{750:function(e,s,a){"use strict";a.r(s);var t=a(1),o=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-028-public-key-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-028-public-key-addresses"}},[e._v("#")]),e._v(" ADR 028: Public Key Addresses")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020/08/18: Initial version")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This ADR defines a canonical 20-byte address format for new public key algorithms, multisig public keys, and module\naccounts using string prefixes.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Issue "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/3685",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3685"),a("OutboundLink")],1),e._v(" identified that public key\naddress spaces are currently overlapping. One initial proposal was extending the address length and\nadding prefixes for different types of addresses.")]),e._v(" "),a("p",[e._v("@ethanfrey explained an alternate approach originally used in https://github.com/iov-one/weave:")]),e._v(" "),a("blockquote",[a("p",[e._v("I spent quite a bit of time thinking about this issue while building weave... The other cosmos Sdk.")])]),e._v(" "),a("blockquote",[a("p",[e._v("Basically I define a condition to be a type and format as human readable string with some binary data appended. This condition is hashed into an Address (again at 20 bytes). The use of this prefix makes it impossible to find a preimage for a given address with a different condition (eg ed25519 vs secp256k1).")])]),e._v(" "),a("blockquote",[a("p",[e._v("This is explained in depth here https://weave.readthedocs.io/en/latest/design/permissions.html")])]),e._v(" "),a("blockquote",[a("p",[e._v("And the code is here, look mainly at the top where we process conditions. https://github.com/iov-one/weave/blob/master/conditions.go")])]),e._v(" "),a("p",[e._v("And explained how this approach should be sufficiently collision resistant:")]),e._v(" "),a("blockquote",[a("p",[e._v("Yeah, AFAIK, 20 bytes should be collision resistance when the preimages are unique and not malleable. A space of 2^160 would expect some collision to be likely around 2^80 elements (birthday paradox). And if you want to find a collision for some existing element in the database, it is still 2^160. 2^80 only is if all these elements are written to state.")])]),e._v(" "),a("blockquote",[a("p",[e._v("The good example you brought up was eg. a public key bytes being a valid public key on two algorithms supported by the codec. Meaning if either was broken, you would break accounts even if they were secured with the safer variant. This is only as the issue when no differentiating type info is present in the preimage (before hashing into an address).")])]),e._v(" "),a("blockquote",[a("p",[e._v("I would like to hear an argument if the 20 bytes space is an actual issue for security, as I would be happy to increase my address sizes in weave. I just figured cosmos and ethereum and bitcoin all use 20 bytes, it should be good enough. And the arguments above which made me feel it was secure. But I have not done a deeper analysis.")])]),e._v(" "),a("p",[e._v("In discussions in "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5694",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5694"),a("OutboundLink")],1),e._v(", we agreed to go with an\napproach similar to this where essentially we take the first 20 bytes of the "),a("code",[e._v("sha256")]),e._v(" hash of\nthe key type concatenated with the key bytes, summarized as "),a("code",[e._v("Sha256(KeyTypePrefix || Keybytes)[:20]")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"legacy-public-key-addresses-don-t-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacy-public-key-addresses-don-t-change"}},[e._v("#")]),e._v(" Legacy Public Key Addresses Don't Change")]),e._v(" "),a("p",[a("code",[e._v("secp256k1")]),e._v(" and multisig public keys are currently in use in existing Cosmos SDK zones. They use the following\naddress formats:")]),e._v(" "),a("ul",[a("li",[e._v("secp256k1: "),a("code",[e._v("ripemd160(sha256(pk_bytes))[:20]")])]),e._v(" "),a("li",[e._v("legacy amino multisig: "),a("code",[e._v("sha256(aminoCdc.Marshal(pk))[:20]")])])]),e._v(" "),a("p",[e._v("We don't want to change existing addresses. So the addresses for these two key types will remain the same.")]),e._v(" "),a("p",[e._v('The current multisig public keys use amino serialization to generate the address. We will retain\nthose public keys and their address formatting, and call them "legacy amino" multisig public keys\nin protobuf. We will also create multisig public keys without amino addresses to be described below.')]),e._v(" "),a("h3",{attrs:{id:"canonical-address-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canonical-address-format"}},[e._v("#")]),e._v(" Canonical Address Format")]),e._v(" "),a("p",[e._v("We have three types of accounts we would like to create addresses for in the future:")]),e._v(" "),a("ul",[a("li",[e._v("regular public key addresses for new signature algorithms (ex. "),a("code",[e._v("sr25519")]),e._v(").")]),e._v(" "),a("li",[e._v("public key addresses for multisig public keys that don't use amino encoding")]),e._v(" "),a("li",[e._v("module accounts: basically any accounts which cannot sign transactions and\nwhich are managed internally by modules")])]),e._v(" "),a("p",[e._v("To address all of these use cases we propose the following basic "),a("code",[e._v("AddressHash")]),e._v(" function,\nbased on the discussions in "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5694",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5694"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBBZGRyZXNzSGFzaChwcmVmaXggc3RyaW5nLCBjb250ZW50cyBbXWJ5dGUpIFtdYnl0ZSB7CglwcmVJbWFnZSA6PSBbXWJ5dGUocHJlZml4KQoJaWYgbGVuKGNvbnRlbnRzKSAhPSAwIHsKCQlwcmVJbWFnZSA9IGFwcGVuZChwcmVJbWFnZSwgMCkKCQlwcmVJbWFnZSA9IGFwcGVuZChwcmVJbWFnZSwgY29udGVudHMuLi4pCgl9CglyZXR1cm4gc2hhMjU2LlN1bTI1NihwcmVJbWFnZSlbOjIwXQp9Cg=="}}),e._v(" "),a("p",[a("code",[e._v("AddressHash")]),e._v(" always take a string "),a("code",[e._v("prefix")]),e._v(" as a starting point which should represent the\ntype of public key (ex. "),a("code",[e._v("sr25519")]),e._v(") or module account being used (ex. "),a("code",[e._v("staking")]),e._v(" or "),a("code",[e._v("group")]),e._v(").\nFor public keys, the "),a("code",[e._v("contents")]),e._v(" parameter is used to specify the binary contents of the public\nkey. For module accounts, "),a("code",[e._v("contents")]),e._v(' can be left empty (for modules which don\'t manage "sub-accounts"),\nor can be some module-specific content to specify different pools (ex. '),a("code",[e._v("bonded")]),e._v(" or "),a("code",[e._v("not-bonded")]),e._v(" for "),a("code",[e._v("staking")]),e._v(")\nor managed accounts (ex. different accounts managed by the "),a("code",[e._v("group")]),e._v(" module).")]),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("preImage")]),e._v(", the byte value "),a("code",[e._v("0")]),e._v(" is used as the separator between "),a("code",[e._v("prefix")]),e._v(" and "),a("code",[e._v("contents")]),e._v(". This is a logical\nchoice given that "),a("code",[e._v("0")]),e._v(" is an invalid value for a string character and is commonly used as a null terminator.")]),e._v(" "),a("h3",{attrs:{id:"canonical-public-key-address-prefixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canonical-public-key-address-prefixes"}},[e._v("#")]),e._v(" Canonical Public Key Address Prefixes")]),e._v(" "),a("p",[e._v("All public key types will have a unique protobuf message type such as:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"cGFja2FnZSBjb3Ntb3MuY3J5cHRvLnNyMjU1MTk7CgptZXNzYWdlIFB1YktleSB7CiAgYnl0ZXMga2V5ID0gMTsKfQo="}}),e._v(" "),a("p",[e._v("All protobuf messages have unique fully qualified names, in this example "),a("code",[e._v("cosmos.crypto.sr25519.PubKey")]),e._v(".\nThese names are derived directly from .proto files in a standardized way and used\nin other places such as the type URL in "),a("code",[e._v("Any")]),e._v("s. Since there is an easy and obvious\nway to get this name for every protobuf type, we can use this message name as the\nkey type "),a("code",[e._v("prefix")]),e._v(" when creating addresses. For all basic public keys, "),a("code",[e._v("contents")]),e._v("\nshould just be the raw unencoded public key bytes.")]),e._v(" "),a("p",[e._v("Thus the canonical address for new public key types would be "),a("code",[e._v("AddressHash(proto.MessageName(pk), pk.Bytes)")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"multisig-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multisig-addresses"}},[e._v("#")]),e._v(" Multisig Addresses")]),e._v(" "),a("p",[e._v("For new multisig public keys, we define a custom address format not based on any encoding scheme\n(amino or protobuf). This avoids issues with non-determinism in the encoding scheme. It also\nensures that multisig public keys which differ simply in the ordering of keys have the same\naddress by sorting child public keys first.")]),e._v(" "),a("p",[e._v("First we define a proto message for multisig public keys:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"cGFja2FnZSBjb3Ntb3MuY3J5cHRvLm11bHRpc2lnOwoKbWVzc2FnZSBQdWJLZXkgewogIHVpbnQzMiB0aHJlc2hvbGQgPSAxOwogIHJlcGVhdGVkIGdvb2dsZS5wcm90b2J1Zi5BbnkgcHVibGljX2tleXMgPSAyOwp9Cg=="}}),e._v(" "),a("p",[e._v("We define the following "),a("code",[e._v("Address()")]),e._v(" function for this public key:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZnVuYyAobXVsdGlzaWcgUHViS2V5KSBBZGRyZXNzKCkgewogIC8vIGZpcnN0IGdhdGhlciBhbGwgdGhlIGFkZHJlc3NlcyBvZiBlYWNoIG5lc3RlZCBwdWJsaWMga2V5CiAgdmFyIGFkZHJlc3NlcyBbXVtdYnl0ZQogIGZvciBrZXkgOj0gcmFuZ2UgbXVsdGlzaWcuS2V5cyB7CiAgICBhZGRyZXNzZXMgPSBhcHBlbmQoam9pbmVkQWRkcmVzc2VzLCBrZXkuQWRkcmVzcygpKQogIH0KCiAgLy8gdGhlbiBzb3J0IHRoZW0gaW4gYXNjZW5kaW5nIG9yZGVyCiAgYWRkcmVzc2VzID0gU29ydChhZGRyZXNzZXMpCgogIC8vIHRoZW4gY29uY2F0ZW5hdGUgdGhlbSB0b2dldGhlcgogIHZhciBqb2luZWRBZGRyZXNzZXMgW11ieXRlCiAgZm9yIGFkZHIgOj0gcmFuZ2UgYWRkcmVzc2VzIHsKICAgIGpvaW5lZEFkZHJlc3NlcyA6PSBhcHBlbmQoam9pbmVkQWRkcmVzc2VzLCBhZGRyLi4uKQogIH0KCiAgLy8gZm9ybSB0aGUgc3RyaW5nIHByZWZpeCBmcm9tIHRoZSBtZXNzYWdlIG5hbWUgKGNvc21vcy5jcnlwdG8ubXVsdGlzaWcuUHViS2V5KSBhbmQgdGhlIHRocmVzaG9sZCBqb2luZWQgdG9nZXRoZXIKICBwcmVmaXggOj0gZm10LlNwcmludGYoJnF1b3Q7JXMvJWQmcXVvdDssIHByb3RvLk1lc3NhZ2VOYW1lKG11bHRpc2lnKSwgbXVsdGlzaWcuVGhyZXNob2xkKQoKICAvLyB1c2UgdGhlIHN0YW5kYXJkIEFkZHJlc3NIYXNoIGZ1bmN0aW9uCiAgcmV0dXJuIEFkZHJlc3NIYXNoKHByZWZpeCwgam9pbmVkQWRkcmVzc2VzKQp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("a simple algorithm for generating addresses for new public keys and module accounts")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("addresses do not communicate key type, a prefixed approach would have done this")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("protobuf message names are used as key type prefixes")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);s.default=o.exports}}]);