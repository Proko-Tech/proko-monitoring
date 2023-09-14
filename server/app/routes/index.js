const express = require('express');
const router = new express.Router();

const ServiceRouter = require('./service');
const ServerRouter = require('./server');

router.use('/service', ServiceRouter);

router.use('/server', ServerRouter);

module.exports = router;