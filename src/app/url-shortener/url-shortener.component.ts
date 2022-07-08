import { Component, OnInit } from '@angular/core';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {
  url: any;
  shortenedUrl: any;
  submission = true;
  results = false;
  constructor(private tinyUrl: NgTinyUrlService) { }

  ngOnInit(): void {
  }

  shortenUrl(){
    this.tinyUrl.shorten(this.url).subscribe(result => {
      this.shortenedUrl = result;
      this.submission = false;
      this.results = true;
    })
  }
  reset(){
    this.results = false;
    this.submission = true;
    this.url = "";
  }
}
