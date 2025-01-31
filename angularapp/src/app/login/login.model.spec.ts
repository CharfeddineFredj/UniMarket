import { describe, it } from 'node:test';
import { Login } from './login.model';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login()).toBeTruthy();
  });
});
