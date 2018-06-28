Notes:
* https://en.wikipedia.org/wiki/Same-origin_policy
* https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
* https://en.wikipedia.org/wiki/Cross-site_request_forgery
* https://en.wikipedia.org/wiki/Cross-site_scripting
* https://www.youtube.com/watch?v=hW2ONyxAySY
* https://security.stackexchange.com/questions/157061/how-does-csrf-correlate-with-same-origin-policy
* https://stackoverflow.com/questions/33261244/why-same-origin-policy-isnt-enough-to-prevent-csrf-attacks
* http://mo.github.io/2017/02/20/cross-origin-resource-sharing.html
* https://security.stackexchange.com/questions/8264/why-is-the-same-origin-policy-so-important
* https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet
* https://security.stackexchange.com/questions/91165/why-is-the-synchronizer-token-pattern-preferred-over-the-origin-header-check-to
* https://security.stackexchange.com/questions/23371/csrf-protection-with-custom-headers-and-without-validating-token
* https://stackoverflow.com/questions/11423682/cross-domain-form-posting
* https://www.exploit-db.com/exploits/18791/
* https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
*


Origin is a combination of URI scheme, host name, and port number.
Browser sends cookie data automatically with requests to the same origin.
Same-origin policy is a security feature implemented by the browser and the Javascript it runs.
	Creates a trusted context for scripts allowing them to access same-origin cookie data and response data.
Cross-origin resource sharing (CORS) is a security setting implemented by browsers and web servers.
	Provides origin header and preflight request so server can choose to allow the request.
	Actually relaxes the same-origin policy for certain domains


For XSS, the exploit breaks SOP because the site allows the attacker to modify the site html into including their script.  This gives the script same origin permission.
For XSRF, the exploit uses SOP because normally cookies send would be only for the site the user is on, but the browser sends the cookies for the request.  If you don't also check the request referrer or xsrf token, then you are vulnerable.

the most dangerous CSRF vulnerability ranks as the 909th most dangerous software bug ever found.
Cross-site scripting (XSS) vulnerabilities (even in other applications running on the same domain) allow attackers to bypass essentially all CSRF preventions.
http-only cookie
JSONP
same site tough cookies  https://scotthelme.co.uk/csrf-is-dead/
hacked browser? not going to have the cookies needed, this is specific to a logged-in host's browser (albeit possibly with extensions)
"Once you have verified that the request appears to be a same origin request so far, we recommend a second check as an additional precaution to really make sure." !?!?
In some cases, a XSRF request will be blocked by CORS preflight, but that does not mean a request cannot be made to actually hit the endpoint.  CORS is not security.


GET
* image/script tag
POST
* little harder, construct a form
