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

            <section class="min-h-screen mt-10 body-font text-gray-100 ">
    <div class="container mx-auto px-5">
                    <div class="-m-4 flex flex-wrap">

                                             {

                            categories.map((e, i) => {
                                return (
                                     <Link class='w-full p-4 md:w-1/2 lg:w-1/4' href={route("client.categories.index",e.slug)} >
                                     <div >
          <a class="relative block h-48 overflow-hidden rounded">
            <img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src={e.file != null
                                            ? "/" +
                                            e.file.path +
                                            "/" +
                                            e.file.title
                                            : null} />
          </a>
          <div class="mt-4">
            <h1 class="text-lg title-font mb-1 text-xs tracking-widest">{e.title}</h1>
          </div>
                                        </div>
                                        </Link>


            )
                            })


    }
                    </div>
                    </div>
  </section>




        </Layout>
    );
};

export default Home;
