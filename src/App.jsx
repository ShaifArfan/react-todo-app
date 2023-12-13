import { Toaster } from "react-hot-toast";
import { AppContent } from "components/AppContent.jsx";
import { AppHeader } from "components/AppHeader.jsx";
import { PageTitle } from "components/PageTitle.jsx";
import styles from "styles/modules/app.module.scss";

export const App = () => {
	return (
		<>
			<div className="container">
				<PageTitle>TODO List</PageTitle>
				<div className={styles.app__wrapper}>
					<AppHeader/>
					<AppContent/>
				</div>
			</div>
			<Toaster
				position="bottom-right"
				toastOptions={{
					style: {
						fontSize: "1.4rem",
					},
				}}
			/>
		</>
	);
};
