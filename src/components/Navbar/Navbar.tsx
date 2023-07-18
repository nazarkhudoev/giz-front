import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-[50px]">
        <li>
          <Link className="text-white" href={"/"}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="text-white" href={"/"}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link className="text-white" href={"/"}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
