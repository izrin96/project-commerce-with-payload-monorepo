export const Login = /* GraphQL */ `
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        name
        roles
      }
      token
    }
  }
`;
