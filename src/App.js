import "./styles.css";
import useRightClickMenu from "./hooks/useRightClickMenu";
import Menu from "./components/Menu";

export default function App() {
  const { x, y, showMenu } = useRightClickMenu();
  return (
    <div>
      <h1>Right Click Menu</h1>
      <Menu x={x} y={y} showMenu={showMenu} />
    </div>
  );
}
