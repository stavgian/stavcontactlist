'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var contactsCtrlStub = {
  index: 'contactsCtrl.index',
  show: 'contactsCtrl.show',
  create: 'contactsCtrl.create',
  upsert: 'contactsCtrl.upsert',
  patch: 'contactsCtrl.patch',
  destroy: 'contactsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var contactsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './contacts.controller': contactsCtrlStub
});

describe('Contacts API Router:', function() {
  it('should return an express router instance', function() {
    expect(contactsIndex).to.equal(routerStub);
  });

  describe('GET /api/contacts', function() {
    it('should route to contacts.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'contactsCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/contacts/:id', function() {
    it('should route to contacts.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'contactsCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/contacts', function() {
    it('should route to contacts.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'contactsCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/contacts/:id', function() {
    it('should route to contacts.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'contactsCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/contacts/:id', function() {
    it('should route to contacts.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'contactsCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/contacts/:id', function() {
    it('should route to contacts.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'contactsCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
