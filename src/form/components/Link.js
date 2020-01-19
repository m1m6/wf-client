import React from "react";
import { Link as RLink } from "react-router-dom";
import classnames from "classnames";

const Link = ({ label, to, blackLink, target }) => {
	return (
		<RLink to={to} className={classnames("btn-link", { black: blackLink })} target={target}>
			{label}
		</RLink>
	);
};

export default Link;
