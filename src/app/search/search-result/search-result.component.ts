import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {

  searchResults: any;
  selectedUser: number;
  selectedTag: string;
  searchQuery: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getSearchResult();
  }

  getSearchResult() {
    this.searchQuery = this.route.snapshot.paramMap.get('query');
    this.apiService.getSearchResult(this.searchQuery)
      .subscribe(result => this.searchResults = result.items);
  }

  onSelectUser(userId: number): void {
    this.selectedUser = userId;
    this.selectedTag = null;
  }
  onSelectTag(tag): void {
    this.selectedTag = tag;
    this.selectedUser = null;
  }

  goBack(): void {
    this.location.back();
  }

}
