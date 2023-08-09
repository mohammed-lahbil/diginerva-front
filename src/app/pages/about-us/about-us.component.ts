import { Component } from '@angular/core';
import valuesData from '../../../assets/data/values-data.json';
import { MiniCard } from '../../models/miniCard';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  valuesData: MiniCard[] = valuesData;
}
