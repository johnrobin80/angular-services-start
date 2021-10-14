import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor() {}

  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];
}
