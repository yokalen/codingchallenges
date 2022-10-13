// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(url){
    //replace parts not needed
     let arr =  url.replace('//', '.').replace('www.', '').split('.')
      //return domain name
      return arr[1]
    }
    console.log(domainName("http://github.com/carbonfive/raygun"))
    console.log(domainName('http://www.zombie-bites.com'))
    console.log(domainName("https://www.cnet.com"))