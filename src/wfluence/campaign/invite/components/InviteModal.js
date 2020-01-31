import React, { useState } from "react";
import { Modal, Button, Icon, Tooltip, Input, message } from "antd";

const InviteModal = ({
	inviteModalVisible,
	setInviteModalVisible,
	setInvitedInfluencers
}) => {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [postsCount, setPostsCount] = useState(0);
	const [budget, setBudget] = useState(0);
	const [results, setResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	const callApi = searchTerm => {
        if (budget === 0 || postsCount === 0){
            message.warning('Please complete all fields.')
            return;
        }
		setIsSearching(true);
		searchCharacters(searchTerm).then(profile => {
			setIsSearching(false);
			if (profile) {
                const newProfile = {...profile, postsCount, budget}
				setResults([...results, newProfile]);
                setSearchTerm("");
                setInvitedInfluencers([...results, newProfile])
			}
		});
	};
	const handleOk = () => {
        if (budget === 0 || postsCount === 0){
            message.warning('Please complete all fields.')
            return;
        }
		setConfirmLoading(true);
		setTimeout(() => {
			setInviteModalVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		setInviteModalVisible(false);
	};

	const deleteProfile = i => {
		let profiles = JSON.parse(JSON.stringify(results));
		profiles.splice(i, 1);
        setResults([...profiles]);
        setInvitedInfluencers([...profiles])
	};
	return (
		<Modal
			centered
			title="Invite Influencers"
			visible={inviteModalVisible}
			onOk={handleOk}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
			okButtonProps={{
				disabled: isSearching
			}}
			cancelButtonProps={{
				disabled: isSearching
			}}
			closable={false}
			maskClosable={false}
		>
			Enter Influencer Username:{" "}
			<div style={{ display: "flex", justifyContent: "column" }}>
				<Input
					placeholder="Enter influencer username"
					prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
					suffix={
						<Tooltip title="Insert Your Instagram Influencer Username">
							<Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
						</Tooltip>
					}
					disabled={isSearching}
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
				<Button
					style={{ marginLeft: "10px" }}
					onClick={e => callApi(searchTerm)}
					disabled={isSearching}
				>
					Add
				</Button>
			</div>
			<div
				style={{ display: "flex", justifyContent: "column", marginTop: "10px" }}
			>
				<div>
					<div>How many posts?</div>
					<Input
						suffix={
							<Tooltip title="Insert Your Instagram Influencer Username">
								<Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
							</Tooltip>
						}
						disabled={isSearching}
						onChange={e => setPostsCount(e.target.value)}
						value={postsCount}
						type="number"
					/>
				</div>
				<div style={{ marginLeft: "5px" }}>
					<div>Influencer budget</div>
					<Input
						suffix={
							<Tooltip title="Insert Your Instagram Influencer Username">
								<Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
							</Tooltip>
						}
						disabled={isSearching}
						onChange={e => setBudget(e.target.value)}
						value={budget}
						type="number"
					/>
				</div>
			</div>
			<div className="influencers-list" style={{ marginTop: "10px" }}>
				{results.length > 0 &&
					results.map((profile, i) => {
						return (
							<div style={{ marginTop: "5px" }}>
								<img src={profile.profile_pic_url} width={36} height={36} />
								<span
									style={{
										marginLeft: "5px",
										fontSize: "14px",
										color: "#61bd50",
										fontWeight: "600"
									}}
								>
									{profile.username}
								</span>
								<Icon type="close" onClick={() => deleteProfile(i)} />
							</div>
						);
					})}
			</div>
		</Modal>
	);
};

async function searchCharacters(profile) {
	return fetch(`https://www.instagram.com/${profile}/`, {
		headers: {
			referer: "https://www.instagram.com/p/BT1ynUvhvaR/?taken-by=yatsenkolesh",
			origin: "https://www.instagram.com",
			"user-agent":
				"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36"
		},
		method: "get"
	})
		.then(r =>
			r.text().then(t => {
				var subStr = t;

				var startStr = '<script type="text/javascript">window._sharedData = ';
				var start = subStr.indexOf(startStr) + startStr.length;
				subStr = subStr.substr(start, subStr.length);

				subStr = subStr.substr(0, subStr.indexOf("</script>") - 1);

				var json = JSON.parse(subStr);
				return json.entry_data.ProfilePage[0].graphql.user;
			})
		)
		.catch(e => {
			message.warning(`Unable to find user: ${profile}`);
			return false;
		});
}

export default InviteModal;
