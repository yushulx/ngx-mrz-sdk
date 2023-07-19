import { Component, OnInit } from '@angular/core';
import { NgxMrzSdkService } from '../../dynamsoft/ngx-mrz-sdk.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})


export class FormOneComponent  implements OnInit {
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
