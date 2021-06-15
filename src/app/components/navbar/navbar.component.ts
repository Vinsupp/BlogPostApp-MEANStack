import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import{Article} from '../../article';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private articleService:ArticleService) { }

  ngOnInit(): void {
  }
  newArticle(event: any){

    event.preventDefault();
    this.articleService.setter(new Article());
    this.router.navigate(['/createUpdate']);

  }
}
