import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'decor-animated-heading',
  templateUrl: './animated-heading.component.html',
  styleUrls: ['./animated-heading.component.scss']
})
export class AnimatedHeadingComponent implements OnInit {
  @Input() heading: string;
  constructor() { }

  ngOnInit(): void {
  }

}
