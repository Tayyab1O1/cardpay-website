"use client";
import PlainLayout from "../(layouts)/plainLayout"
import Banner from "../Components/AboutUs/banner";
import Story from "../Components/AboutUs/story";
import MissionRibbon from "../Components/AboutUs/mission"
import Founders from "../Components/AboutUs/founders";
import MyCarousel from "../Components/HomePage/partnerCarousal";
import VisionRibbon from "../Components/AboutUs/vision";

export default function Home() {
  const color="lightPurple"
  return (
    <PlainLayout color={color}>
        <Banner />
        <Story />
        <VisionRibbon />
        <Founders />
        <MissionRibbon />
        <MyCarousel />
    </PlainLayout>
  )
}