var ads = require('node-ads')

var options = {
    host: "192.168.1.60",
    amsNetIdTarget: "169.254.91.243.1.1",
    amsNetIdSource: "192.168.1.80.1.1",
    amsPortTarget: 301,
    port: 48898
}

/* var client = ads.connect(options, function() {


    
    this.getSymbols(function(err, symbols) {
        if (err) console.log(err)
        console.log(JSON.stringify(symbols, null, 2))
        this.end()
    })

}) 
 */

 var myHandle = {
    //Handle name in twincat
    symname: 'MAIN.OUTPUTS.ILINE_COM_OUT_1.STATUS',  
    //An ads type object or an array of type objects.
    //You can also specify a number or an array of numbers,
    //the result will then be a buffer object.
    //If not defined, the default will be BOOL.
    bytelength: ads.BYTE,  
    //The propery name where the value should be written.
    //This can be an array with the same length as the array length of byteLength.
    //If not defined, the default will be 'value'.     
    propname: 'value',
    
}

/* var client = ads.connect(options, function() {
    this.read(myHandle, function(err, handle) {
        if (err) console.log(err)
        //result is the myHandle object with the new properties filled in
        console.log(handle.value)
        //All handles will be released automaticly here
        this.end()
    })
})  */

client = ads.connect(options, function() {
    this.notify(myHandle);
});

client.on('notification', function(handle){
    console.log(handle.value);
});


client.on('error', function(error) {
    console.log(error)
})