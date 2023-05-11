import React, { useState, useEffect } from "react";

const PickCategory = function(){

    return(
        <div>
            <p>Pick category</p>
            <div className="pick__category">
                <label className="pick__category__purpose business">
                    <input type="radio" name="purpose" value="business" className="pick__category__input" id="pick__category__business" />
                    <span className="pick__category__input__text">Business</span>
                </label>
                <label className="pick__category__purpose personal">
                    <input type="radio" name="purpose" value="personal" className="pick__category__input" id="pick__category__personal" />
                     <span className="pick__category__input__text">Personal</span> 
                </label>
            </div>
        </div>
    )
}

export default PickCategory;
