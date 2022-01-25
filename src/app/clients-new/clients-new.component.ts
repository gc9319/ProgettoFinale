import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../classes/clients/clients';
import { IClients } from '../interfaces/clients/iclients';
import { ClientsService } from '../services/clients/clients.service';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.css']
})
export class ClientsNewComponent implements OnInit {

  newClient: Clients = new Clients();

  constructor(private clientsService: ClientsService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  new(){
    this.clientsService.addClient(this.newClient).subscribe((res)=>{
      this.newClient = res;
    })
    console.log(this.newClient)
    this.router.navigate(['/clients'])
  }

}
