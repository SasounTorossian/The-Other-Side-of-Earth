/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n\r\n\r\n// MapModule.removeGoogleMapScript()\r\n_map_js__WEBPACK_IMPORTED_MODULE_0__.MapModule.addGoogleMapScript()\r\n\r\n\n\n//# sourceURL=webpack://antipodes/./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! namespace exports */
/*! export MapModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MapModule\": () => /* binding */ MapModule\n/* harmony export */ });\nconst MapModule = (() => {\r\n    window.initMap = () => {\r\n\r\n        // Create map object with correct center and zoom\r\n        let map1 = new google.maps.Map(\r\n            document.getElementById(\"map1\"), \r\n            {\r\n                zoom: 1.3,\r\n                center: new google.maps.LatLng(0,0)\r\n            }\r\n        )\r\n\r\n        // Create map object with correct center and zoom\r\n        let map2 = new google.maps.Map(\r\n            document.getElementById(\"map2\"), \r\n            {\r\n                zoom: 1.3,\r\n                center: new google.maps.LatLng(0,0)\r\n            }\r\n        )\r\n\r\n\r\n        // Create the search box and link it to the UI element.\r\n        const input = document.getElementById(\"pac-input\")\r\n        const searchBox = new google.maps.places.SearchBox(input)\r\n        map1.controls[google.maps.ControlPosition.TOP_LEFT].push(input)\r\n\r\n        // Bias the SearchBox results towards current map's viewport.\r\n        searchBox.addListener(\"places_changed\", () => {\r\n            const places = searchBox.getPlaces()\r\n                if (places.length == 0) return\r\n\r\n            places.forEach((place) => addMarker(place.geometry.location))\r\n          })\r\n        \r\n        let marker1\r\n        let marker2\r\n\r\n        map1.addListener(\"click\", (e) => {\r\n            addMarker(e.latLng)\r\n        })\r\n        \r\n        const addMarker = (latLng) => {\r\n            let lat = - latLng.toJSON().lat\r\n            let lng = latLng.toJSON().lng + 180\r\n            let antiLatLng = new google.maps.LatLng({lat , lng})\r\n\r\n            if(marker1) marker1.setPosition(latLng)\r\n            else {\r\n                marker1 = new google.maps.Marker({\r\n                    position: latLng,\r\n                    map: map1,\r\n                  });\r\n            }\r\n            map1.panTo(latLng)\r\n\r\n            if(marker2) marker2.setPosition(antiLatLng)\r\n            else {\r\n                marker2 = new google.maps.Marker({\r\n                    position: antiLatLng,\r\n                    map: map2,\r\n                  });\r\n            }\r\n            map2.panTo(antiLatLng)\r\n            map2.setZoom(map1.getZoom())\r\n        }\r\n    }\r\n    \r\n    \r\n    /**Removes all traced of google api from html in order to prevent\r\n    * multiple loads of the api, which could cause issues later on.\r\n    */\r\n    const removeGoogleMapScript = () => {\r\n        let keywords = ['maps.googleapis']\r\n        \r\n        //Remove google from BOM (window object)\r\n        window.google = undefined\r\n        \r\n        //Remove google map scripts from DOM\r\n        let scripts = document.head.getElementsByTagName(\"script\")\r\n        for (let i = scripts.length - 1; i >= 0; i--) {\r\n            let scriptSource = scripts[i].getAttribute('src')\r\n            if (scriptSource != null) {\r\n                if (keywords.filter(item => scriptSource.includes(item)).length) {\r\n                    scripts[i].remove()\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    /**Create google api url using api key.\r\n    * Set source of script to url, and defer until html is loaded.\r\n    */\r\n    const addGoogleMapScript = () => {\r\n        // const key = \"AIzaSyBgXyqkZVXE515nBZW12GKBFkf4vEa4-xg\"\r\n        // const url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`\r\n        // const script = document.createElement('script');\r\n        // script.src = url\r\n        // script.defer = true\r\n        // document.head.appendChild(script)\r\n\r\n\r\n        const key = \"AIzaSyBgXyqkZVXE515nBZW12GKBFkf4vEa4-xg\"\r\n        const callback = \"initMap\"\r\n        const library = \"places\"\r\n        const url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=${callback}&libraries=${library}`\r\n        const script = document.createElement('script');\r\n        script.src = url\r\n        script.defer = true\r\n        document.head.appendChild(script)\r\n    }\r\n\r\n    return {\r\n        removeGoogleMapScript,\r\n        addGoogleMapScript\r\n    }\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://antipodes/./src/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;