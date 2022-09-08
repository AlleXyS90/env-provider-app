import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuration!: AppConfig;

  constructor(private http: HttpClient) {}

  init(): Promise<AppConfig | undefined> {
    return this.http
      .get<AppConfig | undefined>('./app-config.json')
      .toPromise()
      .then(config => {
        console.log('config service initialization');
        console.log(config);
        
        if (typeof config !== 'undefined') {
          this.configuration = config;
        }

        return config;
      });
  }

  get(): AppConfig {
    return this.configuration;
  }
}

export interface AppConfig {
  url: string;
  production: boolean;
  errorRoute: string;
  redirectionUrl: string;
  user: string;
  sessionId: string;
}
