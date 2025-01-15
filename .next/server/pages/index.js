"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    const examples = [\n        {\n            title: \"Crie Seu Pr\\xf3prio Jogo\",\n            description: \"Imagine construir mundos incr\\xedveis e permitir que outras pessoas joguem!\",\n            image: \"https://cdn-icons-png.flaticon.com/128/7304/7304451.png\"\n        },\n        {\n            title: \"Explore Mapas Interativos\",\n            description: \"Mostre rotas, marque lugares no mapa e crie ferramentas incr\\xedveis para ajudar as pessoas.\",\n            image: \"https://images.vexels.com/media/users/3/210154/isolated/preview/5a6e7dbae9a2d1a2d15d5d1a7a314c3c-silhueta-do-mapa-da-america.png\"\n        },\n        {\n            title: \"Entenda as Elei\\xe7\\xf5es\",\n            description: \"Construa gr\\xe1ficos e pain\\xe9is que mostrem os resultados em tempo real!\",\n            image: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgrL3bojF8nxKrb4NQKUmkCBqHu_MindamQ&s\"\n        },\n        {\n            title: \"Ajude a Resolver Problemas do Mundo\",\n            description: \"Com tecnologia, voc\\xea pode criar solu\\xe7\\xf5es que realmente fazem diferen\\xe7a.\",\n            image: \"https://cdn-icons-png.flaticon.com/512/3339/3339252.png\"\n        }\n    ];\n    // Função para gerar e baixar um arquivo .txt\n    const handleDownloadTxt = ()=>{\n        const confirmation = window.confirm(\"O download do arquivo com dicas para come\\xe7ar na programa\\xe7\\xe3o ser\\xe1 iniciado. Deseja continuar?\");\n        if (confirmation) {\n            const text = `Bem-vindo à programação, Yan! 🚀\\n\\nVocê está prestes a começar uma jornada incrível, onde poderá criar jogos, explorar mapas interativos, entender resultados de eleições e muito mais. Aqui estão algumas dicas para dar seus primeiros passos:\\n\\n1. **Crie uma conta no GitHub**\\n   - O GitHub é como uma \"rede social\" para programadores. Lá, você pode salvar seus projetos, colaborar com outras pessoas e até contribuir com projetos famosos.\\n   - Acesse: https://github.com e crie sua conta gratuita.\\n\\n2. **Aprenda o básico de programação**\\n   - Comece com uma linguagem simples e popular, como **JavaScript**. É a base de muitos sites e jogos na web.\\n   - Assista aulas gratuitas no YouTube ou plataformas como:\\n     https://www.youtube.com/filipedeschamps\\n\\n3. **Pratique todos os dias**\\n   - Reserve pelo menos 30 minutos por dia para programar. A prática é o segredo para melhorar!\\n   - Use ferramentas de inteligência artificial para ajudar a entender, solicitando explicações detalhadas\\n\\n4. **Crie pequenos projetos**\\n   - Não precisa começar com algo grande. Aqui estão algumas ideias fáceis:\\n     - Um site simples sobre algo que você gosta (pode ser ideias, imagens) .\\n     - Um jogo básico como Pedra, Papel e Tesoura.\\n     - Um mapa interativo que mostra os países que você quer visitar.\\n\\n5. **Explore cursos sobre as coisas que você gosta**\\n   - Gosta de jogos? Aprenda a usar o Unity ou Godot.\\n   - Ama mapas? Experimente APIs de mapas como Google Maps ou Leaflet.\\n   - Quer entender gráficos e dados? Estude Python e bibliotecas como Matplotlib ou Plotly.\\n\\n6. **Participe da comunidade**\\n   - Entre em fóruns e grupos para aprender com outras pessoas. Aqui estão algumas sugestões:\\n     - Stack Overflow: https://stackoverflow.com/\\n     - Discords sobre programação.\\n     - Reddit (subreddits como r/learnprogramming e r/javascript).\\n\\n7. **Compartilhe seu progresso**\\n   - Coloque seus projetos no GitHub e compartilhe com amigos. Isso motiva você a continuar.\\n\\n8. **Nunca desista!**\\n   - No começo, pode parecer difícil, mas lembre-se: TODOS os programadores já foram iniciantes. O segredo é dar um passo de cada vez.\\n\\n---\\n\\n\"Programar é como construir algo mágico: basta começar para descobrir o quanto você é capaz!\"\\n\\nBoa sorte na sua jornada! Estou do seu lado para o que precisar!  💻✨ `;\n            const blob = new Blob([\n                text\n            ], {\n                type: \"text/plain\"\n            });\n            const url = URL.createObjectURL(blob);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.download = \"DicasParaComecar.txt\";\n            link.click();\n            URL.revokeObjectURL(url);\n        } else {\n            alert(\"Tudo bem, voc\\xea pode come\\xe7ar quando estiver pronto!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Yan, descubra o que voc\\xea pode criar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.subtitle,\n                children: \"Com programa\\xe7\\xe3o, voc\\xea pode transformar suas paix\\xf5es em realidade:\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.grid,\n                children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: example.image,\n                                alt: example.title,\n                                style: styles.image\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: styles.cardTitle,\n                                children: example.title\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: styles.cardDescription,\n                                children: example.description\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: styles.button,\n                onClick: handleDownloadTxt,\n                children: \"Quero come\\xe7ar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\nconst styles = {\n    container: {\n        padding: \"20px\",\n        fontFamily: \"Arial, sans-serif\",\n        textAlign: \"center\",\n        background: \"linear-gradient(135deg, #FFEDD5, #D4F1F4, #C3E0E5)\",\n        minHeight: \"100vh\",\n        color: \"#333\"\n    },\n    title: {\n        fontSize: \"2.5em\",\n        color: \"#1A535C\",\n        marginBottom: \"10px\"\n    },\n    subtitle: {\n        fontSize: \"1.5em\",\n        marginBottom: \"30px\",\n        color: \"#4ECDC4\"\n    },\n    grid: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        justifyContent: \"center\",\n        gap: \"20px\"\n    },\n    card: {\n        background: \"#FFFFFF\",\n        padding: \"20px\",\n        borderRadius: \"10px\",\n        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\",\n        maxWidth: \"250px\",\n        textAlign: \"center\"\n    },\n    image: {\n        width: \"100%\",\n        borderRadius: \"8px\"\n    },\n    cardTitle: {\n        fontSize: \"1.2em\",\n        color: \"#1A535C\",\n        margin: \"10px 0\"\n    },\n    cardDescription: {\n        fontSize: \"1em\",\n        color: \"#555\"\n    },\n    button: {\n        marginTop: \"30px\",\n        backgroundColor: \"#8ECAE6\",\n        color: \"white\",\n        padding: \"15px 30px\",\n        fontSize: \"1.2em\",\n        fontWeight: \"bold\",\n        border: \"none\",\n        borderRadius: \"8px\",\n        cursor: \"pointer\",\n        boxShadow: \"0 3px 5px rgba(0, 0, 0, 0.2)\",\n        transition: \"all 0.3s ease\"\n    },\n    buttonHover: {\n        backgroundColor: \"#219EBC\",\n        transform: \"translateY(-3px)\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDUlIsY0FBYztRQUNkUyxRQUFRO1FBQ1JSLFdBQVc7UUFDWFMsWUFBWTtJQUNkO0lBQ0FDLGFBQWE7UUFDWEwsaUJBQWlCO1FBQ2pCTSxXQUFXO0lBQ2I7QUFDRjtBQUVBLGlFQUFlcEUsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGV4YW1wbGVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNyaWUgU2V1IFByw7NwcmlvIEpvZ29cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkltYWdpbmUgY29uc3RydWlyIG11bmRvcyBpbmNyw612ZWlzIGUgcGVybWl0aXIgcXVlIG91dHJhcyBwZXNzb2FzIGpvZ3VlbSFcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzczMDQvNzMwNDQ1MS5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkV4cGxvcmUgTWFwYXMgSW50ZXJhdGl2b3NcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1vc3RyZSByb3RhcywgbWFycXVlIGx1Z2FyZXMgbm8gbWFwYSBlIGNyaWUgZmVycmFtZW50YXMgaW5jcsOtdmVpcyBwYXJhIGFqdWRhciBhcyBwZXNzb2FzLlwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudmV4ZWxzLmNvbS9tZWRpYS91c2Vycy8zLzIxMDE1NC9pc29sYXRlZC9wcmV2aWV3LzVhNmU3ZGJhZTlhMmQxYTJkMTVkNWQxYTdhMzE0YzNjLXNpbGh1ZXRhLWRvLW1hcGEtZGEtYW1lcmljYS5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkVudGVuZGEgYXMgRWxlacOnw7Vlc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ29uc3RydWEgZ3LDoWZpY29zIGUgcGFpbsOpaXMgcXVlIG1vc3RyZW0gb3MgcmVzdWx0YWRvcyBlbSB0ZW1wbyByZWFsIVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU3RnckwzYm9qRjhueEtyYjROUUtVbWtDQnFIdV9NaW5kYW1RJnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFqdWRlIGEgUmVzb2x2ZXIgUHJvYmxlbWFzIGRvIE11bmRvXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb20gdGVjbm9sb2dpYSwgdm9jw6ogcG9kZSBjcmlhciBzb2x1w6fDtWVzIHF1ZSByZWFsbWVudGUgZmF6ZW0gZGlmZXJlbsOnYS5cIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzMzMzkvMzMzOTI1Mi5wbmdcIixcbiAgICB9LFxuICBdO1xuXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZ2VyYXIgZSBiYWl4YXIgdW0gYXJxdWl2byAudHh0XG4gIGNvbnN0IGhhbmRsZURvd25sb2FkVHh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgXCJPIGRvd25sb2FkIGRvIGFycXVpdm8gY29tIGRpY2FzIHBhcmEgY29tZcOnYXIgbmEgcHJvZ3JhbWHDp8OjbyBzZXLDoSBpbmljaWFkby4gRGVzZWphIGNvbnRpbnVhcj9cIlxuICAgICk7XG4gICAgXG4gICAgaWYgKGNvbmZpcm1hdGlvbikge1xuICAgIGNvbnN0IHRleHQgPSBgQmVtLXZpbmRvIMOgIHByb2dyYW1hw6fDo28sIFlhbiEg8J+agFxcblxcblZvY8OqIGVzdMOhIHByZXN0ZXMgYSBjb21lw6dhciB1bWEgam9ybmFkYSBpbmNyw612ZWwsIG9uZGUgcG9kZXLDoSBjcmlhciBqb2dvcywgZXhwbG9yYXIgbWFwYXMgaW50ZXJhdGl2b3MsIGVudGVuZGVyIHJlc3VsdGFkb3MgZGUgZWxlacOnw7VlcyBlIG11aXRvIG1haXMuIEFxdWkgZXN0w6NvIGFsZ3VtYXMgZGljYXMgcGFyYSBkYXIgc2V1cyBwcmltZWlyb3MgcGFzc29zOlxcblxcbjEuICoqQ3JpZSB1bWEgY29udGEgbm8gR2l0SHViKipcXG4gICAtIE8gR2l0SHViIMOpIGNvbW8gdW1hIFwicmVkZSBzb2NpYWxcIiBwYXJhIHByb2dyYW1hZG9yZXMuIEzDoSwgdm9jw6ogcG9kZSBzYWx2YXIgc2V1cyBwcm9qZXRvcywgY29sYWJvcmFyIGNvbSBvdXRyYXMgcGVzc29hcyBlIGF0w6kgY29udHJpYnVpciBjb20gcHJvamV0b3MgZmFtb3Nvcy5cXG4gICAtIEFjZXNzZTogaHR0cHM6Ly9naXRodWIuY29tIGUgY3JpZSBzdWEgY29udGEgZ3JhdHVpdGEuXFxuXFxuMi4gKipBcHJlbmRhIG8gYsOhc2ljbyBkZSBwcm9ncmFtYcOnw6NvKipcXG4gICAtIENvbWVjZSBjb20gdW1hIGxpbmd1YWdlbSBzaW1wbGVzIGUgcG9wdWxhciwgY29tbyAqKkphdmFTY3JpcHQqKi4gw4kgYSBiYXNlIGRlIG11aXRvcyBzaXRlcyBlIGpvZ29zIG5hIHdlYi5cXG4gICAtIEFzc2lzdGEgYXVsYXMgZ3JhdHVpdGFzIG5vIFlvdVR1YmUgb3UgcGxhdGFmb3JtYXMgY29tbzpcXG4gICAgIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2ZpbGlwZWRlc2NoYW1wc1xcblxcbjMuICoqUHJhdGlxdWUgdG9kb3Mgb3MgZGlhcyoqXFxuICAgLSBSZXNlcnZlIHBlbG8gbWVub3MgMzAgbWludXRvcyBwb3IgZGlhIHBhcmEgcHJvZ3JhbWFyLiBBIHByw6F0aWNhIMOpIG8gc2VncmVkbyBwYXJhIG1lbGhvcmFyIVxcbiAgIC0gVXNlIGZlcnJhbWVudGFzIGRlIGludGVsaWfDqm5jaWEgYXJ0aWZpY2lhbCBwYXJhIGFqdWRhciBhIGVudGVuZGVyLCBzb2xpY2l0YW5kbyBleHBsaWNhw6fDtWVzIGRldGFsaGFkYXNcXG5cXG40LiAqKkNyaWUgcGVxdWVub3MgcHJvamV0b3MqKlxcbiAgIC0gTsOjbyBwcmVjaXNhIGNvbWXDp2FyIGNvbSBhbGdvIGdyYW5kZS4gQXF1aSBlc3TDo28gYWxndW1hcyBpZGVpYXMgZsOhY2VpczpcXG4gICAgIC0gVW0gc2l0ZSBzaW1wbGVzIHNvYnJlIGFsZ28gcXVlIHZvY8OqIGdvc3RhIChwb2RlIHNlciBpZGVpYXMsIGltYWdlbnMpIC5cXG4gICAgIC0gVW0gam9nbyBiw6FzaWNvIGNvbW8gUGVkcmEsIFBhcGVsIGUgVGVzb3VyYS5cXG4gICAgIC0gVW0gbWFwYSBpbnRlcmF0aXZvIHF1ZSBtb3N0cmEgb3MgcGHDrXNlcyBxdWUgdm9jw6ogcXVlciB2aXNpdGFyLlxcblxcbjUuICoqRXhwbG9yZSBjdXJzb3Mgc29icmUgYXMgY29pc2FzIHF1ZSB2b2PDqiBnb3N0YSoqXFxuICAgLSBHb3N0YSBkZSBqb2dvcz8gQXByZW5kYSBhIHVzYXIgbyBVbml0eSBvdSBHb2RvdC5cXG4gICAtIEFtYSBtYXBhcz8gRXhwZXJpbWVudGUgQVBJcyBkZSBtYXBhcyBjb21vIEdvb2dsZSBNYXBzIG91IExlYWZsZXQuXFxuICAgLSBRdWVyIGVudGVuZGVyIGdyw6FmaWNvcyBlIGRhZG9zPyBFc3R1ZGUgUHl0aG9uIGUgYmlibGlvdGVjYXMgY29tbyBNYXRwbG90bGliIG91IFBsb3RseS5cXG5cXG42LiAqKlBhcnRpY2lwZSBkYSBjb211bmlkYWRlKipcXG4gICAtIEVudHJlIGVtIGbDs3J1bnMgZSBncnVwb3MgcGFyYSBhcHJlbmRlciBjb20gb3V0cmFzIHBlc3NvYXMuIEFxdWkgZXN0w6NvIGFsZ3VtYXMgc3VnZXN0w7VlczpcXG4gICAgIC0gU3RhY2sgT3ZlcmZsb3c6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vXFxuICAgICAtIERpc2NvcmRzIHNvYnJlIHByb2dyYW1hw6fDo28uXFxuICAgICAtIFJlZGRpdCAoc3VicmVkZGl0cyBjb21vIHIvbGVhcm5wcm9ncmFtbWluZyBlIHIvamF2YXNjcmlwdCkuXFxuXFxuNy4gKipDb21wYXJ0aWxoZSBzZXUgcHJvZ3Jlc3NvKipcXG4gICAtIENvbG9xdWUgc2V1cyBwcm9qZXRvcyBubyBHaXRIdWIgZSBjb21wYXJ0aWxoZSBjb20gYW1pZ29zLiBJc3NvIG1vdGl2YSB2b2PDqiBhIGNvbnRpbnVhci5cXG5cXG44LiAqKk51bmNhIGRlc2lzdGEhKipcXG4gICAtIE5vIGNvbWXDp28sIHBvZGUgcGFyZWNlciBkaWbDrWNpbCwgbWFzIGxlbWJyZS1zZTogVE9ET1Mgb3MgcHJvZ3JhbWFkb3JlcyBqw6EgZm9yYW0gaW5pY2lhbnRlcy4gTyBzZWdyZWRvIMOpIGRhciB1bSBwYXNzbyBkZSBjYWRhIHZlei5cXG5cXG4tLS1cXG5cXG5cIlByb2dyYW1hciDDqSBjb21vIGNvbnN0cnVpciBhbGdvIG3DoWdpY286IGJhc3RhIGNvbWXDp2FyIHBhcmEgZGVzY29icmlyIG8gcXVhbnRvIHZvY8OqIMOpIGNhcGF6IVwiXFxuXFxuQm9hIHNvcnRlIG5hIHN1YSBqb3JuYWRhISBFc3RvdSBkbyBzZXUgbGFkbyBwYXJhIG8gcXVlIHByZWNpc2FyISAg8J+Su+KcqCBgO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbdGV4dF0sIHsgdHlwZTogXCJ0ZXh0L3BsYWluXCIgfSk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgbGluay5kb3dubG9hZCA9IFwiRGljYXNQYXJhQ29tZWNhci50eHRcIjtcbiAgICBsaW5rLmNsaWNrKCk7XG5cbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJUdWRvIGJlbSwgdm9jw6ogcG9kZSBjb21lw6dhciBxdWFuZG8gZXN0aXZlciBwcm9udG8hXCIpO1xuICB9XG59O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgc3R5bGU9e3N0eWxlcy50aXRsZX0+WWFuLCBkZXNjdWJyYSBvIHF1ZSB2b2PDqiBwb2RlIGNyaWFyITwvaDE+XG4gICAgICA8cCBzdHlsZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgQ29tIHByb2dyYW1hw6fDo28sIHZvY8OqIHBvZGUgdHJhbnNmb3JtYXIgc3VhcyBwYWl4w7VlcyBlbSByZWFsaWRhZGU6XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgIHtleGFtcGxlcy5tYXAoKGV4YW1wbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2V4YW1wbGUuaW1hZ2V9IGFsdD17ZXhhbXBsZS50aXRsZX0gc3R5bGU9e3N0eWxlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmNhcmRUaXRsZX0+e2V4YW1wbGUudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuY2FyZERlc2NyaXB0aW9ufT57ZXhhbXBsZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZFR4dH0+XG4gICAgICAgIFF1ZXJvIGNvbWXDp2FyIVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgZm9udEZhbWlseTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkVERDUsICNENEYxRjQsICNDM0UwRTUpXCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgY29sb3I6IFwiIzMzM1wiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjIuNWVtXCIsXG4gICAgY29sb3I6IFwiIzFBNTM1Q1wiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG4gIH0sXG4gIHN1YnRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMS41ZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgIGNvbG9yOiBcIiM0RUNEQzRcIixcbiAgfSxcbiAgZ3JpZDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBnYXA6IFwiMjBweFwiLFxuICB9LFxuICBjYXJkOiB7XG4gICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgIG1heFdpZHRoOiBcIjI1MHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICBpbWFnZToge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gIH0sXG4gIGNhcmRUaXRsZToge1xuICAgIGZvbnRTaXplOiBcIjEuMmVtXCIsXG4gICAgY29sb3I6IFwiIzFBNTM1Q1wiLFxuICAgIG1hcmdpbjogXCIxMHB4IDBcIixcbiAgfSxcbiAgY2FyZERlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IFwiMWVtXCIsXG4gICAgY29sb3I6IFwiIzU1NVwiLFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjOEVDQUU2XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBwYWRkaW5nOiBcIjE1cHggMzBweFwiLFxuICAgIGZvbnRTaXplOiBcIjEuMmVtXCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3hTaGFkb3c6IFwiMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZVwiLFxuICB9LFxuICBidXR0b25Ib3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjE5RUJDXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTNweClcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkhvbWUiLCJleGFtcGxlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImhhbmRsZURvd25sb2FkVHh0IiwiY29uZmlybWF0aW9uIiwid2luZG93IiwiY29uZmlybSIsInRleHQiLCJibG9iIiwiQmxvYiIsInR5cGUiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJhbGVydCIsImRpdiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaDEiLCJwIiwic3VidGl0bGUiLCJncmlkIiwibWFwIiwiZXhhbXBsZSIsImluZGV4IiwiY2FyZCIsImltZyIsInNyYyIsImFsdCIsImgyIiwiY2FyZFRpdGxlIiwiY2FyZERlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInBhZGRpbmciLCJmb250RmFtaWx5IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImdhcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1heFdpZHRoIiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiYm9yZGVyIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsImJ1dHRvbkhvdmVyIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();