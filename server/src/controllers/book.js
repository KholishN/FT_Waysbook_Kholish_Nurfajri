const { book } = require("../../models");
const { Op } = require("sequelize");

exports.promoBooks = async (req, res) => {
  try {
    let data = await book.findAll({
      where: {
        price: {
          [Op.lte]: 50000,
        },
      },
    });

    data = JSON.parse(JSON.stringify(data));
    data = data.map((item) => {
      return {
        ...item,
        bookPdf: process.env.PATH_FILE_IMG + item.bookPdf,
        bookImg: process.env.PATH_FILE_IMG + item.bookImg,
      };
    });

    res.send({
      status: "success",
      data: {
        promoBooks: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Error Promo Books",
    });
  }
};

exports.getBooks = async (req, res) => {
  try {
    let data = await book.findAll({
      where: {
        price: {
          [Op.gt]: 50000,
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));
    data = data.map((item) => {
      return {
        ...item,
        bookPdf: process.env.PATH_FILE_PDF + item.bookPdf,
        bookImg: process.env.PATH_FILE_IMG + item.bookImg,
      };
    });

    res.status(200).send({
      status: "Success",
      message: "Here Books",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Server Fatching Books",
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const id = req.params.id;

    let data = await book.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      bookPdf: process.env.PATH_FILE_IMG + data.bookPdf,
      bookImg: process.env.PATH_FILE_IMG + data.bookImg,
    };

    res.status(200).send({
      status: "Success",
      message: `Here Book with id: ${id}`,
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Server Fatching Book",
    });
  }
};

exports.addBooks = async (req, res) => {
  try {
    let data = await book.create({
      ...req.body,
      bookImg: req.files.bookImg[0].filename,
      bookPdf: req.files.bookPdf[0].filename,
    });

    res.status(200).send({
      status: "Success",
      message: "Here Books",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server Add Book",
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const id = req.params;
    let data = await book.findOne({
      where: {
        id,
      },
    });

    if (!data) {
      return res.send({
        message: `Product with ID: ${id} not found!`,
      });
    }
    data = JSON.parse(JSON.stringify(data));

    const newData = {
      title: req?.body?.title || data.title,
      year: req?.body?.year || data.year,
      pages: req?.body?.pages || data.pages,
      ISBN: req?.body?.ISBN || data.ISBN,
      author: req?.body?.author || data.author,
      price: req?.body?.price || data.price,
      bookImg: req?.files?.filename || data.bookImg,
      bookPdf: req?.files?.filename || data.bookPdf,
      desc: req?.body.desc || data.desc,
      idUser: req?.user?.id || data.user_id,
    };

    await book.update(newData, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "success",
      data: {
        product: newData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Update Book Error",
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params;
    await book.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      status: "success",
      data: {
        id: id,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Delete Book Error",
    });
  }
};
