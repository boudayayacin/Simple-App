import { Component, OnInit } from '@angular/core';
import { Article } from '../model/articl.model';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-article',
  standalone: true ,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-article.component.html',
  styleUrl: './update-article.component.css'
})

export class UpdateArticleComponent {

  articleCourant: Article = new Article();
  constructor(private articleService: ArticleService , private activedroute: ActivatedRoute){}

  modifArticle() {
    const id = this.activedroute.snapshot.paramMap.get('codea');
   console.log(this.articleCourant);
   
   
  }

}
