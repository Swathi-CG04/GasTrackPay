// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionTracker {

    // Declare events to record transactions
    event TransactionRecorded(
        address indexed from,
        address indexed to,
        uint256 value,
        uint256 gasUsed
    );

    // Declare arrays to store transaction data
    address[] public transactionAddresses;
    uint256[] public transactionAmounts;
    uint256[] public transactionGasUsed;

    // Function to record a transaction
    function recordTransaction(address to) external payable {
        uint256 gasStart = gasleft(); // Start gas usage tracking

        // Emit the transaction details
        emit TransactionRecorded(msg.sender, to, msg.value, gasStart - gasleft());

        // Store transaction details in the arrays
        transactionAddresses.push(to);
        transactionAmounts.push(msg.value);
        transactionGasUsed.push(gasStart - gasleft());
    }

    // Function to get the total number of transactions
    function getTransactionCount() external view returns (uint256) {
        return transactionAddresses.length;
    }

    // Function to get all transactions
    function getAllTransactions() external view returns (address[] memory addresses, uint256[] memory amounts, uint256[] memory gasUsed) {
        return (transactionAddresses, transactionAmounts, transactionGasUsed);
    }

    // Function to get transactions by a specific address
    function getTransactionsByAddress(address from) external view returns (uint256[] memory amounts, uint256[] memory gasUsed) {
        uint256 count = 0;
        for (uint256 i = 0; i < transactionAddresses.length; i++) {
            if (transactionAddresses[i] == from) {
                count++;
            }
        }

        uint256[] memory amountsByAddress = new uint256[](count);
        uint256[] memory gasUsedByAddress = new uint256[](count);

        uint256 index = 0;
        for (uint256 i = 0; i < transactionAddresses.length; i++) {
            if (transactionAddresses[i] == from) {
                amountsByAddress[index] = transactionAmounts[i];
                gasUsedByAddress[index] = transactionGasUsed[i];
                index++;
            }
        }

        return (amountsByAddress, gasUsedByAddress);
    }
}
