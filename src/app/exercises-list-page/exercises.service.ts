import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExercisesService {
  private serverUrl = 'http://localhost:8080/exercises';

  constructor(private http: HttpClient) {
  }

  fetchExercises(): Observable<{id: string, content: string}[]> {
    return this.http.get<{id: string, content: string}[]>(this.serverUrl);
  }
}
