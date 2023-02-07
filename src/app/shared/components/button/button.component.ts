import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="btn"
      type="button"
      [class]="(color ? color : '') + (size ? ' ' + size : '')"
      [routerLink]="routerPath"
    >
      <i *ngIf="icon" [class]="icon"></i>
      <span *ngIf="label">{{ label }}</span>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'outline-secondary'
    | 'outline-primary';
  @Input() label: string;
  @Input() routerPath: string;
  @Input() icon: string;
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'xs';
  constructor() {}

  ngOnInit(): void {}
}
