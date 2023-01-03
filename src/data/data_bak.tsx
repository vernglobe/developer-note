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
} from "../components/Icons";

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
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "ReactJs project/ts",
    path: "/reactjs",
    icon: <CalendarIcon />,
  },
  {
    id: 4,
    name: "Nodejs project/ts",
    path: "/nodejs",
    icon: <InvoiceIcon />,
  },
  {
    id: 5,
    name: "AWS cdk/ts",
    path: "/awscdk",
    icon: <UserIcon />,
  },
  {
    id: 6,
    name: "Jest/unit testing",
    path: "/jest",
    icon: <RolesIcon />,
  },
  {
    id: 7,
    name: "pages",
    path: "/pages",
    icon: <PagesIcon />,
  },
  {
    id: 8,
    name: "authentication",
    path: "/authentication",
    icon: <AuthIcon />,
  },
  {
    id: 9,
    name: "wizard examples",
    path: "/wizard",
    icon: <WizardIcon />,
  },
  {
    id: 10,
    name: "modal examples",
    path: "/modal",
    icon: <ModalIcon />,
  },
];
