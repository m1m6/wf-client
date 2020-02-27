import gql from 'graphql-tag';

export const newCampaignMutation = gql`
	mutation newCampaign(
		$name: String!
		$description: String!
		$budget: Float!
		$startDate: DateTime!
		$endDate: DateTime!
		$tagsAndMentions: [String!]!
		$media: [String!]!
	) {
		createCampaign(
			name: $name
			description: $description
			budget: $budget
			startDate: $startDate
			endDate: $endDate
			tagsAndMentions: $tagsAndMentions
			media: $media
		) {
			id
		}
	}
`;

export const linkProfilesToCampaignMutation = gql`
	mutation linkProfilesToCampaign($profiles: [CampaignCreatorsInput!]!, $cid: ID!) {
		linkProfilesToCampaign(profiles: $profiles, cid: $cid)
	}
`;

export const campaignsQuery = gql`
	query getUserCampaigns {
		campaigns {
			id
			name
			description
		}
	}
`;

export const campaignDetailsQuery = gql`
	query getCampaignDetailsQuery($id: ID!) {
		campaign(id: $id) {
			id
			name
			status
			description
			budget
			startDate
			endDate
			tagsAndMentions
			media
			influencers {
				id
				requiredPostsCount
				publishedPostsCount
				budget
				status
				Profile {
					id
					name
					profilePic
				}
			}
			metric {
				id
			}
			mediaPosts {
				id
				commentsCount
				likesCount
				mediaType
				reach
				engagement
				impressions
				carouselAlbumReach
				carouselAlbumSaved
				carouselAlbumEngagement
				carouselAlbumVideoViews
				carouselAlbumImpressions
				exits
				video_views
				timestamp
				mediaMetrics {
					likesCount
					commentsCount
					updatedAt
				}
				profile {
					id
					name
					followersCount
				}
			}
		}
	}
`;

export const creatorCampaignsQuery = gql`
	query getCreatorCampaigns {
		creatorCampaigns {
			id
			status
			campaign {
				id
				tagsAndMentions
				name
				description
				status
			}
		}
	}
`;

export const creatorCampaignQuery = gql`
	query getCreatorCampaign($id: ID!) {
		creatorCampaign(id: $id) {
			id
			status
			budget
			requiredPostsCount
			campaign {
				id
				tagsAndMentions
				name
				description
				status
				media
			}
		}
	}
`;

export const updateCampaignCreatorStatusMutation = gql`
	mutation updateCampaignCreatorStatus($id: ID!, $status: CampaignCreatorStatus!) {
		updateCampaignCreatorStatus(id: $id, status: $status)
	}
`;

export const campaignMetricsQuery = gql`
	query getCampaignMetrics($campaignId: ID!) {
		campaignMetrics(campaignId: $campaignId) {
			id
			updatedAt
			createdAt
			age
			gender
			topCities
			topCountries
		}
	}
`;

export const campaignInfluencersAndPostsDetailsQuery = gql`
	query getCampaignInfluencers($campaignId: ID!) {
		campaignInfluencers(campaignId: $campaignId) {
			creator {
				id
				requiredPostsCount
				publishedPostsCount
				budget
			}
			profile {
				id
				followersCount
				profilePic
				name
				username
				name
				engRateValue
				engRateAvg
			}
			media {
				id
				likesCount
				commentsCount
				video_views
				reach
				carouselAlbumReach
				impressions
				carouselAlbumImpressions
				timestamp
				mediaType
				permalink
				profile {
					id
				}
			}
			profileInsights {
				audienceGenderAge
				audienceCountry
			}
		}
	}
`;
