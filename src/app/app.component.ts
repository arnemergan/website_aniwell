import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="fixed-top">
      <div class="container-fluid top-section">
        <div class="row">
          <div class="col-lg-12">
            <div class="container">
              <div class="row">
                <div class="col-5"></div>
                <div class="col-7">
                  <div class="dropdown">
                    <app-button
                      size="xs"
                      color="app-dropdown"
                      icon="bi bi-translate"
                      [label]="'LANGUAGE' | translate"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></app-button>
                    <ul class="dropdown-menu">
                      <li>
                        <button
                          class="dropdown-item"
                          (click)="useLanguage('nl')"
                        >
                          Nederlands
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          (click)="useLanguage('fr')"
                        >
                          Français
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          (click)="useLanguage('en')"
                        >
                          English
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container bottom-section">
        <div class="row lg-screen">
          <div class="col-md-4">
            <a routerLink="home" fragment="top" class="home-link">
              {{ 'ANIWELL' | translate }}
            </a>
          </div>
          <div class="col-md-4">
            <ul>
              <li>
                <a routerLink="home" fragment="services">{{
                  'NAV_SERVICES' | translate
                }}</a>
              </li>
              <li>
                <a routerLink="home" fragment="practice">{{
                  'NAV_PRACTICE' | translate
                }}</a>
              </li>
              <li>
                <a routerLink="home" fragment="about-us">{{
                  'ABOUT-US-TITLE' | translate
                }}</a>
              </li>
              <li>
                <a routerLink="team">{{ 'NAV_TEAM' | translate }}</a>
              </li>
              <li>
                <a routerLink="photos">{{ 'NAV_PICTURES' | translate }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="btn-group">
              <app-button
                size="xs"
                color="outline-primary"
                [label]="'NAV_APPOINTMENT' | translate"
                [href]="appointmentUrl"
                target="_blank"
                icon="bi bi-calendar3"
              ></app-button>
              <app-button
                size="xs"
                color="primary"
                [label]="'NAV_PHONE_NUMBER' | translate"
                [href]="'tel:' + ('NAV_PHONE_NUMBER' | translate)"
                icon="bi bi-telephone-fill"
              ></app-button>
            </div>
          </div>
        </div>
        <div class="row sm-screen">
          <div class="col-4">
            <a routerLink="home" fragment="top" class="home-link">
              {{ 'ANIWELL' | translate }}
            </a>
          </div>
          <div class="col-4"></div>
          <div class="col-4">
            <div class="btn-group">
              <app-button
                size="xs"
                color="outline-primary"
                icon="bi bi-calendar3"
                [href]="appointmentUrl"
                target="_blank"
              ></app-button>
              <app-button
                size="xs"
                color="outline-primary"
                icon="bi bi-telephone-fill"
                [href]="'tel:' + ('NAV_PHONE_NUMBER' | translate)"
              ></app-button>
              <app-button
                size="lg"
                color="outline-primary"
                icon="bi bi-list"
                (click)="toggleCollapsed()"
              ></app-button>
            </div>
          </div>
        </div>
        <div *ngIf="collapsed" class="row sm-screen collapsable-section">
          <div class="col-md-12">
            <ul>
              <li>
                <a routerLink="home" fragment="services">{{
                  'NAV_SERVICES' | translate
                }}</a>
              </li>
              <li>
                <a routerLink="home" fragment="practice">{{
                  'NAV_PRACTICE' | translate
                }}</a>
              </li>
              <li>
                <a routerLink="home" fragment="about-us">{{
                  'ABOUT-US-TITLE' | translate
                }}</a>
              </li>
              <li>
                <a routerLink="team">{{ 'NAV_TEAM' | translate }}</a>
              </li>
              <li>
                <a routerLink="photos">{{ 'NAV_PICTURES' | translate }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid main-container">
      <div class="row">
        <div class="col">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row pt-4 pb-4">
          <div class="col">
            <a routerLink="home" fragment="top">
              {{ 'ANIWELL' | translate }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  collapsed: boolean = false;
  appointmentUrl =
    'https://secure.vetcloud.be/api/booking/create/d8e756b1-4b86-4cb3-9246-5bfbf99559e1';

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('nl');
    this.useLanguage('nl');
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  useLanguage(language: 'nl' | 'en' | 'fr') {
    this.translateService.use(language);
  }
}
