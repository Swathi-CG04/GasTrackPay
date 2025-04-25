const TransactionTracker = artifacts.require("TransactionTracker");
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  // Deploy the TransactionTracker contract
  deployer.deploy(TransactionTracker);

  // Deploy the Migrations contract (this is already in  project)
  deployer.deploy(Migrations);
};
