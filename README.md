# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Your Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Description

Uses the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

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

### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

[X] `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.
[X] `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.
> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

## Grading Requirements

This homework is graded based on the following criteria: 

[] The URL The GitHub repository containing your application code.
[] A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.
[] The walkthrough video must show all of the technical acceptance criteria being met.
[] The walkthrough video must demonstrate how to create the schema from the MySQL shell.
[] The walkthrough video must demonstrate how to seed the database from the command line.
[] The walkthrough video must demonstrate how to start the application’s server.
[] The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.
[] The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.
[] The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.
  [X] Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.
  [X] Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.
  [] Syncs Sequelize models to a MySQL database on the server start.
  [X] Includes column definitions for all four models outlined in the homework instructions.
  [X] Includes model associations outlined in the homework instructions.
[X] Repository has a unique name.
[X] Repository follows best practices for file structure and naming conventions.
[X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
[X] Repository contains multiple descriptive commit messages.
[] Repository contains quality readme with description and a link to a walkthrough video.

[] A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
[X] The URL of the GitHub repository