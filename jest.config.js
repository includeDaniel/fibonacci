export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
}
