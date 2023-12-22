// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BatchTransfers {

    /**
     * @dev Batch transfer KIP-7 tokens to multiple recipients.
     * @param recipients An array of recipient addresses.
     * @param amount The amount of tokens to be transferred to each recipient.
     * @param tokenAddress The address of the KIP-7 token contract.
     * @return A boolean indicating the success of the batch transfer.
     */
    function tokenBatchTransfer(address[] memory recipients, uint256 amount, address tokenAddress) external returns (bool) {
        require(recipients.length > 0, "No recipients provided");
        require(zeroAddresses(recipients), "Invalid address");
        require(amount > 0, "Amount must be greater than 0");

        IERC20 token = IERC20(tokenAddress);
        uint256 totalAmount = amount * recipients.length;
        require(checkAllowance(tokenAddress, totalAmount), "Insufficient allowance");
        require(tokenTransfer(tokenAddress, msg.sender, address(this), totalAmount), "Transfer failed");

        for (uint256 i = 0; i < recipients.length; i++) {
            require(token.transfer(recipients[i], amount), "Transfer failed");
        }

        return true;
    }

    /**
     * @dev Batch transfer native KLAY to multiple recipients.
     * @param recipients An array of recipient addresses.
     * @param amount The amount of KLAY to be transferred to each recipient.
     * @return A boolean indicating the success of the batch transfer.
     */
    function nativeBatchTransfer(address[] memory recipients, uint256 amount) external payable returns (bool) {
        require(recipients.length > 0, "No recipients provided");
        require(zeroAddresses(recipients), "Invalid address");

        uint256 totalAmount = amount * recipients.length;
        require(msg.value == totalAmount, "Insufficient Klay sent");

        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = payable(recipients[i]).call{value: amount}("");
            require(success, "Deposit transfer failed");
        }

        return true;
    }

    /**
     * @dev Internal function to perform token transfer.
     */
    function tokenTransfer(address tokenAddress, address from, address to, uint256 amount) internal returns (bool) {
        IERC20 token = IERC20(tokenAddress);
        if (from == address(this)) {
            require(token.transfer(to, amount), "Token transfer failed");
        } else {
            require(token.transferFrom(from, to, amount), "Token transfer failed");
        }
        return true;
    }

    /**
     * @dev Internal function to check allowance for token transfer.
     */
    function checkAllowance(address tokenAddress, uint256 amount) internal view returns (bool) {
        IERC20 token = IERC20(tokenAddress);
        require(token.allowance(msg.sender, address(this)) >= amount, "Insufficient allowance");
        return true;
    }

    /**
     * @dev Internal function to check for zero addresses in an array.
     */
    function zeroAddresses(address[] memory _address) private pure returns (bool) {
        for (uint i = 0; i < _address.length; i++) {
            require(_address[i] != address(0), "Invalid address");
        }
        return true;
    }
}
