import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchBarSearchComponent } from './components/search-bar-search/search-bar-search.component';
import { AboutResultsComponent } from './components/about-results/about-results.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
    declarations: [
        SearchResultsComponent,
        SearchBarSearchComponent,
        AboutResultsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        SearchRoutingModule
    ],
    providers: [
        DatePipe
    ]
})
export class SearchModule { }
