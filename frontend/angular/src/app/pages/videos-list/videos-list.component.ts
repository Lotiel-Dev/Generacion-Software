import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';

interface Video {
  ID: number;
  Title: string;
  Link: string;
  Level: number;
}

@Component({
  selector: 'app-videos-list',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './videos-list.component.html',
  styleUrl: './videos-list.component.scss',
})
export class VideosListComponent implements OnInit {
  videos: Video[] = [];
  filteredVideos: Video[] = [];
  currentLevel: number = 1;
  loading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    // Usar la URL completa del backend
    this.http.get<Video[]>('http://localhost:8080/api/videos').subscribe({
      next: (response) => {
        console.log('Respuesta del API:', response); // Para depurar
        this.videos = response;
        this.filterVideosByLevel();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar los videos:', error);
        this.error = 'Error al cargar los videos. Por favor, intenta más tarde.';
        this.loading = false;
      }
    });
  }

  filterVideosByLevel(): void {
    this.filteredVideos = this.videos.filter(video => video.Level === this.currentLevel);
  }

  changeLevel(level: number): void {
    this.currentLevel = level;
    this.filterVideosByLevel();
  }
}