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
import { AwsCdkNote } from "../components/sections/AwsCdkNote";
import { Dashboard } from "../components/sections/Dashboard";
import { GitNote } from "../components/sections/GitNote";
import { JestNote } from "../components/sections/JestNote";
import { NodeJsNote } from "../components/sections/NodeJsNote";
import { ReactJsNote } from "../components/sections/ReactJsNote";

export const SIDEBAR_DATA = [
  {
    id: 2,
    name: "GitHub/git",
    path: "/git",
    icon: <GitHubIcon />,
    content: <GitNote />
  },
  {
    id: 3,
    name: "ReactJs/typescript",
    path: "/reactjs",
    icon: <ReactJsIcon />,
    content: <ReactJsNote />,
  }, 
  {
    id: 4,
    name: "Nodejs/typescript",
    path: "/nodejs",
    icon: <NodeJsIcon />,
    content: <NodeJsNote/>,
  },
  {
    id: 5,
    name: "AWS cdk/typescript",
    path: "/awscdk",
    icon: <AwsIcon />,
    content: <AwsCdkNote />,
  },
  {
    id: 6,
    name: "Jest/unit testing",
    path: "/jest",
    icon: <JestIcon />,
    content: <JestNote />,
  },
];
