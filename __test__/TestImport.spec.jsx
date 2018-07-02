describe("Import everything", () => {
  it("from /lib", () => {
    const lib = require("../lib")
    expect(lib.Button).not.toBe(undefined)
  })

  it("Import CommonJS", () => {
    const dist = require("../dist/cjs")
    expect(dist.Button).not.toBe(undefined)
  })
})
