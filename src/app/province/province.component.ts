import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from '../classes/Provincia/provincia';
import { ProvinceService } from '../services/Province/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  province: Provincia[]=[];

  constructor(private provinceService: ProvinceService, 
    private route: ActivatedRoute,
    private router: Router){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.provinceService.getAll().subscribe((province:any)=>{
        this.province = province.content;
      })
    })
  }

  deleteP(item: Provincia){
    this.provinceService.deleteProvincia(item).subscribe(res => {
      this.province = this.province.filter(p => p.id !== item.id)
    })
  }

  infoProvincia(item:Provincia){
    this.router.navigate(['/province', item.id])
  }

}
