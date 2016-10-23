'use strict';

var app = require('../..');
import request from 'supertest';

var newContacts;

describe('Contacts API:', function() {
  describe('GET /api/contacts', function() {
    var contactss;

    beforeEach(function(done) {
      request(app)
        .get('/api/contacts')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          contactss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(contactss).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/contacts', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/contacts')
        .send({
          name: 'New Contacts',
          info: 'This is the brand new contacts!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newContacts = res.body;
          done();
        });
    });

    it('should respond with the newly created contacts', function() {
      expect(newContacts.name).to.equal('New Contacts');
      expect(newContacts.info).to.equal('This is the brand new contacts!!!');
    });
  });

  describe('GET /api/contacts/:id', function() {
    var contacts;

    beforeEach(function(done) {
      request(app)
        .get(`/api/contacts/${newContacts._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          contacts = res.body;
          done();
        });
    });

    afterEach(function() {
      contacts = {};
    });

    it('should respond with the requested contacts', function() {
      expect(contacts.name).to.equal('New Contacts');
      expect(contacts.info).to.equal('This is the brand new contacts!!!');
    });
  });

  describe('PUT /api/contacts/:id', function() {
    var updatedContacts;

    beforeEach(function(done) {
      request(app)
        .put(`/api/contacts/${newContacts._id}`)
        .send({
          name: 'Updated Contacts',
          info: 'This is the updated contacts!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedContacts = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedContacts = {};
    });

    it('should respond with the original contacts', function() {
      expect(updatedContacts.name).to.equal('New Contacts');
      expect(updatedContacts.info).to.equal('This is the brand new contacts!!!');
    });

    it('should respond with the updated contacts on a subsequent GET', function(done) {
      request(app)
        .get(`/api/contacts/${newContacts._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let contacts = res.body;

          expect(contacts.name).to.equal('Updated Contacts');
          expect(contacts.info).to.equal('This is the updated contacts!!!');

          done();
        });
    });
  });

  describe('PATCH /api/contacts/:id', function() {
    var patchedContacts;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/contacts/${newContacts._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Contacts' },
          { op: 'replace', path: '/info', value: 'This is the patched contacts!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedContacts = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedContacts = {};
    });

    it('should respond with the patched contacts', function() {
      expect(patchedContacts.name).to.equal('Patched Contacts');
      expect(patchedContacts.info).to.equal('This is the patched contacts!!!');
    });
  });

  describe('DELETE /api/contacts/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/contacts/${newContacts._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when contacts does not exist', function(done) {
      request(app)
        .delete(`/api/contacts/${newContacts._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
