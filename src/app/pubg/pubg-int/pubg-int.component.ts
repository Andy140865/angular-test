import { Component } from '@angular/core';
import { ProfilePubgService } from '../../data/ProfilePubgService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pubg-int',
  imports: [FormsModule, CommonModule],
  templateUrl: './pubg-int.component.html',
  styleUrl: './pubg-int.component.scss'
})
export class PubgIntComponent {
  playerName: string = '';
  profiles: any[] = [];
data: any;

  constructor(private profilePubgService: ProfilePubgService) {}

  fetchProfile() {
    // Проверяем, что поле не пустое
    if (!this.playerName || this.playerName.trim().length === 0) {
      alert('Введите имя игрока!');
      return;
    }
  
    this.profilePubgService.getProfilePubg(this.playerName).subscribe(
      (data: any) => {
        console.log('Ответ API:', data); // Проверьте структуру в консоли
  
        if (data?.data && Array.isArray(data.data)) {
          this.profiles = data.data; // Присваиваем массив
        } else {
          console.error("Ошибка: API вернул некорректный ответ");
          this.profiles = []; // Защита от ошибки
        }
      },
      (error) => {
        console.error('Ошибка API:', error);
        alert('Не удалось загрузить данные');
      }
    );
  }
  
}