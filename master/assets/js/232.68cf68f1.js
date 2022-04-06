(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{788:function(a,e,c){"use strict";c.r(e);var t=c(1),g=Object(t.a)({},(function(){var a=this,e=a.$createElement,c=a._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[c("h1",{attrs:{id:"msg-service"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-service"}},[a._v("#")]),a._v(" Msg Service")]),a._v(" "),c("h2",{attrs:{id:"msg-creategroup"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-creategroup"}},[a._v("#")]),a._v(" Msg/CreateGroup")]),a._v(" "),c("p",[a._v("A new group can be created with the "),c("code",[a._v("MsgCreateGroup")]),a._v(", which has an admin address, a list of members and some optional metadata bytes.")]),a._v(" "),c("p",[a._v("The metadata has a maximum length that is chosen by the app developer, and\npassed into the group keeper as a config.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlR3JvdXAgaXMgdGhlIE1zZy9DcmVhdGVHcm91cCByZXF1ZXN0IHR5cGUuCm1lc3NhZ2UgTXNnQ3JlYXRlR3JvdXAgewoKICAvLyBhZG1pbiBpcyB0aGUgYWNjb3VudCBhZGRyZXNzIG9mIHRoZSBncm91cCBhZG1pbi4KICBzdHJpbmcgYWRtaW4gPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CgogIC8vIG1lbWJlcnMgZGVmaW5lcyB0aGUgZ3JvdXAgbWVtYmVycy4KICByZXBlYXRlZCBNZW1iZXIgbWVtYmVycyA9IDIgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwoKICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIHRvIGF0dGFjaGVkIHRvIHRoZSBncm91cC4KICBieXRlcyBtZXRhZGF0YSA9IDM7Cn0="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if metadata length is greater than "),c("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),c("h2",{attrs:{id:"msg-updategroupmembers"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategroupmembers"}},[a._v("#")]),a._v(" Msg/UpdateGroupMembers")]),a._v(" "),c("p",[a._v("Group members can be updated with the "),c("code",[a._v("UpdateGroupMembers")]),a._v(".")]),a._v(" "),c("p",[a._v("+++https://github.com/cosmos/cosmos-sdk/blob/9aef070625e9676d7c0acb212c17ae9dba3c32dc/proto/cosmos/group/v1beta1/tx.proto#L74-L86")]),a._v(" "),c("p",[a._v("In the list of "),c("code",[a._v("MemberUpdates")]),a._v(", an existing member can be removed by setting its weight to 0.")]),a._v(" "),c("p",[a._v("It's expecting to fail if the signer is not the admin of the group.")]),a._v(" "),c("h2",{attrs:{id:"msg-updategroupadmin"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategroupadmin"}},[a._v("#")]),a._v(" Msg/UpdateGroupAdmin")]),a._v(" "),c("p",[a._v("The "),c("code",[a._v("UpdateGroupAdmin")]),a._v(" can be used to update a group admin.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBBZG1pbiBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwQWRtaW4gcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwQWRtaW4gewoKICAvLyBhZG1pbiBpcyB0aGUgY3VycmVudCBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogIHN0cmluZyBhZG1pbiA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gZ3JvdXBfaWQgaXMgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgZ3JvdXAuCiAgdWludDY0IGdyb3VwX2lkID0gMjsKCiAgLy8gbmV3X2FkbWluIGlzIHRoZSBncm91cCBuZXcgYWRtaW4gYWNjb3VudCBhZGRyZXNzLgogIHN0cmluZyBuZXdfYWRtaW4gPSAzIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107Cn0="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if the signer is not the admin of the group.")]),a._v(" "),c("h2",{attrs:{id:"msg-updategroupmetadata"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategroupmetadata"}},[a._v("#")]),a._v(" Msg/UpdateGroupMetadata")]),a._v(" "),c("p",[a._v("The "),c("code",[a._v("UpdateGroupMetadata")]),a._v(" can be used to update a group metadata.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBNZXRhZGF0YSBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwTWV0YWRhdGEgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwTWV0YWRhdGEgewoKICAvLyBhZG1pbiBpcyB0aGUgYWNjb3VudCBhZGRyZXNzIG9mIHRoZSBncm91cCBhZG1pbi4KICBzdHJpbmcgYWRtaW4gPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CgogIC8vIGdyb3VwX2lkIGlzIHRoZSB1bmlxdWUgSUQgb2YgdGhlIGdyb3VwLgogIHVpbnQ2NCBncm91cF9pZCA9IDI7CgogIC8vIG1ldGFkYXRhIGlzIHRoZSB1cGRhdGVkIGdyb3VwJ3MgbWV0YWRhdGEuCiAgYnl0ZXMgbWV0YWRhdGEgPSAzOwp9"}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if:")]),a._v(" "),c("ul",[c("li",[a._v("new metadata length is greater than "),c("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),c("li",[a._v("the signer is not the admin of the group.")])]),a._v(" "),c("h2",{attrs:{id:"msg-creategrouppolicy"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-creategrouppolicy"}},[a._v("#")]),a._v(" Msg/CreateGroupPolicy")]),a._v(" "),c("p",[a._v("A new group policy can be created with the "),c("code",[a._v("MsgCreateGroupPolicy")]),a._v(", which has an admin address, a group id, a decision policy and some optional metadata bytes.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlR3JvdXBQb2xpY3kgaXMgdGhlIE1zZy9DcmVhdGVHcm91cFBvbGljeSByZXF1ZXN0IHR5cGUuCm1lc3NhZ2UgTXNnQ3JlYXRlR3JvdXBQb2xpY3kgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgLy8gYWRtaW4gaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAgYWRtaW4uCiAgc3RyaW5nIGFkbWluID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBncm91cF9pZCBpcyB0aGUgdW5pcXVlIElEIG9mIHRoZSBncm91cC4KICB1aW50NjQgZ3JvdXBfaWQgPSAyOwoKICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIGF0dGFjaGVkIHRvIHRoZSBncm91cCBwb2xpY3kuCiAgYnl0ZXMgbWV0YWRhdGEgPSAzOwoKICAvLyBkZWNpc2lvbl9wb2xpY3kgc3BlY2lmaWVzIHRoZSBncm91cCBwb2xpY3kncyBkZWNpc2lvbiBwb2xpY3kuCiAgZ29vZ2xlLnByb3RvYnVmLkFueSBkZWNpc2lvbl9wb2xpY3kgPSA0IFsoY29zbW9zX3Byb3RvLmFjY2VwdHNfaW50ZXJmYWNlKSA9ICZxdW90O0RlY2lzaW9uUG9saWN5JnF1b3Q7XTsKfQ=="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if metadata length is greater than "),c("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),c("h2",{attrs:{id:"msg-creategroupwithpolicy"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-creategroupwithpolicy"}},[a._v("#")]),a._v(" Msg/CreateGroupWithPolicy")]),a._v(" "),c("p",[a._v("A new group with policy can be created with the "),c("code",[a._v("MsgCreateGroupWithPolicy")]),a._v(", which has an admin address, a list of members, a decision policy, a group policy as admin field to optionally set group and group policy admin with group policy address and some optional metadata bytes for group and group policy.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:""}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if group metadata or group policy metadata length is greater than some "),c("code",[a._v("MaxMetadataLength")]),a._v(".")]),a._v(" "),c("h2",{attrs:{id:"msg-updategrouppolicyadmin"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategrouppolicyadmin"}},[a._v("#")]),a._v(" Msg/UpdateGroupPolicyAdmin")]),a._v(" "),c("p",[a._v("The "),c("code",[a._v("UpdateGroupPolicyAdmin")]),a._v(" can be used to update a group policy admin.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBQb2xpY3lBZG1pbiBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwUG9saWN5QWRtaW4gcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwUG9saWN5QWRtaW4gewoKICAvLyBhZG1pbiBpcyB0aGUgYWNjb3VudCBhZGRyZXNzIG9mIHRoZSBncm91cCBhZG1pbi4KICBzdHJpbmcgYWRtaW4gPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CgogIC8vIGFkZHJlc3MgaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAgcG9saWN5LgogIHN0cmluZyBhZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBuZXdfYWRtaW4gaXMgdGhlIG5ldyBncm91cCBwb2xpY3kgYWRtaW4uCiAgc3RyaW5nIG5ld19hZG1pbiA9IDMgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKfQ=="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if the signer is not the admin of the group policy.")]),a._v(" "),c("h2",{attrs:{id:"msg-updategrouppolicydecisionpolicy"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategrouppolicydecisionpolicy"}},[a._v("#")]),a._v(" Msg/UpdateGroupPolicyDecisionPolicy")]),a._v(" "),c("p",[a._v("The "),c("code",[a._v("UpdateGroupPolicyDecisionPolicy")]),a._v(" can be used to update a decision policy.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBQb2xpY3lEZWNpc2lvblBvbGljeSBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwUG9saWN5RGVjaXNpb25Qb2xpY3kgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwUG9saWN5RGVjaXNpb25Qb2xpY3kgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgLy8gYWRtaW4gaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAgYWRtaW4uCiAgc3RyaW5nIGFkbWluID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBhZGRyZXNzIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgZ3JvdXAgcG9saWN5LgogIHN0cmluZyBhZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBkZWNpc2lvbl9wb2xpY3kgaXMgdGhlIHVwZGF0ZWQgZ3JvdXAgcG9saWN5J3MgZGVjaXNpb24gcG9saWN5LgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgZGVjaXNpb25fcG9saWN5ID0gMyBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtEZWNpc2lvblBvbGljeSZxdW90O107Cn0="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if the signer is not the admin of the group policy.")]),a._v(" "),c("h2",{attrs:{id:"msg-updategrouppolicymetadata"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategrouppolicymetadata"}},[a._v("#")]),a._v(" Msg/UpdateGroupPolicyMetadata")]),a._v(" "),c("p",[a._v("The "),c("code",[a._v("UpdateGroupPolicyMetadata")]),a._v(" can be used to update a group policy metadata.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBQb2xpY3lNZXRhZGF0YSBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwUG9saWN5TWV0YWRhdGEgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwUG9saWN5TWV0YWRhdGEgewoKICAvLyBhZG1pbiBpcyB0aGUgYWNjb3VudCBhZGRyZXNzIG9mIHRoZSBncm91cCBhZG1pbi4KICBzdHJpbmcgYWRtaW4gPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CgogIC8vIGFkZHJlc3MgaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiBncm91cCBwb2xpY3kuCiAgc3RyaW5nIGFkZHJlc3MgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CgogIC8vIG1ldGFkYXRhIGlzIHRoZSB1cGRhdGVkIGdyb3VwIHBvbGljeSBtZXRhZGF0YS4KICBieXRlcyBtZXRhZGF0YSA9IDM7Cn0="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if:")]),a._v(" "),c("ul",[c("li",[a._v("new metadata length is greater than "),c("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),c("li",[a._v("the signer is not the admin of the group.")])]),a._v(" "),c("h2",{attrs:{id:"msg-createproposal"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-createproposal"}},[a._v("#")]),a._v(" Msg/CreateProposal")]),a._v(" "),c("p",[a._v("A new proposal can be created with the "),c("code",[a._v("MsgCreateProposal")]),a._v(", which has a group policy account address, a list of proposers addresses, a list of messages to execute if the proposal is accepted and some optional metadata bytes.\nAn optional "),c("code",[a._v("Exec")]),a._v(" value can be provided to try to execute the proposal immediately after proposal creation. Proposers signatures are considered as yes votes in this case.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlUHJvcG9zYWwgaXMgdGhlIE1zZy9DcmVhdGVQcm9wb3NhbCByZXF1ZXN0IHR5cGUuCm1lc3NhZ2UgTXNnQ3JlYXRlUHJvcG9zYWwgewogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgLy8gYWRkcmVzcyBpcyB0aGUgYWNjb3VudCBhZGRyZXNzIG9mIGdyb3VwIHBvbGljeS4KICBzdHJpbmcgYWRkcmVzcyA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gcHJvcG9zZXJzIGFyZSB0aGUgYWNjb3VudCBhZGRyZXNzZXMgb2YgdGhlIHByb3Bvc2Vycy4KICAvLyBQcm9wb3NlcnMgc2lnbmF0dXJlcyB3aWxsIGJlIGNvdW50ZWQgYXMgeWVzIHZvdGVzLgogIHJlcGVhdGVkIHN0cmluZyBwcm9wb3NlcnMgPSAyOwoKICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIHRvIGF0dGFjaGVkIHRvIHRoZSBwcm9wb3NhbC4KICBieXRlcyBtZXRhZGF0YSA9IDM7CgogIC8vIG1zZ3MgaXMgYSBsaXN0IG9mIE1zZ3MgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmIHRoZSBwcm9wb3NhbCBwYXNzZXMuCiAgcmVwZWF0ZWQgZ29vZ2xlLnByb3RvYnVmLkFueSBtc2dzID0gNDsKCiAgLy8gZXhlYyBkZWZpbmVzIHRoZSBtb2RlIG9mIGV4ZWN1dGlvbiBvZiB0aGUgcHJvcG9zYWwsCiAgLy8gd2hldGhlciBpdCBzaG91bGQgYmUgZXhlY3V0ZWQgaW1tZWRpYXRlbHkgb24gY3JlYXRpb24gb3Igbm90LgogIC8vIElmIHNvLCBwcm9wb3NlcnMgc2lnbmF0dXJlcyBhcmUgY29uc2lkZXJlZCBhcyBZZXMgdm90ZXMuCiAgRXhlYyBleGVjID0gNTsKfQ=="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if metadata length is greater than "),c("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),c("h2",{attrs:{id:"msg-withdrawproposal"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-withdrawproposal"}},[a._v("#")]),a._v(" Msg/WithdrawProposal")]),a._v(" "),c("p",[a._v("A proposal can be withdrawn using "),c("code",[a._v("MsgWithdrawProposal")]),a._v(" which has a "),c("code",[a._v("address")]),a._v(" (can be either proposer or policy admin) and a "),c("code",[a._v("proposal_id")]),a._v(" (which has to be withdrawn).")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnV2l0aGRyYXdQcm9wb3NhbCBpcyB0aGUgTXNnL1dpdGhkcmF3UHJvcG9zYWwgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1dpdGhkcmF3UHJvcG9zYWwgewogIC8vIHByb3Bvc2FsIGlzIHRoZSB1bmlxdWUgSUQgb2YgdGhlIHByb3Bvc2FsLgogIHVpbnQ2NCBwcm9wb3NhbF9pZCA9IDE7CgogIC8vIGFkZHJlc3MgaXMgdGhlIGFkbWluIG9mIHRoZSBncm91cCBwb2xpY3kgb3Igb25lIG9mIHRoZSBwcm9wb3NlciBvZiB0aGUgcHJvcG9zYWwuCiAgc3RyaW5nIGFkZHJlc3MgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107Cn0="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if:")]),a._v(" "),c("ul",[c("li",[a._v("the signer is neither policy address nor proposer of the proposal.")]),a._v(" "),c("li",[a._v("the proposal is already closed or aborted.")])]),a._v(" "),c("h2",{attrs:{id:"msg-vote"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-vote"}},[a._v("#")]),a._v(" Msg/Vote")]),a._v(" "),c("p",[a._v("A new vote can be created with the "),c("code",[a._v("MsgVote")]),a._v(", given a proposal id, a voter address, a choice (yes, no, veto or abstain) and some optional metadata bytes.\nAn optional "),c("code",[a._v("Exec")]),a._v(" value can be provided to try to execute the proposal immediately after voting.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVm90ZSBpcyB0aGUgTXNnL1ZvdGUgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1ZvdGUgewoKICAvLyBwcm9wb3NhbCBpcyB0aGUgdW5pcXVlIElEIG9mIHRoZSBwcm9wb3NhbC4KICB1aW50NjQgcHJvcG9zYWxfaWQgPSAxOwogIC8vIHZvdGVyIGlzIHRoZSB2b3RlciBhY2NvdW50IGFkZHJlc3MuCiAgc3RyaW5nIHZvdGVyID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBjaG9pY2UgaXMgdGhlIHZvdGVyJ3MgY2hvaWNlIG9uIHRoZSBwcm9wb3NhbC4KICBDaG9pY2UgY2hvaWNlID0gMzsKCiAgLy8gbWV0YWRhdGEgaXMgYW55IGFyYml0cmFyeSBtZXRhZGF0YSB0byBhdHRhY2hlZCB0byB0aGUgdm90ZS4KICBieXRlcyBtZXRhZGF0YSA9IDQ7CgogIC8vIGV4ZWMgZGVmaW5lcyB3aGV0aGVyIHRoZSBwcm9wb3NhbCBzaG91bGQgYmUgZXhlY3V0ZWQKICAvLyBpbW1lZGlhdGVseSBhZnRlciB2b3Rpbmcgb3Igbm90LgogIEV4ZWMgZXhlYyA9IDU7Cn0="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if metadata length is greater than "),c("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),c("h2",{attrs:{id:"msg-exec"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-exec"}},[a._v("#")]),a._v(" Msg/Exec")]),a._v(" "),c("p",[a._v("A proposal can be executed with the "),c("code",[a._v("MsgExec")]),a._v(".")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRXhlYyBpcyB0aGUgTXNnL0V4ZWMgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ0V4ZWMgewoKICAvLyBwcm9wb3NhbCBpcyB0aGUgdW5pcXVlIElEIG9mIHRoZSBwcm9wb3NhbC4KICB1aW50NjQgcHJvcG9zYWxfaWQgPSAxOwoKICAvLyBzaWduZXIgaXMgdGhlIGFjY291bnQgYWRkcmVzcyB1c2VkIHRvIGV4ZWN1dGUgdGhlIHByb3Bvc2FsLgogIHN0cmluZyBzaWduZXIgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107Cn0="}})],1),a._v(" "),c("p",[a._v("The messages that are part of this proposal won't be executed if:")]),a._v(" "),c("ul",[c("li",[a._v("the proposal has not been accepted.")]),a._v(" "),c("li",[a._v("the proposal status is not closed.")]),a._v(" "),c("li",[a._v("the proposal has already been successfully executed.")])]),a._v(" "),c("h2",{attrs:{id:"msg-leavegroup"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msg-leavegroup"}},[a._v("#")]),a._v(" Msg/LeaveGroup")]),a._v(" "),c("p",[a._v("The "),c("code",[a._v("MsgLeaveGroup")]),a._v(" allows group member to leave a group.")]),a._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnTGVhdmVHcm91cCBpcyB0aGUgTXNnL0xlYXZlR3JvdXAgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ0xlYXZlR3JvdXAgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7bWVtYmVyX2FkZHJlc3MmcXVvdDs7CgogIC8vIG1lbWJlcl9hZGRyZXNzIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIG1lbWJlci4KICBzdHJpbmcgbWVtYmVyX2FkZHJlc3MgPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CgogIC8vIGdyb3VwX2lkIGlzIHRoZSB1bmlxdWUgSUQgb2YgdGhlIGdyb3VwLgogIHVpbnQ2NCBncm91cF9pZCA9IDI7Cn0="}})],1),a._v(" "),c("p",[a._v("It's expecting to fail if:")]),a._v(" "),c("ul",[c("li",[a._v("the group member is not part of the group.")])])])}),[],!1,null,null,null);e.default=g.exports}}]);