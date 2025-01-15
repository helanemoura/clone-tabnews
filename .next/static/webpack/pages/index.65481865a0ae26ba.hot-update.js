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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    const examples = [\n        {\n            title: \"Crie Seu Pr\\xf3prio Jogo\",\n            description: \"Imagine construir mundos incr\\xedveis e permitir que outras pessoas joguem!\",\n            image: \"https://cdn-icons-png.flaticon.com/128/7304/7304451.png\"\n        },\n        {\n            title: \"Explore Mapas Interativos\",\n            description: \"Mostre rotas, marque lugares no mapa e crie ferramentas incr\\xedveis para ajudar as pessoas.\",\n            image: \"https://images.vexels.com/media/users/3/210154/isolated/preview/5a6e7dbae9a2d1a2d15d5d1a7a314c3c-silhueta-do-mapa-da-america.png\"\n        },\n        {\n            title: \"Entenda as Elei\\xe7\\xf5es\",\n            description: \"Construa gr\\xe1ficos e pain\\xe9is que mostrem os resultados em tempo real!\",\n            image: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgrL3bojF8nxKrb4NQKUmkCBqHu_MindamQ&s\"\n        },\n        {\n            title: \"Ajude a Resolver Problemas do Mundo\",\n            description: \"Com tecnologia, voc\\xea pode criar solu\\xe7\\xf5es que realmente fazem diferen\\xe7a.\",\n            image: \"https://cdn-icons-png.flaticon.com/512/3339/3339252.png\"\n        }\n    ];\n    // Função para gerar e baixar um arquivo .txt\n    const handleDownloadTxt = ()=>{\n        const text = \"Bem-vindo \\xe0 programa\\xe7\\xe3o! Algumas dicas para come\\xe7ar: 1. Crie uma conta no site github.com.br; 2.\";\n        const blob = new Blob([\n            text\n        ], {\n            type: \"text/plain\"\n        });\n        const url = URL.createObjectURL(blob);\n        // Criar link temporário para download\n        const link = document.createElement(\"a\");\n        link.href = url;\n        link.download = \"BoasVindasProgramacao.txt\";\n        link.click();\n        // Revogar o objeto após o download\n        URL.revokeObjectURL(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Yan, descubra o que voc\\xea pode criar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.subtitle,\n                children: \"Com programa\\xe7\\xe3o, voc\\xea pode transformar suas paix\\xf5es em realidade:\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.grid,\n                children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: example.image,\n                                alt: example.title,\n                                style: styles.image\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: styles.cardTitle,\n                                children: example.title\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: styles.cardDescription,\n                                children: example.description\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: styles.button,\n                onClick: handleDownloadTxt,\n                children: \"Quero come\\xe7ar!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nconst styles = {\n    container: {\n        padding: \"20px\",\n        fontFamily: \"Arial, sans-serif\",\n        textAlign: \"center\",\n        background: \"linear-gradient(135deg, #FFEDD5, #D4F1F4, #C3E0E5)\",\n        minHeight: \"100vh\",\n        color: \"#333\"\n    },\n    title: {\n        fontSize: \"2.5em\",\n        color: \"#1A535C\",\n        marginBottom: \"10px\"\n    },\n    subtitle: {\n        fontSize: \"1.5em\",\n        marginBottom: \"30px\",\n        color: \"#4ECDC4\"\n    },\n    grid: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        justifyContent: \"center\",\n        gap: \"20px\"\n    },\n    card: {\n        background: \"#FFFFFF\",\n        padding: \"20px\",\n        borderRadius: \"10px\",\n        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\",\n        maxWidth: \"250px\",\n        textAlign: \"center\"\n    },\n    image: {\n        width: \"100%\",\n        borderRadius: \"8px\"\n    },\n    cardTitle: {\n        fontSize: \"1.2em\",\n        color: \"#1A535C\",\n        margin: \"10px 0\"\n    },\n    cardDescription: {\n        fontSize: \"1em\",\n        color: \"#555\"\n    },\n    button: {\n        marginTop: \"30px\",\n        backgroundColor: \"#8ECAE6\",\n        color: \"white\",\n        padding: \"15px 30px\",\n        fontSize: \"1.2em\",\n        fontWeight: \"bold\",\n        border: \"none\",\n        borderRadius: \"8px\",\n        cursor: \"pointer\",\n        boxShadow: \"0 3px 5px rgba(0, 0, 0, 0.2)\",\n        transition: \"all 0.3s ease\"\n    },\n    buttonHover: {\n        backgroundColor: \"#219EBC\",\n        transform: \"translateY(-3px)\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsT0FBTztJQUNkLE1BQU1DLFdBQVc7UUFDZjtZQUNFQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsT0FBTztRQUNUO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87UUFDVDtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsT0FBTztRQUNUO0tBQ0Q7SUFFRCw2Q0FBNkM7SUFDN0MsTUFBTUMsb0JBQW9CLElBQU07UUFDOUIsTUFBTUMsT0FBUTtRQUNkLE1BQU1DLE9BQU8sSUFBSUMsS0FBSztZQUFDRjtTQUFLLEVBQUU7WUFBRUcsTUFBTTtRQUFhO1FBQ25ELE1BQU1DLE1BQU1DLElBQUlDLGVBQWUsQ0FBQ0w7UUFFaEMsc0NBQXNDO1FBQ3RDLE1BQU1NLE9BQU9DLFNBQVNDLGFBQWEsQ0FBQztRQUNwQ0YsS0FBS0csSUFBSSxHQUFHTjtRQUNaRyxLQUFLSSxRQUFRLEdBQUc7UUFDaEJKLEtBQUtLLEtBQUs7UUFFVixtQ0FBbUM7UUFDbkNQLElBQUlRLGVBQWUsQ0FBQ1Q7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsT0FBT0MsT0FBT0MsU0FBUzs7MEJBQzFCLDhEQUFDQztnQkFBR0gsT0FBT0MsT0FBT3BCLEtBQUs7MEJBQUU7Ozs7OzswQkFDekIsOERBQUN1QjtnQkFBRUosT0FBT0MsT0FBT0ksUUFBUTswQkFBRTs7Ozs7OzBCQUczQiw4REFBQ047Z0JBQUlDLE9BQU9DLE9BQU9LLElBQUk7MEJBQ3BCMUIsU0FBUzJCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNWO3dCQUFnQkMsT0FBT0MsT0FBT1MsSUFBSTs7MENBQ2pDLDhEQUFDQztnQ0FBSUMsS0FBS0osUUFBUXpCLEtBQUs7Z0NBQUU4QixLQUFLTCxRQUFRM0IsS0FBSztnQ0FBRW1CLE9BQU9DLE9BQU9sQixLQUFLOzs7Ozs7MENBQ2hFLDhEQUFDK0I7Z0NBQUdkLE9BQU9DLE9BQU9jLFNBQVM7MENBQUdQLFFBQVEzQixLQUFLOzs7Ozs7MENBQzNDLDhEQUFDdUI7Z0NBQUVKLE9BQU9DLE9BQU9lLGVBQWU7MENBQUdSLFFBQVExQixXQUFXOzs7Ozs7O3VCQUg5QzJCOzs7Ozs7Ozs7OzBCQU9kLDhEQUFDUTtnQkFBT2pCLE9BQU9DLE9BQU9nQixNQUFNO2dCQUFFQyxTQUFTbEM7MEJBQW1COzs7Ozs7Ozs7Ozs7QUFLaEU7S0E1RFNMO0FBOERULE1BQU1zQixTQUFTO0lBQ2JDLFdBQVc7UUFDVGlCLFNBQVM7UUFDVEMsWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFDQTNDLE9BQU87UUFDTDRDLFVBQVU7UUFDVkQsT0FBTztRQUNQRSxjQUFjO0lBQ2hCO0lBQ0FyQixVQUFVO1FBQ1JvQixVQUFVO1FBQ1ZDLGNBQWM7UUFDZEYsT0FBTztJQUNUO0lBQ0FsQixNQUFNO1FBQ0pxQixTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsZ0JBQWdCO1FBQ2hCQyxLQUFLO0lBQ1A7SUFDQXBCLE1BQU07UUFDSlksWUFBWTtRQUNaSCxTQUFTO1FBQ1RZLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZaLFdBQVc7SUFDYjtJQUNBdEMsT0FBTztRQUNMbUQsT0FBTztRQUNQSCxjQUFjO0lBQ2hCO0lBQ0FoQixXQUFXO1FBQ1RVLFVBQVU7UUFDVkQsT0FBTztRQUNQVyxRQUFRO0lBQ1Y7SUFDQW5CLGlCQUFpQjtRQUNmUyxVQUFVO1FBQ1ZELE9BQU87SUFDVDtJQUNBUCxRQUFRO1FBQ05tQixXQUFXO1FBQ1hDLGlCQUFpQjtRQUNqQmIsT0FBTztRQUNQTCxTQUFTO1FBQ1RNLFVBQVU7UUFDVmEsWUFBWTtRQUNaQyxRQUFRO1FBQ1JSLGNBQWM7UUFDZFMsUUFBUTtRQUNSUixXQUFXO1FBQ1hTLFlBQVk7SUFDZDtJQUNBQyxhQUFhO1FBQ1hMLGlCQUFpQjtRQUNqQk0sV0FBVztJQUNiO0FBQ0Y7QUFFQSwrREFBZWhFLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBleGFtcGxlcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJDcmllIFNldSBQcsOzcHJpbyBKb2dvXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJJbWFnaW5lIGNvbnN0cnVpciBtdW5kb3MgaW5jcsOtdmVpcyBlIHBlcm1pdGlyIHF1ZSBvdXRyYXMgcGVzc29hcyBqb2d1ZW0hXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83MzA0LzczMDQ0NTEucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJFeHBsb3JlIE1hcGFzIEludGVyYXRpdm9zXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJNb3N0cmUgcm90YXMsIG1hcnF1ZSBsdWdhcmVzIG5vIG1hcGEgZSBjcmllIGZlcnJhbWVudGFzIGluY3LDrXZlaXMgcGFyYSBhanVkYXIgYXMgcGVzc29hcy5cIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnZleGVscy5jb20vbWVkaWEvdXNlcnMvMy8yMTAxNTQvaXNvbGF0ZWQvcHJldmlldy81YTZlN2RiYWU5YTJkMWEyZDE1ZDVkMWE3YTMxNGMzYy1zaWxodWV0YS1kby1tYXBhLWRhLWFtZXJpY2EucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJFbnRlbmRhIGFzIEVsZWnDp8O1ZXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbnN0cnVhIGdyw6FmaWNvcyBlIHBhaW7DqWlzIHF1ZSBtb3N0cmVtIG9zIHJlc3VsdGFkb3MgZW0gdGVtcG8gcmVhbCFcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1N0Z3JMM2JvakY4bnhLcmI0TlFLVW1rQ0JxSHVfTWluZGFtUSZzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBanVkZSBhIFJlc29sdmVyIFByb2JsZW1hcyBkbyBNdW5kb1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ29tIHRlY25vbG9naWEsIHZvY8OqIHBvZGUgY3JpYXIgc29sdcOnw7VlcyBxdWUgcmVhbG1lbnRlIGZhemVtIGRpZmVyZW7Dp2EuXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8zMzM5LzMzMzkyNTIucG5nXCIsXG4gICAgfSxcbiAgXTtcblxuICAvLyBGdW7Dp8OjbyBwYXJhIGdlcmFyIGUgYmFpeGFyIHVtIGFycXVpdm8gLnR4dFxuICBjb25zdCBoYW5kbGVEb3dubG9hZFR4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gYEJlbS12aW5kbyDDoCBwcm9ncmFtYcOnw6NvISBBbGd1bWFzIGRpY2FzIHBhcmEgY29tZcOnYXI6IDEuIENyaWUgdW1hIGNvbnRhIG5vIHNpdGUgZ2l0aHViLmNvbS5icjsgMi5gO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbdGV4dF0sIHsgdHlwZTogXCJ0ZXh0L3BsYWluXCIgfSk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAgIC8vIENyaWFyIGxpbmsgdGVtcG9yw6FyaW8gcGFyYSBkb3dubG9hZFxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgbGluay5kb3dubG9hZCA9IFwiQm9hc1ZpbmRhc1Byb2dyYW1hY2FvLnR4dFwiO1xuICAgIGxpbmsuY2xpY2soKTtcblxuICAgIC8vIFJldm9nYXIgbyBvYmpldG8gYXDDs3MgbyBkb3dubG9hZFxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMudGl0bGV9PllhbiwgZGVzY3VicmEgbyBxdWUgdm9jw6ogcG9kZSBjcmlhciE8L2gxPlxuICAgICAgPHAgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgIENvbSBwcm9ncmFtYcOnw6NvLCB2b2PDqiBwb2RlIHRyYW5zZm9ybWFyIHN1YXMgcGFpeMO1ZXMgZW0gcmVhbGlkYWRlOlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtleGFtcGxlLmltYWdlfSBhbHQ9e2V4YW1wbGUudGl0bGV9IHN0eWxlPXtzdHlsZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5jYXJkVGl0bGV9PntleGFtcGxlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmNhcmREZXNjcmlwdGlvbn0+e2V4YW1wbGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlRG93bmxvYWRUeHR9PlxuICAgICAgICBRdWVybyBjb21lw6dhciFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkZFREQ1LCAjRDRGMUY0LCAjQzNFMEU1KVwiLFxuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIyLjVlbVwiLFxuICAgIGNvbG9yOiBcIiMxQTUzNUNcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxuICB9LFxuICBzdWJ0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjEuNWVtXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICBjb2xvcjogXCIjNEVDREM0XCIsXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZ2FwOiBcIjIwcHhcIixcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRlwiLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgYm94U2hhZG93OiBcIjAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICBtYXhXaWR0aDogXCIyNTBweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICB9LFxuICBjYXJkVGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxLjJlbVwiLFxuICAgIGNvbG9yOiBcIiMxQTUzNUNcIixcbiAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gIH0sXG4gIGNhcmREZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgIGNvbG9yOiBcIiM1NTVcIixcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzhFQ0FFNlwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgcGFkZGluZzogXCIxNXB4IDMwcHhcIixcbiAgICBmb250U2l6ZTogXCIxLjJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgYm94U2hhZG93OiBcIjAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2VcIixcbiAgfSxcbiAgYnV0dG9uSG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIxOUVCQ1wiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0zcHgpXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIb21lIiwiZXhhbXBsZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJoYW5kbGVEb3dubG9hZFR4dCIsInRleHQiLCJibG9iIiwiQmxvYiIsInR5cGUiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJkaXYiLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwicCIsInN1YnRpdGxlIiwiZ3JpZCIsIm1hcCIsImV4YW1wbGUiLCJpbmRleCIsImNhcmQiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImNhcmRUaXRsZSIsImNhcmREZXNjcmlwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsInRleHRBbGlnbiIsImJhY2tncm91bmQiLCJtaW5IZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtYXhXaWR0aCIsIndpZHRoIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImJvcmRlciIsImN1cnNvciIsInRyYW5zaXRpb24iLCJidXR0b25Ib3ZlciIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});