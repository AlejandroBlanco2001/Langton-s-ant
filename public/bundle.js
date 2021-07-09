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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ant\": () => (/* binding */ Ant)\n/* harmony export */ });\nclass Ant {\r\n    constructor(x, y) {\r\n        this.facing = \"R\";\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    move(color) {\r\n        this.rotate(color);\r\n        if (this.facing == \"R\") {\r\n            this.x += 1;\r\n        }\r\n        else if (this.facing == \"U\") {\r\n            this.y += 1;\r\n        }\r\n        else if (this.facing == \"L\") {\r\n            this.x -= 1;\r\n        }\r\n        else {\r\n            this.y -= 1;\r\n        }\r\n        console.log(this.position());\r\n    }\r\n    rotate(color) {\r\n        if (color == true) {\r\n            if (this.facing == \"R\") {\r\n                this.facing = \"U\";\r\n            }\r\n            else if (this.facing == \"U\") {\r\n                this.facing = \"L\";\r\n            }\r\n            else if (this.facing == \"L\") {\r\n                this.facing = \"D\";\r\n            }\r\n            else {\r\n                this.facing = \"R\";\r\n            }\r\n        }\r\n        else {\r\n            if (this.facing == \"R\") {\r\n                this.facing = \"D\";\r\n            }\r\n            else if (this.facing == \"U\") {\r\n                this.facing = \"R\";\r\n            }\r\n            else if (this.facing == \"L\") {\r\n                this.facing = \"U\";\r\n            }\r\n            else {\r\n                this.facing = \"L\";\r\n            }\r\n        }\r\n    }\r\n    getCoordinates() {\r\n        return {\r\n            x: this.x,\r\n            y: this.y\r\n        };\r\n    }\r\n    position() {\r\n        return `Position (${this.x},${this.y})`;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lagtonant/./src/Ant.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _Ant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ant */ \"./src/Ant.ts\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ \"./src/Util.ts\");\n\r\n\r\nclass Board {\r\n    constructor(dimension) {\r\n        this.dimension = dimension;\r\n        this.grid = [];\r\n        this.end = false;\r\n        this.ant = new _Ant__WEBPACK_IMPORTED_MODULE_0__.Ant(0, 0);\r\n        for (var i = 0; i < dimension; i++) {\r\n            this.grid[i] = [];\r\n            for (var j = 0; j < dimension; j++) {\r\n                this.grid[i][j] = true;\r\n            }\r\n        }\r\n    }\r\n    getColor(position) {\r\n        return this.grid[position.x][position.y];\r\n    }\r\n    color(position) {\r\n        let { x, y } = position;\r\n        if ((x >= 0 && x <= this.dimension) || (y >= 0 && y <= this.dimension)) {\r\n            this.grid[x][y] = !this.grid[x][y];\r\n        }\r\n        return null;\r\n    }\r\n    move() {\r\n        let previous = { x: this.ant.x, y: this.ant.y };\r\n        let matrix_position = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.mapCoordinates(this.dimension, previous);\r\n        if (this.isOutside()) {\r\n            alert(\"CHOCASTE CONTRA LA PARED\");\r\n            this.end = true;\r\n        }\r\n        else {\r\n            this.ant.move(this.grid[matrix_position.x][matrix_position.y]);\r\n            if (this.isOutside()) {\r\n                alert(\"CHOCASTE CONTRA LA PARED\");\r\n                this.end = true;\r\n            }\r\n            this.color(matrix_position);\r\n        }\r\n    }\r\n    isTerminated() {\r\n        return this.end;\r\n    }\r\n    isOutside() {\r\n        return _Util__WEBPACK_IMPORTED_MODULE_1__.Util.isOutsideGrid(this.dimension, _Util__WEBPACK_IMPORTED_MODULE_1__.Util.mapCoordinates(this.dimension, this.ant.getCoordinates()));\r\n    }\r\n    getAnt() {\r\n        return this.ant;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lagtonant/./src/Board.ts?");

