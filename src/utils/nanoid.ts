//
// Nano ID Initialize
// ...
//

import { customAlphabet } from 'nanoid'

const alphabet = '1234567890ABCDEFGHIKLMNOPQRSTUVWYZ'
const nanoid = customAlphabet(alphabet, 10)

export default nanoid

//
// END
//
