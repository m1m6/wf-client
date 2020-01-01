import React from "react";
import { Button as AntButton } from "antd";

const Button = ({ children, ...rest }) => (
	<AntButton size="large" {...rest}>
		{children}
	</AntButton>
);

export default Button;
