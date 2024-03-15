import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL  = 'https://jsonplaceholder.typicode.com/posts'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient)
  constructor() { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){

    return this.http.get(BASE_URL)
  }
}
