'use strict';

describe('controllers', function(){
  beforeEach(module('contactsApp'));

  var myCtrl;
  var service;
  var factory;

  beforeEach(inject(function($controller, $injector) {
    service = $injector.get('ContactsArray');
    //why do i have to set these variables in the before each and not the it block?
    service.currentContact = {
      'first_name': 'Christina',
      'last_name': 'Stewart',
      'description': 'I am a coder',
      'phone': '123-455-6789',
      'email': 'c@g.com'
    };
    service.isEditing = true;
    factory = $injector.get('Contact')
    myCtrl = $controller('ContactFormController');
  }))

  it('should set contact to new contact with proper properties', function() {
    expect(myCtrl.contact instanceof factory).toBeTruthy()
    expect(myCtrl.contact.first_name).toBe("Christina")
  });

  it('should set editing to ContactsArray.editing', function() {
    expect(myCtrl.isEditing).toBeTruthy();
  });

  it('when submit is called should push in new contact'), function() {
    myCtrl.submit();

    expect(service.contacts).toContain(myCtrl.contact);
  }
});
