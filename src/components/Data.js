import image1 from "../assets/misa.jpg";
import image2 from "../assets/ellhy.jpg";

const inmateData = [
  {
    prison_number: "00010",
    last_name: "Misa",
    first_name: "Khane",
    middle_name: "Mendez",
    age: "22 years old",
    gender: "Female",
    //why duplicate: birthdate is for form submission, birthday is for Results.
    birthdate: "01012001",
    birthday: "January 01, 2001",
    municipality: "General Mariano Alvarez",
    barangay: "Poblacion 1 (Area I)",
    province: "Cavite",
    status: "Released",
    religion: "Roman Catholic",
    marital_status: "Married",
    height: "155.3 cm",
    weight: "53.34 kgs",
    imagePath: image1,
  },
  {
    prison_number: "00011",
    last_name: "Valdez",
    first_name: "Ellhy",
    middle_name: "Mendez",
    religion: "Roman Catholic",
    age: "21 years old",
    gender: "Male",
    height: "155.3 cm",
    weight: "53.34 kgs",
    birthdate: "02022002",
    birthday: "February 02, 2002",
    municipality: "General Mariano Alvarez",
    barangay: "Poblacion 1 (Area I)",
    province: "Cavite",
    status: "Prisoner",
    marital_status: "Single",
    imagePath: image2,
  },
];

export default inmateData;
