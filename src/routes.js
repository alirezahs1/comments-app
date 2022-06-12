/**
 * App routes
 */

import { Route, Routes } from "react-router-dom";

import { CommentsPage } from "./pages/comments";
import { NotFoundPage } from "pages/not-found";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<CommentsPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}