import React from "react";
import Image from "next/image";
import back from "../../../../public/back.png";
import SideNav from "@/components/SideNav";
import PageHeader from "@/components/PageHeader";
import AdminSafesPageContent from "@/components/AdminSafePageContent/AdminSafePageContent";

function AdminSafeDefault() {
    return (
        <>
            <SideNav />
            <PageHeader>
                <Image src={back} alt="back" />
                Safes
            </PageHeader>
            <AdminSafesPageContent />
        </>
    );
}

export default AdminSafeDefault;
