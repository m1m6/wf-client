import gql from 'graphql-tag';

export const ME_QUERY = gql`
    query MeQuery {
        me {
            id
            email
            name
            role
        }
    }
`;

export const ME_QUERY_CLIENT = gql`
    query MeQuery {
        me @client {
            id
            email
            name
            role
        }
    }
`;

export const SEARCH_TERM_MUTATION_CLIENT = gql`
    mutation setSearchTerm($searchTerm: String!) {
        setSearchTerm(searchTerm: $searchTerm) @client
    }
`;

export const SEARCH_TERM_QUERY_CLIENT = gql`
    query searchTermQuery {
        searchTerm @client
    }
`;

export const MY_NOTIFICATIONS = gql`
    query MY_NOTIFICATIONS {
        myNotifications {
            id
            isRead
            title
            createdAt
            updatedAt
            body
            href
            from
        }
    }
`;

export const brandAppearanceQuery = gql`
    query brandAppearanceQuery($searchTerm: String!, $first: Int!, $skip: Int!) {
        brandAppearance(searchTerm: $searchTerm, first: $first, skip: $skip) {
            brandAppearance {
                media {
                    id
                    permalink
                    commentsCount
                    likesCount
                    caption
                    mediaType
                    timestamp
                    video_views
                    location
                    mediaUrl
                    profile {
                        id
                        name
                        username
                        followersCount
                        followingCount
                        biography
                        profilePic
                        avgLikes
                        avgComments
                        engRateValue
                        categories
                    }
                }
                brand {
                    name
                }
            }
            count
        }
    }
`;

export const SET_ERROR_MODAL_STATUS = gql`
    mutation setErrorModalStatus($status: Boolean!) {
        setErrorModalStatus(status: $status) @client
    }
`;

export const ERROR_MODAL_STATUS = gql`
    query errorModalStatus {
        status @client
    }
`;

export const VISITON_SUBSCRIPTION = gql`
    mutation visitorSubscription($email: String!, $brand: String!) {
        visitorSubscription(email: $email, brand: $brand)
    }
`;

export const CONTACT_FORM_MUTATION = gql`
	mutation contactForm($email: String!, $message: String!) {
		contactForm(email: $email, message: $message)
	}
`;