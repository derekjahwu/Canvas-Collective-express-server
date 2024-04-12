const express = require('express');
const router = express.Router();

// Load Painting model
const Painting = require('../../models/Painting');

// @route   GET api/painting
// @desc    Get all painting
// @access  Public
router.get('/', (req, res) => {
  Painting.find()
    .then(painting => res.json(painting))
    .catch(err => res.status(404).json({ nopaintingsfound: 'No Books found' }));
});

// @route   GET api/painting/:id
// @desc    Get single painting by id
// @access  Public
router.get('/:id', (req, res) => {
    Painting.findById(req.params.id)
    .then(painting => res.json(painting))
    .catch(err => res.status(404).json({ nopaintingfound: 'No Book found' }));
});

// @route   POST api/painting
// @desc    Add/save painting
// @access  Public
router.post('/', (req, res) => {
    Painting.create(req.body)
    .then(painting => res.json({ msg: 'Painting added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this painting' }));
});

// @route   PUT api/paintings/:id
// @desc    Update painting by id
// @access  Public
router.put('/:id', (req, res) => {
    Painting.findByIdAndUpdate(req.params.id, req.body)
    .then(painting => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route   DELETE api/paintings/:id
// @desc    Delete painting by id
// @access  Public
router.delete('/:id', (req, res) => {
    Painting.findByIdAndDelete(req.params.id)
    .then(painting => res.json({ mgs: 'Painting entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such painting' }));
});

module.exports = router;