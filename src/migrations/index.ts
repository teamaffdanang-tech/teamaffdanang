import * as migration_20260731_084115_baseline from './20260731_084115_baseline';
import * as migration_20260802_073051_add_gbp_currency from './20260802_073051_add_gbp_currency';
import * as migration_20260803_031911_add_coupon_scope from './20260803_031911_add_coupon_scope';
import * as migration_20260803_080946_add_product_best_for from './20260803_080946_add_product_best_for';

export const migrations = [
  {
    up: migration_20260731_084115_baseline.up,
    down: migration_20260731_084115_baseline.down,
    name: '20260731_084115_baseline',
  },
  {
    up: migration_20260802_073051_add_gbp_currency.up,
    down: migration_20260802_073051_add_gbp_currency.down,
    name: '20260802_073051_add_gbp_currency',
  },
  {
    up: migration_20260803_031911_add_coupon_scope.up,
    down: migration_20260803_031911_add_coupon_scope.down,
    name: '20260803_031911_add_coupon_scope',
  },
  {
    up: migration_20260803_080946_add_product_best_for.up,
    down: migration_20260803_080946_add_product_best_for.down,
    name: '20260803_080946_add_product_best_for'
  },
];
