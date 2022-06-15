/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  transform: {
    '^.+\\.ts?$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
