// Copyright (c) Venzio 2013 All Rights Reserved

define([
    'basejs',
    'model/model'
  ],
  function(Base, Model) {
    return Base.extend({
      constructor: function(request) {
        this.request = request;
      },

      handle: function() {
        Model.fetch(10, this.respond.bind(this));
      },

      respond: function(models) {
        var content = '';
        for (var i = 0; i < models.length; i++) {
          content += models[i].created;
        }
        this.request.respond200(
          this.request.addTemplates(content)
        );
      }
    });
  }
);
