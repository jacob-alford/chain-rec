module.exports = {
  collectCoverageFrom: [
    'src/**',
    '!src/IO.ts',
    '!src/Either.ts',
    '!src/Identity.ts',
    '!src/index.ts',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.ts'],
  moduleNameMapper: {
    '^@jacob-alford/chain-rec$': '<rootDir>/src/index.ts',
    '^@jacob-alford/chain-rec/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
}
