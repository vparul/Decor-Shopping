import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'decor-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {
  item = 0
  constructor() { }

  ngOnInit(): void {
  }

}
