import { Route, Routes } from "react-router-dom";
import { CommentsPage } from "./pages/comments";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<CommentsPage />} />
		</Routes>
	)
}