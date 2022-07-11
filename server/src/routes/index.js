const express = require("express");
const { auth } = require("../middleware/auth.js");

const { register, login, checkAuth } = require("../controllers/auth.js");
const {
  addBooks,
  getBooks,
  getBook,
  promoBooks,
  updateBook,
} = require("../controllers/book.js");
const { uploadImg } = require("../middleware/uploadAvatar.js"); // One Image for Profile
const { uploadFiles } = require("../middleware/uploadFile.js"); // Multiple Files

const { getProfile, updateProfile } = require("../controllers/profile.js");
const { addCart, getCart, deleteCart } = require("../controllers/cart.js");
const {
  addTransaction,
  getTransactions,
  notification,
} = require("../controllers/transaction.js");
const {
  getPurchased,
  getOnePurchased,
} = require("../controllers/purchased.js");

const router = express.Router();
// auth
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

// book
router.get("/books", getBooks);
router.get("/promo-books", promoBooks);
router.get("/book/:id", auth, getBook);
router.post("/book", auth, uploadFiles("bookPdf", "bookImg"), addBooks);
router.patch("/book/:id", auth, uploadFiles("bookPdf", "bookImg"), updateBook);
// profile
router.get("/profile", auth, getProfile);
router.patch("/profile", auth, uploadImg("avatar"), updateProfile);

// cart
router.post("/cart", auth, addCart);
router.get("/carts", auth, getCart);
router.delete("/cart/:id", auth, deleteCart);

// transaction
router.post("/transaction", auth, addTransaction);
router.get("/transactions", auth, getTransactions);
router.post("/notification", notification);

// purchased
router.get("/purchased-books", auth, getPurchased);
router.get("/purchased/:id", auth, getOnePurchased);

module.exports = router;
