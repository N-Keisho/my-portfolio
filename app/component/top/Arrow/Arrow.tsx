import Image from 'next/image';
import style from './Arrow.module.css';

const Arrow = () => {
    return (
        <div className={style.div}>
            <Image src="/piskel/arrow.png" alt="Arrow" width={100} height={100} />
        </div>
    );
};

export default Arrow;