const { user, profile } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    let data = req.body;

    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(3).required(),
      name: joi.string().min(3).required(),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.status(400).send({
        error: error.details[0].message,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);

    const newUser = await user.create({
      name: data.name,
      email: data.email,
      password: hashPassword,
      role: "customer",
    });

    const dataToken = { id: newUser.id };
    await profile.create({
      gender: null,
      phone: null,
      address: null,
      avatar: null,
      idUser: newUser.id,
    });
    const token = jwt.sign(dataToken, process.env.TOKEN_KEY);

    res.status(200).send({
      message: "Registration Success",
      data: {
        name: newUser.name,
        email: newUser.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const dataa = req.body;

    let data = await user.findOne({
      where: {
        email: dataa.email,
      },
    });

    if (!data) {
      return res.status(400).send({
        message: "Wrong Email",
      });
    }

    const hashPassword = await bcrypt.compare(dataa.password, data.password);

    if (!hashPassword) {
      return res.status(400).send({
        message: "Wrong Password",
      });
    }

    const dataToken = { id: data.id };
    const token = jwt.sign(dataToken, process.env.TOKEN_KEY);

    res.status(200).send({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        token,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const id = req.user.id;

    const data = await user.findOne({
      where: {
        id,
      },
      attibutes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!data) {
      res.status(404).send({
        message: "Failed to Auth",
      });
    }

    res.status(200).send({
      status: "success",
      data: {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const data = await user.findAll({
      include: {
        model: profile,
        as: "profile",
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};
