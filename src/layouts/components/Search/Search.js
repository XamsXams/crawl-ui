import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Button from '~/components/Button/Button';
import { useDebounce } from '~/hook';
import { useLocation } from 'react-router-dom';
import { CrossCircleIcon, LoadingIcon, SearchIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Search() {
    const { state } = useLocation();
    const [searchText, setSearchText] = useState(state?.historySearch || '');
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();
    const searchRef = useRef();
    const debouncedValue = useDebounce(searchText, 500);
    const handleOnChangeSearch = (e) => {
        setSearchText(e.target.value);
        if (searchText.startsWith(' ')) {
            setSearchText(searchText);
        }
    };

    console.log(`file: Search.js:30 > state:`, { state });

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);

            return;
        }

        setLoading(true);

        const fetchAPi = async () => {
            setLoading(true);

            // call api here
            // const result = await postService.search(debouncedValue.trim());
            const result = [];
            console.log(`file: Search.js:34 > result:`, result);
            setSearchResult(result);

            setLoading(false);
        };

        fetchAPi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchText('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResult(false);
                console.log('outside', event.target);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef]);

    console.log({ searchResult, showResult });

    return (
        <div className={cx('wrapper')} ref={searchRef}>
            <div className={cx('search')}>
                <input
                    type="text"
                    ref={inputRef}
                    value={searchText}
                    placeholder="Search"
                    className={cx('search-input')}
                    onChange={handleOnChangeSearch}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchText && !loading && (
                    <Button className={cx('btn')} onClick={handleClear} leftIcon={<CrossCircleIcon />}></Button>
                )}

                {loading && <Button className={cx('btn')} leftIcon={<LoadingIcon />}></Button>}
                <Button className={cx('search-btn')}>
                    <SearchIcon />
                </Button>
            </div>

            {(function () {
                if (showResult && searchResult.length > 0) {
                    return (
                        <div className={cx('result-wrapper')}>
                            <div className={cx('result-type')}>
                                <div className={cx('label')}>result</div>
                                <ul className={cx('result-list')}>
                                    {searchResult.map((item, index) => {
                                        return <p>{index}</p>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                } else if (showResult && searchText) {
                    return (
                        <div className={cx('result-wrapper')}>
                            <div className={cx('no-result')}>No result</div>
                        </div>
                    );
                }
            })()}
        </div>
    );
}

export default Search;
