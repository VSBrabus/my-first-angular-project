import { Component } from '@angular/core';
import { ClickCountService } from './click-count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickCountService]
})
export class AppComponent {
  title = 'my-first-project';
 
  constructor(private clickCountService: ClickCountService){
    
  }

}
