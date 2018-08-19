import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private httpClient: HttpClient) {
  }

  getSettings(): Promise<any> {
    return this.httpClient.get(`https://api.github.com/users/flyzsd`).toPromise();
  }
}
