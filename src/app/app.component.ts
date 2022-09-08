import { Component, OnInit } from '@angular/core';
import { AppConfig, ConfigService } from '../_shared/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'env-provider-app';

  config!: AppConfig;

  constructor(
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
      this.config = this.configService.get();
      console.log(this.config);
  }

}
