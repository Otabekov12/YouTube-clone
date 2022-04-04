import React from "react";
import "./Content.scss";
import Dollie from '../../images/influcer-img/dollie.svg';
import { NavLink } from "react-router-dom";

function HomeContent() {
    const [photos,  setPhotos] = React.useState([]);
    const [photos2,  setPhotos2] = React.useState([]);

    React.useEffect(()=>{
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');

            const data = await res.json();

            if (data) {
                setPhotos(data.slice(1, 15));
                setPhotos2(data.slice(1, 15));
            }
        })();
    }, []);


    return (
        <>
        <div className='container'>
            <div className=''>
                <NavLink className='homecontent__box' to={"/chanel"}>
                    <img className='homecontent__img' src={Dollie} alt="" />
                    <h2 className='homecontent__title'>Dollie Blair</h2>
                </NavLink>

                <div className='homecontents'>
                    <ul className="homecontent__list">
                       {
                        photos?.length >  0 &&  photos.map(user => (
                            <li className="homecontent__item" key={user.id}>
                                <NavLink className="homecontent__link" to="/player">
                                    <img  className="homecontent__img" src={user.url} alt={user.title + "'s video"} />
                                    <strong className="homecontent__text">{user.title}</strong>
                                    <p className="homecontent__text__p">80k views  ·  3 days ago  Dollie Blair</p>
                                </NavLink>

                            </li>
                        ))  
                    }
                    </ul>
                    <ul className="homecontent__list2">
                       {
                        photos2?.length >  0 &&  photos2.map(user2 => (
                            <li className="homecontent__item2" key={user2.id}>
                                <NavLink className="homecontent__link" to="/player">
                                    <img  className="homecontent__img2" src={user2.url} alt={user2.title + "'s video"} />
                                    <strong className="homecontent__text">{user2.title}</strong>
                                    <p className="homecontent__text__p ">80k views  ·  3 days ago</p>
                                </NavLink>

                            </li>
                        ))  
                    }
                    </ul>

                    <ul className="homecontent__list">
                       {
                        photos?.length >  0 &&  photos.map(user => (
                            <li className="homecontent__item" key={user.id}>
                                <NavLink className="homecontent__link" to="/player">
                                    <img  className="homecontent__img" src={user.url} alt={user.title + "'s video"} />
                                    <strong className="homecontent__text">{user.title}</strong>
                                    <p className="homecontent__text__p">80k views  ·  3 days ago  Dollie Blair</p>
                                </NavLink>

                            </li>
                        ))  
                    }
                    </ul>
                </div>  
            </div>
        </div>
        </>
    );
}

export default HomeContent;