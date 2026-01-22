import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Github, Linkedin, Home, FileText, Codepen } from 'angular-feather/icons';

const icons = {
  Github,
  Linkedin,
  Home,
  FileText,
  Codepen
}

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
