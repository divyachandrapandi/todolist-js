//  -------------------REQUIRE PACKAGES ----------------------//
const express = require ('express');
const bodyParser = require ('body-parser');

// ----------------EXPRESS SETUP ----------------------------//
const app = express();

// ----------------EJS SETUP ----------------------------//

app.set('view engine', 'ejs');

// -------------------GET HOME PAGE---------------------------//
app.get("/", function(req,res){

    var today = new Date();
    
    
    var options = {
        weekday: 'long',
        day: 'numeric',
        month:'long',
    }

    var day =today.toLocaleDateString("en-US", options);
    
    res.render('list', {kindOfDay : day});  
});

// ------------------SERVER LISTENING -------------------------//
app.listen(5000, function(){
    console.log("Server running on port 5000");
});



//  --------------------------LESSONS-----------------------------//

//  1. DIFFERENCE B/W send, write, sendFile method in node-------//
        // res.send("<h1>Its weekend enjoy a movie</h1>")

        // res.write("<h1>Its weekend enjoy a movie</h1>")
        // res.write("<h1>hurray</h1>")
        // res.send(); 

        // res.sendFile(__dirname + "/index.html");

    // 2. TO GET DAY OF THE DATE USING getDay() 
    // var currentDay = today.getDay();

    // 3.  EJS TEMPLATIN <%%>
    // <% if (kindOfDay==='saturday'){ %>
    //     <h1 style="color:purple"> <%= kindOfDay %> TodoList</h1>
        
    // <% }else { %>
    //     <h1 style="color:rgb(30, 0, 255)"> <%= kindOfDay %> List</h1>
    // <% } %>
