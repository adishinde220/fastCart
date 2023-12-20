import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent {
  topDealsList:any=[];
    constructor(private http : HttpService){

  }

  ngOnInit(){
    this.getTopDeals();
  }
  getTopDeals() {
    this.http.getDataFromServer('top-deals').subscribe((el:any)=>{
      if(el && el.products && el.products.length > 1){
        // console.log("top-deals",el);
        this.topDealsList = el.products ;
        console.log(this.topDealsList);
      }
    },
    ()=>{

    })
  }
}
