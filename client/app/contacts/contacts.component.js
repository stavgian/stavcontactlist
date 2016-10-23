import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './contacts.routes';

export class ContactsController {
    $http;
    socket;
    awesomeContacts = [];
    newContact = '';

    /*@ngInject*/
    constructor($http, $scope, socket) {
        this.$http = $http;
        this.socket = socket;

        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('contacts');
        });
    }

    $onInit() {
        this.$http.get('/api/contacts')
            .then(response => {
                this.awesomeContacts = response.data;
                this.socket.syncUpdates('contacts', this.awesomeContacts);
            });
    }

    addContact() {
        if(this.newContact) {
            this.$http.post('/api/contacts', {
                firstname: this.newContact.firstname,
                lastname: this.newContact.lastname,
                email: this.newContact.email
            }).then(res => {
               console.log(res);
            });
            this.newContact = '';
        }
    }

    deleteContact(contacts) {
        this.$http.delete(`/api/contacts/${contacts._id}`).then(res => {
            console.log('Deleted:',res);
        });
    }
}

export default angular.module('meanFullstackApp.contacts', [uiRouter])
    .config(routing)
    .component('contacts', {
        template: require('./contacts.html'),
        controller: ContactsController
    })
    .name;
