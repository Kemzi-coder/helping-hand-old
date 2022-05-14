import React, {useState} from "react";
import styles from "./StarRating.module.css";

const StarRating = ({starRating}) => {
	const [rating, setRating] = useState(starRating);
	const [hover, setHover] = useState(0);
	return (
		<div className="star-rating">
			{[...Array(5)].map((star, index) => {
				const number = index + 1;
				return (
					<button
						type="button"
						key={number}
						className={
							index + 1 <= (hover || rating) ? styles.on : styles.off
						}
						onClick={!starRating ? () => setRating(index) : null}
						onMouseEnter={!starRating ? () => setHover(index) : null}
						onMouseLeave={!starRating ? () => setHover(rating) : null}
					>
						<span>&#9733;</span>
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
