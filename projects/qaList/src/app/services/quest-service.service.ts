import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestServiceService {

  b4aServerUrl = 'https://lang-resources.b4a.io';
  b4aAppId_hmTest = 'a7Ks26xEic6sbrcqW0QQTdDwnnRyLF27rJBykcpv';
  b4aJsKey = 'pOC5gubX9ZQ9QRfeYHjxjm5g6PwP5Y9SC2pR51k4';

  constructor(private httpClient: HttpClient) { }

  public getAllQuests() {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.httpClient.request('GET', this.b4aServerUrl, {responseType: 'json', params });
  }

}
