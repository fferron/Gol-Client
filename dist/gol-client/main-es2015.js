(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/airplane-details/airplane-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/airplane-details/airplane-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <div *ngIf=\"airplane\">\n            <div>\n                <label>ID: </label> {{airplane.id}}\n            </div>\n            <div>\n                <label>Quantidade de Passageiros: </label> {{airplane.numberOfPassengers}}\n            </div>\n            <div>\n                    <label>Modelo: </label> {{airplane.airplaneModel}}\n                </div>\n            <div>\n                <label>Data de Criação: </label> {{airplane.registryCreationDate | date: 'dd/MM/yyyy'}}\n            </div>\n            <hr />\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/airplane-list/airplane-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/airplane-list/airplane-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <table id=\"list\" class=\"table table-responsive\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Modelo</th>\n                    <th>Nº Passageiros</th>\n                    <th>Data de Criação</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let airplane of airplanes | async\">\n                    <td>{{airplane.id}}</td>\n                    <td>{{airplane.airplaneModel}}</td>\n                    <td>{{airplane.numberOfPassengers}}</td>\n                    <td>{{airplane.registryCreationDate | date: 'dd/MM/yyyy'}}</td>\n                    <td>\n                        <button class=\"btn btn-default btn-sm icon-btn\" (click)=\"details(airplane)\"><i\n                                class=\"fa fa-eye\"></i></button>\n                        <a class=\"btn btn-primary btn-sm icon-btn\" (click)=\"edit(airplane)\"><i\n                                class=\"fa fa-pencil\"></i></a>\n                        <button class=\"btn btn-danger btn-sm icon-btn\" (click)=\"deleteAirplane(airplane.id)\"><i\n                                class=\"fa fa-trash\"></i></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <!-- <h2>{{title}}</h2>\n  <hr> -->\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light menu\">\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" (click)=\"openMenu(this)\" routerLink=\"airplanes\" >Listar Aeronaves</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"openMenu(this)\" routerLink=\"add\" >Cadastrar Aeronaves</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"openMenu(this)\" routerLink=\"passengers\" >Listar Passageiros</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"openMenu(this)\" routerLink=\"addPassenger\" >Cadastrar Passageiros</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-airplane/create-airplane.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-airplane/create-airplane.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <div [hidden]=\"submitted\" style=\"width: 400px;\">\n            <form id=\"form\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <input type=\"hidden\" class=\"form-control\" id=\"id\" required [(ngModel)]=\"airplane.id\" name=\"id\">\n                    <input type=\"hidden\" class=\"form-control\" id=\"date\" required\n                        [(ngModel)]=\"airplane.registryCreationDate\" name=\"date\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"model\">Modelo do Avião</label>\n                    <input type=\"text\" class=\"form-control\" id=\"model\" required [(ngModel)]=\"airplane.airplaneModel\"\n                        name=\"model\">\n                    <span class=\"badge badge-warning message\">Campo Obrigtório.</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"passengers\">Quantidade de Passageiros</label>\n                    <input type=\"number\" class=\"form-control\" id=\"numberofpassengers\" required [(ngModel)]=\"airplane.numberOfPassengers\"\n                        name=\"numberofpassengers\">\n                    <span class=\"badge badge-warning message\">Campo Obrigtório.</span>\n                </div>\n\n                <button id=\"createBtn\" type=\"button\" class=\"btn btn-success\">Cadastrar</button>\n                <button id=\"hiddenBtn\" type=\"submit\"></button>\n            </form>\n            <hr />\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"!submitted\">\n    <h3><span class=\"badge badge-success\">Sucesso!</span></h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-passenger/create-passenger.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-passenger/create-passenger.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <div [hidden]=\"submitted\" style=\"width: 400px;\">\n            <form id=\"form\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <input type=\"hidden\" class=\"form-control\" id=\"id\" required [(ngModel)]=\"passenger.id\" name=\"id\">\n                    <input type=\"hidden\" class=\"form-control\" id=\"date\" required\n                        [(ngModel)]=\"passenger.registryCreationDate\" name=\"date\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"model\">Nome do Passageiro</label>\n                    <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"passenger.name\"\n                        name=\"name\">\n                    <span class=\"badge badge-warning message\">Campo Obrigtório.</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"passengers\">Código da Aeronave (ID)</label>\n                    <input type=\"number\" class=\"form-control\" id=\"airplaneId\" required [(ngModel)]=\"passenger.airplaneId\"\n                        name=\"airplaneId\">\n                    <span class=\"badge badge-warning message\">Campo Obrigtório.</span>\n                </div>\n\n                <button id=\"createBtn\" type=\"button\" class=\"btn btn-success\">Cadastrar</button>\n                <button id=\"hiddenBtn\" type=\"submit\"></button>\n            </form>\n            <hr />\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"!submitted\">\n    <h3><span class=\"badge badge-success\">Sucesso!</span></h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/passenger-list/list-passenger.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passenger-list/list-passenger.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <table id=\"list\" class=\"table table-responsive\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Nome</th>\n                    <th>Cód Aeronave (ID)</th>\n                    <th>Data de Criação</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let passenger of passengers | async\">\n                    <td>{{passenger.id}}</td>\n                    <td>{{passenger.name}}</td>\n                    <td>{{passenger.airplaneId}}</td>\n                    <td>{{passenger.registryCreationDate | date: 'dd/MM/yyyy'}}</td>\n                    <td>\n                        <a class=\"btn btn-primary btn-sm icon-btn\" (click)=\"edit(passenger)\"><i\n                                class=\"fa fa-pencil\"></i></a>\n                        <button class=\"btn btn-danger btn-sm icon-btn\" (click)=\"deleteAirplane(passenger.id)\"><i\n                                class=\"fa fa-trash\"></i></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/airplane-details/airplane-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/airplane-details/airplane-details.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FpcnBsYW5lLWRldGFpbHMvYWlycGxhbmUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/airplane-details/airplane-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/airplane-details/airplane-details.component.ts ***!
  \****************************************************************/
/*! exports provided: AirplaneDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirplaneDetailsComponent", function() { return AirplaneDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AirplaneDetailsComponent = class AirplaneDetailsComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(params => {
            this.airplane = JSON.parse(params["airplane"]);
        });
        console.log(this.airplane);
    }
    ngOnInit() {
    }
};
AirplaneDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AirplaneDetailsComponent.prototype, "airplane", void 0);
AirplaneDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-airplane-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./airplane-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/airplane-details/airplane-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./airplane-details.component.css */ "./src/app/airplane-details/airplane-details.component.css")).default]
    })
], AirplaneDetailsComponent);



