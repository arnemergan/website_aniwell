import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <a
      *ngIf="href"
      [href]="href"
      [target]="target"
      [attr.aria-label]="ariaLabel"
      [class]="'btn ' + (color ? color : '') + (size ? ' ' + size : '')"
    >
      <i *ngIf="icon" [class]="icon"></i>
      <span *ngIf="label">{{ label }}</span>
    </a>
    <button
      *ngIf="!href"
      type="button"
      [class]="'btn ' + (color ? color : '') + (size ? ' ' + size : '')"
      [attr.aria-label]="ariaLabel"
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
    | 'outline-primary'
    | 'app-dropdown';
  @Input() label: string;
  @Input() routerPath: string;
  @Input() icon: string;
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'xs';
  @Input() href: string;
  @Input() target: string = '_self';
  @Input() ariaLabel: string;
  constructor() {}

  ngOnInit(): void {}
}
