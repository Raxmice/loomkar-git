import React, { useState } from 'react'
import $ from 'jquery'
import Context from './Context'

const MainContext = (props)=>{

    const activereviews = ()=>{
        $('.dra-reviews').click();
    }
    const wrightreview = ()=>{
        $('.writebtn').click();
    }
    const actreview = ()=>{
        activereviews()
        wrightreview()
    }

    //spinner
    const [loading, setLoading] = useState(false)
    const loadingStyle = {
        'color':'#000',
        'textAlign':'center'
      }
    const loadingStyle2 = {
        'position':'relative',
        'color':'#000',
        'height':'50%',
        'left':'50%',
        'textAlign':'center'
    }
    //spinner

    return(
        <Context.Provider value={{activereviews, actreview, wrightreview, loading, setLoading, loadingStyle, loadingStyle2}}>
         {props.children}
        </Context.Provider>
    )
}
export default MainContext;