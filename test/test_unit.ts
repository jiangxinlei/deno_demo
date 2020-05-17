import { assertEquals } from 'https://deno.land/std@0.51.0/testing/asserts.ts';
import { add, addAsync } from './unit.ts';

const { test } = Deno;

test('add', function() {
  const result = add(1, 2);
  assertEquals(result, 3);
});

test('addAsync', async function() {
  const result = await addAsync(1, 2);
  assertEquals(result, 3);
});
