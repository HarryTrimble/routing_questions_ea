  var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {

 // Store common vars

 res.locals.formData = "";
 res.locals.formQuery = "?";
 res.locals.data = {};

 for (var name in req.query){
   var value = req.query[name];
   res.locals.formData += '<input type="hidden" name="'+name+'" value="' + value + '">\n';
   res.locals.formQuery += name + "=" + value + "&";
   res.locals.data[name] = value;
 }

 res.locals.formQuery = res.locals.formQuery.slice(0,-1);

 next();
 
});

router.get('/', function (req, res) {
  res.render('index');

});



// Routing questions

// emergency folder questions
// Question for emergency index.html

router.get('/questions/building', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var emergency = req.query.emergency;

  if (emergency == "exclusion_5" ){

    // if users IS using scaffolding
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/building/index.html');

  }

});

// 'building' folder questions
// Question for what_you_building.html

router.get('/questions/repair_maintain', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var building = req.query.building;
  var what_you_building = req.query.what_you_building;
  var bridge_type = req.query.bridge_type;
  var outfall_width = req.query.outfall_width;

  if (building == "yes" && what_you_building==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/building/what_you_building" + res.locals.formQuery);

  } else if (building == "yes" && what_you_building== "bridge" && bridge_type==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/building/bridge" + res.locals.formQuery);

  } else if (building == "yes" && what_you_building== "outfall" && outfall_width==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/building/outfall_pipe" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/repair_maintain/index.html');

  }

});

// repair_maintain folder questions
// Question for repair_maintain index.html

router.get('/questions/animal_welfare', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var repair_maintain = req.query.repair_maintain;
  var what_you_repairing = req.query.what_you_repairing;

  if (repair_maintain == "yes" && what_you_repairing==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/repair_maintain/what_you_repairing" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/animal_welfare/index.html');

  }

});

// animal_welfare folder questions
// Question for animal_welfare index.html

router.get('/questions/scaffolding_ladders', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var animal_welfare = req.query.animal_welfare;
  var what_is_it = req.query.what_is_it;
  var channel_habitat_size = req.query.channel_habitat_size;

  if (animal_welfare == "yes" && what_is_it==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/animal_welfare/what_is_it" + res.locals.formQuery);

  } else if (animal_welfare == "yes" && what_is_it == "channel_habitat" && channel_habitat_size==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/animal_welfare/habitat_channel_size" + res.locals.formQuery);    

  } else {

    // if users is NOT using scaffolding
    res.render('questions/scaffolding_ladders/index.html');

  }

});

// scaffolding_ladders folder questions
// Question for animal_welfare index.html

router.get('/questions/floodplain', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var scaffolding_ladders = req.query.scaffolding_ladders;
  var scaffolding_time = req.query.scaffolding_time;
  var scaffolding_size = req.query.scaffolding_size;

  if (scaffolding_ladders == "yes" && scaffolding_time==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/scaffolding_ladders/time" + res.locals.formQuery);

  } else if (scaffolding_ladders == "yes" && scaffolding_time== "ask_about_size" && scaffolding_size==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/scaffolding_ladders/size" + res.locals.formQuery);    

  } else {

    // if users is NOT using scaffolding
    res.render('questions/floodplain/index.html');

  }

});


// digging / floodplain folder questions
// Question for floodplain  index.html

router.get('/questions/cables', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var floodplain = req.query.floodplain;
  var what_you_digging = req.query.what_you_digging;
  var investigation_hole = req.query.investigation_hole;

  if (floodplain == "yes" && what_you_digging==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/floodplain/what_you_digging" + res.locals.formQuery);  

  } else if (floodplain == "yes" && what_you_digging== "how_big_hole" && investigation_hole==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/scaffolding_ladders/size" + res.locals.formQuery);   

  } else {

    // if users is NOT using scaffolding
    res.render('questions/cables/index.html');

  }

});

// cables folder questions
// Question for cables index.html

router.get('/questions/remove_sand_silt', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var cables = req.query.cables;
  var existing_or_new_thing = req.query.existing_or_new_thing;

  if (cables == "yes" && existing_or_new_thing==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/cables/existing_or_new_thing" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/remove_sand_silt/index.html');

  }

});

// cables folder questions
// Question for cables existing_or_new_thing.html
router.get('/questions/cables/on_new_thing', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var existing_or_new_thing = req.query.existing_or_new_thing;
  var on_existing_thing = req.query.on_existing_thing;

  if (existing_or_new_thing == "yes" && on_existing_thing==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/cables/on_existing_thing" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/cables/on_new_thing.html');

  }

});

// remove_sand_silt folder questions
// Question for animal_welfare index.html

router.get('/questions/draining', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var remove_sand_silt = req.query.remove_sand_silt;
  var are_you_dredging = req.query.are_you_dredging;

  if (remove_sand_silt == "yes" && are_you_dredging==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/remove_sand_silt/are_you_dredging" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/draining/index.html');

  }

});

// remove_sand_silt folder questions
// Question for cables existing_or_new_thing.html
router.get('/questions/remove_sand_silt/what_you_removing', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var are_you_dredging = req.query.are_you_dredging;
  var dredging_distance = req.query.dredging_distance;

  if (are_you_dredging == "yes" && dredging_distance==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/remove_sand_silt/dredging_distance" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/remove_sand_silt/what_you_removing.html');

  }

});

// remove_sand_silt folder questions
// Question for animal_welfare index.html

router.get('/questions/draining', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var remove_sand_silt = req.query.remove_sand_silt;
  var are_you_dredging = req.query.are_you_dredging;

  if (remove_sand_silt == "yes" && are_you_dredging==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/remove_sand_silt/are_you_dredging" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/draining/index.html');

  }

});

// draining folder questions
// Question for draining index.html

router.get('/questions/result', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var draining = req.query.draining;
  var dewatering_or_diverting = req.query.dewatering_or_diverting;
  var dewatering_size = req.query.dewatering_size;

  if (draining == "yes" && dewatering_or_diverting==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/draining/dewatering_or_diverting" + res.locals.formQuery);

  } else if (draining == "yes" && dewatering_or_diverting == "dewatering" && dewatering_size==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/draining/dewatering_size" + res.locals.formQuery);      

  } else {

    // if users is NOT using scaffolding
    res.render('questions/result/index.html');

  }

});

// Question for conditions folder
// Question for view_conditions_yes_no.html

router.get('/questions/result/conditions', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var view_conditions_yes_no = req.query.view_conditions_yes_no;

  if (view_conditions_yes_no == "no" ){

    // if users IS using scaffolding
    res.redirect("/questions/result/declaration" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/result/conditions.html');

  }

});

module.exports = router;
