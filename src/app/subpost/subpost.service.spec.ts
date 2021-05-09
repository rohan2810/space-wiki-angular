import { TestBed } from '@angular/core/testing';

import { SubpostService as SpaceWikiService } from './subpost.service';

describe('SubpostService', () => {
  let service: SpaceWikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceWikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
