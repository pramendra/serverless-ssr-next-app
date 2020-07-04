module.exports = {
  displayName: 'Unit Tests',
  testEnvironment: 'node',
  roots: ['./tests'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/tests/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  testURL: 'http://localhost/',
  testTimeout: 30000,
  setupFiles: ['./jest.setup.js'],
};
