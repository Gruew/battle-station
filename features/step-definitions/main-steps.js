'use strict';

var world = require('../support/world');

function MainSteps() {
    this.world = new world();

    this.Given(/^I am on the Gruew homepage$/, function(callback) {
        this.visit('http://localhost/battle-station/', callback);
    });

    this.When(/^I click on a name link/, function(callback) {
        callback.pending();
    });

    this.Then(/^I should see "(.*)" as the new header/, function(title, callback) {

    });
}

module.exports = MainSteps;
