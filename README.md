# CRIMSON
*an online platform integrating all the aspects of blood donation*
<br><br>
The proposed web app aims to remove the various community level
problems encountered in donation process. For an organsation to organise a
blood camp, various procedures come in the way including –
* Contacting the State Blood Tranfusion Council (SBTC) to get an approval.
* Informing a nearby blood bank about the event and asking them for
assistance.
* Maintaining record of participants and notifying them over time.

These are certainly hectic and unorganised procedures. And often the organisers
have no idea about the no. of participants in the camp. This web app aims to
provide all the facilities in a single platform.
It also helps individuals who are intrested to donate blood by notifying
them about blood donation camps being organised in their localities, giving
details about nearby blood banks and in case an individual needs blood, he can
post it by providing specifications and other users would be notified about the
same and can contact the person in need.

# How to Run

* Installing packages
  * Node Modules
    ```
    cd client
    npm install
    cd ../server
    npm install
    ```  
    
  * Bower Components
    ```cd client
    bower install
    ```    
    
* Running 
  * Connect to MongoDb server<br>
    ```
    sudo service mongod start
    ```
  * Starting the node server<br>
    ```
    node server/app
    ```

* Open localhost:3000 in web-browser
