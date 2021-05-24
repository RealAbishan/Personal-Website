import { HelpPageComponent } from './help-page/help-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SortDateComponent } from './sort-date/sort-date.component';
import { RandomMatchComponent } from './random-match/random-match.component';
import { TableViewComponent } from './table-view/table-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: '', component: MainPageComponent, children:[
    {path: 'homePage', component:HomePageComponent},
    {path: 'pointsTable', component:TableViewComponent},
    {path: 'randomMatch', component:RandomMatchComponent},
    {path: 'sortByDate', component:SortDateComponent},
    {path: 'searchPage', component:SearchPageComponent},
    {path: 'helppage', component:HelpPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
