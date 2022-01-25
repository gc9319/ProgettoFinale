import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from '../classes/Provincia/provincia';
import { ProvinceService } from '../services/Province/province.service';

@Component({
  selector: 'app-province-info',
  templateUrl: './province-info.component.html',
  styleUrls: ['./province-info.component.css']
})
export class ProvinceInfoComponent implements OnInit {

  selPro: Provincia = new Provincia();

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private ProvinceService: ProvinceService) { }

  ngOnInit(): void {
    this.ProvinceService.infoProvincia(this.route.snapshot.params['id']).subscribe(
      (data:Provincia)=> {console.log(data);
      this.selPro = data
      })
  }

  update(){
    this.ProvinceService.updateProvincia(this.selPro).subscribe((res)=>{
      this.selPro = res});
      this.router.navigate(['/province'])
  }
  
}
