const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

class UserService {
  async registration(email, password) {
    const candidateExists = await UserModel.findOne({ email });

    if (candidateExists) {
      throw new Error(`Candidate with email of ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      email,
      hashPassword,
      activationLink,
    });
  }
}

module.exports = new UserService();
