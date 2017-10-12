import { Injectable } from '@angular/core';
import { Unit } from "app/models/unit";

@Injectable()
export class MockHttpService {

  constructor() { }

  getUnits():Promise<Unit[]>{
    /*
      This method simulates a VERY slow HTTP session by returning data after 1 second of being called.
    */
    let prom = new Promise<Unit[]>((resolve, reject)=>{


      setTimeout( ()=>{
        var units = [
          new Unit(1, "degC"),
          new Unit(2, "degF"),
          new Unit(3, "%"),
          new Unit(4, "kW"),
          new Unit(5, "kWh")];
        resolve(units);
        }, 3000);
    });

    return prom;
  }

}
