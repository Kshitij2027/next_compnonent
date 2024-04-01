const Advertise = ({ image, title, description }) => {
    return (
        <div style={{ borderWidth: '10px', height: '511px', width: '237px', borderColor: '#3B3E47', margin: '10px', backgroundColor: '#3B3E47', display: 'flex', flexDirection: "column", alignItems: 'flex-start' }}>
            <div style={{height: '218px', width: '217px', justifyContent: 'flex-start'}}><div style={{position: 'relative', zIndex: '10'}}>
                <img src={image} style={{margin: 'auto', justifyContent: 'start', objectFit: 'cover'}}/>
            {/* <div style={{height: '25px', width: '47.78px', background: 'black'}}></div> */}
            </div>
            <div style={{fontSize: '20px', fontWeight: '600', marginTop: '20px', marginLeft: '20px'}}>{title}</div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '20px', fontSize: '12.8px'}}>{description}</div>
            </div>
            </div>
            )
}

            export default Advertise