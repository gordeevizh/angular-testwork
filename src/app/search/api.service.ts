import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private searchRresultUrl = '/api/search';
  private searchUserQuestionsUrl = '/api/userquestions';
  private searchQuestionsByTagUrl = '/api/questionsbytag';
  private searchAnswersByQuestionUrl = '/api/answers';
  private questionByIdUrl = '/api/question';

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getSearchResult(query: string): Observable<any> {
    const url = `${this.searchRresultUrl}/${query}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>(`getSearch query=${query}`, {items: []}))
      )
  }

  getUsersQuestions(userId: number): Observable<any> {
    const url = `${this.searchUserQuestionsUrl}/${userId}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>(`getUserQuestions userId=${userId}`, {items: []}))
    );
  }

  getQuestionsByTag(tag: string): Observable<any> {
    const url = `${this.searchQuestionsByTagUrl}/${tag}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>(`getQuestionsByTag tag=${tag}`, {items: []}))
    );
  }

  getAnswerByQuestion(questionId: number): Observable<any> {
    const url = `${this.searchAnswersByQuestionUrl}/${questionId}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>(`getAnswerByQuestion questionId=${questionId}`, {items: []}))
    );
  }

  getQuestionById(questionId: number): Observable<any> {
    const url = `${this.questionByIdUrl}/${questionId}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>(`getQuestionById questionId=${questionId}`, {items: []}))
    );
  }
  
}
