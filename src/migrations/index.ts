import * as migration_20260731_084115_baseline from './20260731_084115_baseline';
import * as migration_20260802_073051_add_gbp_currency from './20260802_073051_add_gbp_currency';

export const migrations = [
  {
    up: migration_20260731_084115_baseline.up,
    down: migration_20260731_084115_baseline.down,
    name: '20260731_084115_baseline',
  },
  {
    up: migration_20260802_073051_add_gbp_currency.up,
    down: migration_20260802_073051_add_gbp_currency.down,
    name: '20260802_073051_add_gbp_currency'
  },
];
