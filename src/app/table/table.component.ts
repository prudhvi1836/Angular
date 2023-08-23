import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public productList : any = [
                                {
                                  id:1,
                                  name:"Pavilion",
                                  price:50000,
                                  brand:"hp",
                                  quantity:5
                                },
                                {
                                  id:2,
                                  name:"Predator",
                                  price:90000,
                                  brand:"acer",
                                  quantity:1
                                },
                                {
                                  id:3,
                                  name:"MacBook",
                                  price:55000,
                                  brand:"apple",
                                  quantity:2
                                }

                             ]
  public sellItem(product:any){
      if(product.quantity === 0)
      {
        alert("out of stock");
        product.quantity = 0;
      } else{
        product.quantity--;
      }    
  }
}
