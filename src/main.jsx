import ReactDOM from "react-dom/client";
import { App } from "App";
import { Provider } from "react-redux";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "styles/GlobalStyles.css";
import { store } from "redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App/>
	</Provider>
);