import React from 'react'
import axios from 'axios'

export default class Photos extends React.Component {
    constructor(props){
        super(props)
        state ={
            photo = []
        }
    }
componentDidMount(){
    axios.get(`https://api.pexels.com/v1/search?query=nature&per_page=1&=563492ad6f917000010000017345b49ef98e449ca53af9e16c0acc5c`)
    .then(res =>{
        console.log(res.data)
        const photo = res.data
        this.setState({photo})
    })
}

    render(){
        return(
            <div>

            </div>
        )
    }
}