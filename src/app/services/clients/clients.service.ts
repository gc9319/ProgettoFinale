import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from 'src/app/classes/clients/clients';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  APIURL:string = 'http://epicode.online/epicodebeservice/';


  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.APIURL+'api/clienti')
  }
  getPagedUsers(page: number){
    return this.http.get(this.APIURL+`api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  deleteClient(item:Clients){
    return this.http.delete(this.APIURL + 'api/clienti/' + item.id);
  }

  infoClient(id: number){
    return this.http.get<Clients>(this.APIURL + 'api/clienti/' + id );
    
  }

  updateClient(client:Clients){
    return this.http.put<Clients>(this.APIURL + 'api/clienti/' + client.id, client)
  }

  addClient(client:Clients){
    return this.http.post<Clients>(this.APIURL + 'api/clienti', client )
  }
  

}
