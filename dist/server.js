/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/db/chirps.js":
/*!*****************************!*\
  !*** ./server/db/chirps.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./server/db/index.js\");\n\n\nconst all = () => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"select * from chirps\");\n\nconst one = id => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"select * from chirps where chirps.id = ?\", [id]);\n\nconst destroy = id => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"delete from chirps where chirps.id = ?\", [id]);\n\nconst insert = (userid, content, location) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"insert into chirps (userid, content, location) values (?, ?, ?)\", [userid, content, location]);\n\nconst edit = (id, content) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"UPDATE chirps SET content = ? WHERE chirps.id = ?\", [content, id]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  all,\n  one,\n  destroy,\n  insert,\n  edit\n});\n\n//# sourceURL=webpack:///./server/db/chirps.js?");

/***/ }),

/***/ "./server/db/index.js":
/*!****************************!*\
  !*** ./server/db/index.js ***!
  \****************************/
/*! exports provided: Query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Query\", function() { return Query; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chirps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chirps */ \"./server/db/chirps.js\");\n\nconst connection = mysql__WEBPACK_IMPORTED_MODULE_0__[\"createConnection\"]({\n  host: \"localhost\",\n  port: 3306,\n  database: \"chirpr\",\n  user: \"chirprapp\",\n  password: \"blahblah\"\n});\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    connection.query(query, values, (err, results) => {\n      if (err) throw err;\n      resolve(results);\n    });\n  });\n};\n // this becomes db object in routes/chirps.js\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  chirps: _chirps__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./server/db/index.js?");

/***/ }),

/***/ "./server/routes/chirps.js":
/*!*********************************!*\
  !*** ./server/routes/chirps.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./server/db/index.js\");\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); // const chirpsStore = require(\"../chirpstore.js\");\n// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.\n\n // REST API\n\nrouter.get(\"/:id?\", async (req, res) => {\n  try {\n    const id = req.params.id;\n\n    if (id) {\n      const chirp = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.one(id);\n      res.json(chirp);\n    } else {\n      const chirps = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.all();\n      res.json(chirps);\n    }\n  } catch (error) {\n    console.log(error);\n  }\n}); // Create\n\nrouter.post(\"/\", async (req, res) => {\n  try {\n    const body = req.body;\n    const dbRes = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.insert(body.userid, body.content, body.location);\n    res.status(200).json(dbRes);\n  } catch (error) {\n    console.log(error);\n  }\n}); // Delete\n\nrouter.delete(\"/:id\", async (req, res) => {\n  try {\n    const id = req.params.id;\n    const dbRes = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.destroy(id);\n    res.status(200).json(dbRes);\n  } catch (error) {\n    console.log(error);\n  }\n}); // Update\n\nrouter.put(\"/:id\", async (req, res) => {\n  try {\n    const id = req.params.id;\n    const content = req.body.content;\n    const dbRes = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.edit(id, content);\n    res.status(200).json(dbRes);\n  } catch (error) {\n    console.log(error);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/chirps.js?");

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chirps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chirps */ \"./server/routes/chirps.js\");\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\n // localhost:3000/api/chirps/\n\nrouter.use(\"/chirps\", _chirps__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/index.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./server/routes/index.js\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\nlet p = path__WEBPACK_IMPORTED_MODULE_1__[\"join\"](__dirname, '../public');\nconsole.log(p);\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"json\"]());\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](p));\napp.use(\"/api\", _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on port: ${port}`);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });