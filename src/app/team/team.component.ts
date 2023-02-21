import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  template: ` <div class="container">
    <div class="row pt-5 pb-5">
      <h1>{{ 'TEAM' | translate }}</h1>
    </div>
    <div class="row pt-2 pb-3">
      <div class="col-lg-3">
        <figure class="figure">
          <img
            src="../assets/images/karlijn.jpg"
            alt="karlijn"
            class="img-fluid rounded "
          />
          <figcaption class="figure-caption">Karlijn</figcaption>
        </figure>
      </div>
      <div class="col-lg-9">
        <p>{{ 'TEAM-P1' | translate }}</p>
      </div>
    </div>
    <div class="row pt-4 pb-3">
      <div class="col-lg-9">
        <p>{{ 'TEAM-P2' | translate }}</p>
      </div>
      <div class="col-lg-3">
        <figure class="figure">
          <img
            src="../assets/images/geert.jpg"
            alt="geert"
            class="img-fluid rounded "
          />
          <figcaption class="figure-caption">Geert</figcaption>
        </figure>
      </div>
    </div>
    <div class="row pt-4 pb-4">
      <div class="col-12">
        <p>{{ 'TEAM-P3' | translate }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {}
