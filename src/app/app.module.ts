import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewArticleComponent } from './components/view-article/view-article.component';
import {ArticleService} from './shared/article.service';
import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const appRoutes:Routes=[
  {path:'', component:ListComponent},
  {path:'createUpdate', component:CreateUpdateComponent},
  {path:'viewArticle', component: ViewArticleComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    ViewArticleComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],

  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
