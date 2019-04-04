import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  WORK: any[] = [
    {
      project: "Project1",
      src: "/assets/business-news.jpg",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates."
    },
    {
      project: "Project2",
      src: "/assets/notes-app.jpg",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam."
    },
    {
      project: "Project3",
      src: "/assets/webpage-car.jpg",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex enim mollitia assumenda, voluptate, veniam reiciendis, alias quidem laborum deleniti sit! Similique obcaecati magnam laudantium alias aliquam ipsa non voluptates."
    },
  ]

  constructor() { console.log('funcionando servicio') }

  getWork() {
    return this.WORK;
  }

  getProject(project: any) {
    return this.WORK[project];
  }
}
