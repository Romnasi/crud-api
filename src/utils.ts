import http from "http";


export const setEndSymbolUrl = (url: string) => {
  const length = url.length
  const lastSymbol = url[length - 1];
  if (lastSymbol === '/') {
    return url;
  }
  return url + '/';
}

export const getReqData = (req: http.IncomingMessage): Promise<string> => {
  return new Promise((resolve) => {
    try {
      let body = '';
      req.on('data', (chunk) => {
          body += chunk.toString();
      });
      req.on('end', () => {
          resolve(body);
      });
    } catch (error) {
      return ''
    }
  });
}
