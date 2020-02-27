import React, { useState } from 'react';
import { Skeleton, List, Avatar } from 'antd';
import { useUpdateNotificationMutation } from '../useMutations';
import { useMyNotificaitonsQuery } from '../useQueries';

const Notifications = ({ routerHistory }) => {
	const { loading, data, error } = useMyNotificaitonsQuery();
	const [updateNotificationItem] = useUpdateNotificationMutation();
	if (loading) {
		return <Skeleton active loading paragraph avatar />;
	}

	const { myNotifications } = data;
	const reversedItems = myNotifications
		? JSON.parse(JSON.stringify(myNotifications)).reverse()
		: [];
	return (
		<div>
			<List
				itemLayout="horizontal"
				dataSource={reversedItems}
				renderItem={item => (
					<>
						<List.Item
							onClick={async () => {
								await updateNotificationItem({
									variables: {
										notificationId: item.id,
										status: true
									}
								});

								item.href && routerHistory.push(item.href);
							}}
						>
							<List.Item.Meta
								avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>N</Avatar>}
								title={
									<a
										style={{
											...(item.isRead ? { color: '#ccc' } : { color: '#1c3a6a' })
										}}
									>
										{item.title}
									</a>
								}
								description={item.body}
							/>
						</List.Item>
					</>
				)}
			/>
		</div>
	);
};
export default Notifications;
