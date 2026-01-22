import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Resume } from './resume/resume';
import { Projects } from './projects/projects';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full'},
    { path: 'resume', component: Resume },
    { path: 'projects', component: Projects },
];
