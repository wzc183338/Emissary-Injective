// // SPDX-License-Identifier: MIT


/*
------------------------------ summary of functions -----------------------------------

onlyOwner: Modifier to restrict access to the function to only the owner of a safe.
createSafeForToken: Creates a multisignature safe for an ERC-20 token.
createSafeForNative: Creates a multisignature safe for native (KLAY) tokens.
approve: Approves a milestone for a multisignature safe.
terminateSafe: Terminates a multisignature safe, transferring remaining funds to the owner.
tokenTransfer: Internal function to transfer tokens.
checkAllowance: Internal function to check token allowance.
sumAll: Internal function to calculate the sum of an array of values.
safeExist: Internal function to check if a safe exists.
zeroAddress: Internal function to check if an address is not zero.
zeroAddresses: Internal function to check an array of addresses and ensure none are zero.
isSafeActive: Internal function to check if a safe is active.
getApprovers: External function to get the list of approvers for a safe.
uniqueApprovers: Internal function to check if approver addresses are unique.
currentMilestone: External function to get the current milestone of a safe.
totalAmountLocked: External function to get the total amount locked in a safe.

*/



pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title milestoneSafe
 * @dev A smart contract for creating and managing multisignature safes with milestone-based approvals.
 */

contract milestoneSafe {
    uint256 public totalSafes;

    struct Safe {
        uint safeId;
        address owner;
        address recipient;
        uint256[] milestonesAmounts;
        uint32 minimumApprovals;
        uint32 approvalsCount;
        address[] approvers;
        bool status;
        address tokenAddress;
        uint256 currentMilestone;
    }

    mapping(uint256 => Safe) public allSafes;
    mapping(uint256 => mapping(uint256 => mapping(address => bool))) public hasApproved;

    event SafeCreated(
        uint256 safeId,
        address owner,
        address recipient,
        uint256[] milestonesAmounts,
        uint32 minimumApprovals,
        address[] approvers
    );
     
         /**
     * @dev Modifier to restrict access to the function to only the owner of a safe.
     * @param safeId The ID of the safe.
     */


    modifier onlyOwner(uint256 safeId) {
        require(msg.sender == allSafes[safeId].owner, "Not the owner");
        _;
    }


        /**
     * @dev Creates a multisignature safe for an ERC-20 token.
     * @param recipient The address of the recipient of the funds.
     * @param milestonesAmounts An array of milestone amounts for approvals.
     * @param minimumApprovals The minimum number of required approvals.
     * @param approvers An array of addresses that can approve transactions.
     * @param tokenAddress The address of the ERC-20 token.
     */


    function createSafeForToken(
        address recipient,
        uint256[] memory milestonesAmounts,
        uint32 minimumApprovals,
        address[] memory approvers,
        address tokenAddress
        
    ) external payable returns(uint256) {
        require(approvers.length >= minimumApprovals, "Not enough approvers");
        require(recipient != address(0), "Recipient address cannot be zero");
        require(zeroAddress(recipient), "Not an address");
        require(zeroAddresses(approvers), "Not an address");
        require(uniqueApprovers(approvers), "Approvers not unique");

        uint256 totalDeposit = sumAll(milestonesAmounts);
        require(checkAllowance(tokenAddress, totalDeposit), "No allowance");
        require(tokenTransfer(tokenAddress, msg.sender, address(this), totalDeposit), "Transfer failed");

        totalSafes++;

        Safe memory newSafe = Safe({
            safeId: totalSafes,
            owner: msg.sender,
            recipient: recipient,
            milestonesAmounts: milestonesAmounts,
            minimumApprovals: minimumApprovals,
            approvalsCount: 0,
            approvers: approvers,
            status: true,
            tokenAddress: tokenAddress,
            currentMilestone: 0
        });

        allSafes[totalSafes] = newSafe;

        for (uint256 j = 0; j < milestonesAmounts.length; j++) {
            for (uint256 i = 0; i < approvers.length; i++) {
                hasApproved[totalSafes][milestonesAmounts[j]][approvers[i]] = false;
            }
        }

        emit SafeCreated(
            totalSafes,
            msg.sender,
            recipient,
            milestonesAmounts,
            minimumApprovals,
            approvers
        );
        return totalSafes;
    }

       /**
     * @dev Creates a multisignature safe for native (KLAY) tokens.
     * @param recipient The address of the recipient of the funds.
     * @param milestonesAmounts An array of milestone amounts for approvals.
     * @param minimumApprovals The minimum number of required approvals.
     * @param approvers An array of addresses that can approve transactions.
     */


    function createSafeForNative(
        address recipient,
        uint256[] memory milestonesAmounts,
        uint32 minimumApprovals,
        address[] memory approvers
        
    ) public payable returns(uint256) {
        require(zeroAddress(recipient), "Not an address");
        require(zeroAddresses(approvers), "Not an address");
        require(uniqueApprovers(approvers), "Approvers not unique");
        uint256 totalAmount = sumAll(milestonesAmounts);
        require(msg.value >= totalAmount, "Incorrect deposit amount");
        require(approvers.length >= minimumApprovals, "Not enough approvers");
        require(recipient != address(0), "Recipient address cannot be zero");

       

        totalSafes++;

        Safe memory newSafe = Safe ({
            safeId: totalSafes,
            owner: msg.sender,
            recipient: recipient,
            milestonesAmounts: milestonesAmounts,
            minimumApprovals: minimumApprovals,
            approvalsCount: 0,
            approvers: approvers,
            status: true,
            tokenAddress: address(0),
            currentMilestone: 0
        });

        allSafes[totalSafes] = newSafe;

        for (uint256 j = 0; j < milestonesAmounts.length; j++) {
            for (uint256 i = 0; i < approvers.length; i++) {
                hasApproved[totalSafes][milestonesAmounts[j]][approvers[i]] = false;
            }
        }
            emit SafeCreated(
                totalSafes,
                msg.sender,
                recipient,
                milestonesAmounts,
                minimumApprovals,
                approvers
            );
           
        
         return totalSafes;
    }
   

       /**
     * @dev Approves a milestone for a multisignature safe.
     * @param safeId The ID of the safe.
     */


    function approve(uint256 safeId) external returns(bool){
        safeExist(safeId);
        Safe storage mySafe = allSafes[safeId];

        bool isApprover = false;

        for (uint256 i = 0; i < mySafe.approvers.length; i++) {
            if (mySafe.approvers[i] == msg.sender) {
                isApprover = true;
                break;
            }
        }
        require(isApprover, "Not an approver");
        isSafeActive(safeId);

        require(!hasApproved[safeId][mySafe.currentMilestone][msg.sender], "Already approved");

        hasApproved[safeId][mySafe.currentMilestone][msg.sender] = true;
        mySafe.approvalsCount++;


        if (mySafe.approvalsCount >= mySafe.minimumApprovals) {
            if (mySafe.tokenAddress == address(0)) {
                (bool callSuccess, ) = payable(mySafe.recipient).call{value: mySafe.milestonesAmounts[mySafe.currentMilestone]}("");
                require(callSuccess, "Call failed");
            } else {
                require(tokenTransfer(mySafe.tokenAddress, address(this), mySafe.recipient, mySafe.milestonesAmounts[mySafe.currentMilestone]), "Transfer failed");
            }

            
            

            mySafe.milestonesAmounts[mySafe.currentMilestone] = 0;
            mySafe.currentMilestone++;
            if (mySafe.currentMilestone >= mySafe.milestonesAmounts.length) {
                mySafe.status = false;
            }
        }
        return true;
    }

       /**
     * @dev Terminates a multisignature safe, transferring remaining funds to the owner.
     * @param safeId The ID of the safe.
     */

    function terminateSafe(uint256 safeId) external onlyOwner(safeId) returns(bool){
        safeExist(safeId);
        isSafeActive(safeId);

        Safe storage mySafe = allSafes[safeId];

        if (mySafe.tokenAddress == address(0)) {
            (bool callSuccess, ) = payable(msg.sender).call{value: sumAll(mySafe.milestonesAmounts)}("");
            require(callSuccess, "Call failed");
        } else {
            require(tokenTransfer(mySafe.tokenAddress, address(this), msg.sender, sumAll(mySafe.milestonesAmounts)), "Transfer failed");
        }

        for (uint256 i = 0; i <= mySafe.milestonesAmounts.length; i++) {
            mySafe.milestonesAmounts[i] = 0;
        }

        mySafe.status = false;
        return true;
    }



        /**
     * @dev Internal function to transfer tokens.
     * @param tokenAddress The address of the ERC-20 token.
     * @param from The address from which tokens are transferred.
     * @param to The address to which tokens are transferred.
     * @param amount The amount of tokens to transfer.
     * @return A boolean indicating success.
     */


    function tokenTransfer(
        address tokenAddress,
        address from,
        address to,
        uint256 amount
    ) internal returns (bool) {
        IERC20 token = IERC20(tokenAddress);
        if (from == address(this)) {
            require(token.transfer(to, amount), "Transaction failed");
        } else {
            require(token.transferFrom(from, to, amount), "Transaction failed");
        }
        return true;
    }

        /**
     * @dev Internal function to check token allowance.
     * @param tokenAddress The address of the ERC-20 token.
     * @param amount The amount of tokens to check allowance for.
     * @return A boolean indicating whether the allowance is sufficient.
     */


    function checkAllowance(address tokenAddress, uint256 amount) internal view returns (bool) {
        IERC20 token = IERC20(tokenAddress);
        require(token.allowance(msg.sender, address(this)) >= amount, "Insufficient allowance");
        return true;
    }

        /**
     * @dev Internal function to calculate the sum of an array of values.
     * @param milestonesAmounts An array of values to sum.
     * @return The sum of the array values.
     */


    function sumAll(uint256[] memory milestonesAmounts) internal pure returns (uint256) {
        uint256 sum = 0;
        for (uint256 i = 0; i < milestonesAmounts.length; i++) {
            sum += milestonesAmounts[i];
        }
        return sum;
    }

      /**
     * @dev Internal function to check if a safe exists.
     * @param safeId The ID of the safe.
     */

    function safeExist(uint256 safeId) internal view {
        require(safeId <= totalSafes, "Safe does not exist");
    }

         /**
      * @dev Internal function to check if an address is not zero.
      * @param _address The address to check.
      */

    function zeroAddress(address _address) private pure returns (bool) {
        require(_address != address(0), "Invalid address");
        return true;
    }

      /**
      * @dev Internal function to check an array of addresses and ensure none are zero.
      * @param _address The array of addresses to check.
      */


    function zeroAddresses(address[] memory _address) private pure returns (bool) {
        for (uint256 i = 0; i < _address.length; i++) {
            require(_address[i] != address(0), "Invalid address");
        }
        return true;
    }

     /**
     * @dev Internal function to check if a safe is active.
     * @param safeId The ID of the safe.
     */

    function isSafeActive(uint256 safeId) public view {
        safeExist(safeId);
        Safe storage mySafe = allSafes[safeId];
        require(mySafe.status == true, "Safe not active");
    }

    /**
     * @dev External function to get the list of approvers for a safe.
     * @param safeId The ID of the safe.
     * @return _approvers array of approver addresses.
     */

    function getApprovers(uint256 safeId) external view returns (address[] memory _approvers) {
        Safe storage mySafe = allSafes[safeId];
        _approvers = mySafe.approvers;
        return _approvers;
    }


    /**
     * @dev Internal function to check if approver addresses are unique.
     * @param _approvers An array of approver addresses.
     * @return A boolean indicating whether approver addresses are unique.
     */
    function uniqueApprovers(address[] memory _approvers) internal pure returns (bool) {
        for (uint256 i = 0; i < _approvers.length; i++) {
            for (uint256 j = i + 1; j < _approvers.length; j++) {
                if (_approvers[i] == _approvers[j]) {
                    return false;
                }
            }
        }
        return true;
    }

        /**
     * @dev External function to get the current milestone of a safe.
     * @param safeId The ID of the safe.
     * @return The current milestone index.
     */

    function currentMilestone(uint256 safeId) external view returns (uint256) {
        safeExist(safeId);
        Safe storage mySafe = allSafes[safeId];
        return mySafe.currentMilestone;
    }

        /**
     * @dev External function to get the total amount locked in a safe.
     * @param safeId The ID of the safe.
     * @return The total amount locked.
     */

    function totalAmountLocked(uint256 safeId) external view returns (uint256) {
        safeExist(safeId);
        Safe storage mySafe = allSafes[safeId];
        return sumAll(mySafe.milestonesAmounts);
    }

}
