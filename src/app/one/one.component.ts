import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  subData: string = '';
  behSubData: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscribeToSubject();
    this.subcribeToBehSubject();
  }

  subscribeToSubject() {
    this.dataService.subject$.subscribe((res: any) => {
      this.subData = res;
    });
  }

  subcribeToBehSubject() {
    this.dataService.behSubject$.subscribe((res: any) => {
      this.behSubData = res;
    });
  }
}
