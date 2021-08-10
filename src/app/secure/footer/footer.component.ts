import { Component, OnInit } from '@angular/core';
import { footerSections, IFooterSection } from 'src/app/shared/Models/footer.model';

@Component({
  selector: 'decor-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  infoSections:IFooterSection[] = footerSections;
  constructor() { }

  ngOnInit() {
  }

}
