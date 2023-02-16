import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  template: ` <div class="container">
    <div class="row pt-5 pb-5">
      <h1>{{ 'TEAM' | translate }}</h1>
    </div>
    <div class="row">
      <div class="col-12">
        <p>{{ 'TEAM-P1' | translate }}</p>
      </div>
      <div class="col-12">
        <p>{{ 'TEAM-P2' | translate }}</p>
      </div>
      <div class="col-12">
        <p>{{ 'TEAM-P3' | translate }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {}
