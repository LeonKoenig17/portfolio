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
      skills: "TypeScript | HTML | CSS | Firebase",
      text: "projects.join",
      gitLink: "https://github.com/LeonKoenig17/Join",
      liveLink: "https://join.leonk-thedev.com"
    },
    {
      image: "./assets/images/pokedex.png",
      title: "Pokedex",
      skills: "JavaScript | HTML | CSS",
      text: "projects.pokedex",
      gitLink: "https://github.com/LeonKoenig17/Pokedex",
      liveLink: "http://pokedex.leonk-thedev.com"
    },
    {
      image: "./assets/images/los-virales.png",
      title: "Los Virales",
      skills: "JavaScript | HTML | CSS",
      text: "projects.los-virales",
      gitLink: "https://github.com/LeonKoenig17/Los-Virales",
      liveLink: "https://los-virales.leonk-thedev.com"
    }
  ]
}
