import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../classes/clients/clients';
import { ClientsService } from '../services/clients/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Clients[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  
 

  constructor(private clientsService: ClientsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      this.clientsService.getPagedUsers(params["page"]).subscribe((clients:any) => {
       
        this.clients = clients.content

        
        this.totalElements = clients.totalElements
        this.size = clients.size
        this.numberOfPages = Math.round(clients.totalElements / clients.size)


        for(let i = 0; i <= this.numberOfPages; i++){
          this.pageNumbers.push(i);
        }
  
      });

    });

  }
  
  deleteClient(item:Clients){
    this.clientsService.deleteClient(item).subscribe(response => {  
      this.clients = this.clients.filter(c => c.id !== item.id);
  });
  }

  infoClient(item:Clients){
    this.router.navigate(["clients", item.id])
  }

  

  



}
