import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  saveSubjectData(data: string) {
    this.dataService.setSubjectValue(data);
  }

  saveBehSubjectData(data: string) {
    this.dataService.setBehSubjectValue(data);
  }
}