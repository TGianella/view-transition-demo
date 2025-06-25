import Link from "next/link";
import {usePathname} from "next/navigation";

export const Header = ({ onClick }: { onClick: () => void }) => {
    const pathname = usePathname();

  return (
    <header>
      <h1 onClick={onClick}>BlaBlaBla</h1>
      <nav>
        <Link className={`${pathname === '/' ? 'active' : ''}`} href={"/"}>No transition</Link>
        <Link className={`${pathname === '/default-transition' ? 'active' : ''}`} href={"/default-transition"}>Default</Link>
        <Link className={`${pathname === '/custom-transition' ? 'active' : ''}`} href={"/custom-transition"}>Custom</Link>
        <Link className={`${pathname === '/static-header' ? 'active' : ''}`} href={"/static-header"}>Header</Link>
        <Link className={`${pathname === '/names' ? 'active' : ''}`} href={"/names"}>Names</Link>
        <Link className={`${pathname === '/feature' ? 'active' : ''}`} href={"/feature"}>Feature</Link>
        <Link className={`${pathname === '/aspect-ratio' ? 'active' : ''}`} href={"/aspect-ratio"}>Aspect ratio</Link>
        <Link className={`${pathname === '/types' ? 'active' : ''}`} href={"/types"}>Types</Link>
      </nav>
    </header>
  );
};
