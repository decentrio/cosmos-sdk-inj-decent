(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{835:function(g,C,I){"use strict";I.r(C);var t=I(1),A=Object(t.a)({},(function(){var g=this,C=g.$createElement,I=g._self._c||C;return I("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[I("h1",{attrs:{id:"sdk-애플리케이션-아키텍쳐"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#sdk-애플리케이션-아키텍쳐"}},[g._v("#")]),g._v(" SDK 애플리케이션 아키텍쳐")]),g._v(" "),I("h2",{attrs:{id:"상태-기계-state-machine"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#상태-기계-state-machine"}},[g._v("#")]),g._v(" 상태 기계 (state machine)")]),g._v(" "),I("p",[g._v("블록체인 애플리케이션은 근본적으로 "),I("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EC%83%81%ED%83%9C_%EA%B8%B0%EA%B3%84_%EB%B3%B5%EC%A0%9C",target:"_blank",rel:"noopener noreferrer"}},[g._v("결정론적 복제 상태 기계(replicated deterministic state machine)"),I("OutboundLink")],1),g._v("입니다.")]),g._v(" "),I("p",[g._v("상태 기계는 특정 시점에 오직 하나의 상태를 유지하는 있는 컴퓨터 공학 개념입니다. 여기서 '상태 기계' 개념에는 시스템의 현 상태를 뜻하는 '상태(state)'가 있으며, 상태의 변경을 유발하는\n트랜잭션(transaction)'이 있습니다.")]),g._v(" "),I("p",[I("code",[g._v("S")]),g._v(" 라는 상태와 "),I("code",[g._v("T")]),g._v(" 라는 트랜잭션이 있는 경우, 상태 기계는 "),I("code",[g._v("S'")]),g._v("라는 새로운 상태를 리턴합니다.")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgKy0tLS0tLS0tKwp8ICAgICAgICB8ICAgICAgICAgICAgICAgICB8ICAgICAgICB8CnwgICBTICAgICstLS0tLS0tLS0tLS0tLS0tJmd0OysgICBTJyAgIHwKfCAgICAgICAgfCAgICAgKFQp7KCB7JqpICAgICB8ICAgICAgICB8CistLS0tLS0tLSsgICAgICAgICAgICAgICAgICstLS0tLS0tLSsK"}}),g._v(" "),I("p",[g._v("실질적으로는 트랜잭션은 블록 단위로 묶여 상태 변경 과정을 더 효율적일 수 있게 합니다. "),I("code",[g._v("S")]),g._v("라는 상태와 "),I("code",[g._v("B")]),g._v("라는 트랜잭션이 있는 경우, 상태 기계는 "),I("code",[g._v("S'")]),g._v("라는 새로운 상태를 리턴합니다.")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsKfCAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgIHwKfCAgIFMgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0mZ3Q7IHwgICBTJyAgIHwKfCAgICAgICAgfCAgICBC7J2YIFQg7IiY66eM7YG8OiAoVCnsoIHsmqkgICAgIHwgICAgICAgIHwKKy0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsK"}}),g._v(" "),I("p",[g._v("블록체인 시스템 개념으로 점그할때, 상태 기계는 결정론적(deterministic)입니다. 즉, 노드가 특정 상태에서 시작된 후 동일한 트랜잭션들을 반복할 경우, 결과 상태는 언제나 동일합니다.")]),g._v(" "),I("p",[g._v("코스모스 SDK는 애플리케이션의 상태, 트랜잭션 형태 그리고 상태 변경 기능(state-transition function)을 정의하는데 최대한의 유연성을 제공합니다. 코스모스 SDK를 이용해 상태 기계를 만드는 과정은 이후 항목에서 다루겠습니다. 우선 이 시스템 내에서 어떻게 "),I("strong",[g._v("텐더민트")]),g._v("를 사용해 '상태'가 복제되는지 알아보겠습니다.")]),g._v(" "),I("h2",{attrs:{id:"텐더민트"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#텐더민트"}},[g._v("#")]),g._v(" 텐더민트")]),g._v(" "),I("p",[g._v("개발자는 코스모스 SDK를 사용하여 상태 기계만을 정의하면 되며, 해당 상태를 네트워크에 복제하는 기능은 "),I("a",{attrs:{href:"https://tendermint.com/docs/introduction/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[I("em",[g._v("텐더민트")]),I("OutboundLink")],1),g._v("가 제공합니다.")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAg7L2U7Iqk66qo7IqkIFNES+uhnCDqsJzrsJwKICAgICAgICAgICAgICAgIHwgIHwgICAg7IOB7YOcIOq4sOqzhCA9IOyVoO2UjOumrOy8gOydtOyFmCAgIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdgogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIF4KICDruJTroZ3ssrTsnbgg64W465OcIHwgIHwgICAgICAgICAgICDsu6jshLzshJzsiqQgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICB8ICAg7YWQ642U66+87Yq4IOy9lOyWtAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAg64Sk7Yq47JuM7YK5ICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHYgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgdgo="}}),g._v(" "),I("p",[g._v("텐더민트는 오직 블록체인의 "),I("em",[g._v("네트워킹")]),g._v("과 "),I("em",[g._v("합의(컨센서스)")]),g._v(" 계층을 처리하는 애플리케이션-불가지성(application-agnostic) 엔진입니다. 실질적으로 텐더민트는 단순히 트랜잭션의 바이트를 나열하고, 해당 트랜잭션을 네트워크에 전파하는 역할만을 한는 것입니다. 텐더민트 코어는 텐더민트 비잔틴 결함 감내(BFT, Byzantine-fault tolerant) 알고리즘을 사용하여 트랜잭션 순서에 대한 합의를 합니다.")]),g._v(" "),I("p",[g._v("텐더민트 합의 알고리즘은 '검증인(Validators)'이라는 특정 노드 세트를 기반으로 작동합니다. 특정 블록에는 V 검증인 세트 검증인 존재하며, 이 V 검증인 세트 안에 있는 검증인 중 하나의 검증인이 다음 블록 생성자로 알고리즘에 의해 선택됩니다. 만약 블록이 V 검증인 세트 2/3 이상의 "),I("a",{attrs:{href:"https://tendermint.com/docs/spec/consensus/consensus.html#prevote-step-height-h-round-r",target:"_blank",rel:"noopener noreferrer"}},[g._v("프리보트(prevote)"),I("OutboundLink")],1),g._v("와 "),I("a",{attrs:{href:"https://tendermint.com/docs/spec/consensus/consensus.html#precommit-step-height-h-round-r",target:"_blank",rel:"noopener noreferrer"}},[g._v("프리커밋(precommit)"),I("OutboundLink")],1),g._v("을 받고 내용 트랜잭션이 유효한 경우 해당 블록은 '유효(valid)'한 것으로 간주됩니다. 검증인 세트는 상태 기계에 작성된 규칙에 따라서 바뀔 수 있습니다.")]),g._v(" "),I("h2",{attrs:{id:"abci"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[g._v("#")]),g._v(" ABCI")]),g._v(" "),I("p",[g._v("텐더민트는 ABCI라를 인터페이스를 사용해 트랜잭션을 애플리케이션에게 전달합니다. 이는 어플리케이션이 반드시 구현해야하는 부분입니다.")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAg7JWg7ZSM66as7LyA7J207IWYICAgIHwKfCAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tKy0tLSstLS0tLS0tLSsKICAgICAgICAgXiAgIHwKICAgICAgICAgfCAgIHwgQUJDSQogICAgICAgICB8ICAgdgorLS0tLS0tLS0rLS0tKy0tLS0tLS0tKwp8ICAgICAgICAgICAgICAgICAgICAgfAp8ICAgICAgICAgICAgICAgICAgICAgfAp8ICAgICAgIO2FkOuNlOuvvO2KuCAgICAgIHwKfCAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSsK"}}),g._v(" "),I("p",[I("strong",[g._v("텐더민트는 오직 거래의 bytes 값들만 취급하지 실제 그 bytes 들이 어떤 의미를 가지고 있는지는 파악하지 않습니다.")]),g._v(" 텐더민트가 하는 일은 이 거래 bytes 들을 결정론적으로 나열하는 것 뿐입니다. 텐더민트는 이 bytes 들을 ABCI 를 통해서 어플리케이션에 넘겨주고, 그 메세지에 담겨있는 거래들이 잘 처리되었는지 안되었는지를 확인해주는 return code 를 기다립니다.")]),g._v(" "),I("p",[g._v("아래에 ABCI 의 메세지들 중 가장 중요한 것들을 나열해놓았습니다:")]),g._v(" "),I("ul",[I("li",[I("p",[I("code",[g._v("CheckTx")]),g._v(": 텐더민트 코어로부터 거래를 받게 될 때, 이 거래는 어플리케이션에 넘겨져서 몇 가지 기본 요건을 충족하는지 확인합니다. "),I("code",[g._v("CheckTx")]),g._v(' 는 풀노드의 mempool을 스팸행위로 부터 보호하는데 사용됩니다. "Ante Handler" 라고 불리우는 특별한 handler 는 일련의 검증 과정을 실행하는데 사용됩니다. 예를 들면, 충분한 수수료가 있는지, 그리고 서명이 유효한지 확인합니다. 만약 검사 결과가 유효한 경우 되면, 해당 거래는 '),I("a",{attrs:{href:"https://tendermint.com/docs/spec/reactors/mempool/functionality.html#mempool-functionality",target:"_blank",rel:"noopener noreferrer"}},[g._v("mempool"),I("OutboundLink")],1),g._v("에 추가되고 피어 노드에게 전달됩니다. 참고로 트랜잭션이 블록에 추가되기 전까지는 "),I("code",[g._v("CheckTx")]),g._v(" 과정이 진행되지 않습니다. (즉, 상태의 변경이 일어나지 않습니다.)")])]),g._v(" "),I("li",[I("p",[I("code",[g._v("DeliverTx")]),g._v(" : 텐더민트 코어가 "),I("a",{attrs:{href:"https://tendermint.com/docs/spec/blockchain/blockchain.html#validation",target:"_blank",rel:"noopener noreferrer"}},[g._v("유효한 블록"),I("OutboundLink")],1),g._v("을 전달받는 경우, 각 블록의 트래잭션은 "),I("code",[g._v("DeliverTx")]),g._v("를 통해 애플리케이션에 전달합니다. 이 단계에서 상태 변경이 일어납니다. "),I("code",[g._v("AnteHandler")]),g._v("는 트랜잭션에 포함된 각 메세지를 검증하기 위해 다시 실행됩니다.")])]),g._v(" "),I("li",[I("p",[I("code",[g._v("BeginBlock")]),g._v("/"),I("code",[g._v("EndBlock")]),g._v(" : 해당 메세지는 블록내 트랜잭션 유뮤와는 별개로 블록 시작과 끝 단계에서 실행됩니다. 여기에서 로직의 자동 실행을 설정하는 것이 유용합니다. 하지만 복잡한 연산 또는 루프는 블록체인의 속도를 저하할 수 있으며, 무한 루프의 경우 블록체인을 멈출 수 있습니다.")])])]),g._v(" "),I("p",[g._v("ABCI 메소드와 타입에 대해서 더 자세하게 싶다면, "),I("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#overview",target:"_blank",rel:"noopener noreferrer"}},[g._v("텐더민트 문서"),I("OutboundLink")],1),g._v("를 참고하세요.")]),g._v(" "),I("p",[g._v("텐더민트 위에 구현된 모든 어플리케이션은 하위 텐더민트 엔진과 소통하기 위해 ABCI 인터페이스를 구현해야만 합니다. 물론 코스모스 SDK를 사용하는 경우, 코스모스 SDK가 "),I("a",{attrs:{href:"https://cosmos.network/docs/intro/sdk-design.html#baseapp",target:"_blank",rel:"noopener noreferrer"}},[g._v("baseapp"),I("OutboundLink")],1),g._v(" 의 형태로 일종의 템플릿를 제공합니다.")]),g._v(" "),I("h3",{attrs:{id:"다음은-sdk-설계-원칙에-대해서-알아보세요"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#다음은-sdk-설계-원칙에-대해서-알아보세요"}},[g._v("#")]),g._v(" 다음은 "),I("a",{attrs:{href:"https://cosmos.network/docs/intro/sdk-design.html#baseapp",target:"_blank",rel:"noopener noreferrer"}},[g._v("SDK 설계 원칙에 대해서 알아보세요"),I("OutboundLink")],1)])],1)}),[],!1,null,null,null);C.default=A.exports}}]);