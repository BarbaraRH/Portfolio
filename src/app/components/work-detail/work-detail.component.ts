import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {

  WORK = [
    { project: "Project 1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates." },
    { project: "Project 2", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates." },
    { project: "Project 3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates." },
  ]

  constructor() { }

  ngOnInit() {
  }

}
