"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import thankYou from "../assets/images/thank-you.svg";
import styles from "./ThankYou.module.css";

export default function ThankYou() {
	return (
		<main className={styles.main}>
			<Image src={thankYou} alt="" />
			<Suspense fallback={null}>
				<RatingText />
			</Suspense>
			<section className={styles.thankYouSection}>
				<h1 className={styles.thankYouHeader}>Thank you!</h1>
				<p className={styles.thankYouText}>
					We appreciate you taking the time to give a rating. if you
					ever need more support, don&apos;t hesitate to get in touch!
				</p>
			</section>
		</main>
	);
}

function RatingText() {
	const searchParams = useSearchParams();
	const rating = searchParams.get("rating");
	if (!rating) {
		return <p className={styles.ratingText}>Invalid access!</p>;
	}
	return <p className={styles.ratingText}>You selected {rating} out of 5</p>;
}
