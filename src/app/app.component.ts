import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, take } from 'rxjs';

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
                      icon="bi bi-facebook"
                      label="facebook"
                      href="https://www.facebook.com/profile.php?id=100090341491391"
                      target="_blank"
                    ></app-button>
                  </div>
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
                          (click)="changeLanguage('nl')"
                        >
                          Nederlands
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          (click)="changeLanguage('fr')"
                        >
                          Français
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          (click)="changeLanguage('en')"
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
            <a
              routerLinkActive="active"
              [routerLink]="[this.currentLanguage, 'home']"
              fragment="top"
              class="home-link"
            >
              {{ 'ANIWELL' | translate }}
            </a>
          </div>
          <div class="col-md-4">
            <ul>
              <li>
                <a
                  routerLinkActive="active"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="services"
                  >{{ 'NAV_SERVICES' | translate }}</a
                >
              </li>
              <li>
                <a
                  routerLinkActive="active"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="practice"
                  >{{ 'NAV_PRACTICE' | translate }}</a
                >
              </li>
              <li>
                <a
                  routerLinkActive="active"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="about-us"
                  >{{ 'ABOUT-US-TITLE' | translate }}</a
                >
              </li>
              <li>
                <a
                  routerLinkActive="active"
                  [routerLink]="[this.currentLanguage, 'team']"
                  >{{ 'NAV_TEAM' | translate }}</a
                >
              </li>
              <li>
                <a
                  routerLinkActive="active"
                  [routerLink]="[this.currentLanguage, 'photos']"
                  >{{ 'NAV_PICTURES' | translate }}</a
                >
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
            <a
              [routerLink]="[this.currentLanguage, 'home']"
              fragment="top"
              class="home-link"
            >
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
                *ngIf="!collapsed"
                size="lg"
                color="outline-primary"
                icon="bi bi-list"
                (click)="toggleCollapsed()"
              ></app-button>
              <app-button
                *ngIf="collapsed"
                size="lg"
                color="outline-primary"
                icon="bi bi-x"
                (click)="toggleCollapsed()"
              ></app-button>
            </div>
          </div>
        </div>
        <div *ngIf="collapsed" class="row sm-screen collapsable-section">
          <div class="col-md-12">
            <ul>
              <li>
                <a (click)="toggleCollapsed('home', 'services')">{{
                  'NAV_SERVICES' | translate
                }}</a>
              </li>
              <li>
                <a (click)="toggleCollapsed('home', 'practice')">{{
                  'NAV_PRACTICE' | translate
                }}</a>
              </li>
              <li>
                <a (click)="toggleCollapsed('home', 'about-us')">{{
                  'ABOUT-US-TITLE' | translate
                }}</a>
              </li>
              <li>
                <a (click)="toggleCollapsed('team')">{{
                  'NAV_TEAM' | translate
                }}</a>
              </li>
              <li>
                <a (click)="toggleCollapsed('photos')">{{
                  'NAV_PICTURES' | translate
                }}</a>
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
            <a (click)="scrollToTop()">
              {{ 'DAP_ANIWELL' | translate }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  collapsed: boolean = false;
  appointmentUrl =
    'https://secure.vetcloud.be/api/booking/create/d8e756b1-4b86-4cb3-9246-5bfbf99559e1';
  languages: [
    { label: 'English'; value: 'en' },
    { label: 'nederlands'; value: 'nl' },
    { label: 'Français'; value: 'fr' }
  ];
  currentLanguage: string = 'nl';

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('nl');
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((x) => x?.['url']),
        take(1)
      )
      .subscribe((event) => {
        this.useLanguage(event?.['url']?.split('/')[1]);
      });
  }

  toggleCollapsed(route: string, fragment: string) {
    if (route) {
      this.router.navigate([this.currentLanguage, route], { fragment });
    }
    this.collapsed = !this.collapsed;
  }

  changeLanguage(language: string) {
    this.router.events
      .pipe(
        filter((x) => x?.['url']),
        take(1)
      )
      .subscribe((event) => {
        this.router.navigate([language, event?.['url']?.split('/')[2]]);
      });
    this.useLanguage(language);
  }

  useLanguage(language: string) {
    this.currentLanguage = language;
    this.translateService.use(language);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
