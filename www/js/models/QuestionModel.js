
app.models.question = Backbone.Model.extend({

    initialize: function () {
        app.adapters.question.findById(parseInt(1)).done(function (data) {
           return (data);
        });
    },

    sync: function (method, model, options) {
        if (method === "read") {
          
           
        }
    }

});