/***/ }),

/***/ "./src/app/airplane-list/airplane-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/airplane-list/airplane-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-btn {\n    margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWlycGxhbmUtbGlzdC9haXJwbGFuZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9haXJwbGFuZS1saXN0L2FpcnBsYW5lLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/airplane-list/airplane-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/airplane-list/airplane-list.component.ts ***!
  \**********************************************************/
/*! exports provided: AirplaneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirplaneListComponent", function() { return AirplaneListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _airplane_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../airplane.service */ "./src/app/airplane.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AirplaneListComponent = class AirplaneListComponent {
    constructor(airplaneService, router) {
        this.airplaneService = airplaneService;
        this.router = router;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.airplanes = this.airplaneService.getAirplaneList();
    }
    deleteAirplane(id) {
        this.airplaneService.deleteAirplane(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    details(airplane) {
        let navigationExtras = {
            queryParams: {
                "airplane": JSON.stringify(airplane)
            }
        };
        this.router.navigate(["airplane"], navigationExtras);
    }
    edit(airplane) {
        let navigationExtras = {
            queryParams: {
                "airplane": JSON.stringify(airplane)
            }
        };
        this.router.navigate(["add"], navigationExtras);
    }
};
AirplaneListComponent.ctorParameters = () => [
    { type: _airplane_service__WEBPACK_IMPORTED_MODULE_2__["AirplaneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AirplaneListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-airplane-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./airplane-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/airplane-list/airplane-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./airplane-list.component.css */ "./src/app/airplane-list/airplane-list.component.css")).default]
    })
], AirplaneListComponent);



