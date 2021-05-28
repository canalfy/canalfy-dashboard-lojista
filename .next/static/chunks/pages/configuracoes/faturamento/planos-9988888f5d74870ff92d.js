(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{3502:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return p}});var r=i(5893),t=i(1664),s=i(2465),a=i(9163);function o(){var n=(0,s.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    margin: 40px 0;\n\n    .plan {\n        width: 300px;\n        max-width: 300px;\n        margin: 0 10px;\n\n        border: 1px solid rgba(255,255,255,.1);\n        border-radius: 5px;\n\n        text-align: center;\n\n        &:first-child {\n            margin-left: 0;\n        }\n\n        .title {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            height: 80px;\n\n            background: #152937;\n\n            h3 {\n                font-size: 2.6rem;\n                line-height: 3.2rem;\n                letter-spacing: .05rem;\n            }\n        }\n\n        .list {\n            width: 100%;\n            padding: 40px 20px;\n\n            li {\n                width: 100%;\n                padding: 20px 0;\n\n                border-bottom: 1px dashed rgba(255,255,255,.2);\n                list-style: none;\n\n                font-size: 1.4rem;\n                line-height: 2rem;\n                color: rgba(255,255,255,.8);\n            }\n        }\n\n        .price {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            height: 80px;\n\n            span {\n                font-size: 2.2rem;\n                line-height: 3rem;\n                font-weight: 700;\n\n                small {\n                    font-size: 1.4rem;\n                    font-weight: 400;\n                }\n            }\n        }\n\n        .btn {\n            width: 100%;\n            height: 60px;\n\n            button {\n                width: 100%;\n                height: 60px;\n\n                background: #01C253;\n                border: none;\n                border-radius: 5px;\n\n                cursor: pointer;\n                appearance: none;\n                -o-appearance: none;\n                -moz-appearance: none;\n                -webkit-appearance: none;\n\n                font-size: 1.6rem;\n                font-weight: 700;\n                color: rgba(255,255,255,1);\n            }\n        }\n\n        &.active button {\n            opacity: .15;\n            cursor: not-allowed;\n        }\n    }\n"]);return o=function(){return n},n}function l(){var n=(0,s.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 40px;\n\n    li {\n        margin: 20px;\n\n        list-style: none;\n\n        &:first-child {\n            margin-left: 0;\n        }\n\n        a {\n            position: relative;\n\n            font-size: 1.4rem;\n            line-height: 2rem;\n            color: rgba(255,255,255,.8);\n            text-decoration: none;\n            letter-spacing: .025rem;\n\n            &:before {\n                position: absolute;\n                bottom: -2px;\n                left: 0;\n\n                content: '';\n\n                width: 0;\n                height: 2px;\n\n                background: rgba(255,255,255,.8);\n\n                transition: width .5s ease-in-out;\n            }\n\n            &:hover:before {\n                width: 100%;\n\n                transition: width .5s ease-in-out;\n            }\n        }\n    }\n"]);return l=function(){return n},n}function d(){var n=(0,s.Z)(["\n    margin: 40px 0;\n\n    .breadcrumb {\n        font-size: 1.2rem;\n        line-height: 2rem;\n        color: rgba(255,255,255,.4);\n\n        a {\n            position: relative;\n\n            color: rgba(255,255,255,.8);\n            text-decoration: none;\n\n            &:before {\n                position: absolute;\n                bottom: -2px;\n                left: 0;\n\n                content: '';\n\n                width: 0;\n                height: 2px;\n\n                background: rgba(255,255,255,.8);\n\n                transition: width .5s ease-in-out;\n            }\n\n            &:hover:before {\n                width: 100%;\n\n                transition: width .5s ease-in-out;\n            }\n        }\n    }\n\n    h2 {\n        font-size: 4.2rem;\n        line-height: 6rem;\n        color: rgba(255,255,255,.8);\n    }\n"]);return d=function(){return n},n}var c=a.ZP.div(d()),h=a.ZP.nav(l()),x=a.ZP.div(o()),f=i(9052);var p=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsxs)(c,{children:[(0,r.jsxs)("div",{className:"breadcrumb",children:[(0,r.jsx)(t.default,{href:"/",children:"Dashboard"})," / ",(0,r.jsx)(t.default,{href:"/configuracoes/faturamento",children:"Faturamento"})," / Planos"]}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h2",{children:"Planos"})})]}),(0,r.jsxs)(h,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(t.default,{href:"/configuracoes/faturamento",children:"Resumo"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.default,{href:"/configuracoes/faturamento/infos",children:"Configura\xe7\xf5es da Fatura"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.default,{href:"/configuracoes/faturamento/planos",children:"Plano"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.default,{href:"/configuracoes/faturamento/metodos-de-pagamento",children:"M\xe9todo de Pagamento"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.default,{href:"/configuracoes/faturamento/faturas",children:"Faturas"})})]}),(0,r.jsxs)(x,{children:[(0,r.jsxs)("section",{className:"plan active",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Basic"})}),(0,r.jsxs)("div",{className:"list",children:[(0,r.jsx)("li",{children:"130 Convers\xf5es Trackeadas"}),(0,r.jsx)("li",{children:"5.000 Afiliados"}),(0,r.jsx)("li",{children:"Visitas ilimitadas"}),(0,r.jsx)("li",{children:"Suporte por e-mail"})]}),(0,r.jsx)("div",{className:"price",children:(0,r.jsxs)("span",{children:["R$ 1.500,00",(0,r.jsx)("small",{children:"/m\xeas"})]})}),(0,r.jsx)("div",{class:"btn",children:(0,r.jsx)("button",{children:(0,r.jsx)("span",{children:"Plano Atual"})})})]}),(0,r.jsxs)("section",{className:"plan",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Professional"})}),(0,r.jsxs)("div",{className:"list",children:[(0,r.jsx)("li",{children:"Convers\xf5es ilimitadas"}),(0,r.jsx)("li",{children:"Afiliados ilimitados"}),(0,r.jsx)("li",{children:"Visitas ilimitadas"}),(0,r.jsx)("li",{children:"Suporte por e-mail e chat"})]}),(0,r.jsx)("div",{className:"price",children:(0,r.jsxs)("span",{children:["R$ 2.500,00",(0,r.jsx)("small",{children:"/m\xeas"})]})}),(0,r.jsx)("div",{class:"btn",children:(0,r.jsx)("button",{children:(0,r.jsx)("span",{children:"Upgrade"})})})]})]})]})})}},9052:function(n,e,i){"use strict";i.d(e,{Z:function(){return S}});var r=i(5893),t=i(7375),s=i(7294),a=i(1664),o=i(9163),l=o.ZP.div.withConfig({displayName:"style__GroupArea",componentId:"iz141r-0"})(["width:100%;margin:40px 0;"]),d=o.ZP.div.withConfig({displayName:"style__TitleBar",componentId:"iz141r-1"})(["display:block;margin-bottom:20px;color:rgba(255,255,255,0.4);font-size:1rem;line-height:1.6rem;font-weight:700;letter-spacing:.15rem;text-transform:uppercase;"]),c=o.ZP.nav.withConfig({displayName:"style__Menu",componentId:"iz141r-2"})(["li{width:100%;height:40px;margin:5px 0;list-style:none;cursor:pointer;z-index:0;a{display:block;font-size:1.4rem;line-height:4rem;letter-spacing:.05rem;text-decoration:none;color:rgba(255,255,255,0.8);}transition:transform .5s ease-in-out,color .25s ease-in-out;&:hover{color:rgba(255,255,255,1);transform:translateX(10px);transition:transform .5s ease-in-out,color .25s ease-in-out;}}"]);var h=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(l,{children:[(0,r.jsx)(d,{children:"Gerenciamento"}),(0,r.jsxs)(c,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Dashboard"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/gerenciamento/pedidos",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Pedidos"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/gerenciamento/parceiros",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Parceiros"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/gerenciamento/categoria-de-comissoes",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Categoria de Comiss\xe3o"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/gerenciamento/criativo",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Criativos"})})})})]})]}),(0,r.jsxs)(l,{children:[(0,r.jsx)(d,{children:"Gest\xe3o de Pagamento"}),(0,r.jsxs)(c,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/gestao/comissoes",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Comiss\xf5es"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/gestao/consolidacoes",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Consolida\xe7\xf5es"})})})})]})]}),(0,r.jsxs)(l,{children:[(0,r.jsx)(d,{children:"Configura\xe7\xf5es"}),(0,r.jsxs)(c,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/configuracoes/geral",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Geral"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/configuracoes/loja",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Loja"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/configuracoes/ofertas",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Ofertas"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/configuracoes/pagamentos",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Repasse"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/configuracoes/termos-e-politicas",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Termos e Pol\xedticas"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/configuracoes/usuarios",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Usu\xe1rios"})})})})]})]}),(0,r.jsx)(l,{children:(0,r.jsx)(c,{children:(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/login",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Logout"})})})})})})]})},x=i(5675),f=i(2465);function p(){var n=(0,f.Z)(["\n    position: relative;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    margin-left: 10px;\n\n    background: #01C253;\n    border-radius: 5px;\n\n    button {\n        width: 40px;\n        height: 40px;\n        padding: 0;\n        margin: 0;\n\n        background: transparent;\n        border: none;\n\n        appearance: none;\n        -o-appearance: none;\n        -moz-appearance: none;\n        -webkit-appearance: none;\n        cursor: pointer;\n\n        color: #fff;\n    }\n\n    svg {\n        width: auto !important;\n    }\n\n    .svg-inline--fa {\n        height: 15px !important;\n    }\n\n    .submenu {\n        position: absolute;\n        top: 60px;\n        right: 0;\n        \n        display: flex;\n        justify-content: center;\n        align-items: flex-end;\n        flex-direction: column;\n        max-width: 200px;\n        width: 200px;\n        height: auto;\n        padding: 20px;\n\n        background: #152937;\n        border-radius: 0 0 5px 5px;\n\n        li {\n            margin: 10px 0;\n\n            list-style: none;\n            \n            font-size: 1.2rem;\n            line-height: 2rem;\n\n            a {\n                color: rgba(255,255,255,.8);\n                text-decoration: none;\n            }\n        }\n    }\n\n    @media screen and (max-width: 520px) {\n        .submenu {\n            left: 0;\n        }\n    }\n"]);return p=function(){return n},n}function u(){var n=(0,f.Z)(["\n    margin-right: 10px;\n\n    cursor: pointer;\n\n    svg {\n        width: auto !important;\n    }\n\n    .svg-inline--fa {\n        height: 15px !important;\n    }\n"]);return u=function(){return n},n}function m(){var n=(0,f.Z)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return m=function(){return n},n}function g(){var n=(0,f.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    img {\n        cursor: pointer;\n    }\n\n    @media screen and (max-width: 520px) {\n        margin-bottom: 20px;\n    }\n"]);return g=function(){return n},n}function j(){var n=(0,f.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 80px;\n    padding: 0 20px;\n\n    @media screen and (max-width: 520px) {\n        flex-direction: column;\n        height: auto;\n        padding: 20px;\n    }\n"]);return j=function(){return n},n}var b=o.ZP.div(j()),v=o.ZP.div(g()),w=o.ZP.div(m()),y=o.ZP.div(u()),P=o.ZP.div(p());var _=function(){return(0,r.jsx)("div",{children:(0,r.jsxs)("nav",{className:"submenu",children:[(0,r.jsx)("li",{children:(0,r.jsx)("span",{children:(0,r.jsx)(a.default,{href:"/configuracoes/perfil",children:"Visualizar Perfil"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("span",{children:(0,r.jsx)(a.default,{href:"/configuracoes/perfil/editar",children:"Editar Perfil"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("span",{children:(0,r.jsx)(a.default,{href:"/login",children:"Logout"})})})]})})},Z=i(7814),C=i(6024);var N=function(){var n=(0,s.useState)(!1),e=n[0],i=n[1];return(0,r.jsx)("div",{children:(0,r.jsxs)(b,{children:[(0,r.jsx)(v,{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)(x.default,{alt:"Logotipo",src:"/images/logo-cliente.png",width:126,height:30})})}),(0,r.jsxs)(w,{children:[(0,r.jsx)(y,{children:(0,r.jsx)(Z.G,{icon:C.lX})}),(0,r.jsxs)(P,{children:[(0,r.jsx)("button",{onClick:function(){i(!e)},children:(0,r.jsx)(Z.G,{icon:C.IL})}),e?(0,r.jsx)(_,{}):null]})]})]})})};function k(){var n=(0,f.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: 80px;\n\n    span {\n        font-size: 1.2rem;\n        line-height: 1.8rem;\n        letter-spacing: .05rem;\n\n        a {\n            position: relative;\n\n            font-weight: 700;\n            color: #01C253;\n            text-decoration: none;\n\n            &:before {\n                position: absolute;\n                left: 0;\n                bottom: -2px;\n\n                content: '';\n\n                width: 0;\n                height: 2px;\n\n                background: #01C253;\n\n                transition: width .5s ease-in-out;\n            }\n\n            &:hover:before {\n                width: 100%;\n\n                transition: width .5s ease-in-out;\n            }\n        }\n    }\n    \n"]);return k=function(){return n},n}var z=o.ZP.div(k());var I=function(){return(0,r.jsx)("div",{children:(0,r.jsxs)(z,{children:[(0,r.jsx)("span",{children:"\xa9 2021. Todos os direitos reservados."}),(0,r.jsxs)("span",{children:["Uma tecnologia ",(0,r.jsx)(a.default,{href:"/",children:"Canalfy"})]})]})})},A=o.ZP.main.withConfig({displayName:"style__MainLayout",componentId:"sc-5i31n1-0"})(["width:100%;min-height:100vh;"]),L=o.ZP.header.withConfig({displayName:"style__HeaderLayout",componentId:"sc-5i31n1-1"})(["width:100%;height:80px;background:#152937;@media screen and (max-width:520px){height:auto;}"]),G=o.ZP.section.withConfig({displayName:"style__FullLayout",componentId:"sc-5i31n1-2"})(["display:grid;grid-template-columns:1fr 4fr;gap:30px;justify-content:flex-start;align-items:flex-start;@media screen and (max-width:768px){grid-template-columns:1fr;}"]),E=o.ZP.aside.withConfig({displayName:"style__AsideArea",componentId:"sc-5i31n1-3"})(["width:100%;height:100%;padding:20px;background:#122330;@media screen and (max-width:768px){display:none;}"]),F=o.ZP.div.withConfig({displayName:"style__ContentArea",componentId:"sc-5i31n1-4"})(["width:100%;height:100%;padding:20px;"]),T=o.ZP.div.withConfig({displayName:"style__OpenAside",componentId:"sc-5i31n1-5"})(["display:none;@media screen and (max-width:768px){position:fixed;top:95px;left:0;display:flex;justify-content:center;align-items:center;width:40px;height:40px;background:#01C253;border-radius:0 5px 5px 0;box-shadow:0 0 10px rgba(0,0,0,.15);font-size:2rem;z-index:20;}"]),M=o.ZP.aside.withConfig({displayName:"style__AsideMobile",componentId:"sc-5i31n1-6"})(["position:fixed;top:0;right:0;bottom:0;left:0;width:100%;min-height:100%;padding:20px;background:#122330;text-align:right;z-index:15;"]),O=o.ZP.footer.withConfig({displayName:"style__FooterLayout",componentId:"sc-5i31n1-7"})(["width:100%;height:80px;background:#152937;"]),R=i(1436);var S=function(n){var e=n.children,i=((0,t.Z)(n,["children"]),(0,s.useState)(!1)),a=i[0],o=i[1];return(0,r.jsx)("div",{children:(0,r.jsxs)(A,{children:[(0,r.jsx)(L,{children:(0,r.jsx)(N,{})}),(0,r.jsxs)(G,{children:[(0,r.jsx)(E,{children:(0,r.jsx)(h,{})}),(0,r.jsx)(T,{onClick:function(){o(!a)},children:(0,r.jsx)(Z.G,{icon:R.xiG})}),(0,r.jsx)(F,{children:e})]}),a?(0,r.jsx)(M,{children:(0,r.jsx)(h,{})}):null,(0,r.jsx)(O,{children:(0,r.jsx)(I,{})})]})})}},7201:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuracoes/faturamento/planos",function(){return i(3502)}])}},function(n){n.O(0,[774,523,351,163,61,832,39],(function(){return e=7201,n(n.s=e);var e}));var e=n.O();_N_E=e}]);