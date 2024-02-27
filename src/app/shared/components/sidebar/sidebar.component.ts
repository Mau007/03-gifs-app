import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  //public _gifsService:GifsService;
  constructor( private gifsService:GifsService) {
    //this._gifsService=gifsService;
  }

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  Re_Search(tag:string):void{
    this.gifsService.searchTag(tag);
  }

}
