import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Class/admin';

const API_URLAdmin="http://localhost:3000/admin"

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {
private readonly http:HttpClient=inject (HttpClient)

public getAdmin():Observable<Admin[]>
{
  return this.http.get<Admin[]>(API_URLAdmin)
}
}
