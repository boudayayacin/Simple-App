import { Injectable } from '@angular/core';
import { Article } from '../model/articl.model';
import { Categorie } from '../model/categorie.model';
@Injectable({
providedIn: 'root'
})
export class ArticleService {
tab_art : Article[];
categories : Categorie[]
constructor() {
  this.categories = [
  {codec : 1, nomCat : "Périphérique PC", description:"Périphériques d'entrée/sortie pour les PCs"},
  {codec : 2, nomCat : "PC", description:"Toutes les marques de Laptops"},
  {codec : 3, nomCat : "Smartphone", description:"Toutes les marques de téléphones"}
  ];
  this.tab_art = [
    {codea : 1, libelle : "Souris Wifi", prix : 39.100, qte : 0, dateAjout : new Date("09/27/2022"),
    categ:{codec : 1, nomCat : "Périphérique PC", description:"Périphériques d'entrée/sortie pour les PCs"}
    },
    {codea : 2, libelle : "Clavier Gaming",
    prix : 45.900, qte : 11, dateAjout : new Date("09/30/2022"),
    categ:{codec : 1, nomCat : "Périphérique PC",
    description:"Périphériques d'entrée/sortie pour les PCs"}
    },
    {codea : 3, libelle : "Samsung S21",
    prix : 678.9, qte : 5, dateAjout : new Date("10/02/2022"),
    categ:{codec : 3, nomCat : "Smartphone",
    description:"Toutes les marques de téléphones"}
    }
    ];
    }

listeArticles():Article[] {
return this.tab_art;
}

ajouterArticle(art: Article){
  this.tab_art.push(art);
  console.log("Ajout avec succes : "+art.libelle);
  }
  supprimerArticle(art: Article){
    const index = this.tab_art.indexOf(art,0)
    if(index > -1){
      this.tab_art.splice(index,1)
    }
  }
  consulterArticle(id: number): Article | undefined {
    return this.tab_art.find(article => article.codea === id);
  }
  modifierArticle(id: number, newArticle: Article): boolean {
    const index = this.tab_art.findIndex(article => article.codea === id);
    if (index > -1) {
      this.tab_art.splice(index, 1); 
      this.tab_art.push(newArticle); 
      return true;
    }
    return false;
  }
  listerCategories(){
    return this.categories ;
  }
  consulterCategorie(id: any){
    return this.categories.find(cat => cat.codec === Number(id));
  }
  
}