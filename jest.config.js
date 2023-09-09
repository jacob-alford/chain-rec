module.exports = {
  collectCoverageFrom: ['src/**', '!src/IO.ts', '!src/Either.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.ts'],
  moduleNameMapper: {
    '^schemata-ts$': '<rootDir>/src/index.ts',
    '^schemata-ts/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
}
