const express = require("express")
const router = express.Router();
const {getTransaction, postTransaction, deleteTransaction} =require("../controller/transactionController")

router
.route("/:username")
.get(getTransaction)
.post(postTransaction)

router
.route("/:id")
.delete(deleteTransaction);

module.exports = {TransactionRouter: router}