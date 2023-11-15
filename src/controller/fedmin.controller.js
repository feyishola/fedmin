const ministryModel = require("../model/model");
const DatafromJson = require("../ministries.json");

class FedController {
  constructor() {
    this.#init();
  }

  async #init() {
    try {
      const res = await this.getAllMinistries();

      if (res.data.length == 0) {
        const mappedData = DatafromJson.map((data) => ({
          name: data["NAME OF MINISTRY"],
          acronym: data.ACRONYM,
          ministerName: data["HON. MINISTERS"],
          url: data.URL,
          logo: data.LOGO,
        }));

        await ministryModel.insertMany(mappedData);

        // return { ok: true, data: ministries };
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async createMinistry(data) {
    try {
      const newMinistry = new ministryModel(data);
      const res = await newMinistry.save();
      return { ok: true, data: res };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async getAllMinistries() {
    try {
      const res = await ministryModel.find();

      return { ok: true, data: res };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async getMinistryByAcronym(acronym) {
    try {
      acronym = acronym.toUpperCase();
      const res = await ministryModel.findOne({ acronym });
      return { ok: true, data: res };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async getMinistryById(id) {
    try {
      const res = await ministryModel.findById(id);
      return { ok: true, data: res };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }
}

module.exports = new FedController();

// async function readFileFromJson() {
//   let data = fs.readFileSync(filePath, "utf8");
//   let ministries = JSON.parse(data);

//   return { ok: true, data: ministries };
// }

// async checkAndCreateMinistries() {
//   try {
//     const ministries = await this.getAllMinistries();

//     if (ministries.data.length == 0) {
//       const data = fs.readFileSync(filePath, "utf8");
//       const ministries = JSON.parse(data);

// for (const ministry of ministries) {
//   const {
//     "NAME OF MINISTRY": name,
//     ACRONYM: acronym,
//     HON_MINISTERS: ministers,
//     URL: url,
//   } = ministry;

//   const res = await this.createMinistry(name, acronym, ministers, url);
//   if (!res.ok) {
//     return { ok: false, message: "Ministries not created" };
//   } else {
//     return { ok: true, data: res };
//   }
// }
//       console.log(ministries);
//     }
//   } catch (error) {
//     return { ok: false, message: error.message };
//   }
// }
