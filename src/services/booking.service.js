import fs from "fs";

const hotelLists = JSON.parse(fs.readFileSync(new URL("../hotelLists.json", import.meta.url)));

export const list = () => hotelLists;

export const getHotelByLocationID = (id) => {
    const locationID = String(id);
    return hotelLists.filter(p => p.LocationID === locationID);
}

export const getHotelByID = (id) => {
    const hotelID = String(id);
    return hotelLists.filter(p => p.ID === hotelID);
}

export const calculatePayment = ({ id, type, amount }) => {
    const hotelID = String(id);
    const roomType = String(type);
    const nightAmount = String(amount);
    let price = 0;
    const hotel = hotelLists.find((p) => p.ID === hotelID);

    if (hotel) {
        price = Number(hotel.Price);
    }

    return price * nightAmount;
}
