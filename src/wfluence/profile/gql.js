import gql from "graphql-tag";

export const PROFILE_QUERY = gql`
	query getProfile($id: ID!) {
		profile(id: $id) {
			id
			username
			name
			avgComments
			avgLikes
			followersCount
			followingCount
			mediaCount
			biography
			profilePic
			website
			phoneNumber
			engRateValue
			email
			engRateAvg
			engRateTitle
			aqs
			aqsName
			aqsDescription
			postFrequency
			location
			language
			categories
			globalRank
			media {
				id
				timestamp
				mediaType
				commentsCount
				likesCount
			}
			metrics {
				likesSpread
				likesCommentsRatio
				followersReachability
				followersQuality
				followersReach
				audienceEthnicity
				lcRatioChart
				followersChart
				followingChart
				likersQuality
				likersReach
				likersLanguages
				demography
				followersLanguages
				growth
				followersGeography
				audienceThematics
				advertisingData
				demographyByAge
				geoQuality
				contactDetails
				postPrice
				storiesPrice
			}
		}
	}
`;
