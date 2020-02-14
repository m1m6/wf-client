import isNumber from "lodash/isNumber";

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
				media,
				status
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
				profileId: id,
				status
			});
		}
	}
	return { influencers: results, totalBudget, totalPosts };
};

export const findMediaMetrics = medias => {
	let totalEngagementRate = 0;
	let totalLikes = 0;
	let totalComments = 0;
	let totalViews = 0;

	if (medias && medias.length) {
		const newMediasObject = JSON.parse(JSON.stringify(medias));

		for (const media of newMediasObject) {
			debugger;
			const { profile } = media;
			if (
				media.mediaType === "IMAGE" ||
				media.mediaType === "VIDEO" ||
				media.mediaType === "CAROUSEL_ALBUM"
			) {
				let er =
					((media.commentsCount + media.likesCount) / profile.followersCount) *
					100;

				media.er = er;
				totalEngagementRate += er;

				totalLikes += media.likesCount;
				totalComments += media.commentsCount;
				totalViews += media.video_views ? media.video_views : 0;
			} else if (media.mediaType === "STORY") {
				let er = (media.reach / profile.followersCount) * 100;
				media.er = er;
				totalEngagementRate += er;
			}
		}

		totalEngagementRate = totalEngagementRate / newMediasObject.length;
		return {
			medias,
			totalEngagementRate,
			totalLikes,
			totalComments,
			totalViews
		};
	}
};

export const getCostPerEachEngagement = (
	totalLikes = 0,
	totalComments = 0,
	totalViews = 0,
	totalBudget = 0
) => {
	return {
		costPerLikes: getCostPerEngagement(totalLikes, totalBudget) ,
		costPerComments: getCostPerEngagement(totalComments, totalBudget) ,
		costPerViews: getCostPerEngagement(totalViews, totalBudget) ,
	};
};

const getCostPerEngagement = (number, cost) => {
	const isValid =  isNumber(number) && number > 0;
	if (isValid){
		return (cost/number).toFixed(2)
	}

	return "0.00"
};
