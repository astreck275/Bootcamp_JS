console.log("Test JavaScript");
const jquery = require('jquery')

$ = window.$ = window.jQuery = jquery;

$(function() {

    let endpoint = "https://jsonplaceholder.typicode.com/todos/1"
    let endpoint2 = "https://jsonplaceholder.typicode.com/todos/"
    $.ajax(
        {
            url: endpoint2,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result[20])
                var id = document.getElementById("todoID")
                var title = document.getElementById("todoTitle")
                var isCompleted = document.getElementById("isC")
                id.innerHTML = "ID: " + result[20].id
                title.innerHTML = "Title: " + result[20].title
                isCompleted.innerHTML = "is Completed: " + result[20].completed
                console.log(Object.keys(result))
            }
        })

})