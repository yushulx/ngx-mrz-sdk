import { Component, OnInit } from '@angular/core';
import { NgxMrzSdkService } from '../dynamsoft/ngx-mrz-sdk.service';

@Component({
  selector: 'app-lazya',
  templateUrl: './lazya.component.html',
  styleUrls: ['./lazya.component.css']
})
export class LazyaComponent implements OnInit {
  mrzResult: string = '';

  constructor(private mrzSdkService: NgxMrzSdkService) {
  }

  ngOnInit(): void {
  }

  // result = [originalValue, parsedValue]
  onResultReady(result: any): void {
    this.mrzResult = "";
    for (let i in result[1]) {
      this.mrzResult += i + ": " + result[1][i] + '\n';
    }
    // this.mrzResult = result[0];
  }
}

