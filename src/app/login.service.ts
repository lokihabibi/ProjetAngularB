import { inject, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminServiceService } from './Service/admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  login(userName:string,password:string):Observable<boolean>
  {
    let connected =userName===localStorage.getItem("name") && password==localStorage.getItem("password");
    if(connected)
      localStorage.setItem('etat de connexion',"connected")
    else
      localStorage.setItem('etat de connexion',"disconnected")
    return of(connected)
  
  }

  logout(){
    localStorage.setItem('etat de connexion','disconnected')
  }
}
