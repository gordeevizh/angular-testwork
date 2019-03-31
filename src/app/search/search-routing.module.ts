import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent }           from './search/search.component';
import { SearchResultComponent }  from './search-result/search-result.component';
import { SearchInformationComponent }    from './search-information/search-information.component';

import { AuthGuard } from '../auth/auth.guard';

const searchRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'search',
        component: SearchComponent,
      },
      { 
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      },
      {
        path: 'results/:query',
        component: SearchResultComponent
      },
      {
        path: 'information/:questionId',
        component: SearchInformationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(searchRoutes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
