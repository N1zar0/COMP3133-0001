import { Component, Input } from '@angular/core';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent {
  @Input() mission: Mission;

  constructor() {
    this.mission = {} as Mission; 
  }
}
