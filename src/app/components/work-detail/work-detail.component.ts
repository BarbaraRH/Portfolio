import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
/* import { WorkComponent } from '../work/work.component'; */


@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {

  WORK: any[] = [];

  constructor(private route: ActivatedRoute, private _service: ProjectService) {
    this.route.params.subscribe(params => {
      console.log(params['project'])
      this.WORK = this._service.getProject(params['project'])
    })
  }

  ngOnInit() {

  }

}
