const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product, as: 'tagged_Products', through: ProductTag}]
  });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => { 
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product, as: 'tagged_Products', through: ProductTag, required:true}]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
}); 


router.post('/', async (req, res) => {
  try {
    console.log("req.body", req.body);
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});


  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  console.log("req.body", req.body);
  try {
    const tagData = await Tag.update(
      {
        id: req.params.id,
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      });
    if (!tagData[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json("Deleted Tag: " + req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
