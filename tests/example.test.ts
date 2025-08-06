// Example test file with TypeScript
import { test, expect } from '@jest/globals';

describe('Example Test Suite', () => {
  // Example function with TypeScript types
  function sum(a: number, b: number): number {
    return a + b;
  }

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
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
