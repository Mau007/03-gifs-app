import { outputAst } from '@angular/compiler';
import { Component,Input } from '@angular/core';
import { Gif } from '../../interfaces/Gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public gifs : Gif[]=[];


}
