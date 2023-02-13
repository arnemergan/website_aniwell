import { Component, OnInit } from '@angular/core';
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
                        <a
                          class="dropdown-item"
                          [routerLink]="['/', 'nl', 'home']"
                          >Nederlands</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          [routerLink]="['/', 'fr', 'home']"
                          >Français</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          [routerLink]="['/', 'en', 'home']"
                          >English</a
                        >
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
            <a routerLink="home" fragment="top">
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
                <a>{{ 'NAV_PRACTICE' | translate }}</a>
              </li>
              <li>
                <a>{{ 'NAV_TEAM' | translate }}</a>
              </li>
              <li>
                <a>{{ 'NAV_PICTURES' | translate }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="btn-group">
              <app-button
                size="xs"
                color="outline-primary"
                [label]="'NAV_APPOINTMENT' | translate"
                icon="bi bi-calendar3"
              ></app-button>
              <app-button
                size="xs"
                color="primary"
                [label]="'NAV_PHONE_NUMBER' | translate"
                icon="bi bi-telephone-fill"
              ></app-button>
            </div>
          </div>
        </div>
        <div class="row sm-screen">
          <div class="col-4">
            <a routerLink="home">
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
              ></app-button>
              <app-button
                size="xs"
                color="outline-primary"
                icon="bi bi-telephone-fill"
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
                <a>{{ 'NAV_SERVICES' | translate }}</a>
              </li>
              <li>
                <a>{{ 'NAV_PRACTICE' | translate }}</a>
              </li>
              <li>
                <a>{{ 'NAV_TEAM' | translate }}</a>
              </li>
              <li>
                <a>{{ 'NAV_PICTURES' | translate }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  collapsed: boolean = false;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.setDefaultLang('nl');
    this.translateService.use('nl');
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
