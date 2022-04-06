(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{834:function(l,d,g){"use strict";g.r(d);var a=g(1),G=Object(a.a)({},(function(){var l=this,d=l.$createElement,g=l._self._c||d;return g("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[g("h1",{attrs:{id:"changes-to-make"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-make"}},[l._v("#")]),l._v(" Changes to make")]),l._v(" "),g("h2",{attrs:{id:"validator-self-unbonding-which-exceed-minimum-self-delegation-could-be-required-to-start-instantly"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#validator-self-unbonding-which-exceed-minimum-self-delegation-could-be-required-to-start-instantly"}},[l._v("#")]),l._v(" Validator self-unbonding (which exceed minimum self delegation) could be required to start instantly")]),l._v(" "),g("p",[l._v("Cases that trigger unbonding process")]),l._v(" "),g("ul",[g("li",[l._v("Validator undelegate can unbond more tokens than his minimum_self_delegation and it will automatically turn the validator into unbonding\nIn this case, unbonding should start instantly.")]),l._v(" "),g("li",[l._v("Validator miss blocks and get slashed")]),l._v(" "),g("li",[l._v("Validator get slashed for double sign")])]),l._v(" "),g("p",[g("strong",[l._v("Note:")]),l._v(" When a validator begins the unbonding process, it could be required to turn the validator into unbonding state instantly.\nThis is different than a specific delegator beginning to unbond. A validator beginning to unbond means that it's not in the set any more.\nA delegator unbonding from a validator removes their delegation from the validator.")]),l._v(" "),g("h2",{attrs:{id:"pending-development"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#pending-development"}},[l._v("#")]),l._v(" Pending development")]),l._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2hhbmdlcyB0byBtYWtlCi8vIOKAlCBJbXBsZW1lbnQgY29ycmVjdCBuZXh0IGVwb2NoIHRpbWUgY2FsY3VsYXRpb24KLy8g4oCUIEZvciB2YWxpZGF0b3Igc2VsZiB1bmRlbGVnYXRpb24sIGl0IGNvdWxkIGJlIHJlcXVpcmVkIHRvIGRvIHN0YXJ0IG9uIGVuZCBibG9ja2VyCi8vIOKAlCBJbXBsZW1lbnQgVE9ET3Mgb24gdGhlIFBSICM0NgovLyBJbXBsZW1lbnQgQ0xJIGNvbW1hbmRzIGZvciBxdWVyeWluZwovLyDigJQgQnVmZmVyZWRWYWxpZGF0b3JzCi8vIOKAlCBCdWZmZXJlZE1zZ0NyZWF0ZVZhbGlkYXRvclF1ZXVlLCBCdWZmZXJlZE1zZ0VkaXRWYWxpZGF0b3JRdWV1ZQovLyDigJQgQnVmZmVyZWRNc2dVbmphaWxRdWV1ZSwgQnVmZmVyZWRNc2dEZWxlZ2F0ZVF1ZXVlLCBCdWZmZXJlZE1zZ1JlZGVsZWdhdGlvblF1ZXVlLCBCdWZmZXJlZE1zZ1VuZGVsZWdhdGVRdWV1ZQovLyBXcml0ZSBlcG9jaCByZWxhdGVkIHRlc3RzIHdpdGggbmV3IHNjZW5hcmlvcwovLyDigJQgU2ltdWxhdGlvbiB0ZXN0IGlzIGltcG9ydGFudCBmb3IgZmluZGluZyBidWdzIFtBc2sgRGV2IGZvciBxdWVzdGlvbnMpCi8vIOKAlCBDYW4gZWFzaWx5IGFkZCBhIHNpbXVsYXRvciBjaGVjayB0byBtYWtlIHN1cmUgYWxsIGRlbGVnYXRpb24gYW1vdW50cyBpbiBxdWV1ZSBhZGQgdXAgdG8gdGhlIHNhbWUgYW1vdW50IHRoYXTigJlzIGluIHRoZSBFcG9jaFVuYm9uZGVkUG9vbAovLyDigJQgSeKAmWQgbGlrZSBpdCBhZGRlZCBhcyBhbiBpbnZhcmlhbnQgdGVzdCBmb3IgdGhlIHNpbXVsYXRvcgovLyDigJQgdGhlIHNpbXVsYXRvciBzaG91bGQgY2hlY2sgdGhhdCB0aGUgc3VtIG9mIGFsbCB0aGUgcXVldWVkIGRlbGVnYXRpb25zIGFsd2F5cyBlcXVhbHMgdGhlIGFtb3VudCBrZXB0IHRyYWNrIGluIHRoZSBkYXRhCi8vIOKAlCBTdGFraW5nL1NsYXNoaW5nL0Rpc3RyaWJ1dGlvbiBtb2R1bGUgcGFyYW1zIGFyZSBiZWluZyBtb2RpZmllZCBieSBnb3Zlcm5hbmNlIGJhc2VkIG9uIHZvdGUgcmVzdWx0IGluc3RhbnRseS4gV2Ugc2hvdWxkIHRlc3QgdGhlIGVmZmVjdC4KLy8g4oCUIOKAlCBTaG91bGQgdGVzdCB0byBzZWUgd2hhdCB3b3VsZCBoYXBwZW4gaWYgbWF4X3ZhbGlkYXRvcnMgaXMgY2hhbmdlZCB0aG91Z2gsIGluIHRoZSBtaWRkbGUgb2YgYW4gZXBvY2gKLy8g4oCUIHdlIHNob3VsZCBkZWZpbmUgc29tZSBuZXcgaW52YXJpYW50cyB0aGF0IGhlbHAgY2hlY2sgdGhhdCBldmVyeXRoaW5nIGlzIHdvcmtpbmcgc21vb3RobHkgd2l0aCB0aGVzZSBuZXcgY2hhbmdlcyBmb3IgMyBtb2R1bGVzIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvbWFzdGVyL3gvc3Rha2luZy9rZWVwZXIvaW52YXJpYW50cy5nbwovLyDigJQg4oCUIFdpdGhpbiBFcG9jaCwgVmFsaWRhdGlvblBvd2VyID0gVmFsaWRhdGlvblBvd2VyIC0gU2xhc2hBbW91bnQKLy8g4oCUIOKAlCBXaGVuIGVwb2NoIGFjdGlvbnMgcXVldWUgaXMgZW1wdHksIEVwb2NoRGVsZWdhdGlvblBvb2wgYmFsYW5jZSBzaG91bGQgYmUgemVybwovLyDigJQgd2Ugc2hvdWxkIGNvdW50IGFsbCB0aGUgZGVsZWdhdGlvbiBjaGFuZ2VzIHRoYXQgaGFwcGVuIGR1cmluZyB0aGUgZXBvY2gsIGFuZCB0aGVuIG1ha2Ugc3VyZSB0aGF0IHRoZSByZXN1bHRpbmcgY2hhbmdlIGF0IHRoZSBlbmQgb2YgdGhlIGVwb2NoIGlzIGFjdHVhbGx5IGNvcnJlY3QKLy8g4oCUIElmIHRoZSB2YWxpZGF0b3IgdGhhdCBJIGRlbGVnYXRlZCB0byBkb3VibGUgc2lnbnMgYXQgYmxvY2sgMTYsIEkgc2hvdWxkIHN0aWxsIGdldCBzbGFzaGVkIGluc3RhbnRseSBiZWNhdXNlIGV2ZW4gdGhvdWdoIEkgYXNrZWQgdG8gdW5ib25kIGF0IDE0LCB0aGV5IHN0aWxsIHVzZWQgbXkgcG93ZXIgYXQgYmxvY2sgMTYsIEkgc2hvdWxkIG9ubHkgYmUgbm90IGxpYWJsZSBmb3Igc2xhc2hlcyBvbmNlIG15IHBvd2VyIGlzIHN0b3BwZWQgYmVpbmcgdXNlZAovLyDigJQgT24gdGhlIGNvbnZlcnNlIG9mIHRoaXMsIEkgc2hvdWxkIHN0aWxsIGJlIGdldHRpbmcgcmV3YXJkcyB3aGlsZSBteSBwb3dlciBpcyBiZWluZyB1c2VkLiAgSSBzaG91bGRu4oCZdCBzdG9wIHJlY2VpdmluZyByZXdhcmRzIHVudGlsIGJsb2NrIDIwCg=="}})],1)}),[],!1,null,null,null);d.default=G.exports}}]);