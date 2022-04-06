(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{729:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-006-secret-store-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-006-secret-store-replacement"}},[e._v("#")]),e._v(" ADR 006: Secret Store Replacement")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("July 29th, 2019: Initial draft")]),e._v(" "),a("li",[e._v("September 11th, 2019: Work has started")]),e._v(" "),a("li",[e._v("November 4th: SDK changes merged in")]),e._v(" "),a("li",[e._v("November 18th: Gaia changes merged in")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently, an SDK application's CLI directory stores key material and metadata in a plain text database in the user’s home directory.  Key material is encrypted by a passphrase, protected by bcrypt hashing algorithm. Metadata (e.g. addresses, public keys, key storage details) is available in plain text.")]),e._v(" "),a("p",[e._v("This is not desirable for a number of reasons. Perhaps the biggest reason is insufficient security protection of key material and metadata. Leaking the plain text allows an attacker to surveil what keys a given computer controls via a number of techniques, like compromised dependencies without any privilege execution. This could be followed by a more targeted attack on a particular user/computer.")]),e._v(" "),a("p",[e._v("All modern desktop computers OS (Ubuntu, Debian, MacOS, Windows) provide a built-in secret store that is designed to allow applications to store information that is isolated from all other applications and requires passphrase entry to access the data.")]),e._v(" "),a("p",[e._v("We are seeking solution that provides a common abstraction layer to the many different backends and reasonable fallback for minimal platforms that don’t provide a native secret store.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We recommend replacing the current Keybase backend based on LevelDB with "),a("a",{attrs:{href:"https://github.com/99designs/keyring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keyring"),a("OutboundLink")],1),e._v(" by 99 designs. This application is designed to provide a common abstraction and uniform interface between many secret stores and is used by AWS Vault application by 99-designs application.")]),e._v(" "),a("p",[e._v("This appears to fulfill the requirement of protecting both key material and metadata from rouge software on a user’s machine.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("p",[e._v("Increased safety for users.")]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("p",[e._v("Users must manually migrate.")]),e._v(" "),a("p",[e._v("Testing against all supported backends is difficult.")]),e._v(" "),a("p",[e._v("Running tests locally on a Mac require numerous repetitive password entries.")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("p"),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("#4754 Switch secret store to the keyring secret store (original PR by @poldsam) ["),a("strong",[e._v("CLOSED")]),e._v("]")]),e._v(" "),a("li",[e._v("#5029 Add support for github.com/99designs/keyring-backed keybases ["),a("strong",[e._v("MERGED")]),e._v("]")]),e._v(" "),a("li",[e._v("#5097 Add keys migrate command ["),a("strong",[e._v("MERGED")]),e._v("]")]),e._v(" "),a("li",[e._v("#5180 Drop on-disk keybase in favor of keyring ["),a("em",[e._v("PENDING_REVIEW")]),e._v("]")]),e._v(" "),a("li",[e._v("cosmos/gaia#164 Drop on-disk keybase in favor of keyring (gaia's changes) ["),a("em",[e._v("PENDING_REVIEW")]),e._v("]")])])])}),[],!1,null,null,null);t.default=r.exports}}]);