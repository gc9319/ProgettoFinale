import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fattura } from 'src/app/classes/Fattura/fattura';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  APIURL:string = 'http://epicode.online/epicodebeservice/';

  constructor(private http: HttpClient) { }

  getAll(page: number){
    return this.http.get(this.APIURL + `api/fatture?page=${page}&size=20&sort=id,ASC` )
  }

  infoFattura(id:number){
    return this.http.get<Fattura>(this.APIURL + 'api/fatture/' +id);
  }

  updateFattura(fattura:Fattura){
    return this.http.put<Fattura>(this.APIURL + 'api/fatture/' + fattura.id, fattura)
  }

  addFattura(fattura:Fattura){
    return this.http.post<Fattura>(this.APIURL + 'api/fatture', fattura)
  }
}
