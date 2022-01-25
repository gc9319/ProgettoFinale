import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from 'src/app/classes/Provincia/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  urlApi:string = 'http://epicode.online/epicodebeservice/'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.urlApi + 'api/province?page=0&size=20&sort=id,ASC')
  }

  deleteProvincia(item: Provincia){
    return this.http.delete(this.urlApi + 'api/province/' + item.id)
  }

  infoProvincia(id:number){
    return this.http.get<Provincia>(this.urlApi + 'api/province/' + id);
  }

  updateProvincia(provincia:Provincia){
    return this.http.put<Provincia>(this.urlApi + 'api/province/' + provincia.id, provincia)
  }
}
