import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

export const routes: Routes = [
    {path: "articles", component : ArticlesComponent},
    {path: "add-article", component : AddArticleComponent},
    {path: "update-article", component : UpdateArticleComponent},
    {path: "", redirectTo: "articles", pathMatch: "full"}
];
