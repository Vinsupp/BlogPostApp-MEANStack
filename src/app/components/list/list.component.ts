import { Component, OnInit } from '@angular/core';
import{ArticleService} from '../../shared/article.service';
import{Article} from '../../article';
import{Router} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public articles:Article[];

  constructor(private _articleService:ArticleService, private router:Router) { }

  ngOnInit(): void {
    this.readArticles();
  }
  readArticles(){
    this._articleService.readArticles().subscribe(
      data=>{
        console.log(data);
        this.articles=data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  }

  doUpdate(article){
    this._articleService.setter(article);
    this.router.navigate(['/createUpdate']);

  }

  doDelete(article){
    this._articleService.deleteArticle(article._id).subscribe(
      data=>{
          this.articles.splice(this.articles.indexOf(article),1);
      },
      error=>{

      }
    );

  }

  doViewArticle(article){
    this._articleService.setter(article);
    this.router.navigate(['/viewArticle']);
  }
 
}
