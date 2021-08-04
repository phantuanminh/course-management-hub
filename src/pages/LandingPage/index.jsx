import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

import DEMO_1 from '../../assets/demo-1.png';
import DEMO_2 from '../../assets/demo-2.png';
import DEMO_3 from '../../assets/demo-3.png';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.demo}>
                <img className={clsx(styles.image, styles.image1)} src={DEMO_1} alt="Demo-1" />
                <img className={clsx(styles.image, styles.image2)} src={DEMO_2} alt="Demo-2" />
                <img className={clsx(styles.image, styles.image3)} src={DEMO_3} alt="Demo-3" />
            </div>
            <div className={styles.menu}>
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    );
}

export default LandingPage;