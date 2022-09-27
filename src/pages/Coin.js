import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import '../pages/Coin.css'

const Coin = () => {
    const [coin, setCoin] = useState({})

    const params = useParams();

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    useEffect(() => {
        axios.get(url).then(response => {
            setCoin(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])



    return (
        <div>
            <div className='coin-container'>
                <div className='content'>
                    <h1>{coin.name}</h1>
                </div>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div>
                            <div className='coin-heading'>
                                {coin.image ? <img src={coin.image.small} alt='' /> : null}
                                <p>{coin.name}</p>
                                <p>{coin.symbol}</p>
                            </div>
                            <div className='coin-price'>
                                <h1>{coin.current_price}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* table */}
                <div className='content'>
                    <table>
                        <thead>
                            <th>1hr</th>
                            <th>24hrs</th>
                            <th>7days</th>
                            <th>14days</th>
                            <th>30days</th>
                            <th>1yr</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data.price_change_percentage_1h_in_currency.usd}</td>
                                <td>{coin.market_data.price_change_percentage_24h_in_currency.usd}</td>
                                <td>{coin.market_data.price_change_percentage_7d_in_currency.usd}</td>
                                <td>{coin.market_data.price_change_percentage_14h_in_currency.usd}</td>
                                <td>{coin.market_data.price_change_percentage_30h_in_currency.usd}</td>
                                <td>{coin.market_data.price_change_percentage_1y_in_currency.usd}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* stats */}
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                <p>{coin.market_data.low_24h.usd}</p>
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                <p>{coin.market_data.high_24h.usd}</p>
                            </div>
                        </div>
                        <div className='right'>
                        <div className='row'>
                                <h4>Market Cap</h4>
                                <p>{coin.market_data.market_cap.usd}</p>
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                <p>{coin.market_data.ciculating_supply}</p>
                            </div>
                        </div>
                    </div>
                </div>

            {/* about */}
            <div className='content'>
                <div className='about'>
                    <h3>About</h3>
                    <p>{coin.description.en}</p>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Coin;