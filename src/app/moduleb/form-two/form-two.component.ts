import { Component, OnInit } from '@angular/core';
import { NgxMrzSdkService } from '../../dynamsoft/ngx-mrz-sdk.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})

export class FormTwoComponent implements OnInit {
  showCamera = true;
  showOverlay = true;
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

    if (this.mrzResult != "") {
      this.showCamera = false;
      this.showOverlay = false;
    }
  }
}