/***/ }),

/***/ "./src/app/airplane.service.ts":
/*!*************************************!*\
  !*** ./src/app/airplane.service.ts ***!
  \*************************************/
/*! exports provided: AirplaneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirplaneService", function() { return AirplaneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AirplaneService = class AirplaneService {
    constructor(http) {
        this.http = http;
        this.urlApi = 'http://localhost:5000/api/Airplanes/';
    }
    getAirplaneList() {
        return this.http.get(`${this.urlApi}` + `GetAllAirplane`);
    }
    getAirplane(id) {
        return this.http.get(`${this.urlApi}/${id}`);
    }
    createAirplane(airplane) {
        return this.http.post(`${this.urlApi}` + `InsertAirplane`, airplane);
    }
    updateAirplane(value) {
        return this.http.put(`${this.urlApi}` + `UpdatePassenger`, value);
    }
    deleteAirplane(id) {
        return this.http.delete(`${this.urlApi}${id}`); //{ responseType: 'text' }
    }
};
AirplaneService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AirplaneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AirplaneService);



/***/ }),

/***/ "./src/app/airplane.ts":
/*!*****************************!*\
  !*** ./src/app/airplane.ts ***!
  \*****************************/
/*! exports provided: Airplane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airplane", function() { return Airplane; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Airplane {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _airplane_list_airplane_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./airplane-list/airplane-list.component */ "./src/app/airplane-list/airplane-list.component.ts");
/* harmony import */ var _create_airplane_create_airplane_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-airplane/create-airplane.component */ "./src/app/create-airplane/create-airplane.component.ts");
/* harmony import */ var _airplane_details_airplane_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./airplane-details/airplane-details.component */ "./src/app/airplane-details/airplane-details.component.ts");
/* harmony import */ var _passenger_list_list_passenger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passenger-list/list-passenger.component */ "./src/app/passenger-list/list-passenger.component.ts");
/* harmony import */ var _create_passenger_create_passenger_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-passenger/create-passenger.component */ "./src/app/create-passenger/create-passenger.component.ts");








