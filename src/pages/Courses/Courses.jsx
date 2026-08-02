import AdminLayout from "../../layouts/AdminLayout";

import CourseStatCard from "../../components/Course/CourseStatCard";
import CourseToolbar from "../../components/Course/CourseToolbar";
import CourseTable from "../../components/Course/CourseTable";
import Pagination from "../../components/Course/Pagination";

import {
  FaBook,
  FaBookOpen,
  FaGear,
} from "react-icons/fa6";

function Courses() {
  return (
    <AdminLayout>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-5xl font-bold text-[#1557C0]">
          Quản lý Bài học
        </h1>

        <p className="mt-2 text-gray-500">
          Tổng quan và quản lý nội dung học tập trên nền tảng.
        </p>

      </div>

      {/* Statistic */}

      <div className="grid grid-cols-3 gap-6">

        <CourseStatCard
          title="Tổng số khóa học"
          value="48"
          icon={<FaBook />}
          color="blue"
          sub="+12%"
        />

        <CourseStatCard
          title="Tổng số bài học"
          value="1,240"
          icon={<FaBookOpen />}
          color="orange"
        />

        <CourseStatCard
          title="Bài học mới trong tháng"
          value="36"
          icon={<FaGear />}
          color="green"
        />

      </div>

      {/* Toolbar */}

      <div className="mt-8">
        <CourseToolbar />
      </div>

      {/* Table */}

      <div className="mt-6">

        <CourseTable />

        <Pagination />

      </div>

    </AdminLayout>
  );
}

export default Courses;