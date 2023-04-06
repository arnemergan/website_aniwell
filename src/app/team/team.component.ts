import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  template: ` <div class="container">
    <div class="row pt-5 pb-5">
      <h1>{{ 'TEAM' | translate }}</h1>
    </div>
    <div class="row justify-content-center pt-2 pb-2">
      <div class="col-12">
        <p>{{ 'TEAM-P1' | translate }}</p>
      </div>
    </div>
    <div class="row justify-content-center pt-2 pb-2">
      <div class="col-md-3 col-sm-7 col-8">
        <div class="card">
          <img
            src="../assets/images/geert.jpg"
            alt="geert"
            class="img-fluid rounded "
          />
          <div class="card-body">
            <p class="card-text">Geert</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-7 col-8">
        <div class="card">
          <img
            src="../assets/images/karlijn.jpeg"
            alt="karlijn"
            class="img-fluid rounded "
          />
          <div class="card-body">
            <p class="card-text">Karlijn</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center pt-2 pb-2">
      <div class="col-12">
        <p>{{ 'TEAM-P2' | translate }}</p>
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
export class TeamComponent {
  constructor(private title: Title) {
    title.setTitle('Team | dap aniwell');
  }
}
