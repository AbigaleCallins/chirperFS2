/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/db/chirps.js":
/*!*****************************!*\
  !*** ./server/db/chirps.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./server/db/index.js\");\n\n\nconst all = () => (0,_index__WEBPACK_IMPORTED_MODULE_0__.Query)(\"select * from chirps\");\n\nconst one = id => (0,_index__WEBPACK_IMPORTED_MODULE_0__.Query)(\"select * from chirps where chirps.id = ?\", [id]);\n\nconst destroy = id => (0,_index__WEBPACK_IMPORTED_MODULE_0__.Query)(\"delete from chirps where chirps.id = ?\", [id]);\n\nconst insert = (userid, content, location) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.Query)(\"insert into chirps (userid, content, location) values (?, ?, ?)\", [userid, content, location]);\n\nconst edit = (id, content) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.Query)(\"UPDATE chirps SET content = ? WHERE chirps.id = ?\", [content, id]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  all,\n  one,\n  destroy,\n  insert,\n  edit\n});\n\n//# sourceURL=webpack://barebones-react-node-webpack/./server/db/chirps.js?");

/***/ }),

/***/ "./server/db/index.js":
/*!****************************!*\
  !*** ./server/db/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Query\": () => (/* binding */ Query),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chirps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chirps */ \"./server/db/chirps.js\");\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ \"./server/db/users.js\");\n\nconst connection = mysql__WEBPACK_IMPORTED_MODULE_0__.createConnection({\n  host: 'localhost',\n  port: 3306,\n  database: \"chirpr\",\n  user: 'chirprapp',\n  password: 'password'\n});\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    connection.query(query, values, (err, results) => {\n      if (err) throw err;\n      resolve(results);\n    });\n  });\n};\n\n // this becomes db object in routes/chirps.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  chirps: _chirps__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  users: _users__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://barebones-react-node-webpack/./server/db/index.js?");

/***/ }),

/***/ "./server/db/users.js":
/*!****************************!*\
  !*** ./server/db/users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./server/db/index.js\");\n\n\nconst insert = (name, email, password) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.Query)(\"insert into users (name, email, password) values (?, ?, ?)\", [name, email, password]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  insert\n});\n\n//# sourceURL=webpack://barebones-react-node-webpack/./server/db/users.js?");

/***/ }),

/***/ "./server/routes/chirps.js":
/*!*********************************!*\
  !*** ./server/routes/chirps.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./server/db/index.js\");\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router(); // const chirpsStore = require(\"../chirpstore.js\");\n// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.\n\n // REST API\n\nrouter.get(\"/:id?\", async (req, res) => {\n  try {\n    const id = req.params.id;\n\n    if (id) {\n      const chirp = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.one(id);\n      res.json(chirp);\n    } else {\n      const chirps = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.all();\n      res.json(chirps);\n    }\n  } catch (error) {\n    console.log(error);\n  }\n}); // Create\n\nrouter.post(\"/\", async (req, res) => {\n  try {\n    const body = req.body;\n    const dbRes = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.insert(body.userid, body.content, body.location);\n    res.status(200).json(dbRes);\n  } catch (error) {\n    console.log(error);\n  }\n}); // Delete\n\nrouter.delete(\"/:id\", async (req, res) => {\n  try {\n    const id = req.params.id;\n    const dbRes = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.destroy(id);\n    res.status(200).json(dbRes);\n  } catch (error) {\n    console.log(error);\n  }\n}); // Update\n\nrouter.put(\"/:id\", async (req, res) => {\n  try {\n    const id = req.params.id;\n    const content = req.body.content;\n    const dbRes = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.edit(id, content);\n    res.status(200).json(dbRes);\n  } catch (error) {\n    console.log(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-node-webpack/./server/routes/chirps.js?");

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chirps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chirps */ \"./server/routes/chirps.js\");\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ \"./server/routes/users.js\");\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\n\n // localhost:3000/api/chirps/\n\nrouter.use(\"/chirps\", _chirps__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use(\"/users\", _users__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-node-webpack/./server/routes/index.js?");

/***/ }),

/***/ "./server/routes/users.js":
/*!********************************!*\
  !*** ./server/routes/users.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./server/db/index.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.post(\"/\", async (req, res) => {\n  try {\n    const body = req.body;\n    const dbRes = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].users.insert(body.name, body.email, body.password);\n    res.status(200).json(dbRes);\n  } catch (error) {\n    console.error(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-node-webpack/./server/routes/users.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./server/routes/index.js\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\nlet p = path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, '../public');\nconsole.log(p);\napp.use(express__WEBPACK_IMPORTED_MODULE_0__.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](p));\napp.use(\"/api\", _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // Lost React router request gets sent the html to defer to front end routing\n\napp.get(\"*\", (req, res) => {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, \"../public/index.html\"));\n});\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on port: ${port}`);\n});\n\n//# sourceURL=webpack://barebones-react-node-webpack/./server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;