import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comune } from 'src/app/classes/Comune/comune';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlApi:string = 'http://epicode.online/epicodebeservice/'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(this.urlApi + 'api/comuni?page=0&size=0&sort=id,ASC')
  }

  deleteComune(item: Comune){
    return this.http.delete(this.urlApi + 'api/comuni/' + item.id)
  }

  infoComune(id: number){
    return this.http.get<Comune>(this.urlApi + 'api/comuni/' +id)
  }

  updateComune(comune:any){
    return this.http.put<any>(this.urlApi + 'api/comuni/' +comune.id, comune )
  }

  addComune(comune:Comune){
    return this.http.post<Comune>(this.urlApi + 'api/comuni', comune)
  }

}
