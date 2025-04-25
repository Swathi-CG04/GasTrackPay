const Migrations = artifacts.require("Migrations");
const TransactionTracker = artifacts.require("TransactionTracker");

module.exports = function (deployer) {
  // Deploy the Migrations contract first (as it's needed to track the deployments)
  deployer.deploy(Migrations);
  
  // Deploy the TransactionTracker contract
  deployer.deploy(TransactionTracker);
};
