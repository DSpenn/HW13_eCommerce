# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Description

Uses the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

## Video

[![Walkthrough Video]](https://user-images.githubusercontent.com/84486941/131939818-b7bd60dd-3445-44a8-b08a-f62f5cd5833b.mp4)

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

### Database Models

Your database should contain the following four models, including the requirements listed for each model:
```md
[X] `Category`
  [X] `id`
    [X] Integer.
    [X] Doesn't allow null values.
    [X] Set as primary key.
    [X] Uses auto increment.
  [X] `category_name`
    [X] String.
    [X] Doesn't allow null values.
* `Product`
  [X] `id`
    [X] Integer.
    [X] Doesn't allow null values.
    [X] Set as primary key.
    [X] Uses auto increment.
  [X] `product_name`
    [X] String.
    [X] Doesn't allow null values.
  * `price`
    [X] Decimal.
    [X] Doesn't allow null values.
    [X] Validates that the value is a decimal.
  * `stock`
    [X] Integer.
    [X] Doesn't allow null values.
    [X] Set a default value of `10`.
    [X] Validates that the value is numeric.
  [X] `category_id`
    [X] Integer.
    [X] References the `Category` model's `id`.
[X] `Tag`
  [X] `id`
    [X] Integer.
    [X] Doesn't allow null values
    [X] Set as primary key.
    [X] Uses auto increment.
  [X] `tag_name`
    [X] String.
[] `ProductTag`
  [X] `id`
    [X] Integer.
    [X] Doesn't allow null values.
    [X] Set as primary key.
    [X] Uses auto increment.
  [x] `product_id`
    [X] Integer.
    [X] References the `Product` model's `id`.
  [x] `tag_id`
    [X] Integer.
    [X] References the `Tag` model's `id`.
```
### Associations
```
[X] `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.
[X] `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.
```
## Grading Requirements
```
This homework is graded based on the following criteria: 

[X] The URL The GitHub repository containing your application code.
[X] A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.
[X] The walkthrough video must show all of the technical acceptance criteria being met.
[X] The walkthrough video must demonstrate how to create the schema from the MySQL shell.
[X] The walkthrough video must demonstrate how to seed the database from the command line.
[X] The walkthrough video must demonstrate how to start the application’s server.
[X] The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.
[X] The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.
[X] The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.
[X] A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
[X] Connects to a MySQL database using MySQL2 and Sequelize packages.
[X] Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the dotenv package.
[X] Syncs Sequelize models to a MySQL database on the server start.
[X] Includes column definitions for all four models outlined in the homework instructions.
[X] Includes model associations outlined in the homework instructions.
[X] Repository has a unique name.
[X] Repository follows best practices for file structure and naming conventions.
[X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
[X] Repository contains multiple descriptive commit messages.
[] Repository contains quality readme with description and a link to a walkthrough video.
[X] The URL of the GitHub repository
```