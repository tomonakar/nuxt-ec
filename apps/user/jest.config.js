module.exports = {
  displayName: 'user',
  preset: '../../jest.preset.js',
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  coverageDirectory: '../../coverage/apps/user',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
    'vue-jest': { tsConfig: 'apps/user/tsconfig.spec.json' },
  },
};
