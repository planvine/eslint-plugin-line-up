'use strict'

const assert = require('assert')
const plugin = require('../lib/index.js')

describe('eslint-plugin-line-up', () => {
  it('exposes recommended config', () => {
    assert.ok(plugin.configs &&plugin.configs.recommended)
    assert.ok(Array.isArray(plugin.configs.recommended.extends))
  })
})
