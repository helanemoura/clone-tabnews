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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    const examples = [\n        {\n            title: \"Crie Seu Pr\\xf3prio Jogo\",\n            description: \"Imagine construir mundos incr\\xedveis e permitir que outras pessoas joguem!\",\n            image: \"https://cdn-icons-png.flaticon.com/128/7304/7304451.png\"\n        },\n        {\n            title: \"Explore Mapas Interativos\",\n            description: \"Mostre rotas, marque lugares no mapa e crie ferramentas incr\\xedveis para ajudar as pessoas.\",\n            image: \"https://images.vexels.com/media/users/3/210154/isolated/preview/5a6e7dbae9a2d1a2d15d5d1a7a314c3c-silhueta-do-mapa-da-america.png\"\n        },\n        {\n            title: \"Entenda as Elei\\xe7\\xf5es\",\n            description: \"Construa gr\\xe1ficos e pain\\xe9is que mostrem os resultados em tempo real!\",\n            image: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgrL3bojF8nxKrb4NQKUmkCBqHu_MindamQ&s\"\n        },\n        {\n            title: \"Ajude a Resolver Problemas do Mundo\",\n            description: \"Com tecnologia, voc\\xea pode criar solu\\xe7\\xf5es que realmente fazem diferen\\xe7a.\",\n            image: \"https://cdn-icons-png.flaticon.com/512/3339/3339252.png\"\n        }\n    ];\n    // Função para gerar e baixar um arquivo .txt\n    const handleDownloadTxt = ()=>{\n        const confirmation = window.confirm(\"O download do arquivo com dicas para come\\xe7ar na programa\\xe7\\xe3o ser\\xe1 iniciado. Deseja continuar?\");\n        if (confirmation) {\n            const text = 'Bem-vindo \\xe0 programa\\xe7\\xe3o, Yan! \\uD83D\\uDE80\\n\\nVoc\\xea est\\xe1 prestes a come\\xe7ar uma jornada incr\\xedvel, onde poder\\xe1 criar jogos, explorar mapas interativos, entender resultados de elei\\xe7\\xf5es e muito mais. Aqui est\\xe3o algumas dicas para dar seus primeiros passos:\\n\\n1. **Crie uma conta no GitHub**\\n   - O GitHub \\xe9 como uma \"rede social\" para programadores. L\\xe1, voc\\xea pode salvar seus projetos, colaborar com outras pessoas e at\\xe9 contribuir com projetos famosos.\\n   - Acesse: https://github.com e crie sua conta gratuita.\\n\\n2. **Aprenda o b\\xe1sico de programa\\xe7\\xe3o**\\n   - Comece com uma linguagem simples e popular, como **JavaScript**. \\xc9 a base de muitos sites e jogos na web.\\n   - Assista aulas gratuitas no YouTube ou plataformas como:\\n     https://www.youtube.com/filipedeschamps\\n\\n3. **Pratique todos os dias**\\n   - Reserve pelo menos 30 minutos por dia para programar. A pr\\xe1tica \\xe9 o segredo para melhorar!\\n   - Use ferramentas de intelig\\xeancia artificial para ajudar a entender, solicitando explica\\xe7\\xf5es detalhadas\\n\\n4. **Crie pequenos projetos**\\n   - N\\xe3o precisa come\\xe7ar com algo grande. Aqui est\\xe3o algumas ideias f\\xe1ceis:\\n     - Um site simples sobre algo que voc\\xea gosta (pode ser ideias, imagens) .\\n     - Um jogo b\\xe1sico como Pedra, Papel e Tesoura.\\n     - Um mapa interativo que mostra os pa\\xedses que voc\\xea quer visitar.\\n\\n5. **Explore cursos sobre as coisas que voc\\xea gosta**\\n   - Gosta de jogos? Aprenda a usar o Unity ou Godot.\\n   - Ama mapas? Experimente APIs de mapas como Google Maps ou Leaflet.\\n   - Quer entender gr\\xe1ficos e dados? Estude Python e bibliotecas como Matplotlib ou Plotly.\\n\\n6. **Participe da comunidade**\\n   - Entre em f\\xf3runs e grupos para aprender com outras pessoas. Aqui est\\xe3o algumas sugest\\xf5es:\\n     - Stack Overflow: https://stackoverflow.com/\\n     - Discords sobre programa\\xe7\\xe3o.\\n     - Reddit (subreddits como r/learnprogramming e r/javascript).\\n\\n7. **Compartilhe seu progresso**\\n   - Coloque seus projetos no GitHub e compartilhe com amigos. Isso motiva voc\\xea a continuar.\\n\\n8. **Nunca desista!**\\n   - No come\\xe7o, pode parecer dif\\xedcil, mas lembre-se: TODOS os programadores j\\xe1 foram iniciantes. O segredo \\xe9 dar um passo de cada vez.\\n\\n---\\n\\n\"Programar \\xe9 como construir algo m\\xe1gico: basta come\\xe7ar para descobrir o quanto voc\\xea \\xe9 capaz!\"\\n\\nBoa sorte na sua jornada! Estou do seu lado para o que precisar!  \\uD83D\\uDCBB✨ ';\n            const blob = new Blob([\n                text\n            ], {\n                type: \"text/plain\"\n            });\n            const url = URL.createObjectURL(blob);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.download = \"DicasParaComecar.txt\";\n            link.click();\n            URL.revokeObjectURL(url);\n        } else {\n            alert(\"Tudo bem, voc\\xea pode come\\xe7ar quando estiver pronto!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Yan, descubra o que voc\\xea pode criar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.subtitle,\n                children: \"Com programa\\xe7\\xe3o, voc\\xea pode transformar suas paix\\xf5es em realidade:\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.grid,\n                children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: example.image,\n                                alt: example.title,\n                                style: styles.image\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: styles.cardTitle,\n                                children: example.title\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: styles.cardDescription,\n                                children: example.description\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: styles.button,\n                onClick: handleDownloadTxt,\n                children: \"Quero come\\xe7ar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nconst styles = {\n    container: {\n        padding: \"20px\",\n        fontFamily: \"Arial, sans-serif\",\n        textAlign: \"center\",\n        background: \"linear-gradient(135deg, #FFEDD5, #D4F1F4, #C3E0E5)\",\n        minHeight: \"100vh\",\n        color: \"#333\"\n    },\n    title: {\n        fontSize: \"2.5em\",\n        color: \"#1A535C\",\n        marginBottom: \"10px\"\n    },\n    subtitle: {\n        fontSize: \"1.5em\",\n        marginBottom: \"30px\",\n        color: \"#4ECDC4\"\n    },\n    grid: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        justifyContent: \"center\",\n        gap: \"20px\"\n    },\n    card: {\n        background: \"#FFFFFF\",\n        padding: \"20px\",\n        borderRadius: \"10px\",\n        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\",\n        maxWidth: \"250px\",\n        textAlign: \"center\"\n    },\n    image: {\n        width: \"100%\",\n        borderRadius: \"8px\"\n    },\n    cardTitle: {\n        fontSize: \"1.2em\",\n        color: \"#1A535C\",\n        margin: \"10px 0\"\n    },\n    cardDescription: {\n        fontSize: \"1em\",\n        color: \"#555\"\n    },\n    button: {\n        marginTop: \"30px\",\n        backgroundColor: \"#8ECAE6\",\n        color: \"white\",\n        padding: \"15px 30px\",\n        fontSize: \"1.2em\",\n        fontWeight: \"bold\",\n        border: \"none\",\n        borderRadius: \"8px\",\n        cursor: \"pointer\",\n        boxShadow: \"0 3px 5px rgba(0, 0, 0, 0.2)\",\n        transition: \"all 0.3s ease\"\n    },\n    buttonHover: {\n        backgroundColor: \"#219EBC\",\n        transform: \"translateY(-3px)\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7UUFDUlIsV0FBVztRQUNYUyxZQUFZO0lBQ2Q7SUFDQUMsYUFBYTtRQUNYTCxpQkFBaUI7UUFDakJNLFdBQVc7SUFDYjtBQUNGO0FBRUEsK0RBQWVwRSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZXhhbXBsZXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ3JpZSBTZXUgUHLDs3ByaW8gSm9nb1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiSW1hZ2luZSBjb25zdHJ1aXIgbXVuZG9zIGluY3LDrXZlaXMgZSBwZXJtaXRpciBxdWUgb3V0cmFzIHBlc3NvYXMgam9ndWVtIVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzMwNC83MzA0NDUxLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRXhwbG9yZSBNYXBhcyBJbnRlcmF0aXZvc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiTW9zdHJlIHJvdGFzLCBtYXJxdWUgbHVnYXJlcyBubyBtYXBhIGUgY3JpZSBmZXJyYW1lbnRhcyBpbmNyw612ZWlzIHBhcmEgYWp1ZGFyIGFzIHBlc3NvYXMuXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy52ZXhlbHMuY29tL21lZGlhL3VzZXJzLzMvMjEwMTU0L2lzb2xhdGVkL3ByZXZpZXcvNWE2ZTdkYmFlOWEyZDFhMmQxNWQ1ZDFhN2EzMTRjM2Mtc2lsaHVldGEtZG8tbWFwYS1kYS1hbWVyaWNhLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRW50ZW5kYSBhcyBFbGVpw6fDtWVzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb25zdHJ1YSBncsOhZmljb3MgZSBwYWluw6lpcyBxdWUgbW9zdHJlbSBvcyByZXN1bHRhZG9zIGVtIHRlbXBvIHJlYWwhXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTdGdyTDNib2pGOG54S3JiNE5RS1Vta0NCcUh1X01pbmRhbVEmc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQWp1ZGUgYSBSZXNvbHZlciBQcm9ibGVtYXMgZG8gTXVuZG9cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbSB0ZWNub2xvZ2lhLCB2b2PDqiBwb2RlIGNyaWFyIHNvbHXDp8O1ZXMgcXVlIHJlYWxtZW50ZSBmYXplbSBkaWZlcmVuw6dhLlwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMzMzOS8zMzM5MjUyLnBuZ1wiLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gRnVuw6fDo28gcGFyYSBnZXJhciBlIGJhaXhhciB1bSBhcnF1aXZvIC50eHRcbiAgY29uc3QgaGFuZGxlRG93bmxvYWRUeHQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlybWF0aW9uID0gd2luZG93LmNvbmZpcm0oXG4gICAgICBcIk8gZG93bmxvYWQgZG8gYXJxdWl2byBjb20gZGljYXMgcGFyYSBjb21lw6dhciBuYSBwcm9ncmFtYcOnw6NvIHNlcsOhIGluaWNpYWRvLiBEZXNlamEgY29udGludWFyP1wiXG4gICAgKTtcbiAgICBcbiAgICBpZiAoY29uZmlybWF0aW9uKSB7XG4gICAgY29uc3QgdGV4dCA9IGBCZW0tdmluZG8gw6AgcHJvZ3JhbWHDp8OjbywgWWFuISDwn5qAXFxuXFxuVm9jw6ogZXN0w6EgcHJlc3RlcyBhIGNvbWXDp2FyIHVtYSBqb3JuYWRhIGluY3LDrXZlbCwgb25kZSBwb2RlcsOhIGNyaWFyIGpvZ29zLCBleHBsb3JhciBtYXBhcyBpbnRlcmF0aXZvcywgZW50ZW5kZXIgcmVzdWx0YWRvcyBkZSBlbGVpw6fDtWVzIGUgbXVpdG8gbWFpcy4gQXF1aSBlc3TDo28gYWxndW1hcyBkaWNhcyBwYXJhIGRhciBzZXVzIHByaW1laXJvcyBwYXNzb3M6XFxuXFxuMS4gKipDcmllIHVtYSBjb250YSBubyBHaXRIdWIqKlxcbiAgIC0gTyBHaXRIdWIgw6kgY29tbyB1bWEgXCJyZWRlIHNvY2lhbFwiIHBhcmEgcHJvZ3JhbWFkb3Jlcy4gTMOhLCB2b2PDqiBwb2RlIHNhbHZhciBzZXVzIHByb2pldG9zLCBjb2xhYm9yYXIgY29tIG91dHJhcyBwZXNzb2FzIGUgYXTDqSBjb250cmlidWlyIGNvbSBwcm9qZXRvcyBmYW1vc29zLlxcbiAgIC0gQWNlc3NlOiBodHRwczovL2dpdGh1Yi5jb20gZSBjcmllIHN1YSBjb250YSBncmF0dWl0YS5cXG5cXG4yLiAqKkFwcmVuZGEgbyBiw6FzaWNvIGRlIHByb2dyYW1hw6fDo28qKlxcbiAgIC0gQ29tZWNlIGNvbSB1bWEgbGluZ3VhZ2VtIHNpbXBsZXMgZSBwb3B1bGFyLCBjb21vICoqSmF2YVNjcmlwdCoqLiDDiSBhIGJhc2UgZGUgbXVpdG9zIHNpdGVzIGUgam9nb3MgbmEgd2ViLlxcbiAgIC0gQXNzaXN0YSBhdWxhcyBncmF0dWl0YXMgbm8gWW91VHViZSBvdSBwbGF0YWZvcm1hcyBjb21vOlxcbiAgICAgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZmlsaXBlZGVzY2hhbXBzXFxuXFxuMy4gKipQcmF0aXF1ZSB0b2RvcyBvcyBkaWFzKipcXG4gICAtIFJlc2VydmUgcGVsbyBtZW5vcyAzMCBtaW51dG9zIHBvciBkaWEgcGFyYSBwcm9ncmFtYXIuIEEgcHLDoXRpY2Egw6kgbyBzZWdyZWRvIHBhcmEgbWVsaG9yYXIhXFxuICAgLSBVc2UgZmVycmFtZW50YXMgZGUgaW50ZWxpZ8OqbmNpYSBhcnRpZmljaWFsIHBhcmEgYWp1ZGFyIGEgZW50ZW5kZXIsIHNvbGljaXRhbmRvIGV4cGxpY2HDp8O1ZXMgZGV0YWxoYWRhc1xcblxcbjQuICoqQ3JpZSBwZXF1ZW5vcyBwcm9qZXRvcyoqXFxuICAgLSBOw6NvIHByZWNpc2EgY29tZcOnYXIgY29tIGFsZ28gZ3JhbmRlLiBBcXVpIGVzdMOjbyBhbGd1bWFzIGlkZWlhcyBmw6FjZWlzOlxcbiAgICAgLSBVbSBzaXRlIHNpbXBsZXMgc29icmUgYWxnbyBxdWUgdm9jw6ogZ29zdGEgKHBvZGUgc2VyIGlkZWlhcywgaW1hZ2VucykgLlxcbiAgICAgLSBVbSBqb2dvIGLDoXNpY28gY29tbyBQZWRyYSwgUGFwZWwgZSBUZXNvdXJhLlxcbiAgICAgLSBVbSBtYXBhIGludGVyYXRpdm8gcXVlIG1vc3RyYSBvcyBwYcOtc2VzIHF1ZSB2b2PDqiBxdWVyIHZpc2l0YXIuXFxuXFxuNS4gKipFeHBsb3JlIGN1cnNvcyBzb2JyZSBhcyBjb2lzYXMgcXVlIHZvY8OqIGdvc3RhKipcXG4gICAtIEdvc3RhIGRlIGpvZ29zPyBBcHJlbmRhIGEgdXNhciBvIFVuaXR5IG91IEdvZG90LlxcbiAgIC0gQW1hIG1hcGFzPyBFeHBlcmltZW50ZSBBUElzIGRlIG1hcGFzIGNvbW8gR29vZ2xlIE1hcHMgb3UgTGVhZmxldC5cXG4gICAtIFF1ZXIgZW50ZW5kZXIgZ3LDoWZpY29zIGUgZGFkb3M/IEVzdHVkZSBQeXRob24gZSBiaWJsaW90ZWNhcyBjb21vIE1hdHBsb3RsaWIgb3UgUGxvdGx5LlxcblxcbjYuICoqUGFydGljaXBlIGRhIGNvbXVuaWRhZGUqKlxcbiAgIC0gRW50cmUgZW0gZsOzcnVucyBlIGdydXBvcyBwYXJhIGFwcmVuZGVyIGNvbSBvdXRyYXMgcGVzc29hcy4gQXF1aSBlc3TDo28gYWxndW1hcyBzdWdlc3TDtWVzOlxcbiAgICAgLSBTdGFjayBPdmVyZmxvdzogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9cXG4gICAgIC0gRGlzY29yZHMgc29icmUgcHJvZ3JhbWHDp8Ojby5cXG4gICAgIC0gUmVkZGl0IChzdWJyZWRkaXRzIGNvbW8gci9sZWFybnByb2dyYW1taW5nIGUgci9qYXZhc2NyaXB0KS5cXG5cXG43LiAqKkNvbXBhcnRpbGhlIHNldSBwcm9ncmVzc28qKlxcbiAgIC0gQ29sb3F1ZSBzZXVzIHByb2pldG9zIG5vIEdpdEh1YiBlIGNvbXBhcnRpbGhlIGNvbSBhbWlnb3MuIElzc28gbW90aXZhIHZvY8OqIGEgY29udGludWFyLlxcblxcbjguICoqTnVuY2EgZGVzaXN0YSEqKlxcbiAgIC0gTm8gY29tZcOnbywgcG9kZSBwYXJlY2VyIGRpZsOtY2lsLCBtYXMgbGVtYnJlLXNlOiBUT0RPUyBvcyBwcm9ncmFtYWRvcmVzIGrDoSBmb3JhbSBpbmljaWFudGVzLiBPIHNlZ3JlZG8gw6kgZGFyIHVtIHBhc3NvIGRlIGNhZGEgdmV6Llxcblxcbi0tLVxcblxcblwiUHJvZ3JhbWFyIMOpIGNvbW8gY29uc3RydWlyIGFsZ28gbcOhZ2ljbzogYmFzdGEgY29tZcOnYXIgcGFyYSBkZXNjb2JyaXIgbyBxdWFudG8gdm9jw6ogw6kgY2FwYXohXCJcXG5cXG5Cb2Egc29ydGUgbmEgc3VhIGpvcm5hZGEhIEVzdG91IGRvIHNldSBsYWRvIHBhcmEgbyBxdWUgcHJlY2lzYXIhICDwn5K74pyoIGA7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt0ZXh0XSwgeyB0eXBlOiBcInRleHQvcGxhaW5cIiB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICBsaW5rLmRvd25sb2FkID0gXCJEaWNhc1BhcmFDb21lY2FyLnR4dFwiO1xuICAgIGxpbmsuY2xpY2soKTtcblxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIlR1ZG8gYmVtLCB2b2PDqiBwb2RlIGNvbWXDp2FyIHF1YW5kbyBlc3RpdmVyIHByb250byFcIik7XG4gIH1cbn07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBzdHlsZT17c3R5bGVzLnRpdGxlfT5ZYW4sIGRlc2N1YnJhIG8gcXVlIHZvY8OqIHBvZGUgY3JpYXIhPC9oMT5cbiAgICAgIDxwIHN0eWxlPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICBDb20gcHJvZ3JhbWHDp8Ojbywgdm9jw6ogcG9kZSB0cmFuc2Zvcm1hciBzdWFzIHBhaXjDtWVzIGVtIHJlYWxpZGFkZTpcbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZXhhbXBsZS5pbWFnZX0gYWx0PXtleGFtcGxlLnRpdGxlfSBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuY2FyZFRpdGxlfT57ZXhhbXBsZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5jYXJkRGVzY3JpcHRpb259PntleGFtcGxlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkVHh0fT5cbiAgICAgICAgUXVlcm8gY29tZcOnYXIhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICBmb250RmFtaWx5OiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZGRURENSwgI0Q0RjFGNCwgI0MzRTBFNSlcIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICBjb2xvcjogXCIjMzMzXCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMi41ZW1cIixcbiAgICBjb2xvcjogXCIjMUE1MzVDXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxLjVlbVwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXG4gICAgY29sb3I6IFwiIzRFQ0RDNFwiLFxuICB9LFxuICBncmlkOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGdhcDogXCIyMHB4XCIsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgbWF4V2lkdGg6IFwiMjUwcHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgfSxcbiAgY2FyZFRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMS4yZW1cIixcbiAgICBjb2xvcjogXCIjMUE1MzVDXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICB9LFxuICBjYXJkRGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogXCIxZW1cIixcbiAgICBjb2xvcjogXCIjNTU1XCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM4RUNBRTZcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTVweCAzMHB4XCIsXG4gICAgZm9udFNpemU6IFwiMS4yZW1cIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJveFNoYWRvdzogXCIwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlXCIsXG4gIH0sXG4gIGJ1dHRvbkhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMTlFQkNcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtM3B4KVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiSG9tZSIsImV4YW1wbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaGFuZGxlRG93bmxvYWRUeHQiLCJjb25maXJtYXRpb24iLCJ3aW5kb3ciLCJjb25maXJtIiwidGV4dCIsImJsb2IiLCJCbG9iIiwidHlwZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInJldm9rZU9iamVjdFVSTCIsImFsZXJ0IiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsInAiLCJzdWJ0aXRsZSIsImdyaWQiLCJtYXAiLCJleGFtcGxlIiwiaW5kZXgiLCJjYXJkIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJjYXJkVGl0bGUiLCJjYXJkRGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJib3JkZXIiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwiYnV0dG9uSG92ZXIiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});