import { MdManageAccounts } from "react-icons/md";
import { RxDashboard} from "react-icons/rx";
import { BiCommentDots } from "react-icons/bi";
import { AiFillFolderAdd } from "react-icons/ai";

const menu = [
  {
    title: "Dashboard",
    icon: <RxDashboard />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <AiFillFolderAdd />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <MdManageAccounts />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Feedback",
    icon: <BiCommentDots />,
    path: "/contact-us",
  },
];

export default menu;