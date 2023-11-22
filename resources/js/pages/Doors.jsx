import React from "react";
// import { ReactComponent as DoorsIcon } from "/assets/images/icons/svg/door.svg";
import { doorsHome } from "../components/Data";
import { ProductBox } from "../components/Shared";
import Layout from "../Layouts/Layout";
import { BiChevronRight } from "react-icons/bi";

const Doors = ({ seo, page }) => {
    return (
        <Layout seo={seo}>
            <div className="bg-neutral-100">
                <div className="wrapper">
                    <div className="block pt-6">
                        <p className="opacity-50 inline-block  lowercase">მთავარი</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="  inline-block lowercase">კარები</p>
                    </div>
                    <div className="mt-10 mb-12 text-2xl ">
                        {/* <DoorsIcon className="inline-block" /> რკინის კარი */}
                        <img className="inline-block" src="/assets/images/icons/svg/door.svg" /> რკინის კარი
                    </div>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 pb-20">
                        {doorsHome.map((item, index) => {
                            return (
                                <ProductBox
                                    key={index}
                                    name={item.name}
                                    size={item.size}
                                    img={item.img}
                                    link={item.link}
                                />
                            );
                        })}
                    </div>
                    <div className="pb-20 flex items-center justify-center">
                        <button className="mx-1 opacity-100">1</button>
                        <button className="mx-1 opacity-50">2</button>
                        <button className="mx-1 opacity-50">3</button>
                        <button className="mx-1 opacity-50">4</button>
                    </div>
                    <div className="mt-10 mb-12 text-2xl ">
                        <img className="inline-block" src="/assets/images/icons/svg/door.svg" /> ხის კარი
                        {/* <DoorsIcon className="inline-block" /> ხის კარი */}
                    </div>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 pb-20">
                        {doorsHome.map((item, index) => {
                            return (
                                <ProductBox
                                    key={index}
                                    name={item.name}
                                    size={item.size}
                                    img={item.img}
                                    link={item.link}
                                />
                            );
                        })}
                    </div>
                    <div className="pb-20 flex items-center justify-center">
                        <button className="mx-1 opacity-100">1</button>
                        <button className="mx-1 opacity-50">2</button>
                        <button className="mx-1 opacity-50">3</button>
                        <button className="mx-1 opacity-50">4</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Doors;
