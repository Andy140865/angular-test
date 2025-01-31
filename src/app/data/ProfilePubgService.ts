import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfilePubgService {

  http = inject(HttpClient);

  baseUrl = 'https://api.pubg.com/shards/steam';
  apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNWQ2NTlkMC1iZmRmLTAxM2QtMmQ1Yy03MmJhZWJkZGQ4YjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzM4MDk0MTEyLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1lZjU4NjhhZS00YzJjLTQ2ZGEtODY4ZC1iODlhNGEyNDVmYmQifQ.UfYhvD8Csu4UdjDPddv-VH_qF1U427ncPguNrMaFBos';
  playerName: string = '';
  constructor() { }

  gameUrl = 'https://api.pubg.com/shards/steam/matches/';
  matchId: string = '';

  // Добавляем заголовки
    headers = new HttpHeaders({
    Authorization: `Bearer ${this.apiKey}`,
    Accept: 'application/vnd.api+json',
  });
  

  getProfilePubg(playerName: string) {
    return this.http.get(`${this.baseUrl}/players?filter[playerNames]=${playerName}`, { headers: this.headers });
  }
  getMatchPubg(matchId: string) {
    return this.http.get(`${this.gameUrl}${matchId}`);
  }
}
