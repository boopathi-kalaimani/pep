app.views.QuestionListView = Backbone.View.extend({

    tagName:'ul',

    attributes: {class: 'topcoat-list list'},

    initialize:function () {
        var self = this;
        //this.model.on("reset", this.render, this);
        //this.model.on("add", function (question) {
        //    self.$el.append(new app.views.AnswerListItemView({ model: question }).render().el);
        //});
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (question) {
            this.$el.append(new app.views.AnswerListItemView({ model: question }).render().el);
        }, this);
        return this;
    }
});

app.views.AnswerListItemView = Backbone.View.extend({

    tagName:"li",

    className:"topcoat-list__item",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});