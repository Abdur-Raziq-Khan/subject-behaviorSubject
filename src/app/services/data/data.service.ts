import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private subjectSource = new Subject<string>();
  public subject$ = this.subjectSource.asObservable();

  private behSubjectSource = new BehaviorSubject<string>('');
  public behSubject$ = this.behSubjectSource.asObservable();

  constructor() {}

  setSubjectValue(data: string) {
    this.subjectSource.next(data);
  }

  setBehSubjectValue(data: string) {
    this.behSubjectSource.next(data);
  }
}
