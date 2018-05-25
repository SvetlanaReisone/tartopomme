import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  theList : any[]= [{
      name: 'baskets',
      prise: 29,
      score: 3
    },
    { name : 't-shirt',
      prise: 15,
      score: 4
    }]

}
