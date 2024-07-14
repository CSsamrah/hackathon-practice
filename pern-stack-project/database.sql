CREATE DATABASE glowquester;

 create table customer(user_id varchar(10) primary key,username varchar(30) not null,password varchar(20) not null,email varchar(50) not null,phoneNo bigint not null,address varchar(100) not null);

 create table product(product_id varchar(10) primary key,product_name varchar(100) not null,description varchar(10000) not null,price bigint not null,picture bytea not null,quantity bigint not null,category_id varchar(10) not null);

 create table customer_order(order_id varchar(10) primary key,product_id varchar(10) not null,user_id varchar(10) not null,total_amount bigint not null,total_quantity bigint not null,status varchar(20) not null);

 create table category(category_id varchar(20) primary key, category_type varchar(100));

 create table payment(payment_id varchar(20) primary key, user_id varchar(10),order_id varchar(10),payment_amount bigint,payment_method varchar(200),payment_status varchar(100),payment_date date);

 create table shipment(shipping_id varchar(20) primary key, order_id varchar(10),shipping_address varchar(500),shipment_date date,delivery_date date ,status varchar(100),tracking_number varchar(200));