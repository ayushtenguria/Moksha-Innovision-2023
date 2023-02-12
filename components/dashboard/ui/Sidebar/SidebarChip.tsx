import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
  name: string;
  iconSrc: string;
  setSidebarOpen: (a: any) => any;
};

const SidebarChip = (props: Props) => {
  const router = useRouter();

  const { href, name, iconSrc, setSidebarOpen } = props;

  const ACTIVE_STYLE = "bg-gray-900 invert";

  return (
    <Link
      href={href}
      className={`flex items-center justify-center space-x-3 text-white py-2 rounded-md font-medium hover:invert hover:bg-gray-900 ${
        router.asPath === href ? ACTIVE_STYLE : ""
      }`}
      onClick={() => setSidebarOpen(false)}
    >
      <span className="text-white scale-100">
        {<Image src={iconSrc} width={25} height={25} alt={name + " icon"} />}
      </span>
      <span className="group-hover:w-auto sm:w-0  overflow-x-hidden sm:h-0 group-hover:h-auto ">
        {name}
      </span>
    </Link>
  );
};

export default SidebarChip;
