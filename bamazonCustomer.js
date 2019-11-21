const inquirer = require("inquirer");
const mysql = require("mysql");

let productsAvailable = [];

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonPrime_db"
})

connection.connect(function (err) {
    if (err) throw err;
    visitBamazon();
})



function visitBamazon() {
    console.log("Welcome to Bamazon!");
    console.log("We currently have the following items available for sale:");
    const query = "SELECT item_id, product_name, price FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        productsAvailable = res;
        let wares = [];
        for (var i = 0; i < productsAvailable.length; i++) {
            let product = productsAvailable[i].item_id;
            wares.push(product);
            console.log("Item ID: " + productsAvailable[i].item_id + " || Product: " + productsAvailable[i].product_name + " || Price: " + productsAvailable[i].price)
        }
        inquirer
            .prompt([{
                name: "shop",
                message: "Is there anything you'd like to purchase?",
                type: "list",
                choices: ["Yes", "No"]
            }]).then(function (answer) {
                if (answer.shop === "Yes") {
                    inquirer
                        .prompt([{
                            name: "purchaseSelection",
                            message: "Please enter the Item ID number of the product you wish to buy:",
                            type: "input",

                        },
                        {
                            name: "purchaseQuantity",
                            message: "How many units of this item would you like to buy?",
                            type: "input",

                        }

                        ]).then(function (answers) {
                            let purchaseID = wares.indexOf(answers.purchaseSelection);
                            if (productsAvailable[purchaseID].stock_quantity >= 0) {
                                console.log('We have ' + productsAvailable[purchaseID].stock_quantity + ' available for purchase today!');
                                let remainingUnits = productsAvailable[purchaseID].stock_quantity - answers.purchaseQuantity;
                                if (remainingUnits = 0) {
                                    console.log("You bought the last item of this kind in stock!");
                                    connection.query("UPDATE products SET ? WHERE ?",
                                        [
                                            {
                                                stock_quantity: remainingUnits
                                            },
                                            {
                                                product_name: answers.purchaseSelection
                                            }
                                        ],
                                        function (err) {
                                            console.log(leftover);
                                            let cost = answers.purchaseQuantity * productsAvailable[purchaseID].price;
                                            console.log("Your total cost is $" + cost);
                                            console.log("Thank you for shopping with Bamazon!");
                                            connection.end();
                                        }
                                    );
                                } else if (remainingUnits < 0) {
                                    console.log("Sorry, we don't have that many units in stock!")
                                }
                            }  
                            else {
                                console.log("Sorry, we don't carry that! Please check back soon.")
                                connection.end();
                            }



                        })
                } else {
                    console.log("Thank you for considering Bamazon and please visit us again soon!");
                    connection.end();
                }
            }


            );
    });
}