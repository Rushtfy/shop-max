import React from 'react'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigation = useNavigate();

    const goCart = () => {
        navigation("/basket");
    }
    const goWishlist = () => {
        navigation("/wishlist");
    }

  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <a href="/" className={styles.logo}>S H O P M A X</a>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="">SHOP</a></li>
                <li><a href="">CATALOGUE</a></li>
                <li><a href="">NEW ARRIVALS</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faHeart} onClick={goWishlist}/>
                <FontAwesomeIcon icon={faCartShopping} onClick={goCart}/>
                <FontAwesomeIcon icon={faBars} className={styles.bars}/>
            </div>
        </div>
    </div>
  )
}

export default Header