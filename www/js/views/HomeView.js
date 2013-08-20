
var tdata = "";
var count = 1;
app.views.HomeView = Backbone.View.extend({

    initialize: function () {
        tdata = "";
        app.adapters.question.findById(parseInt(count)).done(function (data) {
            tdata = data;
        });
      

    },

    render: function () {
        this.$el.html(this.template());
        $(".answers-list").html("");
        $(".question").html("");
    
        var html = '<div class="question">' + tdata.question + '</div>';
        $('.scroller', this.el).append(html);
        for (var i = 0; i <= 4; i++) {
            if (tdata.choices[i].id != undefined && tdata.choices[i].id != null) {
                var id = tdata.choices[i].id;
                var value = tdata.choices[i].Answer;
                $('.answers-list', this.el).append("<li id=" + id + " name='quiz' class='' sel-value='" + id + "'>" + value + "</li>");
            }
        }

        return this;
    },

    events: {
        "click .answers-list li": "next"
    },

    next: function (event) {
        count++;
        $(".answers-list li").removeClass("active");
        $('li', this.el).addClass("active");
        checkans();
    }
   


});

function checkans() {
    var radios = document.getElementsByName('quiz');
    for (var i = 0; i < radios.length; i++) {

        if ($(".answers-list li").hasClass('active')) { //if this radio button is checked
            var userpick = $(".answers-list li").attr("sel-value");
            
        }
        //get index of correct answer
        $(".answers-list li.active").css("background", "green");
        $(".answers-list li.active").css("box-shadow", "0px 0px 15px rgba(0,0,0,0.8)");
      
    }
    tdata = "";
    app.adapters.question.findById(parseInt(count)).done(function (data) {
        tdata = data;
    });

    $(".answers-list").html("");
    $(".question").html("");
    if (tdata != null) {
        var html = '<div class="question">' + tdata.question + '</div>';
        $('.scroller', this.el).append(html);
        for (var i = 0; i <= 4; i++) {
            if (tdata.choices[i].id != undefined && tdata.choices[i].id != null) {
                var id = tdata.choices[i].id;
                var value = tdata.choices[i].Answer;
                $('.answers-list', this.el).append("<li id=" + id + " name='quiz' class='' sel-value='" + id + "'>" + value + "</li>");
            }
        }
    }
    else {
        var html = '<div class="question">Success! Thank You for your time! App is in progress</div>';
        $('.scroller', this.el).append(html);
    }
}