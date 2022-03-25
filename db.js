const users = require("./data/users");
const restaurants = require("./data/restaurants");
const foods = require("./data/foods");
const reviews = require("./data/reviews");
const carts = require("./data/carts");
const favourites = require("./data/favourites");
const transaction_histories = require("./data/transaction_histories");
const detail_transactions = require("./data/detail_transactions");
const vouchers = require("./data/vouchers");

module.exports = {
    users,
    restaurants,
    foods,
    reviews,
    carts,
    favourites,
    transaction_histories,
    detail_transactions,
    vouchers
}