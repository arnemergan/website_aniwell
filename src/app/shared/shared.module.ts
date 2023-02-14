import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';

@NgModule({
  declarations: [ButtonComponent, ServiceItemComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ButtonComponent, ServiceItemComponent],
})
export class SharedModule {}
