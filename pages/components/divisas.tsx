import React from 'react';
import { useEffectAsync } from '../../hooks';
import styles from '../../styles/Home.module.css';
import { client, colors } from '../../common';

interface Props {
    value: string;
}

export function Divisas(props: Props) {


    useEffectAsync(async () => {
        client.onopen = () => {
            console.log("Connection has been opened!");
        };
        client.onmessage = (message) => {
            console.log({message});
        }

        

        client.close();
    }, []);

    return (
        <div className={styles.Divisascontainer}>

            <div className={styles.divisas}>
                <span className={styles.divisasTitle}>Ask:</span>
                <span className={styles.divisasTitle}>0</span>
            </div>

            <div className={styles.divisas}>
            <span className={styles.divisasTitle}>Bid:</span>
            <span className={styles.divisasTitle}>0</span>
            </div>
        </div>
    )
}