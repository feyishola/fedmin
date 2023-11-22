const ministryController = require("../controller/fedmin.controller");
const { Router } = require("express");
const htmlPage = require("../utils/page");
const templatePage = require("../utils/templates/user/onetimepass");

let api = new Router();

module.exports = () => {
  api.post("/", async (req, res) => {
    try {
      let body = req.body;
      let ministry = await ministryController.createMinistry(body);
      let { ok, data, message } = ministry;
      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(400).json({ ok, message });
      }
    } catch (err) {
      res.status(500).json({ ok: false, message: err.message });
    }
  });

  api.post("/page", (req, res) => {
    const {
      projectName,
      startDate,
      description,
      ministryName,
      projectGoals,
      kpi,
      endDate,
    } = req.body;
    const htmlContent = templatePage(
      projectName,
      startDate,
      ministryName,
      description,
      projectGoals,
      kpi,
      endDate
    );
    const { name } = req.body;
    // const htmlContent = htmlPage(name);
    res.status(200).send(htmlContent);
  });

  api.get("/", async (req, res) => {
    try {
      let ministries = await ministryController.getAllMinistries();
      let { ok, data, message } = ministries;
      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(400).json({ ok, message });
      }
    } catch (err) {
      res.status(500).json({ ok: false, message: err.message });
    }
  });

  api.get("/:searchparams", async (req, res) => {
    try {
      let searchparams = req.params.searchparams;
      let ministry;

      ministry = await ministryController.getMinistryByAcronym(searchparams);

      let { ok, data, message } = ministry;

      if (ministry == null) {
        throw new Error("No Match Found");
      }

      if (ok) {
        res.status(200).json({ ok, data });
      } else {
        res.status(400).json({ ok, message });
      }
    } catch (err) {
      res.status(500).json({ ok: false, message: err.message });
    }
  });

  //api.get("/:id", async (req, res) => {
  //   try {
  //     let id = req.params.id;
  //     let ministry;

  //   if (searchparams.includes(" ")) {
  //     ministry = await ministryController.getMinistryByName(searchparams);
  //   } else {
  //     ministry = await ministryController.getMinistryByAcronym(searchparams);
  //   }

  //     ministry = await ministryController.getMinistryById(id);

  //     let { ok, data, message } = ministry;

  //     if (ministry == null) {
  //       throw new Error("No Match Found");
  //     }

  //     if (ok) {
  //       res.status(200).json({ ok, data });
  //     } else {
  //       res.status(400).json({ ok, message });
  //     }
  //   } catch (err) {
  //     res.status(500).json({ ok: false, message: err.message });
  //   }
  // });
  return api;
};
