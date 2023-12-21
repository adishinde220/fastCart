import { Component } from '@angular/core';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent {

  categoryList: any = [];
  productList: any = [];
  selectedCategory:string='';
  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.http.getDataFromServer('topcats').subscribe((el: any) => {
      if (el && el.length > 0) {
        this.categoryList = el.map((obj: any) => obj.top_category.name);
        this.categoryList.unshift('ALL');
        console.log(this.categoryList);
      }
    })
  }
  getProductsByCategory(category: string) {
    this.selectedCategory = category;
    let endPoint: string = 'categories?categoryName=' + category;
    this.http.getDataFromServer(endPoint).subscribe((response: any) => {
      if (response !=undefined && response[0] != undefined && response[0].products && response[0].products.length > 0) {
        this.productList = response[0].products[0].product_info.reco_list.products;
      }else{
        this.productList = [];
      }
    },
      (error) => {

      })
  }
}