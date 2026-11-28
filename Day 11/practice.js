
let data="Secret information";

class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(data);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }

    editData(){
        data="New information";
    }
}

let student1= new user("Rahul","rahul@gmail.com");
let student2=new user("Rakesh","rakesh@gmail.com");

let admin1= new admin("Rajesh","rajesh@gmail.com");