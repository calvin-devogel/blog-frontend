import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parse } from 'yaml';
import { map, Observable } from 'rxjs';
import { ResumeData } from '../interfaces/resume-data';
import { url } from 'inspector/promises';

@Injectable({
  providedIn: 'root',
})
export class ResumeBuilder {
  constructor(private http: HttpClient) {}

  private resumeUrl = 'assets/resume.yaml';

  getResumeData(): Observable<ResumeData> {
    return this.http.get(this.resumeUrl, { responseType: 'text' }).pipe(
      map(yamlString => parse(yamlString) as ResumeData)
    );
  }
}
