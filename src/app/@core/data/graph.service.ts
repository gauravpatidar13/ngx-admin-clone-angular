import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Graph } from '../../store/entity/graph.model';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  url = "http://localhost:3000/graph";
  constructor(private http: HttpClient) { }
  readGraphs(): Observable<Graph[]> {
     return this.http.get<Graph[]>(this.url);
  }
  createGraph(graph: Graph): Observable<Graph> {
    return this.http.post<Graph>(this.url, graph);
  }
  updateGraph(graph: Graph): Observable<Graph> {
     return this.http.put<Graph>(this.url, graph);
  }
  deleteGraph(id: any): Observable<any> {
     return this.http.delete<any>(this.url + "/" + id);
  }
}
