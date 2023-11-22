import React from "react";
// import { ReactComponent as BathroomIcon } from "/assets/images/icons/svg/bathroom.svg";
import { bathroom } from "../components/Data";
import { ProductBox } from "../components/Shared";
import Layout from "../Layouts/Layout";
import { BiChevronRight } from "react-icons/bi";

const Bathroom = ({ seo, page }) => {
    return (
        <Layout seo={seo}>
            <div className="bg-neutral-100">
                <div className="wrapper">
                    <div className="block pt-6">
                        <p className="opacity-50 inline-block  lowercase">მთავარი</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="  inline-block lowercase">აბაზანის ავეჯი</p>
                    </div>
                    <div className="mt-10 mb-12 text-2xl ">
                        {/* <BathroomIcon className="inline-block" /> აბაზანის ავეჯი */}
                        <img className="inline-block" src="/assets/images/icons/svg/bathroom.svg" /> აბაზანის ავეჯი
                    </div>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 pb-20">
                        {bathroom.map((item, index) => {
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

export default Bathroom;
