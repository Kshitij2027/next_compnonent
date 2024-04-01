import Card from "./components/Card";
import Advertise from "./components/Advertise";
import TicketCard from "./components/TicketCard";
import { useContext } from "react";
import { ThemeContextProvider } from "@/context/ThemeContext";

export default function Home() {

  const {theme} =useContext(ThemeContex)
  console.log(theme);
  return (
    <div style={{display: 'grid', alignItems: 'end', margin: '35px', marginTop: 'auto'}}>
    <span style={{marginTop: '15px', marginBottom: '-74px', marginLeft: '99px', fontFamily: 'poppins', fontSize: '24px', fontWeight: '700', display: 'flex', textDecoration: 'underline', textDecorationColor: '#738FFF', textDecorationThickness: '2px', lineHeight: '2px'}}>Sports</span>
    <main
    className={`flex min-h-screen flex-row items-center justify-between p-2`} style={{padding: '12vh', paddingBottom: '0'}}>
      <div style={{display: 'flex', width: '1241px', height: '637px'}}>
      <Card imageUrl={'https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2XxKQcUNpnjUfqPSEoBDs1fA2T2ynT30pmeBbbJh8ADDuqsounqPy2h5snUTaNLrXmBSn3WLCzp0n2OT-QW-YTvS-z2mJHJ6qjt2YKrUp47e-cjjKeMCUFbLFl1st3rJjLbv0LslNuyK2PcJ7sfJvoojd2jJrTkPwtCe~fh8aXrwNSkOfd6fBp5EH6WVggIjH~17u23Nxit7mJ3gnCJVAFnyCwu7GXicoEtWv3OQ6g4X7r91yeBwHIuSi~KlMIqvE57pklcMv80Q6TC5meP~-Tk70JwQVh9kJFCBf5kGia04Ta-8Jgjo8h6GaYCkbtJuphhniHWXT4dnVFsj7xMmQ__'} title={'Sacramento River Cats'} totalEvents={'48 Events'} sports={'Baseball'}/>
      <Card imageUrl={'https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SL2NyvBA-RmV9CySCr0HqaIDFJPJfx24z5ukOpUhta6I9GYXc65jVXyjYdWiNUOcTOt2pbLQb2rK1ME8yx1Xkvvw14syZfWGf9I-Bx~7rNiIGN4EetaP9GdAdoJpMJP2cYcwI2HwhG5p4P~LHqFKou0RO~ZEZcMOPJxJct8ini~YOjXlxwbDdvfk6v8UGdmtaXuR43hC36YWrAdNVcfWnkNY3LrxnefSV6pJmr6-M9fOwGOpWFqWE08XG9YjfexBZQmEM7MLfm338bYXaIXLtAwQGvnhqrrmwCl4wHPPc95mDocM14BBhj8aUaDvPMpBAWUKhw2OYXVoUBbvcNditw__'} title={'Las Vegas Aviators'} totalEvents={'28 Events'} sports={'Baseball'}/>
      <Card imageUrl={'https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__'} title={'Sacramento River Cats'} totalEvents={'48 Events'} sports={'Baseball'}/>
      <Card imageUrl={'https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2XxKQcUNpnjUfqPSEoBDs1fA2T2ynT30pmeBbbJh8ADDuqsounqPy2h5snUTaNLrXmBSn3WLCzp0n2OT-QW-YTvS-z2mJHJ6qjt2YKrUp47e-cjjKeMCUFbLFl1st3rJjLbv0LslNuyK2PcJ7sfJvoojd2jJrTkPwtCe~fh8aXrwNSkOfd6fBp5EH6WVggIjH~17u23Nxit7mJ3gnCJVAFnyCwu7GXicoEtWv3OQ6g4X7r91yeBwHIuSi~KlMIqvE57pklcMv80Q6TC5meP~-Tk70JwQVh9kJFCBf5kGia04Ta-8Jgjo8h6GaYCkbtJuphhniHWXT4dnVFsj7xMmQ__'} title={'Sacramento River Cats'} totalEvents={'48 Events'} sports={'Baseball'}/>
      <Advertise image={'https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfHZuev7WUagkCJeDUVdHbkG5bqC2YmjXKJSZLKbyymg8PLUCF1d-3ITeG2OSpcKgHjVq3lbGf7eLgT0-RWii9vAbSSrltvD7RI88jX3A1p0QZTvL~643uJOzylJw00w1DWQKzrTEHLkK2D4jxJ4n3C9D03B-Odrn9zVjUWBi9mqnU5op991kONICO-AT7eCWb2APcuZxUGYnj8xpoj5L5modFS2ABEy2X1gaT0HXJZoVu2276JkODvrtjnC3F4~lM3f7rLQQam1iI8a3frGTCuFQfbXM3VAQ7nfBJDVDCcyeJcyc4m1oPldx2ONzo2CGn5jRfonRO5RlD-OHbierA__'} title={'Advertisement title'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
      </div>
    </main>
      <div style={{marginTop: '-100px', display: 'flex', justifyContent: 'center'}}>
        <button style={{width: '124px', height: '46px', background: '#2C9CF0'}}> Show More</button>
        <button style={{width: '124px', height: '46px', background: '#2C9CF0', marginLeft: '10px'}}>Theme</button>
      </div>
      <div style={{marginTop: '40px', width: '1265px', height: '918px', background: 'linear-gradient(180deg, #18282A 0%, #221A2C 100%)', marginLeft: '100px', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '1085.75px', height: '798px', textAlign: 'center', marginLeft: '7.5%', marginRight: '50%', marginTop: '7%', marginBottom: '50%'}}>
          <span style={{margin: 'auto', marginTop: '0', fontSize: '50px', fontWeight: '700', fontFamily: 'poppins', lineHeight: '52.5px'}}>Collection Spotlight</span>
          <span style={{margin: 'auto', marginTop: '2vh', fontSize: '14px', lineHeight: '22.65px', fontFamily: 'Inter', fontWeight: '400', textAlign: 'center', marginBottom: '-68vh'}}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</span>
        <div style={{width: '1085.75px', height: '624px', display: 'flex', justifyContent: 'space-evenly', margin: 'auto', marginTop: '76.5vh'}}>
      <TicketCard  image={'https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__'} tittle={'Las Vegas Aviators'} date={'OCT 15'} day={'SUN'} time={'4:30 PM'} address={'Las Vegas Ballpark, Las Vegas, Nevada'} boxtitle={'Take Flight Collection'}/>
      <TicketCard  image={'https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__'} tittle={'Sacramento River Cats'} date={'OCT 15'} day={'SUN'} time={'4:30 PM'} address={'Sutter Health Park, Sacramento, California'} boxtitle={'Orange Collection'}/>
      <TicketCard  image={'https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__'} tittle={'Las Vegas Aviators'} date={'OCT 15'} day={'SUN'} time={'4:30 PM'} address={'Las Vegas Ballpark, Las Vegas, Nevada'} boxtitle={'Take Flight Collection'}/>
        </div>
        </div>
      </div>
    </div>
  );
}
