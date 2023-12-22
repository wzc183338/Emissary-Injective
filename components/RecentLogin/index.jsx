import React, { useEffect, useState } from "react";
import Image from "next/image";
import klaytnImg from '../../../public/klaytn.svg';
import { LoginColumn } from "./RecentLogin.styles";
import { API } from "@/service/api/api";
import { storeEmissary } from "@/redux/EmissaryRedux";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/service/storage/storage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";




const RecentLogin = () => {

  const [emissaries, setEmissaries] = useState([])
  const [body, setBody] = useState({})
  const dispatch = useDispatch()
  const router = useRouter()
  const emissary = useSelector((state) => state.emissary.emissary);


  const handleEmissaries = async () => {
    await API.getUserEmissaries().then((res) => {
      if (res.status === 200) {
        // console.log(res.data.data)
        setEmissaries(res.data.data)
      }
    })
  }

  const handleExistingEmissary = async (e) => {
    const user = getUser()
    try {
      body.uniqueCode = e.uniqueCode
      await API.getUserEmissaryWithUniqueCode(body).then((res) => {
        if (res.status == 200) {
          console.log(res.data.data)
          dispatch(storeEmissary(res.data.data));
          console.log(emissary)
          if (user.address == res?.data?.data?.ownerAddress || user.role == "Admin") {
            router.push("/admin/transfer-request")
          } else {
            router.push("/user/transfer-request")
          }
        }
      })
    } catch (err) {
      console.log(err)
      return toast.error("Error getting emissary")
    }


  }


  useEffect(() => {
    handleEmissaries();
  }, []);



  return (
    <LoginColumn>
      <ToastContainer />
      <ul className="login-list">
        {emissaries.map((data, index) => (<li>
          <button onClick={() => handleExistingEmissary(data)} key={index} className="img-box">
            <Image width={35} height={35} src={data.logo} alt="logo" />
            <span className="name">{data.name}</span>
          </button>
          <span className="text">{data.lastLogin}</span>
        </li>))}
      </ul>
    </LoginColumn>
  );
};

export default RecentLogin;
