# Security Audit Status

Last updated: 2026-01-15 (After verdaccio removal)

## Summary

After the NX 22 modernization upgrade and verdaccio removal, only **low severity vulnerabilities** remain. All are in **development-only dependencies** and do not affect production builds or published packages.

| Severity | Count | Status |
|----------|-------|--------|
| High     | 0     | RESOLVED |
| Low      | 11    | Dev-only (diff/ts-node via multiple paths) |
| **Total** | **11** | **No production impact** |

## Remaining Vulnerabilities

### `diff` (jsdiff) DoS Vulnerability (11 low severity - counted per dependency path)

**Advisory:** [GHSA-73rr-hh4g-fpgx](https://github.com/advisories/GHSA-73rr-hh4g-fpgx)

**Description:** jsdiff has a Denial of Service vulnerability in `parsePatch` and `applyPatch` functions. Requires diff >= 8.0.3 to fix.

**Affected packages:**
- `diff` < 8.0.3 (via ts-node -> jest chain)
- Propagates through multiple dependency paths:
  - `ts-node`
  - `jest-config` (3 paths)
  - `@jest/core`
  - `@nx/jest`
  - `@nx/node`
  - `@nx/plugin`
  - `jest-cli`
  - `postcss-load-config`

**Why no fix:**
- No fix currently available in the npm registry
- `npm audit fix --force` would install `jest@26.5.3` which is ancient and breaks all tests
- The vulnerability is deep in the Jest/ts-node dependency chain

**Production Impact:** NONE
- `diff` is only used in development/testing tools
- Jest and ts-node are dev dependencies only
- Never included in published packages or production builds

**Mitigation:**
- Monitor ts-node and jest releases for diff 8.0.3+ upgrade
- Low severity - affects patch parsing/applying functions unlikely to process untrusted input

---

## Resolved Vulnerabilities

The following vulnerabilities were resolved during the NX 22 modernization:

### Verdaccio `qs` DoS (GHSA-6rw7-vpxm-498p) - 23 high severity
- **Fixed:** Removed verdaccio from devDependencies
- **Rationale:** Local registry testing feature was not used; team publishes directly to npm
- **191 packages removed** from node_modules

### Next.js DoS (GHSA-5j59-xgg2-r9c4)
- **Fixed:** Upgraded next 16.0.9 -> 16.1.2

### Storybook Environment Variable Exposure (GHSA-8452-54wp-rmv6)
- **Fixed:** Upgraded storybook 10.1.9 -> 10.1.11

### Webpack XSS in Module Federation (CVE-2024-43788)
- **Fixed:** NX 22.3.3 includes webpack 5.94.0+ (current: 5.104.1)
- **Reference:** [NX Issue #29755](https://github.com/nrwl/nx/issues/29755)

---

## Recommendations

1. **For CI/CD:** These vulnerabilities do not affect published packages. Production deployments are secure.

2. **For Development:**
   - Standard development on localhost is safe
   - Low severity vulnerabilities only affect test tooling

3. **Future Actions:**
   - Re-run `npm audit` after major dependency updates
   - Monitor Jest releases for diff updates

---

## Vulnerability Reduction Summary

| Metric | Before Upgrade | After Upgrade | After Verdaccio Removal | Total Change |
|--------|---------------|---------------|------------------------|--------------|
| Total vulnerabilities | 66 | 33 | **11** | **-83%** |
| Critical | 0 | 0 | 0 | - |
| High | ~40 | 23 | **0** | **-100%** |
| Low | ~26 | 10 | **11** | **-58%** |

**Key improvements:**
- All critical and high severity vulnerabilities resolved
- Removed verdaccio (191 packages, 23 high severity vulns)
- Only 11 low severity remaining (diff/jsdiff DoS counted per dependency path)
- webpack XSS vulnerability fixed (5.94.0+ via NX 22.3.3)
- Next.js DoS and Storybook env exposure fixed
- tailwindcss-logical upgraded to v4.1.0 (peer dependency now, no bundled tailwindcss)

---

## Audit Command Reference

```bash
# Check current vulnerabilities
npm audit

# Attempt automatic fixes (safe)
npm audit fix

# Force fixes (may break dependencies - use with caution)
npm audit fix --force

# Check specific package
npm audit --package-lock-only | grep "package-name"
```
