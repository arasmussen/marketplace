// Copyright (c) Venzio 2013 All Rights Reserved

define(['mongoose'], function(mongoose) {
  var schema = mongoose.Schema({
    name: String,
    filename: String,
    created: Date
  });
  var animation = mongoose.model('animation', schema);
  return {
    model: animation,
    fetch: function(count, cb) {
      animation
        .find()
        .limit(count)
        .sort('-created')
        .exec(function(err, animations) {
          if (err) {
            console.error(err);
          }
          cb(animations);
        });
    }
  };
});
