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

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(map((res: {[key: string]: any}) => {
       return Object.keys(res).map(key => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date)
        }))
      }))
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`);
  }
}
