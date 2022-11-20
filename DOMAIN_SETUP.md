## How to setup Github Pages with a godaddy domain
1. Add a Type “A” row with the IP address to: `185.199.108.153`
(this will point your custom domain to GitHub’s server over HTTPS)
2. In the CNAME row with Name “www” input your gh-pages website (username.github.io)
2. Add 3 more Type “A” rows with the IP addresses of: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

Refrence: https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef
