import { Component } from '@angular/core';

@Component({
  selector: 'app-our-articles',
  templateUrl: './our-articles.component.html',
  styleUrls: ['./our-articles.component.scss']
})
export class OurArticlesComponent {
  tab = [
    { 
      'id': 'slide-1',
      'path': '../../../../assets/media/home/articles/article-1.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      'id': 'slide-2',
      'path': '../../../../assets/media/home/articles/article-2.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    { 
      'id': 'slide-3',
      'path': '../../../../assets/media/home/articles/article-3.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    { 
      'id': 'slide-4',
      'path': '../../../../assets/media/home/articles/article-4.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    { 
      'id': 'slide-5',
      'path': '../../../../assets/media/home/articles/article-5.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]
}
