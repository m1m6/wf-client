import React from "react";
import { Link as RLink } from "react-router-dom";

const Link = ({ label, to }) => {
	return <RLink to={to} className="btn-link">{label}</RLink>;
};

export default Link;
