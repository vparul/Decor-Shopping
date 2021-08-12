import { Component, OnInit } from '@angular/core';
import { TopCategoriesImages } from 'src/app/shared/shared-enum';
@Component({
  selector: 'decor-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {
  public images = [
    {path:'../../../assets/images/category-image1.jpg', name:TopCategoriesImages.Animal},
    {path:'../../../assets/images/category-image2.jpg', name:TopCategoriesImages.Decor},
    {path:'../../../assets/images/category-image3.jpg', name:TopCategoriesImages.God_Idols},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
