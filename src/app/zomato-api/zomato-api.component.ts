import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { APIService } from "../api.service";

@Component({
  selector: "app-zomato-api",
  templateUrl: "./zomato-api.component.html",
  styleUrls: ["./zomato-api.component.css"]
})
export class ZomatoAPIComponent {
  restaurantList: any[];

  constructor(private apiService: APIService, private http: HttpClient) {}
  ngOnInit() {
    this.search();
  }
  search(searchQuery = "briyani" , count = 10) {
    // console.log(searchQuery, "searchQuery from zomato api");

    this.apiService.getZomatoAPI(searchQuery, count).subscribe(data => {
      this.restaurantList = data["restaurants"];
      // console.log(data["restaurants"]);
    });
  }
}
