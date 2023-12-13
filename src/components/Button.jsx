import styles from "styles/modules/button.module.scss";
import { getClasses } from "utils/getClasses";

const buttonTypes = {
	primary: "primary",
	secondary: "secondary",
};

export const Button = ({type, variant = "primary", children, ...rest}) => {
	return (
		<button
			type={type === "submit" ? "submit" : "button"}
			className={getClasses([
				styles.button,
				styles[`button--${buttonTypes[variant]}`],
			])}
			{...rest}
		>
			{children}
		</button>
	);
};

export const SelectButton = ({children, id, ...rest}) => {
	return (
		<select
			id={id}
			className={getClasses([styles.button, styles.button__select])}
			{...rest}
		>
			{children}
		</select>
	);
};
