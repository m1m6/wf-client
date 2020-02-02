export const getCampaignInfluencers = campaign => {
	let results = [];
	let totalBudget = 0;
	let totalPosts = 0;
	if (campaign && campaign.influencers) {
		const { influencers } = campaign;
		for (const influencer of influencers) {
			const {
				requiredPostsCount,
				publishedPostsCount,
				budget,
				Profile,
				media
			} = influencer;
			const { id, name, profilePic } = Profile;

			totalBudget += budget;
			totalPosts += media && media.length > 0 ? media.length : 0;
			results.push({
				requiredPostsCount,
				publishedPostsCount,
				budget,
				profile_pic_url: profilePic,
				username: name,
				profileId: id
			});
		}
	}
	return { influencers: results, totalBudget, totalPosts };
};
