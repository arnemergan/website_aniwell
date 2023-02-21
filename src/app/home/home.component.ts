import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <div class="container" id="top">
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
                      [href]="'tel:' + ('NAV_PHONE_NUMBER' | translate)"
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
                class="img-fluid d-none d-lg-flex"
                alt="Aniwell logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="services">
      <div class="row">
        <div class="col">
          <div class="container pt-5">
            <div class="row pt-5 pb-3 header">
              <h1>{{ 'OUR_SERVICES' | translate }}</h1>
            </div>
            <div class="row pb-5 pt-5">
              <div class="col-lg-12">
                <div class="container">
                  <div class="row pb-3">
                    <div class="col-12">
                      <h2>{{ 'SMALL_PETS' | translate }}</h2>
                      <p>{{ 'SMALL_PETS_INFO' | translate }}</p>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-4">
                      <app-service-item
                        [label]="'VACCINATION_REGISTRATION' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'STERILISATION_CASTRATION' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'DENTAL_CARE' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'MONITORING' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'ADVICE' | translate"
                      ></app-service-item>
                    </div>
                    <div class="col-lg-4">
                      <app-service-item
                        [label]="'ABDOMINAL_SURGERY' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'INSEMINATION' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'REFERAL' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'MONITORING_PREGNANT' | translate"
                      ></app-service-item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pb-5 pt-5">
              <div class="col-lg-12">
                <div class="container">
                  <div class="row pb-3">
                    <div class="col-12">
                      <h2>{{ 'BIG_PETS' | translate }}</h2>
                      <p>{{ 'BIG_PETS_INFO' | translate }}</p>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-4">
                      <app-service-item
                        [label]="'MONITORING' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'CASTRATION' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'CESAREAN' | translate"
                      ></app-service-item>
                    </div>
                    <div class="col-lg-4">
                      <app-service-item
                        [label]="'ABDOMINAL_SURGERY' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'CLAW' | translate"
                      ></app-service-item>
                      <app-service-item
                        [label]="'FARM_GUIDANCE' | translate"
                      ></app-service-item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5" id="practice">
      <div class="row">
        <div class="col">
          <div class="container">
            <div class="row pt-5 pb-5">
              <div class="col-lg-5">
                <h1>Onze praktijk</h1>
                <p>{{ 'ADDRESS_FULL' | translate }}</p>
                <a href="https://www.google.be/maps" target="_blank">{{
                  'GOOGLE_MAPS' | translate
                }}</a>
              </div>
              <div class="col-lg-7 d-none d-lg-block">
                <ngb-carousel>
                  <ng-template
                    ngbSlide
                    *ngFor="let number of [1, 2, 3, 4, 5, 6, 7]"
                  >
                    <div class="wrapper">
                      <img
                        class="img-fluid"
                        [src]="'../../assets/images/' + number + '.jpg'"
                        alt="practice image"
                      />
                    </div>
                  </ng-template>
                </ngb-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5" id="about">
      <div class="row pt-5 pb-3" id="about-us">
        <h1>{{ 'ABOUT-US-TITLE' | translate }}</h1>
      </div>
      <div class="row pb-5">
        <div class="col">
          <p>{{ 'ABOUT-US' | translate }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private carouselConfig: NgbCarouselConfig
  ) {}

  ngOnInit(): void {
    this.carouselConfig.interval = 4000;
    this.carouselConfig.pauseOnHover = false;
    this.carouselConfig.keyboard = true;
  }
}
