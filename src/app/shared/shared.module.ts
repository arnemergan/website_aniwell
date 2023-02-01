import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';
import { RowComponent } from './components/row/row.component';

@NgModule({
  declarations: [ContainerComponent, ButtonComponent, RowComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ContainerComponent, ButtonComponent, RowComponent],
})
export class SharedModule {}
