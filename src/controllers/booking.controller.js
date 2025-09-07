import * as services from "../services/booking.service.js";

export const list = (req, res) => res.json(services.list());

export const getHotelByLocationID = (req, res) => {
    const item = services.getHotelByLocationID(String(req.body.LocationID));
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
};

export const getHotelByID = (req, res) => {
    const item = services.getHotelByID(String(req.body.ID));
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
};

export const calculatePayment = (req, res) => {
    const { ID, RoomType, NightAmount } = req.body || {};
    if (!ID || !RoomType || !NightAmount) {
        return res.status(400).json({ message: "ID, RoomType, NightAmount required" });
    }

    const data = {
        id: ID,
        type: RoomType,
        amount: NightAmount
    }

    const cal = services.calculatePayment({
        id: ID,
        type: RoomType,
        amount: NightAmount,
    });
    res.status(201).json(cal);
};


