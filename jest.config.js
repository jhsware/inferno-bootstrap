module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["lib/**/*.{js,jsx}"],
  globals: {
    usingJSDOM: true,
    usingJest: true
  },
  setupTestFrameworkScriptFile: require.resolve("./JEST-DEBUG.js")
}