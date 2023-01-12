import http from "http";
import { Controller } from "./controller";
import { PORT, responseStatus, HTTPMethod, apiUrl } from "./const";


const setEndSymbolUrl = (url: string) => {
  const length = url.length
  const lastSymbol = url[length - 1];
  if (lastSymbol === '/') {
    return url;
  }
  return url + '/';
}

const server = http.createServer(async (request, res) => {
  if (typeof request.url === 'string') {
    const url = setEndSymbolUrl(request.url)
    if (url === apiUrl.USERS && request.method === HTTPMethod.GET) {
      res.writeHead(responseStatus.OK, { "Content-Type": "application/json" });
      const users = await new Controller().getUsers();
      res.end(JSON.stringify(users));
      res.end();
    } else if (url.startsWith(apiUrl.USERS) && request.method === HTTPMethod.GET) {
      const id = request.url.split("/")[3];
      console.log(id)
      const user = await new Controller().getUser(id);
      res.writeHead(responseStatus.OK, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    }
  } else {
    res.writeHead(responseStatus.NOT_FOUND, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
})

server.listen(PORT, () => {
    console.log(`server started on: localhost:${PORT}`);
});
