import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;

  constructor() { }

  ngOnInit() { }

  // Code your addItem function here:
  addItem(equipment: object) {
    if (this.cargoHold.indexOf(equipment) === this.cargoHold.lastIndexOf(equipment)) {
      this.cargoHold.push(equipment);
      this.cargoMass += equipment.mass;
    }

    if (this.maximumAllowedMass - this.cargoMass < 200) {
      return false;
    }
    return true;
  }

  removeItem(equipment: object){
    if(this.cargoHold.includes(equipment)){
      let idx = this.cargoHold.indexOf(equipment);
      this.cargoHold.splice(idx, 1);
      this.cargoMass -= equipment.mass;
    }
  }

  addDisabled(equipment: object) {
    //  cargoHold.length === maxItems || item.mass + cargoMass > maximumAllowedMass
    if (this.cargoHold.length === this.maxItems 
      || equipment.mass + this.cargoMass > this.maximumAllowedMass
      || this.cargoHold.indexOf(equipment) !== this.cargoHold.lastIndexOf(equipment) //Don't allow more than two of the same item in the cargo hold
      ) {
      return true;
    }
    return false;
  }

  nearMaxMass() {
    return this.maximumAllowedMass - this.cargoMass < 200;
  }

  remainingMassBudget() {
    return this.maximumAllowedMass - this.cargoMass;
  }

  emptyCargoHold() {
    this.cargoHold = [];
    this.cargoMass = 0;
  }
}
