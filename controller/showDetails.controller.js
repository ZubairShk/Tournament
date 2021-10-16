const models = require("../models");

exports.ShowTeam = async (req, res) => {
  try {
    const teams = await models.teams.findAll({
      attributes: ["id", "teamName", "iccWins"],
    });
    if (teams.length > 0) {
      return res.status(200).json({ success: true, data: teams });
    }
  } catch {
    return res.status(401).json({ data: "something went wrong" });
  }
};

exports.ShowTeamID = async (req, res) => {
  try {
    const { team_id } = req.params;
    const teams = await models.teams.findByPk(team_id);
    const player = await models.players.findAll({
      where: { teamId: team_id },
      attributes: ["id", "playerName"],
    });

    if (teams) {
      return res.status(200).json({ success: true, data: { teams, player } });
    } else {
      console.log(teams);
      return res.status(401).json({ data: "no data found" });
    }
  } catch {
    return res.status(401).json({ data: "something went wrong" });
  }
};

exports.ShowPlayer = (req, res) => {
  models.players
    .findAll()
    .then((data) => {
      console.log(data);
      return res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
      console.log(error);
      return res.status(401).json({ data: "something went wrong" });
    });
};
exports.ShowPlayerId = (req, res) => {
  const { player_id } = req.params;
  models.players
    .findByPk(player_id)
    .then((data) => {
      return res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
      console.log(error);
      return res.status(401).json({ data: "something went wrong" });
    });
};
