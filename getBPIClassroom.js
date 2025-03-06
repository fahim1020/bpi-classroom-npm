const locations = require("./location/location");

const getBPIClassroom = (room) => {
  // Normalize input
  room = room.replace(/\s|-/, "").toLowerCase();

  let location = "রুমের অবস্থান পাওয়া যায়নি।"; // Default message

  // Check locations
  if (locations.academicBuilding1.firstFloorLeft.includes(room)) {
    location = "প্রশাসনিক ভবন-১ এর নিচতলায় বাম পাশে।";
  } else if (locations.academicBuilding1.firstFloorRight.includes(room)) {
    location = "প্রশাসনিক ভবন-১ এর নিচতলায় ডান পাশে।";
  } else if (locations.academicBuilding1.secondFloorLeft.includes(room)) {
    location = "প্রশাসনিক ভবন-১ এর দ্বিতীয় তলায় বাম পাশে।";
  } else if (locations.academicBuilding1.secondFloorRight.includes(room)) {
    location = "প্রশাসনিক ভবন-১ এর দ্বিতীয় তলায় ডান পাশে।";
  } else if (locations.academicBuilding1.thirdFloorLeft.includes(room)) {
    location = "প্রশাসনিক ভবন-১ এর তৃতীয় তলায় বাম পাশে।";
  } else if (locations.academicBuilding1.thirdFloorRight.includes(room)) {
    location = "প্রশাসনিক ভবন-১ এর তৃতীয় তলায় ডান পাশে।";
  } else if (
    room >= locations.academicBuilding2.firstFloor.min &&
    room <= locations.academicBuilding2.firstFloor.max
  ) {
    location = "কম্পিউটার বা প্রশাসনিক ভবন-২ এর নিচতলায়।";
  } else if (locations.academicBuilding2.secondFloor.includes(room)) {
    location = "কম্পিউটার বা প্রশাসনিক ভবন-২ এর দোতলায়।";
  } else if (
    (room >= locations.academicBuilding2.thirdFloor.min &&
      room <= locations.academicBuilding2.thirdFloor.max) ||
    room === locations.academicBuilding2.thirdFloor.specialRoom
  ) {
    location = "কম্পিউটার বা প্রশাসনিক ভবন-২ এর তৃতীয় তলা।";
  } else if (locations.academicBuilding2.fourthFloor.includes(room)) {
    location = "কম্পিউটার বা প্রশাসনিক ভবন-২ এর চতুর্থ তলা।";
  }

  return location;
};

module.exports = getBPIClassroom;
