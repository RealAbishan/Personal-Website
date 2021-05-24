import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PointsTable {
  Home: String;
  Visitors: String;
  HG: number;
  VG:number;
  date: number;

  
}

const ELEMENT_DATA: PointsTable[] = [
  {Home: 'FCL', Visitors:'FCC', HG:3 ,VG:2, date: 2/6/2020}
  
];


@Component({
  selector: 'app-sort-date',
  templateUrl: './sort-date.component.html',
  styleUrls: ['./sort-date.component.css']
})
export class SortDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['Home', 'Visitors', 'HG', 'VG', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
