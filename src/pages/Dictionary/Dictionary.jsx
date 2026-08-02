import { useNavigate } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import DictionaryStatCard from "../../components/Dictionary/DictionaryStatCard";
import DictionaryFilter from "../../components/Dictionary/DictionaryFilter";
import DictionaryTable from "../../components/Dictionary/DictionaryTable";
import DictionaryPagination from "../../components/Dictionary/DictionaryPagination";

import {
  FaBook,
  FaFileCirclePlus,
  FaTriangleExclamation,
  FaPlus,
} from "react-icons/fa6";


function Dictionary() {

  const navigate = useNavigate();


  return (

    <AdminLayout>


      {/* ================= HEADER ================= */}

      <div className="
        mb-8
        flex
        items-start
        justify-between
      ">


        <div>

          <h1 className="
            text-5xl
            font-bold
            text-[#1557C0]
          ">
            Quản lý Từ điển
          </h1>


          <p className="
            mt-2
            text-gray-500
          ">
            Theo dõi và cập nhật cơ sở dữ liệu từ vựng hệ thống.
          </p>


        </div>




        {/* BUTTON ADD WORD */}

        <button

          onClick={() => navigate("/dictionary/new")}

          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-[#4A90E2]
            px-6
            py-3
            font-semibold
            text-white
            shadow-md
            hover:bg-[#3B82F6]
            transition
          "

        >

          <FaPlus />

          Thêm từ mới


        </button>


      </div>





      {/* ================= STATISTIC ================= */}


      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">


        <DictionaryStatCard

          title="Tổng số từ"

          value="15,420"

          sub="+12%"

          icon={<FaBook />}

          color="blue"

        />



        <DictionaryStatCard

          title="Từ mới trong tháng"

          value="342"

          sub="+84"

          icon={<FaFileCirclePlus />}

          color="green"

        />



        <DictionaryStatCard

          title="Báo cáo lỗi chưa xử lý"

          value="12"

          sub="Cần xử lý"

          icon={<FaTriangleExclamation />}

          color="yellow"

        />


      </div>





      {/* ================= FILTER ================= */}


      <div className="mt-8">

        <DictionaryFilter />

      </div>





      {/* ================= TABLE ================= */}


      <div className="mt-6">

        <DictionaryTable />

      </div>





      {/* ================= PAGINATION ================= */}


      <div className="mt-4">

        <DictionaryPagination />

      </div>



    </AdminLayout>

  );

}


export default Dictionary;