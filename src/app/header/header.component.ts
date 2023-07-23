import { Component, Input, OnInit } from '@angular/core';
import { ClickCountService } from '../click-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  

})
export class HeaderComponent implements OnInit{
  clickCountObject: {clickCount: number};
  constructor(private clickCountService: ClickCountService){
    
  }
  ngOnInit(): void {
      this.clickCountObject=this.clickCountService.clickCountObject
  }
}
