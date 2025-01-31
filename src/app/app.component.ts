import { Component, inject } from '@angular/core';
import { PubgIntComponent } from "./pubg/pubg-int/pubg-int.component";
import { ProfilePubgService } from './data/ProfilePubgService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [PubgIntComponent, CommonModule, FormsModule]
})
export class AppComponent {
  profilePubg = inject(ProfilePubgService)
  profiles = []

  profileMatchPubg = inject(ProfilePubgService)
  profilesMatch = []

  constructor() {
    this.profilePubg.getProfilePubg('playerName').subscribe((data: any) => {
      this.profiles = data;
    });
  } 
}
