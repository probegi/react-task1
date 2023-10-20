import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <h1 className="title">Birdwatching</h1>
      <img src="dove.png" alt="a simple dove logo"></img>
      <Menu />
    </header>
  );
}
