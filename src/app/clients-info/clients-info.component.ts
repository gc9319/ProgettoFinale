import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../classes/clients/clients';
import { Comune } from '../classes/Comune/comune';
import { Provincia } from '../classes/Provincia/provincia';
import { ClientsService } from '../services/clients/clients.service';
import { ComuniService } from '../services/comuni/comuni.service';

@Component({
  selector: 'app-clients-info',
  templateUrl: './clients-info.component.html',
  styleUrls: ['./clients-info.component.css']
})
export class ClientsInfoComponent implements OnInit {

  selCli: Clients= new Clients();


  constructor(private router: Router,
     private route: ActivatedRoute,
     private clientsService: ClientsService,
      private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.clientsService.infoClient(this.route.snapshot.params['id']).subscribe(
      (data:Clients) => {console.log(data);
      this.selCli = data}
    );
  }

  update() {
    console.log(this.selCli)
    this.clientsService.updateClient(this.selCli).subscribe((res)=>{
      this.selCli = res
    });
    this.router.navigate(['/clients'])

  }

  

  
  
}

