import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/Fattura/fattura';
import { FattureService } from '../services/Fatture/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  
  fatture: Fattura[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  

  constructor(private fattureService: FattureService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe(params => {
     this.fattureService.getAll(params["page"]).subscribe((fatture:any)=>{
       this.fatture = fatture.content

       this.totalElements = fatture.totalElements
       this.size = fatture.size
       this.numberOfPages = Math.round(fatture.totalElements / fatture.size)


       for(let i = 0; i <= this.numberOfPages && i <= 20; i++){
         this.pageNumbers.push(i);
       } 

     

       

     })
   })
  }

  infoFattura(item:Fattura){
    this.router.navigate(['fatture', item.id])
  }

}


