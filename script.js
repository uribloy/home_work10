class user{
    #firstname;
    #lastname;
    #useraddres;
    mybook;
    constructor(firstname, lastname, useraddres){
        this.#firstname=firstname;
        this.#lastname=lastname;
        this.#useraddres=useraddres;
        this.mybook=[];
    }
    //   מאפשר גישה חיצונית לשם משתמש
    fullname(){
        return `${this.#firstname} ${this.#lastname}`;
    }

    borrowbook(book){
        this.mybook.push(book);
        console.log(`The list of books I borrowed: ${this.mybook.join(' , ')}`)
    }
}

// let user1 =new user('uri','bloy', 'kiryat malachi');
// // console.log(user1.fullname());

// let book1 = 'Journey to the Center of the Earth';
// let book2 = 'Around the World in Eighty Days';
// // user1.mybook.push(book1, book2);
// user1.borrowbook(book1);
// user1.borrowbook(book2);
// // console.log(user1);
// // console.log(user1.borrowbook());