/***/ }),

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Util\": () => (/* binding */ Util)\n/* harmony export */ });\nvar Util;\r\n(function (Util) {\r\n    function mapCoordinates(dimension, coordinates) {\r\n        let center = (dimension + 1) / 2 - 1;\r\n        return {\r\n            x: center - coordinates.y,\r\n            y: center + coordinates.x,\r\n        };\r\n    }\r\n    Util.mapCoordinates = mapCoordinates;\r\n    function isOutsideGrid(dimension, coordinates) {\r\n        return (coordinates.x < 0 ||\r\n            coordinates.x >= dimension ||\r\n            coordinates.y < 0 ||\r\n            coordinates.y >= dimension);\r\n    }\r\n    Util.isOutsideGrid = isOutsideGrid;\r\n})(Util || (Util = {}));\r\n\n\n//# sourceURL=webpack://lagtonant/./src/Util.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ \"./src/Util.ts\");\n\r\n\r\n// Button for create grid and start simulation \r\nvar buttonStart = document.getElementById(\"startButton\");\r\nvar buttonGrid = document.getElementById(\"createGrid\");\r\nvar isRunning = false;\r\nvar board;\r\nvar timePerUpdate = 1000;\r\nlet speedButtons = document.getElementsByClassName(\"speedButtons\");\r\nArray.prototype.forEach.call(speedButtons, function (button) { console.log(button); });\r\n// Cells of the grid\r\nvar cells = [];\r\nfunction createGrid(dimension) {\r\n    var _a;\r\n    var temp = [];\r\n    (_a = document.getElementById(\"container\")) === null || _a === void 0 ? void 0 : _a.remove();\r\n    var container = document.createElement(\"div\");\r\n    container.setAttribute(\"id\", \"container\");\r\n    container.setAttribute(\"class\", \"centerItem\");\r\n    container.style.setProperty(\"grid-template-columns\", \"repeat(\" + dimension + \",1fr)\");\r\n    for (let i = 0; i < Math.pow(dimension, 2); i += 1) {\r\n        var cell = document.createElement(\"div\");\r\n        cell.setAttribute(\"class\", \"cell\");\r\n        container.appendChild(cell);\r\n        temp.push(cell);\r\n        if (temp.length == dimension) {\r\n            cells.push(temp);\r\n            temp = [];\r\n        }\r\n    }\r\n    let menu = document.getElementById(\"menu\");\r\n    let centerMenu = document.getElementById(\"centerElements\");\r\n    centerMenu.insertBefore(container, menu);\r\n}\r\nfunction paint(coordinates) {\r\n    let matrixCoord = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.mapCoordinates(board.dimension, coordinates);\r\n    let color = board.getColor(matrixCoord);\r\n    if (color == true) {\r\n        cells[matrixCoord.x][matrixCoord.y].style.backgroundColor = \"#000000\";\r\n    }\r\n    else {\r\n        cells[matrixCoord.x][matrixCoord.y].style.backgroundColor = \"#ffffff\";\r\n    }\r\n}\r\nbuttonStart.onclick = function () {\r\n    let grid = document.getElementById(\"container\");\r\n    if (grid != null || grid != undefined) {\r\n        if (!isRunning) {\r\n            isRunning = true;\r\n            let dimension = Number((document.getElementById(\"dimension\")).value);\r\n            if (dimension <= 0) {\r\n                return null;\r\n            }\r\n            while (dimension % 2 == 0) {\r\n                alert(\"Por favor, ingrese un numero impar y mayor que 0\");\r\n                return null;\r\n            }\r\n            let interval = null;\r\n            board = new _Board__WEBPACK_IMPORTED_MODULE_0__.Board(dimension);\r\n            interval = setInterval(() => {\r\n                if (!board.isTerminated() && !board.isOutside()) {\r\n                    paint(board.getAnt().getCoordinates());\r\n                    board.move();\r\n                }\r\n                else {\r\n                    clearInterval(interval);\r\n                    isRunning = false;\r\n                }\r\n            }, timePerUpdate);\r\n        }\r\n        else {\r\n            alert(\"EJECUCCION CORRIENDO\");\r\n        }\r\n    }\r\n    else {\r\n        alert(\"CREA UN GRID PRIMERO\");\r\n    }\r\n};\r\nbuttonGrid.onclick = function () {\r\n    let dimension = Number((document.getElementById(\"dimension\")).value);\r\n    if (dimension <= 0) {\r\n        return null;\r\n    }\r\n    while (dimension % 2 == 0) {\r\n        alert(\"Por favor, ingrese un numero impar y mayor que 0\");\r\n        return null;\r\n    }\r\n    createGrid(dimension);\r\n};\r\n\n\n//# sourceURL=webpack://lagtonant/./src/index.ts?");

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