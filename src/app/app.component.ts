import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `<nav>
      <app-container>
        <app-row class="lg-screen">
          <div class="col-md-3">
            <a routerLink="home">
              {{ 'ANIWELL' | translate }}
            </a>
          </div>
          <div class="col-md-6">
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
    <router-outlet></router-outlet> `,
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
