import * as Error from "./lib/classes/errors"
import {getPos, Location} from "./lib/classes/position"



Error.throw_error(
    new Error.IllegalCharError(
        new Location(getPos("/src/backend/calc.ts", 7, 1, 7), 15),
        "This is a error throwing test"
    ), "12345\n1231241241iuhaiuhasiuhasiubd");