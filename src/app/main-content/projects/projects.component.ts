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
      text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      gitLink: "https://github.com/LeonKoenig17/Join",
      liveLink: "https://join-440.developerakademie.net/Join/board.html"
    },
    {
      image: "./assets/images/pokedex.png",
      title: "Pokedex",
      skills: "JavaScript | HTML | CSS",
      text: `Explore the full arsenal of the Pokémon card registry in detail. 
        This application uses data fetched from API's`,
      gitLink: "https://github.com/LeonKoenig17/Pokedex",
      liveLink: "http://leon-koenig.developerakademie.net/Pokedex/index.html"
    },
    {
      image: "./assets/images/los-virales.png",
      title: "Los Virales",
      skills: "JavaScript | HTML | CSS",
      text: `A little post-apocalyptic game that utilizes the principles 
        of object-orientation.`,
      gitLink: "https://github.com/LeonKoenig17/Los-Virales",
      liveLink: "https://leon-koenig.developerakademie.net/Los-Virales/index.html"
    }
  ]
}
