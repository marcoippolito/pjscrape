#!/usr/bin/env node

module.exports = {
  x : 5,
  result: 0,

  addX: function(value) {
    this.result = value + this.x;
  }
};
