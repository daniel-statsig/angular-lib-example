import { Injectable } from "@angular/core";
import { StatsigClient } from "@statsig/js-client";

@Injectable({
  providedIn: "root",
})
export class MyLibService {
  private statsigClient: StatsigClient;

  constructor() {
    this.statsigClient = new StatsigClient(
      "client-rfLvYGag3eyU0jYW5zcIJTQip7GXxSrhOFN69IGMjvq",
      {}
    );
  }

  public start(): void {
    this.statsigClient
      .initializeAsync()
      .then(() => {
        console.log("Done");
      })
      .catch(console.error);
  }
}
