// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {
$(function() {

  $(".create-form").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

   //create new burger
   var newBurger = {
    burger_name: $("#newburger")
    .val()
    .trim(),
    devoured: 0
  };

   // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });


    $(".eatburger").on("click", function (event) {
      console.log("This is clicked")
    event.preventDefault();

    var id = $(this).data("id");
    console.log(id)
    var devouredState = {
      devoured: 1
    };
    //put request to place it in the other column
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("devoured");
        // Reload the page to get the updated list
        location.reload();
      });
  });
  
  // on click  to delete the 
   $(".delete-burger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
        
    // Send the Delete request.

    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
})
// the end  
})});
