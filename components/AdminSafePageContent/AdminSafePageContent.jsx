import React, { useEffect, useState } from "react";
import { SafesContent, ContentSection } from "./AdminSafePageContent.style";
import Link from "next/link";
import Button from "../Button/Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { API } from "@/service/api/api";
import MultiSafeAbi from "./../../helpers/abis/MultiSigSafe.json"
import MilestoneSafeAbi from "../../helpers/abis/milestoneSafe.json"
import { MultiSigSafe, milestoneSafe, erc20Abi } from "../../helpers/contract"
import ethers from "ethers"
import { getUser } from "@/service/storage/storage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AdminSafesPageContent({ heighLight }) {
    const [safeDetails, setSafeDetails] = useState({})
    const [approvers, setApprovers] = useState([])
    const router = useRouter();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const user = getUser()
    const { safeId } = router.query;

    // console.log(safeDetails)





    const approveSafe = async () => {
        const safeContract = new ethers.Contract(MultiSigSafe, MultiSafeAbi.abi, signer);
        const milestoneSafeContract = new ethers.Contract(milestoneSafe, MilestoneSafeAbi.abi, signer);
        const approveSafe = await safeContract.approve(
            safeDetails?.safeId
        )
        const receipt = await approveSafe.wait()
        if (receipt.status === 1) {
            console.log('The approve function was successfully called.', receipt);
            await handleUserApprove(safeId)
            await handleSafe(safeId)
            await getSafeApprovers(safeId)
            return true;
        }

    }

    const getSafeApprovers = async (safeId) => {
        // console.log(safeId)
        const body = { safeId: safeId }

        // console.log(user)
        await API.getRolesBySafeId(body).then((res) => {
            if (res.status == 200) {
                // console.log(res.data.data)
                setApprovers(res.data.data)
            }
        })
    }

    const handleSafe = async (safeId) => {
        const body = { safeId: safeId }
        await API.getUserSafeById(body).then((res) => {
            if (res.status == 200) {
                setSafeDetails(res.data.data)
            }
        })
    }

    const handleUserApprove = async (safeId) => {
        const body = { safeId: safeId }
        API.userApproveSafe(body).then((res) => {
            if (res.status == 200) {
                return toast.success("Approved Successfully!", {
                    hideProgressBar: true,
                    icon: false,
                });

            }
        })
    }

    const shorten = (address) => {
        if (address?.length > 10) {
            return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
        }
        return address;
    };

    useEffect(() => {
        const { safeId } = router.query;
        handleSafe(safeId)
        getSafeApprovers(safeId)
    }, [])

    return (
        <SafesContent>
            <ToastContainer />
            <ContentSection>
                <div className="header">
                    <strong className="subtitle">Safes</strong>
                    <h1 className="h2">{safeDetails?.name}</h1>
                    <div className="date-wrap">
                        <span className="date">{safeDetails?.createdDate}</span>
                        <span className="number-text">{shorten(safeDetails?.ownerAddress)}</span>
                    </div>
                </div>
                <div className="holder">
                    <div className="text-box">
                        <div className="wrap">
                            <strong className="title">About this safe</strong>
                            <p>
                                {safeDetails?.desc}
                            </p>
                        </div>
                    </div>
                    <div className="info-holder">
                        {/* <div className="info-wrap">
                            <div className="info-box">
                                <strong className="label-text">Applier</strong>
                                <span className="text">
                                    5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                                </span>
                            </div>
                        </div>
                        <div className="info-wrap">
                            <div className="info-box">
                                <strong className="label-text">Executor</strong>
                                <span className="text">
                                    5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                                </span>
                            </div>
                        </div> */}

                        <div className="info-wrap">
                            <div className="info-box">
                                <strong className="label-text">
                                    Lum Sum payout amount
                                </strong>
                                <span className="text">{safeDetails?.lumSumReleaseAmount}{" "}{safeDetails?.asset?.toUpperCase()}</span>
                            </div>
                            <Link href="/">View Transfer Memo</Link>
                        </div>
                        {/* <div className="info-wrap">
                            <div className="info-box">
                                <strong className="label-text">
                                    Milestone 1 payout amount
                                </strong>
                                <span className="text">200 KLAY</span>
                            </div>
                            <Link href="/">View Transfer Memo</Link>
                        </div>
                        <div className="info-wrap">
                            <div className="info-box">
                                <strong className="label-text">
                                    Milestone 2 payout amount
                                </strong>
                                <span className="text">300 KLAY</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="approves-memos">
                        <strong className="title">
                            Approval Signatures - {safeDetails.approvedCount} out of {approvers?.length} approver(s)
                        </strong>
                        <div className="memo-holder">
                            {approvers?.map((data) => {
                                return (
                                    <div className="flex">
                                        <div className="memo-box">
                                            <span className="text">
                                                {data.approverAddress}
                                            </span>
                                            <FaRegCheckCircle style={{ color: data.status == "Pending" ? "" : "green" }} className="icon" size="23" />
                                        </div>

                                        <div className="flex-column">
                                            {
                                                data.approverId === user._id && (
                                                    data.status === "Pending" ? (
                                                        <Button
                                                            className="btn outline"
                                                            variant="outline"
                                                            onClick={() => approveSafe()}
                                                        >
                                                            Approve
                                                        </Button>
                                                    ) : (
                                                        data.status === "Completed" && (
                                                            <span className="date">Signed on {data?.signedTime}</span> // Assuming data.signedDate contains the date
                                                        )
                                                    )
                                                )
                                            }

                                        </div>
                                    </div>
                                )
                            })}
                            {/* <div className="flex">
                                <div className="memo-box">
                                    <span className="text">
                                        5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                                    </span>
                                    <FaRegCheckCircle className="icon" size="23" />
                                </div>
                                <span className="date">Signed on 1 July 2023, 11:58:39am</span>
                            </div>
                            <div className="flex">
                                <div className="memo-box">
                                    <span className="text">
                                        5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                                    </span>
                                    <FaRegCheckCircle className="icon" size="23" />
                                </div>
                                <span className="date">Signed on 1 July 2023, 11:58:39am</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </ContentSection>
        </SafesContent >
    );
}

export default AdminSafesPageContent;
