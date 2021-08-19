from BaseHTTPServer import BaseHTTPRequestHandler

class RequestHandler(BaseHTTPRequestHandler):

    def do_HEAD(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

    def do_GET(self):
        x = self.wfile.write
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        f = open("index.html")
        msg = f.read()
        x(msg)

if __name__ == '__main__':
    from BaseHTTPServer import HTTPServer
    server = HTTPServer(('localhost', 8080), RequestHandler)
    print 'Starting python server, use <Ctrl + C> to stop'
    server.serve_forever()
