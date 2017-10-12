import { Injectable } from '@angular/core';
import { MockHttpService } from "app/core/mock-http.service";
import { Subject } from "rxjs/Subject";
import { Unit } from "app/models/unit";

@Injectable()
export class UnitsService {

  constructor(private mockHttpService: MockHttpService) {
    this.get();
  }
  public units: Subject<Unit[]> = new Subject<Unit[]>();

  private get() {
    this.mockHttpService.getUnits().then(units => {
      this.units.next(units);
    })
  }


}
