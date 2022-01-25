import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/Comune/comune';
import { ComuniService } from '../services/comuni/comuni.service';
import { ProvinceService } from '../services/Province/province.service';

@Component({
  selector: 'app-comuni-info',
  templateUrl: './comuni-info.component.html',
  styleUrls: ['./comuni-info.component.css']
})
export class ComuniInfoComponent implements OnInit {

  selCom: Comune = new Comune();
  province: any [] = [];

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private comuniService: ComuniService,
    private ProvinceService: ProvinceService) { }

  ngOnInit(): void {
    this.comuniService.infoComune(this.route.snapshot.params['id']).subscribe(
      (data)=> {console.log(data);
      this.selCom = data});
    this.ProvinceService.getAll().subscribe((res:any)=>{
      this.province = res.content
      })
  }

  update(){
    this.comuniService.updateComune(this.selCom).subscribe((res:any)=>{
      this.selCom = res
    });
    console.log(this.selCom)
    this.router.navigate(['/comuni'])
  }
}
