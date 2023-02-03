// const asyncHandler = require('express-async-handler')
// const Order = require('../models/orderModel')

// // Set Order
// // POST /api/orders
// const setOrders = asyncHandler(async (req, res) => {
//   if (!req.body.table || !req.body.order) {
//     res.status(400)

//     throw new Error('Please add Table and Order')
//   }

//   const order = await Order.create({
//     table: req.body.table,
//     seat: req.body.seat,
//     order: req.body.order,
//     fire: false
//   })

//   res.status(200).json(order)
// })

// // get orders
// // GET /api/orders
// const getOrders = asyncHandler(async (req, res) => {
//   const orders = await Order.find()

//   res.status(200).json(orders)
// })

// // Fire order
// // /api/orders/:id
// const fireOrder = asyncHandler(async (req, res) => {
//   const order = await Order.findById(req.params.id)
//   const update = { fire: true }
//   if (!order) {
//     res.status(400)
//     throw new Error('order not found')
//   }

//   const updatedOrder = await Order.findByIdAndUpdate(order, update, {
//     new: true
//   })
//   res.status(200).json(updatedOrder)
// })

// module.exports = {
//   getOrders,
//   setOrders,
//   fireOrder
// }
