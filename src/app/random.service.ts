import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class RandomService {
  constructor(private _http: HttpClient) { }
}
