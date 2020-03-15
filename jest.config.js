module.exports = {
  preset: 'react-native',
  //preset: 'ts-jest',
  //testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
  },
};

