angular.module('contactsApp')

.factory('Contact', function() {
  function Contact (first_name, last_name, description, phone, email) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.description = description;
    this.phone = phone;
    this.email = email
  };

 return Contact;
})

.directive('contactForm', function() {
  return {
    templateUrl: 'app/add/add_form.html',
    restrict: 'A',
    scope: {},
    controller: 'ContactFormController',
    controllerAs: 'formCtrl'
  }
})

.controller('ContactFormController', function($timeout, usSpinnerService, Contact, ContactsArray){
  var self = this;

  //can do angular.copy here instead of using the factory
  if (ContactsArray.currentContact) {
    self.contact = new Contact(ContactsArray.currentContact.first_name,
      ContactsArray.currentContact.last_name, ContactsArray.currentContact.description,
      ContactsArray.currentContact.phone, ContactsArray.currentContact.email);
  }

  self.isEditing = ContactsArray.isEditing;

  //if you want to only edit certain properties and not replace the whole object,
  //you can do ContactsArray.currentContact.last_name = self.contact.last_name, etc
  self.save = function() {
    ContactsArray.isEditing = false;
    self.isEditing = ContactsArray.isEditing;
    //other option ContactsArray.currentContact = self.contact;
    ContactsArray.contacts[ContactsArray.index] = self.contact;
    self.contact = null;
    ContactsArray.currentContact = null;
  }

  self.cancel = function() {
    ContactsArray.isEditing = false;
    self.isEditing = ContactsArray.isEditing;
    self.contact = null;
    ContactsArray.currentContact = null;
  }

  self.submit = function() {
    usSpinnerService.spin('spinner-1');
    $timeout(function(){usSpinnerService.stop('spinner-1')}, 1000)
    ContactsArray.contacts.push(self.contact)
  }
})

.controller('AddCtrl', function(ContactsArray){
  var self = this;

  self.contacts = ContactsArray.contacts
})