import React, { useState } from 'react'

//import css
import styles from './Flag.module.css';

import { flagUrl } from '../../../utils/flagUrl';

const Flag = ({ emoji, size = "md" }) => {
    const [hasError, setHasError] = useState(false);
    const src = flagUrl(emoji);

    // fall back to the emoji if we can't build or load the image
    if (!src || hasError) {
        return <span className={`${styles.flagEmoji} ${styles[size]}`} aria-hidden="true">{emoji || "📍"}</span>;
    }

    return (
        <img src={src} alt="" loading="lazy"
            className={`${styles.flag} ${styles[size]}`}
            onError={() => setHasError(true)} />
    )
}

export default Flag
