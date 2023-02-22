import config from "@/config";

const server = require("./server");

// サーバー起動
const port = config.appSettings.port;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
