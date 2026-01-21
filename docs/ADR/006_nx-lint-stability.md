# ADR 006: NX Lint Stability and CI Configuration

## Status

Implemented

## Context

The `@okam/stack` monorepo uses NX for task orchestration, including ESLint linting across 12 projects. There were concerns about potential NX plugin worker failures that could cause lint to be unreliable, specifically:

1. **NX_ISOLATE_PLUGINS issues** - In NX versions 20.x-22.1.x, plugin workers could fail in certain environments (Docker containers, daemon crashes)
2. **Missing CI lint job** - No existing GitHub Actions workflow ran lint on pull requests
3. **Reproducibility** - Lint needed to run consistently without manual environment variable tweaks

### Known NX Plugin Worker Issues (Historical)

The following issues were reported in the NX community:

- **Issue #33472**: `@nx/eslint/plugin` causes daemon crash in NX 22.0.x - 22.1.0-rc.2
- **Issue #30359**: Docker container issues with `NX_ISOLATE_PLUGINS=true`
- **Issue #30416**: Plugin worker exit failures requiring `nx reset`

## Decision

### NX Version Stability

After investigation, **NX 22.3.3** (current workspace version) runs lint reliably:

- All 12 projects lint successfully
- No plugin worker failures observed
- No need for `NX_ISOLATE_PLUGINS=false` workaround
- Fresh lint runs (after `nx reset`) complete without issues

### CI Configuration

Created `.github/workflows/ci.yml` with separate jobs for:

1. **Lint** - Runs `nx run-many -t lint` on all projects
2. **Test** - Runs `nx run-many -t test --passWithNoTests` on all projects
3. **Build** - Runs `nx run-many -t build` on publishable projects

The CI workflow triggers on:
- Push to `main` branch
- Pull request open/sync/reopen events

### No NX_ISOLATE_PLUGINS Override Required

Unlike earlier NX versions, 22.3.3 does not require setting `NX_ISOLATE_PLUGINS=false`. The default plugin isolation works correctly.

### Troubleshooting Steps (If Issues Recur)

If plugin worker failures occur in the future:

1. Run `npx nx reset` to clear cache and restart daemon
2. Ensure all `@nx/*` packages match the main `nx` version
3. As a last resort, set `NX_ISOLATE_PLUGINS=false` in CI environment
4. Check NX GitHub issues for version-specific bugs

## Consequences

### Positive

- Lint, test, and build are validated on every PR
- Plugin worker stability is documented for future reference
- CI uses same NX commands as local development (`nx run-many`)
- No special environment variables needed

### Negative

- CI runtime increases (lint + test + build jobs)
- May need updates if NX releases introduce regressions

### Implementation Details

**CI Workflow File:** `.github/workflows/ci.yml`

```yaml
- name: Run lint
  run: npx nx run-many -t lint
```

**Local Commands:**

```bash
# Run lint on all projects
npx nx run-many -t lint

# Reset NX if issues occur
npx nx reset
```

## References

- [NX Issue #33472 - Daemon crash in 22.0.x](https://github.com/nrwl/nx/issues/33472)
- [NX Issue #30359 - Docker container issues](https://github.com/nrwl/nx/issues/30359)
- [NX CI Setup Documentation](https://nx.dev/docs/guides/nx-cloud/setup-ci)
