import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import{Article} from '../../article';


@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  public article:Article;
  constructor(private articleService:ArticleService, private router:Router) { }

  ngOnInit(): void {
    this.article=this.articleService.getter();
  }
  createOrUpdate(){
    if(this.article._id==undefined){
    this.articleService.createArticle(this.article).subscribe(
      data=>{
          console.log(data);
          this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
    }else{
      this.articleService.updateArticle(this.article).subscribe(
        data=>{
            console.log(data);
            this.router.navigate(['/']);
        },
        error=>{
          console.log(error);
        }
      )
    }
  }
}
