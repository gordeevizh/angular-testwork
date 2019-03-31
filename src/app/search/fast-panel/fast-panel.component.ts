import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fast-panel',
  templateUrl: './fast-panel.component.html',
  styleUrls: ['./fast-panel.component.css']
})


export class FastPanelComponent implements OnInit {
  
  @Input() userId: number;
  @Input() tag: string;

  searchResults: any;
  pending: boolean;

  constructor(private apiService: ApiService) { }

  ngOnChanges() {
    if (this.userId) this.getUsersQuestions();
    if (this.tag) this.getQuestionsByTag();
  }

  ngOnInit() {
  }

  getUsersQuestions() {
    this.pending = true;
    this.apiService.getUsersQuestions(this.userId)
      .subscribe(result => {
        this.pending = false;
        this.searchResults = result.items;
      });
  }

  getQuestionsByTag() {
    this.pending = true;
    this.apiService.getQuestionsByTag(this.tag)
      .subscribe(result => {
        this.pending = false;
        this.searchResults = result.items;
      });
  }

}
