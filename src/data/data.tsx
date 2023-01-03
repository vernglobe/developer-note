import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
  GitHubIcon,
  ReactJsIcon,
  NodeJsIcon,
  AwsIcon,
  JestIcon,
} from "../components/Icons";
import { GitNote } from "../components/sections/GitNote";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboards",
    path: "/dashboards",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "GitHub/git",
    path: "/git",
    icon: <GitHubIcon />,
    content: <GitNote />
  },
  {
    id: 3,
    name: "ReactJs project/ts",
    path: "/reactjs",
    icon: <ReactJsIcon />,
  },
  {
    id: 4,
    name: "Nodejs project/ts",
    path: "/nodejs",
    icon: <NodeJsIcon />,
  },
  {
    id: 5,
    name: "AWS cdk/ts",
    path: "/awscdk",
    icon: <AwsIcon />,
  },
  {
    id: 6,
    name: "Jest/unit testing",
    path: "/jest",
    icon: <JestIcon />,
  },
];
