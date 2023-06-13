import { Component, OnInit } from '@angular/core';
import { Test } from '../interfaces/test.interface';

import {ListfileService} from '../services/listfile.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  protocoles: string[] = ['protocole 1', 'protocole 2'];

  Tests: Test[];


  constructor(private listfileService: ListfileService) {}


  ngOnInit() {
    const listfile = this.listfileService.getData();
    listfile.subscribe(
      (response: Test[]) => {
        this.Tests = response;
        console.log(this.Tests);
        
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


}
