import AdminLayout from "../../layouts/AdminLayout";

import UserStatCard from "../../components/User/UserStatCard";
import UserToolbar from "../../components/User/UserToolbar";
import UserTable from "../../components/User/UserTable";
import Pagination from "../../components/User/Pagination";

import {
  FaUsers,
  FaUserCheck,
  FaUserPlus,
} from "react-icons/fa";

function Users() {
  return (
    <AdminLayout>

      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1557C0]">
            Quản lý người dùng
          </h1>

          <p className="mt-2 text-gray-500 text-lg">
            Theo dõi và quản lý tài khoản người dùng trên hệ thống
          </p>
        </div>

      </div>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <UserStatCard
          title="Tổng số người dùng"
          value="12,450"
          sub="+5.2% so với tháng trước"
          icon={<FaUsers />}
          color="blue"
        />

        <UserStatCard
          title="Người dùng hoạt động"
          value="8,920"
          sub="Trong 30 ngày qua"
          icon={<FaUserCheck />}
          color="green"
        />

        <UserStatCard
          title="Người dùng mới"
          value="145"
          sub="+12 từ hôm qua"
          icon={<FaUserPlus />}
          color="yellow"
        />

      </div>

      {/* Toolbar */}
      <div className="mt-8">
        <UserToolbar />
      </div>

      {/* User Table */}
      <div className="mt-6">
        <UserTable />
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>

    </AdminLayout>
  );
}

export default Users;