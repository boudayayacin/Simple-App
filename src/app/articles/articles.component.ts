import { Component, OnInit } from '@angular/core';
import { Article } from '../model/articl.model';
import { ArticleService } from '../services/article.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-articles',
  imports: [FormsModule , CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
tab_art: Article[];
categ !: Categorie
id: any ; 
zeroStyle = {'color':'red'}

constructor (private articleService: ArticleService , private activatedRout: ActivatedRoute){
  this.tab_art = articleService.listeArticles();
}
suppArticle(art: Article){
  let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
  if (conf) {
  this.articleService.supprimerArticle(art);
  console.log("Suppression avec succes :"+art.libelle);  
  }}
  
  ngOnInit(): void {
       this.id = this.activatedRout.snapshot.paramMap.get('id');
      this.articleService.consulterArticle(this.id)

}
}
