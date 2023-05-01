import React, {useState} from "react";
import Image from "next/image";
import {BsWhatsapp} from "react-icons/bs";
import {BiPhoneCall} from "react-icons/bi";
import {data} from "../data/data.js";

export default function ProfileCard() {
    const [profile, setProfile] = useState(data)
    return (
        <div className="pl-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {profile.map((item, index) => (
                <div key={index} className="max-w-sm bg-gray-500 rounded-lg shadow-md shadow-emerald-400">
                    <div className="rounded-full flex items-center justify-center pt-3 mb-3">
                        <Image
                            src={item.profile_url}
                            className="w-32 h-32 rounded-full"
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3">
                            <div className="text-center text-2xl text-white">
                                <h1>{item.name}</h1>
                                <span>{item.profession}</span>
                                <p>Contact</p>
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex gap-2">
                                    <BsWhatsapp size={25}/>
                                    <a href={item.whatsapp_url}
                                       className="font-bold text-white">{item.contact_whatsapp}</a>
                                </div>
                                <div className="flex gap-2">
                                    <BiPhoneCall size={25}/>
                                    <p className="font-bold text-white">{item.contact_call}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
