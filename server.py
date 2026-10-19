"""Run the site locally:  python server.py  then open http://localhost:8000"""
import http.server
import socketserver
import webbrowser

PORT = 8000

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as server:
    print(f"La Cosa Nostra site running at http://localhost:{PORT}  (Ctrl+C to stop)")
    webbrowser.open(f"http://localhost:{PORT}")
    server.serve_forever()
