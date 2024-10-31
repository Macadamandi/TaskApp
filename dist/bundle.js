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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view */ \"./js/modules/view.js\");\n/* harmony import */ var _modules_routing_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/routing/tasks */ \"./js/modules/routing/tasks.js\");\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add */ \"./js/modules/add.js\");\n/* harmony import */ var _modules_remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/remove */ \"./js/modules/remove.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ \"./js/modules/cards.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n   (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__.cards)(_modules_view__WEBPACK_IMPORTED_MODULE_0__.viewTasks);\r\n   (0,_modules_view__WEBPACK_IMPORTED_MODULE_0__.view)();\r\n   (0,_modules_routing_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_modules_view__WEBPACK_IMPORTED_MODULE_0__.viewTasks);\r\n   (0,_modules_add__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_view__WEBPACK_IMPORTED_MODULE_0__.createTask, _modules_view__WEBPACK_IMPORTED_MODULE_0__.viewTasks);\r\n   (0,_modules_remove__WEBPACK_IMPORTED_MODULE_3__.removeCard)(_modules_view__WEBPACK_IMPORTED_MODULE_0__.viewTasks);\r\n}); \n\n//# sourceURL=webpack://TaskManager/./js/index.js?");

/***/ }),

/***/ "./js/modules/add.js":
/*!***************************!*\
  !*** ./js/modules/add.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./js/modules/cards.js\");\n\r\n\r\nfunction add(createTask, viewTasks) {\r\n   const addButton = document.createElement('button');\r\n   addButton.innerText = 'Add Task';\r\n   addButton.style = `\r\n      width: 125px;\r\n      height: 50px;\r\n      display: block;\r\n      border: 0;\r\n      border-radius: 10px;\r\n   `;\r\n   addButton.classList.add('hover');\r\n   createTask.appendChild(addButton);\r\n\r\n   addButton.addEventListener('click', () => {\r\n      const taskPanel = document.querySelector('.task-panel'),\r\n         modalAdd = document.createElement('div'),\r\n         modalWrapp = document.createElement('div'),\r\n         divLabel = document.createElement('div'),\r\n         divTopic = document.createElement('div'),\r\n         divComment = document.createElement('div'),\r\n         inputLabel = document.createElement('input'),\r\n         inputTopic = document.createElement('input'),\r\n         inputComment = document.createElement('textarea'),\r\n         labelLabel = document.createElement('label'),\r\n         labelTopic = document.createElement('label'),\r\n         labelComment = document.createElement('label');\r\n\r\n      modalWrapp.style = `\r\n         background-color: rgba(0,0,0,0.3);\r\n         position: absolute;\r\n         width: 100%;\r\n         height: 100%;\r\n      `;\r\n\r\n      taskPanel.style = `\r\n         position: relative;\r\n      `;\r\n      modalAdd.style = `\r\n         width: 89%;\r\n         height: 77%;;\r\n         background-color: #ffffff;\r\n         left: 50%;\r\n         top: 50%;\r\n         transform: translate(-50%, -50%);\r\n         position: absolute;\r\n         padding: 20px;\r\n         display: flex;\r\n         flex-direction: column;\r\n         justify-content: center;\r\n         align-items: center;\r\n      `;\r\n\r\n      inputLabel.style = `\r\n         width: 100%;\r\n         height: 40px;\r\n         padding: 10px;\r\n         background-color: #f3f5f7;\r\n         border: none;\r\n      `;\r\n\r\n      inputTopic.style = `\r\n         width: 100%;\r\n         height: 40px;\r\n         padding: 10px;\r\n         background-color: #f3f5f7;\r\n         border: none;\r\n      `;\r\n\r\n      inputComment.style = `\r\n         width: 100%;\r\n         height: 40px;\r\n         padding: 10px;\r\n         height: 90px;\r\n         resize: none;\r\n         background-color: #f3f5f7;\r\n         border: none;\r\n      `;\r\n\r\n      divLabel.style = `margin-bottom: 15px; width: 50%;`;\r\n      divTopic.style = `margin-bottom: 15px; width: 50%;`;\r\n      divComment.style = `margin-bottom: 15px; width: 50%;`;\r\n\r\n      inputLabel.id = 'tag';\r\n      labelLabel.setAttribute('for', 'tag');\r\n\r\n      inputTopic.id = 'topic';\r\n      labelTopic.setAttribute('for', 'topic');\r\n\r\n      inputComment.id = 'comment';\r\n      labelComment.setAttribute('for', 'comment');\r\n\r\n      labelLabel.textContent = 'Tag';\r\n      labelTopic.textContent = 'Topic';\r\n      labelComment.textContent = 'Comment';\r\n\r\n      divLabel.appendChild(labelLabel);\r\n      divLabel.appendChild(inputLabel);\r\n\r\n      divTopic.appendChild(labelTopic);\r\n      divTopic.appendChild(inputTopic);\r\n\r\n      divComment.appendChild(labelComment);\r\n      divComment.appendChild(inputComment);\r\n\r\n      modalAdd.appendChild(divLabel);\r\n      modalAdd.appendChild(divTopic);\r\n      modalAdd.appendChild(divComment);\r\n\r\n      const clonedButton = addButton.cloneNode(true);\r\n\r\n      modalAdd.appendChild(clonedButton);\r\n\r\n      modalWrapp.appendChild(modalAdd);\r\n      taskPanel.appendChild(modalWrapp);\r\n\r\n      addButton.style.display = 'none';\r\n\r\n      modalWrapp.addEventListener('click', () => {\r\n         console.log('ModalBack');\r\n         modalWrapp.style.display = 'none';\r\n         addButton.style.display = 'block';\r\n      });\r\n\r\n      modalAdd.addEventListener('click', (e) => {\r\n         e.stopPropagation();\r\n      });\r\n\r\n      clonedButton.addEventListener('click', () => {\r\n         createNewTask(inputLabel.value, inputTopic.value, inputComment.value, viewTasks, modalWrapp, addButton);\r\n      });\r\n\r\n   })\r\n}\r\n\r\nfunction createNewTask(tag, topic, comment, viewTasks, modalWrapp, addButton) {\r\n   if (tag != '' && topic != '' && comment != '') {\r\n      (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.createNewCard)(tag, topic, comment, viewTasks);\r\n      modalWrapp.style.display = 'none';\r\n      addButton.style.display = 'block';\r\n   }\r\n   else {\r\n      console.log('Fields cannot be empty');\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n//# sourceURL=webpack://TaskManager/./js/modules/add.js?");

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cards: () => (/* binding */ cards),\n/* harmony export */   createNewCard: () => (/* binding */ createNewCard)\n/* harmony export */ });\nclass Cards {\r\n   constructor(label, topic, comment, id) {\r\n      this.label = label;\r\n      this.topic = topic;\r\n      this.comment = comment;\r\n      this.id = id || generateUniqueId();\r\n   }\r\n\r\n   createCard(viewTasks) {\r\n      const cardWrap = document.createElement('div'),\r\n         cardLabel = document.createElement('span'),\r\n         cardTopic = document.createElement('h3'),\r\n         cardComment = document.createElement('p'),\r\n         cardData = document.createElement('span'),\r\n         dotsWrap = document.createElement('div'),\r\n         dots =  document.createElement('span'),\r\n         menu = document.createElement('div'),\r\n         menuDelete = document.createElement('div'),\r\n         menuChange = document.createElement('div');\r\n\r\n      const currentDate = new Date();\r\n\r\n      const day = String(currentDate.getDate()).padStart(2, '0'); // День с ведущим нулем\r\n      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяц (начинается с 0, добавляем 1)\r\n      const year = currentDate.getFullYear(); // Год\r\n      const hours = String(currentDate.getHours()).padStart(2, '0'); // Часы с ведущим нулем\r\n      const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Минуты с ведущим нулем\r\n\r\n      const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;\r\n\r\n      cardWrap.style = `\r\n         flex: 0 0 calc(25% - 20px);\r\n         box-sizing: border-box;\r\n         padding: 10px;\r\n         box-shadow: 1px 1px 5px #b9b9b9;\r\n         display: flex;\r\n         flex-direction: column;\r\n         border-radius: 5px;\r\n         background-color: #ffffff;\r\n         margin: 10px;\r\n         position: relative;\r\n      `;\r\n\r\n      cardLabel.textContent = this.label;\r\n      cardTopic.textContent = this.topic;\r\n      cardComment.textContent = this.comment;\r\n      cardData.textContent = formattedDate;\r\n\r\n      cardLabel.style = `\r\n         margin-bottom: 20px;\r\n         align-self: start;\r\n         padding: 3px 6px;\r\n         background-color: #37B1B2;\r\n         border-radius: 10px;\r\n      `;\r\n      cardTopic.style = `\r\n         margin-bottom: 10px;\r\n         height: 60px;\r\n      `;\r\n      cardComment.style = `\r\n         margin-bottom: 40px;\r\n         height: 80px;\r\n      `;\r\n\r\n      dotsWrap.style = `\r\n         position: absolute;\r\n         right: 4px;\r\n         top: 6px;\r\n         display: flex;\r\n         flex-direction: column;\r\n         align-items: end;\r\n      `;\r\n\r\n      dots.style = `\r\n         background-image: url('../../img/icons/icon-menu.png');\r\n         width: 24px;\r\n         height: 24px;   \r\n         display: inline-block;\r\n      `;\r\n\r\n      menu.style = `\r\n         width: 50px;\r\n         background-color: rgb(101, 101, 101);\r\n         padding: 7px;\r\n         color: rgb(255, 255, 255);\r\n         font-size: 11px;\r\n      `;\r\n\r\n      menu.classList.add('hide');\r\n\r\n      menuDelete.style = `\r\n         margin-bottom: 7px;\r\n      `;\r\n\r\n      menuDelete.textContent = 'Delete';\r\n      menuChange.textContent = 'Change';\r\n      \r\n      menuDelete.classList.add('hover', 'remove');\r\n      menuChange.classList.add('hover');\r\n\r\n      menuDelete.setAttribute('data-id', `${this.id}`);\r\n\r\n      dotsWrap.appendChild(dots);\r\n      menu.appendChild(menuDelete);\r\n      //menu.appendChild(menuChange);\r\n      dotsWrap.appendChild(menu);\r\n\r\n      dots.classList.add('hover');\r\n\r\n      cardWrap.appendChild(dotsWrap);\r\n      cardWrap.appendChild(cardLabel);\r\n      cardWrap.appendChild(cardTopic);\r\n      cardWrap.appendChild(cardComment);\r\n      cardWrap.appendChild(cardData);\r\n\r\n      viewTasks.appendChild(cardWrap);\r\n\r\n      dots.addEventListener('click', () => {\r\n         if (menu.classList.contains('hide')) {\r\n            menu.classList.remove('hide');\r\n            menu.classList.add('show');\r\n         } else {\r\n            menu.classList.remove('show');\r\n            menu.classList.add('hide');\r\n         }\r\n      });\r\n\r\n      document.addEventListener('click', (e) => {\r\n         if(!menu.contains(e.target) && !dots.contains(e.target)) {\r\n            menu.classList.remove('show');\r\n            menu.classList.add('hide');\r\n         }\r\n      });\r\n   }\r\n}\r\n\r\nfunction generateUniqueId() {\r\n   return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;\r\n}\r\n\r\nfunction cards(viewTasks) {\r\n   const cards = JSON.parse(localStorage.getItem('cards')) || [];\r\n   console.log(cards);\r\n\r\n   const restoredCards = cards.map(data => new Cards(data.label, data.topic, data.comment, data.id));\r\n\r\n   restoredCards.forEach(card => card.createCard(viewTasks));\r\n}\r\n\r\nfunction createNewCard(tag, topic, comment, viewTasks) {\r\n   const card = new Cards(tag, topic, comment);\r\n\r\n   const cardsObj = JSON.parse(localStorage.getItem('cards')) || [];\r\n\r\n   cardsObj.push(card);\r\n\r\n   localStorage.setItem('cards', JSON.stringify(cardsObj));\r\n\r\n   viewTasks.innerHTML = '';\r\n   cards(viewTasks);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://TaskManager/./js/modules/cards.js?");

/***/ }),

