import {CDN_URL} from "../utils/Constants";

const RestaurantCard = (props) => {
    const {resData} =props;
    const{ name, avgRating ,cuisines,cloudinaryImageId,costForTwo,sla} = resData?.info;
   return(
    <div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/> 
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>${costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
    </div>
   ); 
};

export const withPromotedLabel =(RestaurantCard) =>{
  return(props) => {
    return (
        <div>
          <label className="promo">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
    );
  };
};



export default RestaurantCard;