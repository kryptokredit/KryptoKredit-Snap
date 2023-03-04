# @metamask/template-snap

The "Hello, world!" of MetaMask Snaps, and also a GitHub template repository for the KryptoKredit Invoices project. For instructions on how to use the template, see [the MetaMask documentation](https://docs.metamask.io/guide/snaps.html#serving-a-snap-to-your-local-environment).

## How To Use This Template

This repository contains the files you need to start your KryptoKredit Invoices snap project. First, log into GitHub, then click the "Use this template" button to clone this repository into a new project. Once your new repository is created, you can modify the source code to make it your own. For a step-by-step guide, read [The 5-Minute Snap Tutorial](https://github.com/Montoya/gas-fee-snap#readme).

## Cloning

If you clone or create this repository outside the KryptoKredit organization, you probably want to run `./scripts/cleanup.sh` to remove some files that will not work properly outside the KryptoKredit GitHub organization.

This repository contains other GitHub Actions that you may find useful, see `.github/workflows` and [Releasing & Publishing](#releasing-publishing) below for more information.

Note that the `action-publish-relase.yml` workflow contains a step that publishes the frontend of this snap (contained in the public/ directory) to GitHub pages. If you do not want to publish the frontend to GitHub pages, simply remove the step named "Publish to GitHub Pages" in that workflow.

If you do not wish to use any of the existing GitHub actions in this repository, simply delete the .github/workflows directory.

## Contributing

### Setup
```
yarn install
```

### Testing and Linting


Run `yarn test` to run the tests once.

Run `yarn lint` to run the linter, or run `yarn lint:fix` to run the linter and fix any automatically fixable issues.

### Releasing & Publishing

The project follows the same release process as the other libraries in the KryptoKredit organization. The GitHub Actions action-create-release-pr and action-publish-release are used to automate the release process; see those repositories for more information about how they work.

Choose a release version.

The release version should be chosen according to SemVer. Analyze the changes to see whether they include any breaking changes, new features, or deprecations, then choose the appropriate SemVer version. See the SemVer specification for more information.
If this release is backporting changes onto a previous release, then ensure there is a major version branch for that version (e.g., 1.x for a v1 backport release).

The major version branch should be set to the most recent release with that major version. For example, when backporting a v1.0.2 release, you'd want to ensure there was a 1.x branch that was set to the v1.0.1 tag.
Trigger the workflow_dispatch event manually for the Create Release Pull Request action to create the release PR.

For a backport release, the base branch should be the major version branch that you ensured existed in step 2. For a normal release, the base branch should be the main branch for that repository (which should be the default value).
This should trigger the action-create-release-pr workflow to create the release PR.
Update the changelog to move each change entry into the appropriate change category (See here for the full list of change categories and the correct ordering), and edit them to be more easily understood by users of the package.

Generally, any changes that don't affect consumers of the package (e.g., lockfile changes or development environment changes) are omitted. Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g., major test improvements, security improvements, improved documentation, etc.).
Try to explain each change in terms that users of the package would understand (e.g., avoid referencing internal variables/concepts).

Contributing
Setup
yarn install

Testing and Linting
Run yarn test to run the tests once.

Run yarn lint to run the linter, or run yarn lint:fix to run the linter and fix any automatically fixable issues.

Releasing & Publishing
The project follows the same release process as the other libraries in the KryptoKredit organization. The GitHub Actions action-create-release-pr and action-publish-release are used to automate the release process; see those repositories for more information about how they work.

Choose a release version.

The release version should be chosen according to SemVer. Analyze the changes to see whether they include any breaking changes, new features, or deprecations, then choose the appropriate SemVer version. See the SemVer specification for more information.
If this release is backporting changes onto a previous release, then ensure there is a major version branch for that version (e.g., 1.x for a v1 backport release).

The major version branch should be set to the most recent release with that major version. For example, when backporting a v1.0.2 release, you'd want to ensure there was a 1.x branch that was set to the v1.0.1 tag.
Trigger the workflow_dispatch event manually for the Create Release Pull Request action to create the release PR.

For a backport release, the base branch should be the major version branch that you ensured existed in step 2. For a normal release, the base branch should be the main branch for that repository (which should be the default value).
This should trigger the action-create-release-pr workflow to create the release PR.
Update the changelog to move each change entry into the appropriate change category (See here for the full list of change categories and the correct ordering), and edit them to be more easily understood by users of the package.

Generally, any changes that don't affect consumers of the package (e.g., lockfile changes or development environment changes) are omitted. Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g., major test improvements, security improvements, improved documentation, etc.).
Try to explain each change in terms that users of the package would understand (e.g., avoid referencing internal variables/concepts).
