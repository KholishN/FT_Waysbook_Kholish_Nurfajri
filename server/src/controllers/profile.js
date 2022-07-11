const { user, profile } = require("../../models");

exports.getProfile = async (req, res) => {
  try {
    let { id } = req.user;

    let data = await profile.findOne({
      where: {
        idUser: id,
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "password", "updatedAt", "id"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Get Profile Failed",
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.user;

    let data = {
      gender: req?.body?.gender,
      phone: req?.body?.phone,
      address: req?.body?.address,
      avatar: process.env.PATH_FILE_AVA + req?.file?.filename,
    };

    await profile.update(data, {
      where: {
        idUser: id,
      },
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Edit Profile Failed",
    });
  }
};
