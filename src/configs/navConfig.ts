import { type MenuItem } from "~/types/navigationTypes";

export const navConfig: MenuItem[] = [
	{
	  label: "Home",
	  href: "/",
	  subMenu: [
	    {
	      label: "Sub Menu 1",
	      href: "/",
	      subMenu: [
		{
		  label: "Sub-sub Menu 1",
		  href: "/",
		  subMenu: [
		    {
		      label: "Sub-sub-sub Menu 1",
		      href: "/",
		    },
		    {
		      label: "Sub-sub-sub Menu 2",
		      href: "/",
		    },
		  ],
		},
		{
		  label: "Sub-sub Menu 2",
		  href: "/",
		  subMenu: [
		    {
		      label: "Sub-sub-sub Menu 2",
		      href: "/",
		    },
		  ],
		},
	      ],
	    },
	    {
	      label: "Sub Menu 2",
	      href: "/",
	    },
	    {
	      label: "Sub Menu 3",
	      href: "/",
	    },
	  ],
	},
	{
	  label: "About",
	  href: "/about",
	},
      ];