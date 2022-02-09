import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BodyPost, Post} from "../../shared/interface";
import {PostService} from "../../shared/post.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup = null!;

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
    })
  }

  submit() {
    if(this.form .invalid) {
      return
    }

    const post: BodyPost = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset();
    });
  }

}
