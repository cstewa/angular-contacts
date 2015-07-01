'use strict';

// here's what I did to make this work...

// In Index.js add state:

// .state('edit', {
//         url:'edit/:userId',     <---- notice i put a placeholder called userId
//         templateUrl: 'app/add/add.html',
//         controller: 'AddCtrl',
//         controllerAs: 'addCtrl'
// })

// In main.html I removed  --> ui-sref="add"

// In Main Ctrl I added $state service and changed "editing" function to this:
//     self.editing = function(contact, index) {
//       $state.go('edit', {userId: index});   <-- this take me to the 'edit' state and will swap out the placeholder from above
//     }

// Last step in ContactFormController I removed all the ContactsArray code to check for isEditing and replace it with this....

//   if ($stateParams.userId) {  <-- don't forget to ask for $stateParams service.
//     self.isEditing = true;
//     self.contact = angular.copy(ContactsArray.contacts[$stateParams.userId]);
//   }


// $stateParams service will give you the userId that was passed from the MainCtrl in the URL.  Notice the URL in this view.

// Let me know if you have any questions
// George Dagher


angular.module('contactsApp')
  .service('ContactsArray', function() {
    this.index,
    this.isEditing = false,
    this.currentContact,
    this.contacts = [
      {
        'first_name': 'Christina',
        'last_name': 'Stewart',
        'description': 'I am a coder',
        'phone': '123-455-6789',
        'email': 'c@g.com'
      },
      {
        'first_name': 'Austin',
        'last_name': 'BlackEye',
        'description': 'I am in advertising',
        'phone': '123-455-6789',
        'email': 'c@g.com'
      },
      {
        'first_name': 'Lauren',
        'last_name': 'ChocolatePants',
        'description': 'I am a CEO    ',
        'phone': '123-455-6789',
        'email': 'c@g.com'
      }
    ];
  })

  .directive('contactDetail', function() {
    return {
      templateUrl: 'app/main/detail.html',
      restrict: 'A',
      scope: {
        currentContact: '='
      },
    }
  })

  .controller('MainCtrl', function (ContactsArray) {
    var self = this;

    self.contacts = ContactsArray.contacts;

    self.editing = function(contact, index) {
      ContactsArray.isEditing = true;
      ContactsArray.currentContact = contact;
      ContactsArray.index = index;
    }
  });
