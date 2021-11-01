import axios from "axios";
import { baseUrlApi } from "../../../Redux/BaseURL";



// CREATE =>  POST: add a new product to the server
export function createProduct(event) {
  return axios.post(ADD_EVENT_URL, {
    "UserId": event.userid,
    "CategoryId": event.categoryId,
    "Title": event.title,
    "Description": event.description,
    "Image": "",
    "TotalBalance": event.totalbalance,
    "EndDate": event.endDate,
    "StatusId": event.statusId
  });
}





// UPDATE => PUT: update the procuct on the server

