const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://localhost:27017/test';


//callback

MongoClient.connect(uri, function(err, db) {
  var Cars = db.collection('cars');
  Cars.find()
    .toArray()  //thats make a promise
    .then(cars => {
        console.log(cars);
        cars.forEach(car => console.log(car.brand));
    });

    // const carID = ObjectID('585098a7e57e8748f85cf503');
    // Cars.findOneAndDelete({ _id: carID })
    //    .then(deleteLog => {
    //       console.log(deleteLog)
    //    })

    //to update, now the output will update Toyota to Subaru

    const carID = ObjectID('585098a7e57e8748f85cf504');
    Cars.findOneAndUpdate(

      { _id: carID },
      { $set: { brand: 'Subaru'} }
    )
    .then(updateLog => {
      console.log(updateLog);
    })


    //this code gives you the output of the list of cars like

  // BMW
  // Ford
  // Toyota



  //delete this
  // const adminDb = db.admin();
  // adminDb.listDatabases(function(err, databases) {
  //    console.log(databases);
  //    db.close();
  // });



});
