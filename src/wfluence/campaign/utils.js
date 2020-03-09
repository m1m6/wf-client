import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactCountryFlag from 'react-country-flag';

import isNumber from 'lodash/isNumber';

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
                status,
                id: campaignCreatorId
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
                name: name,
                profileId: id,
                status,
                campaignCreatorId
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
            const { profile } = media;
            if (
                media.mediaType === 'IMAGE' ||
                media.mediaType === 'VIDEO' ||
                media.mediaType === 'CAROUSEL_ALBUM'
            ) {
                let er = ((media.commentsCount + media.likesCount) / profile.followersCount) * 100;

                media.er = er;
                totalEngagementRate += er;

                totalLikes += media.likesCount;
                totalComments += media.commentsCount;
                totalViews += media.video_views ? media.video_views : 0;
            } else if (media.mediaType === 'STORY') {
                let er = (media.reach / profile.followersCount) * 100;
                media.er = er;
                totalEngagementRate += er;
            }
        }

        totalEngagementRate = totalEngagementRate / newMediasObject.length;
    }
    return {
        medias,
        totalEngagementRate,
        totalLikes,
        totalComments,
        totalViews
    };
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

    return '0.00';
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
            if (media.mediaType !== 'STORY') {
                const {
                    timestamp,
                    likesCount,
                    commentsCount,
                    profile: { followersCount, name }
                } = media;
                let er = (((likesCount + commentsCount) / followersCount) * 100).toFixed(2);

                let postDate = new Date(timestamp);
                xLabels.push(`${postDate.getDate()}/${postDate.getMonth() + 1}`);
                yData.push({ y: parseFloat(er), name });
            }
        }
    }

    return {
        xLabels,
        yData
    };
};

export const getTopCountriesData = metrics => {
    let xLabels = [];
    let yData = [];

    if (metrics && metrics.length) {
        const { topCountries } = metrics[0];

        let sortedKeys = Object.keys(topCountries).sort(
            (a, b) => topCountries[b] - topCountries[a]
        );
        for (let key of sortedKeys) {
            let value = (topCountries[key] * 100).toFixed(0);
            let labelValue = (
                <span>
                    <ReactCountryFlag countryCode={key} /> <br />
                    {key}
                </span>
            );
            xLabels.push(ReactDOMServer.renderToString(labelValue));
            yData.push(parseInt(value));
        }
    }

    return {
        xLabels,
        yData
    };
};

export const getCitiesData = metrics => {
    let xLabels = [];
    let yData = [];

    if (metrics && metrics.length) {
        const { topCities } = metrics[0];
        let sortedKeys = Object.keys(topCities).sort((a, b) => topCities[b] - topCities[a]);
        for (let key of sortedKeys) {
            let value = (topCities[key] * 100).toFixed(0);
            let keySplit = key;
            if (key.includes(',')) {
                keySplit = key.split(',');
            }
            xLabels.push(keySplit[0]);
            yData.push(parseInt(value));
        }
    }

    return {
        xLabels,
        yData
    };
};

export const getAgeData = metrics => {
    let xLabels = ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64'];
    let yData = [];

    let genderLabels = ['Male', 'Female'];
    let genderYData = [];

    let maleSum = 0;
    let femaleSum = 0;
    try {
        if (metrics && metrics.length) {
            let { gender } = metrics[0];
            for (let key of xLabels) {
                let mValue = parseFloat(gender[`M.${key}`]);
                let fValue = parseFloat(gender[`F.${key}`]);

                maleSum += mValue;
                femaleSum += fValue;

                let sum = ((mValue + fValue) * 100).toFixed(0);
                yData.push(parseInt(sum));
            }

            genderYData.push(parseInt((maleSum * 100).toFixed(0)));
            genderYData.push(parseInt((femaleSum * 100).toFixed(0)));
        }
    } catch (e) {
        console.exception(e);
    }
    return {
        xLabels,
        yData,
        genderLabels,
        genderYData
    };
};
