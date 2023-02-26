import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-services-cards',
  templateUrl: './mini-services-cards.component.html',
  styleUrls: ['./mini-services-cards.component.scss']
})
export class MiniServicesCardsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() pathImage: string = '';
}
