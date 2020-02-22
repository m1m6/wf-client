import React, { useState } from 'react';
import { Row, Col, Skeleton, Spin, Result } from 'antd';
import ProfileCard from '../../profile/components/ProfileCard';
import Button from '../../../form/components/Button';
import useProfilesQuery from '../useProfiles';
import { useFiltersQuery } from '../../../core/filter/useQueries';
import { buildWhereFilter } from '../../../core/filter/utils';

const List = () => {
	const { loading: fLoading, data: fData, error: fError } = useFiltersQuery();
	const whereFilter = buildWhereFilter(fData);
	console.log(whereFilter);
	const { data, loading, loadMore, error } = useProfilesQuery(9, 0, whereFilter);
	const [btnLoading, setBtnLoading] = useState(false);
	if (loading && !data) return <Skeleton active paragraph title loading />;

	if (error) {
		return <p>`Error: ${error.message}`</p>;
	}

	const { profiles } = data;

	return (
		<>
			<div className="dicover-profiles-wrapper">
				<Row className="profiles-row">
					{profiles && profiles.length > 0 ? (
						profiles.map((profile, i) => {
							return (
								<Col className="profile-card-wrapper">
									<ProfileCard loading={loading} profile={profile} />
								</Col>
							);
						})
					) : (
						<Result
							status="404"
							title="Ooops!"
							subTitle="Sorry, there's no results matching your criteria."
						/>
					)}
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
								loadMore(9, profiles.length, whereFilter);

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
