import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from 'src/_shared/config.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  redirectionUrl!: string;

  constructor(
    private configService: ConfigService
    ) { }

  ngOnInit(): void {
    this.redirectionUrl = this.configService.get().redirectionUrl;
  }

}
