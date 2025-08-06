// Example test file with TypeScript
import { test, expect } from '@jest/globals';
import {getRegionalAverageRent} from "../src/regional-rent";

describe('Example Test Suite', () => {
  // Example function with TypeScript types


  test('adds 1 + 2 to equal 3', () => {
    const region =  getRegionalAverageRent('brom')
    expect(region).toBe('brom');
  });

  // Example of testing async code
  test('async test example', async () => {
    const fetchData = (): Promise<string> => 
      new Promise(resolve => setTimeout(() => resolve('data'), 100));
    
    const data = await fetchData();
    expect(data).toBe('data');
  });

  // Example of testing with TypeScript interfaces
  interface User {
    id: number;
    name: string;
  }

  test('type checking with interfaces', () => {
    const user: User = {
      id: 1,
      name: 'Test User'
    };
    
    expect(user).toEqual({
      id: expect.any(Number),
      name: expect.any(String)
    });
  });
});
