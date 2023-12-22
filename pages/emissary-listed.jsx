import Link from "next/link";
import { FluidContent } from "../components/HomeContent/HomeContent.styles";
import React from 'react'
import Image from "next/image";
import logoImg from "../../public/emissary-logo.svg";
import RecentLogin from "../components/RecentLogin/index";
import LaunchExistingEmissary from "../components/LaunchExistingEmissary";
import LaunchNewEmissary from "../components/LaunchNewEmissary";
export default function EmissaryListed() {
    return (
        <div>
            <FluidContent>
                <div className="container">
                    <div className="holder">
                        <div className="leftCol">
                            <div className="logo">
                                <Link href="/">
                                    <Image src={logoImg} alt="img description" />
                                </Link>
                            </div>
                            <div className="text-box">
                                <h1>
                                    A better way to manage payouts & treasury on{" "}
                                    <span>Injective</span> Network.{" "}
                                </h1>
                            </div>
                            <RecentLogin />
                        </div>
                        <div className="rightCol">
                            <LaunchExistingEmissary />
                            <LaunchNewEmissary />
                        </div>
                    </div>
                </div>
            </FluidContent>
        </div>
    )
}
