"use strict";
exports.id = "component---src-pages-about-jshead";
exports.ids = ["component---src-pages-about-jshead"];
exports.modules = {

/***/ "./src/pages/about.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/about.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var products = [{
  name: "Samsung TV",
  price: 20000,
  type: "gadget"
}, {
  name: "Sony WH1000XM5",
  price: 12345,
  type: "gadget"
}, {
  name: "Sony VPL-XW5000ES",
  price: 190693,
  type: "gadget"
}];
function AboutPage() {
  let nameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  let priceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  let {
    0: productState,
    1: setProductState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let total = 0;
  for (let p in products) {
    total += products[p].price;
  }
  function addProduct() {
    let newName = nameRef.current.value;
    let newPrice = priceRef.current.value;
    //alert("Add Product " + newName + " " + newPrice)
    products.push({
      name: newName,
      price: newPrice
    });
    console.log(products);
    setProductState([...productState]);
  }
  function deleteProduct(index) {
    productState.splice(index, 1);
    setProductState([...productState]);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Order Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    ref: nameRef
  }), " ", " ", "Price: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "price",
    ref: priceRef
  }), " ", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addProduct
  }, "+ ADD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    border: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Delete"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, products.map((p, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => deleteProduct(index)
  }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, p.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, p.price)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, total))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-jshead.js.map