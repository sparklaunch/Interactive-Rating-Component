"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Home.module.css";
import star from "./assets/images/star.svg";

const MAX_RATING = 5;

const ratings = Array.from(
	{
		length: MAX_RATING
	},
	(_, index) => index + 1
);

export default function Home() {
	const router = useRouter();
	const [rating, setRating] = useState(0);
	const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const number = +event.currentTarget.textContent;
		if (number) {
			setRating(number);
		}
	};
	const submitHandler = () => {
		if (rating === 0) {
			return;
		}
		router.push(`/thank-you?rating=${rating}`);
	};
	return (
		<main className={styles.main}>
			<div className={styles.starWrapper}>
				<Image src={star} alt="" />
			</div>
			<h1 className={styles.header}>How did we do?</h1>
			<p className={styles.text}>
				Please let us know how we did with your support request. All
				feedback is appreciated to help us improve our offering!
			</p>
			<div className={styles.buttons}>
				{ratings.map((number) => (
					<button
						key={number}
						className={clsx(styles.button, {
							[styles.active]: rating === number
						})}
						onClick={clickHandler}
					>
						{number}
					</button>
				))}
			</div>
			<button className={styles.submitButton} onClick={submitHandler}>
				SUBMIT
			</button>
		</main>
	);
}
