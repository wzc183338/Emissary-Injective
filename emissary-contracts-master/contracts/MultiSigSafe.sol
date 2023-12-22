// SPDX-License-Identifier: MIT


/*

-------- summary of functions------------------

createSafeForToken: Creates a new safe for KIP20 tokens.
createSafeForNative: Creates a new safe for native KLAY.
approve: Approves a safe for execution. Only approvers can call this function.
terminateSafe: Terminates a safe, returning the funds to the owner.
tokenTransfer: Internal function to transfer ERC-20 tokens.
checkAllowance: Internal function to check ERC-20 token allowance.
safeExist: Checks if a safe with the given ID exists.
zeroAddress: Internal function to check if an address is not zero.
zeroAddresses: Internal function to check an array of addresses and ensure none are zero.
isSafeActive: Checks if a safe with the given ID is active.
getApprovers: Retrieves the list of approvers for a given safe.
uniqueApprovers: Internal function to check if the list of approvers is unique.
*/



  pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";




  contract MultiSigSafe {
      uint256 public totalSafes;
      
    
      struct Safe {
          uint safeId;
          address owner;
          address recipient;
          uint256 deposit;
          uint32 minimumApprovals;
          uint32 approvalsCount;
          address[] approvers;
          bool status;
          address tokenAddress;
          
      }

      mapping(uint256 => Safe) public allSafes;
      mapping(uint256 => mapping(address => bool)) public hasApproved;

      event SafeCreated(
          uint256 safeId,
          address owner,
          address recipient,
          uint256 deposit,
          uint32 minimumApprovals,
          address[] approvers
      );
      event transfered(
        address reciepent,
        uint256 amount
      );

      modifier onlyOwner(uint256 safeId) {
          safeExist(safeId);
          require(msg.sender == allSafes[safeId].owner, "Not the owner");
          _;
      }
 
     /**
      * @dev Creates a new safe for KIP20 tokens.
      * @param recipient The address that will receive the funds once the safe is approved.
      * @param deposit The amount of tokens to be deposited into the safe.
      * @param minimumApprovals The minimum number of approvals required to execute the safe.
      * @param approvers The addresses of the approvers for this safe.
      * @param tokenAddress The address of the KIP20 token contract.
      */



      function createSafeForToken(
          address recipient,
          uint256 deposit,
          uint32 minimumApprovals,
          address[] memory approvers,
          address tokenAddress

      ) external payable returns(uint256){
        
          require(approvers.length >= minimumApprovals, "Not enough approvers");
          require(recipient != address(0), "Recipient address cannot be zero");
          require(zeroAddress(recipient),"not an address");
          require(zeroAddresses(approvers),"not an address");

          require(uniqueApprovers(approvers),"approvers not unique");


          require(checkAllowance(tokenAddress,deposit),"no allowence ");
          require( tokenTransfer(tokenAddress, msg.sender, address(this), deposit),"transfer failed");
         


              totalSafes++;

              Safe memory newSafe = Safe({
              safeId: totalSafes,
              owner: msg.sender,
              recipient: recipient,
              deposit: deposit,
              minimumApprovals: minimumApprovals,
              approvalsCount: 0,
              approvers: approvers,
              status: true,
              tokenAddress: tokenAddress
             
          });

          allSafes[totalSafes] = newSafe;

               for (uint256 i = 0; i < approvers.length; i++) {
              hasApproved[totalSafes][approvers[i]] = false;


          }

                   emit SafeCreated(
              totalSafes,
              msg.sender,
              recipient,
              deposit,
              minimumApprovals,
              approvers
          );

          return totalSafes;

         


      }


     /**
      * @dev Creates a new safe for native KLAY.
      * @param recipient The address that will receive the funds once the safe is approved.
      * @param deposit The amount of KLAY to be deposited into the safe.
      * @param minimumApprovals The minimum number of approvals required to execute the safe.
      * @param approvers The addresses of the approvers for this safe.
      */

      function createSafeForNative(
          address recipient,
          uint256 deposit,
          uint32 minimumApprovals,
          address[] memory approvers
      ) public payable returns(uint256) {
          require(msg.value >= deposit, "You need to spend more");
          require(approvers.length >= minimumApprovals, "Not enough approvers");
          require(recipient != address(0), "Recipient address cannot be zero");
          //require(msg.value == deposit, "Incorrect deposit amount");
          require(zeroAddress(recipient),"not an address");
          require(zeroAddresses(approvers),"not an address");
          require(uniqueApprovers(approvers),"approvers not unique");
          



         
          totalSafes++;

              Safe memory newSafe = Safe({
              safeId: totalSafes,
              owner: msg.sender,
              recipient: recipient,
              deposit: deposit,
              minimumApprovals: minimumApprovals,
              approvalsCount: 0,
              approvers: approvers,
              status: true,
              tokenAddress: address(0)
              
          });
        
          allSafes[totalSafes] = newSafe;

          // Initialize hasApproved mapping for each approver to false
          for (uint256 i = 0; i < approvers.length; i++) {
              hasApproved[totalSafes][approvers[i]] = false;
          }


          emit SafeCreated(
              totalSafes,
              msg.sender,
              recipient,
              deposit,
              minimumApprovals,
              approvers
          );

          return totalSafes;
      }
     /**
      * @dev Approves a safe for execution. Only approvers can call this function.
      * @param safeId The ID of the safe to approve.
      */

      function approve(uint256 safeId) external returns(bool) {
          safeExist(safeId);
          Safe storage mySafe = allSafes[safeId];

           //Check if the sender is an approver
          bool isApprover = false;
          for (uint256 i = 0; i < mySafe.approvers.length; i++) {
              if (mySafe.approvers[i] == msg.sender) {
                  isApprover = true;
                  break;
              }
          }
          require(isApprover, "Not an approver");
          isSafeActive(safeId);

          // Check if the sender has not already approved
          require(!hasApproved[safeId][msg.sender], "Already approved");

       

          // Increment the approvals count
          mySafe.approvalsCount++;

          // Check if the minimum approvals have been reached
          if (mySafe.approvalsCount >= mySafe.minimumApprovals) {
              // Perform the action, e.g., transfer funds to the recipient

              if(mySafe.tokenAddress==address(0)){

              (bool callSuccess, ) = payable(mySafe.recipient).call{value: mySafe.deposit}("");
              require(callSuccess, "Call failed");
             emit  transfered(mySafe.recipient, mySafe.deposit);

              }else{

                  require(tokenTransfer(mySafe.tokenAddress, address(this), mySafe.recipient, mySafe.deposit),"transfer failed");

              }

              //  Mark the sender as approved
               hasApproved[safeId][msg.sender] = true;

               //Update the safe state after the transaction is completed
              mySafe.deposit = 0;
              mySafe.status = false;
          }
          return true;


      }



     /**
      * @dev Terminates a safe, returning the funds to the owner.
      * @param safeId The ID of the safe to terminate.
      */

      function terminateSafe(uint256 safeId) external onlyOwner(safeId) returns(bool){
          safeExist(safeId);
          isSafeActive(safeId);

          Safe storage mySafe = allSafes[safeId];

          // Transfer funds back to the owner's wallet
          if(mySafe.tokenAddress==address(0)){

        
          (bool callSuccess, ) = payable(msg.sender).call{value: mySafe.deposit}("");
          require(callSuccess, "Call failed");

          }else {

               require(tokenTransfer(mySafe.tokenAddress, address(this), msg.sender, mySafe.deposit),"transfer fialed");

          }


           //Update the safe state after the withdrawal
          mySafe.deposit = 0;
          mySafe.status = false;
          return true;
      }





     /**
      * @dev Internal function to transfer ERC-20 tokens.
      * @param tokenAddress The address of the ERC-20 token contract.
      * @param from The address from which to transfer tokens.
      * @param to The address to which to transfer tokens.
      * @param amount The amount of tokens to transfer.
      * @return success A boolean indicating whether the transfer was successful.
      */

      function tokenTransfer(
          address tokenAddress,
          address from,
          address to,
          uint256 amount
      )internal returns(bool) {

          IERC20 token = IERC20(tokenAddress);
                      if (from == address(this)) {
                  require(token.transfer(to, amount), "trx fail");
              } else {
                  require(
                      token.transferFrom(from, to, amount),
                      "trx fail"
                  );
              }
              return true;
            
          }

      /**
      * @dev Internal function to check ERC-20 token allowance.
      * @param tokenAddress The address of the ERC-20 token contract.
      * @param amount The amount of tokens to check allowance for.
      * @return allowed A boolean indicating whether the allowance is sufficient.
      */
              function checkAllowance(
          address tokenAddress,
          uint256 amount
    
      ) internal view returns(bool) {
                IERC20 token = IERC20(tokenAddress);
              require(
                  token.allowance(
                      msg.sender,
                      address(this)
                  ) >= amount,
                  "Insufficient allowance"
              );
              return true;
        
      }

     /**
      * @dev Checks if a safe with the given ID exists.
      * @param safeId The ID of the safe to check.
      */


      function safeExist(uint256 safeId) internal view {
    
          require(safeId<=totalSafes,"safe doesnot exsist");
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

      function zeroAddresses(address[] memory _address) private pure returns(bool) {
          for (uint i = 0; i < _address.length; i++) {
              require(_address[i] != address(0), "Invalid address");
          }
          return true;
      }
     /**
      * @dev Checks if a safe with the given ID is active.
      * @param safeId The ID of the safe to check.
      */
       
         function isSafeActive(uint256 safeId)  public view {
          safeExist(safeId);
          Safe storage mySafe = allSafes[safeId];

          require(mySafe.status==true,"safe not active ");

         }

     /**
      * @dev Retrieves the list of approvers for a given safe.
      * @param safeId The ID of the safe.
      * @return _approvers The list of approvers for the safe.
      */

         function getApprovers(uint256 safeId)external view returns(address[] memory _approvers){
          Safe storage mySafe = allSafes[safeId];
          _approvers = mySafe.approvers;

          return _approvers;

         }



         function uniqueApprovers (address[] memory _approvers) internal pure returns (bool) {
                       for (uint256 i = 0; i < _approvers.length; i++) {
            for (uint256 j = i + 1; j < _approvers.length; j++) {
                if (_approvers[i] == _approvers[j]) {
                    
                    return false;
                }
            }
        }
        
        return true;
         }




         //--------------------------batch transfers----------------------------------------




         

 


      }

    






