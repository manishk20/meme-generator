import React , { Component } from 'react';
//here this is responsible for data handling and api calling so class comp
import './style.css';

class MemeGenerator extends Component{
    constructor(){
        super();
        this.state={
            topText:"",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]//array of all memes got from api
        }
    } 
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())//converts object from json format
            .then(respons => {
                const {memes} = respons.data//respons.data.memes destructure
                this.setState({ allMemeImgs: memes })
            })
    }//always use api in compountDidMount()
    handleChange=(event)=>{
        const {name,value} = event.target
        this.setState({ [name] : value })//here name inside [] to use event.target.name otherwise cant recognize dynamic name variable
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const randNum = Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randMemeImg=this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randMemeImg})
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input name="topText"
                        type="text"
                        placeholder="Top Text"
                
                        onChange={this.handleChange}
                    />
                    <input name="bottomText"
                        type="text"
                        placeholder="Bottom Text"
                        
                        onChange={this.handleChange}
                    />
                    <button>Change</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}
export default MemeGenerator;