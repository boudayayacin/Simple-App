import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';

export const routes: Routes = [
    {path: "articles", component : ArticlesComponent},
    {path: "add-article", component : AddArticleComponent},
    {path: "update-article", component : UpdateArticleComponent},
    {path: "searchArticle", component: SearchArticleComponent},
    {path: "", redirectTo: "articles", pathMatch: "full"}
];
