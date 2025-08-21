import { Component } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SingleSkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {img: "./assets/images/angular.png", text: "Angular"},
    {img: "./assets/images/typescript.png", text: "Typescript"},
    {img: "./assets/images/javascript.png", text: "JavaScript"},
    {img: "./assets/images/html.png", text: "HTML"},
    {img: "./assets/images/css.png", text: "CSS"},
    {img: "./assets/images/rest-api.png", text: "REST-API"},
    {img: "./assets/images/firebase.png", text: "Firebase"},
    {img: "./assets/images/git.png", text: "Git"},
    {img: "./assets/images/scrum.png", text: "Scrum"},
    {img: "./assets/images/material-design.png", text: "Material\ndesign"},
    {img: "./assets/images/challenge-me.png", text: "Challenge\nme"}
  ]
}
