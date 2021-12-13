module.exportset= (x,y,callback) => {
    if (x<0 || y<0) {
        setTimeout(() => callback ( new error ('The length and breadth should be greater than zero.'), null)
       , 2000);
    } else {
        setTimeout(() => callback (null, {
            area=x*y,
        })
        , 2000);
    }    
}