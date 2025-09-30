module.exports = {
  apps: [
    {
      name: "ardacaliskan",
      script: "npm",
      args: "start",
      cwd: "/var/www/ardacaliskan", // projenin yolu
      env: {
        NODE_ENV: "production",
        PORT: 3004
      }
    }
  ]
};
