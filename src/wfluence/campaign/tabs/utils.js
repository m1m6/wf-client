import React from 'react';
import { message } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import capetalize from 'lodash/capitalize';
import { numberFormat } from 'highcharts';
import { nFormatter } from '../../../utils/numberUtils';

export const getPostsTableColumns = () => {
    return [
        {
            title: 'Post by',
            dataIndex: 'postby',
            key: 'postby',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Post date',
            dataIndex: 'Postdate',
            key: 'Postdate',
        },
        {
            title: 'Likes',
            dataIndex: 'likes',
            key: 'likes',
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
        },
        {
            title: 'Reach',
            dataIndex: 'reach',
            key: 'reach',
        },
        {
            title: 'Impressions',
            dataIndex: 'impressions',
            key: 'impressions',
        },
        {
            title: 'Eng. Rate',
            dataIndex: 'engagementrate',
            key: 'engagementrate',
        },
        {
            title: 'Top Geo',
            dataIndex: 'topgeo',
            key: 'topgeo',
        },
        {
            title: 'Top Age Group',
            dataIndex: 'topage',
            key: 'topage',
        },
        {
            title: 'Top Gender',
            dataIndex: 'TopGender',
            key: 'TopGender',
        },
        {
            title: 'Cost',
            dataIndex: 'cost',
            key: 'cost',
        },
        {
            title: '$/Like',
            dataIndex: 'cpl',
            key: 'cpl',
        },
        {
            title: '$/Comment',
            dataIndex: 'cpc',
            key: 'cpc',
        },
    ];
};

export const getInfluencersTableColumns = () => {
    return [
        {
            title: 'Influencer',
            dataIndex: 'influencer',
            key: 'influencer',
        },
        {
            title: '# Posts',
            dataIndex: 'numberofposts',
            key: 'numberofposts',
        },
        {
            title: 'Eng. Rate',
            dataIndex: 'engagementrate',
            key: 'engagementrate',
        },
        {
            title: 'Followers',
            dataIndex: 'followers',
            key: 'followers',
        },
        // {
        // 	title: 'Impressions',
        // 	dataIndex: 'postImpression',
        // 	key: 'postImpression'
        // },
        {
            title: 'Avg. Likes',
            dataIndex: 'likes',
            key: 'likes',
        },
        {
            title: 'Avg. Comments',
            dataIndex: 'comments',
            key: 'comments',
        },
        // {
        //     title: 'Views',
        //     dataIndex: 'views',
        //     key: 'views',
        // },
        {
            title: 'View Posts',
            dataIndex: 'viewposts',
            key: 'viewposts',
        },
        // {
        // 	title: 'Reach',
        // 	dataIndex: 'reach',
        // 	key: 'reach'
        // },
        // {
        // 	title: 'Campaign ER%',
        // 	dataIndex: 'campaignER',
        // 	key: 'campaignER'
        // },
        // {
        // 	title: 'Cost',
        // 	dataIndex: 'cost',
        // 	key: 'cost'
        // },
        // {
        // 	title: '$/Like',
        // 	dataIndex: 'cpl',
        // 	key: 'topage'
        // },
        // {
        // 	title: '$/Comment',
        // 	dataIndex: 'cpc',
        // 	key: 'cpc'
        // },
        // {
        // 	title: 'Top Gender',
        // 	dataIndex: 'TopGender',
        // 	key: 'TopGender'
        // },
        // {
        // 	title: 'Top Geo',
        // 	dataIndex: 'topgeo',
        // 	key: 'topgeo'
        // },
        // {
        // 	title: 'Top Age Group',
        // 	dataIndex: 'topage',
        // 	key: 'topage'
        // }
    ];
};

export const getPostsRows = (data) => {
    let rows = [];
    if (data && data.length) {
        try {
            data.forEach((dataItem) => {
                const { creator, profile, media, profileInsights } = dataItem;
                if (media && media.length) {
                    media.forEach((item, index) => {
                        rows.push({
                            key: index,
                            postby: getPostBy(profile, item),
                            type: capetalize(item.mediaType),
                            Postdate: getPostDate(item),
                            likes: getMediaLikes(item),
                            comments: getMediaComments(item),
                            views: getMediaViews(item),
                            reach: getMediaReach(item),
                            impressions: getMediaImpressions(item),
                            engagementrate: getMediaER(item, profile),
                            topgeo: getTopGeo(profileInsights),
                            topage: getTopAge(profileInsights).group,
                            TopGender: getTopAge(profileInsights).gender,
                            cost: `$${creator.budget}`,
                            cpl: getCPLOrCPC(creator.budget, item, 'cpl'),
                            cpc: getCPLOrCPC(creator.budget, item, 'cpc'),
                        });
                    });
                }
            });
        } catch (e) {
            console.log(e);
            message.warning(e);
        }
    }

    return rows;
};

