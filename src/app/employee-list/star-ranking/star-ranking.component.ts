import { Component, OnChanges,Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star-ranking.component.html',
  styleUrls: ['./star-ranking.component.css']
})
export class StarRankingComponent implements OnChanges {

  @Input() rating : number;
  constructor() { }
   starWidth : number;
  ngOnChanges() {
     this.starWidth = this.rating * 86/5;
  }

}
