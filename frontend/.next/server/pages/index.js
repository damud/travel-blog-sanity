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

/***/ "./library/config.js":
/*!***************************!*\
  !*** ./library/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\n    dataset: \"production\",\n    projectId: \"8o6d2nic\",\n    apiVersion: \"2023-04-18\",\n    useCdn: \"production\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJyYXJ5L2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUztJQUNsQkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsUUFBUTtBQUNaLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmF2ZWwtYmxvZy8uL2xpYnJhcnkvY29uZmlnLmpzP2JjMzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gICAgcHJvamVjdElkOiBcIjhvNmQybmljXCIsXHJcbiAgICBhcGlWZXJzaW9uOiBcIjIwMjMtMDQtMThcIixcclxuICAgIHVzZUNkbjogXCJwcm9kdWN0aW9uXCIsXHJcbn0iXSwibmFtZXMiOlsiY29uZmlnIiwiZGF0YXNldCIsInByb2plY3RJZCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./library/config.js\n");

/***/ }),

/***/ "./library/sanity-server.js":
/*!**********************************!*\
  !*** ./library/sanity-server.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClient\": () => (/* binding */ getClient),\n/* harmony export */   \"previewClient\": () => (/* binding */ previewClient),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./library/config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);\n_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst sanityClient = (0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__.createClient)(_config__WEBPACK_IMPORTED_MODULE_1__.config);\nconst previewClient = (0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    ..._config__WEBPACK_IMPORTED_MODULE_1__.config,\n    useCdn: false,\n    token: \"skQ7TGoKy7YdOieFcS9Wb4dchBh1xjjPqO7gJAMBHUZAYOnBzXjjBjJIyBZAw3GZjRqWConyQQZymUe2WAGHxqd8hWFsHq0Qjq3w7BHAEZCyqjilQJbz7M4dX9HxwrNdakecoUjbU9Alxg6pN15FAKUc2LPZDYbjFT8fjbvEvu5YWDWm29mT\"\n});\nconst getClient = (usePreview)=>usePreview ? previewClient : sanityClient;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJyYXJ5L3Nhbml0eS1zZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFDWjtBQUUzQixNQUFNRSxlQUFlRiw0REFBWUEsQ0FBQ0MsMkNBQU1BLEVBQUU7QUFFMUMsTUFBTUUsZ0JBQWdCSCw0REFBWUEsQ0FBQztJQUN0QyxHQUFHQywyQ0FBTTtJQUNURyxRQUFRLEtBQUs7SUFDYkMsT0FBTztBQUNYLEdBQUU7QUFFSyxNQUFNQyxZQUFZLENBQUVDLGFBQWdCQSxhQUFhSixnQkFBZ0JELFlBQVksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYXZlbC1ibG9nLy4vbGlicmFyeS9zYW5pdHktc2VydmVyLmpzP2I3ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXZpZXdDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgLi4uY29uZmlnLFxyXG4gICAgdXNlQ2RuOiBmYWxzZSxcclxuICAgIHRva2VuOiBcInNrUTdUR29LeTdZZE9pZUZjUzlXYjRkY2hCaDF4ampQcU83Z0pBTUJIVVpBWU9uQnpYampCakpJeUJaQXczR1pqUnFXQ29ueVFRWnltVWUyV0FHSHhxZDhoV0ZzSHEwUWpxM3c3QkhBRVpDeXFqaWxRSmJ6N000ZFg5SHh3ck5kYWtlY29VamJVOUFseGc2cE4xNUZBS1VjMkxQWkRZYmpGVDhmamJ2RXZ1NVlXRFdtMjltVFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKCB1c2VQcmV2aWV3ICkgPT4gdXNlUHJldmlldyA/IHByZXZpZXdDbGllbnQgOiBzYW5pdHlDbGllbnQ7Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNvbmZpZyIsInNhbml0eUNsaWVudCIsInByZXZpZXdDbGllbnQiLCJ1c2VDZG4iLCJ0b2tlbiIsImdldENsaWVudCIsInVzZVByZXZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./library/sanity-server.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _library_sanity_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/sanity-server */ \"./library/sanity-server.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq */ \"groq\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_sanity_server__WEBPACK_IMPORTED_MODULE_1__, groq__WEBPACK_IMPORTED_MODULE_2__]);\n([_library_sanity_server__WEBPACK_IMPORTED_MODULE_1__, groq__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst Home = ({ posts  })=>{\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dashboard\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Nomad Travel Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\travel-blog-sanity\\\\frontend\\\\pages\\\\index.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\travel-blog-sanity\\\\frontend\\\\pages\\\\index.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\dev\\\\travel-blog-sanity\\\\frontend\\\\pages\\\\index.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\dev\\\\travel-blog-sanity\\\\frontend\\\\pages\\\\index.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\travel-blog-sanity\\\\frontend\\\\pages\\\\index.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\nconst getStaticProps = async ({ preview =false  })=>{\n    const posts = await (0,_library_sanity_server__WEBPACK_IMPORTED_MODULE_1__.getClient)(preview).fetch(groq__WEBPACK_IMPORTED_MODULE_2__[\"default\"]`\r\n    *[_type == \"post\" && publishedAt < now()] | order(publishedAt desc) {\r\n        id,\r\n        title,\r\n        \"username\": author->username,\r\n        \"categories\": categories[]->{id, title},\r\n        \"authorImage\" : author -> avatar,\r\n        body,\r\n        mainImage,\r\n        slug,\r\n        publishedAt\r\n    }`);\n    return {\n        props: {\n            posts\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUM3QjtBQUd4QixNQUFNRSxPQUFPLENBQUMsRUFBRUMsTUFBSyxFQUFFLEdBQUs7SUFDMUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDOztrQ0FDRyw4REFBQ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUM7QUFFTyxNQUFNQyxpQkFBaUIsT0FBTyxFQUFFQyxTQUFVLEtBQUssR0FBRSxHQUFLO0lBQzNELE1BQU1aLFFBQVEsTUFBTUgsaUVBQVNBLENBQUNlLFNBQVNDLEtBQUssQ0FBQ2YsNENBQUksQ0FBQzs7Ozs7Ozs7Ozs7S0FXL0MsQ0FBQztJQUNGLE9BQU87UUFDTGdCLE9BQU87WUFDTGQ7UUFDRjtJQUNGO0FBQ0osRUFBQztBQUdELGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsLWJsb2cvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vbGlicmFyeS9zYW5pdHktc2VydmVyXCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwb3N0cylcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Ob21hZCBUcmF2ZWwgQmxvZzwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwcmV2aWV3ID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKGdyb3FgXHJcbiAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYykge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcclxuICAgICAgICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT57aWQsIHRpdGxlfSxcclxuICAgICAgICBcImF1dGhvckltYWdlXCIgOiBhdXRob3IgLT4gYXZhdGFyLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgICAgbWFpbkltYWdlLFxyXG4gICAgICAgIHNsdWcsXHJcbiAgICAgICAgcHVibGlzaGVkQXRcclxuICAgIH1gKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBwb3N0cyxcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbImdldENsaWVudCIsImdyb3EiLCJIb21lIiwicG9zdHMiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsIkhlYWQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImdldFN0YXRpY1Byb3BzIiwicHJldmlldyIsImZldGNoIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@sanity/client");;

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("groq");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();