const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {   // find all tags // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ association: 'tagged_Products', through: { attributes: ['id','product_id','tag_id'] }}]
  });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {    // find a single tag by its `id` // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ association: 'tagged_Products', through: {
        attributes: ['id','product_id','tag_id']
        }}]
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
    const tagData = await Tag.create({tag_name: req.body.tag_name,})
    res.status(200).json(tagData);  
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {   // update a tag's name by its `id` value
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
