import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'decor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  showScrollToTopButton: boolean = false;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 100) {
      this.showScrollToTopButton = true;
    }
    else {
      this.showScrollToTopButton = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    document.documentElement.scrollTop = 0;
  }

}
