import { Component } from '@angular/core';
import valuesData from '../../../assets/data/values-data.json';
import { Value } from 'src/app/models/value.model';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  values: Value[] = valuesData;
}
