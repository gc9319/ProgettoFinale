import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../classes/clients/clients';
import { Fattura } from '../classes/Fattura/fattura';
import { ClientsService } from '../services/clients/clients.service';
import { FattureService } from '../services/Fatture/fatture.service';

@Component({
  selector: 'app-fatture-new',
  templateUrl: './fatture-new.component.html',
  styleUrls: ['./fatture-new.component.css']
})
export class FattureNewComponent implements OnInit {

  newFat: Fattura = new Fattura();
  clients: any [] = [];
  constructor(private fattureService: FattureService, 
    private router: Router,
    private route: ActivatedRoute,
    private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getAll().subscribe((res:any)=>{
      this.clients = res.content
    })
  }

  new(){
    this.fattureService.addFattura(this.newFat).subscribe((res)=>{
      this.newFat = res;
    })
    console.log(this.newFat);
    this.router.navigate(['/fatture'])
  }
}
