// AWS configuration for the backup service
// TODO: move this to environment variables before we ship this

const awsConfig = {
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  bucket: "devsecops-fall2026-backups",
};

module.exports = awsConfig;
