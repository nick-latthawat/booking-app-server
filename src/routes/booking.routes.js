import { Router } from "express";
import * as booking from "../controllers/booking.controller.js";

const r = Router();
r.get("/", booking.list);
r.post("/getHotelByLocationID", booking.getHotelByLocationID);
r.post("/getHotelByID", booking.getHotelByID);
r.post("/calculatePayment", booking.calculatePayment);
export default r;