const routes = [
    { path: '', redirectTo: 'Airplane', pathMatch: 'full' },
    { path: 'airplanes', component: _airplane_list_airplane_list_component__WEBPACK_IMPORTED_MODULE_3__["AirplaneListComponent"] },
    { path: 'add', component: _create_airplane_create_airplane_component__WEBPACK_IMPORTED_MODULE_4__["CreateAirplaneComponent"] },
    { path: 'airplane', component: _airplane_details_airplane_details_component__WEBPACK_IMPORTED_MODULE_5__["AirplaneDetailsComponent"] },
    { path: 'passengers', component: _passenger_list_list_passenger_component__WEBPACK_IMPORTED_MODULE_6__["ListPassengerComponent"] },
    { path: 'addPassenger', component: _create_passenger_create_passenger_component__WEBPACK_IMPORTED_MODULE_7__["CreatePassengerComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    ngOnInit() {
    }
    openMenu(element) {
        $(".nav-item").removeClass('active');
        $(element).addClass("active");
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_airplane_create_airplane_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-airplane/create-airplane.component */ "./src/app/create-airplane/create-airplane.component.ts");
/* harmony import */ var _airplane_details_airplane_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./airplane-details/airplane-details.component */ "./src/app/airplane-details/airplane-details.component.ts");
/* harmony import */ var _airplane_list_airplane_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./airplane-list/airplane-list.component */ "./src/app/airplane-list/airplane-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _passenger_list_list_passenger_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./passenger-list/list-passenger.component */ "./src/app/passenger-list/list-passenger.component.ts");
/* harmony import */ var _create_passenger_create_passenger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-passenger/create-passenger.component */ "./src/app/create-passenger/create-passenger.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _create_airplane_create_airplane_component__WEBPACK_IMPORTED_MODULE_6__["CreateAirplaneComponent"],
            _airplane_details_airplane_details_component__WEBPACK_IMPORTED_MODULE_7__["AirplaneDetailsComponent"],
            _airplane_list_airplane_list_component__WEBPACK_IMPORTED_MODULE_8__["AirplaneListComponent"],
            _passenger_list_list_passenger_component__WEBPACK_IMPORTED_MODULE_10__["ListPassengerComponent"],
            _create_passenger_create_passenger_component__WEBPACK_IMPORTED_MODULE_11__["CreatePassengerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create-airplane/create-airplane.component.css":
/*!***************************************************************!*\
  !*** ./src/app/create-airplane/create-airplane.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#hiddenBtn {\n    display: none;\n}\n\n.message {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFpcnBsYW5lL2NyZWF0ZS1haXJwbGFuZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWlycGxhbmUvY3JlYXRlLWFpcnBsYW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGlkZGVuQnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/create-airplane/create-airplane.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-airplane/create-airplane.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateAirplaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAirplaneComponent", function() { return CreateAirplaneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _airplane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../airplane */ "./src/app/airplane.ts");
/* harmony import */ var _airplane_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../airplane.service */ "./src/app/airplane.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateAirplaneComponent = class CreateAirplaneComponent {
    constructor(airplaneService, router, activatedRoute) {
        this.airplaneService = airplaneService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.airplane = new _airplane__WEBPACK_IMPORTED_MODULE_2__["Airplane"]();
        this.submitted = false;
        this.activatedRoute.queryParams.subscribe(params => {
            var param = params["airplane"];
            if (param != undefined && param != "") {
                this.airplane = JSON.parse(param);
            }
        });
    }
    ngOnInit() {
        $(function () {
            $("#createBtn").click(function () {
                if ($("#model").val() == '' || $("#numberofpassengers").val() == '') {
                    $(".message").removeClass("message");
                }
                else {
                    $("#hiddenBtn").click();
                }
            });
        });
    }
    newAirplane() {
        this.submitted = false;
        this.airplane = new _airplane__WEBPACK_IMPORTED_MODULE_2__["Airplane"]();
    }
    save() {
        if (this.airplane.id == 0 || this.airplane.id == undefined) {
            this.airplaneService.createAirplane(this.airplane)
                .subscribe(data => console.log(data), error => console.log(error));
        }
        else {
            this.airplaneService.updateAirplane(this.airplane)
                .subscribe(data => console.log(data), error => console.log(error));
        }
        this.submitted = true;
        this.airplane = new _airplane__WEBPACK_IMPORTED_MODULE_2__["Airplane"]();
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
};
CreateAirplaneComponent.ctorParameters = () => [
    { type: _airplane_service__WEBPACK_IMPORTED_MODULE_3__["AirplaneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CreateAirplaneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-airplane',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-airplane.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-airplane/create-airplane.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-airplane.component.css */ "./src/app/create-airplane/create-airplane.component.css")).default]
    })
], CreateAirplaneComponent);



/***/ }),

