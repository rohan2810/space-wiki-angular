import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceWikiModel } from './subpost-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubpostService {
  constructor(private http: HttpClient) { }

  getAllSubposts(): Observable<Array<SpaceWikiModel>> {
    return this.http.get<Array<SpaceWikiModel>>('http://localhost:8080/api/subpost');
  }

  createSubpost(subpostModel: SpaceWikiModel): Observable<SpaceWikiModel> {
    return this.http.post<SpaceWikiModel>('http://localhost:8080/api/subpost',
      subpostModel);
  }
}
