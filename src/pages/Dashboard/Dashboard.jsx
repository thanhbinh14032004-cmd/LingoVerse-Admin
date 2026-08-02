import AdminLayout from "../../layouts/AdminLayout";

import StatCard from "../../components/Stats/StatCard";
import RevenueChart from "../../components/Chart/RevenueChart";
import PieChartCard from "../../components/Chart/PieChartCard";
import ScoreCard from "../../components/Score/ScoreCard";
import Activity from "../../components/Activity/Activity";
import TopCourses from "../../components/Card/TopCourses";
import RecentUsers from "../../components/Card/RecentUsers";

import {
  FaMoneyBillWave,
  FaUserPlus,
  FaCheckCircle,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

function Dashboard() {
  return (
    <AdminLayout>

      {/* ================= Header ================= */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        <div>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#1557C0]">
            Tổng quan hệ thống
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Theo dõi các chỉ số quan trọng của toàn bộ nền tảng
          </p>

        </div>

        <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm hover:shadow-md duration-200">

          <FaCalendarAlt className="text-gray-500" />

          <span className="font-semibold">
            30 Ngày Qua
          </span>

        </button>

      </div>

      {/* ================= Statistics ================= */}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Tổng doanh thu"
          value="₫1.2B"
          change="+12% so với tháng trước"
          icon={<FaMoneyBillWave className="text-blue-600" />}
          iconBg="bg-blue-100"
        />

        <StatCard
          title="Người dùng mới"
          value="4,892"
          change="+8% so với tháng trước"
          icon={<FaUserPlus className="text-blue-600" />}
          iconBg="bg-blue-100"
        />

        <StatCard
          title="Tỷ lệ hoàn thành"
          value="68.4%"
          change="+12%"
          icon={<FaCheckCircle className="text-green-600" />}
          iconBg="bg-green-100"
        />

        <StatCard
          title="Khóa học"
          value="1,245"
          change="+24 khóa học"
          icon={<FaBookOpen className="text-yellow-500" />}
          iconBg="bg-yellow-100"
        />

      </div>

      {/* ================= Revenue ================= */}

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <RevenueChart />
        </div>

        <div className="xl:col-span-4">
          <ScoreCard />
        </div>

      </div>

      {/* ================= Activity ================= */}

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <Activity />
        </div>

        <div className="xl:col-span-4">
          <TopCourses />
        </div>

      </div>

      {/* ================= Users ================= */}

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-6">
          <RecentUsers />
        </div>

        <div className="xl:col-span-6">
          <PieChartCard />
        </div>

      </div>

    </AdminLayout>
  );
}

export default Dashboard;