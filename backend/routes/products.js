const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.json({ message: 'Products route working' });
});

router.post('/', (req, res)=>{
  res.json({message:'Product created successfully', product: req.body})
})

module.exports = router;