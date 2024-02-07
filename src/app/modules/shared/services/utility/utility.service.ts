import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  appendDomainToEndpoints(endPoints, baseUrl: string = environment.domain) {
    const appendedEndpoints = {...endPoints}
      for(const endpoints in appendedEndpoints) {
        appendedEndpoints[endpoints] = baseUrl + endPoints[endpoints]
      }
      return appendedEndpoints
  }
}
