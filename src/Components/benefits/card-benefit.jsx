import React from "react";
import styles from "../../style/css/card-benefit.module.css";

const Benefit = (props) => {
	const { icon, header, paragraph } = props;
	return (
		<div className={`col-lg-4 col-md-6 col-sm-6 col-12 mb-3 ${styles.benefit}`}>
			<div className={`position-relative overflow-hidden text-center ${styles.benefit__margin}`}>
				<img src={icon} alt={icon} className={styles.benefit__margin__icon} />
				<h5 className={styles.benefit__margin__header}>{header}</h5>
				<p className={styles.benefit__margin__paragraph}>{paragraph}</p>
			</div>
		</div>
	);
};

export default Benefit;
