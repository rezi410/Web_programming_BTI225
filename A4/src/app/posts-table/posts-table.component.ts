import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service.service';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css'],
})
export class PostsTableComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data) => {
      this.blogPosts = data;
    });
  }

  rowClicked(e: any, id: any) {
    this.router.navigate(['/admin/post', id]);
  }
}
