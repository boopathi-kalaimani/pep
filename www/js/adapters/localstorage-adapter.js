app.adapters.question = (function () {

    console.log("Loading localstorage adapter module");

    var findById = function (id) {

        var deferred = $.Deferred(),
            questions = JSON.parse(window.localStorage.getItem("questions")),
            question = null,
            l = questions.length;

        for (var i = 0; i < l; i++) {
            if (questions[i].id === id) {
                question = questions[i];
                break;
            }
        }

        deferred.resolve(question);
        return deferred.promise();
    }


    // Store sample data in Local Storage
    window.localStorage.setItem("questions", JSON.stringify(
        [
           {
               "id": 1, "question": "Tell us about yourself:", "choices": [{ "id": "11", "Answer": "I am a mom who buys toothpaste for my kids" }, { "id": "12", "Answer": "I am a dad and/or a husband" }, { "id": "13", "Answer": "I am a young professional" }, { "id": "14", "Answer": "I am a student" }, { "id": "15", "Answer": "I am retired" }]
           },

         {
             "id": 2, "question": "How much do you spend on toothpaste?", "choices": [{ "id": "21", "Answer": "Over R13" }, { "id": "22", "Answer": "Under R13" }]
         }
        ]
    ));

    // The public API
    return {
        findById: findById
    };


}());