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

/***/ "./src/modules/tasks/add.js":
/*!**********************************!*\
  !*** ./src/modules/tasks/add.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   createModal: () => (/* binding */ createModal)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/modules/tasks/cards.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/modules/tasks/view.js\");\n\n\nconst BTN_ADD = 'add';\nfunction add() {\n  const addButton = document.createElement('button');\n  addButton.innerText = 'Add Task';\n  addButton.style = `\n      width: 125px;\n      height: 50px;\n      display: block;\n      border: 0;\n      border-radius: 10px;\n      background-color: #dadedf;\n   `;\n  addButton.classList.add('hover', 'addButton');\n  _view_js__WEBPACK_IMPORTED_MODULE_1__.createTask.appendChild(addButton);\n  addButton.addEventListener('click', () => {\n    createModal(BTN_ADD);\n  });\n}\nfunction createModal(BTN_CONST) {\n  const taskPanel = document.querySelector('.ajax-content'),\n    modalAdd = document.createElement('div'),\n    modalWrapp = document.createElement('div'),\n    divLabel = document.createElement('div'),\n    divTopic = document.createElement('div'),\n    divComment = document.createElement('div'),\n    inputLabel = document.createElement('input'),\n    inputTopic = document.createElement('input'),\n    inputComment = document.createElement('textarea'),\n    labelLabel = document.createElement('label'),\n    labelTopic = document.createElement('label'),\n    labelComment = document.createElement('label');\n  modalWrapp.style = `\n         background-color: rgba(0,0,0,0.3);\n         position: absolute;\n         width: 100%;\n         height: 100%;\n      `;\n  taskPanel.style = `\n         position: relative;\n      `;\n  modalAdd.style = `\n         width: 89%;\n         height: 77%;;\n         background-color: #ffffff;\n         left: 50%;\n         top: 50%;\n         transform: translate(-50%, -50%);\n         position: absolute;\n         padding: 20px;\n         display: flex;\n         flex-direction: column;\n         justify-content: center;\n         align-items: center;\n      `;\n  inputLabel.style = `\n         width: 100%;\n         height: 40px;\n         padding: 10px;\n         background-color: #e0e2e3;\n         border: none;\n      `;\n  inputTopic.style = `\n         width: 100%;\n         height: 40px;\n         padding: 10px;\n         background-color: #e0e2e3;\n         border: none;\n      `;\n  inputComment.style = `\n         width: 100%;\n         height: 40px;\n         padding: 10px;\n         height: 90px;\n         resize: none;\n         background-color: #e0e2e3;\n         border: none;\n      `;\n  divLabel.style = `margin-bottom: 15px; width: 50%;`;\n  divTopic.style = `margin-bottom: 15px; width: 50%;`;\n  divComment.style = `margin-bottom: 15px; width: 50%;`;\n  inputLabel.id = 'tag';\n  labelLabel.setAttribute('for', 'tag');\n  inputTopic.id = 'topic';\n  labelTopic.setAttribute('for', 'topic');\n  inputComment.id = 'comment';\n  labelComment.setAttribute('for', 'comment');\n  labelLabel.textContent = 'Tag';\n  labelTopic.textContent = 'Topic';\n  labelComment.textContent = 'Comment';\n  divLabel.appendChild(labelLabel);\n  divLabel.appendChild(inputLabel);\n  divTopic.appendChild(labelTopic);\n  divTopic.appendChild(inputTopic);\n  divComment.appendChild(labelComment);\n  divComment.appendChild(inputComment);\n  modalAdd.classList.add('dataModal');\n  modalAdd.appendChild(divLabel);\n  modalAdd.appendChild(divTopic);\n  modalAdd.appendChild(divComment);\n  switch (BTN_CONST) {\n    case 'add':\n      const addButtonToLocalStorage = document.createElement('button');\n      addButtonToLocalStorage.innerText = 'Add';\n      addButtonToLocalStorage.style = `\n            width: 125px;\n            height: 50px;\n            display: block;\n            border: 0;\n            border-radius: 10px;\n            background-color: #dadedf;\n         `;\n      addButtonToLocalStorage.classList.add('hover');\n      modalAdd.appendChild(addButtonToLocalStorage);\n      modalWrapp.appendChild(modalAdd);\n      taskPanel.appendChild(modalWrapp);\n      addToLocalStorage(inputLabel, inputTopic, inputComment, modalWrapp, addButtonToLocalStorage);\n      break;\n    case 'change':\n      modalWrapp.appendChild(modalAdd);\n      taskPanel.appendChild(modalWrapp);\n      break;\n  }\n  modalWrapp.addEventListener('click', () => {\n    modalWrapp.remove();\n  });\n  modalAdd.addEventListener('click', e => {\n    e.stopPropagation();\n  });\n  switch (BTN_CONST) {\n    case 'add':\n      return [inputLabel, inputTopic, inputComment, modalWrapp];\n    case 'change':\n      return [inputLabel, inputTopic, inputComment, modalAdd, modalWrapp];\n  }\n}\nfunction addToLocalStorage(inputLabel, inputTopic, inputComment, modalWrapp, addButtonToLocalStorage) {\n  addButtonToLocalStorage.addEventListener('click', () => {\n    createNewTask(inputLabel.value, inputTopic.value, inputComment.value, modalWrapp);\n  });\n}\nfunction createNewTask(tag, topic, comment, modalWrapp) {\n  if (tag != '' && topic != '' && comment != '') {\n    (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.createNewCard)(tag, topic, comment);\n    modalWrapp.remove();\n  } else {\n    console.log('Fields cannot be empty');\n  }\n}\n\n\n//# sourceURL=webpack://TaskManager/./src/modules/tasks/add.js?");

