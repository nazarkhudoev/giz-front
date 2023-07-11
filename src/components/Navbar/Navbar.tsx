import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        <li>
          <Link className="text-white" href={"/"}>
            button
          </Link>
        </li>
        <li>
          <Link className="text-white" href={"/"}>
            button
          </Link>
        </li>
        <li>
          <Link className="text-white" href={"/"}>
            button
          </Link>
        </li>
        <li>
          <Link className="text-white" href={"/"}>
            button
          </Link>
        </li>
        <li>
          <Link className="text-white" href={"/"}>
            button
          </Link>
        </li>
      </ul>
    </nav>
  );
}
