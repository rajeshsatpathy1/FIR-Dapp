var Migrations = artifacts.require("./Capstone");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
