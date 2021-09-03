const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint
// get all products
router.get('/', async (req, res) => { 
  try {
    const productData = await Product.findAll({
      include: [{ model:Category, attributes: ['category_name'] },
        { association: 'product_Tags', through: { attributes: ['id','product_id','tag_id'] }}]
      //include: [{ model:Category }, { model: Tag, through: ProductTag, as: "product_Tags", required:true}]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
}); 

  // find a single product by its `id` // be sure to include its associated Category and Tag data
  router.get('/:id', async (req, res) => { 
    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [{ model:Category, attributes: ['category_name'] },
          { association: 'product_Tags', through: { attributes: ['id','product_id','tag_id'] }}]
      });
      if (!productData) {
        res.status(404).json({ message: 'No Product found with this id!' });
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
    const product = await Product.create({product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id})
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) { 
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        // if no product tags, just respond
        return ProductTag.bulkCreate(productTagIdArr)
        //return Promise.all([ProductTag.bulkCreate(productTagIdArr)]);
      }
        res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {       // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {       // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds       // create filtered list of new tag_ids
        .filter(({ tag_id }) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      const productTagsToRemove = productTags       // figure out which ones to remove
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      return Promise.all([       // run both actions
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => { // delete one product by its `id` value
  try {
    const ProductData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!ProductData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }
    res.status(200).json("Deleted Product with ID:"+ req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
