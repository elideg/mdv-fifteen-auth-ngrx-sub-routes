import { Shoe } from './shoe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://db-30x30.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
model = 'shoes'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(shoe: Shoe) {
    return this.httpClient.post(this.getUrl(), shoe);
  }

  delete(shoe: Shoe) {
    return this.httpClient.delete(this.getUrlForId(shoe.id));
  }

  update(shoe: Shoe) {
    return this.httpClient.put(this.getUrlForId(shoe.id), shoe);
  }
}
