import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    {path: "", component: MainContentComponent},
    {path: "legal-notice", component: LegalNoticeComponent},
    {path: "impressum", component: ImpressumComponent},
];
