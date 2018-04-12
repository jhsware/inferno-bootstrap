import { render } from "inferno"
import { renderIntoDocument } from './utils'

describe("Import everything", () => {
  it("from /lib", () => {
    const lib = require("../lib")
    expect(lib.Button).not.toBe(undefined)
  })

  it("from /dist", () => {
    const dist = require("../dist")
    expect(dist.Button).not.toBe(undefined)
  })
})
