import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
                      ariaLabel="facebook"
                      size="xs"
                      color="app-dropdown"
                      icon="bi bi-facebook"
                      href="https://www.facebook.com/profile.php?id=100090341491391"
                      target="_blank"
                      [disableOnMobile]="true"
                    ></app-button>
                  </div>
                  <div class="dropdown">
                    <app-button
                      ariaLabel="language"
                      size="xs"
                      color="app-dropdown"
                      icon="bi bi-translate"
                      [label]="'LANGUAGE' | translate"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      [disableOnMobile]="true"
                    ></app-button>
                    <ul class="dropdown-menu">
                      <li>
                        <button
                          aria-label="nl language"
                          class="dropdown-item"
                          (click)="changeLanguage('nl')"
                        >
                          Nederlands
                        </button>
                      </li>
                      <li>
                        <button
                          aria-label="fr language"
                          class="dropdown-item"
                          (click)="changeLanguage('fr')"
                        >
                          Français
                        </button>
                      </li>
                      <li>
                        <button
                          aria-label="en language"
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
              aria-label="home"
              [href]="this.currentLanguage + '/home'"
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
                  aria-label="services"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="services"
                  >{{ 'NAV_SERVICES' | translate }}</a
                >
              </li>
              <li>
                <a
                  aria-label="practice"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="practice"
                  >{{ 'NAV_PRACTICE' | translate }}</a
                >
              </li>
              <li *ngIf="show">
                <a
                  aria-label="about us"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="about-us"
                  >{{ 'ABOUT-US-TITLE' | translate }}</a
                >
              </li>
              <li *ngIf="show">
                <a
                  aria-label="team"
                  [routerLink]="[this.currentLanguage, 'team']"
                  >{{ 'NAV_TEAM' | translate }}</a
                >
              </li>
              <li>
                <a
                  aria-label="photos"
                  [routerLink]="[this.currentLanguage, 'photos']"
                  >{{ 'NAV_PICTURES' | translate }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="btn-group">
              <app-button
                ariaLabel="appointment button"
                size="sm"
                color="primary"
                [label]="'NAV_APPOINTMENT' | translate"
                [href]="appointmentUrl"
                target="_blank"
                icon="bi bi-calendar3"
              ></app-button>
            </div>
          </div>
        </div>
        <div class="row sm-screen">
          <div class="col-2">
            <app-button
              ariaLabel="appointment button"
              size="md"
              color="primary"
              [href]="this.currentLanguage + '/home'"
              icon="bi bi-house-fill"
            ></app-button>
          </div>
          <div class="col-1"></div>
          <div class="col-9">
            <div class="btn-group">
              <app-button
                ariaLabel="appointment button"
                size="md"
                color="primary"
                icon="bi bi-calendar3"
                [label]="'APPOINTMENT' | translate"
                [href]="appointmentUrl"
                target="_blank"
                class="appointment_button"
              ></app-button>
              <app-button
                *ngIf="!collapsed"
                ariaLabel="not collapsed button"
                size="md"
                color="primary"
                icon="bi bi-list"
                (click)="toggleCollapsed()"
              ></app-button>
              <app-button
                *ngIf="collapsed"
                ariaLabel="collapsed button"
                size="md"
                color="primary"
                icon="bi bi-x"
                (click)="toggleCollapsed()"
              ></app-button>
            </div>
          </div>
        </div>
        <div *ngIf="collapsed" class="row sm-screen collapsable-section">
          <div class="col-md-12">
            <ul>
              <li (click)="toggleCollapsed('home', 'services')">
                <button aria-label="services">
                  {{ 'NAV_SERVICES' | translate }}
                </button>
                <i class="bi bi-arrow-right"></i>
              </li>
              <li (click)="toggleCollapsed('home', 'practice')">
                <button aria-label="practice">
                  {{ 'NAV_PRACTICE' | translate }}
                </button>
                <i class="bi bi-arrow-right"></i>
              </li>
              <li *ngIf="show" (click)="toggleCollapsed('home', 'about-us')">
                <button aria-label="about us">
                  {{ 'ABOUT-US-TITLE' | translate }}
                </button>
                <i class="bi bi-arrow-right"></i>
              </li>
              <li *ngIf="show" (click)="toggleCollapsed('team')">
                <button aria-label="team">
                  {{ 'NAV_TEAM' | translate }}
                </button>
                <i class="bi bi-arrow-right"></i>
              </li>
              <li (click)="toggleCollapsed('photos')">
                <button aria-label="photos">
                  {{ 'NAV_PICTURES' | translate }}
                </button>
                <i class="bi bi-arrow-right"></i>
              </li>
              <li>
                <a aria-label="appointment" [href]="appointmentUrl">
                  {{ 'NAV_APPOINTMENT' | translate }}
                </a>
                <i class="bi bi-arrow-right"></i>
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
        <div class="row pt-5">
          <div class="col">
            <ul>
              <li>
                <a
                  aria-label="home"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="top"
                  >Home</a
                >
              </li>
              <li>
                <a
                  aria-label="services"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="services"
                  >{{ 'NAV_SERVICES' | translate }}</a
                >
              </li>
              <li>
                <a
                  aria-label="practice"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="practice"
                  >{{ 'NAV_PRACTICE' | translate }}</a
                >
              </li>
              <li *ngIf="show">
                <a
                  aria-label="about us"
                  [routerLink]="[this.currentLanguage, 'home']"
                  fragment="about-us"
                  >{{ 'ABOUT-US-TITLE' | translate }}</a
                >
              </li>
              <li *ngIf="show">
                <a
                  aria-label="team"
                  [routerLink]="[this.currentLanguage, 'team']"
                  >{{ 'NAV_TEAM' | translate }}</a
                >
              </li>
              <li>
                <a
                  aria-label="photos"
                  [routerLink]="[this.currentLanguage, 'photos']"
                  >{{ 'NAV_PICTURES' | translate }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="row pt-3 pb-4">
          <div class="col">
            <span>Copyright 2023 - DAP Aniwell</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  show = false;
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
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('nl');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'DAP Aniwell is een dierenarts in voor de regio Buggenhout, Lebbeke, Dendermonde, Puurs, Opwijk en Merchtem. DAP Aniwell staat paraat voor de nodige zorgen voor je geliefde huisdier. Het adres van de dierenartsenpraktijk is krapstraat 137, buggenhout. Je kan ons 24/7 bereiken op het nummer 052 35 14 14. ',
      },
      { name: 'author', content: 'Arne Mergan' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
    ]);
    this.title.setTitle(
      'Dierenarts regio Buggenhout, Lebbeke, Dendermonde, Puurs, Opwijk en Merchtem | DAP Aniwell'
    );
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((x) => x?.['url']),
        take(1)
      )
      .subscribe((event) => {
        const language = event?.['url']?.split('/')[1];
        if (language) {
          this.useLanguage(language);
        }
      });
  }

  toggleCollapsed(route: string, fragment: string) {
    if (route) {
      this.router.navigate([this.currentLanguage, route], { fragment });
    }
    this.collapsed = !this.collapsed;
  }

  changeLanguage(language: string) {
    this.router.navigate([language, this.router.url.split('/')[2]]);
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
