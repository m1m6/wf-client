import React from "react";
import moment from "moment";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function disabledDate(current) {
	// Can not select days before today and today
	return current && current < moment().endOf("day");
}

const RangeDatePicker = ({ name, setFieldValue }) => {
	return (
		<div>
			<RangePicker
				disabledDate={disabledDate}
				separator="→"
				format="DD/MM/YYYY"
				onChange={e => setFieldValue(name, e)}
			/>
		</div>
	);
};

export default RangeDatePicker;
