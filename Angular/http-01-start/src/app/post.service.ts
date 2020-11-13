import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })

export class PostService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }


    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content }
        this.http.post<{ name: string }>(
            'https://udemy-learning-b5e36.firebaseio.com/posts.json', postData,
            {
                observe: 'response'
            }
        ).subscribe(responseData => {
            console.log(responseData)
        }, error =>{
            this.error.next(error.message)
        })
    }

    fetchPosts() {
       return this.http.get<{ [key: string]: Post }>(
            'https://udemy-learning-b5e36.firebaseio.com/posts.json', {
                headers:new HttpHeaders({'Custom-Header': 'Hello'}),
                params: new HttpParams().set('print', 'pretty')
            }
        ).pipe(map(responseData => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    postsArray.push({ ...responseData[key], id: key })
                }
            }
            return postsArray
        }),
        catchError(errorRes=>{
            return throwError(errorRes);
        }))          
    }

    deletePosts(){
       return this.http.delete('https://udemy-learning-b5e36.firebaseio.com/posts.json',
       {
           observe: 'events',
           responseType: 'json'
       }).pipe(tap(event =>{
           console.log(event);
           if(event.type === HttpEventType.Response){
               console.log(event.body)
           }
       }))
    }
}