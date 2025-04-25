const TransactionTracker = artifacts.require("TransactionTracker");

contract("TransactionTracker", accounts => {
  let transactionTracker;

  before(async () => {
    transactionTracker = await TransactionTracker.deployed();
  });

  it("should record a transaction", async () => {
    const sender = accounts[0];
    const receiver = accounts[1];
    const amount = web3.utils.toWei("0.1", "ether");

    // Call the recordTransaction function
    const tx = await transactionTracker.recordTransaction(receiver, {
      from: sender,
      value: amount
    });

    // Check if the TransactionRecorded event was emitted
    const event = tx.logs[0];
    assert.equal(event.event, "TransactionRecorded");
    assert.equal(event.args.from, sender);
    assert.equal(event.args.to, receiver);
    assert.equal(event.args.value.toString(), amount);
  });
});
