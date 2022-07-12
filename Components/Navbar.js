import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Menu">Menu</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact">Contact Us</Link></li>
    </ul>
    </>
  )
}

export default Navbar