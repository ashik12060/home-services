import React, { useEffect, useState } from "react";
import axiosInstance from "../pages/axiosInstance";
import OrderSingle from "./OrderSingle";

const Dashboard = ({totalSales}) => {

    const [orders, setOrders] = useState([]);
  // const [totalSales, setTotalSales] = useState(0); // Add this line

console.log()
   useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await axiosInstance.get(
            `${process.env.REACT_APP_API_URL}/api/orders`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
          );
          setOrders(response.data.orders);
          // console.log(response.data.orders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };
  
      fetchOrders();
    }, []);
  

    
  return (
    <div className="flex-1 p-8 bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add New Item
          </button>
          <div className="relative">
            <button className="bg-gray-200 text-gray-800 p-2 rounded-full">
              <i className="fas fa-bell"></i> {/* Bell Icon for Notifications */}
            </button>
            {/* Notifications dropdown (optional) */}
          </div>
        </div>
      </header>

      {/* <ShopProductManager /> */}

      {/* Main Dashboard Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Sales</h2>
          <p className="text-3xl font-bold text-blue-600">${totalSales }</p>
          
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
          <p className="text-3xl font-bold text-green-600">432</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Users</h2>
          <p className="text-3xl font-bold text-yellow-600">823</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Revenue</h2>
          <p className="text-3xl font-bold text-purple-600">$15,000</p>
        </div>
      </section>

      {/* <OrderSingle setTotalSales={setTotalSales} /> */}

      {/* Recent Orders Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Orders</h2>
        <table className="w-full text-sm text-gray-600">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Total Price</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">#1234</td>
              <td className="py-3 px-4">John Doe</td>
              <td className="py-3 px-4">$99.99</td>
              <td className="py-3 px-4 text-green-600">Completed</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">#1235</td>
              <td className="py-3 px-4">Jane Smith</td>
              <td className="py-3 px-4">$150.00</td>
              <td className="py-3 px-4 text-yellow-600">Pending</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">#1236</td>
              <td className="py-3 px-4">Mike Lee</td>
              <td className="py-3 px-4">$45.00</td>
              <td className="py-3 px-4 text-red-600">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Recent Products Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Products</h2>
        <table className="w-full text-sm text-gray-600">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Product Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">Wireless Headphones</td>
              <td className="py-3 px-4">Electronics</td>
              <td className="py-3 px-4">$99.99</td>
              <td className="py-3 px-4">120</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Leather Jacket</td>
              <td className="py-3 px-4">Apparel</td>
              <td className="py-3 px-4">$199.99</td>
              <td className="py-3 px-4">50</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Smart Watch</td>
              <td className="py-3 px-4">Accessories</td>
              <td className="py-3 px-4">$150.00</td>
              <td className="py-3 px-4">30</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
