import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service';
import { Subscription } from 'rxjs';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    LandingPageComponent, WhyMeComponent, SkillsComponent, 
    ProjectsComponent, ReferencesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit, OnDestroy{
  private scrollSub!: Subscription;

  constructor(private scrollService: ScrollService){}

  ngOnInit() {
    this.scrollSub = this.scrollService.scrollTarget$.subscribe(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
  }
}
