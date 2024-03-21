import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = 'http://localhost:5000'; // Beispiel-URL für dein Flask-Backend

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cards`);
  }

  addCard(cardData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cards`, cardData);
    console.log("Tried to edd card")
  }
}
