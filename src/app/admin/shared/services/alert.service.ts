import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

export enum AlertType {success = 'success', warning = 'warning', danger = 'danger'};

export interface Alert {
  type: AlertType
  text: string

}

@Injectable()
export class AlertService {
  public alert$: Subject<Alert> = new Subject<Alert>();

  success(text: string) {
    this.alert$.next({type: AlertType.success, text});
  }

  warning(text: string) {
    this.alert$.next({type: AlertType.warning, text});
  }

  danger(text: string) {
    this.alert$.next({type: AlertType.danger, text});
  }
}
