import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { buddhaDropDownMenu, decorDropDownMenu, giftingDropDownMenu, hinduGodsDropDownMenu, utilitiesDropDownMenu } from 'src/app/shared/shared-constants';

@Component({
  selector: 'decor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  showMenuOnResize: boolean = false
  @HostListener('window:resize',['$event'])
    onResize($event:any) {
      this.showMenuOnResize = $event.target.innerWidth < 1000 ? true : false;
  }

 @ViewChild(MatMenuTrigger,{static: false}) menu: MatMenuTrigger;

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

  ngOnInit() {}

  closeMenu() {
    this.menu.closeMenu();
  }

  menuClicked() {
    this.showMenu = !this.showMenu;
  }
}
