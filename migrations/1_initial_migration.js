var Migrations = artifacts.require("./maincontract");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
