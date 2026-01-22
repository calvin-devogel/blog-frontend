import { TestBed } from '@angular/core/testing';

import { ResumeBuilder } from './resume-builder';

describe('ResumeBuilder', () => {
  let service: ResumeBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
