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
// Observable class extensions
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/do');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
var Subject_1 = require('rxjs/Subject');
var Searchbox = (function () {
    function Searchbox() {
        this.searchTerms = new Subject_1.Subject();
        this.searchTerms.subscribe(function (n) { return console.log(n); });
    }
    Searchbox.prototype.search = function (inputString) {
        this.searchTerms.next(inputString);
    };
    Searchbox = __decorate([
        core_1.Component({
            selector: 'searchbox',
            template: "\n        <div class=\"searchbox\">\n            <input #searchbox (keyup)=\"search(searchbox.value)\" placeholder=\"Job Search...\" />\n            <ul></ul>\n        </div>\n    ",
            styles: ["\n        div.searchbox input{\n            width:100%;\n            line-height:3em;\n            outline: none;\n            border: 2px solid #7fc88e;\n            color: #f37757;\n            padding-left: 1em;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Searchbox);
    return Searchbox;
}());
exports.Searchbox = Searchbox;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NjcmlwdHMvYXBwL2N1c3RvbS9zZWFyY2hib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RCw4QkFBOEI7QUFDOUIsUUFBTyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ2hDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUVuQyx1QkFBdUI7QUFDdkIsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxRQUFPLHdDQUF3QyxDQUFDLENBQUE7QUFDaEQsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBR3JDLHdCQUFrQyxjQUFjLENBQUMsQ0FBQTtBQXNCakQ7SUFHSTtRQURRLGdCQUFXLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFJeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sV0FBbUI7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQS9CTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsc0xBS1Q7WUFDRCxNQUFNLEVBQUUsQ0FBQyx5T0FTUixDQUFDO1NBQ0wsQ0FBQzs7aUJBQUE7SUFnQkYsZ0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLGlCQUFTLFlBY3JCLENBQUEiLCJmaWxlIjoiY3VzdG9tL3NlYXJjaGJveC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
