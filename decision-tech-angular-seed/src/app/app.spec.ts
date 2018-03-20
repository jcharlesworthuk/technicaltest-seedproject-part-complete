import { TestBed, async } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { App } from './app';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { FilterStateService } from 'app/services/filterStateService';

describe('App', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        declarations: [App],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          FilterStateService,
          { provide: XHRBackend, useClass: MockBackend }
        ]
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(App);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    `should have as title 'start'`,
    async(() => {
      const fixture = TestBed.createComponent(App);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('start');
    })
  );
});
