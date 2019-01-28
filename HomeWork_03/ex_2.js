var dns = require('dns');
var { promisify } = require('util');
var dns_promise = dns.resolve4("www.mum.edu", promisify(function (err, addresses) {
    console.log(addresses);
}));

async function dns_await_function() {
    try {
        var dns_await = await dns_promise;
    } catch (error) {
        console.log('error');
    }
    console.log(dns_await)
}
dns_await_function();
dns.resolve4("www.mum.edu", promisify(function (err, addresses) {
    console.log(addresses);
}));