/***/ "./js/modules/remove.js":
/*!******************************!*\
  !*** ./js/modules/remove.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./js/modules/cards.js\");\n\r\n\r\nfunction removeCard(viewTasks) {\r\n   viewTasks.addEventListener('click', (e) => {\r\n      if (e.target.classList.contains('remove')) {\r\n         const cardId = e.target.getAttribute('data-id');\r\n\r\n         let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];\r\n\r\n         cardsObj = cardsObj.filter(card => card.id !== cardId);\r\n         localStorage.setItem('cards', JSON.stringify(cardsObj));\r\n\r\n         viewTasks.innerHTML = '';\r\n         (0,_cards__WEBPACK_IMPORTED_MODULE_0__.cards)(viewTasks);\r\n      }\r\n   });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://TaskManager/./js/modules/remove.js?");

/***/ }),

/***/ "./js/modules/routing/tasks.js":
/*!*************************************!*\
  !*** ./js/modules/routing/tasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards.js */ \"./js/modules/cards.js\");\n\r\n\r\nfunction redirect(viewTasks) {\r\n   const tasks = document.querySelector('.tasks');\r\n\r\n   tasks.addEventListener('click', () => {\r\n      viewTasks.innerHTML = '';\r\n      (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards)(viewTasks);\r\n   });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redirect);\n\n//# sourceURL=webpack://TaskManager/./js/modules/routing/tasks.js?");

/***/ }),

/***/ "./js/modules/view.js":
/*!****************************!*\
  !*** ./js/modules/view.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   view: () => (/* binding */ view),\n/* harmony export */   viewTasks: () => (/* binding */ viewTasks)\n/* harmony export */ });\nconst viewTasks = document.createElement('div'),\r\n   createTask = document.createElement('div');\r\n\r\nfunction view() {\r\n   const taskPanel = document.querySelector('.task-panel');\r\n\r\n   createTask.style = `\r\n      border-bottom: 1px solid #dddddd;\r\n      width: 100%;\r\n      height: 150px;\r\n      min-height: 150px;\r\n      max-height: 150px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n   `;\r\n\r\n   viewTasks.style = `\r\n      background-color: #f4f6f7;\r\n      width: 100%;\r\n      flex-grow: 5;\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      align-content: flex-start;\r\n      padding: 15px;\r\n      align-items: stretch;\r\n      overflow-y: scroll;\r\n      max-height: 600px;\r\n   `;\r\n\r\n   taskPanel.appendChild(createTask);\r\n   taskPanel.appendChild(viewTasks);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://TaskManager/./js/modules/view.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;