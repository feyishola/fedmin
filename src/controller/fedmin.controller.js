const ministryModel = require("../model/model");

class FedController {
  async createMinistry(name, acronym, logo) {
    try {
      const newMinistry = new ministryModel({
        name,
        acronym,
        logo,
      });
      const res = await newMinistry.save();
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getAllMinistries() {
    try {
      const res = await ministryModel.find();
      //   console.log("hello");
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getMinistryByAcronym(acronym) {
    try {
      acronym = acronym.toUpperCase();
      const res = await ministryModel.findOne({ acronym });
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getMinistryByName(name) {
    try {
      const res = await ministryModel({ name });
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new FedController();
