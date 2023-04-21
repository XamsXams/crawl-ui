import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '~/contexts/AuthContext/AuthProvider';
import Button from '~/components/Button';
import AuthAction from '~/contexts/AuthContext';
import AvatarDefault from '~/components/AvatarDefault';
import Search from '../Search';
import img from '~/assets/img';
import { UserIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Header() {
    const { authState, authDispatch } = useContext(AuthContext);

    const handleLogout = () => {
        authDispatch(AuthAction.logout());
        window.location.replace('/login');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-left')}>
                <Link to={'/'} style={{ height: 36 }}>
                    <img className={cx('icon', 'logo')} src={img.logoH} alt="logo" />
                </Link>
            </div>
            <Search />
            <div className={cx('top-right')}>
                <div className={cx('nav')}>
                    {!authState.user && (
                        <>
                            <Link to={'/login'}>
                                <div className={cx('nav-item')}>Login</div>
                            </Link>
                            <Link to={'/register'}>
                                <div className={cx('nav-item')}>Register</div>
                            </Link>
                        </>
                    )}
                </div>

                {authState.user && (
                    <div className={cx('user-login')}>
                        {authState.user?.avatar ? (
                            <img className={cx('avatar')} src={authState.user.avatar} alt="avatar" />
                        ) : (
                            <AvatarDefault name={authState.user?.username || 'X'} width={40} radius="50%" />
                        )}
                        <div className={cx('menu')}>
                            <Link to={'/profile'} className={cx('menu-item')}>
                                <UserIcon className={cx('icon')} />
                                <div className={cx('label')}>My profile</div>
                            </Link>

                            <Button onClick={handleLogout} className={cx('logout-btn')} rounded outline>
                                Logout
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
