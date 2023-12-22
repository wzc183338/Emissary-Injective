import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";
import keyImg from "../../../public/icon-key.svg";
import { LaunchColumn } from "./LaunchExistingEmissary.styles";
import Link from "next/link";
import { API } from "@/service/api/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from "@/service/storage/storage";
import { useDispatch, useSelector } from "react-redux";
import { storeEmissary } from "@/redux/EmissaryRedux";
import { useRouter } from "next/router";

const LaunchExistingEmissary = () => {

  const [body, setBody] = useState({})
  const dispatch = useDispatch()
  const router = useRouter()
  const emissary = useSelector((state) => state.emissary.emissary);

  const handleExistingEmissary = async (e) => {
    e.preventDefault()
    const user = getUser()

    try {
      if (!body.uniqueCode) {
        return toast.error("Please enter code!");
      }
      await API.getUserEmissaryWithUniqueCode(body).then((res) => {
        if (res.status == 200) {
          dispatch(storeEmissary(res.data.data));
          if (user.address == res?.data?.data?.ownerAddress || user.role == "Admin") {
            router.push("/admin/transfer-request")
          } else {
            router.push("/user/transfer-request")
          }
        }
      })
    } catch (err) {
      console.log(err)
      toast.error("Error getting emissary")
    }


  }




  return (
    <LaunchColumn>
      <ToastContainer />
      <div className="wrap">
        <div className="icon-box">
          <Image src={keyImg} alt="img description" />
        </div>
        <strong className="title">Launch existing emissary</strong>
        <p>
          Already have a emissary for your community? Enter the unique code and
          direct to your emissary.
        </p>
        <form className="form">
          <input onChange={(e) => body.uniqueCode = e.target.value} type="text" placeholder="Enter Code..." />
          <button onClick={(e) => handleExistingEmissary(e)} type="submit">
            <FiArrowRightCircle size="24" />
          </button>
        </form>
      </div>
    </LaunchColumn>
  );
};

export default LaunchExistingEmissary;
