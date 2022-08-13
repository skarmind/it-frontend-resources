module.exports = {
  dryRun: false,
  ci: false,
  repositoryUrl: 'https://github.com/Playrix/itwa-design-tokens.git',
  branches: ['main', { name: 'next', prerelease: true }, { name: 'beta', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  tagFormat: 'v${version}',
};
