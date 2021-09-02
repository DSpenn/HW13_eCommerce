// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, { // category can have multiple products but a product can only belong to one category.
  foreignKey: 'category_id',
});

// Define the third table needed to store the foreign key
Product.belongsToMany(Tag, {   // Define the third table needed to store the foreign key
  through: {
    model: ProductTag,
    //foreignKey: "product_id"
  },
  as: "product_Tags"
  });

Tag.belongsToMany(Product, {
    through: { 
      model: ProductTag,
      foreignKey: "tag_id"
    },
    as: "tagged_Products"
  });

    //onDelete: 'CASCADE'

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};