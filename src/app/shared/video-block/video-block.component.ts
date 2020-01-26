import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.less']
})
export class VideoBlockComponent implements OnInit {

  private isPlaying: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVideo(event) {
    const video = event.target;

    this.isPlaying ? video.play() : video.pause();
    this.isPlaying = !this.isPlaying;
  }

}
