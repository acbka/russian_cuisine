import { Order } from "./order";
import { FormGroup } from "@angular/forms";

export function sendMail(order: Order, checkoutForm: FormGroup) {
  order.customerName = checkoutForm.controls["customerName"].value;
  order.customerAddress = checkoutForm.controls["customerAddress"].value;
  order.customerEmail = checkoutForm.controls["customerEmail"].value;
  order.customerPhone = checkoutForm.controls["customerPhone"].value;
  order.customerSuburb = checkoutForm.controls["customerSuburb"].value;
  order.deliveryDateTime = checkoutForm.controls["deliveryDateTime"].value;
  order.id = Math.round(Math.random() * 10000000);

  const dt = new Date(
    checkoutForm.controls["deliveryDateTime"].value
  ).toLocaleDateString();

  let result: string = "";
  const soup = `so=${order.soup[0].name}, ${order.soup[1].name}`;
  const sides = `ga=${order.garnish[0].name}, ${order.garnish[1].name}`;
  const mains = `ma=${order.main[0].name}, ${order.main[1].name}`;
  const dessert = `de=${order.dessert[0].name}`;
  const salads = `sa=${order.salad[0].name}`;
  const name = `nm=${order.customerName}`;
  const address = `ad=${order.customerAddress}, ${order.customerSuburb}`;
  const rid = `rid=${order.id}`;
  const phone = `ph=${order.customerPhone}`;
  const date = `dt=${dt}`;
  const email = `em=${order.customerEmail}`;
  result = `${rid}&${soup}&${sides}&${mains}&${dessert}&${salads}&${phone}&${date}&${name}&${address}&${email}`;

  fetch(
    `https://us-central1-granny-10517.cloudfunctions.net/sendMail?${result}`,
    {
      mode: "no-cors",
    }
  );
  //fetch(`http://www.sakhiepi.ru/src/mailer.aspx?${result}`);
}
