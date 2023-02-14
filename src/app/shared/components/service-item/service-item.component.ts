import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  template: ` <i class="bi bi-check-square-fill"></i><span>{{ label }}</span>`,
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent {
  @Input() label: string;
}
