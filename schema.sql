DROP DATABASE IF EXISTS bamazonPrime_db;

CREATE DATABASE bamazonPrime_db;
USE bamazonPrime_db;

CREATE TABLE products
(
    item_id INT(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INT(10) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
  );

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Fresh Turkey", "Food", 20, 10);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Cornucopia Centerpiece", "Decor", 15, 5);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Pumpkin Pie", "Food", 5, 30);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Fine China", "Kitchen Supplies", 200, 5);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Seasonal Table Cloth", "Decor", 25, 25);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Carving Knife", "Kitchen Supplies", 50, 10);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Meat Thermometer", "Kitchen Supplies", 15, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Cranberry Sauce", "Food", 5, 50);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Autumn Candles", "Decor", 10, 20);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Baking Dish", "Kitchen Supplies", 15, 30);
    
  
