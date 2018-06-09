DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

use bamazon;

CREATE TABLE products (
   item_id INT NOT NULL AUTO_INCREMENT, 
   product_name VARCHAR(255) NOT NULL,
   department_name VARCHAR(255) NOT NULL,
   price INT(10) NOT NULL,
   stock_quantity INT(10) NOT NULL,
   PRIMARY KEY(item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Bat", "Sporting Goods", 50, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Glove", "Sporting Goods", 60, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Cleats", "Sporting Goods", 100, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Helmet", "Sporting Goods", 75, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Pants", "Sporting Goods", 50, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Shirt", "Sporting Goods", 40, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball", "Sporting Goods", 25, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Catcher's Mit", "Sporting Goods", 150, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Catcher's Helmet", "Sporting Goods", 175, 1000);
insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Shin Guards", "Sporting Goods", 60, 1000);