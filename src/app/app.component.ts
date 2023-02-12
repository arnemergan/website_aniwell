import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="fixed-top">
      <app-container size="fluid" class="top-section">
        <app-row>
          <div class="col-lg-12">
            <app-container>
              <app-row>
                <div class="col">
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
              </app-row>
            </app-container>
          </div>
        </app-row>
      </app-container>
      <app-container class="bottom-section">
        <app-row class="lg-screen">
          <div class="col-md-3">
            <a routerLink="home" fragment="top">
              {{ 'ANIWELL' | translate }}
            </a>
          </div>
          <div class="col-md-6">
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
          <div class="col-md-3">
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
        </app-row>
        <app-row class="sm-screen">
          <div class="col-3">
            <a routerLink="home">
              {{ 'ANIWELL' | translate }}
            </a>
          </div>
          <div class="col-6"></div>
          <div class="col-3">
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
        </app-row>
        <app-row *ngIf="collapsed" class="sm-screen">
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
        </app-row>
      </app-container>
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
