/* Minimal smoke test for the Sotagliflozin Living MA pooling engine.
 *
 * Loads the self-contained, R-validated pairwise pooling module
 * (assets/vendor/pairwise-pool.js) in Node and checks that:
 *   1. the module loads and exposes pool2x2,
 *   2. a two-trial known-answer pool returns the exact pooled effect,
 *   3. k=1 fails closed (no single-trial "meta-analysis"),
 *   4. zero-cell continuity correction does not crash.
 *
 * Run: node test/smoke.test.js   (or: npm test)
 */
'use strict';

require('../assets/vendor/pairwise-pool.js');
const P = (typeof globalThis !== 'undefined' ? globalThis : global).PairwisePool;

let failures = 0;
function check(name, cond) {
  if (cond) {
    console.log('  ok  - ' + name);
  } else {
    console.error('  FAIL- ' + name);
    failures++;
  }
}
function approx(a, b, tol) { return Math.abs(a - b) <= (tol == null ? 1e-6 : tol); }

check('module loads and exposes pool2x2', P && typeof P.pool2x2 === 'function');

// Known answer: both trials have RR = 0.5 exactly (10/100 vs 20/100; 15/150 vs 30/150),
// so the pooled RR must be 0.5, with zero heterogeneity (Q = 0, tau2 = 0).
const r = P.pool2x2(
  [
    { name: 'A', tE: 10, tN: 100, cE: 20, cN: 100 },
    { name: 'B', tE: 15, tN: 150, cE: 30, cN: 150 },
  ],
  { measure: 'RR' }
);
check('two-trial pool uses both studies (k_used=2)', r.k_used === 2);
check('pooled RR is exactly 0.5', approx(r.mu, 0.5, 1e-9));
check('homogeneous data gives tau2=0', r.tau2 === 0);
check('homogeneous data gives Q~0', approx(r.Q, 0, 1e-9));
check('CI is finite and brackets the point estimate',
  isFinite(r.ci_lo) && isFinite(r.ci_hi) && r.ci_lo < r.mu && r.mu < r.ci_hi);

// k=1 must fail closed (you cannot pool a single trial).
const r1 = P.pool2x2([{ name: 'A', tE: 10, tN: 100, cE: 20, cN: 100 }], { measure: 'RR' });
check('k=1 fails closed with an error', !!r1.error && r1.k_used === 1);

// Zero-cell trial must not crash (Haldane 0.5 correction path).
const rz = P.pool2x2(
  [
    { name: 'Z1', tE: 0, tN: 50, cE: 5, cN: 50 },
    { name: 'Z2', tE: 3, tN: 60, cE: 8, cN: 60 },
  ],
  { measure: 'OR' }
);
check('zero-cell OR pool returns a finite estimate', rz.k_used === 2 && isFinite(rz.mu));

if (failures) {
  console.error('\nSMOKE TEST FAILED: ' + failures + ' check(s) failed.');
  process.exit(1);
}
console.log('\nSMOKE TEST PASSED: all checks green.');
