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
var article_1 = require('./article');
var ArticleComponent = (function () {
    function ArticleComponent() {
        this.article = new article_1.Article('Angular 2', 'http://angular.io', 10);
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'reddit-article',
            inputs: ['article'],
            host: {
                class: 'row'
            },
            template: "\n\t\t<div class=\"four wide column center aligned votes\">\n\t\t<div class=\"ui statistic\">\n\t\t<div class=\"value\">\n\t\t\t{{ article.votes }}\n\t\t</div>\n\t\t<div class=\"label\">\n\t\t\tPoints\n\t\t</div>\n\t\t</div>\n\t\t</div>\n\t\t<div class=\"twelve wide column\">\n\t\t<a class=\"ui large header\" href=\"{{ link }}\">\n\t\t{{ article.title }}\n\t\t</a>\n\t\t<div class=\"meta\">({{ article.domain() }})</div>\n\t\t<ul class=\"ui big horizontal list voters\">\n\t\t<li class=\"item\">\n\t\t<a href (click)=\"voteUp()\">\n\t\t<i class=\"arrow up icon\"></i>\n\t\tupvote\n\t\t</a>\n\t\t</li>\n\t\t<li class=\"item\">\n\t\t<a href (click)=\"voteDown()\">\n\t\t<i class=\"arrow down icon\"></i>\n\t\tdownvote\n\t\t</a>\n\t\t</li>\n\t\t</ul>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map