/***/ }),

/***/ "./src/modules/tasks/cards.js":
/*!************************************!*\
  !*** ./src/modules/tasks/cards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cards: () => (/* binding */ Cards),\n/* harmony export */   cards: () => (/* binding */ cards),\n/* harmony export */   createNewCard: () => (/* binding */ createNewCard)\n/* harmony export */ });\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./src/modules/tasks/view.js\");\n\nclass Cards {\n  constructor(label, topic, comment, id) {\n    this.label = label;\n    this.topic = topic;\n    this.comment = comment;\n    this.id = id || generateUniqueId();\n  }\n  createCard() {\n    const cardWrap = document.createElement('div'),\n      cardLabel = document.createElement('span'),\n      cardTopic = document.createElement('h3'),\n      cardComment = document.createElement('p'),\n      cardData = document.createElement('span'),\n      dotsWrap = document.createElement('div'),\n      dots = document.createElement('span'),\n      menu = document.createElement('div'),\n      menuDelete = document.createElement('div'),\n      menuChange = document.createElement('div');\n    const currentDate = new Date();\n    const day = String(currentDate.getDate()).padStart(2, '0'); // День с ведущим нулем\n    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяц (начинается с 0, добавляем 1)\n    const year = currentDate.getFullYear(); // Год\n    const hours = String(currentDate.getHours()).padStart(2, '0'); // Часы с ведущим нулем\n    const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Минуты с ведущим нулем\n\n    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;\n    cardWrap.style = `\n         flex: 0 0 calc(25% - 20px);\n         box-sizing: border-box;\n         padding: 10px;\n         box-shadow: 1px 1px 5px #b9b9b9;\n         display: flex;\n         flex-direction: column;\n         border-radius: 5px;\n         background-color: #ffffff;\n         margin: 10px;\n         position: relative;\n      `;\n    cardLabel.textContent = this.label;\n    cardTopic.textContent = this.topic;\n    cardComment.textContent = this.comment;\n    cardData.textContent = formattedDate;\n    cardLabel.style = `\n         margin-bottom: 20px;\n         align-self: start;\n         padding: 3px 6px;\n         background-color: ${generateBackgroundColor()};\n         border-radius: 10px;\n         font-size: 11px;\n         color: #ffffff;\n      `;\n    cardTopic.style = `\n         margin-bottom: 10px;\n         height: 60px;\n      `;\n    cardComment.style = `\n         margin-bottom: 40px;\n         height: 80px;\n         background-color: blanchedalmond;\n         border-radius: 5px;\n         padding: 10px;\n      `;\n    cardData.style = `\n         display: inline-block;\n         border-radius: 2px;\n         padding-top: 10px;\n         text-align: center;\n         font-size: 11px;\n         border-top: 1px solid gainsboro;\n      `;\n    dotsWrap.style = `\n         position: absolute;\n         right: 4px;\n         top: 6px;\n         display: flex;\n         flex-direction: column;\n         align-items: end;\n      `;\n    dots.style = `\n         background-image: url('/src/assets/images/icons/icon-menu.png');\n         width: 24px;\n         height: 24px;   \n         display: inline-block;\n      `;\n    menu.style = `\n         width: 50px;\n         background-color: rgb(101, 101, 101);\n         padding: 7px;\n         color: rgb(255, 255, 255);\n         font-size: 11px;\n      `;\n    menu.classList.add('hide');\n    menuDelete.style = `\n         margin-bottom: 7px;\n      `;\n    menuDelete.textContent = 'Delete';\n    menuChange.textContent = 'Change';\n    menuDelete.classList.add('hover', 'remove');\n    menuChange.classList.add('hover', 'change');\n    menu.classList.add('option-list');\n    menuDelete.setAttribute('data-id', `${this.id}`);\n    menuChange.setAttribute('data-id', `${this.id}`);\n    dotsWrap.appendChild(dots);\n    menu.appendChild(menuDelete);\n    menu.appendChild(menuChange);\n    dotsWrap.appendChild(menu);\n    dots.classList.add('hover');\n    cardWrap.appendChild(dotsWrap);\n    cardWrap.appendChild(cardLabel);\n    cardWrap.appendChild(cardTopic);\n    cardWrap.appendChild(cardComment);\n    cardWrap.appendChild(cardData);\n    _view_js__WEBPACK_IMPORTED_MODULE_0__.viewTasks.appendChild(cardWrap);\n    dots.addEventListener('click', () => {\n      if (menu.classList.contains('hide')) {\n        menu.classList.remove('hide');\n        menu.classList.add('show');\n      } else {\n        menu.classList.remove('show');\n        menu.classList.add('hide');\n      }\n    });\n    document.addEventListener('click', e => {\n      if (!menu.contains(e.target) && !dots.contains(e.target)) {\n        menu.classList.remove('show');\n        menu.classList.add('hide');\n      }\n    });\n  }\n}\nfunction generateUniqueId() {\n  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;\n}\nfunction generateBackgroundColor() {\n  const colors = ['#404141', '#a1a1a1', '#c38080', '#b5639c', '#9c70e3', '#467ed1', '#2c9590', '#41a752', '#afb147', '#cb8d58', '#5c3d99', '#ab4f4f', '#4b6584', '#2a9d8f', '#c44536', '#6a994e', '#856084', '#306b34', '#3d348b', '#6b2737'];\n  return colors[Math.floor(Math.random() * 20)];\n}\nfunction cards() {\n  const cards = JSON.parse(localStorage.getItem('cards')) || [];\n  const restoredCards = cards.map(data => new Cards(data.label, data.topic, data.comment, data.id));\n  _view_js__WEBPACK_IMPORTED_MODULE_0__.viewTasks.innerHTML = '';\n  restoredCards.forEach(card => card.createCard());\n}\nfunction createNewCard(tag, topic, comment) {\n  const card = new Cards(tag, topic, comment);\n  const cardsObj = JSON.parse(localStorage.getItem('cards')) || [];\n  cardsObj.push(card);\n  localStorage.setItem('cards', JSON.stringify(cardsObj));\n  cards();\n}\n\n\n//# sourceURL=webpack://TaskManager/./src/modules/tasks/cards.js?");

