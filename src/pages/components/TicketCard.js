const TicketCard = ({image, address, tittle, date, day, time, boxtitle}) => {
    return (
        <div>
            <div style={{height: '624px', width: '257px', margin: '10px', backgroundColor: '#818A97', display: 'flex', flexDirection: "column", alignItems: 'center', position: 'relative'}}>
                <div style={{width: '226.1px', height: '401.2px'}}>
                <img src={image} style={{marginTop: '17px'}}/>
                <div style={{margin: '-28px', height: '20px', width: '20px', background: '#221A2C', position: 'relative', marginTop: '8px', borderRadius: '90%'}}>
                </div>
                <div style={{margin: '234px', height: '20px', width: '20px', background: '#221A2C', position: 'relative', marginTop: '6px' ,borderRadius: '90%'}}></div>
                </div>
                <div style={{marginTop: '66.66px', height: '100.66px', width: '213px', display: 'flex',flexDirection: 'column', justifyContent: 'center'}}>
                    <span style={{fontFamily: 'poppins', fontSize: '17px', lineHeight: '26.52px', alignSelf: 'center', color: '#FFFFFF', fontWeight: '500'}}>{tittle}</span>
                    <div style={{display: 'flex', flexDirection: 'row', fontFamily: 'poppins', fontSize: '14px', lineHeight: '21px', fontWeight: '400', alignSelf: 'center'}}><span >{date} | {day} | {time}</span></div>
                    <div style={{display: 'flex', flexDirection: 'row', fontFamily: 'Inter', fontSize: '14px', lineHeight: '20.58px', fontWeight: '400', alignSelf: 'center', color: '#DFDFDF', textAlign: 'center'}}><span>{address}</span></div>
                    <div style={{marginTop: '50px', height: '36px', width: '213px', background: '#000000', textAlign: 'center', fontSize: '12.73px', fontWeight: '500', fontFamily: 'Inter'}}>{boxtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard