import PageRoutes from "../routes/PageRoutes.js";
import CardRoutes from "../routes/CardRoutes.js";
import UserRoutes from "../routes/UserRoutes.js";
import AuthenticationRoutes from "../routes/AuthenticationRoutes.js";

export default (app) => {
    app.use("/", PageRoutes);

    app.use("/", AuthenticationRoutes);
    
    app.use("/cards", CardRoutes);

    app.use("/users", UserRoutes);
};