import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  template: `<app-container>
      <app-row>
        <div class="col-lg-3">
          <h3>Welkom bij</h3>
          <h1>DAP ANIWELL</h1>
          <p></p>
        </div>
        <div class="col-lg-9"></div>
      </app-row>
    </app-container>
    <app-container>
      <app-row>
        <h2>Onze diensten</h2>
      </app-row>
      <app-row>
        <div class="col-md-4"></div>
        <div class="col-md-8"></div>
      </app-row>
      <app-row>
        <div class="col-md-8"></div>
        <div class="col-md-4"></div>
      </app-row>
    </app-container>
    <app-container>
      <app-row>
        <h2>Ons team</h2>
      </app-row>
      <app-row>
        <div class="col-md-6"></div>
        <div class="col-md-6"></div>
      </app-row>
    </app-container>
    <app-container>
      <app-row>
        <div class="col-md-3"><h2>Onze praktijk</h2></div>
        <div class="col-md-9"></div>
      </app-row>
    </app-container> `,
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
  }
}
