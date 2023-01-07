# Currency-app made in angular 14.x

To generate this project you need to use specific command in your main dir called whatever you want.

So once your dir is <code>~/whatever (main)</code><br>
Your next move is <code>$ npm install</code><br>
Then your next move is to install apart from project [json-server package](https://www.npmjs.com/package/json-server)<br>
Then you need to create json file that supposed to look like this:<br>

![image](https://user-images.githubusercontent.com/92276688/211161579-c4381435-fb66-4ba9-a2af-0ec2c44ef4c4.png)

Your next move is to run 3 terminal windows.<br>
TERMINAL LOCATION: <code>~/whatever (main)</code><br>
First terminal:<code> $ ng serve </code><br>
Second terminal:<code> $ node server.js </code><br>
Third terminal:<code> $ json-server db.json</code>(WHERE db.json is file created for json-server package)<br>

Yes, once upon time docker will become part of my project. But not sure exactly when :)
