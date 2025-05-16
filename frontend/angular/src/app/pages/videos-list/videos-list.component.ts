import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

interface Video {
  ID: number;
  Title: String;
  Link: string;
  Level: number;
}

@Component({
  selector: 'app-videos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos-list.component.html',
  styleUrl: './videos-list.component.scss',
})
export class VideosListComponent implements OnInit {
  videos: Video[] = [];
  filteredVideos: Video[] = [];
  currentLevel: number = 1;

    constructor(private http: HttpClient){}

    ngOnInit(): void {
      this.loadVideos();
    }

    loadVideos(): void {
      this.http.get<Video[]>('/api/videos').subscribe({
        next : (response) => {
          this.videos = response;
          this.filterVideosByLevel();
        },
        error: (error) => {
          console.error('error al cargar el video', error);
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
