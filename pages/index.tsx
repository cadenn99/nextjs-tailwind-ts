import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";
import CardTwo from "../components/CardTwo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Design One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main>
        <section className="bg-[#171717] text-white p-10 relative pb-[230px]">
          <h2 className="text-4xl font-bold text-center">Case studies</h2>
          <p className="text-normal text-center mt-4">
            See the results yourself. Our clients have achieved incredible,
            revenue-shifting results.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-10">
            {["tsla", "msft", "aapl"].map((item) => {
              return <Card logo={item} percentage={20} />;
            })}
          </div>

          <section
            className="absolute bg-blue-600 h-[300px] left-1/2 max-w-4xl -bottom-28 flex justify-center items-center rounded"
            style={{
              transform: "translateX(-50%)",
              width: "calc(100% - 80px)",
            }}
          >
            <div>
              <h1 className="text-xl font-bold md:text-3xl text-center">
                Grow your company with us
              </h1>
              <div className="flex gap-2 mt-5 justify-center">
                <button className="bg-white text-black px-4 py-1 md:px-8 md:py-2 whitespace-nowrap cursor-pointer rounded">
                  Free content
                </button>
                <button className="px-4 py-1 md:px-8 md:py-2 whitespace-nowrap border-2 border-white cursor-pointer rounded  ">
                  See Program
                </button>
              </div>
            </div>
          </section>
        </section>

        <section className="p-10 pt-[150px] bg-[#f4f4f4]">
          <h2 className="text-4xl font-bold text-center">
            How we help marketers
          </h2>
          <div className="grid grid-cols-1 max-w-4xl mx-auto mt-10 gap-4 md:grid-cols-2">
            <CardTwo
              icon={<ChatBubbleLeftRightIcon />}
              title={"Slack Community"}
              subTitle={"Community chats with growth experts"}
            />
            <CardTwo
              icon={<EnvelopeOpenIcon />}
              title={"Growth Newsletter"}
              subTitle={"Advanced bi-weekly growth tactics"}
            />
          </div>
        </section>

        <section className="p-10 bg-[#171717] text-white pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-start">
                Marketing Playbooks
              </h2>
              <p className="text-normal text-start mt-2">
                Researched by demand curve
              </p>
              <button className="px-4 py-2 border-2 mt-12 border-white rounded hover:bg-white hover:text-black transform duration-500 ease-in-out">
                See all playbooks
              </button>
            </div>
            {/*  */}
            <div className="flex gap-x-3 ">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="relative h-40 w-40">
                  <Image
                    src="/playbook.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
