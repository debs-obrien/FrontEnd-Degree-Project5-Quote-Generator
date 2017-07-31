let newQuote;
const Quotes = {
    init: function (fragmentList1, fragmentList2, fragmentList3, fragmentList4){
        this.fragmentList1 = fragmentList1;
        this.fragmentList2 = fragmentList2;
        this.fragmentList3 = fragmentList3;
        this.fragmentList4 = fragmentList4;
    },
    describe: function(){
        const fragment1 = Math.floor(Math.random() * (this.fragmentList1.length));
        const fragment2 = Math.floor(Math.random() * (this.fragmentList2.length));
        const fragment3 = Math.floor(Math.random() * (this.fragmentList3.length));
        const fragment4 = Math.floor(Math.random() * (this.fragmentList4.length));
        newQuote = (this.fragmentList1[fragment1] + " " + this.fragmentList2[fragment2] + " " + this.fragmentList3[fragment3] + this.fragmentList4[fragment4]);
        return newQuote;
    }
};

const life = Object.create(Quotes);
life.init([
        "Being happy",
        "Living alone",
        "Never doing",
        "Having fun"
    ],
    [
        "is something we do",
        "is what we need",
        "is when we shouldn't do"
    ],
    [
        "even though we know we shouldn't",
        "although we think we don't",
        "just incase its not for us"
    ],
    [
        "!",
        ".",
        "!!!!!"
    ]);
