import * as migration_20260731_084115_baseline from './20260731_084115_baseline';
import * as migration_20990101_000000_broken_test from './20990101_000000_broken_test';

export const migrations = [
  {
    up: migration_20260731_084115_baseline.up,
    down: migration_20260731_084115_baseline.down,
    name: '20260731_084115_baseline'
  },
  {
    up: migration_20990101_000000_broken_test.up,
    down: migration_20990101_000000_broken_test.down,
    name: '20990101_000000_broken_test'
  },
];
