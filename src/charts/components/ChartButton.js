import React from "react";
import { Button as AntButton } from "antd";

const ChartButton = ({ children, ...rest }) => (
	<AntButton className="chart-button" {...rest}>
		{children}
	</AntButton>
);

export default ChartButton;
