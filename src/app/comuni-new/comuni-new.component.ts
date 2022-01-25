import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/Comune/comune';
import { Provincia } from '../classes/Provincia/provincia';
import { ComuniService } from '../services/comuni/comuni.service';
import { ProvinceService } from '../services/Province/province.service';

@Component({
  selector: 'app-comuni-new',
  templateUrl: './comuni-new.component.html',
  styleUrls: ['./comuni-new.component.css']
})
export class ComuniNewComponent implements OnInit {

  newCom: Comune = new Comune();
  province: any [] = [];

  constructor(private comuniService: ComuniService, 
    private router: Router,
    private route: ActivatedRoute,
    private ProvinceService: ProvinceService) { }

  ngOnInit(): void {
    this.ProvinceService.getAll().subscribe((res:any)=>{
      this.province = res.content
      console.log(res)
    })
    console.log(this.province)
  }

  new(){
    this.comuniService.addComune(this.newCom).subscribe((res)=>{
      this.newCom = res;
    });
    console.log(this.newCom);
    this.router.navigate(['/comuni'])
  }

}
