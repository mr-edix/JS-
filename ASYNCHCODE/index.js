const https = require("https");
const fs = require("fs");


setTimeout(() => {
    console.log("ajay");
}, 5000);

fs.readFile("./ASYNCHCODE/aj.txt", "utf8", (err, data) => {
    console.log(data);
    if (err) {
        console.log(err);
    }
});

https.get("http://jsonplaceholder.typicode.com/todos/1", (res) => {   
    // In an https call, we pass a callback function that receives the response from the server.
  //Here this response is available through the res object, which represents the data stream coming from the server.
    let data = "";
    res.on('data', (ch) => {    
        //When using https.get, the response data from the server is received in chunks — small parts — not all at once.
        // We use the 'data' event to process each chunk as it arrives.
        // in data varable we are storing the data which are coming in chunks.
        data = data + ch ;

    })
    res.on('end', () => {
        // The 'end' event runs after all data chunks have been received.
        // It tells us that the complete response from the server is now available.

        try {
            let x = JSON.parse(data)
            console.log(x);
               
        } catch (err) {
            console.log(err.message);

        }
    })
}).on('error',(err)=>{
    console.log(err);
    
})