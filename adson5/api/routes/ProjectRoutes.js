const express = require("express");

const ProjectController = require("../controllers/ProjectController");
const uploadImg = require("../middlewares/project-img");
const checkAuth = require("../middlewares/check-auth");


const router = express.Router();

router.post(
  "/", 
  checkAuth,
  
  uploadImg,
  ProjectController.addProject
);
router.get("/:projectId", ProjectController.getOneProject);
router.get("/", ProjectController.getAllProjects);
router.delete("/:projectId", checkAuth, ProjectController.deleteProject);
router.put(
  "/:projectId",
  checkAuth,
  uploadImg,
  ProjectController.updateProject
);

module.exports = router;