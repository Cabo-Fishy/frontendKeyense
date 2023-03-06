import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nservice } from '../models/nservice.model';
const baseUrl = 'http://localhost:8080/api/nservices';
@Injectable({
  providedIn: 'root'
})
export class NserviceService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Nservice[]> {
    return this.http.get<Nservice[]>(baseUrl);
  }
  get(id: any): Observable<Nservice> {
    return this.http.get<Nservice>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Nservice[]> {
    return this.http.get<Nservice[]>(`${baseUrl}?title=${title}`);
  }
}