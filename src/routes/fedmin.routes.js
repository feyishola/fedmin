const ministryController = require("../controller/fedmin.controller");
const { Router } = require("express");

let api = new Router();

module.exports = () => {
  api.post("/", async (req, res) => {
    try {
      let { name, acronym, logo } = req.body;
      let ministry = await ministryController.createMinistry(
        name,
        acronym,
        logo
      );
      res.status(200).json({ ok: true, payload: ministry });
    } catch (err) {
      res.status(500).json({ ok: false, error: err.message });
    }
  });

  api.get("/", async (req, res) => {
    try {
      let ministries = await ministryController.getAllMinistries();
      res.status(200).json({ ok: true, payload: ministries });
    } catch (err) {
      res.status(500).json({ ok: false, error: err.message });
    }
  });

  // api.get("/:name", async (req, res) => {
  //   try {
  //     let name = req.params.name;
  //     let ministry = await ministryController.getMinistryByName(name);
  //     res.status(200).json({ ok: true, payload: ministry });
  //   } catch (err) {
  //     res.status(500).json({ ok: false, error: err.message });
  //   }
  // });

  api.get("/:searchparams", async (req, res) => {
    try {
      let searchparams = req.params.searchparams;
      let ministry;

      //   if (searchparams.includes(" ")) {
      //     ministry = await ministryController.getMinistryByName(searchparams);
      //   } else {
      //     ministry = await ministryController.getMinistryByAcronym(searchparams);
      //   }

      ministry = await ministryController.getMinistryByAcronym(searchparams);

      if (ministry == null) {
        throw new Error("No Match Found");
      }
      res.status(200).json({ ok: true, payload: ministry });
    } catch (err) {
      res.status(500).json({ ok: false, error: err.message });
    }
  });
  return api;
};
