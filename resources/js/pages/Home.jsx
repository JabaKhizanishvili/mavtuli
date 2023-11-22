import React from "react";
import HeroSlider from "../components/HeroSlider";
import { Link, usePage } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";
// import { BiChevronRight } from "react-icons/bi";
import { tileSlider, bathroom, doorsHome, partners } from "../components/Data";
import ProductSlider from "../components/ProductSlider";

const Home = ({ seo, page, partners, categories, products }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    return (
        <Layout seo={seo}>
            <div>
                <section className="mb-5">
                    <HeroSlider />
                </section>

                <section className="wrapper py-10">
                    <Link href="/partners" className="text-lg hover:underline">
                        {/* <PartnerIcon className="inline-block align-middle mr-2" /> */}
                        <img className="inline-block align-middle mr-2" src="/assets/images/icons/svg/partners.svg" />
                        ჩვენი პარტნიორები
                    </Link>
                    <div className="block text-center py-10">
                        {partners.map((item) => {
                            return (
                                <div
                                    key={item.name}
                                    className="text-center inline-block 2xl:mx-10 mx-5 mb-5 grayscale transition hover:grayscale-0"
                                >
                                    <div className="h-16 w-auto m-auto flex items-center justify-center mb-2">
                                        {/* <img src={item.logo} alt="" className="object-contain " /> */}
                                        <img src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <div className="lowercase">{item.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                {
                    categories.map((e, i) => {
                       return (
                        <section key={i} className=" py-10 pb-20">
                               <div className="wrapper">
                                   <Link href={route("client.categories.index",e.slug)} className="text-lg  hover:underline">
                                       {/* <TilesIcon className="inline-block align-middle mr-2" /> */}

                                       {/*<img className="inline-block align-middle mr-2"*/}
                                       {/*     src="/assets/images/icons/svg/tiles.svg"/>*/}
                                       {e.title}
                                   </Link>

                                   <ProductSlider data={
                                       e.products.map((e, i) => {
     return                                       {
        name: e.title,
        // size: "45x45",
        img: e.file != null
                                            ? "/" +
                                            e.file.path +
                                            "/" +
                                            e.file.title
                                            : null,
        link: "/single-product",
    }
                                       })
                                   } />
                               </div>
                           </section>
                       )
                    })
                }


            </div>
        </Layout>
    );
};

export default Home;
