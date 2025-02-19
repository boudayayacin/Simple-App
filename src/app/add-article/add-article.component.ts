import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/articl.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule , CommonModule , MenuComponent],
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

    const exist = this.articleService.consulterCategorie(this.newCodec) 
    if(!exist){
      console.log("n'exist");
      return ;
    }
    this.newCateg = exist
    this.newArticle.categ = this.newCateg
    this.articleService.ajouterArticle(this.newArticle);
    console.log(this.newArticle);
    this.router.navigate(['articles']);

  }
  
  ngOnInit(): void {
    this.categories =  this.articleService.listerCategories();
    console.log(this.categories);
    
    
  }
}
