import { Component, OnInit } from '@angular/core';
import {place} from '../india.mock';

@Component({
  selector: 'app-india-list',
  templateUrl: './india-list.component.html',
  styleUrls: ['./india-list.component.css']
})
export class IndiaListComponent implements OnInit {
tourist=place;

  constructor() { }

  ngOnInit(): void {
  }

}
