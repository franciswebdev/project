module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Adding this line solved the issue
    '^.+\\.tsx?$': 'ts-jest',
  },
};