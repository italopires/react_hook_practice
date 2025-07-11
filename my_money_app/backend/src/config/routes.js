const express = require('express')

module.exports = function(server) {
  // Define base url for all routes
  const router = express.Router()
  server.use('/api', router)

  // Billing Cycle routes
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}