# Updating the upstream version

This package builds its image from the [`swatcher`](https://github.com/StellarStoic/swatcher)
upstream source, pinned as a git submodule at `swatcher/` and built by upstream's own
`Dockerfile`. "Upstream" here means that source repo.

## Determining the upstream version

- Fetch the latest release tag from the upstream repository:

  ```sh
  gh release view -R StellarStoic/swatcher --json tagName -q .tagName
  ```

  StartOS tags are the package version with the colon replaced by an underscore, so `0.1.2:1`
  is tagged `v0.1.2_1`. The upstream part is everything before the colon.

## Applying the bump

1. Move the submodule to the desired upstream tag:

   ```sh
   cd swatcher
   git fetch origin --tags
   git checkout <tag>
   cd ..
   git add swatcher
   ```

   Pin a tag, not a branch tip — a submodule commit that no upstream ref reaches stops being
   fetchable, and CI's `submodules: recursive` checkout fails.

2. Bump `version` in `startos/versions/current.ts` to `<upstream version>:0`. A change to the
   packaging alone bumps only the revision after the colon.

3. Write `releaseNotes` for every locale in `startos/i18n/dictionaries/translations.ts`.

4. Re-check the file models against upstream when the release touches `/data`.
   `startos/fileModels/state.json.ts` and `notifications.json.ts` mirror structs the
   application owns; both use `.passthrough()`, so a new upstream field is tolerated, but a
   renamed or retyped one is not.
