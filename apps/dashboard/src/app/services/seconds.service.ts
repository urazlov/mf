import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DataService } from '@ng-mf/shared-services';
import { Observable } from 'rxjs';

@Injectable()
export class SecondPageService implements DataService {
  private http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v3.1/all');
  }
}
