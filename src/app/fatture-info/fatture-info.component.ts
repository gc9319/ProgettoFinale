import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/Fattura/fattura';
import { FattureService } from '../services/Fatture/fatture.service';

@Component({
  selector: 'app-fatture-info',
  templateUrl: './fatture-info.component.html',
  styleUrls: ['./fatture-info.component.css']
})
export class FattureInfoComponent implements OnInit {

  selFat: Fattura = new Fattura();

  constructor(private router: Router,
     private route: ActivatedRoute,
     private fattureService: FattureService) { }

  ngOnInit(): void {
    this.fattureService.infoFattura(this.route.snapshot.params['id']).subscribe(
      (data:Fattura) => {console.log(data);
      this.selFat = data});
  }

  update(){
    console.log(this.selFat);
    this.fattureService.updateFattura(this.selFat).subscribe((res)=>{
      this.selFat = res
    });
    this.router.navigate(['/fatture'])
  }

}
