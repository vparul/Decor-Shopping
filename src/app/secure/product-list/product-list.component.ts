import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'decor-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  featuredProducts = [
    {
      url:'../../../assets/images/product1.jpg',
      name: 'Aliquam Quaerat',
      price:'₹108.80'
    },
    {
      url:'../../../assets/images/product2.jpg',
      name: 'Loroum Eveniet',
      price:'₹97.99'
    },{
      url:'../../../assets/images/product3.jpg',
      name: 'Necessitiatibus',
      price:'₹119.60'
    },{
      url:'../../../assets/images/product4.jpg',
      name: 'Commodi Conseqatur',
      price:'₹134.00'
    },{
      url:'../../../assets/images/product5.jpg',
      name: 'Aliquam Quaerat',
      price:'₹108.80'
    },{
      url:'../../../assets/images/product6.jpg',
      name: 'Exercitat Virginia',
      price:'₹104.00'
    },{
      url:'../../../assets/images/product7.jpg',
      name: 'Laudant Doloremque',
      price:'₹92.00'
    },{
      url:'../../../assets/images/product8.jpg',
      name: 'Nostrud Exercitation',
      price:'₹78.80'
    },
  ]
  constructor() { }

  ngOnInit() {
  }



}
