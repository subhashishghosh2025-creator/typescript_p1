enum Directions  {
north=96,
south,
east,
west
}

enum HttpCodes {
    Notfound = 404,
    Accepted= 201,
    NoResponse = 204,
    InternalServerError=503
}

console.log("NOT FOund Error Code ", HttpCodes.Notfound)


console.log("south :", Directions.south)


enum DirectionsStr  {
north= "North",
south = "South",
east = "East",
west = "West"
}

console.log("East : " +DirectionsStr.east)


type Status = "success" | "error";

let response : Status = "success"

//let response_1 : Status = "warning" //Gives Error


function printHttpCode(code : string | number) {
    if (typeof code === "string") {
     console.log("Error Code is :", code.toUpperCase());
    }
    console.log("-> Error Code is ", code)
}

printHttpCode("404")
printHttpCode(200)