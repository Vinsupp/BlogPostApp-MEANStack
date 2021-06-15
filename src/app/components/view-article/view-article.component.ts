import { Component, OnInit } from '@angular/core';
import{ArticleService} from '../../shared/article.service';
import{Article} from '../../article';
import{Router} from '@angular/router';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  public article:Article;
  
  //articles: any;
  public articles:Article[];
  
  constructor(private articleService:ArticleService, private router:Router) { }

  ngOnInit(): void {
    this.article=this.articleService.getter();
  }

  doUpdate(article){
    this.articleService.setter(article);
    this.router.navigate(['/createUpdate']);

  }

  doDelete(article){
    this.articleService.deleteArticle(article._id).subscribe(
      data=>{
          this.articles.splice(this.articles.indexOf(article),1);
      },
      error=>{

      }
    );

    this.router.navigate(['/']);

  }
}
