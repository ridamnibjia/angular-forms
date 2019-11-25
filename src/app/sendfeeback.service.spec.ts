import { TestBed } from '@angular/core/testing';

import { SendfeebackService } from './sendfeeback.service';

describe('SendfeebackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendfeebackService = TestBed.get(SendfeebackService);
    expect(service).toBeTruthy();
  });
});
