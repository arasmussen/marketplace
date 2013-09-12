// Copyright (c) Venzio 2013 All Rights Reserved

define(['mongoose'], function(mongoose) {
  var schema = mongoose.Schema({
    name: String,
    filename: String,
    created: Date
  });
  var model = mongoose.model('model', schema);
  return {
    model: model,
    fetch: function(count, cb) {
      model
        .find()
        .limit(count)
        .sort('-created')
        .exec(function(err, models) {
          if (err) {
            console.error(err);
          }
          cb(models);
        });
    }
  };
});
