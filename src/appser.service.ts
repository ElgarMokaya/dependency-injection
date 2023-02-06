import { Injectable } from '@angular/core';
import { Logger } from './app/logger';

@Injectable(
  {
    providedIn:'root'
  }
)
export class AppserService implements Logger{

  constructor() { }
  prefix: 'root';
  log: (message: string) => void;
}
