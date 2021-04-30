describe("The matchingDays factory functions", function () {
  it("should be able to determine that 23 May 1994 was a Monday.", function () {
    var testingDays = matchingDays();
    testingDays.setDate1("1994-05-23");
    assert.equal(testingDays.getDay1(), "monday");
  });
  it("should be able to determine that 2 July 2015 was a Thursday.", function () {
    var testingDays = matchingDays();
    testingDays.setDate2("2015-07-02");
    assert.equal(testingDays.getDay2(), "thursday");
  });
  it("should be able to indicate that 21 March 2015 and 31 October 1981 fell on the same day of the week.", function () {
    var testingDays = matchingDays();
    testingDays.setDate1("2015-03-21");
    testingDays.setDate2("1981-10-31");
    assert.equal(testingDays.sameDayCheck(), true);
  });
  it("should be able to indicate that 26 June 2003 and 3 Febuary 1991 did not fall on the same day of the week.", function () {
    var testingDays = matchingDays();
    testingDays.setDate1("2003-06-26");
    testingDays.setDate2("1991-02-03");
    assert.equal(testingDays.sameDayCheck(), false);
  });
});
