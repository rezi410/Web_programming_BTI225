import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

//fetches data from api in future
export class CategoriesComponent implements OnInit {
  categories: Array<any> = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