export const getInfluencersRows = (list) => {
    let rows = [];
    if (list && list.length) {
        try {
            // get profiles
            let profiles = new Set(list.map((listItem) => listItem.media.profile));
            let profileWithMedia = [];

            let index = 1;
            for (let profile of profiles) {
                let listLength = profileWithMedia.push({
                    media: new Set(),
                    ...profile,
                });
                for (let mentionItem of list) {
                    if (mentionItem.media.profile.id === profile.id) {
                        profileWithMedia[listLength - 1].media.add(mentionItem.media);
                    }
                }
                rows.push({
                    key: index,
                    influencer: getPostBy(profile),
                    numberofposts: profileWithMedia[listLength - 1].media.size,
                    engagementrate: `${profile.engRateValue.toFixed(2)}%`,
                    followers: nFormatter(profile.followersCount),
                    likes: nFormatter(profile.avgLikes),
                    comments: nFormatter(profile.avgComments),
                    // views: 30,
                    viewposts: 'Link goes here ',
                });
                index++;
            }
        } catch (e) {
            console.log(e);
            message.warning(e);
        }
    }

    return rows;
};

const getPostBy = (profile, item) => {
    return (
        <div>
            <span>
                <img src={profile.profilePic} width={56} height={56} style={{borderRadius: '4px'}}/>
            </span>
            <span style={{ marginLeft: '6px' }}>
                <a
                    target="_blank"
					href={item ? item.permalink : `https://instagram.com/${profile.username}`}
					style={{
						fontSize: '15px'
					}}
                >
                    {profile.name}
                </a>
            </span>
        </div>
    );
};

const getPostDate = (post) => {
    return new Date(post.timestamp).toDateString();
};

const getMediaLikes = (post) => {
    if (post.mediaType !== 'STORY') {
        return post.likesCount;
    }

    return '-';
};

const getMediaComments = (post) => {
    if (post.mediaType !== 'STORY') {
        return post.commentsCount;
    }

    return '-';
};

const getMediaViews = (post) => {
    if (post.mediaType !== 'STORY') {
        return post.video_views ? post.video_views : '-';
    }

    return '-';
};

const getMediaReach = (post) => {
    if (post.mediaType === 'IMAGE' || post.mediaType === 'STORY') {
        return post.reach;
    }

    if (post.mediaType === 'CAROUSEL_ALBUM') {
        return post.carouselAlbumReach;
    }

    return '-';
};

const getMediaImpressions = (post) => {
    if (post.mediaType === 'IMAGE' || post.mediaType === 'STORY') {
        return post.impressions;
    }

    if (post.mediaType === 'CAROUSEL_ALBUM') {
        return post.carouselAlbumImpressions;
    }

    return '-';
};

const getMediaER = (post, profile) => {
    if (post.mediaType !== 'STORY') {
        let er = (((post.likesCount + post.commentsCount) / profile.followersCount) * 100).toFixed(
            2
        );
        return `${er}%`;
    }

    return '-';
};

const getTopGeo = (insights) => {
    let results = <div></div>;
    if (insights && insights.length) {
        let proInsights = insights[0];
        let { audienceCountry } = proInsights;

        let sortedKeys = Object.keys(audienceCountry).sort(
            (a, b) => audienceCountry[b] - audienceCountry[a]
        );
        results = (
            <span>
                <ReactCountryFlag countryCode={sortedKeys[0]} />
            </span>
        );
    }

    return results;
};

const getTopAge = (insights) => {
    let results = {};
    if (insights && insights.length) {
        let proInsights = insights[0];
        let { audienceGenderAge } = proInsights;

        let sortedKeys = Object.keys(audienceGenderAge).sort(
            (a, b) => audienceGenderAge[b] - audienceGenderAge[a]
        );

        if (sortedKeys[0].includes('M')) {
            results.gender = 'Male';
        } else {
            results.gender = 'Female';
        }

        results.group = sortedKeys[0];
    }

    return results;
};

const getCPLOrCPC = (budget, post, type = 'cpl') => {
    if (budget && post && post.mediaType !== 'STORY') {
        if (type === 'cpl') {
            return `$${(budget / post.likesCount).toFixed(2)}`;
        } else if (type === 'cpc') {
            return `$${(budget / post.commentsCount).toFixed(2)}`;
        }
    } else return '-';
};

const getSumOfPostsMetric = (media, key = 'likesCount') => {
    let results = 0;
    if (media && media.length) {
        media.forEach((item) => (results += item[key]));
    }
    return results;
};

const getCampaignER = (media, profile) => {
    let results = 0;
    if (media && media.length) {
        media.forEach((m) => {
            let er = (((m.likesCount + m.commentsCount) / profile.followersCount) * 100).toFixed(2);
            results += parseFloat(er);
        });

        results = results.toFixed(2);
    }

    return `${results}%`;
};

const getSumOfCPLOrCPC = (creator, media, type = 'cpl') => {
    let sumLikes = getSumOfPostsMetric(media, 'likesCount');
    let sumComments = getSumOfPostsMetric(media, 'commentsCount');

    if (type === 'cpl') {
        if (sumLikes > 0) return `$${(creator.budget / sumLikes).toFixed(2)}`;
        else return '-';
    } else if (type === 'cpc') {
        if (sumComments > 0) return `$${(creator.budget / sumComments).toFixed(2)}`;
        else return '-';
    }

    return '-';
};
