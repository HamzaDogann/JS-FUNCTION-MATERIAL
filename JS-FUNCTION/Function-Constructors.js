//!Object Literals

let hamza = {
    name:"Hamza",
    birthday:"2010",
    job:"Jr.Frontend Develeoper"
}
//----------------------------------------------

function person(name,birthday,job){  //Dışarıdan gönderdiğimiz değerler.
   this.name=name;
   this.birthday=birthday;
   this.job=job;
   this.CalculateYas = function(){
    return 2023 - this.birthday;
   }

   console.log(this);
}

let dogan = new person("okan",2000,"SoftwareDeveploper");  //! Person function'a değerleri buradan gönderdik.
let hasan = new person("hasan",2003,"Student");


console.log(hasan.job);
console.log(dogan.birthday); //! İstediğimiz verileri aldık.
console.log(hasan.CalculateYas());



