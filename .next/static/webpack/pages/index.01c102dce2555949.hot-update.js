"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    const examples = [\n        {\n            title: \"Crie Seu Pr\\xf3prio Jogo\",\n            description: \"Imagine construir mundos incr\\xedveis e permitir que outras pessoas joguem!\",\n            image: \"https://cdn-icons-png.flaticon.com/128/7304/7304451.png\"\n        },\n        {\n            title: \"Explore Mapas Interativos\",\n            description: \"Mostre rotas, marque lugares no mapa e crie ferramentas incr\\xedveis para ajudar as pessoas.\",\n            image: \"https://images.vexels.com/media/users/3/210154/isolated/preview/5a6e7dbae9a2d1a2d15d5d1a7a314c3c-silhueta-do-mapa-da-america.png\"\n        },\n        {\n            title: \"Entenda as Elei\\xe7\\xf5es\",\n            description: \"Construa gr\\xe1ficos e pain\\xe9is que mostrem os resultados em tempo real!\",\n            image: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgrL3bojF8nxKrb4NQKUmkCBqHu_MindamQ&s\"\n        },\n        {\n            title: \"Ajude a Resolver Problemas do Mundo\",\n            description: \"Com tecnologia, voc\\xea pode criar solu\\xe7\\xf5es que realmente fazem diferen\\xe7a.\",\n            image: \"https://cdn-icons-png.flaticon.com/512/3339/3339252.png\"\n        }\n    ];\n    // Função para gerar e baixar um arquivo .txt\n    const handleDownloadTxt = ()=>{\n        const text = 'Bem-vindo \\xe0 programa\\xe7\\xe3o, Yan! \\uD83D\\uDE80\\n\\nVoc\\xea est\\xe1 prestes a come\\xe7ar uma jornada incr\\xedvel, onde poder\\xe1 criar jogos, explorar mapas interativos, entender resultados de elei\\xe7\\xf5es e muito mais. Aqui est\\xe3o algumas dicas para dar seus primeiros passos:\\n\\n1. **Crie uma conta no GitHub**\\n   - O GitHub \\xe9 como uma \"rede social\" para programadores. L\\xe1, voc\\xea pode salvar seus projetos, colaborar com outras pessoas e at\\xe9 contribuir com projetos famosos.\\n   - Acesse: https://github.com e crie sua conta gratuita.\\n\\n2. **Aprenda o b\\xe1sico de programa\\xe7\\xe3o**\\n   - Comece com uma linguagem simples e popular, como **JavaScript**. \\xc9 a base de muitos sites e jogos na web.\\n   - Assista aulas gratuitas no YouTube ou plataformas como:\\n     https://www.youtube.com/filipedeschamps\\n     . **Pratique todos os dias**\\n   - Reserve pelo menos 30 minutos por dia para programar. A pr\\xe1tica \\xe9 o segredo para melhorar!\\n   - Use ferramentas de intelig\\xeancia artificial para ajudar a entender, solicitando explica\\xe7\\xf5es detalhadas\\n\\n4. **Crie pequenos projetos**\\n   - N\\xe3o precisa come\\xe7ar com algo grande. Aqui est\\xe3o algumas ideias f\\xe1ceis:\\n     - Um site simples sobre algo que voc\\xea gosta (pode ser ideias, imagens) .\\n     - Um jogo b\\xe1sico como Pedra, Papel e Tesoura.\\n     - Um mapa interativo que mostra os pa\\xedses que voc\\xea quer visitar.\\n\\n5. **Explore cursos sobre as coisas que voc\\xea gosta**\\n   - Gosta de jogos? Aprenda a usar o Unity ou Godot.\\n   - Ama mapas? Experimente APIs de mapas como Google Maps ou Leaflet.\\n   - Quer entender gr\\xe1ficos e dados? Estude Python e bibliotecas como Matplotlib ou Plotly.\\n\\n6. **Participe da comunidade**\\n   - Entre em f\\xf3runs e grupos para aprender com outras pessoas. Aqui est\\xe3o algumas sugest\\xf5es:\\n     - Stack Overflow: https://stackoverflow.com/\\n     - Discords sobre programa\\xe7\\xe3o.\\n     - Reddit (subreddits como r/learnprogramming e r/javascript).\\n\\n7. **Compartilhe seu progresso**\\n   - Coloque seus projetos no GitHub e compartilhe com amigos. Isso motiva voc\\xea a continuar.\\n\\n8. **Nunca desista!**\\n   - No come\\xe7o, pode parecer dif\\xedcil, mas lembre-se: TODOS os programadores j\\xe1 foram iniciantes. O segredo \\xe9 dar um passo de cada vez.\\n\\n---\\n\\n\"Programar \\xe9 como construir algo m\\xe1gico: basta come\\xe7ar para descobrir o quanto voc\\xea \\xe9 capaz!\"\\n\\nBoa sorte na sua jornada! \\uD83D\\uDCBB✨ Estou do seu lado para o que precisar! ';\n        const blob = new Blob([\n            text\n        ], {\n            type: \"text/plain\"\n        });\n        const url = URL.createObjectURL(blob);\n        // Criar link temporário para download\n        const link = document.createElement(\"a\");\n        link.href = url;\n        link.download = \"BoasVindasProgramacao.txt\";\n        link.click();\n        // Revogar o objeto após o download\n        URL.revokeObjectURL(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Yan, descubra o que voc\\xea pode criar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.subtitle,\n                children: \"Com programa\\xe7\\xe3o, voc\\xea pode transformar suas paix\\xf5es em realidade:\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.grid,\n                children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: example.image,\n                                alt: example.title,\n                                style: styles.image\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: styles.cardTitle,\n                                children: example.title\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: styles.cardDescription,\n                                children: example.description\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: styles.button,\n                onClick: handleDownloadTxt,\n                children: \"Quero come\\xe7ar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nconst styles = {\n    container: {\n        padding: \"20px\",\n        fontFamily: \"Arial, sans-serif\",\n        textAlign: \"center\",\n        background: \"linear-gradient(135deg, #FFEDD5, #D4F1F4, #C3E0E5)\",\n        minHeight: \"100vh\",\n        color: \"#333\"\n    },\n    title: {\n        fontSize: \"2.5em\",\n        color: \"#1A535C\",\n        marginBottom: \"10px\"\n    },\n    subtitle: {\n        fontSize: \"1.5em\",\n        marginBottom: \"30px\",\n        color: \"#4ECDC4\"\n    },\n    grid: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        justifyContent: \"center\",\n        gap: \"20px\"\n    },\n    card: {\n        background: \"#FFFFFF\",\n        padding: \"20px\",\n        borderRadius: \"10px\",\n        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\",\n        maxWidth: \"250px\",\n        textAlign: \"center\"\n    },\n    image: {\n        width: \"100%\",\n        borderRadius: \"8px\"\n    },\n    cardTitle: {\n        fontSize: \"1.2em\",\n        color: \"#1A535C\",\n        margin: \"10px 0\"\n    },\n    cardDescription: {\n        fontSize: \"1em\",\n        color: \"#555\"\n    },\n    button: {\n        marginTop: \"30px\",\n        backgroundColor: \"#8ECAE6\",\n        color: \"white\",\n        padding: \"15px 30px\",\n        fontSize: \"1.2em\",\n        fontWeight: \"bold\",\n        border: \"none\",\n        borderRadius: \"8px\",\n        cursor: \"pointer\",\n        boxShadow: \"0 3px 5px rgba(0, 0, 0, 0.2)\",\n        transition: \"all 0.3s ease\"\n    },\n    buttonHover: {\n        backgroundColor: \"#219EBC\",\n        transform: \"translateY(-3px)\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQk0sV0FBVztJQUNiO0FBQ0Y7QUFFQSwrREFBZWhFLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBleGFtcGxlcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJDcmllIFNldSBQcsOzcHJpbyBKb2dvXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJJbWFnaW5lIGNvbnN0cnVpciBtdW5kb3MgaW5jcsOtdmVpcyBlIHBlcm1pdGlyIHF1ZSBvdXRyYXMgcGVzc29hcyBqb2d1ZW0hXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83MzA0LzczMDQ0NTEucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJFeHBsb3JlIE1hcGFzIEludGVyYXRpdm9zXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJNb3N0cmUgcm90YXMsIG1hcnF1ZSBsdWdhcmVzIG5vIG1hcGEgZSBjcmllIGZlcnJhbWVudGFzIGluY3LDrXZlaXMgcGFyYSBhanVkYXIgYXMgcGVzc29hcy5cIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnZleGVscy5jb20vbWVkaWEvdXNlcnMvMy8yMTAxNTQvaXNvbGF0ZWQvcHJldmlldy81YTZlN2RiYWU5YTJkMWEyZDE1ZDVkMWE3YTMxNGMzYy1zaWxodWV0YS1kby1tYXBhLWRhLWFtZXJpY2EucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJFbnRlbmRhIGFzIEVsZWnDp8O1ZXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbnN0cnVhIGdyw6FmaWNvcyBlIHBhaW7DqWlzIHF1ZSBtb3N0cmVtIG9zIHJlc3VsdGFkb3MgZW0gdGVtcG8gcmVhbCFcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1N0Z3JMM2JvakY4bnhLcmI0TlFLVW1rQ0JxSHVfTWluZGFtUSZzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBanVkZSBhIFJlc29sdmVyIFByb2JsZW1hcyBkbyBNdW5kb1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ29tIHRlY25vbG9naWEsIHZvY8OqIHBvZGUgY3JpYXIgc29sdcOnw7VlcyBxdWUgcmVhbG1lbnRlIGZhemVtIGRpZmVyZW7Dp2EuXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8zMzM5LzMzMzkyNTIucG5nXCIsXG4gICAgfSxcbiAgXTtcblxuICAvLyBGdW7Dp8OjbyBwYXJhIGdlcmFyIGUgYmFpeGFyIHVtIGFycXVpdm8gLnR4dFxuICBjb25zdCBoYW5kbGVEb3dubG9hZFR4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gYEJlbS12aW5kbyDDoCBwcm9ncmFtYcOnw6NvLCBZYW4hIPCfmoBcXG5cXG5Wb2PDqiBlc3TDoSBwcmVzdGVzIGEgY29tZcOnYXIgdW1hIGpvcm5hZGEgaW5jcsOtdmVsLCBvbmRlIHBvZGVyw6EgY3JpYXIgam9nb3MsIGV4cGxvcmFyIG1hcGFzIGludGVyYXRpdm9zLCBlbnRlbmRlciByZXN1bHRhZG9zIGRlIGVsZWnDp8O1ZXMgZSBtdWl0byBtYWlzLiBBcXVpIGVzdMOjbyBhbGd1bWFzIGRpY2FzIHBhcmEgZGFyIHNldXMgcHJpbWVpcm9zIHBhc3NvczpcXG5cXG4xLiAqKkNyaWUgdW1hIGNvbnRhIG5vIEdpdEh1YioqXFxuICAgLSBPIEdpdEh1YiDDqSBjb21vIHVtYSBcInJlZGUgc29jaWFsXCIgcGFyYSBwcm9ncmFtYWRvcmVzLiBMw6EsIHZvY8OqIHBvZGUgc2FsdmFyIHNldXMgcHJvamV0b3MsIGNvbGFib3JhciBjb20gb3V0cmFzIHBlc3NvYXMgZSBhdMOpIGNvbnRyaWJ1aXIgY29tIHByb2pldG9zIGZhbW9zb3MuXFxuICAgLSBBY2Vzc2U6IGh0dHBzOi8vZ2l0aHViLmNvbSBlIGNyaWUgc3VhIGNvbnRhIGdyYXR1aXRhLlxcblxcbjIuICoqQXByZW5kYSBvIGLDoXNpY28gZGUgcHJvZ3JhbWHDp8OjbyoqXFxuICAgLSBDb21lY2UgY29tIHVtYSBsaW5ndWFnZW0gc2ltcGxlcyBlIHBvcHVsYXIsIGNvbW8gKipKYXZhU2NyaXB0KiouIMOJIGEgYmFzZSBkZSBtdWl0b3Mgc2l0ZXMgZSBqb2dvcyBuYSB3ZWIuXFxuICAgLSBBc3Npc3RhIGF1bGFzIGdyYXR1aXRhcyBubyBZb3VUdWJlIG91IHBsYXRhZm9ybWFzIGNvbW86XFxuICAgICBodHRwczovL3d3dy55b3V0dWJlLmNvbS9maWxpcGVkZXNjaGFtcHNcXG4gICAgIC4gKipQcmF0aXF1ZSB0b2RvcyBvcyBkaWFzKipcXG4gICAtIFJlc2VydmUgcGVsbyBtZW5vcyAzMCBtaW51dG9zIHBvciBkaWEgcGFyYSBwcm9ncmFtYXIuIEEgcHLDoXRpY2Egw6kgbyBzZWdyZWRvIHBhcmEgbWVsaG9yYXIhXFxuICAgLSBVc2UgZmVycmFtZW50YXMgZGUgaW50ZWxpZ8OqbmNpYSBhcnRpZmljaWFsIHBhcmEgYWp1ZGFyIGEgZW50ZW5kZXIsIHNvbGljaXRhbmRvIGV4cGxpY2HDp8O1ZXMgZGV0YWxoYWRhc1xcblxcbjQuICoqQ3JpZSBwZXF1ZW5vcyBwcm9qZXRvcyoqXFxuICAgLSBOw6NvIHByZWNpc2EgY29tZcOnYXIgY29tIGFsZ28gZ3JhbmRlLiBBcXVpIGVzdMOjbyBhbGd1bWFzIGlkZWlhcyBmw6FjZWlzOlxcbiAgICAgLSBVbSBzaXRlIHNpbXBsZXMgc29icmUgYWxnbyBxdWUgdm9jw6ogZ29zdGEgKHBvZGUgc2VyIGlkZWlhcywgaW1hZ2VucykgLlxcbiAgICAgLSBVbSBqb2dvIGLDoXNpY28gY29tbyBQZWRyYSwgUGFwZWwgZSBUZXNvdXJhLlxcbiAgICAgLSBVbSBtYXBhIGludGVyYXRpdm8gcXVlIG1vc3RyYSBvcyBwYcOtc2VzIHF1ZSB2b2PDqiBxdWVyIHZpc2l0YXIuXFxuXFxuNS4gKipFeHBsb3JlIGN1cnNvcyBzb2JyZSBhcyBjb2lzYXMgcXVlIHZvY8OqIGdvc3RhKipcXG4gICAtIEdvc3RhIGRlIGpvZ29zPyBBcHJlbmRhIGEgdXNhciBvIFVuaXR5IG91IEdvZG90LlxcbiAgIC0gQW1hIG1hcGFzPyBFeHBlcmltZW50ZSBBUElzIGRlIG1hcGFzIGNvbW8gR29vZ2xlIE1hcHMgb3UgTGVhZmxldC5cXG4gICAtIFF1ZXIgZW50ZW5kZXIgZ3LDoWZpY29zIGUgZGFkb3M/IEVzdHVkZSBQeXRob24gZSBiaWJsaW90ZWNhcyBjb21vIE1hdHBsb3RsaWIgb3UgUGxvdGx5LlxcblxcbjYuICoqUGFydGljaXBlIGRhIGNvbXVuaWRhZGUqKlxcbiAgIC0gRW50cmUgZW0gZsOzcnVucyBlIGdydXBvcyBwYXJhIGFwcmVuZGVyIGNvbSBvdXRyYXMgcGVzc29hcy4gQXF1aSBlc3TDo28gYWxndW1hcyBzdWdlc3TDtWVzOlxcbiAgICAgLSBTdGFjayBPdmVyZmxvdzogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9cXG4gICAgIC0gRGlzY29yZHMgc29icmUgcHJvZ3JhbWHDp8Ojby5cXG4gICAgIC0gUmVkZGl0IChzdWJyZWRkaXRzIGNvbW8gci9sZWFybnByb2dyYW1taW5nIGUgci9qYXZhc2NyaXB0KS5cXG5cXG43LiAqKkNvbXBhcnRpbGhlIHNldSBwcm9ncmVzc28qKlxcbiAgIC0gQ29sb3F1ZSBzZXVzIHByb2pldG9zIG5vIEdpdEh1YiBlIGNvbXBhcnRpbGhlIGNvbSBhbWlnb3MuIElzc28gbW90aXZhIHZvY8OqIGEgY29udGludWFyLlxcblxcbjguICoqTnVuY2EgZGVzaXN0YSEqKlxcbiAgIC0gTm8gY29tZcOnbywgcG9kZSBwYXJlY2VyIGRpZsOtY2lsLCBtYXMgbGVtYnJlLXNlOiBUT0RPUyBvcyBwcm9ncmFtYWRvcmVzIGrDoSBmb3JhbSBpbmljaWFudGVzLiBPIHNlZ3JlZG8gw6kgZGFyIHVtIHBhc3NvIGRlIGNhZGEgdmV6Llxcblxcbi0tLVxcblxcblwiUHJvZ3JhbWFyIMOpIGNvbW8gY29uc3RydWlyIGFsZ28gbcOhZ2ljbzogYmFzdGEgY29tZcOnYXIgcGFyYSBkZXNjb2JyaXIgbyBxdWFudG8gdm9jw6ogw6kgY2FwYXohXCJcXG5cXG5Cb2Egc29ydGUgbmEgc3VhIGpvcm5hZGEhIPCfkrvinKggRXN0b3UgZG8gc2V1IGxhZG8gcGFyYSBvIHF1ZSBwcmVjaXNhciEgYDtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3RleHRdLCB7IHR5cGU6IFwidGV4dC9wbGFpblwiIH0pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgICAvLyBDcmlhciBsaW5rIHRlbXBvcsOhcmlvIHBhcmEgZG93bmxvYWRcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGxpbmsuZG93bmxvYWQgPSBcIkJvYXNWaW5kYXNQcm9ncmFtYWNhby50eHRcIjtcbiAgICBsaW5rLmNsaWNrKCk7XG5cbiAgICAvLyBSZXZvZ2FyIG8gb2JqZXRvIGFww7NzIG8gZG93bmxvYWRcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBzdHlsZT17c3R5bGVzLnRpdGxlfT5ZYW4sIGRlc2N1YnJhIG8gcXVlIHZvY8OqIHBvZGUgY3JpYXIhPC9oMT5cbiAgICAgIDxwIHN0eWxlPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICBDb20gcHJvZ3JhbWHDp8Ojbywgdm9jw6ogcG9kZSB0cmFuc2Zvcm1hciBzdWFzIHBhaXjDtWVzIGVtIHJlYWxpZGFkZTpcbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZXhhbXBsZS5pbWFnZX0gYWx0PXtleGFtcGxlLnRpdGxlfSBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT57ZXhhbXBsZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5jYXJkRGVzY3JpcHRpb259PntleGFtcGxlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkVHh0fT5cbiAgICAgICAgUXVlcm8gY29tZcOnYXIhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICBmb250RmFtaWx5OiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZGRURENSwgI0Q0RjFGNCwgI0MzRTBFNSlcIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICBjb2xvcjogXCIjMzMzXCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMi41ZW1cIixcbiAgICBjb2xvcjogXCIjMUE1MzVDXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxLjVlbVwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXG4gICAgY29sb3I6IFwiIzRFQ0RDNFwiLFxuICB9LFxuICBncmlkOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGdhcDogXCIyMHB4XCIsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgbWF4V2lkdGg6IFwiMjUwcHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgfSxcbiAgY2FyZFRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMS4yZW1cIixcbiAgICBjb2xvcjogXCIjMUE1MzVDXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICB9LFxuICBjYXJkRGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogXCIxZW1cIixcbiAgICBjb2xvcjogXCIjNTU1XCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM4RUNBRTZcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTVweCAzMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMS4yZW1cIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJveFNoYWRvdzogXCIwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlXCIsXG4gIH0sXG4gIGJ1dHRvbkhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMTlFQkNcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtM3B4KVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiSG9tZSIsImV4YW1wbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaGFuZGxlRG93bmxvYWRUeHQiLCJ0ZXh0IiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicmV2b2tlT2JqZWN0VVJMIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsInAiLCJzdWJ0aXRsZSIsImdyaWQiLCJtYXAiLCJleGFtcGxlIiwiaW5kZXgiLCJjYXJkIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJjYXJkVGl0bGUiLCJjYXJkRGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJib3JkZXIiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwiYnV0dG9uSG92ZXIiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});