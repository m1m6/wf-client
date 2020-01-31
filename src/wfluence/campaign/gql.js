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

export const campaignsQuery = gql`
	query getUserCampaigns {
		campaigns {
			id
			name
			description
		}
	}
`;
