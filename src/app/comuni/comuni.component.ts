import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/Comune/comune';
import { ComuniService } from '../services/comuni/comuni.service';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

  comuni: Comune[]=[];

  constructor(private comuniService: ComuniService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comuniService.getAll().subscribe((comuni:any)=>{
        this.comuni = comuni.content
      })
    })
  }

  deleteC(item: Comune){
    this.comuniService.deleteComune(item).subscribe(res => {
      this.comuni = this.comuni.filter(c => c.id !== item.id)
    })
  }
  
  infoComune(item:Comune){
    this.router.navigate(['/comuni', item.id])
  }

}
