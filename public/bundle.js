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

/***/ "./src/Ant.ts":
/*!********************!*\
  !*** ./src/Ant.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ant\": () => (/* binding */ Ant)\n/* harmony export */ });\nclass Ant {\r\n    constructor(x, y) {\r\n        this.facing = 0;\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    move(color) {\r\n        let position = this.rotate(color);\r\n        this.x = position.x;\r\n        this.y = position.y;\r\n        if (this.facing == 0) {\r\n            this.y += 1;\r\n        }\r\n        else if (this.facing == 90) {\r\n            this.x += 1;\r\n        }\r\n        else if (this.facing == 180) {\r\n            this.y -= 1;\r\n        }\r\n        else {\r\n            this.x -= 1;\r\n        }\r\n        console.log(this.position());\r\n    }\r\n    /*\r\n    Rotation around theta on (x,y) to (x',y')\r\n    - x' = xcos(theta) - sin(theta)y\r\n    - y' = xsin(theta) + cos(theta)y\r\n    In this case, is always 90 clockwise or 90 anti-clockwise\r\n    */\r\n    rotate(color) {\r\n        var sign = color == true ? -1 : 1;\r\n        this.facing += 90 * sign;\r\n        if (this.facing == 360)\r\n            this.facing = 0;\r\n        if (this.facing < 0)\r\n            this.facing = 270;\r\n        return {\r\n            x: sign * this.y,\r\n            y: -sign * this.x\r\n        };\r\n    }\r\n    position() {\r\n        return `Position (${this.x},${this.y})`;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lagtonant/./src/Ant.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _Ant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ant */ \"./src/Ant.ts\");\n\r\nclass Board {\r\n    constructor(dimension) {\r\n        this.dimension = dimension;\r\n        this.grid = [];\r\n        this.end = false;\r\n        this.running = false;\r\n        this.ant = new _Ant__WEBPACK_IMPORTED_MODULE_0__.Ant(0, 1);\r\n        for (var i = 0; i < dimension; i++) {\r\n            this.grid[i] = [];\r\n            for (var j = 0; j < dimension; j++) {\r\n                this.grid[i][j] = false;\r\n            }\r\n        }\r\n    }\r\n    color(position) {\r\n        let { x, y } = position;\r\n        if ((x >= 0 && x <= this.dimension) || (y >= 0 && y <= this.dimension)) {\r\n            this.grid[x][y] = !this.grid[x][y];\r\n        }\r\n        return null;\r\n    }\r\n    move() {\r\n        let previous = { x: this.ant.x, y: this.ant.y };\r\n        let matrix_position = this.mapCoordinates(previous);\r\n        if (this.isOutsideGrid(matrix_position)) {\r\n            alert(\"CHOCASTE CONTRA LA PARED\");\r\n            this.end = true;\r\n            this.running = false;\r\n        }\r\n        else {\r\n            this.ant.move(this.grid[matrix_position.x][matrix_position.y]);\r\n            this.color(matrix_position);\r\n            this.running = true;\r\n        }\r\n    }\r\n    isOutsideGrid(coordinates) {\r\n        return (coordinates.x < 0 ||\r\n            coordinates.x >= this.dimension ||\r\n            coordinates.y < 0 ||\r\n            coordinates.y >= this.dimension);\r\n    }\r\n    mapCoordinates(coordinates) {\r\n        let center = (this.dimension + 1) / 2 - 1;\r\n        return {\r\n            x: center + coordinates.x,\r\n            y: center + coordinates.y,\r\n        };\r\n    }\r\n    isTerminated() {\r\n        return this.end;\r\n    }\r\n    isRunning() {\r\n        return this.running;\r\n    }\r\n    getAnt() {\r\n        return this.ant;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lagtonant/./src/Board.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\n\r\nvar button = document.getElementById(\"startButton\");\r\nvar board;\r\nfunction createGrid(dimension) {\r\n    var _a;\r\n    if (!board.isRunning()) {\r\n        (_a = document.getElementById(\"container\")) === null || _a === void 0 ? void 0 : _a.remove();\r\n        var container = document.createElement(\"div\");\r\n        container.setAttribute(\"id\", \"container\");\r\n        container.style.setProperty(\"grid-template-columns\", \"repeat(\" + dimension + \",1fr)\");\r\n        for (let i = 0; i < Math.pow(dimension, 2); i += 1) {\r\n            var cell = document.createElement(\"div\");\r\n            cell.setAttribute(\"class\", \"cell\");\r\n            cell.innerHTML = String(i + 1);\r\n            container.appendChild(cell);\r\n        }\r\n        document.body.appendChild(container);\r\n    }\r\n    else {\r\n        alert(\"Otra simulación esta corriendo de fondo\");\r\n    }\r\n}\r\nbutton.onclick = function () {\r\n    let dimension = Number(document.getElementById(\"dimension\").value);\r\n    if (dimension <= 0) {\r\n        return null;\r\n    }\r\n    while (dimension % 2 == 0) {\r\n        alert(\"Por favor, ingrese un numero impar y mayor que 0\");\r\n        return null;\r\n    }\r\n    let interval = null;\r\n    board = new _Board__WEBPACK_IMPORTED_MODULE_0__.Board(dimension);\r\n    createGrid(dimension);\r\n    interval = setInterval(() => {\r\n        if (!board.isTerminated()) {\r\n            board.move();\r\n        }\r\n        else {\r\n            clearInterval(interval);\r\n        }\r\n        ;\r\n    }, 1000);\r\n};\r\n\n\n//# sourceURL=webpack://lagtonant/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;