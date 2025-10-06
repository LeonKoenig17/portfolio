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
      text: "Plan smarter and get more done with a visual Kanban board designed for simplicity and control. Create tasks, move them through stages, and watch your projects come to life.",
      gitLink: "https://github.com/LeonKoenig17/Join",
      liveLink: "https://join.leonk-thedev.com"
    },
    {
      image: "./assets/images/pokedex.png",
      title: "Pokedex",
      skills: "JavaScript | HTML | CSS",
      text: "Explore the world of Pokémon with this interactive Pokédex powered by the PokéAPI. Search for your favorite Pokémon and discover detailed stats, abilities, types, height, and more.",
      gitLink: "https://github.com/LeonKoenig17/Pokedex",
      liveLink: "http://pokedex.leonk-thedev.com"
    },
    {
      image: "./assets/images/los-virales.png",
      title: "Los Virales",
      skills: "JavaScript | HTML | CSS",
      text: "Experience a post-apocalyptic zombie survival game powered by object-oriented JavaScript. Defeat the hordes of undead and see if you can beat the game.",
      gitLink: "https://github.com/LeonKoenig17/Los-Virales",
      liveLink: "https://los-virales.leonk-thedev.com"
    }
  ]
}
