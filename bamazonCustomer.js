var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('cli-table');

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root123123",
    database: "bamazon01"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
//  buyAndVerify();
});


function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });
  console.log(bamazon01.sql);
}

//function queryAllProducts() {
//  connection.query("SELECT * FROM products", function(err, res) {
//    var table = new Table({
//      head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity']
//    });

//   console.log("Check out the items we have available for purchase!");
//    console.log("===================================================");
//    for (var i = 0; i < res.length; i++) {
//      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
//    }
//    console.log("===================================================");
//    console.log(table.toString());

//    for (var i = 0; i < res.length; i++) {
//      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//    }
//    console.log("-----------------------------------");
//  });
//  console.log(bamazon.sql);
//}

//function buyAndVerify(){
//  inquirer.prompt({
//    name:"itemId",
//    type: "input",
//    message: "What is the item ID you would like to purchase?",
//    validate: function(value) {
//      if (isNaN(value) == false) {
//        return true;
//      } else {
//        return false;
//      }
//      }
//  })
//}

//var buyAndVerify = function() {
//connection.query('SELECT * FROM products', function(err, res) {
//    var table = new Table({
//      head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity']
//    });

//    console.log("Check out the items we have available for purchase!");
//    console.log("===================================================");
//    for (var i = 0; i < res.length; i++) {
//      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
//    }
//    console.log("===================================================");
//    console.log(table.toString());
//    inquirer.prompt([{
//      name: "itemId",
//      type: "input",
//      message: "What is the item ID you would like to purchase?",
//      validate: function(value) {
//        if (isNaN(value) == false) {
//          return true;
//        } else {
//          return false;
//        }
//      }
//    }, {
//      name: "Quantity",
//      type: "input",
//      message: "How many of this item ID would you like to purchase?",
//      validate: function(value) {
//        if (isNaN(value) == false) {
//          return true;
//        } else {
//          return false;
//        }
//    }
//}]).then(function(answer) {
//  var chosenId = answer.itemId - 1
//  var chosenProduct = res[chosenId]
//})
