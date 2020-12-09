-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
    p.ProductName,
    c.CategoryName
from product p
join category c
    on p.CategoryId = c.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select
    o.Id,
    s.CompanyName,
    o.OrderDate
from "Order" o
join shipper s
    on o.ShipVia = s.Id
where o.OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
    p.ProductName,
    od.Quantity
from orderdetail od
join product p
    on od.ProductId = p.Id
where od.OrderId = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
    o.Id,
    c.CompanyName,
    e.LastName
from "order" o
join customer c
    on o.CustomerId = c.Id
join employee e
    on o.EmployeeId = e.Id