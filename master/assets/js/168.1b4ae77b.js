(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{783:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"antehandlers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#antehandlers"}},[e._v("#")]),e._v(" AnteHandlers")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("x/auth")]),e._v(" module presently has no transaction handlers of its own, but does expose the special "),o("code",[e._v("AnteHandler")]),e._v(", used for performing basic validity checks on a transaction, such that it could be thrown out of the mempool.\nThe "),o("code",[e._v("AnteHandler")]),e._v(" can be seen as a set of decorators that check transactions within the current context, per "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.43.0-alpha1/docs/architecture/adr-010-modular-antehandler.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 010"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Note that the "),o("code",[e._v("AnteHandler")]),e._v(" is called on both "),o("code",[e._v("CheckTx")]),e._v(" and "),o("code",[e._v("DeliverTx")]),e._v(", as Tendermint proposers presently have the ability to include in their proposed block transactions which fail "),o("code",[e._v("CheckTx")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"decorators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decorators"}},[e._v("#")]),e._v(" Decorators")]),e._v(" "),o("p",[e._v("The auth module provides "),o("code",[e._v("AnteDecorator")]),e._v("s that are recursively chained together into a single "),o("code",[e._v("AnteHandler")]),e._v(" in the following order:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("SetUpContextDecorator")]),e._v(": Sets the "),o("code",[e._v("GasMeter")]),e._v(" in the "),o("code",[e._v("Context")]),e._v(" and wraps the next "),o("code",[e._v("AnteHandler")]),e._v(" with a defer clause to recover from any downstream "),o("code",[e._v("OutOfGas")]),e._v(" panics in the "),o("code",[e._v("AnteHandler")]),e._v(" chain to return an error with information on gas provided and gas used.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("RejectExtensionOptionsDecorator")]),e._v(": Rejects all extension options which can optionally be included in protobuf transactions.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("MempoolFeeDecorator")]),e._v(": Checks if the "),o("code",[e._v("tx")]),e._v(" fee is above local mempool "),o("code",[e._v("minFee")]),e._v(" parameter during "),o("code",[e._v("CheckTx")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("ValidateBasicDecorator")]),e._v(": Calls "),o("code",[e._v("tx.ValidateBasic")]),e._v(" and returns any non-nil error.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("TxTimeoutHeightDecorator")]),e._v(": Check for a "),o("code",[e._v("tx")]),e._v(" height timeout.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("ValidateMemoDecorator")]),e._v(": Validates "),o("code",[e._v("tx")]),e._v(" memo with application parameters and returns any non-nil error.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("ConsumeGasTxSizeDecorator")]),e._v(": Consumes gas proportional to the "),o("code",[e._v("tx")]),e._v(" size based on application parameters.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("DeductFeeDecorator")]),e._v(": Deducts the "),o("code",[e._v("FeeAmount")]),e._v(" from first signer of the "),o("code",[e._v("tx")]),e._v(". If the "),o("code",[e._v("x/feegrant")]),e._v(" module is enabled and a fee granter is set, it deducts fees from the fee granter account.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("SetPubKeyDecorator")]),e._v(": Sets the pubkey from a "),o("code",[e._v("tx")]),e._v("'s signers that does not already have its corresponding pubkey saved in the state machine and in the current context.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("ValidateSigCountDecorator")]),e._v(": Validates the number of signatures in "),o("code",[e._v("tx")]),e._v(" based on app-parameters.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("SigGasConsumeDecorator")]),e._v(": Consumes parameter-defined amount of gas for each signature. This requires pubkeys to be set in context for all signers as part of "),o("code",[e._v("SetPubKeyDecorator")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("SigVerificationDecorator")]),e._v(": Verifies all signatures are valid. This requires pubkeys to be set in context for all signers as part of "),o("code",[e._v("SetPubKeyDecorator")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("IncrementSequenceDecorator")]),e._v(": Increments the account sequence for each signer to prevent replay attacks.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);