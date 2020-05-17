import authRoutes from "./auth.routes";

function Router(app: { use: (path: string, route: any) => void }) {
  app.use(`${process.env.BASE_API_URL}/auth`, authRoutes);
}

export default Router;
