#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2).filter((arg) => arg !== '--passWithNoTests');
const result = spawnSync(process.execPath, ['--test', ...args], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
