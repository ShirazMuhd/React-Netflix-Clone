import React from 'react'
import Banner from './Banner/Banner'
import RowPost from './RowPost/RowPost';
import { originals, action, comedy, horror, romantic, documentaries } from './urls'

function Home() {
    return (
        <div>
            <Banner />
            <RowPost url={originals} title='Netflix Original' />
            <RowPost url={action} title='Action' isSmall />
            <RowPost url={comedy} title='Comedy' isSmall />
            <RowPost url={horror} title='Horror' isSmall />
            <RowPost url={romantic} title='Romance' isSmall />
            <RowPost url={documentaries} title='Documentaries' isSmall />
        </div>
    )
}

export default Home
