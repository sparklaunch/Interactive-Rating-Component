import Image from "next/image";
import styles from "./Home.module.css";
import star from "./assets/images/star.svg";

export default function Home() {
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
				<button className={styles.button}>1</button>
				<button className={styles.button}>2</button>
				<button className={styles.button}>3</button>
				<button className={styles.button}>4</button>
				<button className={styles.button}>5</button>
			</div>
			<button className={styles.submitButton}>SUBMIT</button>
		</main>
	);
}
