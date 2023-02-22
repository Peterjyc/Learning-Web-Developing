function domainName(url){
    let result = url.replace(/.+\/\/|www.|\..+/g, '');
    return result;
  }
