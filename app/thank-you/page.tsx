"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import thankYou from "../assets/images/thank-you.svg";
import styles from "./ThankYou.module.css";

export default function ThankYou() {
	const searchParams = useSearchParams();
	const rating = searchParams.get("rating");
	return (
		<main className={styles.main}>
			<Image src={thankYou} alt="Thank-you" />
			<p className={styles.ratingText}>You selected {rating} out of 5</p>
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
