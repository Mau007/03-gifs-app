import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/Gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public GifList: Gif[]=[];

  private _tagsHistory:string[] =[];
  //https://developers.giphy.com/docs/api/endpoint#trending
  private apikey:string ='S4zTm4inM6w5NxCpPOa0Tm7u3bW9y70R';
  private serviceUrl:string ='https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string):void{
    tag= tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory=this._tagsHistory.splice(0,5);

    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify( this._tagsHistory ));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

    if(this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag:string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);
    console.log(this._tagsHistory);
    const params= new HttpParams()
    .set('api_key',this.apikey)
    .set('limit','10')
    .set('q',tag);

    this.http.get<SearchResponse>(`${ this.serviceUrl}/search`,{params})
    .subscribe(resp =>{
      this.GifList = resp.data;
      console.log({Gifs: this.GifList});
    });

  }
}
