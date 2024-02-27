import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent{
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){
    // if(this.gifsService.tagsHistory.length > 0){
    //   this.gifsService.searchTag(this.gifsService.tagsHistory[0]);
    //   //console.log(this.gifsService.tagsHistory[0]);
    // }

  }
//  searchTag(newTag:string):void{
  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
  }

}
