import http from "http";
import { Controller } from "./controller";
import { PORT, responseStatus } from "./const";


const server = http.createServer(async (req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(responseStatus.OK, { "Content-Type": "application/json" });
    const users = await new Controller().getUsers();
    res.end(JSON.stringify(users));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
})

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
