import { Component } from '@angular/core';
import MiniServicesData from '../../../assets/data/services-data.json';
import MiniInfosData from '../../../assets/data/infos-data.json';
import { MiniCard } from '../../models/miniCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  aboutUsImage: string = '../../../assets/media/home/about.svg';
  ourStrategyImage: string = '../../../assets/media/home/strategy.svg';

  miniServices: MiniCard[] = MiniServicesData;
  miniInfos: MiniCard[] = MiniInfosData;

  calculElements(list: any){
    return list.length%3;
  }
}
