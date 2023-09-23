import React from 'react';
import Tarif from './Tarif';
import './Tarifs.scss';

export default class Tarifs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentTheme: 'red'}
    }

    // не придумала, как унифицировать момент с цветами(( Пришлось задавать вручную функции для клика, а это нарушение принципа DRY

    blueIsMain = () => {
        this.setState({currentTheme: "blue"})
    }
    greenIsMain = () => {
        this.setState({currentTheme: "green"})
    }
    redIsMain = () => {
        this.setState({currentTheme: "red"})
    }
    blackIsMain = () => {
        this.setState({currentTheme: "black"})
    }
    
    render() {
        const { currentTheme } = this.state;

        return(
            <ul className="tarifs">
                <Tarif name="Безлимитный 300" cost="300" speed="10" colorTheme="blue" isCurrent={currentTheme === "blue"} handleActive={this.blueIsMain}/>
                <Tarif name="Безлимитный 450" cost="450" speed="50" colorTheme="green" isCurrent={currentTheme === "green"} handleActive={this.greenIsMain}/>
                <Tarif name="Безлимитный 550" cost="550" speed="100" colorTheme="red" isCurrent={currentTheme === "red"} handleActive={this.redIsMain}/>
                <Tarif name="Безлимитный 1000" cost="1000" speed="1000" colorTheme="black" isCurrent={currentTheme === "black"} handleActive={this.blackIsMain}/>
            </ul>
        )
    }
}