import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../style/ListTransaction.css";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Rupiah from "rupiah-format";

function ListTransaction() {
  const title = "Transactions";
  document.title = "WaysBook | " + title;

  let { data: transaction } = useQuery("TransactionsChace", async () => {
    const response = await API.get("/transactions");
    return response.data.trx;
  });

  return (
    <div className="ltCont">
      <Navbar />
      <div className="containerList">
        <h1>Incoming Transaction</h1>
        <div>
          <table className="tabble">
            <thead>
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Product Purchased</th>
                <th>Total Payment</th>
                <th>Status Payment</th>
              </tr>
            </thead>
            <tbody>
              {transaction?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.buyer}</td>
                    <td className="productRow">{item.product}</td>
                    <td
                      className={
                        item.status === "success"
                          ? "success"
                          : item.status === "pending"
                          ? "pending"
                          : "failed"
                      }
                    >
                      {Rupiah.convert(item.total)}
                    </td>
                    <td
                      className={
                        item.status === "success"
                          ? "success"
                          : item.status === "pending"
                          ? "pending"
                          : "failed"
                      }
                    >
                      {item.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListTransaction;
