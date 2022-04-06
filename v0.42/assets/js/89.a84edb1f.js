(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{749:function(e,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-026-ibc-client-recovery-mechanisms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-026-ibc-client-recovery-mechanisms"}},[e._v("#")]),e._v(" ADR 026: IBC Client Recovery Mechanisms")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020/06/23: Initial version")]),e._v(" "),a("li",[e._v("2020/08/06: Revisions per review & to reference version")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[a("em",[e._v("Proposed")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("h3",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("At launch, IBC will be a novel protocol, without an experienced user-base. At the protocol layer, it is not possible to distinguish between client expiry or misbehaviour due to genuine faults (Byzantine behavior) and client expiry or misbehaviour due to user mistakes (failing to update a client, or accidentally double-signing). In the base IBC protocol and ICS 20 fungible token transfer implementation, if a client can no longer be updated, funds in that channel will be permanently locked and can no longer be transferred. To the degree that it is safe to do so, it would be preferable to provide users with a recovery mechanism which can be utilised in these exceptional cases.")]),e._v(" "),a("h3",{attrs:{id:"exceptional-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exceptional-cases"}},[e._v("#")]),e._v(" Exceptional cases")]),e._v(" "),a("p",[e._v("The state of concern is where a client associated with connection(s) and channel(s) can no longer be updated. This can happen for several reasons:")]),e._v(" "),a("ol",[a("li",[e._v("The chain which the client is following has halted and is no longer producing blocks/headers, so no updates can be made to the client")]),e._v(" "),a("li",[e._v("The chain which the client is following has continued to operate, but no relayer has submitted a new header within the unbonding period, and the client has expired\n"),a("ol",[a("li",[e._v("This could be due to real misbehaviour (intentional Byzantine behaviour) or merely a mistake by validators, but the client cannot distinguish these two cases")])])]),e._v(" "),a("li",[e._v("The chain which the client is following has experienced a misbehaviour event, and the client has been frozen & thus can no longer be updated")])]),e._v(" "),a("h3",{attrs:{id:"security-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-model"}},[e._v("#")]),e._v(" Security model")]),e._v(" "),a("p",[e._v("Two-thirds of the validator set (the quorum for governance, module participation) can already sign arbitrary data, so allowing governance to manually force-update a client with a new header after a delay period does not substantially alter the security model.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We elect not to deal with chains which have actually halted, which is necessarily Byzantine behaviour and in which case token recovery is not likely possible anyways (in-flight packets cannot be timed-out, but the relative impact of that is minor).")]),e._v(" "),a("ol",[a("li",[e._v("Require Tendermint light clients (ICS 07) to be created with the following additional flags\n"),a("ol",[a("li",[a("code",[e._v("allow_governance_override_after_expiry")]),e._v(" (boolean, default false)")])])]),e._v(" "),a("li",[e._v("Require Tendermint light clients (ICS 07) to expose the following additional internal query functions\n"),a("ol",[a("li",[a("code",[e._v("Expired() boolean")]),e._v(", which returns whether or not the client has passed the trusting period since the last update (in which case no headers can be validated)")])])]),e._v(" "),a("li",[e._v("Require Tendermint light clients (ICS 07) to expose the following additional state mutation functions\n"),a("ol",[a("li",[a("code",[e._v("Unfreeze()")]),e._v(", which unfreezes a light client after misbehaviour and clears any frozen height previously set")])])]),e._v(" "),a("li",[e._v("Require Tendermint light clients (ICS 07) & solo machine clients (ICS 06) to be created with the following additional flags\n"),a("ol",[a("li",[a("code",[e._v("allow_governance_override_after_misbehaviour")]),e._v(" (boolean, default false)")])])]),e._v(" "),a("li",[e._v("Add a new governance proposal type, "),a("code",[e._v("ClientUpdateProposal")]),e._v(", in the "),a("code",[e._v("x/ibc")]),e._v(" module\n"),a("ol",[a("li",[e._v("Extend the base "),a("code",[e._v("Proposal")]),e._v(" with a client identifier ("),a("code",[e._v("string")]),e._v(") and a header ("),a("code",[e._v("bytes")]),e._v(", encoded in a client-type-specific format)")]),e._v(" "),a("li",[e._v("If this governance proposal passes, the client is updated with the provided header, if and only if:\n"),a("ol",[a("li",[a("code",[e._v("allow_governance_override_after_expiry")]),e._v(" is true and the client has expired ("),a("code",[e._v("Expired()")]),e._v(" returns true)")]),e._v(" "),a("li",[a("code",[e._v("allow_governance_override_after_misbehaviour")]),e._v(" is true and the client has been frozen ("),a("code",[e._v("Frozen()")]),e._v(" returns true)\n"),a("ol",[a("li",[e._v("In this case, additionally, the client is unfrozen by calling "),a("code",[e._v("Unfreeze()")])])])])])])])])]),e._v(" "),a("p",[e._v("Note additionally that the header submitted by governance must be new enough that it will be possible to update the light client after the new header is inserted into the client state (which will only happen after the governance proposal has passed).")]),e._v(" "),a("p",[e._v("This ADR does not address planned upgrades, which are handled separately as per the "),a("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-007-tendermint-client#upgrades",target:"_blank",rel:"noopener noreferrer"}},[e._v("specification"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Establishes a mechanism for client recovery in the case of expiry")]),e._v(" "),a("li",[e._v("Establishes a mechanism for client recovery in the case of misbehaviour")]),e._v(" "),a("li",[e._v("Clients can elect to disallow this recovery mechanism if they do not wish to allow for it")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Additional complexity in client creation which must be understood by the user")]),e._v(" "),a("li",[e._v("Governance participants must pick a new header, which is a bit different from their usual tasks")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("p",[e._v("No neutral consequences.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ics/issues/421",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prior discussion"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ics/issues/439",target:"_blank",rel:"noopener noreferrer"}},[e._v("Epoch number discussion"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ics/issues/445",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upgrade plan discussion"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);