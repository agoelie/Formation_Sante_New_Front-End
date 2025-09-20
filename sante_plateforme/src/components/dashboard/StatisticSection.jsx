// import React from "react";

// export default function HotelDashboard() {
//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
//       {/* Sidebar */}
//       <div className="hidden md:flex md:flex-shrink-0">
//         <div className="flex flex-col w-64 bg-blue-800 text-white">
//           <div className="flex items-center justify-center h-16 px-4 bg-blue-900">
//             <span className="text-xl font-semibold">Hotel Vista</span>
//           </div>
//           <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
//             <nav className="flex-1 space-y-2">
//               {[
//                 { icon: "fas fa-tachometer-alt", text: "Dashboard", active: true },
//                 { icon: "fas fa-calendar-check", text: "Bookings" },
//                 { icon: "fas fa-bed", text: "Rooms" },
//                 { icon: "fas fa-users", text: "Guests" },
//                 { icon: "fas fa-concierge-bell", text: "Services" },
//                 { icon: "fas fa-chart-bar", text: "Reports" },
//                 { icon: "fas fa-cog", text: "Settings" },
//               ].map((item, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
//                     item.active
//                       ? "bg-blue-700 text-white"
//                       : "hover:bg-blue-700 text-white"
//                   }`}
//                 >
//                   <i className={`${item.icon} mr-3`}></i>
//                   {item.text}
//                 </a>
//               ))}
//             </nav>
//           </div>
//           <div className="p-4 border-t border-blue-700">
//             <div className="flex items-center">
//               <img
//                 className="w-10 h-10 rounded-full"
//                 src="https://randomuser.me/api/portraits/women/11.jpg"
//                 alt="User"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium">Sarah Johnson</p>
//                 <p className="text-xs text-blue-200">Admin</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col flex-1 overflow-hidden">
//         {/* Top Navigation */}
//         <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
//           <div className="flex items-center">
//             <button className="md:hidden text-gray-500 focus:outline-none">
//               <i className="fas fa-bars"></i>
//             </button>
//             <h1 className="text-xl font-semibold text-gray-800 ml-4">
//               Dashboard
//             </h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="text-gray-500 focus:outline-none">
//               <i className="fas fa-bell"></i>
//             </button>
//             <button className="text-gray-500 focus:outline-none">
//               <i className="fas fa-envelope"></i>
//             </button>
//             <div className="relative">
//               <button className="flex items-center focus:outline-none">
//                 <img
//                   className="w-8 h-8 rounded-full"
//                   src="https://randomuser.me/api/portraits/women/11.jpg"
//                   alt="User"
//                 />
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Main Content Area */}
//         <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             {[
//               {
//                 icon: "fas fa-bed",
//                 bg: "bg-blue-100 text-blue-600",
//                 title: "Total Rooms",
//                 value: 120,
//               },
//               {
//                 icon: "fas fa-calendar-check",
//                 bg: "bg-green-100 text-green-600",
//                 title: "Occupied",
//                 value: 84,
//               },
//               {
//                 icon: "fas fa-calendar-day",
//                 bg: "bg-yellow-100 text-yellow-600",
//                 title: "Check-ins Today",
//                 value: 12,
//               },
//               {
//                 icon: "fas fa-calendar-times",
//                 bg: "bg-red-100 text-red-600",
//                 title: "Check-outs Today",
//                 value: 8,
//               },
//             ].map((card, i) => (
//               <div key={i} className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center">
//                   <div className={`p-3 rounded-full ${card.bg}`}>
//                     <i className={`${card.icon} text-xl`}></i>
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-sm font-medium text-gray-500">
//                       {card.title}
//                     </p>
//                     <p className="text-2xl font-semibold text-gray-800">
//                       {card.value}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Recent Bookings and Room Status */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//             {/* Recent Bookings */}
//             <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   Recent Bookings
//                 </h2>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       {["Guest", "Room", "Check-in", "Check-out", "Status"].map(
//                         (col, i) => (
//                           <th
//                             key={i}
//                             className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                           >
//                             {col}
//                           </th>
//                         )
//                       )}
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {/* Booking Rows */}
//                     <tr>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <img
//                             className="h-10 w-10 rounded-full"
//                             src="https://randomuser.me/api/portraits/men/32.jpg"
//                             alt=""
//                           />
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               John Smith
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               john@example.com
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">Deluxe Suite</div>
//                         <div className="text-sm text-gray-500">#205</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         15 May 2023
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         20 May 2023
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                           Checked In
//                         </span>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <img
//                             className="h-10 w-10 rounded-full"
//                             src="https://randomuser.me/api/portraits/women/44.jpg"
//                             alt=""
//                           />
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               Emily Johnson
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               emily@example.com
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">Executive Room</div>
//                         <div className="text-sm text-gray-500">#312</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         18 May 2023
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         22 May 2023
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                           Confirmed
//                         </span>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <img
//                             className="h-10 w-10 rounded-full"
//                             src="https://randomuser.me/api/portraits/men/75.jpg"
//                             alt=""
//                           />
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               Michael Brown
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               michael@example.com
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">Standard Room</div>
//                         <div className="text-sm text-gray-500">#108</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         20 May 2023
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         25 May 2023
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                           Pending
//                         </span>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Room Status */}
//             <div className="bg-white rounded-lg shadow overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   Room Status
//                 </h2>
//               </div>
//               <div className="p-6">
//                 {[
//                   { label: "Occupied", value: "70%", color: "bg-green-600" },
//                   { label: "Available", value: "30%", color: "bg-blue-600" },
//                   { label: "Maintenance", value: "5%", color: "bg-red-600" },
//                 ].map((status, i) => (
//                   <div key={i} className="mb-4">
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium text-gray-700">
//                         {status.label}
//                       </span>
//                       <span className="text-sm font-medium text-gray-700">
//                         {status.value}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div
//                         className={`${status.color} h-2.5 rounded-full`}
//                         style={{ width: status.value }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}

