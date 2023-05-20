"use client";

import { Card } from "@geist-ui/core";
import Image from "next/image";
import React from "react";

const images = [
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/collections/7_0a95e6cb-4ae8-4685-894a-04c0fda3cd2c_720x.jpg?v=1598244162",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/collections/18_720x.jpg?v=1587097408",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/collections/7_720x.jpg?v=1587097465",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/collections/16_720x.jpg?v=1587755406",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/collections/21_720x.jpg?v=1587097430",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/collections/22_720x.jpg?v=1587132940",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/2_2_720x.jpg?v=1586245114",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/26_540x.jpg?v=1586244888",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/29_2_540x.jpg?v=1586316900",
  "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/28_540x.jpg?v=1586316960",
];

function Home() {
  return (
    <div>
      <div className="relative flex items-center h-[350px] overflow-hidden">
        <Image
          className="absolute top-[-130px] left-0"
          src="https://cdn.shopify.com/s/files/1/0376/9440/6700/files/slide23.jpg"
          width={1920}
          height={1080}
          alt="banner"
        />
        <div className="px-12">
          <h1 className="text-4xl font-bold relative">Banner title</h1>
          <h1 className="text-lg relative">Subtitle here</h1>
        </div>
      </div>
      <h1 className="text-2xl font-semibold py-6">Categories</h1>
      <div className="grid grid-cols-6 gap-4">
        {[...Array(10)].map((_, i) => (
          <Box key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

function Box({ index }: { index: number }) {
  return (
    <div>
      <Card hoverable>
        <Card.Content padding={0}>
          <Image src={images[index]} alt="" width={200} height={200} />
        </Card.Content>
      </Card>
    </div>
  );
}

export default Home;
