import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Graph } from '../../store/entity/graph.model';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
url="http://localhost:3000/graph";
  constructor(private http:HttpClient) { }
  getGraph():Observable<Graph>{
return this.http.get<Graph>(this.url);
  }
}
