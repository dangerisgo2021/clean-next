import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation login {
    auth {
      login
    }
  }
`;
