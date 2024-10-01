import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataService {
  getData(): Observable<any[]>;
}

export const DATA_SERVICE_TOKEN = new InjectionToken<DataService>(
  'DATA_SERVICE_TOKEN'
);
