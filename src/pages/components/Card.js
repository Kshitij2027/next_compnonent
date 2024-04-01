const Card = ({ title, imageUrl, totalEvents, sports }) => {
    return (
        <div>
            <div style={{borderWidth: '10px', height: '511px', width: '237px', borderColor: '#3B3E47', margin: '10px', backgroundColor: '#3B3E47', display: 'flex', flexDirection: "column", alignItems: 'flex-start'}}>
                <div>
                    <img src={imageUrl} style={{height: '385.31px', width: '217px', margin: 'auto', justifyContent: 'start', objectFit: 'cover'}}/>
                </div>
                <div style={{marginLeft: '0', marginTop: '10px', fontSize: '18px'}}>{title}</div>
                <div style={{background: '#292B32', width: '217px', height: '54px', borderRadius: '2', marginTop: '15px', borderRadius: '2px', display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'space-between'}}>
                    <section style={{ marginTop: '5px',marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
                        <span style={{fontSize: '12px', fontWeight: '400', color: '#DFDFDF'}}>
                            Total Events
                        </span>
                        <span style={{fontSize: '14px', fontWeight: '500', color: '#FFFFFF'}}> {totalEvents} </span>
                    </section>
                    <section style={{marginLeft: '37px', marginTop: '5px', display: 'flex', flexDirection: 'column'}}>
                        <span style={{fontSize: '12px', fontWeight: '400', color: '#DFDFDF'}}>Sports</span>
                        <span style={{fontSize: '14px', fontWeight: '500', color: '#FFFFFF'}}>{sports}</span>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
