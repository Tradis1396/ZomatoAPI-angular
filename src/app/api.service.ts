import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HttpParams,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class APIService {
  apiKey: any = "684d2a36ccab2cee50c807e6b6275e21";
  constructor(private http: HttpClient) {}

  getZomatoAPI(searchQuery, count) {
    // console.log(city, "city from service");
    const param = new HttpParams();
    let header = new HttpHeaders({
      "user-key": `${this.apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/jsontext/plain"
    });

    return this.http.get(
      `https://developers.zomato.com/api/v2.1/search?entity_id=7&entity_type=city&q=${searchQuery}&start=1&count=${count}`,
      {
        headers: header,
        params: param
      }
    );
  }
}