/***/ "./src/app/create-passenger/create-passenger.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/create-passenger/create-passenger.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#hiddenBtn {\r\n    display: none;\r\n}\r\n\r\n.message {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBhc3Nlbmdlci9jcmVhdGUtcGFzc2VuZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wYXNzZW5nZXIvY3JlYXRlLXBhc3Nlbmdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hpZGRlbkJ0biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/create-passenger/create-passenger.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-passenger/create-passenger.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatePassengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePassengerComponent", function() { return CreatePassengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _passanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../passanger */ "./src/app/passanger.ts");
/* harmony import */ var _passenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passenger.service */ "./src/app/passenger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreatePassengerComponent = class CreatePassengerComponent {
    constructor(passengerService, router, activatedRoute) {
        this.passengerService = passengerService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.passenger = new _passanger__WEBPACK_IMPORTED_MODULE_2__["Passenger"]();
        this.submitted = false;
        this.activatedRoute.queryParams.subscribe(params => {
            var param = params["passenger"];
            if (param != undefined && param != "") {
                this.passenger = JSON.parse(param);
            }
        });
    }
    ngOnInit() {
        $(function () {
            $("#createBtn").click(function () {
                if ($("#name").val() == '' || $("#airplaneId").val() == '') {
                    $(".message").removeClass("message");
                }
                else {
                    $("#hiddenBtn").click();
                }
            });
        });
    }
    newPassenger() {
        this.submitted = false;
        this.passenger = new _passanger__WEBPACK_IMPORTED_MODULE_2__["Passenger"]();
    }
    save() {
        if (this.passenger.id == 0 || this.passenger.id == undefined) {
            this.passengerService.createPassenger(this.passenger)
                .subscribe(data => console.log(data), error => console.log(error));
        }
        else {
            this.passengerService.updatePassenger(this.passenger)
                .subscribe(data => console.log(data), error => console.log(error));
        }
        this.submitted = true;
        this.passenger = new _passanger__WEBPACK_IMPORTED_MODULE_2__["Passenger"]();
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
};
CreatePassengerComponent.ctorParameters = () => [
    { type: _passenger_service__WEBPACK_IMPORTED_MODULE_3__["PassengerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CreatePassengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-passenger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-passenger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-passenger/create-passenger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-passenger.component.css */ "./src/app/create-passenger/create-passenger.component.css")).default]
    })
], CreatePassengerComponent);



/***/ }),

/***/ "./src/app/passanger.ts":
/*!******************************!*\
  !*** ./src/app/passanger.ts ***!
  \******************************/
/*! exports provided: Passenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Passenger", function() { return Passenger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Passenger {
}


/***/ }),

/***/ "./src/app/passenger-list/list-passenger.component.css":
/*!*************************************************************!*\
  !*** ./src/app/passenger-list/list-passenger.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-btn {\r\n    margin-right: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc2VuZ2VyLWxpc3QvbGlzdC1wYXNzZW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Bhc3Nlbmdlci1saXN0L2xpc3QtcGFzc2VuZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/passenger-list/list-passenger.component.ts":
/*!************************************************************!*\
  !*** ./src/app/passenger-list/list-passenger.component.ts ***!
  \************************************************************/
/*! exports provided: ListPassengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPassengerComponent", function() { return ListPassengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _passenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../passenger.service */ "./src/app/passenger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListPassengerComponent = class ListPassengerComponent {
    constructor(passengerService, router) {
        this.passengerService = passengerService;
        this.router = router;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.passengers = this.passengerService.getPassengerList();
    }
    details(passenger) {
        let navigationExtras = {
            queryParams: {
                "passenger": JSON.stringify(passenger)
            }
        };
        this.router.navigate(["passenger"], navigationExtras);
    }
    edit(passenger) {
        let navigationExtras = {
            queryParams: {
                "passenger": JSON.stringify(passenger)
            }
        };
        this.router.navigate(["add"], navigationExtras);
    }
};
ListPassengerComponent.ctorParameters = () => [
    { type: _passenger_service__WEBPACK_IMPORTED_MODULE_2__["PassengerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListPassengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-passenger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-passenger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/passenger-list/list-passenger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-passenger.component.css */ "./src/app/passenger-list/list-passenger.component.css")).default]
    })
], ListPassengerComponent);



/***/ }),

/***/ "./src/app/passenger.service.ts":
/*!**************************************!*\
  !*** ./src/app/passenger.service.ts ***!
  \**************************************/
/*! exports provided: PassengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassengerService", function() { return PassengerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PassengerService = class PassengerService {
    constructor(http) {
        this.http = http;
        this.urlApi = 'http://localhost:5000/api/Passengers/';
    }
    getPassengerList() {
        return this.http.get(`${this.urlApi}` + `GetAllPassenger`);
    }
    getPassenger(id) {
        return this.http.get(`${this.urlApi}/${id}`);
    }
    createPassenger(passenger) {
        return this.http.post(`${this.urlApi}` + `InsertPassenger`, passenger);
    }
    updatePassenger(value) {
        return this.http.put(`${this.urlApi}` + `UpdatePassenger`, value);
    }
};
PassengerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PassengerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PassengerService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Temp\Gol-Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map