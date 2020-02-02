import gql from "graphql-tag";

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
	mutation linkProfilesToCampaign(
		$profiles: [CampaignCreatorsInput!]!
		$cid: ID!
	) {
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
				Profile {
					id
					name
					profilePic
				}
			}
			metric {
				id
			}
		}
	}
`;
