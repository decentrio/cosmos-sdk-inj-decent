(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{684:function(e,a,t){"use strict";t.r(a);var l=t(1),i=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-3-dynamic-capability-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-3-dynamic-capability-store"}},[e._v("#")]),e._v(" ADR 3: Dynamic Capability Store")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("12 December 2019: Initial version")]),e._v(" "),t("li",[e._v("02 April 2020: Memory Store Revisions")])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("Full implementation of the "),t("a",{attrs:{href:"https://github.com/cosmos/ibs",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC specification"),t("OutboundLink")],1),e._v(" requires the ability to create and authenticate object-capability keys at runtime (i.e., during transaction execution),\nas described in "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-005-port-allocation#technical-specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 5"),t("OutboundLink")],1),e._v(". In the IBC specification, capability keys are created for each newly initialised\nport & channel, and are used to authenticate future usage of the port or channel. Since channels and potentially ports can be initialised during transaction execution, the state machine must be able to create\nobject-capability keys at this time.")]),e._v(" "),t("p",[e._v("At present, the Cosmos SDK does not have the ability to do this. Object-capability keys are currently pointers (memory addresses) of "),t("code",[e._v("StoreKey")]),e._v(" structs created at application initialisation in "),t("code",[e._v("app.go")]),e._v(" ("),t("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/dcbddd9f04b3086c0ad07ee65de16e7adedc7da4/app/app.go#L132",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),t("OutboundLink")],1),e._v(")\nand passed to Keepers as fixed arguments ("),t("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/dcbddd9f04b3086c0ad07ee65de16e7adedc7da4/app/app.go#L160",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),t("OutboundLink")],1),e._v("). Keepers cannot create or store capability keys during transaction execution — although they could call "),t("code",[e._v("NewKVStoreKey")]),e._v(" and take the memory address\nof the returned struct, storing this in the Merklised store would result in a consensus fault, since the memory address will be different on each machine (this is intentional — were this not the case, the keys would be predictable and couldn't serve as object capabilities).")]),e._v(" "),t("p",[e._v("Keepers need a way to keep a private map of store keys which can be altered during transaction execution, along with a suitable mechanism for regenerating the unique memory addresses (capability keys) in this map whenever the application is started or restarted, along with a mechanism to revert capability creation on tx failure.\nThis ADR proposes such an interface & mechanism.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("The Cosmos SDK will include a new "),t("code",[e._v("CapabilityKeeper")]),e._v(" abstraction, which is responsible for provisioning,\ntracking, and authenticating capabilities at runtime. During application initialisation in "),t("code",[e._v("app.go")]),e._v(",\nthe "),t("code",[e._v("CapabilityKeeper")]),e._v(" will be hooked up to modules through unique function references\n(by calling "),t("code",[e._v("ScopeToModule")]),e._v(", defined below) so that it can identify the calling module when later\ninvoked.")]),e._v(" "),t("p",[e._v("When the initial state is loaded from disk, the "),t("code",[e._v("CapabilityKeeper")]),e._v("'s "),t("code",[e._v("Initialise")]),e._v(" function will create\nnew capability keys for all previously allocated capability identifiers (allocated during execution of\npast transactions and assigned to particular modes), and keep them in a memory-only store while the\nchain is running.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("CapabilityKeeper")]),e._v(" will include a persistent "),t("code",[e._v("KVStore")]),e._v(", a "),t("code",[e._v("MemoryStore")]),e._v(", and an in-memory map.\nThe persistent "),t("code",[e._v("KVStore")]),e._v(" tracks which capability is owned by which modules.\nThe "),t("code",[e._v("MemoryStore")]),e._v(" stores a forward mapping that map from module name, capability tuples to capability names and\na reverse mapping that map from module name, capability name to the capability index.\nSince we cannot marshal the capability into a "),t("code",[e._v("KVStore")]),e._v(" and unmarshal without changing the memory location of the capability,\nthe reverse mapping in the KVStore will simply map to an index. This index can then be used as a key in the ephemeral\ngo-map to retrieve the capability at the original memory location.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("CapabilityKeeper")]),e._v(" will define the following types & functions:")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Capability")]),e._v(" is similar to "),t("code",[e._v("StoreKey")]),e._v(", but has a globally unique "),t("code",[e._v("Index()")]),e._v(" instead of\na name. A "),t("code",[e._v("String()")]),e._v(" method is provided for debugging.")]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("Capability")]),e._v(" is simply a struct, the address of which is taken for the actual capability.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBDYXBhYmlsaXR5IHN0cnVjdCB7CiAgaW5kZXggdWludDY0Cn0K"}}),e._v(" "),t("p",[e._v("A "),t("code",[e._v("CapabilityKeeper")]),e._v(" contains a persistent store key, memory store key, and mapping of allocated module names.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBDYXBhYmlsaXR5S2VlcGVyIHN0cnVjdCB7CiAgcGVyc2lzdGVudEtleSBTdG9yZUtleQogIG1lbUtleSAgICAgICAgU3RvcmVLZXkKICBjYXBNYXAgICAgICAgIG1hcFt1aW50NjRdKkNhcGFiaWxpdHkKICBtb2R1bGVOYW1lcyAgIG1hcFtzdHJpbmddaW50ZXJmYWNle30KICBzZWFsZWQgICAgICAgIGJvb2wKfQo="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("CapabilityKeeper")]),e._v(" provides the ability to create "),t("em",[e._v("scoped")]),e._v(" sub-keepers which are tied to a\nparticular module name. These "),t("code",[e._v("ScopedCapabilityKeeper")]),e._v("s must be created at application initialisation\nand passed to modules, which can then use them to claim capabilities they receive and retrieve\ncapabilities which they own by name, in addition to creating new capabilities & authenticating capabilities\npassed by other modules.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBTY29wZWRDYXBhYmlsaXR5S2VlcGVyIHN0cnVjdCB7CiAgcGVyc2lzdGVudEtleSBTdG9yZUtleQogIG1lbUtleSAgICAgICAgU3RvcmVLZXkKICBjYXBNYXAgICAgICAgIG1hcFt1aW50NjRdKkNhcGFiaWxpdHkKICBtb2R1bGVOYW1lICAgIHN0cmluZwp9Cg=="}}),e._v(" "),t("p",[t("code",[e._v("ScopeToModule")]),e._v(" is used to create a scoped sub-keeper with a particular name, which must be unique.\nIt MUST be called before "),t("code",[e._v("InitialiseAndSeal")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoY2sgQ2FwYWJpbGl0eUtlZXBlcikgU2NvcGVUb01vZHVsZShtb2R1bGVOYW1lIHN0cmluZykgU2NvcGVkQ2FwYWJpbGl0eUtlZXBlciB7CglpZiBrLnNlYWxlZCB7CgkJcGFuaWMoJnF1b3Q7Y2Fubm90IHNjb3BlIHRvIG1vZHVsZSB2aWEgYSBzZWFsZWQgY2FwYWJpbGl0eSBrZWVwZXImcXVvdDspCgl9CgoJaWYgXywgb2sgOj0gay5zY29wZWRNb2R1bGVzW21vZHVsZU5hbWVdOyBvayB7CgkJcGFuaWMoZm10LlNwcmludGYoJnF1b3Q7Y2Fubm90IGNyZWF0ZSBtdWx0aXBsZSBzY29wZWQga2VlcGVycyBmb3IgdGhlIHNhbWUgbW9kdWxlIG5hbWU6ICVzJnF1b3Q7LCBtb2R1bGVOYW1lKSkKCX0KCglrLnNjb3BlZE1vZHVsZXNbbW9kdWxlTmFtZV0gPSBzdHJ1Y3R7fXt9CgoJcmV0dXJuIFNjb3BlZEtlZXBlcnsKCQljZGM6ICAgICAgay5jZGMsCgkJc3RvcmVLZXk6IGsuc3RvcmVLZXksCgkJbWVtS2V5OiAgIGsubWVtS2V5LAoJCWNhcE1hcDogICBrLmNhcE1hcCwKCQltb2R1bGU6ICAgbW9kdWxlTmFtZSwKCX0KfQo="}}),e._v(" "),t("p",[t("code",[e._v("InitialiseAndSeal")]),e._v(" MUST be called exactly once, after loading the initial state and creating all\nnecessary "),t("code",[e._v("ScopedCapabilityKeeper")]),e._v("s, in order to populate the memory store with newly-created\ncapability keys in accordance with the keys previously claimed by particular modules and prevent the\ncreation of any new "),t("code",[e._v("ScopedCapabilityKeeper")]),e._v("s.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoY2sgQ2FwYWJpbGl0eUtlZXBlcikgSW5pdGlhbGlzZUFuZFNlYWwoY3R4IENvbnRleHQpIHsKICBpZiBjay5zZWFsZWQgewogICAgcGFuaWMoJnF1b3Q7Y2FwYWJpbGl0eSBrZWVwZXIgaXMgc2VhbGVkJnF1b3Q7KQogIH0KCiAgcGVyc2lzdGVudFN0b3JlIDo9IGN0eC5LVlN0b3JlKGNrLnBlcnNpc3RlbnRLZXkpCiAgbWFwIDo9IGN0eC5LVlN0b3JlKGNrLm1lbUtleSkKICAKICAvLyBpbml0aWFsaXNlIG1lbW9yeSBzdG9yZSBmb3IgYWxsIG5hbWVzIGluIHBlcnNpc3RlbnQgc3RvcmUKICBmb3IgaW5kZXgsIHZhbHVlIDo9IHJhbmdlIHBlcnNpc3RlbnRTdG9yZS5JdGVyKCkgewogICAgY2FwYWJpbGl0eSA9ICZhbXA7Q2FwYWJpbGl0eUtleXtpbmRleDogaW5kZXh9CgogICAgZm9yIG1vZHVsZUFuZENhcGFiaWxpdHkgOj0gcmFuZ2UgdmFsdWUgewogICAgICBtb2R1bGVOYW1lLCBjYXBhYmlsaXR5TmFtZSA6PSBtb2R1bGVBbmRDYXBhYmlsaXR5LlNwbGl0KCZxdW90Oy8mcXVvdDspCiAgICAgIG1lbVN0b3JlLlNldChtb2R1bGVOYW1lICsgJnF1b3Q7L2Z3ZC8mcXVvdDsgKyBjYXBhYmlsaXR5LCBjYXBhYmlsaXR5TmFtZSkKICAgICAgbWVtU3RvcmUuU2V0KG1vZHVsZU5hbWUgKyAmcXVvdDsvcmV2LyZxdW90OyArIGNhcGFiaWxpdHlOYW1lLCBpbmRleCkKCiAgICAgIGNrLmNhcE1hcFtpbmRleF0gPSBjYXBhYmlsaXR5CiAgICB9CiAgfQoKICBjay5zZWFsZWQgPSB0cnVlCn0K"}}),e._v(" "),t("p",[t("code",[e._v("NewCapability")]),e._v(" can be called by any module to create a new unique, unforgeable object-capability\nreference. The newly created capability is automatically persisted; the calling module need not\ncall "),t("code",[e._v("ClaimCapability")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoc2NrIFNjb3BlZENhcGFiaWxpdHlLZWVwZXIpIE5ld0NhcGFiaWxpdHkoY3R4IENvbnRleHQsIG5hbWUgc3RyaW5nKSAoQ2FwYWJpbGl0eSwgZXJyb3IpIHsKICAvLyBjaGVjayBuYW1lIG5vdCB0YWtlbiBpbiBtZW1vcnkgc3RvcmUKICBpZiBjYXBTdG9yZS5HZXQoJnF1b3Q7cmV2LyZxdW90OyArIG5hbWUpICE9IG5pbCB7CiAgICByZXR1cm4gbmlsLCBlcnJvcnMuTmV3KCZxdW90O25hbWUgYWxyZWFkeSB0YWtlbiZxdW90OykKICB9CgogIC8vIGZldGNoIHRoZSBjdXJyZW50IGluZGV4CiAgaW5kZXggOj0gcGVyc2lzdGVudFN0b3JlLkdldCgmcXVvdDtpbmRleCZxdW90OykKICAKICAvLyBjcmVhdGUgYSBuZXcgY2FwYWJpbGl0eQogIGNhcGFiaWxpdHkgOj0gJmFtcDtDYXBhYmlsaXR5S2V5e2luZGV4OiBpbmRleH0KICAKICAvLyBzZXQgcGVyc2lzdGVudCBzdG9yZQogIHBlcnNpc3RlbnRTdG9yZS5TZXQoaW5kZXgsIFNldC5zaW5nbGV0b24oc2NrLm1vZHVsZU5hbWUgKyAmcXVvdDsvJnF1b3Q7ICsgbmFtZSkpCiAgCiAgLy8gdXBkYXRlIHRoZSBpbmRleAogIGluZGV4KysKICBwZXJzaXN0ZW50U3RvcmUuU2V0KCZxdW90O2luZGV4JnF1b3Q7LCBpbmRleCkKICAKICAvLyBzZXQgZm9yd2FyZCBtYXBwaW5nIGluIG1lbW9yeSBzdG9yZSBmcm9tIGNhcGFiaWxpdHkgdG8gbmFtZQogIG1lbVN0b3JlLlNldChzY2subW9kdWxlTmFtZSArICZxdW90Oy9md2QvJnF1b3Q7ICsgY2FwYWJpbGl0eSwgbmFtZSkKICAKICAvLyBzZXQgcmV2ZXJzZSBtYXBwaW5nIGluIG1lbW9yeSBzdG9yZSBmcm9tIG5hbWUgdG8gaW5kZXgKICBtZW1TdG9yZS5TZXQoc2NrLm1vZHVsZU5hbWUgKyAmcXVvdDsvcmV2LyZxdW90OyArIG5hbWUsIGluZGV4KQoKICAvLyBzZXQgdGhlIGluLW1lbW9yeSBtYXBwaW5nIGZyb20gaW5kZXggdG8gY2FwYWJpbGl0eSBwb2ludGVyCiAgY2FwTWFwW2luZGV4XSA9IGNhcGFiaWxpdHkKICAKICAvLyByZXR1cm4gdGhlIG5ld2x5IGNyZWF0ZWQgY2FwYWJpbGl0eQogIHJldHVybiBjYXBhYmlsaXR5Cn0K"}}),e._v(" "),t("p",[t("code",[e._v("AuthenticateCapability")]),e._v(" can be called by any module to check that a capability\ndoes in fact correspond to a particular name (the name can be untrusted user input)\nwith which the calling module previously associated it.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoc2NrIFNjb3BlZENhcGFiaWxpdHlLZWVwZXIpIEF1dGhlbnRpY2F0ZUNhcGFiaWxpdHkobmFtZSBzdHJpbmcsIGNhcGFiaWxpdHkgQ2FwYWJpbGl0eSkgYm9vbCB7CiAgLy8gcmV0dXJuIHdoZXRoZXIgZm9yd2FyZCBtYXBwaW5nIGluIG1lbW9yeSBzdG9yZSBtYXRjaGVzIG5hbWUKICByZXR1cm4gbWVtU3RvcmUuR2V0KHNjay5tb2R1bGVOYW1lICsgJnF1b3Q7L2Z3ZC8mcXVvdDsgKyBjYXBhYmlsaXR5KSA9PT0gbmFtZQp9Cg=="}}),e._v(" "),t("p",[t("code",[e._v("ClaimCapability")]),e._v(" allows a module to claim a capability key which it has received from another module\nso that future "),t("code",[e._v("GetCapability")]),e._v(" calls will succeed.")]),e._v(" "),t("p",[t("code",[e._v("ClaimCapability")]),e._v(" MUST be called if a module which receives a capability wishes to access it by name\nin the future. Capabilities are multi-owner, so if multiple modules have a single "),t("code",[e._v("Capability")]),e._v(" reference,\nthey will all own it.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoc2NrIFNjb3BlZENhcGFiaWxpdHlLZWVwZXIpIENsYWltQ2FwYWJpbGl0eShjdHggQ29udGV4dCwgY2FwYWJpbGl0eSBDYXBhYmlsaXR5LCBuYW1lIHN0cmluZykgZXJyb3IgewogIHBlcnNpc3RlbnRTdG9yZSA6PSBjdHguS1ZTdG9yZShzY2sucGVyc2lzdGVudEtleSkKCiAgLy8gc2V0IGZvcndhcmQgbWFwcGluZyBpbiBtZW1vcnkgc3RvcmUgZnJvbSBjYXBhYmlsaXR5IHRvIG5hbWUKICBtZW1TdG9yZS5TZXQoc2NrLm1vZHVsZU5hbWUgKyAmcXVvdDsvZndkLyZxdW90OyArIGNhcGFiaWxpdHksIG5hbWUpCgogIC8vIHNldCByZXZlcnNlIG1hcHBpbmcgaW4gbWVtb3J5IHN0b3JlIGZyb20gbmFtZSB0byBjYXBhYmlsaXR5CiAgbWVtU3RvcmUuU2V0KHNjay5tb2R1bGVOYW1lICsgJnF1b3Q7L3Jldi8mcXVvdDsgKyBuYW1lLCBjYXBhYmlsaXR5KQoKICAvLyB1cGRhdGUgb3duZXIgc2V0IGluIHBlcnNpc3RlbnQgc3RvcmUKICBvd25lcnMgOj0gcGVyc2lzdGVudFN0b3JlLkdldChjYXBhYmlsaXR5LkluZGV4KCkpCiAgb3duZXJzLmFkZChzY2subW9kdWxlTmFtZSArICZxdW90Oy8mcXVvdDsgKyBuYW1lKQogIHBlcnNpc3RlbnRTdG9yZS5TZXQoY2FwYWJpbGl0eS5JbmRleCgpLCBvd25lcnMpCn0K"}}),e._v(" "),t("p",[t("code",[e._v("GetCapability")]),e._v(" allows a module to fetch a capability which it has previously claimed by name.\nThe module is not allowed to retrieve capabilities which it does not own.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoc2NrIFNjb3BlZENhcGFiaWxpdHlLZWVwZXIpIEdldENhcGFiaWxpdHkoY3R4IENvbnRleHQsIG5hbWUgc3RyaW5nKSAoQ2FwYWJpbGl0eSwgZXJyb3IpIHsKICAvLyBmZXRjaCB0aGUgaW5kZXggb2YgY2FwYWJpbGl0eSB1c2luZyByZXZlcnNlIG1hcHBpbmcgaW4gbWVtc3RvcmUKICBpbmRleCA6PSBtZW1TdG9yZS5HZXQoc2NrLm1vZHVsZU5hbWUgKyAmcXVvdDsvcmV2LyZxdW90OyArIG5hbWUpCgogIC8vIGZldGNoIGNhcGFiaWxpdHkgZnJvbSBnby1tYXAgdXNpbmcgaW5kZXgKICBjYXBhYmlsaXR5IDo9IGNhcE1hcFtpbmRleF0KCiAgLy8gcmV0dXJuIHRoZSBjYXBhYmlsaXR5CiAgcmV0dXJuIGNhcGFiaWxpdHkKfQo="}}),e._v(" "),t("p",[t("code",[e._v("ReleaseCapability")]),e._v(" allows a module to release a capability which it had previously claimed. If no\nmore owners exist, the capability will be deleted globally.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoc2NrIFNjb3BlZENhcGFiaWxpdHlLZWVwZXIpIFJlbGVhc2VDYXBhYmlsaXR5KGN0eCBDb250ZXh0LCBjYXBhYmlsaXR5IENhcGFiaWxpdHkpIGVyciB7CiAgcGVyc2lzdGVudFN0b3JlIDo9IGN0eC5LVlN0b3JlKHNjay5wZXJzaXN0ZW50S2V5KQoKICBuYW1lIDo9IGNhcFN0b3JlLkdldChzY2subW9kdWxlTmFtZSArICZxdW90Oy9md2QvJnF1b3Q7ICsgY2FwYWJpbGl0eSkKICBpZiBuYW1lID09IG5pbCB7CiAgICByZXR1cm4gZXJyb3IoJnF1b3Q7Y2FwYWJpbGl0eSBub3Qgb3duZWQgYnkgbW9kdWxlJnF1b3Q7KQogIH0KCiAgLy8gZGVsZXRlIGZvcndhcmQgbWFwcGluZyBpbiBtZW1vcnkgc3RvcmUKICBtZW1vcnlTdG9yZS5EZWxldGUoc2NrLm1vZHVsZU5hbWUgKyAmcXVvdDsvZndkLyZxdW90OyArIGNhcGFiaWxpdHksIG5hbWUpCgogIC8vIGRlbGV0ZSByZXZlcnNlIG1hcHBpbmcgaW4gbWVtb3J5IHN0b3JlCiAgbWVtb3J5U3RvcmUuRGVsZXRlKHNjay5tb2R1bGVOYW1lICsgJnF1b3Q7L3Jldi8mcXVvdDsgKyBuYW1lLCBjYXBhYmlsaXR5KQoKICAvLyB1cGRhdGUgb3duZXIgc2V0IGluIHBlcnNpc3RlbnQgc3RvcmUKICBvd25lcnMgOj0gcGVyc2lzdGVudFN0b3JlLkdldChjYXBhYmlsaXR5LkluZGV4KCkpCiAgb3duZXJzLnJlbW92ZShzY2subW9kdWxlTmFtZSArICZxdW90Oy8mcXVvdDsgKyBuYW1lKQogIGlmIG93bmVycy5zaXplKCkgJmd0OyAwIHsKICAgIC8vIHRoZXJlIGFyZSBzdGlsbCBvdGhlciBvd25lcnMsIGtlZXAgdGhlIGNhcGFiaWxpdHkgYXJvdW5kCiAgICBwZXJzaXN0ZW50U3RvcmUuU2V0KGNhcGFiaWxpdHkuSW5kZXgoKSwgb3duZXJzKQogIH0gZWxzZSB7CiAgICAvLyBubyBtb3JlIG93bmVycywgZGVsZXRlIHRoZSBjYXBhYmlsaXR5CiAgICBwZXJzaXN0ZW50U3RvcmUuRGVsZXRlKGNhcGFiaWxpdHkuSW5kZXgoKSkKICAgIGRlbGV0ZShjYXBNYXBbY2FwYWJpbGl0eS5JbmRleCgpXSkKICB9Cn0K"}}),e._v(" "),t("h3",{attrs:{id:"usage-patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-patterns"}},[e._v("#")]),e._v(" Usage patterns")]),e._v(" "),t("h4",{attrs:{id:"initialisation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialisation"}},[e._v("#")]),e._v(" Initialisation")]),e._v(" "),t("p",[e._v("Any modules which use dynamic capabilities must be provided a "),t("code",[e._v("ScopedCapabilityKeeper")]),e._v(" in "),t("code",[e._v("app.go")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Y2sgOj0gTmV3Q2FwYWJpbGl0eUtlZXBlcihwZXJzaXN0ZW50S2V5LCBtZW1vcnlLZXkpCm1vZDFLZWVwZXIgOj0gTmV3TW9kMUtlZXBlcihjay5TY29wZVRvTW9kdWxlKCZxdW90O21vZDEmcXVvdDspLCAuLi4uKQptb2QyS2VlcGVyIDo9IE5ld01vZDJLZWVwZXIoY2suU2NvcGVUb01vZHVsZSgmcXVvdDttb2QyJnF1b3Q7KSwgLi4uLikKCi8vIG90aGVyIGluaXRpYWxpc2F0aW9uIGxvZ2ljIC4uLgoKLy8gbG9hZCBpbml0aWFsIHN0YXRlLi4uCgpjay5Jbml0aWFsaXNlQW5kU2VhbChpbml0aWFsQ29udGV4dCkK"}}),e._v(" "),t("h4",{attrs:{id:"creating-passing-claiming-and-using-capabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-passing-claiming-and-using-capabilities"}},[e._v("#")]),e._v(" Creating, passing, claiming and using capabilities")]),e._v(" "),t("p",[e._v("Consider the case where "),t("code",[e._v("mod1")]),e._v(" wants to create a capability, associate it with a resource (e.g. an IBC channel) by name, then pass it to "),t("code",[e._v("mod2")]),e._v(" which will use it later:")]),e._v(" "),t("p",[e._v("Module 1 would have the following code:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Y2FwYWJpbGl0eSA6PSBzY29wZWRDYXBhYmlsaXR5S2VlcGVyLk5ld0NhcGFiaWxpdHkoY3R4LCAmcXVvdDtyZXNvdXJjZUFCQyZxdW90OykKbW9kMktlZXBlci5Tb21lRnVuY3Rpb24oY3R4LCBjYXBhYmlsaXR5LCBhcmdzLi4uKQo="}}),e._v(" "),t("p",[t("code",[e._v("SomeFunction")]),e._v(", running in module 2, could then claim the capability:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoayBNb2QyS2VlcGVyKSBTb21lRnVuY3Rpb24oY3R4IENvbnRleHQsIGNhcGFiaWxpdHkgQ2FwYWJpbGl0eSkgewogIGsuc2NrLkNsYWltQ2FwYWJpbGl0eShjdHgsIGNhcGFiaWxpdHksICZxdW90O3Jlc291cmNlQUJDJnF1b3Q7KQogIC8vIG90aGVyIGxvZ2ljLi4uCn0K"}}),e._v(" "),t("p",[e._v("Later on, module 2 can retrieve that capability by name and pass it to module 1, which will authenticate it against the resource:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoayBNb2QyS2VlcGVyKSBTb21lT3RoZXJGdW5jdGlvbihjdHggQ29udGV4dCwgbmFtZSBzdHJpbmcpIHsKICBjYXBhYmlsaXR5IDo9IGsuc2NrLkdldENhcGFiaWxpdHkoY3R4LCBuYW1lKQogIG1vZDEuVXNlUmVzb3VyY2UoY3R4LCBjYXBhYmlsaXR5LCAmcXVvdDtyZXNvdXJjZUFCQyZxdW90OykKfQo="}}),e._v(" "),t("p",[e._v("Module 1 will then check that this capability key is authenticated to use the resource before allowing module 2 to use it:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoayBNb2QxS2VlcGVyKSBVc2VSZXNvdXJjZShjdHggQ29udGV4dCwgY2FwYWJpbGl0eSBDYXBhYmlsaXR5LCByZXNvdXJjZSBzdHJpbmcpIHsKICBpZiAhay5zY2suQXV0aGVudGljYXRlQ2FwYWJpbGl0eShuYW1lLCBjYXBhYmlsaXR5KSB7CiAgICByZXR1cm4gZXJyb3JzLk5ldygmcXVvdDt1bmF1dGhlbnRpY2F0ZWQmcXVvdDspCiAgfQogIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNvdXJjZQp9Cg=="}}),e._v(" "),t("p",[e._v("If module 2 passed the capability key to module 3, module 3 could then claim it and call module 1 just like module 2 did\n(in which case module 1, module 2, and module 3 would all be able to use this capability).")]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Proposed.")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("Dynamic capability support.")]),e._v(" "),t("li",[e._v("Allows CapabilityKeeper to return same capability pointer from go-map while reverting any writes to the persistent "),t("code",[e._v("KVStore")]),e._v(" and in-memory "),t("code",[e._v("MemoryStore")]),e._v(" on tx failure.")])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[e._v("Requires an additional keeper.")]),e._v(" "),t("li",[e._v("Some overlap with existing "),t("code",[e._v("StoreKey")]),e._v(" system (in the future they could be combined, since this is a superset functionality-wise).")]),e._v(" "),t("li",[e._v("Requires an extra level of indirection in the reverse mapping, since MemoryStore must map to index which must then be used as key in a go map to retrieve the actual capability")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("p",[e._v("(none known)")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/5230#discussion_r343978513",target:"_blank",rel:"noopener noreferrer"}},[e._v("Original discussion"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);