import { Component, OnInit } from '@angular/core';
import data from 'src/assets/json/data.json';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})


export class HeroComponent implements OnInit {
  data: any = data;
  constructor() { }

  ngOnInit() {
    }

}



