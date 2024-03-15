import { Component, inject } from '@angular/core';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  listUser : any = []
  private postService = inject(PostService)
  


  ngOnInit(): void {
    this.loadPost()
  }

  loadPost()
  {
    this.postService.getPost().subscribe( 
    {
      next: (data: any) => {
        console.log(data);
        this.listUser = data
      },
      error: (err) => console.log("Error", err)
    }
    )
  }

}
