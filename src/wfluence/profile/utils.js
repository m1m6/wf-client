import capitalize from 'lodash/capitalize';
import groupBy from 'lodash/groupBy';
import { colors } from '../../charts/HighChartTheme';

export const parseProfileCategories = catItem => {
	if (catItem) {
		const cats = catItem.replace(/\s/g, '').split(',');
		return cats.slice(0, cats.length - 1);
	}

	return [];
};

export const getProfileTags = media => {
	let uniqTags = new Set();
	if (media && media.length > 0) {
		for (const { tags } of media) {
			for (const tagItem of tags) {
				uniqTags.add(tagItem.name.toLowerCase());
			}
		}
	}
	return [...uniqTags];
};

export const mapFollowersAudienceToLabelOrValue = (source, property) => {
	if (source && source.length > 0) {
		return source.map(countryOrCityObject => {
			return countryOrCityObject[property];
		});
	}

	return [];
};

export const getAgeAndGenderSeries = (ageAndGenderDemographics, demography) => {
	let series = [];
	if (ageAndGenderDemographics) {
		ageAndGenderDemographics.forEach((group, i) => {
			let genderGroupObject = {};
			genderGroupObject.name = `${capitalize(group.gender)} ${Math.round(demography[i].value)}%`;
			genderGroupObject.data = group.by_age_group.map(ageGroup => ageGroup.prc);
			genderGroupObject.color = colors[i];
			series.push(genderGroupObject);
		});
	}
	return series;
};

export const getAudienceTypeData = followersReach => {
	let data = [];

	if (followersReach) {
		data.push([`Real People ${followersReach['real']}%`, followersReach['real']]);
		data.push([`Influencers ${followersReach['infs']}%`, followersReach['infs']]);
		data.push([`Mass followers ${followersReach['mass']}%`, followersReach['mass']]);
		data.push([`Suspicious Accounts ${followersReach['susp']}%`, followersReach['susp']]);
	}

	return data;
};

export const getFollowersFollowingData = followersOrFollowing => {
	let results = [];

	if (followersOrFollowing) {
		followersOrFollowing.forEach(item => {
			results.push([item.date, item.count]);
		});
	}

	return results;
};

export const getProfileContentTypes = media => {
	let results = [];
	if (media) {
		const groupedMedia = groupBy(media, 'mediaType');
		Object.keys(groupedMedia).map(key => {
			results.push([key, groupedMedia[key].length]);
		});
	}
	return results;
};

export const getContentTypesSeries = media => {
	let results = [];

	if (media) {
		const groupedMedia = groupBy(media, 'mediaType');
		Object.keys(groupedMedia).map(key => {
			let likes = 0;
			let comments = 0;
			groupedMedia[key].map(media => {
				likes += media.likesCount;
				comments += media.commentsCount;
			});
			results.push(likes + comments);
		});
	}
	return results;
};

export const getPostsHeatMap = media => {
	let results = [];
	if (media) {
		media.forEach(item => {
			let postDate = new Date(item.timestamp);
			let postEngagementPerDayAndHour = [
				postDate.getHours(), // GMT
				postDate.getDay(),
				item.commentsCount + item.likesCount
			];

			results.push(postEngagementPerDayAndHour);
		});
	}
	return results;
};

export const getSuggestedPostTime = postsHeatmap => {
	const mostEngagedPosts = postsHeatmap
		.sort(function(a, b) {
			return a[2] - b[2];
		})
		.slice(-3);

	return mostEngagedPosts;
};

export const getAqsStatus = aqs => {
	if (aqs >= 60) return 'good';
	else if (aqs >= 40 && aqs < 60) return 'mid';
	else if (aqs >= 0 && aqs < 40) return 'bad';
};

export const getScoreStatus = scoreTitle => {
	if (scoreTitle) {
		if (
			scoreTitle.toLowerCase().includes('low') ||
			scoreTitle.toLowerCase().includes('massfollowing')
		)
			return 'bad';
		else if (scoreTitle.toLowerCase().includes('improved')) return 'mid';
		else return 'good';
	}
	return 'good';
};
