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
		costPerLikes: getCostPerEngagement(totalLikes, totalBudget),
		costPerComments: getCostPerEngagement(totalComments, totalBudget),
		costPerViews: getCostPerEngagement(totalViews, totalBudget)
	};
};

const getCostPerEngagement = (number, cost) => {
	const isValid = isNumber(number) && number > 0;
	if (isValid) {
		return (cost / number).toFixed(2);
	}

	return "0.00";
};

export const getCampaignEngagementTimeLineData = mediaData => {
	let likesArray = [];
	let commentsArray = [];

	let likesHash = {};
	let commentsHash = {};
	if (mediaData && mediaData.length) {
		for (const media of mediaData) {
			const { mediaMetrics } = media;
			for (const metric of mediaMetrics) {
				const { commentsCount, likesCount, updatedAt } = metric;
				let utcDate = new Date(updatedAt);
				let utcMilliseconds = Date.UTC(
					utcDate.getUTCFullYear(),
					utcDate.getUTCMonth() + 1,
					utcDate.getUTCDay(),
					utcDate.getUTCHours(),
					utcDate.getUTCMinutes()
				);
				likesHash[utcMilliseconds] = likesHash[utcMilliseconds]
					? likesHash[utcMilliseconds] + likesCount
					: likesCount;
				commentsHash[utcMilliseconds] = commentsHash[utcMilliseconds]
					? commentsHash[utcMilliseconds] + commentsCount
					: commentsCount;
			}
		}
	}

	Object.keys(likesHash).map(key => {
		likesArray.push([key, likesHash[key]]);
	});
	Object.keys(commentsHash).map(key => {
		commentsArray.push([key, commentsHash[key]]);
	});

	console.log(likesArray);
	console.log(commentsArray);

	return {
		likesArray,
		commentsArray
	};
};

export const getUTCDate = date => {
	if (date) {
		let utcDate = new Date(date);
		let utcYMD = Date.UTC(
			utcDate.getUTCFullYear(),
			utcDate.getUTCMonth() + 1,
			utcDate.getUTCDay()
		);
		return utcYMD;
	}

	return null;
};

export const getEngagementRateData = mediaData => {
	let xLabels = [];
	let yData = [];

	if (mediaData && mediaData.length) {
		for (const media of mediaData) {
			if (media.mediaType !== "STORY") {
				const {
					timestamp,
					likesCount,
					commentsCount,
					profile: { followersCount, name }
				} = media;
				let er = (
					((likesCount + commentsCount) / followersCount) *
					100
				).toFixed(2);

				let postDate = new Date(timestamp);
				xLabels.push(`${postDate.getDate()}/${postDate.getMonth() + 1}`);
				yData.push({y: parseFloat(er), name});
			}
		}
	}

	return {
		xLabels,
		yData
	};
};
