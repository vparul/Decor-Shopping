import { Component, OnInit } from '@angular/core';
import { buddhaDropDownMenu, decorDropDownMenu, giftingDropDownMenu, hinduGodsDropDownMenu, utilitiesDropDownMenu } from 'src/app/shared/shared-constants';

@Component({
  selector: 'decor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 

  
  dropdownMenu = [
    {
      title:'Hindu Gods',
      subMenu:{
        list: hinduGodsDropDownMenu
      }
    },
    {
      title:'Buddha',
      subMenu:{
        list: buddhaDropDownMenu
      }
    },
    {
      title:'Decor',
      subMenu:{
        list: decorDropDownMenu
      }
    },
    {
      title:'Spiritual',
      subMenu:{
        list: []
      }
    },
    {
      title:'Gifting',
      subMenu:{
        list: giftingDropDownMenu
      }
    },
    {
      title:'Utilities',
      subMenu:{
        list: utilitiesDropDownMenu
      }
    },
    {
      title:'Hardware',
      subMenu:{
        list: []
      }
    }
  ]

  
  constructor() {}

  ngOnInit(): void {}
}
