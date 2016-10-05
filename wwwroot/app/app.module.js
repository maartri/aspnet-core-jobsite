"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var home_1 = require('./home/home');
var header_component_1 = require('./shared/header.component');
var footer_component_1 = require('./shared/footer.component');
var searchbox_1 = require('./custom/searchbox');
var routes_1 = require('./routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, routes_1.routing, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.Header,
                footer_component_1.Footer,
                searchbox_1.Searchbox,
                home_1.Home
            ],
            providers: [
                routes_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NjcmlwdHMvYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUcxRCw4QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxxQkFBcUIsYUFBYSxDQUFDLENBQUE7QUFDbkMsaUNBQXVCLDJCQUEyQixDQUFDLENBQUE7QUFDbkQsaUNBQXVCLDJCQUEyQixDQUFDLENBQUE7QUFDbkQsMEJBQTBCLG9CQUFvQixDQUFDLENBQUE7QUFHL0MsdUJBQytCLFVBQVUsQ0FBQyxDQUFBO0FBZ0IxQztJQUFBO0lBQXlCLENBQUM7SUFkMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLGdCQUFPLEVBQUUsbUJBQVcsQ0FBQztZQUM5QyxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1oseUJBQU07Z0JBQ04seUJBQU07Z0JBQ04scUJBQVM7Z0JBQ1QsV0FBSTthQUNQO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDRCQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIn0=
