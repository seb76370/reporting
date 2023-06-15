import { Component, Input } from '@angular/core';
import { Test } from '../interfaces/test.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  test !: Test;

  Directory:string= "./assets/datas/"
  
}
