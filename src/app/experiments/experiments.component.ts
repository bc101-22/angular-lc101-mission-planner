import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"}
  ];

  experimentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string){
    this.experiments.push({name: experimentName});
  }

  remove(experiment: object) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: object) {
    this.experimentBeingEdited = experiment;
  }

  save(experimentName: string, experiment: object){
    experiment['name'] = experimentName;
    this.experimentBeingEdited = null;
  }

}
