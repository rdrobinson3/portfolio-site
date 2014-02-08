/**
 * Created by rrobinson on 12/19/13.
 */
$(document).ready(function() {

    var parseAPPID = "X5T1e3ZekYxOuqo7xnOVZDCSApXnV0SwtHoG9VuB";
    var parseJSID = "ZU2ULmq3h2xZ3Iv3fAoKYZ3ILavf5VfMyly1YdXt";

    Parse.initialize(parseAPPID, parseJSID);
    var CommentObject = Parse.Object.extend("CommentObject");

    $("#contactForm").on("submit", function(e) {
        e.preventDefault();

        $("#successBox").addClass("hide");
        $("#errorBox").addClass("hide");

        console.log("Handling the submit");
        //add error handling here
        //gather the form data


        var data = {};
        data.name = $("#inputName").val();
        data.email = $("#inputEmail").val();
        data.comments = $("#inputMessage").val();

        var comment = new CommentObject();
        comment.save(data, {
            success:function() {
                console.log("Success");
                //Alerts are lame - but quick and easy
                $("#successBox").slideDown(400).removeClass("hide");
            },
            error:function(e) {
                console.dir(e);
                $("#errorBox").slideDown(400).removeClass("hide");
            }
        });

    });

});