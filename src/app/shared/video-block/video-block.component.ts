import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.less']
})
export class VideoBlockComponent implements OnInit {
  @ViewChild('videoPlayer', {static: true}) videoPlayer: ElementRef;

  private isPlaying: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVideo() {
    this.isPlaying ? this.videoPlayer.nativeElement.play() : this.videoPlayer.nativeElement.pause();
    this.isPlaying = !this.isPlaying;
  }

}
