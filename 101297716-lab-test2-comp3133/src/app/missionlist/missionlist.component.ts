import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../network/spacex.service';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getAllMissions().subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }
}
