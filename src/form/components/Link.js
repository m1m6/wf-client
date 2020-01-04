import React from "react";
import { Link as RLink } from "react-router-dom";
import classnames from "classnames";

const Link = ({ label, to, blackLink }) => {
	return (
		<RLink to={to} className={classnames("btn-link", { black: blackLink })}>
			{label}
		</RLink>
	);
};

export default Link;
