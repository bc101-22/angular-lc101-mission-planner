import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  selected: boolean = false;

  selectedAstronaut = null;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', yearsOfExperience: 1},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', yearsOfExperience: 2},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', yearsOfExperience: 3},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', yearsOfExperience: 4},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', yearsOfExperience: 5},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', yearsOfExperience: 6},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', yearsOfExperience: 7}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object) :void {
    let alreadyEnrolled = false;

    for(let i = 0; i < this.crew.length; i++){
      if(candidate.name === this.crew[i].name){ //candidate is already part of the crew
        let idx = this.crew.indexOf(candidate);
        this.crew.splice(idx, 1); //remove the candidate from the crew array
        alreadyEnrolled = true;
      }
    }

    if (!alreadyEnrolled && this.crew.length < 3) {
      this.crew.push(candidate);
    }
  }

  enrolled(candidate: object){
    return this.crew.includes(candidate);
  }

  getCrewStatus(){
    if(this.crew.length >= 3){
      return "Crew Full";
    }
    return "Crew";
  }
}
