import { Component, Input } from "@angular/core";
import { AccountService } from "../account.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //  id: number;
  //  newStatus: string;
  // }>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // console.log("A server status changed, new status: " + status);
    // this.loggingService.logStatusChange(status);
  }
}
