import React from 'react'
import CoinItem from '../coinItem/CoinItem';
import '../coins/Coins.css'
import { Link } from 'react-router-dom';
import Coin from '../../pages/Coin'

const Coins = (props) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coins</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>NKT Cap</p>
                </div>

                {props.coinsData.map(coin => {
                    return (
                        <Link to={`/coin/${coin.id}`}   key={coin.id}>
                            <CoinItem coins={coin}  />
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Coins;