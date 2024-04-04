import { Component } from '@angular/core';
import { SpaceXService } from '../network/spacex.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionFilterComponent {
  selectedYear: number = 2010; 

  constructor(private spaceXService: SpaceXService) { }

  filterMissionsByYear(): void {
    if (this.selectedYear) {
      this.spaceXService.getMissionsByYear(this.selectedYear).subscribe((data) => {
      });
    }
  }
}
