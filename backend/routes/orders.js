const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.json({ message: 'Orders route working' });
});

router.post('/', (req, res) =>{
  res.json({message:'route working boy'})
});

module.exports = router;