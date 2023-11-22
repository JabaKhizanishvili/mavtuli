import { Link, usePage, useForm } from '@inertiajs/inertia-react'
import React from 'react';
import { contactInfo } from "./Data";
import { categories, categoryDropdown } from "./NavData";
import { Form } from "./Shared";
// import { ReactComponent as Pin } from "/assets/images/icons/svg/pin.svg";
// import { ReactComponent as Tel } from "/assets/images/icons/svg/tel.svg";

const Footer = () => {
    const { errors, gphone, gemail, gaddress, Categories } = usePage().props;


    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    const navigations = [
        {
            link: route("client.home.index"),
            text: __("client.navbar_main", sharedData),
        },
        {
            link: route("client.aboutus"),
            text: __("client.navbar_aboutus", sharedData),
        },
        {
            link: route("client.partners.index"),
            text: __("client.navbar_partners", sharedData),
        },
        {
            link: route("client.contact.index"),
            text: __("client.navbar_contact", sharedData),
        },
    ];

    return (
        <div className="bg-custom-blue-900 py-10 sm:pb-20 text-white">
            <div className="wrapper">
                <div className="xl:w-full m-auto flex items-start justify-between flex-col lg:flex-row">
                    <div className="mb-10 lg:mb-0">
                        <div className="mb-8">
                            {navigations.map((nav, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={nav.link}
                                        className={` md:mr-8 xl:mr-10 mr-3 text-xs sm:text-sm md:text-lg xl:text-xl  inline-block ${navigations.length === index + 1 && "!mr-0"
                                            }`}
                                    >
                                        {nav.text}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            {/* <div className="mr-10">
                                <div className="border-b border-white/[0.1] pb-1 mb-4">
                                    რკინეული
                                </div>
                                {categoryDropdown.map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            className=" lowercase  block mb-3 w-full"
                                        >
                                            {item.text}
                                        </Link>
                                    );
                                })}
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
