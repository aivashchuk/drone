import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.less']
})
export class VideoBlockComponent implements OnInit {
  @ViewChild('videoPlayer', {static: true}) videoPlayer: ElementRef;

  @Input() title: string;
  @Input() srcMp4: string = '';
  @Input() srcWebm: string = '';

  private isPlaying: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVideo() {
    this.isPlaying ? this.videoPlayer.nativeElement.play() : this.videoPlayer.nativeElement.pause();
    this.isPlaying = !this.isPlaying;
  }

}
