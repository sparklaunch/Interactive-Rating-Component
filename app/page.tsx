"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import styles from "./Home.module.css";
import star from "./assets/images/star.svg";

export default function Home() {
	const [rating, setRating] = useState("0");
	const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const number = event.currentTarget.textContent;
		setRating(number);
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
				<button
					className={clsx(styles.button, {
						[styles.active]: rating === "1"
					})}
					onClick={clickHandler}
				>
					1
				</button>
				<button
					className={clsx(styles.button, {
						[styles.active]: rating === "2"
					})}
					onClick={clickHandler}
				>
					2
				</button>
				<button
					className={clsx(styles.button, {
						[styles.active]: rating === "3"
					})}
					onClick={clickHandler}
				>
					3
				</button>
				<button
					className={clsx(styles.button, {
						[styles.active]: rating === "4"
					})}
					onClick={clickHandler}
				>
					4
				</button>
				<button
					className={clsx(styles.button, {
						[styles.active]: rating === "5"
					})}
					onClick={clickHandler}
				>
					5
				</button>
			</div>
			<button className={styles.submitButton}>SUBMIT</button>
		</main>
	);
}
