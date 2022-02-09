import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BodyPost, FbCreateResponse, Post} from "./interface";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  create(post: BodyPost): Observable<Post> {
    return this.http.post<FbCreateResponse>(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(map((res: FbCreateResponse): Post => {
        return {
          ...post,
          id: res.name,
          date: new Date(post.date)
        }
      }));
  }
}
