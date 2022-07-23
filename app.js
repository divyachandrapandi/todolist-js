//  --------------------REQUIRE PACKAGES ----------------------//
const express = require ('express');
const bodyParser = require ('body-parser');
const date = require(__dirname + "/date.js");

// function from date.js module
console.log(date.getstringfn()) 

// ---------------------EXPRESS SETUP ----------------------------//

const app = express();

// ---------------------EJS SETUP ----------------------------//

app.set('view engine', 'ejs');

// ----------------------BODY PARSER SETUP ----------------------------//

app.use(bodyParser.urlencoded({extended:true}));

// ----------------------STATIC SETUP ----------------------------//

app.use(express.static("public"));

// ----------------------ARRAYS TO STORE ITEMS ----------------------------//
const items =['Buy Food','Eat Food','Sleep'];
const workItems=[];

// ----------------------GET HOME PAGE---------------------------//

app.get("/", function(req,res){

    let day = date.getDate();  //THIS FUNCTION FROM DATE MODULE
    
    res.render('list', {listTitle : day, newListItems: items});   
});

// ------------------POST HOME ROUTE -------------------------//

app.post("/",function(req, res){

    let item = req.body.newItem;  //ITEM SUBMIT IN POST METHOD

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");  
    }
    else{
        items.push(item);
        res.redirect("/");  
    }
    })

// ------------------GET WORK ROUTE -------------------------//

app.get("/work", function(req,res){
    res.render("list",{listTitle : "Work", newListItems : workItems})
})

// ------------------POST WORK ROUTE -------------------------//

app.post("/work", function(req,res){
    
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

// ------------------ABOUT ROUTE -------------------------//

app.get("/about", function(req,res){
    res.render("about");
})

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

    // 4. to get date format in javascript use toLocaledateString

         // var options = {
        //     weekday: 'long',
        //     day: 'numeric',
        //     month:'long',
        // }

        // var day =today.toLocaleDateString("en-US", options);

    // 5. button --> name="list" value="workList"
        // using console.log(req.body), we can see

        // { newItem: 'essat', button: '' }
        // { newItem: 'essa', list: 'Saturday,' }
        // { newItem: 'read', list: 'WorkList' }