/***/ }),

/***/ "./src/modules/tasks/change.js":
/*!*************************************!*\
  !*** ./src/modules/tasks/change.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/modules/tasks/cards.js\");\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ \"./src/modules/tasks/add.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ \"./src/modules/tasks/view.js\");\n\n\n\nconst BTN_CHANGE = 'change';\nfunction change() {\n  _view_js__WEBPACK_IMPORTED_MODULE_2__.viewTasks.addEventListener('click', e => {\n    if (e.target.classList.contains('change')) {\n      const cardId = e.target.getAttribute('data-id');\n      const changeButton = document.createElement('button');\n      //const addButton = document.querySelector('.addButton');\n      let changeObj = document;\n      let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];\n      let [inputLabel, inputTopic, inputComment, modalAdd, modalWrapp] = (0,_add__WEBPACK_IMPORTED_MODULE_1__.createModal)(BTN_CHANGE, e);\n      changeObj = cardsObj.find(obj => cardId == obj.id);\n      if (changeObj) {\n        inputLabel.value = changeObj.label;\n        inputTopic.value = changeObj.topic;\n        inputComment.value = changeObj.comment;\n      }\n      changeButton.innerText = 'Change';\n      changeButton.style = `\n            width: 125px;\n            height: 50px;\n            display: block;\n            border: 0;\n            border-radius: 10px;\n            background-color: #dadedf;\n         `;\n      changeButton.classList.add('hover');\n      modalAdd.appendChild(changeButton);\n      changeButton.addEventListener('click', () => {\n        if (inputLabel.value && inputTopic.value && inputComment.value) {\n          cardsObj = cardsObj.map(card => {\n            if (card.id == cardId) {\n              return {\n                label: inputLabel.value,\n                topic: inputTopic.value,\n                comment: inputComment.value,\n                id: card.id\n              };\n            } else return card;\n          });\n          localStorage.setItem('cards', JSON.stringify(cardsObj));\n          modalWrapp.remove();\n          (0,_cards__WEBPACK_IMPORTED_MODULE_0__.cards)();\n          //addButton.style.display = 'block';\n        } else {\n          console.log('Please, fill inputs');\n        }\n      });\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (change);\n\n//# sourceURL=webpack://TaskManager/./src/modules/tasks/change.js?");

/***/ }),

