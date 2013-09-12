// Copyright (c) Venzio 2013 All Rights Reserved

define([
    'basejs',
    'model/animation',
  ],
  function(Base, Animation) {
    return Base.extend({
      constructor: function(request) {
        this.request = request;
      },

      handle: function() {
        Animation.fetch(10, this.respond.bind(this));
      },

      respond: function(anims) {
        var content = '';
        for (var i = 0; i < anims.length; i++) {
          content += anims[i].created;
        }
        this.request.respond200(
          this.request.addTemplates(content)
        );
      }
    });
  }
);
