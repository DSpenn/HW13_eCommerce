// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  //onDelete: 'CASCADE'
});

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  //// Define an alias for when data is retrieved
  //as: 'ProductTag',
  //onDelete: 'CASCADE'
  });

Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false,
    },
    //onDelete: 'CASCADE'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
