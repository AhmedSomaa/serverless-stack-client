export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "dev-notes-uploads",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://w2k82vlkwa.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_TmqYGy44Q",
    APP_CLIENT_ID: "2tlapgfmdoq1lhb3pk4ic70oko",
    IDENTITY_POOL_ID: "us-east-2:8186e514-90c8-41bb-9406-4bac929570b5",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
