import React from 'react'

const Phrase = ({phrase}) => {

    const {author, quote} = phrase
    return(
        <div>
            <h1>{quote}</h1>
            <h2>{author}</h2>
        </div>
    )
}

export default Phrase;