const express = require('express')
const {DB_init,gettransaction, getTransactionStatistics,getStatisticsForPieChart,getStatisticsForBarChart,getCombineStatistics} = require('../controller/transactionController')
  

const Router = express.Router()

Router.route("/db_init").get(DB_init) 
Router.route("/transactions").get(gettransaction) 
Router.route("/transactions/statistics/sells").get(getTransactionStatistics) 
Router.route("/transactions/statistics/pieChart").get(getStatisticsForPieChart) 
Router.route("/transactions/statistics/barChart").get(getStatisticsForBarChart) 
Router.route("/transactions/statistics/combine").get(getCombineStatistics) 
  
 

module.exports = Router