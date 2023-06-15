import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Test } from '../interfaces/test.interface';

import {ListfileService} from '../services/listfile.service'
import jsPDF from 'jspdf';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @ViewChild('content', {static : false}) el!: ElementRef;


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


  public downloadAsPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("demo.pdf")
      }
    })
     
  }

}
