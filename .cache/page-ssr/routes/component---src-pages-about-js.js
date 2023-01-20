"use strict";
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 5465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var products=[{name:"Samsung TV",price:20000,type:"gadget"},{name:"Sony WH1000XM5",price:12345,type:"gadget"},{name:"Sony VPL-XW5000ES",price:190693,type:"gadget"}];function AboutPage(){let nameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();let priceRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();let{0:productState,1:setProductState}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);let total=0;for(let p in products){total+=products[p].price;}function addProduct(){let newName=nameRef.current.value;let newPrice=priceRef.current.value;//alert("Add Product " + newName + " " + newPrice)
products.push({name:newName,price:newPrice});console.log(products);setProductState([...productState]);}function deleteProduct(index){productState.splice(index,1);setProductState([...productState]);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Order Summary"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Name: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"text",id:"name",ref:nameRef})," "," ","Price: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"text",id:"price",ref:priceRef})," "," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:addProduct},"+ ADD")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{border:"1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",null,"Name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",null,"Price"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",null,"Delete"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,products.map((p,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>deleteProduct(index)},"Delete")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",null,p.name),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",null,p.price)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",null,"Total"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",null,total))))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map