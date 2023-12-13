import React from 'react'
import "./Widgets.css"
import { Info, FiberManualRecord } from '@mui/icons-material'

function Widgets() {

    const newsArticle = (heading, subtitle) => {
       return <div className='widgets__article'>
            <div className='widgets__articleleft'>
                <FiberManualRecord/>
            </div>
            <div className='widgets__articleright'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>

    }

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <Info/>

        </div>
        {newsArticle("first post news","best one")}
        {newsArticle("first post news","best one")}
        {newsArticle("first post news","best one")}
        {newsArticle("first post news","best one")}
    </div>
  )
}

export default Widgets