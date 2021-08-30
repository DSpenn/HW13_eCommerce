// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'ProductTag'
  });

Tag.belongsToMany(Product, {
    through: {
      model: Tag,
      unique: false
    },
  });


/*
//Traveller.belongsToMany(Location, {through: {model: Trips, unique: false}}); 

//Location.belongsToMany(Traveller, {through: {model: Trips, unique: false}});
Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

*/
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
