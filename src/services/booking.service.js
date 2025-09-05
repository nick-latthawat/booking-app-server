import fs from "fs";

const hotelLists = JSON.parse(fs.readFileSync(new URL("../hotelLists.json", import.meta.url)));

export const list = () => hotelLists;

export const getHotelByLocationID = (id) => {
    const locationID = String(id);
    // console.log("getHotelByLocationID service: ", hotelLists.filter(p => p.LocationID === locationID));
    return hotelLists.filter(p => p.LocationID === locationID);
}


// export const create = ({ name, price }) => {
//   const item = { id: seq++, name, price };
//   products.push(item);
//   return item;
// };

// export const update = (id, { name, price }) => {
//   const idx = products.findIndex(p => p.id === id);
//   if (idx === -1) return null;
//   if (name !== undefined) products[idx].name = name;
//   if (price !== undefined) products[idx].price = price;
//   return products[idx];
// };

// export const remove = (id) => {
//   const idx = products.findIndex(p => p.id === id);
//   if (idx === -1) return null;
//   const [rm] = products.splice(idx, 1);
//   return rm;
// };
