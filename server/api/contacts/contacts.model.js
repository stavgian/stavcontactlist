'use strict';

import mongoose from 'mongoose';

var ContactsSchema = new mongoose.Schema({
  contact_id: {type: String},
  firstname: String,
  lastname: String,
  email: String,
  active: Boolean
});

export default mongoose.model('Contacts', ContactsSchema);
