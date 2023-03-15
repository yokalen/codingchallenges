// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//url as a string
//domain name as a string
// http://github.com/carbonfive/raygun => github
// http://www.zombie-bites.com => zombie-bites
// https://www.cnet.com => cnet

function domainName(url){
    let result = url
    //drop http:// or https:// if present
    if(url[0] === 'h'){
        result = url.split('//').slice(1).join('');
      } 
    //split on . and return first element that is not www
    return result = result.split('.').filter(el => el !== 'www')[0]
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github")
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.com"), "cnet")