//                 <div className="mt-6">
//                   <h3 className="text-md font-medium text-gray-800 mb-3">
//                     Room Types
//                   </h3>
//                   <div className="space-y-3">
//                     {[
//                       { type: "Standard", count: "40 rooms" },
//                       { type: "Deluxe", count: "35 rooms" },
//                       { type: "Executive", count: "25 rooms" },
//                       { type: "Suite", count: "20 rooms" },
//                     ].map((room, i) => (
//                       <div key={i} className="flex justify-between">
//                         <span className="text-sm text-gray-600">{room.type}</span>
//                         <span className="text-sm font-medium">{room.count}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-white rounded-lg shadow p-6 mb-6">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">
//               Quick Actions
//             </h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {[
//                 {
//                   icon: "fas fa-plus",
//                   title: "New Booking",
//                   bg: "bg-blue-100 text-blue-600",
//                   hover: "hover:bg-blue-50 hover:border-blue-200",
//                 },
//                 {
//                   icon: "fas fa-user-check",
//                   title: "Check In",
//                   bg: "bg-green-100 text-green-600",
//                   hover: "hover:bg-green-50 hover:border-green-200",
//                 },
//                 {
//                   icon: "fas fa-user-times",
//                   title: "Check Out",
//                   bg: "bg-yellow-100 text-yellow-600",
//                   hover: "hover:bg-yellow-50 hover:border-yellow-200",
//                 },
//                 {
//                   icon: "fas fa-bell",
//                   title: "Requests",
//                   bg: "bg-purple-100 text-purple-600",
//                   hover: "hover:bg-purple-50 hover:border-purple-200",
//                 },
//               ].map((action, i) => (
//                 <button
//                   key={i}
//                   className={`flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition ${action.hover}`}
//                 >
//                   <div className={`p-3 rounded-full ${action.bg} mb-2`}>
//                     <i className={`${action.icon} text-lg`}></i>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">
//                     {action.title}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function HotelDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans w-full">
     

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <button className="md:hidden text-gray-500 focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
            <h1 className="text-xl font-semibold text-gray-800 ml-4">
              Dashboard stqtistique
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 focus:outline-none">
              <i className="fas fa-bell"></i>
            </button>
            <button className="text-gray-500 focus:outline-none">
              <i className="fas fa-envelope"></i>
            </button>
            <div className="relative">
              <button className="flex items-center focus:outline-none">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt="User"
                />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              {
                icon: "fas fa-bed",
                bg: "bg-blue-100 text-blue-600",
                title: "Nombre d'utilisateur",
                value: 12000,
              },
              {
                icon: "fas fa-calendar-check",
                bg: "bg-green-100 text-green-600",
                title: "Revenue",
                value:  84000000,
              },
              {
                icon: "fas fa-calendar-day",
                bg: "bg-yellow-100 text-yellow-600",
                title: "Check-ins Today",
                value: 12,
              },
              {
                icon: "fas fa-calendar-times",
                bg: "bg-red-100 text-red-600",
                title: "Check-outs Today",
                value: 8,
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full ${card.bg}`}>
                    <i className={`${card.icon} text-xl`}></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">
                      {card.title}
                    </p>
                    <p className="text-2xl font-semibold text-gray-800">
                      {card.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Bookings and Room Status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Recent Bookings */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">
                  Recent Bookings
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Guest", "Room", "Check-in", "Check-out", "Status"].map(
                        (col, i) => (
                          <th
                            key={i}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {col}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Booking Rows */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt=""
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              John Smith
                            </div>
                            <div className="text-sm text-gray-500">
                              john@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Deluxe Suite</div>
                        <div className="text-sm text-gray-500">#205</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        15 May 2023
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        20 May 2023
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Checked In
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt=""
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Emily Johnson
                            </div>
                            <div className="text-sm text-gray-500">
                              emily@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Executive Room</div>
                        <div className="text-sm text-gray-500">#312</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        18 May 2023
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        22 May 2023
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Confirmed
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt=""
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Michael Brown
                            </div>
                            <div className="text-sm text-gray-500">
                              michael@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Standard Room</div>
                        <div className="text-sm text-gray-500">#108</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        20 May 2023
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        25 May 2023
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Room Status */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">
                  Room Status
                </h2>
              </div>
              <div className="p-6">
                {[
                  { label: "Occupied", value: "70%", color: "bg-green-600" },
                  { label: "Available", value: "30%", color: "bg-blue-600" },
                  { label: "Maintenance", value: "5%", color: "bg-red-600" },
                ].map((status, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {status.label}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {status.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`${status.color} h-2.5 rounded-full`}
                        style={{ width: status.value }}
                      ></div>
                    </div>
                  </div>
                ))}

                <div className="mt-6">
                  <h3 className="text-md font-medium text-gray-800 mb-3">
                    Room Types
                  </h3>
                  <div className="space-y-3">
                    {[
                      { type: "Standard", count: "40 rooms" },
                      { type: "Deluxe", count: "35 rooms" },
                      { type: "Executive", count: "25 rooms" },
                      { type: "Suite", count: "20 rooms" },
                    ].map((room, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-sm text-gray-600">{room.type}</span>
                        <span className="text-sm font-medium">{room.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: "fas fa-plus",
                  title: "New Booking",
                  bg: "bg-blue-100 text-blue-600",
                  hover: "hover:bg-blue-50 hover:border-blue-200",
                },
                {
                  icon: "fas fa-user-check",
                  title: "Check In",
                  bg: "bg-green-100 text-green-600",
                  hover: "hover:bg-green-50 hover:border-green-200",
                },
                {
                  icon: "fas fa-user-times",
                  title: "Check Out",
                  bg: "bg-yellow-100 text-yellow-600",
                  hover: "hover:bg-yellow-50 hover:border-yellow-200",
                },
                {
                  icon: "fas fa-bell",
                  title: "Requests",
                  bg: "bg-purple-100 text-purple-600",
                  hover: "hover:bg-purple-50 hover:border-purple-200",
                },
              ].map((action, i) => (
                <button
                  key={i}
                  className={`flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition ${action.hover}`}
                >
                  <div className={`p-3 rounded-full ${action.bg} mb-2`}>
                    <i className={`${action.icon} text-lg`}></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {action.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
