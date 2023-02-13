import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  template: `<div class="container" id="top">
      <div class="row">
        <div class="col-lg-5">
          <div class="row">
            <div class="col-lg-12">
              <h2>{{ 'WELCOME' | translate }}</h2>
              <h1>{{ 'DAP_ANIWELL' | translate }}</h1>
              <p class="mt-4 mb-5">{{ 'HOME_BRIEF_INFO' | translate }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 mb-5">
              <div class="btn-group">
                <app-button
                  size="sm"
                  color="primary"
                  [label]="'NAV_PHONE_NUMBER' | translate"
                  icon="bi bi-telephone-fill"
                ></app-button>
              </div>
              <h5>{{ '24/7' | translate }}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-6">
                  <h5>{{ 'ADDRESS' | translate }}</h5>
                  <span>{{ 'ADDRESS_FULL' | translate }}</span>
                </div>
                <div class="col-6">
                  <h5>{{ 'SPEAKING_HOUR' | translate }}</h5>
                  <span>{{ 'SPEAKING_HOUR_WEEK' | translate }}</span
                  ><br />
                  <span>{{ 'SPEAKING_HOUR_WEEKEND' | translate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6">
          <img
            src="../../assets/images/front.jpg"
            class="img-fluid"
            alt="Aniwell logo"
          />
        </div>
      </div>
    </div>
    <div class="container" id="services">
      <div class="row pb-2 pt-4">
        <h1>{{ 'OUR_SERVICES' | translate }}</h1>
      </div>
      <div class="row pb-5 pt-2">
        <div class="col-md-4 ">
          <img
            src="../../assets/images/kleinehuisdieren.jpg"
            class="img-fluid"
            alt="Kleine huisdieren"
          />
        </div>
        <div class="col-md-8"></div>
      </div>
      <div class="row pb-5 pt-2">
        <div class="col-md-8"></div>
        <div class="col-md-4">
          <img
            src="../../assets/images/grotehuisdieren.jpg"
            class="img-fluid"
            alt="Kleine huisdieren"
          />
        </div>
      </div>
    </div>
    <div>
      <div>
        <div class="col-md-3"><h2>Onze praktijk</h2></div>
        <div class="col-md-9"></div>
      </div>
    </div> `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const language = this.activatedRoute.snapshot.params.language;
    if (language) {
      this.translateService.use(language);
    }

    this.activatedRoute.params.subscribe((params) => {
      if (params.language) {
        this.translateService.use(params.language);
      }
    });
  }
}
