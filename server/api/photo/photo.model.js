'use strict';

import mongoose from 'mongoose';

var PhotoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: String,
  active: Boolean
});

export default mongoose.model('Photo', PhotoSchema);
