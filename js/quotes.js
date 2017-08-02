/*
 Object of Quotes with different fragments or parts of sentences. The describe function
 uses Math.random to get a random number to a max of the length in the array
 newQuote then adds these fragments together and the value is returned
 */

let newQuote;
const Quotes = {
    init: function (fragmentList1, fragmentList2, fragmentList3, fragmentList4) {
        this.fragmentList1 = fragmentList1;
        this.fragmentList2 = fragmentList2;
        this.fragmentList3 = fragmentList3;
        this.fragmentList4 = fragmentList4;
    },
    describe: function () {
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

const work = Object.create(Quotes);
work.init(
    [
        "When we work",
        "if we work hard",
        "while we work"
    ],
    [
        "we do something we like",
        "we achieve success",
        "we do what we want to do"
    ],
    [
        "and we earn lots of money",
        "and dont have to worry about anything",
        "and become successful"
    ],
    [
        "!",
        "."
    ]
);