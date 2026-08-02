import AdminLayout from "../../layouts/AdminLayout";

import ExamStatCard from "../../Exam/ExamStatCard";
import ExamToolbar from "../../Exam/ExamToolbar";
import ExamTable from "../../Exam/ExamTable";
import RankingCard from "../../Exam/RankingCard";
import Pagination from "../../Exam/Pagination";

import {
  FaFileAlt,
  FaUsers,
  FaChartLine,
  FaPlus,
} from "react-icons/fa";


function Exams() {

  return (
    <AdminLayout>

      {/* ================= HEADER ================= */}

      <div className="mb-8 flex items-start justify-between">

        <div>

          <h1 className="text-5xl font-bold text-[#1557C0]">
            Quản lý bài thi
          </h1>

          <p className="mt-2 text-gray-500">
            Quản lý ngân hàng đề thi và kết quả học viên.
          </p>

        </div>


        <button
          className="
          flex items-center gap-3
          rounded-xl
          bg-[#3B82F6]
          px-6 py-3
          text-white
          font-semibold
          shadow-md
          hover:bg-blue-700
          transition
          "
        >

          <FaPlus />

          Thêm bài thi mới

        </button>


      </div>



      {/* ================= STATISTIC ================= */}


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        <ExamStatCard

          title="Tổng số bài thi"

          value="1,248"

          sub="+12% so với tháng trước"

          icon={<FaFileAlt />}

          color="blue"

        />



        <ExamStatCard

          title="Thí sinh hôm nay"

          value="4,821"

          sub="+8% so với hôm qua"

          icon={<FaUsers />}

          color="green"

        />



        <ExamStatCard

          title="Điểm trung bình"

          value="7.4/10"

          sub="Ổn định"

          icon={<FaChartLine />}

          color="blue"

        />


      </div>




      {/* ================= TOOLBAR ================= */}


      <div className="mt-8">

        <ExamToolbar />

      </div>





      {/* ================= MAIN CONTENT ================= */}


      <div className="mt-6 grid grid-cols-12 gap-6">


        {/* TABLE */}

        <div className="col-span-9">


          <ExamTable />


          <div className="mt-4">

            <Pagination />

          </div>


        </div>





        {/* RANKING */}


        <div className="col-span-3">


          <RankingCard />


        </div>



      </div>



    </AdminLayout>
  );
}


export default Exams;