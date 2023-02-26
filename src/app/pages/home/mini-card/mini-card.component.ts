import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() pathImage: string = '';
  @Input() left: boolean = false;
  @Input() right: boolean = false;
}
