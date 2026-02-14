import test from 'node:test';
import assert from 'node:assert/strict';

test('app keeps Blueprint by Palantir credit in source', async () => {
  const { readFile } = await import('node:fs/promises');
  const source = await readFile(new URL('../App.js', import.meta.url), 'utf8');

  assert.equal(source.includes('Blueprint by Palantir'), true);
});
