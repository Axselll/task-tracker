import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<p>&copy; 2021 Traversary Media Course</p>
			<Link to="/about">About</Link>
		</footer>
	);
};

export default Footer;
