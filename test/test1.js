var assert = require("chai").assert;

var isPrime  = require("../app/prime.js");
var primeSeq = require("../app/primeSeq.js");

describe("isPrime", function() {

  it("1 is not prime", function() {
    assert.notOk(isPrime(1));
  });

  it("2 is prime", function() {
    assert.ok(isPrime(2));
  });

  it("3 is prime", function() {
    assert.ok(isPrime(3));
  });

  it("4 is not prime", function() {
    assert.notOk(isPrime(4));
  });

  it("5 is prime", function() {
    assert.ok(isPrime(5));
  });

  it("6 is not prime", function() {
    assert.notOk(isPrime(6));
  });

  it("7 is prime", function() {
    assert.ok(isPrime(7));
  });

  it("8 is not prime", function() {
    assert.notOk(isPrime(8));
  });

  it("9 is not prime", function() {
    assert.notOk(isPrime(9));
  });

  it("10 is not prime", function() {
    assert.notOk(isPrime(10));
  });

  it("11 is prime", function() {
    assert.ok(isPrime(11));
  });

  it("12 is not prime", function() {
    assert.notOk(isPrime(12));
  });

  it("13 is prime", function() {
    assert.ok(isPrime(13));
  });

  it("14 is not prime", function() {
    assert.notOk(isPrime(14));
  });

  it("15 is not prime", function() {
    assert.notOk(isPrime(15));
  });

  it("16 is not prime", function() {
    assert.notOk(isPrime(16));
  });

  it("17 is prime", function() {
    assert.ok(isPrime(17));
  });

  it("18 is not prime", function() {
    assert.notOk(isPrime(18));
  });

  it("19 is prime", function() {
    assert.ok(isPrime(19));
  });

  it("20 is not prime", function() {
    assert.notOk(isPrime(20));
  });
});

describe("primeSeq", function() {
  it("1 to 20", function() {
    var ret = [];
    for (var i=0; i<20; i++) {
      ret.push(primeSeq(i+1));
    }
    assert.ok(ret.join(","),"2,3,5,7,1,1,1,3,1,7,1,9,2,3,2,9,3,1,3,7")
  });
});