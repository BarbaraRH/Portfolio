import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  WORK: any[] = [];

  constructor(private _service: ProjectService) {
    this.WORK = _service.getWork();
  }

  ngOnInit() {
  }

}
