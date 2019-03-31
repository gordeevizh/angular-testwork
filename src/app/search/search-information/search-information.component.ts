import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-search-infromation',
  templateUrl: './search-information.component.html',
  styleUrls: ['./search-information.component.css']
})
export class SearchInformationComponent implements OnInit {

  pending: boolean;
  answers: any;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getQuestionTitleById();
    this.getAnswerByQuestion();
  }

  getAnswerByQuestion() {
    const questionId = +this.route.snapshot.paramMap.get('questionId');
    this.pending = true;
    this.apiService.getAnswerByQuestion(questionId)
      .subscribe(result => {
        this.pending = false;
        this.answers = result.items;
      });
  }

  getQuestionTitleById() {
    const questionId = +this.route.snapshot.paramMap.get('questionId');
    this.pending = true;
    this.apiService.getQuestionById(questionId)
      .subscribe(result => {
        this.pending = false;
        this.title = result.items[0].title;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
