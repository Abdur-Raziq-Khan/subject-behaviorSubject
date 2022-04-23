import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
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
