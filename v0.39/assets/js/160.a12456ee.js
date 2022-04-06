(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{780:function(a,t,e){"use strict";e.r(t);var o=e(1),d=Object(o.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[a._v("#")]),a._v(" State")]),a._v(" "),e("h2",{attrs:{id:"feepool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feepool"}},[a._v("#")]),a._v(" FeePool")]),a._v(" "),e("p",[a._v("All globally tracked parameters for distribution are stored within\n"),e("code",[a._v("FeePool")]),a._v(". Rewards are collected and added to the reward pool and\ndistributed to validators/delegators from here.")]),a._v(" "),e("p",[a._v("Note that the reward pool holds decimal coins ("),e("code",[a._v("DecCoins")]),a._v(") to allow\nfor fractions of coins to be received from operations like inflation.\nWhen coins are distributed from the pool they are truncated back to\n"),e("code",[a._v("sdk.Coins")]),a._v(" which are non-decimal.")]),a._v(" "),e("ul",[e("li",[a._v("FeePool:  "),e("code",[a._v("0x00 -> amino(FeePool)")])])]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gY29pbnMgd2l0aCBkZWNpbWFsCnR5cGUgRGVjQ29pbnMgW11EZWNDb2luCgp0eXBlIERlY0NvaW4gc3RydWN0IHsKICAgIEFtb3VudCBzZGsuRGVjCiAgICBEZW5vbSAgc3RyaW5nCn0KCnR5cGUgRmVlUG9vbCBzdHJ1Y3QgewogICAgVG90YWxWYWxBY2N1bVVwZGF0ZUhlaWdodCAgaW50NjQgICAgLy8gbGFzdCBoZWlnaHQgd2hpY2ggdGhlIHRvdGFsIHZhbGlkYXRvciBhY2N1bSB3YXMgdXBkYXRlZAogICAgVG90YWxWYWxBY2N1bSAgICAgICAgICAgICAgc2RrLkRlYyAgLy8gdG90YWwgdmFsZGF0b3IgYWNjdW0gaGVsZCBieSB2YWxpZGF0b3JzCiAgICBQb29sICAgICAgICAgICAgICAgICAgICAgICBEZWNDb2lucyAvLyBmdW5kcyBmb3IgYWxsIHZhbGlkYXRvcnMgd2hpY2ggaGF2ZSB5ZXQgdG8gYmUgd2l0aGRyYXduCiAgICBDb21tdW5pdHlQb29sICAgICAgICAgICAgICBEZWNDb2lucyAvLyBwb29sIGZvciBjb21tdW5pdHkgZnVuZHMgeWV0IHRvIGJlIHNwZW50Cn0K"}}),a._v(" "),e("h2",{attrs:{id:"validator-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validator-distribution"}},[a._v("#")]),a._v(" Validator Distribution")]),a._v(" "),e("p",[a._v("Validator distribution information for the relevant validator is updated each time:")]),a._v(" "),e("ol",[e("li",[a._v("delegation amount to a validator is updated,")]),a._v(" "),e("li",[a._v("a validator successfully proposes a block and receives a reward,")]),a._v(" "),e("li",[a._v("any delegator withdraws from a validator, or")]),a._v(" "),e("li",[a._v("the validator withdraws it's commission.")])]),a._v(" "),e("ul",[e("li",[a._v("ValidatorDistInfo:  "),e("code",[a._v("0x02 | ValOperatorAddr -> amino(validatorDistribution)")])])]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWYWxpZGF0b3JEaXN0SW5mbyBzdHJ1Y3QgewogICAgRmVlUG9vbFdpdGhkcmF3YWxIZWlnaHQgICAgIGludDY0ICAgIC8vIGxhc3QgaGVpZ2h0IHRoaXMgdmFsaWRhdG9yIHdpdGhkcmV3IGZyb20gdGhlIGdsb2JhbCBmZWUgcG9vbAogICAgUG9vbCAgICAgICAgICAgICAgICAgICAgICAgRGVjQ29pbnMgLy8gcmV3YXJkcyBvd2VkIHRvIGRlbGVnYXRvcnMsIGNvbW1pc3Npb24gaGFzIGFscmVhZHkgYmVlbiBjaGFyZ2VkIChpbmNsdWRlcyBwcm9wb3NlciByZXdhcmQpCiAgICBQb29sQ29tbWlzc2lvbiAgICAgICAgICAgICBEZWNDb2lucyAvLyBjb21taXNzaW9uIGNvbGxlY3RlZCBieSB0aGlzIHZhbGlkYXRvciAocGVuZGluZyB3aXRoZHJhd2FsKSAKCiAgICBUb3RhbERlbEFjY3VtVXBkYXRlSGVpZ2h0ICBpbnQ2NCAgICAvLyBsYXN0IGhlaWdodCB3aGljaCB0aGUgdG90YWwgZGVsZWdhdG9yIGFjY3VtIHdhcyB1cGRhdGVkCiAgICBUb3RhbERlbEFjY3VtICAgICAgICAgICAgICBzZGsuRGVjICAvLyB0b3RhbCBwcm9wb3NlciBwb29sIGFjY3VtdWxhdGlvbiBmYWN0b3IgaGVsZCBieSBkZWxlZ2F0b3JzCn0K"}}),a._v(" "),e("h2",{attrs:{id:"delegation-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delegation-distribution"}},[a._v("#")]),a._v(" Delegation Distribution")]),a._v(" "),e("p",[a._v("Each delegation distribution only needs to record the height at which it last\nwithdrew fees. Because a delegation must withdraw fees each time it's\nproperties change (aka bonded tokens etc.) its properties will remain constant\nand the delegator's "),e("em",[a._v("accumulation")]),a._v(" factor can be calculated passively knowing\nonly the height of the last withdrawal and its current properties.")]),a._v(" "),e("ul",[e("li",[a._v("DelegationDistInfo: "),e("code",[a._v("0x02 | DelegatorAddr | ValOperatorAddr -> amino(delegatorDist)")])])]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEZWxlZ2F0aW9uRGlzdEluZm8gc3RydWN0IHsKICAgIFdpdGhkcmF3YWxIZWlnaHQgaW50NjQgICAgLy8gbGFzdCB0aW1lIHRoaXMgZGVsZWdhdGlvbiB3aXRoZHJldyByZXdhcmRzCn0K"}})],1)}),[],!1,null,null,null);t.default=d.exports}}]);