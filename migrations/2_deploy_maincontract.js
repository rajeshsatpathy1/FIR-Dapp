let MainContract = artifacts.require('./Capstone');

module.exports = async function(deployer) {
    await deployer.deploy(MainContract);
}