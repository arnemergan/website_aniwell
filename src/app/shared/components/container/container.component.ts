import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<div [class]="'container' + (size ? '-' + size : '')">
    <ng-content></ng-content>
  </div> `,
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' | 'fluid';

  constructor() {}

  ngOnInit(): void {}
}
