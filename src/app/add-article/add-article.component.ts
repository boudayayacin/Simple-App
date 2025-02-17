import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/articl.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule , CommonModule],
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  newArticle = new Article(); 
  categories! : Categorie[];
  newCodec! : number;
  newCateg! : Categorie;

  constructor(private articleService: ArticleService , private router: Router) {}

  addArticle() {
    // this.newCateg = //code à completer
    // this.newArticle.categ = this.newCateg
    this.articleService.ajouterArticle(this.newArticle);
    console.log(this.newArticle);
    this.router.navigate(['articles']);
  }
  

  ngOnInit(): void {
    this.categories =  this.articleService.listerCategories();
    console.log(this.categories);
    
    
  }
}
