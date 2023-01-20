"use strict";
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 1703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const colours=["White","Black","Red","Green","Blue"];const nums=(/* unused pure expression or super */ null && ([3,5,6,12,23,4,6,4,7,8,23]));const data=[{name:"Jack",salary:10000},{name:"Jill",salary:15000},{name:"John",salary:10500}];function myReduceFunc(previous,current,index){return previous+current;}function Page1(){let str=[];for(let i=0;i<colours.length;i++){str.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,colours[i]));}function mapFunc(value,index){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,value);}let items=colours.map((value,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,value));// let sum = nums.reduce(myReduceFunc, 0)
// let empList = []
// let salaries = 0
// for (let e = 0; e < data.length; e++) {
//     empList.push(<li>{data[e].name} {data[e].salary}</li>)
//     salaries += data[e].salary
// }
let empList=data.map(data=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,data.name," ",data.salary));let salaries=data.reduce((p,c)=>p+c.salary,0);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Hello"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"How are you?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,empList,"Total salaries = ",salaries));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page1);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-page-1-js.js.map