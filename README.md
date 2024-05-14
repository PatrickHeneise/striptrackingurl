# Strip Tracking URL

This is a simple script to decode and strip tracking parameters from a URL. It is useful if you use a DNS blocker like NextDNS and want to open signup/confirmation links that are sent through Mandrill with link-tracking enabled.

## Example

```bash
node index.js https://mandrillapp.com/track/click/12345678/yourdomain.com?p=eyJzIjoiYXJlYV9pZCIsImkiOiIyMzQ1MjIwIiwidiI6MSwicCI6IntcInVcIjpcImh0dHBzOlxcXC9cXFwvYXJlYS5kZ
```
