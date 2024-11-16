/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("window.addEventListener('load', () => {\n  const calendar = document.querySelector('.calendar'),\n    tasks = document.querySelector('.tasks'),\n    ajaxContent = document.querySelector('.ajax-content');\n  calendar.addEventListener('click', () => {\n    loadContent('../calendar/calendar.html', ajaxContent, '../calendar/calendar.bundle.js');\n  });\n  tasks.addEventListener('click', () => {\n    loadContent('../tasks/tasks.html', ajaxContent, '../tasks/tasks.bundle.js');\n  });\n});\n\n// Функция загрузки контента и вызова `initTasks`\nfunction loadContent(url, ajaxContent, scriptFile) {\n  fetch(url).then(response => response.text()).then(html => {\n    ajaxContent.innerHTML = html;\n    console.log(window.location.pathname);\n    const allScripts = document.querySelectorAll(`script[src=\"${scriptFile}\"]`);\n    if (allScripts) {\n      for (const script of allScripts) {\n        script.remove();\n      }\n    }\n    const script = document.createElement('script');\n    script.src = `${scriptFile}`;\n    script.defer = true;\n    script.onload = () => {\n      console.log(`${scriptFile} успешно загружен и выполнен`);\n    };\n    script.onerror = error => {\n      console.error('Ошибка загрузки скрипта', error);\n    };\n    document.body.appendChild(script);\n  }).catch(error => console.error(\"Error of download page: \", error));\n}\n\n//# sourceURL=webpack://TaskManager/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;