/***/ "./src/modules/tasks/filter.js":
/*!*************************************!*\
  !*** ./src/modules/tasks/filter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filter: () => (/* binding */ filter)\n/* harmony export */ });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/modules/tasks/cards.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/modules/tasks/view.js\");\n\n\nfunction filter() {\n  const menuSearch = document.querySelector('.menu__search'),\n    inputSearch = menuSearch.querySelector('.menu__search-input'),\n    buttonSearch = menuSearch.querySelector('.menu__search-button');\n  buttonSearch.addEventListener('click', () => {\n    let cardsObj = [],\n      restoredCards = [];\n    const req = inputSearch.value;\n    cardsObj = JSON.parse(localStorage.getItem('cards')) || [];\n    cardsObj = cardsObj.filter(card => {\n      if (req && (card.label.toLowerCase().includes(inputSearch.value.toLowerCase()) || card.topic.toLowerCase().includes(inputSearch.value.toLowerCase()))) {\n        return true;\n      } else {\n        return false;\n      }\n    });\n    restoredCards = cardsObj.map(data => new _cards__WEBPACK_IMPORTED_MODULE_0__.Cards(data.label, data.topic, data.comment, data.id));\n    _view_js__WEBPACK_IMPORTED_MODULE_1__.viewTasks.innerHTML = '';\n    restoredCards.forEach(card => card.createCard());\n  });\n}\n\n\n//# sourceURL=webpack://TaskManager/./src/modules/tasks/filter.js?");

/***/ }),

/***/ "./src/modules/tasks/remove.js":
/*!*************************************!*\
  !*** ./src/modules/tasks/remove.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/modules/tasks/cards.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/modules/tasks/view.js\");\n\n\nfunction removeCard() {\n  _view_js__WEBPACK_IMPORTED_MODULE_1__.viewTasks.addEventListener('click', e => {\n    if (e.target.classList.contains('remove')) {\n      const cardId = e.target.getAttribute('data-id');\n      let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];\n      cardsObj = cardsObj.filter(card => card.id !== cardId);\n      localStorage.setItem('cards', JSON.stringify(cardsObj));\n      (0,_cards__WEBPACK_IMPORTED_MODULE_0__.cards)();\n    }\n  });\n}\n\n\n//# sourceURL=webpack://TaskManager/./src/modules/tasks/remove.js?");

/***/ }),

/***/ "./src/modules/tasks/view.js":
/*!***********************************!*\
  !*** ./src/modules/tasks/view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   view: () => (/* binding */ view),\n/* harmony export */   viewTasks: () => (/* binding */ viewTasks)\n/* harmony export */ });\nconst viewTasks = document.createElement('div'),\n  createTask = document.createElement('div');\nfunction view() {\n  const taskPanel = document.querySelector('.ajax-content');\n  createTask.style = `\n      border-bottom: 1px solid #dddddd;\n      width: 100%;\n      height: 150px;\n      min-height: 150px;\n      max-height: 150px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n   `;\n  viewTasks.style = `\n      background-color: #dadedf;\n      width: 100%;\n      flex-grow: 5;\n      display: flex;\n      flex-wrap: wrap;\n      align-content: flex-start;\n      padding: 15px;\n      align-items: stretch;\n      overflow-y: scroll;\n      max-height: 600px;\n   `;\n  taskPanel.appendChild(createTask);\n  taskPanel.appendChild(viewTasks);\n}\n\n\n//# sourceURL=webpack://TaskManager/./src/modules/tasks/view.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTasks: () => (/* binding */ initTasks)\n/* harmony export */ });\n/* harmony import */ var _modules_tasks_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tasks/view */ \"./src/modules/tasks/view.js\");\n/* harmony import */ var _modules_tasks_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks/add */ \"./src/modules/tasks/add.js\");\n/* harmony import */ var _modules_tasks_remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tasks/remove */ \"./src/modules/tasks/remove.js\");\n/* harmony import */ var _modules_tasks_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tasks/cards */ \"./src/modules/tasks/cards.js\");\n/* harmony import */ var _modules_tasks_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tasks/filter */ \"./src/modules/tasks/filter.js\");\n/* harmony import */ var _modules_tasks_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tasks/change */ \"./src/modules/tasks/change.js\");\n\n\n\n\n\n\nfunction initTasks() {\n  (0,_modules_tasks_view__WEBPACK_IMPORTED_MODULE_0__.view)();\n  (0,_modules_tasks_add__WEBPACK_IMPORTED_MODULE_1__.add)();\n  (0,_modules_tasks_cards__WEBPACK_IMPORTED_MODULE_3__.cards)();\n  (0,_modules_tasks_remove__WEBPACK_IMPORTED_MODULE_2__.removeCard)();\n  (0,_modules_tasks_change__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_modules_tasks_filter__WEBPACK_IMPORTED_MODULE_4__.filter)();\n}\n\n//# sourceURL=webpack://TaskManager/./src/tasks.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tasks.js");
/******/ 	
/******/ })()
;