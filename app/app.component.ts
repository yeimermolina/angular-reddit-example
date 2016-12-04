import { Component } from '@angular/core';

import { Article } from './article';

@Component({
  selector: 'reddit',
  template: `
	<form class="ui large form segment">
		<h3 class="ui header">Add a Link</h3>
		<div class="field">
			<label for="title">Title:</label>
			<input name="title" #newtitle>
		</div>
		<div class="field">
			<label for="link">Link:</label>
			<input name="link" #newlink>
		</div>
		<button (click)="addArticle(newtitle, newlink)"
			class="ui positive right floated button">
			Submit link
		</button>
	</form>

	<div class="ui grid posts">
<reddit-article
*ngFor="let foobar of sortedArticles()"
[article]="foobar">
</reddit-article>
</div>
	`,
})
export class AppComponent  { 
	articles: Article[];

	constructor(){

		this.articles= [
			new Article('Angular 2', 'http://angular.io', 3),
			new Article('Fullstack', 'http://fullstack.io', 2),
			new Article('Angular Homepage', 'http://angular.io', 1),
		];
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void{
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		this.articles.push(new Article(title.value, link.value, 0));
		title.value = '';
		link.value = '';
		return false;
	}

	sortedArticles(): Article[] {
		return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
	}
}
