const express = require("express");
const routes = express.Router();
const getTeams = require("../controller/showDetails.controller");

routes.get("/team/", getTeams.ShowTeam);
routes.get("/team/:team_id", getTeams.ShowTeamID);
routes.get("/player", getTeams.ShowPlayer);
routes.get("/player/:player_id", getTeams.ShowPlayerId);

module.exports = routes;
