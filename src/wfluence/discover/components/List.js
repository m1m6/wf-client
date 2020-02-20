import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col, Skeleton, Spin } from 'antd';
import CommonFilter from '../../../core/filter/components/CommonFilter';
import { FILTER_KEYS } from '../../../core/filter/constants';
import ProfileCard from '../../profile/components/ProfileCard';
import Button from '../../../form/components/Button';
import useProfilesQuery from '../useProfiles';

const List = () => {
	const { data, loading, loadMore, error } = useProfilesQuery(9, 0);
	const [btnLoading, setBtnLoading] = useState(false);
	if (loading && !data) return <Skeleton active paragraph title loading />;

	if (error) {
		return <p>`Error: ${error.message}`</p>;
	}

	const { profiles } = data;
	console.log('loading', loading);
	console.log('profiles', profiles);

	return (
		<>
			<div className="dicover-profiles-wrapper">
				<Row className="profiles-row">
					{profiles &&
						profiles.length > 0 &&
						profiles.map((profile, i) => {
							return (
								<Col className="profile-card-wrapper">
									<ProfileCard loading={loading} profile={profile} />
								</Col>
							);
						})}
				</Row>
			</div>
			<div className="footer">
				{btnLoading ? (
					<Spin size="large" style={{ marginTop: '40px' }} />
				) : (
					profiles.length === 9 && (
						<Button
							className="wf-btn-primary"
							onClick={e => {
								setBtnLoading(true);
								loadMore(9, profiles.length);

								setTimeout(() => {
									setBtnLoading(false);
								}, 1000);
							}}
							disabled={btnLoading}
						>
							Load More
						</Button>
					)
				)}
			</div>
		</>
	);
};

export default List;
