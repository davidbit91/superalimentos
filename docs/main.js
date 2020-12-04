(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kira\Downloads\clase\superalimentos\superalimentos\src\main.ts */"zUnb");


/***/ }),

/***/ "5/Oj":
/*!**************************************************!*\
  !*** ./src/app/food-list/food-list.component.ts ***!
  \**************************************************/
/*! exports provided: FoodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListComponent", function() { return FoodListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_foods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/foods */ "y7gE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-pipe.pipe */ "C2Ac");










function FoodListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FoodListComponent_div_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.agregarComida(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Calories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroup);
} }
function FoodListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodListComponent_div_10_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const food_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.agregarMenu(food_r6.name, food_r6.calories); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", food_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](food_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Calories: ", food_r6.calories, "");
} }
function FoodListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r9);
} }
class FoodListComponent {
    constructor(fb) {
        this.fb = fb;
        this.listFoods = _shared_data_foods__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.mostrar = false;
    }
    ngOnInit() {
        this.maxCalories = 0;
        this.menu = [];
        this.formGroup = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            calories: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    agregarMenu(food, calories) {
        this.menu.push(food);
        this.maxCalories += calories;
    }
    agregarComida() {
        this.listFoods.push({
            name: this.formGroup.get('name').value,
            calories: this.formGroup.get('calories').value,
            img: this.formGroup.get('img').value
        });
        this.formGroup.reset();
    }
    add() {
        this.mostrar = !this.mostrar;
    }
}
FoodListComponent.ɵfac = function FoodListComponent_Factory(t) { return new (t || FoodListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FoodListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodListComponent, selectors: [["app-food-list"]], decls: 18, vars: 7, consts: [[1, "search"], ["matInput", ""], ["search", ""], ["mat-raised-button", "", 1, "show", 3, "click"], ["class", "add", 4, "ngIf"], [1, "container"], ["class", "foods", 4, "ngFor", "ngForOf"], [1, "menu"], [4, "ngFor", "ngForOf"], [1, "add"], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "calories"], ["type", "file", "formControlName", "img"], ["color", "primary", "mat-raised-button", "", "color", "accent", "type", "submit"], [1, "foods"], ["alt", "", 3, "src"], [1, "text"], ["matInput", "", "mat-raised-button", "", "color", "accent", "type", "text", 3, "click"]], template: function FoodListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodListComponent_Template_button_click_6_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A\u00F1adir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FoodListComponent_div_8_Template, 13, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FoodListComponent_div_10_Template, 10, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "searchPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Daily Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FoodListComponent_div_17_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 4, ctx.listFoods, _r0.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Calories: ", ctx.maxCalories, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], pipes: [_search_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipePipe"]], styles: [".search[_ngcontent-%COMP%], .show[_ngcontent-%COMP%], .add[_ngcontent-%COMP%] {\n  margin-left: 129px;\n}\n\n.show[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n}\n\nform[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-top: 10px;\n}\n\n.add[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  align-items: center;\n}\n\n.foods[_ngcontent-%COMP%] {\n  width: 500px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  background-color: #f2df94;\n  font-family: Cabin;\n}\n\n.foods[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n}\n\n.foods[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-left: 15px;\n}\n\n.foods[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 40px;\n  margin-left: 50px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 20%;\n  position: absolute;\n  top: 100px;\n  right: 30px;\n  width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f2df94;\n  font-size: 16px;\n}\n\n.menu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 27px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC1saXN0L2Zvb2QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFFO0VBQ0UsWUFBQTtBQUVKOztBQUFJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRU47O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvZm9vZC1saXN0L2Zvb2QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gsIC5zaG93LCAuYWRke1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjlweDtcclxufVxyXG4uc2hvd3tcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbmZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOjUwMHB4O1xyXG5cclxuXHJcbiAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6NDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvb2Rze1xyXG4gIHdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmRmOTQ7XHJcbiAgZm9udC1mYW1pbHk6IHVucXVvdGUoXCJDYWJpblwiKTtcclxuXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDoyMCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjEwMHB4O1xyXG4gIHJpZ2h0OjMwcHg7XHJcbiAgd2lkdGg6NTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZjk0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgaDJ7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-food-list',
                templateUrl: './food-list.component.html',
                styleUrls: ['./food-list.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "C2Ac":
/*!*************************************!*\
  !*** ./src/app/search-pipe.pipe.ts ***!
  \*************************************/
/*! exports provided: SearchPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipePipe", function() { return SearchPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPipePipe {
    transform(array, name) {
        return array.filter(i => {
            if (i.name.toLowerCase().includes(name.toLowerCase())) {
                return i;
            }
        });
    }
}
SearchPipePipe.ɵfac = function SearchPipePipe_Factory(t) { return new (t || SearchPipePipe)(); };
SearchPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchPipe", type: SearchPipePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchPipe',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-list/food-list.component */ "5/Oj");



class AppComponent {
    constructor() {
        this.title = 'superalimentos';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-food-list");
    } }, directives: [_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_1__["FoodListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/material/material.module */ "jAig");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-list/food-list.component */ "5/Oj");
/* harmony import */ var _search_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-pipe.pipe */ "C2Ac");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_4__["FoodListComponent"],
        _search_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchPipePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_4__["FoodListComponent"],
                    _search_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchPipePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jAig":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");











class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
                ],
                exports: [
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "y7gE":
/*!**************************************!*\
  !*** ./src/app/shared/data/foods.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const foods = [
    {
        name: "Pizza",
        calories: 400,
        image: "https://i.imgur.com/eTmWoAN.png",
        quantity: 0
    },
    {
        name: "Salad",
        calories: 150,
        image: "https://i.imgur.com/DupGBz5.jpg",
        quantity: 0
    },
    {
        name: "Sweet Potato",
        calories: 120,
        image: "https://i.imgur.com/hGraGyR.jpg",
        quantity: 0
    },
    {
        name: "Gnocchi",
        calories: 500,
        image: "https://i.imgur.com/93ekwW0.jpg",
        quantity: 0
    },
    {
        name: "Pot Roast",
        calories: 350,
        image: "https://i.imgur.com/WCzJDWz.jpg",
        quantity: 0
    },
    {
        name: "Lasagna",
        calories: 750,
        image: "https://i.imgur.com/ClxOafl.jpg",
        quantity: 0
    },
    {
        name: "Hamburger",
        calories: 400,
        image: "https://i.imgur.com/LoG39wK.jpg",
        quantity: 0
    },
    {
        name: "Pad Thai",
        calories: 475,
        image: "https://i.imgur.com/5ktcSzF.jpg",
        quantity: 0
    },
    {
        name: "Almonds",
        calories: 75,
        image: "https://i.imgur.com/JRp4Ksx.jpg",
        quantity: 0
    },
    {
        name: "Bacon",
        calories: 175,
        image: "https://i.imgur.com/7GlqDsG.jpg",
        quantity: 0
    },
    {
        name: "Hot Dog",
        calories: 275,
        image: "https://i.imgur.com/QqVHdRu.jpg",
        quantity: 0
    },
    {
        name: "Chocolate Cake",
        calories: 490,
        image: "https://i.imgur.com/yrgzA9x.jpg",
        quantity: 0
    },
    {
        name: "Wheat Bread",
        calories: 175,
        image: "https://i.imgur.com/TsWzMfM.jpg",
        quantity: 0
    },
    {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        quantity: 0
    },
    {
        name: "Banana",
        calories: 175,
        image: "https://i.imgur.com/BMdJhu5.jpg",
        quantity: 0
    },
    {
        name: "Yogurt",
        calories: 125,
        image: "https://i.imgur.com/URhdrAm.png",
        quantity: 0
    }
];
/* harmony default export */ __webpack_exports__["default"] = (foods);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map