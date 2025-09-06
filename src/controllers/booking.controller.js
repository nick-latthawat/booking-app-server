import * as services from "../services/booking.service.js";

export const list = (req, res) => res.json(services.list());

export const getHotelByLocationID = (req, res) => {
    const item = services.getHotelByLocationID(String(req.body.LocationID));
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
};

export const getHotelByID = (req, res) => {
    console.log("getHotelByID controller: ", req.body.ID);
    const item = services.getHotelByID(String(req.body.ID));
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
};

// export const create = (req, res) => {
//     const { name, price } = req.body || {};
//     if (!name || typeof price !== "number")
//         return res.status(400).json({ message: "name (string) & price (number) required" });
//     const created = services.create({ name, price });
//     res.status(201).json(created);
// };

// export const update = (req, res) => {
//     const updated = services.update(Number(req.params.id), req.body || {});
//     if (!updated) return res.status(404).json({ message: "Not found" });
//     res.json(updated);
// };

// export const remove = (req, res) => {
//     const removed = services.remove(Number(req.params.id));
//     if (!removed) return res.status(404).json({ message: "Not found" });
//     res.json(removed);
// };
