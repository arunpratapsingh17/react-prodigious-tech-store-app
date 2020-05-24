// submit order
import axios from "axios";
import url from "../utils/URL";
async function submitOrder({ name, items, total, stripeTokenId, userToken }) {
  const response = await axios
    .post(
      `${url}/orders`,
      { Name: name, Items: items, Total: total, stripeTokenId },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
}
export default submitOrder;
