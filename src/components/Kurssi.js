import React from 'react'

const Otsikko = (props) => {
    return (
        <div>
        <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}
const Osa = (props) => {
    return (
            <p>{props.osa.nimi} {props.osa.tehtavia}</p>
       
    )
}

const Sisalto = (props) => {
    return (
    <div>
        {props.kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
    </div>
    )
}

const Yhteensa = (props) => {
    function getSum(total, num) {
        return total + num.tehtavia;
    }
    return (
        <div>
            <p> yhteensä {props.kurssi.osat.reduce(getSum, 0)}  tehtävää</p>
        </div>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
    <div>
        <Otsikko kurssi = {kurssi} />
        <Sisalto kurssi = {kurssi} />
        <Yhteensa kurssi = {kurssi} />
    </div>
    )
}

export default Kurssi