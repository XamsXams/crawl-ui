import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import * as linkService from '../../services/link.service';
import Button from '~/components/Button/Button';
import Loading from '~/components/Loading/Loading';

const cx = classNames.bind(styles);

function Home() {
    const [url, setUrl] = useState(
        'https://thesosoye.com/blogs/lam-dep/top-6-kem-chong-nang-cho-ba-bau-an-toan-tot-va-hieu-qua-nhat-hien-nay',
    );
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const excepts = ['icon', 'banner', 'logo'];
    const hanldeGetLink = async () => {
        setLoading(true);
        try {
            const res = await linkService.getAllText(url, {
                website: 'https://thesosoye.com',
                excepts: JSON.stringify(excepts),
            });
            console.log(`file: App.js:26 > res:`, res);
            if (res) {
                setData(res);
            } else {
                setError('No result');
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError('No result');
            console.log(`file: App.js:19 > error:`, error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('input-wrapper')}>
                <input
                    className={cx('input-url')}
                    type="text"
                    placeholder="Enter url"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                />

                <Button className={cx('submit-btn')} onClick={hanldeGetLink} primary>
                    {loading ? <Loading /> : 'Get'}
                </Button>
            </div>

            <div className={cx('info__wrapper')}>
                <div className={cx('info__field')}>
                    <span>Số lượng hình: {data?.img.length || 0}</span>
                </div>
                <div className={cx('info_html')}>
                    <div className={cx('h_tag')}>
                        {data &&
                            data?.info &&
                            data.info.h1.map((tag, index) => {
                                return (
                                    <div key={index}>
                                        <b>H1 - </b> <span>{tag}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>

            {error && <div className={cx('error')}>{error}</div>}
            <div className={cx('result-wrapper')}>
                <ul className={cx('links')}>
                    {data &&
                        data?.img.length > 0 &&
                        data.img.map((link, index) => {
                            return (
                                <li className={cx('link-item')} key={index}>
                                    <span className={cx('label-item')}>{index + 1}</span>
                                    <img className={cx('img-item')} src={link} alt={index} />
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}

export default Home;
