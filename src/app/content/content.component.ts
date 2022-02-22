import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  // datas$ = new Observable<Product[]>();
  datas : Product[] = [];

  name = 'Angular ' + VERSION.major;
  demoText = 'Demo2 Text';
  hrefUrl = 'https://erip.eri.com.tw/';
  twoWayText = 'test';
  eventText = '';

  counter = 0;
  classCounter = 0;
  ifCounter = 0;
  switchCounter = 0;

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    this.datasvc.getProductData().subscribe(result => {
      this.datas =  result;
    })
  }

  changeEventText() {
    this.eventText = 'Changed Demo Text';
  }

  getStyle(){
    return {"font-size":26 + this.counter + 'px'};
  }

  count(){
    this.counter++;
  }

  classCount(){
    this.classCounter++;
  }

  ifCount(){
    this.ifCounter++;
  }

  switchCount(){
    this.switchCounter++;
  }

}
