import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');
const router = new express.Router();

router.get('/', async function(req, res) {
  return res.status(200).json({status: 'success'});
});

export default router;
