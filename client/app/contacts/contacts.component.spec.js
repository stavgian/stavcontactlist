'use strict';

describe('Component: ContactsComponent', function() {
  // load the controller's module
  beforeEach(module('meanFullstackApp.contacts'));

  var ContactsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ContactsComponent = $componentController('contacts', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
