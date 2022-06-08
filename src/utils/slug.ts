//
// Slug Generator
// ...
//

import { customAlphabet } from 'nanoid'

async function slugGenerator(title: string): Promise<string | null> {
    if (!title) return null
    const match = title.match(/^.|(?<=\s)./gm) || null
    const nanoid = customAlphabet('1234567890', 5)
    const generate = match && `${match.join('')}-${nanoid()}`.toUpperCase()
    return generate || 'slug-not-created'
}

export default slugGenerator

//
// END
//
