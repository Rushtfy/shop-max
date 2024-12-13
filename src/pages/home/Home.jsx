import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import modelOne from './assets/model_3.png.webp'
import modelTwo from './assets/model_6.png.webp'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import { getProductThunk } from '../../redux/reducers/productsSlice';
import Layout from '../../components/layout/Layout';

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(8);

    const lastIndexItem = currentPage * itemPerPage;
    const firstIndexItem = lastIndexItem - itemPerPage;

    const products = useSelector((state) => state.products.products) || [];
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const dispacth = useDispatch();

    useEffect(() => {
        dispacth(getProductThunk());
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Xeta bas verdi</p>

    const currentProducts = products.slice(firstIndexItem, lastIndexItem);

    let pages = [];

    for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
        pages.push(i);
    }

    return (
        <Layout>
            <div className={styles.sectionOne}>
                <div className={styles.containerOne}>
                    <img src={modelOne} alt="model" />
                    <div className={styles.texts}>
                        <h2>#New Summer Collection 2019</h2>
                        <h1>ARRIVALS SALES</h1>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <div className={styles.containerTwo}>
                    {currentProducts && currentProducts.map(item => <Card item={item} />)}
                </div>
                <div className={styles.pageNums}>
                    {pages && pages.map(item => {
                        return <button style={currentPage == item ? {backgroundColor: "gray"} : {backgroundColor: "black"}} onClick={() => setCurrentPage(item)}>{item}</button>
                    })}
                </div>
            </div>
            <div className={styles.sectionOne}>
                <div className={styles.containerOne}>
                    <img src={modelTwo} alt="model" />
                    <div className={styles.texts}>
                        <h2>#New Summer Collection 2019</h2>
                        <h1>NEW SHOES</h1>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home