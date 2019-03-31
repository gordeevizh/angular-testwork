import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 
import { SearchComponent }           from './search/search.component';
import { SearchResultComponent }  from './search-result/search-result.component';
import { SearchInformationComponent }    from './search-information/search-information.component';
import { FastPanelComponent } from './fast-panel/fast-panel.component';
 
import { SearchRoutingModule }       from './search-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchComponent,
    SearchResultComponent,
    SearchInformationComponent,
    FastPanelComponent
  ]
})
export class SearchModule {}