import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  AddSafeStyles,
  ApprovalDropdown,
  ConfirmationStyle,
  TransferMode,
} from "./AddSafe.styles";
import CombineInput from "@/components/InputFields/CombineInput";
import AssetsDropDown from "@/components/InputFields/AssetsDropDown";
import ApprovalDropDown from "@/components/InputFields/ApprovalDropDown";
import CheckBox from "@/components/CheckBox";
import Button from "@/components/Button/Button";
import TotalApprovalDropDown from "@/components/InputFields/TotalApprovalDropDown";
import PaymentDropDown from "@/components/InputFields/PaymentDropDown";
import MultiSafeAbi from "../../../helpers/abis/MultiSigSafe.json"
import MilestoneSafeAbi from "../../../helpers/abis/milestoneSafe.json"
import { MultiSigSafe, milestoneSafe, erc20Abi } from "../../../helpers/contract"
import ethers from "ethers"
import { API } from "@/service/api/api";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateSafe = () => {

  const [recipientAddress, setRecipientAddress] = useState("")
  const [body, setBody] = useState({})
  const [lumSumAmount, setLumSumAmount] = useState()
  const [approvers, setApprovers] = useState(["0x530f0a74118fd77d8Ff18d5735E7fd190C891569", "0xC18C38C91bbaaB567D14B72fa595f2c0376679FA"])
  const [milestoneAmount, setMilestoneAmount] = useState(["0.1", "0.1"])
  const [minimumApprovers, setMinimumApprovers] = useState(1)
  const [assetsValue, setAssetsValue] = useState("Select an asset");
  const [signatureValue, setSignatureValue] = useState(
    "Select Approval Signature"
  );
  const [checkBoxVal, setCheckBoxVal] = useState(false);
  const [checkBoxValOne, setCheckBoxValOne] = useState(false);
  const [confirm, setConfirm] = useState(1);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const emissary = useSelector((state) => state.emissary.emissary);
  const [emissaryControlers, setEmissaryControllers] = useState([]);
  const [selectedAddresses, setSelectedAddresses] = useState([]);
  const [selectedAssets, setSelectedAssets] = useState({})

  console.log(selectedAssets)

  const convertToWei = (amountsInEther) => {
    return amountsInEther.map(amount => ethers.utils.parseEther(amount));
  };


  const etherToWei = (etherValue) => {
    return ethers.utils.parseEther(etherValue.toString());
  };
  const sumOfMilestoneAmount = (arr) => {
    let sum = ethers.BigNumber.from(0);
    for (let i = 0; i < arr.length; i++) {
      sum = sum.add(etherToWei(arr[i]));
    }
    return sum;
  };


  const approveToken = async (tokenAddress, spenderAddress, amount,) => {
    const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer);
    const amountToApprove = ethers.utils.parseEther(amount.toString());
    const approvalTransaction = await tokenContract.approve(spenderAddress, amountToApprove);
    await approvalTransaction.wait();
  }
  const createSafeContract = async (e) => {
    e.preventDefault()
    handleValidation(e)
    const safeContract = new ethers.Contract(MultiSigSafe, MultiSafeAbi.abi, signer);
    const milestoneSafeContract = new ethers.Contract(milestoneSafe, MilestoneSafeAbi.abi, signer);
    if (checkBoxVal) {
      if (assetsValue.address == "native") {
        // console.log(body)
        console.log(body.lumSumReleaseAmount)
        const safeId = await safeContract.createSafeForNative(
          recipientAddress,
          ethers.utils.parseEther(body.lumSumReleaseAmount.toString()),
          body.approversCount,
          body.approvers,
          {
            value: ethers.utils.parseEther(body.lumSumReleaseAmount.toString()),
          })
        console.log(ethers.utils.parseEther(body.lumSumReleaseAmount.toString()))
        const receipt = await safeId.wait();
        const event = receipt.events.find((event) => event.event === 'SafeCreated');
        const safeId2 = event.args[0].toNumber();
        handleSafe(safeId2)
        console.log(receipt);
        console.log("Safe Created successfully");
        console.log(safeId2)
      } else {

        await approveToken(assetsValue.address, MultiSigSafe, lumSumAmount)
        const safeId = await safeContract.createSafeForToken(
          recipientAddress,
          ethers.utils.parseEther(lumSumAmount),
          minimumApprovers,
          approvers,
          assetsValue.address
        )
        const receipt = await safeId.wait();
        const event = receipt.events.find((event) => event.event === 'SafeCreated');
        const safeId2 = event.args[0].toNumber();
        handleSafe(safeId2)
        console.log("Safe Created successfully");
        console.log(safeId2)


      }
    } else if (checkBoxValOne) {
      if (assetsValue.address == "native") {
        const amountsInWei = await convertToWei(milestoneAmount);
        const sumOfMilestone = await sumOfMilestoneAmount(milestoneAmount)
        // console.log("sum of milestone", sumOfMilestone)
        // const amountsInWei = ["100000000000000000", "200000000000000000"]
        console.log(recipientAddress, amountsInWei, minimumApprovers, approvers)
        const safeId = await milestoneSafeContract.createSafeForNative(
          recipientAddress,
          amountsInWei,
          minimumApprovers,
          approvers,
          {
            // value: ethers.utils.parseEther("300000000000000000")
            value: sumOfMilestone
          })
        const receipt = await safeId.wait();
        const event = receipt.events.find((event) => event.event === 'SafeCreated');
        console.log(receipt);
        console.log(safeId);
        const safeId2 = event?.args[0].toNumber();
        console.log("Safe Created successfully");
        console.log(safeId2)
      } else {
        const amountsInWei = await convertToWei(milestoneAmount);
        const sumOfMilestone = await sumOfMilestoneAmount(milestoneAmount)
        await approveToken(assetsValue.address, milestoneSafe, sumOfMilestone)
        const safeId = await milestoneSafeContract.createSafeForToken(
          recipientAddress,
          amountsInWei,
          minimumApprovers,
          approvers,
          assetsValue.address
        )
        const receipt = await safeId.wait();
        const event = receipt.events.find((event) => event.event === 'SafeCreated');
        const safeId2 = event.args[0].toNumber();
        console.log("Safe Created successfully");
        console.log(safeId2)
      }
    }





  }



  const handleSafe = async (safeId) => {
    try {
      if (!safeId) {
        return toast.error("Safe Id not provided!", {
          hideProgressBar: true,
          icon: false,
        });
      }
      body.safeId = safeId
      await API.createSafe(body).then((res) => {
        if (res.status == 200) {
          console.log(res)
          return toast.success("Safe created Successfully!", {
            hideProgressBar: true,
            icon: false,
          });
        }
      })
    } catch (err) {
      console.log(err)
      return toast.success("Error Creating Safe", {
        hideProgressBar: true,
        icon: false,
      });
    }
  }






  const handleControllers = async () => {
    body.emissaryId = emissary._id
    await API.getEmissaryController(body).then((res) => {
      if (res.status == 200) {
        setEmissaryControllers(res.data.data)
      }
    })
  }

  const handleValidation = (e) => {
    e.preventDefault()
    console.log(body)
    if (!body.name) {
      return toast.error("Please provide Safe name!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    console.log(body)
    if (!body.desc) {
      return toast.error("Please provide a description for Safe!", {
        hideProgressBar: true,
        icon: false,
      });
    }

    console.log(body)
    if (!body.asset) {
      return toast.error("Please provide a asset for Safe!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    console.log(body)
    body.recipientWalletAddress = recipientAddress

    if (!recipientAddress) {
      return toast.error("Please provide a recipient address for safe!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    console.log(body)
    body.approvers = ["0x9cdc76c6C06406Cef05Ff4f5fA1f53Ac30cCB348", "0x53003d04bd231e5c1961e061d59bd1d2ff76c21a"]

    if (!confirm) {
      return toast.error("Please select approvers for safe!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    console.log(body)
    body.approversCount = confirm

    if (!checkBoxVal && !checkBoxValOne) {
      return toast.error("Please select lumsum release or milestone release for safe!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    console.log(body)
    if (checkBoxVal == true) {
      body.lumSumRelease = true
      delete body['mileStoneReleaseAmount'];
      delete body['mileStoneRelease']
      if (!body.lumSumReleaseAmount) {
        return toast.error("Please select lumsum amount release for safe!", {
          hideProgressBar: true,
          icon: false,
        });
      }
    }
    console.log(body)
    if (checkBoxValOne == true) {
      body.mileStoneRelease = true
      delete body['lumSumReleaseAmount'];
      delete body['lumSumRelease'];
      if (!body.mileStoneReleaseAmount) {
        return toast.error("Please select milestone amount release for safe!", {
          hideProgressBar: true,
          icon: false,
        });
      }
    }

    console.log(body)
  }


  useEffect(() => {
    handleControllers()
  }, [])

  return (
    <AddSafeStyles>
      <ToastContainer />
      <span className="strog">Create a safe</span>
      <form action="">
        <CombineInput
          label="Name of your safe"
          onChange={(e) => body.name = e.target.value}
          placeholder="Example: Developing NFT minting DApp "
        />
        <div className="textArea">
          <label className="label" htmlFor="textarea">
            Description
          </label>
          <textarea
            id="textarea"
            onChange={(e) => body.desc = e.target.value}
            placeholder="Briefly describe what is this safe uses for?"
            rows={11}
          />
          <span className="float">0/2000</span>
        </div>
        <span className="label">Choose your asset</span>
        <AssetsDropDown
          onChange={(value) => { body.asset = value.program, setSelectedAssets(value) }}
          selectedValue={assetsValue}
          setSelectedValue={setAssetsValue}
        />
        <CombineInput
          onChange={(e) => setRecipientAddress(e.target.value)}
          label="Recipient Wallet Address"
          value={recipientAddress}
          placeholder="Example: 5D25X4qhiqpv8ELXMQH5pejGGsoePoo3RFiZiq4N5RHLJKAF"
        />
        <ApprovalDropdown>
          <span className="approvalheading">Approval Signatures</span>
          <p>
            Assets stored inside the safe need to approve by certain amount of
            signatures in order to be payout to the recipient. Add the the
            approvers from your list of emissary controllers and they will need
            to use their wallet to approve any transactions to the recipient.
          </p>
          {Array.from({ length: confirm || 1 }, (_, index) => (
            <ApprovalDropDown
              key={index}
              onChange={(address) => console.log()}
              selectedValue={selectedAddresses[index] || "Select Approval Signature"}
              // setSelectedValue={setSelectedAddresses}
              // setEmissaryRole={setEmissaryRoles}
              setEmissaryControllers={setEmissaryControllers}
              emissaryControlers={emissaryControlers}
            />
          ))}
        </ApprovalDropdown>
        <ConfirmationStyle>
          <div className="approval">
            Any transaction to the recipient requires the confirmation of:
          </div>
          <div className="count-wrapp">
            <TotalApprovalDropDown
              className="total-number-approval"
              onChange={(params) => { setConfirm(params) }}
              setSelectedValue={setConfirm}
              selectedValue={confirm}
            />
            <span>
              out of{" "}
              <span className="strong">
                {confirm?.approval ? confirm.approval : 1}
              </span>{" "}
              approver(s)
            </span>
          </div>
        </ConfirmationStyle>
        <TransferMode>
          <span>Asset transfer mode</span>
          <CheckBox
            type="checkbox"
            id="release"
            For="release"
            label="Lump sum release to the recipient"
            checked={checkBoxVal}
            onChange={(e) => {
              setCheckBoxVal(e.target.checked);
              if (e.target.checked) {
                setCheckBoxValOne(false);
              }
            }}
          />
          {checkBoxVal && (
            <div className="broderInputWrapper">
              <div className="amountDrop">
                <CombineInput onChange={(e) => body.lumSumReleaseAmount = e.target.value} label="Release amount" />
                <PaymentDropDown
                  selectedAssets={selectedAssets}
                  label=""
                  onChange={(param) => console.log(param)}
                  className="amount"
                />
              </div>
            </div>
          )}
          <CheckBox
            type="checkbox"
            id="Milestones"
            For="Milestones"
            label="Milestones-based release to the recipient"
            checked={checkBoxValOne}
            onChange={(e) => {
              setCheckBoxValOne(e.target.checked);
              if (e.target.checked) {
                setCheckBoxVal(false);
              }
            }}
          />
          {checkBoxValOne && (
            <div className="broderInputWrapper">
              <div className="amountDrop">
                <CombineInput label="Release amount" onChange={(e) => body.mileStoneReleaseAmount = e.target.value} />
                <PaymentDropDown
                  label=""
                  onChange={(param) => console.log(param)}
                  className="amount"
                />
              </div>
            </div>
          )}
        </TransferMode>
        <div className="submission">
          <div className="buttonWrap">
            <Button variant="outline" type="button">
              Clear
            </Button>
            <Button onClick={(e) =>
              // handleValidation(e)
              createSafeContract(e)
            } variant="primary">Create</Button>
          </div>
          <div className="totalAmount">
            <p>Initial asset in safe</p>
            <span className="span">{body.lumSumReleaseAmount} {body?.asset}</span>
          </div>
        </div>
      </form>
    </AddSafeStyles>
  );
};

export default CreateSafe;
