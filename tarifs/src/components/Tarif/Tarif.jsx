import React from 'react';
import cn from 'classnames';
import './Tarif.scss';

export default class Tarif extends React.Component {
    render() {
        const {name, cost, speed, colorTheme } = this.props;

        const classNames = cn('card', {
                'card--blue': colorTheme === 'blue',
                'card--green': colorTheme === 'green',
                'card--red': colorTheme === 'red',
                'card--black': colorTheme === 'black',
            })

        return (
            <div className= { classNames }>
                <div className="card__name">{ name }</div>
                <div className="card__cost"><p className="card__textCost"><span className="card__text card__text--upperline">руб</span>{ cost }<span className="card__text card__text--underline">/мес</span></p></div>
                <div className="card__speed">До { speed } Мбит/сек</div>
                <div className="card__footer">Объём включенного <br />трафика не ограничен</div>
            </div>
        )
    }
}