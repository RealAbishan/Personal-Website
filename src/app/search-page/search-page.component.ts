import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface PointsTable {
  team: String;
  p: number;
  w: number;
  l:number;
  d: number;
  gs: number;
  gr: number;
  gd: number;
  pt: number;
  position: number;

  
}

const ELEMENT_DATA: PointsTable[] = [
  {team: 'FCL', p:1, w:1 ,l:0 ,d:0 ,gs:3, gr:2, gd:1, pt: 4, position:1},
  {team: 'FCC', p:1, w:0 ,l:1 ,d:0 ,gs:2, gr:3, gd:-1, pt: 0, position:2}
];



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['team', 'p', 'w', 'l', 'd', 'gs' ,'gr', 'gd' ,'pt' ,'position'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 

}
