// TASK 1: What's wrong in the test?
// Unfixed test:
it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// Fixed test:
describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
      assert.equal(pow(5, 1), 5);
    });

    it("5 in the power of 2 equals 25", function() {
      assert.equal(pow(5, 2), 25);
    });

    it("5 in the power of 3 equals 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });

/* LESSON SUMMARY:
Behaviour Driven Development - BDD - tests AND documentation AND examples

The flow of development usually looks like this:
1. An initial spec is written, with tests for the most basic functionality.
2. An initial implementation is created.
3. To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
4. Now we have a working initial implementation with tests.
5. We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
6. Go to 3, update the implementation till tests give no errors.
7. Repeat steps 3-6 till the functionality is ready.

For tests we use the following JS libraries:
1. Mocha
2. Chai
3. Sinon

describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});

*/
