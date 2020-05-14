import gql from 'graphql-tag';
import { apolloClient } from '../apolloClient';

export default (_, args, { cache }) => {
    const query = gql`
        query getErrorModalStatus {
            status @client
        }
    `;
    const data = {
        status: args.status,
    };

    apolloClient.writeData({
        query,
        data,
    });

    return null;
};
