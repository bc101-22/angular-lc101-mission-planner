import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: object[] = [
    {name: "Habitat dome"}, 
    {name: "Drones"},
    {name: "Food containers"}, 
    {name:"Oxygen tanks"}
  ];

  equipmentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string){
    this.equipments.push({name: equipmentName});
  }

  remove(equipment: object) {
    let index = this.equipments.indexOf(equipment);
    this.equipments.splice(index, 1);
  }

  edit(equipment: object) {
    this.equipmentBeingEdited = equipment;
  }

  save(equipmentName: string, equipment: object){
    equipment['name'] = equipmentName;
    this.equipmentBeingEdited = null;
  }
}
