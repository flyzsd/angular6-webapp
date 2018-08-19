import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private httpClient: HttpClient) {
  }

  getSettings(): Promise<any> {
    console.log(`environment.production = ${environment.production}`);
    return this.httpClient.get(`https://api.github.com/users/flyzsd`).toPromise();
  }
}
