import { Component,Input, OnInit } from '@angular/core';

import { Gif } from '../../interfaces/Gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input()
  public gif! : Gif;


  ngOnInit(): void {
    if( !this.gif) throw new Error('Gif Propiedad es requerida');
  }


}
