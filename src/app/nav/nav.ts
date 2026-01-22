import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [IconsModule, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
}
