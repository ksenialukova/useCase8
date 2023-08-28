module.exports = {
  rootDir: './src',
  moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
  coveragePathIgnorePatterns: ['index.ts', '__tests__', '__mocks__'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
}