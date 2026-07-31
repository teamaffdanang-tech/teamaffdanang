import * as migration_20260731_084115_baseline from './20260731_084115_baseline';

export const migrations = [
  {
    up: migration_20260731_084115_baseline.up,
    down: migration_20260731_084115_baseline.down,
    name: '20260731_084115_baseline'
  },
];
