import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaPiedPiper, FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { GrHostMaintenance } from "react-icons/gr";

const data = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: "UI/UX Design",
    desc: "My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Performance Optimization",
    desc: "  Speed, SEO(Search Engine Optimization), and accessibility improvements",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "App Development",
    desc: "Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you.",
  },
  {
    id: 5,
    icon: <FaPiedPiper />,
    title: "API Integration",
    desc: "  Connecting third-party services like payment gateways and management.",
  },
  {
    id: 6,
    icon: <GrHostMaintenance />,
    title: "Bug Fixing & maintenance ",
    desc: "Unlike other developers in the market, I will be offering 24/7 support and bug fixing.",
  },
];

export default data;
