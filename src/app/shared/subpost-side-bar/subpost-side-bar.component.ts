import { Component, OnInit } from '@angular/core';
import { SubpostService } from 'src/app/subpost/subpost.service';
import { SpaceWikiModel } from 'src/app/subpost/subpost-response';

@Component({
  selector: 'app-subpost-side-bar',
  templateUrl: './subpost-side-bar.component.html',
  styleUrls: ['./subpost-side-bar.component.css']
})
export class SubpostSideBarComponent implements OnInit {
  subposts: Array<SpaceWikiModel> = [];
  displayViewAll: boolean;

  constructor(private subpostService: SubpostService) {
    this.subpostService.getAllSubposts().subscribe(data => {
      if (data.length > 3) {
        this.subposts = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subposts = data;
      }
    });
  }

  ngOnInit(): void { }

}
