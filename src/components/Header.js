import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation();

	return (
		<header className="header">
			<h1>{title}</h1>
			{location.pathname === "/" && (
				<Button onClick={onAdd} text={showAdd ? "close" : "add"} />
			)}
		</header>
	);
};

// can do below things to every components
Header.defaultProps = {
	title: "task tracker",
};

export default Header;
