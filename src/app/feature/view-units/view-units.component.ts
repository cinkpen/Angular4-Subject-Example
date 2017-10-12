import { Component, OnInit } from '@angular/core';
import { UnitsService } from "app/feature/view-units/units.service";
import { Unit } from "app/models/unit";

@Component({
  selector: 'app-view-units',
  templateUrl: './view-units.component.html',
  styleUrls: ['./view-units.component.css']
})
export class ViewUnitsComponent implements OnInit {

  constructor(private unitsService:UnitsService) { }
  units: Unit[] = [];
  selectedUnit: Unit = null;

  ngOnInit() {
    this.unitsService.units.subscribe(units=>this.units = units);
  }


  onChanged(selectedItem){
    //You will notice that both selectedItem and this.selectedUnit are the new value
    console.log(selectedItem.name, this.selectedUnit.name);
  }
}
