'use strict';

describe('controllers', function(){
  beforeEach(module('contactsApp'));

  var myCtrl;
  var service;

  beforeEach(inject(function($controller, $injector) {
    myCtrl = $controller('MainCtrl');
    service = $injector.get('ContactsArray');
  }))

  it('should set contacts to ContactsArray.contacts', function() {
    expect(myCtrl.contacts).toBe(service.contacts)
  });

  it('calling edit should set proper service variables', function() {
    myCtrl.editing("contact", 1);

    expect(service.isEditing).toBe(true);
    expect(service.currentContact).toBe("contact");
    expect(service.index).toBe(1);
  })
});
