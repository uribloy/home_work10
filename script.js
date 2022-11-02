class user{
    #firstname;
    #lastname;
    #useraddres;
    #mybook;
    constructor(firstname, lastname, useraddres){
        this.#firstname=firstname;
        this.#lastname=lastname;
        this.#useraddres=useraddres;
        this.#mybook=[];
    }
    //   מאפשר גישה חיצונית לשם משתמש
    fullname(){
        return `${this.#firstname} ${this.#lastname}`;
    }

    addborrowbook(book){
        this.#mybook.push(book);
    }
    borrowreport(){
        console.log(`The list of books I borrowed: ${this.#mybook.join(' , ')}`)
    }
}
// // הגדרת משתמש
// let user1 =new user('uri','bloy', 'kiryat malachi');
// // console.log(user1.fullname()); // גישה לשם משתמש

// // הגדרת ספרים
// let book1 = 'Journey to the Center of the Earth';
// let book2 = 'Around the World in Eighty Days';

// // user1.mybook.push(book1, book2); // הוספה למערך הספרים ישירות - לא ניתן במאפיין פרטי
// // הוספה למערך ספרים עי פונקציה ציבורית
// user1.addborrowbook(book1); 
// user1.addborrowbook(book2);
// // console.log(user1);
// console.log(user1.borrowreport()); // הדפסת דוח ספרים של המשתמש