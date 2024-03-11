1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
The relation between "Product" and "Product_Category" is One-to-Many Relationship.
The "Product_Category" entity acts as a container for various products based on category.
It allows efficient management and retrieval of products based on their category.


2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
Using Foreign Key:

Add a foreign key constraint between the "Product" table and the "Product_Category" table.
The "category_id" column in the "Product" table should reference the "id" column in the "Product_Category" table.
This ensures that every product’s category_id corresponds to an existing category.
Input validation:

When inserting or updating a product, validate that the specified category ID exists in the "Product_Category" table.
If the category ID is invalid, reject the operation.