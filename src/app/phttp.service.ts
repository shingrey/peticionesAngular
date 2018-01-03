import { Injectable } from '@angular/core';
import {ResponseG} from './Model/responseG';
import {PeticionEnvio} from './Model/peticionEnvio';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PhttpService {
  private url:string = "localhost:3000/posts";
  private ArrayG: Array<ResponseG>;
  constructor( private http: HttpClient) { }

  postRespuesta(_body:PeticionEnvio): Observable<ResponseG>{

    return this.http.post<ResponseG>(this.url,_body);
  }
  getRespuesta(): Observable<ResponseG[]>{
    return this.http.get<ResponseG[]>(this.url);
  }

}
