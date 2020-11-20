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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["rx-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rx-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rx-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rx-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n        max-height: 100vh;\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rx-root',
                template: `
    <rx-header></rx-header>
    <rx-content></rx-content>
    <rx-footer></rx-footer>
  `,
                styles: [
                    `
      :host {
        max-height: 100vh;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
    `,
                ],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_hero_badge_hero_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hero-badge/hero-badge.component */ "./src/app/components/hero-badge/hero-badge.component.ts");
/* harmony import */ var _components_hero_table_hero_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hero-table/hero-table.component */ "./src/app/components/hero-table/hero-table.component.ts");
/* harmony import */ var _components_hero_details_hero_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hero-details/hero-details.component */ "./src/app/components/hero-details/hero-details.component.ts");













const routes = [
    {
        path: '',
        component: _components_hero_table_hero_table_component__WEBPACK_IMPORTED_MODULE_9__["HeroTableComponent"],
        pathMatch: 'full',
    },
    {
        path: 'hero/:heroId',
        component: _components_hero_details_hero_details_component__WEBPACK_IMPORTED_MODULE_10__["HeroDetailsComponent"],
    },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
        _components_hero_table_hero_table_component__WEBPACK_IMPORTED_MODULE_9__["HeroTableComponent"],
        _components_hero_badge_hero_badge_component__WEBPACK_IMPORTED_MODULE_8__["HeroBadgeComponent"],
        _components_hero_details_hero_details_component__WEBPACK_IMPORTED_MODULE_10__["HeroDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                    _components_hero_table_hero_table_component__WEBPACK_IMPORTED_MODULE_9__["HeroTableComponent"],
                    _components_hero_badge_hero_badge_component__WEBPACK_IMPORTED_MODULE_8__["HeroBadgeComponent"],
                    _components_hero_details_hero_details_component__WEBPACK_IMPORTED_MODULE_10__["HeroDetailsComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ContentComponent {
    constructor() {
    }
    ngOnInit() { }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["rx-content"]], decls: 1, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n        flex-grow: 1;\n        max-height: calc(100vh - 200px);\n        overflow: auto;\n        padding: 40px;\n        background-color: var(--backcolor2);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rx-content',
                template: ` <router-outlet></router-outlet> `,
                styles: [
                    `
      :host {
        flex-grow: 1;
        max-height: calc(100vh - 200px);
        overflow: auto;
        padding: 40px;
        background-color: var(--backcolor2);
      }
    `,
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["rx-footer"]], decls: 8, vars: 0, consts: [["href", "https://github.com/aaronfrost/reactive-angular-workshop", "target", "_blank"], [1, "spacer"], ["href", "https://twitter.com/aaronfrost", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reactive Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "@aaronfrost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n        height: 100px;\n        background: var(--header-dark);\n        color: whitesmoke;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        font-size: 25px;\n        font-weight: 100;\n      }\n      .spacer[_ngcontent-%COMP%] {\n        margin: 0px 10px;\n      }\n      a[_ngcontent-%COMP%]:visited {\n        color: var(--header);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rx-footer',
                template: `
    <span
      ><a
        href="https://github.com/aaronfrost/reactive-angular-workshop"
        target="_blank"
        >Reactive Angular</a
      ></span
    >
    <span class="spacer"> - </span>
    <span
      ><a href="https://twitter.com/aaronfrost" target="_blank"
        >@aaronfrost</a
      ></span
    >
  `,
                styles: [
                    `
      :host {
        height: 100px;
        background: var(--header-dark);
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: 100;
      }
      .spacer {
        margin: 0px 10px;
      }
      a:visited {
        color: var(--header);
      }
    `,
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() {
        this.title = 'reactive-angular';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["rx-header"]], decls: 2, vars: 1, consts: [[1, "bungee"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to ", ctx.title, "!");
    } }, styles: ["[_nghost-%COMP%] {\n        height: 100px;\n        background: var(--header);\n        text-align: center;\n      }\n      h1[_ngcontent-%COMP%] {\n        font-size: 33px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rx-header',
                template: ` <h1 class="bungee">Welcome to {{ title }}!</h1> `,
                styles: [
                    `
      :host {
        height: 100px;
        background: var(--header);
        text-align: center;
      }
      h1 {
        font-size: 33px;
      }
    `,
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/hero-badge/hero-badge.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/hero-badge/hero-badge.component.ts ***!
  \***************************************************************/
/*! exports provided: Layouts, Sizes, HeroBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layouts", function() { return Layouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sizes", function() { return Sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBadgeComponent", function() { return HeroBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function HeroBadgeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function HeroBadgeComponent_ng_container_0_Template_img_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.loaded = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.hero.thumbnail.path + "/" + ctx_r0.layout + "_" + ctx_r0.size + "." + ctx_r0.hero.thumbnail.extension, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hero.name);
} }
const Layouts = {
    portrait: 'portrait',
    standard: 'standard',
    landscape: 'landscape',
};
const Sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
};
class HeroBadgeComponent {
    constructor() {
        this.hero = null;
        this.layout = Layouts.standard;
        this.size = Sizes.medium;
        this.loaded = false;
    }
    ngOnInit() { }
}
HeroBadgeComponent.ɵfac = function HeroBadgeComponent_Factory(t) { return new (t || HeroBadgeComponent)(); };
HeroBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroBadgeComponent, selectors: [["rx-hero-badge"]], hostVars: 2, hostBindings: function HeroBadgeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loaded", ctx.loaded);
    } }, inputs: { hero: "hero", layout: "layout", size: "size" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "src", "load"], [1, "name"]], template: function HeroBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroBadgeComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        height: 140px;\n        width: 100px;\n        transition: opacity 250ms linear, transform 100ms linear;\n        transform: scale(1);\n      }\n      [_nghost-%COMP%]:not(.loaded) {\n        opacity: 0;\n      }\n      .loaded[_nghost-%COMP%] {\n        opacity: 1;\n      }\n      [_nghost-%COMP%]:hover {\n        transform: scale(1.05);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rx-hero-badge',
                template: `
    <ng-container *ngIf="hero">
      <div>
        <img
          [src]="
            hero.thumbnail.path +
            '/' +
            layout +
            '_' +
            size +
            '.' +
            hero.thumbnail.extension
          "
          (load)="loaded = true"
        />
        <div class="name">{{ hero.name }}</div>
      </div>
    </ng-container>
  `,
                styles: [
                    `
      :host {
        display: flex;
        flex-direction: column;
        height: 140px;
        width: 100px;
        transition: opacity 250ms linear, transform 100ms linear;
        transform: scale(1);
      }
      :host:not(.loaded) {
        opacity: 0;
      }
      :host.loaded {
        opacity: 1;
      }
      :host:hover {
        transform: scale(1.05);
      }
    `,
                ],
                host: {
                    '[class.loaded]': 'loaded',
                },
            }]
    }], function () { return []; }, { hero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/hero-details/hero-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/hero-details/hero-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeroDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailsComponent", function() { return HeroDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeroDetailsComponent {
    constructor() {
    }
    ngOnInit() { }
}
HeroDetailsComponent.ɵfac = function HeroDetailsComponent_Factory(t) { return new (t || HeroDetailsComponent)(); };
HeroDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroDetailsComponent, selectors: [["rx-hero-details"]], decls: 2, vars: 0, template: function HeroDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hero-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rx-hero-details',
                template: ` <p>hero-details works!</p> `,
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/hero-table/hero-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/hero-table/hero-table.component.ts ***!
  \***************************************************************/
/*! exports provided: HeroTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroTableComponent", function() { return HeroTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/hero.service */ "./src/app/services/hero.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hero_badge_hero_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hero-badge/hero-badge.component */ "./src/app/components/hero-badge/hero-badge.component.ts");





function HeroTableComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const limit_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", limit_r5, " ");
} }
function HeroTableComponent_rx_hero_badge_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rx-hero-badge", 13);
} if (rf & 2) {
    const hero_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hero", hero_r6);
} }
class HeroTableComponent {
    constructor(hero) {
        this.hero = hero;
        hero.heroes$.subscribe((heroes) => {
            this.heroes = heroes;
        });
    }
    ngOnInit() { }
}
HeroTableComponent.ɵfac = function HeroTableComponent_Factory(t) { return new (t || HeroTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"])); };
HeroTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroTableComponent, selectors: [["rx-hero-table"]], decls: 23, vars: 2, consts: [[1, "tool-bar"], [1, "search-tool"], ["for", "herosearch"], ["name", "herosearch"], [1, "page-tool"], [1, "buttons"], [1, "prev"], [1, "next"], [1, "result-tool"], [4, "ngFor", "ngForOf"], [1, "total-tool"], [1, "table-content"], [3, "hero", 4, "ngFor", "ngForOf"], [3, "hero"]], template: function HeroTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page ? of ? : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Show Results: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeroTableComponent_button_17_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total Results: ???");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeroTableComponent_rx_hero_badge_22_Template, 1, 1, "rx-hero-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hero.limits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _hero_badge_hero_badge_component__WEBPACK_IMPORTED_MODULE_3__["HeroBadgeComponent"]], styles: [".tool-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n\nlabel[for=herosearch][_ngcontent-%COMP%] {\n  line-height: 20px;\n  vertical-align: center;\n}\n\ninput[name=herosearch][_ngcontent-%COMP%] {\n  background-color: var(--backcolor2);\n  border: 2px solid gray;\n  border-radius: 5px;\n  height: 100%;\n  font-size: 18px;\n  padding: 0 5px;\n  margin-left: 5px;\n}\n\ninput[name=herosearch][_ngcontent-%COMP%]:focus {\n  background-color: var(--backcolor2);\n  border: 2px solid gray;\n  border-radius: 5px;\n  height: 100%;\n  box-shadow: 0 0 5px rgba(20, 20, 255, 0.8);\n  filter: brightness(115%);\n  outline: none;\n}\n\n.tool-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n\n.tool-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.tool-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n  background: #eee;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 20px;\n  border-top-left-radius: 20px;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 5px rgba(20, 20, 255, 0.8);\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  filter: brightness(85%);\n}\n\n.table-content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.table-content[_ngcontent-%COMP%]   rx-hero-badge[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.page-tool[_ngcontent-%COMP%], .result-tool[_ngcontent-%COMP%], .total-tool[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvLXRhYmxlL0M6XFxkZXZcXGdpdFxcaGVjbWVjXFxuZzEwLXBsYXlncm91bmRcXHByb2plY3RzXFxhYXJvbkZyb3N0SGVyb0FwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVyby10YWJsZVxcaGVyby10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZXJvLXRhYmxlL2hlcm8tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLGNBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURJRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRElJO0VBQ0UsK0JBQUE7RUFDQSw0QkFBQTtBQ0ZOOztBRElJO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtBQ0ZOOztBRElJO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0FDRk47O0FES0k7RUFDRSx1QkFBQTtBQ0hOOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURPRTtFQUNFLFlBQUE7QUNMSjs7QURTQTs7O0VBR0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZXJvLXRhYmxlL2hlcm8tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmxhYmVsW2Zvcj1cImhlcm9zZWFyY2hcIl0ge1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W25hbWU9XCJoZXJvc2VhcmNoXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrY29sb3IyKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2NvbG9yMik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDIwLCAyMCwgMjU1LCAwLjgpO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50b29sLWJhciA+ICoge1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyMCwgMjAsIDI1NSwgMC44KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgcngtaGVyby1iYWRnZSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS10b29sLFxyXG4ucmVzdWx0LXRvb2wsXHJcbi50b3RhbC10b29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiIsIi50b29sLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5sYWJlbFtmb3I9aGVyb3NlYXJjaF0ge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXRbbmFtZT1oZXJvc2VhcmNoXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tjb2xvcjIpO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmlucHV0W25hbWU9aGVyb3NlYXJjaF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrY29sb3IyKTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyMCwgMjAsIDI1NSwgMC44KTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udG9vbC1iYXIgPiAqIHtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi50b29sLWJhciA+ICo6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi50b29sLWJhciA+ICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmJ1dHRvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbn1cbi5idXR0b25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuLmJ1dHRvbnMgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDIwLCAyMCwgMjU1LCAwLjgpO1xufVxuLmJ1dHRvbnMgYnV0dG9uOmRpc2FibGVkIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XG59XG5cbi50YWJsZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udGFibGUtY29udGVudCByeC1oZXJvLWJhZGdlIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ucGFnZS10b29sLFxuLnJlc3VsdC10b29sLFxuLnRvdGFsLXRvb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rx-hero-table',
                template: `
    <div class="tool-bar">
      <span class="search-tool">
        <label for="herosearch">Search: </label>
        <input name="herosearch" />
      </span>
      <span class="page-tool">
        <label>Page ? of ? : </label>
        <span class="buttons">
          <button class="prev">Prev</button>
          <button class="next">Next</button>
        </span>
      </span>
      <span class="result-tool">
        <label>Show Results: </label>
        <span class="buttons">
          <button *ngFor="let limit of hero.limits">
            {{ limit }}
          </button>
        </span>
      </span>
      <span class="total-tool">
        <label>Total Results: ???</label>
      </span>
    </div>
    <div class="table-content">
      <rx-hero-badge *ngFor="let hero of heroes" [hero]="hero"></rx-hero-badge>
    </div>
  `,
                styleUrls: ['./hero-table.component.scss'],
            }]
    }], function () { return [{ type: _services_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/hero.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/hero.service.ts ***!
  \******************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





// The URL to the Marvel API
const HERO_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MARVEL_API.URL}/v1/public/characters`;
// Our Limits for Search
const LIMIT_LOW = 10;
const LIMIT_MID = 25;
const LIMIT_HIGH = 100;
const LIMITS = [LIMIT_LOW, LIMIT_MID, LIMIT_HIGH];
class HeroService {
    constructor(http) {
        this.http = http;
        this.limits = LIMITS;
        this.heroes$ = this.http
            .get(HERO_API, {
            params: {
                apikey: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MARVEL_API.PUBLIC_KEY,
                limit: `${LIMIT_LOW}`,
                // nameStartsWith: 'iron', // once we have search
                offset: `${0}`,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.data.results));
    }
}
HeroService.ɵfac = function HeroService_Factory(t) { return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HeroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeroService, factory: HeroService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false,
    MARVEL_API: {
        URL: 'https://gateway.marvel.com:443',
        PUBLIC_KEY: 'fe4ae321f0862caaf2100e9ed46de5f2',
        PRIVATE_KEY: 'bbb90d36b8a8c389fede96b0e7e582573c1e153b',
    },
};
if (environment.MARVEL_API.PUBLIC_KEY === 'INSERT YOUR KEY FIRST') {
    /**
     * To get access to the marvel API, you need to go to their site and sign up for an account.
     * Go Here: https://developer.marvel.com/
     *
     * Once you have done that, in their portal, you will need to add http://localhost to their
     * whitelisted domains. If you don't do this, it will fail for you.
     */
    document.write('INSERT YOUR KEY FIRST');
    throw new Error('You must setup a public and private API key first.');
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\git\hecmec\ng10-playground\projects\aaronFrostHeroApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map