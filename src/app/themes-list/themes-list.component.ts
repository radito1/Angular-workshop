import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/themes';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themeList: Theme[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themeList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    });
  }
}