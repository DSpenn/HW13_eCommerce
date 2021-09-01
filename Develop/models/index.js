// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  //onDelete: 'CASCADE'
});

Category.hasMany(Product, { // category can have multiple products but a product can only belong to one category.
  foreignKey: 'category_id',
  //onDelete: 'CASCADE'
});

Product.belongsToMany(Tag, {   // Define the third table needed to store the foreign key
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "product_id",
  },
  as: "product_Tags",
  //onDelete: 'CASCADE'
  });

Tag.belongsToMany(Product, {
    through: { 
      model: ProductTag,
      unique: false,
      foreignKey: "tag_id",
    },
    as: "tagged_Products",
    //onDelete: 'CASCADE'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
