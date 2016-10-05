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
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_1.Component({
            selector: 'header-element',
            template: "\n    <header>\n        <div class=\"container-wrap\">\n            <div class=\"logo-wrap\"></div>\n            <div class=\"search-wrap\"><searchbox></searchbox></div>\n        </div>\n    </header>\n    ",
            styles: ["\n        header{\n            position: fixed;\n            top: 0;\n            background-color: #fff;\n            z-index: 10;\n            width: 100%;\n            height: 7em;\n        }\n        div.container-wrap{\n            display:flex;\n            width:70%;\n            margin:0 auto;\n            padding-top:1%;\n        }\n        div.logo-wrap{\n            background: url(images/logo.png) no-repeat;\n            display: inline-block;\n            height: 100%;\n            width: 6em;\n            background-size: contain;\n            float:left;\n        }\n        div.search-wrap{\n            padding-top:1em;\n            float:left;\n            width: 60%;\n            margin: 0 auto;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NjcmlwdHMvYXBwL3NoYXJlZC9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUE2QzFDO0lBQUE7SUFFQSxDQUFDO0lBNUNEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLGdOQU9UO1lBQ0QsTUFBTSxFQUFFLENBQUMsb3VCQTZCUixDQUFDO1NBQ0wsQ0FBQzs7Y0FBQTtJQUlGLGFBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGNBQU0sU0FFbEIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
