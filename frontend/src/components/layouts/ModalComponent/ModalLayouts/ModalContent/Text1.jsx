import React from 'react'


//import css
import "./Text1.css";

const Text1 = ({ onClose, dataInfo, formatDate }) => {
    return (
        <div className="modallContent">
            <button className="closebtnss" onClick={onClose}>
                x
            </button>
            {/* <ul className='citiListaContent'>

                {dataInfo.map((city) => (
                    <li key={city.id} className='citiItem'>
                        <div className="citiItemLeft">
                            <span className='citiItemFlag'>{city.flag}</span>
                            <h3>{city.cityName}</h3>
                        </div>
                        <div className="citiItemRight"></div>
                        <time>({formatDate(city.date)})</time>
                        <button variant="delete">X</button>
                    </li>
                ))}
            </ul> */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, obcaecati consequuntur deleniti magni labore odio saepe, facere facilis impedit fugiat sapiente accusantium quia ea in eius tempora illum sed quaerat ad optio beatae rerum ipsam! Fugiat minima nulla aliquam repudiandae quasi omnis ex quaerat magni, earum placeat numquam suscipit minus.</p>

        </div>
    )
}

export default Text1