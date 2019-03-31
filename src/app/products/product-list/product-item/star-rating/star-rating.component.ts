import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  private auxRating: number;
  @Input() rating: number;
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.restoreRating();
  }

  restoreRating() {
    this.auxRating = this.rating;
  }

  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }

}
