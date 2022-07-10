import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../style/ListTransaction.css";

function ListTransaction() {
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
              <tr>
                <td>1</td>
                <td>Nurfajri</td>
                <td>Novel Bagus</td>
                <td className="success">Rp.59.000</td>
                <td className="success">Approve</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Kholish</td>
                <td>Novel Bagus</td>
                <td className="pending">Rp.60.000</td>
                <td className="pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListTransaction;
