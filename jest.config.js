module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  //   '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  // },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/webpack/jest/file-transform.js',
    '^.+\\.css$': 'identity-obj-proxy'
  },
  modulePaths: ['<rootDir>'],
};
