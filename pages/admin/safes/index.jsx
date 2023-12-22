import React, { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import SafeCompAdmin from "@/components/SafeCompAdmin";
import SideNav from "@/components/SideNav";
import { FiPlusCircle } from "react-icons/fi";
import back from "../../../../public/back.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { API } from "@/service/api/api";

const Index = () => {
  const [addSafe, setAddSafe] = useState(false);
  const [showSafes, setShowSafes] = useState(false);
  const [creatingSafe, setCreatingSafe] = useState(false);
  const [safes, setSafes] = useState([]);
  const emissary = useSelector((state) => state.emissary.emissary);

  const handleSafes = async () => {
    const body = { emissaryId: emissary._id };
    await API.getUserSafe(body).then((res) => {
      if (res.status === 200) {
        setSafes(res.data.data);
      }
    });
  };

  useEffect(() => {
    handleSafes();
  }, []);

  useEffect(() => {
    if (safes?.length > 0) {
      setShowSafes(true);
      setAddSafe(false);
      setCreatingSafe(false);
    } else {
      setAddSafe(true);
      setShowSafes(false);
      setCreatingSafe(false);
    }
  }, [safes]);

  return (
    <>
      <SideNav />
      <PageHeader>
        {addSafe ? (
          <Image src={back} onClick={() => { setAddSafe(false); setShowSafes(true); setCreatingSafe(false) }} alt="back" />
        ) : (
          <FiPlusCircle onClick={() => { setAddSafe(true); setShowSafes(false); setCreatingSafe(false) }} color="var(--blue)" />
        )}
        Safes
      </PageHeader>
      <SafeCompAdmin
        addSafe={addSafe}
        setShowSafes={setShowSafes}
        showSafes={showSafes}
        setAddSafe={setAddSafe}
        creatingSafe={creatingSafe}
        setCreatingSafe={setCreatingSafe}
        safes={safes}
      />
    </>
  );
};

export default Index;
