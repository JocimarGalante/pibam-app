import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(private http: HttpClient) { }

  getBibleVerse(): Observable<any> {
    const apiUrl = 'https://bible-api.com/Lucas+1:15?translation=almeida';
    return this.http.get(apiUrl);
  }
}
