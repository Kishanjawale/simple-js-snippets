console.log("This code will denonstrate the concept and difference of Var ,Const And let");

//Var:
    //Using var can create ambiguity because we can declare 2 varibale with same name 
    var a=45;
    var a= "Kishan"

//Let:
    // let is used to create a block scoped variable
    let x="Bunny";
    //let x= 4;             //This will generate error because LET do not support re-declaration.
    let y= null;
    let z=undefined;
    {
        //Lets Scope is inside the block
        let x = "Shubham"//
        console.log(x);     // This will print shubham as we have declared x =Shubham  in a block 
    }
    console.log(x)         // This will print Bunny  as we have declared x=Bunny out of the block

//Const
    //Const can not be changed and and can not be re-declared.
    const Author = "Author_Kishan"
    //let Author = 5      //Throws an error because constants cannot be re-declared.
    //Athor =55;          //Throws an error because constants cannot be changed.
    console.log(Author)