// Sidebar.js
import React from 'react';


const Sidebar = () => {
    const groups = [
        { name: 'Leisure', imgSrc: 'https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZQrCLgTmb~9ZgONYLxo5orU4xIFpnxnWTzXmpjv0TsyUOCpmfmR0CXHpV-d~zg5Eqyn8V7rWBRc1d2euuORY1AmrP4Yck4W0Xb4-1rLVTHPnI8nyqdj-AZgJ4s3QlClrsisyZU27LjKdaAyuHgkpo0p2mTlrqC-9nP7~Uie2NlshPxt~aoGN-Dyes8wt0O~~~o7a4g9TSYjcWgGNZnbHVCpLsuUcL4rNMUKInf5Lv3deWyfaiypODO2Qn5gmHv8Qi41rAmgyV66QNs~SBFC5gc8ygNuu8hEghKyAt1g63hvX4JCuxW9rwC8FKgzQnb1rOZ1D59ZqXJrR6nb0IZ8TQ__' },
        { name: 'Activism', imgSrc: 'https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDsS7WH-oNMF-lmRkVQ2Eyb6C9Pw-mJSuXMi1jDUUPAt-oJZB1QnMn-vaRGF97OSBBLz0a4xIBwcYTMeYcXTpOjP5t3ez4gC7vKac76rbKfP5l156CrhfXZKc7PjWL~Ah-jrct4AtNRoBmGcxCnrjrQcAMk8K7FFuOYFbTbonL4pyhQNW-skRci-lin8JO-xzMHsr1XHuxTZbgymJ7NYFTmKtgii~U6aiNt1feJuZs745u3o-qnlaJ8AXGrhhxHulm2zWSZZU6eRqPblQSfd7yONpfWn6PqzPRF7C1e22iaYqgtr3yiZ76g41snT6agkGwKNWPSAuPYlsaPkY28ocw__' },
        { name: 'MBA', imgSrc: 'https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L34FvE0iPnpPQ6q2STymCtuaqOXKd0N07BCU0pTinJrGchxfaV16QlMz8WfImuWjkcLyqkJEDgv0TW7Jo8iiwg9S-XkvN-vegYhDBU1UUHAB7TSSSuJBUcdr-H~Ng4-Ovi69G20CYmn~xSzNHZOaMo3pOKwKD3lP4a01iKrHkz-hAckxWaV7W5KEzWUhdU6M7N-mx-eO~xoSqh5ky3U06T9~57a4eEErc~ao8fT~qDJ0GUH5SvMG4kN4ooNtTmTbphzv5AudGaWI2wXTDhNqP5tx6zWlFEesFLnMBh7AmSj8l~LM7PKS~~n-7HfEc5KiZgBahFTwyoC3w7JDIHy-~w__' },
        { name: 'Philosophy', imgSrc: 'https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adaxj18Cy9AUqqMWeaWU7uWLKlDPRPB1E5VdJJ-khLT2Lt7XOicQowUNNug3BxzVZgN6-b3tW2~cXizoAzBrU8NbnKCL9mReYG74NMn9LzO0Vm8yWq8WFGe9ZhyK5a-BHMQ62X32Grgd9hDtKMcxheLjSrky-hezkZIZN6mKlIawOvyhPtILA~BneqcubaVtC9HUJ-zBRcEgnTxhNQmgalTzBHdbRq7T4TPwajSUulAliT~HbXQ0ovJOHxfIMQ8-2Z1l8oM2xLu9K5GS8hY4MczMdreDpR1Mt~sRHW992~lN8U69XbwVf9TvFpHu1GcNe93rtvGFThiC0o-DgOhaQA__' }
    ];

    return (
        <div className="sidebar">
            <div className="location-section">
                <div className="location-header">
                    <i className="fas fa-map-marker-alt"></i>
                    <input type='text' placeholder='Enter Your Location' style={{border:'none',fontSize:'20px'}}/>
                    <i className="fas fa-pen edit-icon"></i>
                </div>
                <div className="location-description">
                    <i className="fas fa-info-circle"></i>
                    <span style={{fontSize:'15px'}}>Your location will help us serve better and extend a personalised experience.</span>
                </div>
            </div>
            <div className="recommended-groups">
                <div className="header" style={{border:'none'}}>
                    <i className="fas fa-thumbs-up"></i>
                    <span >RECOMMENDED GROUPS</span>
                </div>
                <ul className="group-list">
                    {groups.map((group, index) => (
                        <li key={index} className="group-item">
                            <img src={group.imgSrc} alt={group.name} style={{width:'40px',height:'40px'}}/>
                            <span style={{fontFamily:'sans-serif',fontSize:'17px'}}>{group.name}</span>
                            <button className="follow-button">Follow</button>
                        </li>
                    ))}
                </ul>
                <a href="#" className="see-more">See More...</a>
            </div>
        </div>
    );
};

export default Sidebar;
