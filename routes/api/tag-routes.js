const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData =  await Tag.findAll({
      include: [Product]
    })
      res.json(tagData)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data 
  try {
    const tag =  await Tag.findByPk(req.params.id, {
      include: [Product]
    })
      res.json(tag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
 
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const newTag =  await Tag.create(req.body);
      res.json(newTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag =  await Tag.update(body, { where: { id }});
      res.json(updateTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});


router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag =  await Tag.destroy(body, { where: { id }});
      res.json(deleteTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});

module.exports = router;
