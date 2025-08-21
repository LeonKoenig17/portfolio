import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      image: "./assets/images/join.png",
      title: "Join",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
    },
    {
      image: "./assets/images/join.png",
      title: "Pokedex",
      skills: "JavaScript | HTML | CSS",
      text: `
        Explore the full arsenal of the Pokémon card registry in detail. 
        This application uses data fetched from API's`
    },
    {
      image: "./assets/images/join.png",
      title: "Los Virales",
      skills: "JavaScript | HTML | CSS",
      text: `
        A little post-apocalyptic game that uses the principles of object-orientation.`
    }
  ]
}
