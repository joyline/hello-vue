module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest",
    // "^.+\\.(js|jsx)?$": "babel-jest"
    //https://medium.com/@samuelpouyt/how-to-solve-vue-error-with-jest-e8e9ff7d0cec
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  //https://github.com/vuejs/vue-cli/issues/1584
  // transformIgnorePatterns: [
  //   '/node_modules/',
  // ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
