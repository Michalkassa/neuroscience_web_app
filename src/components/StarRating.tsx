"use client";
import React from "react";
import { useState } from "react";

interface StarRatingProps {
  name: string;
}
const StarRating: React.FC<StarRatingProps> = ({name}) => {
const [rating, setRating] = useState(1);
const starRatings = [1, 2, 3, 4, 5];


return (
    <div>
        <div>
            {starRatings.map((star) => (
                <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`
              text-2xl transition
              ${star <= rating ? "text-yellow-400" : "text-gray-300"}
            `}
          >
            ★
          </button>
        ))}
        </div>
        <input id={name} name={name} type="hidden" value={rating}></input>
    </div>
)
}
export default StarRating;