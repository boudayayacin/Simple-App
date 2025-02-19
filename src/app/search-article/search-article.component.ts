import { Component } from '@angular/core';
import { Article } from '../model/articl.model';
import { Categorie } from '../model/categorie.model';
import { ArticleService } from '../services/article.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-search-article',
  imports: [FormsModule , CommonModule , MenuComponent],
  templateUrl: './search-article.component.html',
  styleUrl: './search-article.component.css'
})
export class SearchArticleComponent {
  articles! : Article[];
  libArticle! : string;
  categRech! : number;
  categories! : Categorie[];
  zeroStyle = {'color':'red'}
  tab_art: Article[];
  critere! : string;

  constructor(private articleService: ArticleService ) {
    this.tab_art = articleService.listeArticles();
    }

    chercherParLib(lib : string){
      this.tab_art = this.articleService.listeArticles();
      this.tab_art = this.tab_art.filter(art => art.libelle.toLowerCase()
      .includes(lib.toLowerCase()));
      }
    ngOnInit(): void {
      this.categories = this.articleService.listerCategories();
      }
      chercherParCateg() {
        this.tab_art = this.articleService.listeArticles();
        this.tab_art = this.tab_art.filter(art => art.categ.codec == this.categRech);
      }
      reset(){
        this.tab_art = this.articleService.listeArticles();
        }
}
