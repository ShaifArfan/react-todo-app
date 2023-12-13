import styles from "styles/modules/title.module.scss";

export const PageTitle = ({children, ...rest}) => {
	return (
		<p className={styles.title} {...rest}>
			{children}
		</p>
	);
};

