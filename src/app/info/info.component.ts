import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-page/product/product.model';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('infoSlide', [
      state('open', style({
        'transform': 'translateX(0px)'
      })),
      state('close', style({
        'transform': 'translateX(100%)'
      })),
      transition('open <=> close', animate('300ms linear')),
      
    ])
  ]
  
})
export class InfoComponent {
  @Input() infoComponentVisible: boolean;

  constructor() {}

  @Input() product: Product | null | undefined;
  @Output() closeInfoButtonClickedEvent: EventEmitter<void> = new EventEmitter<void>()
}
